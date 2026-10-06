/**
 * Java & Spring Mastery Course Tracker Engine
 * Handles LinkedIn Learning style 3-state checkbox tracking,
 * count & duration aggregation, backup/restore, and interactive UI updates.
 */

(function () {
  const STORAGE_KEY = "java_course_tracker_v1";

  // State structure
  let state = {
    version: 1,
    progress: {}, // [videoKey]: { status: 'not_started' | 'in_progress' | 'completed', updatedAt: number }
    activeVideoKey: null
  };

  // Helper: Format seconds into readable string (e.g. 2h 15m or 45m 12s)
  function formatSeconds(sec) {
    if (!sec || isNaN(sec)) return "0m";
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;
    if (h > 0) {
      return m > 0 ? `${h}h ${m}m` : `${h}h`;
    }
    if (m > 0) {
      return `${m}m`;
    }
    return `${s}s`;
  }

  // Helper: Format seconds into padded 00m00s / HHhMMmSSs string
  function formatMMSS(sec) {
    if (!sec || isNaN(sec) || sec <= 0) return "00m00s";
    const totalSec = Math.round(sec);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60);
    const s = totalSec % 60;
    if (h > 0) {
      return `${h}h${String(m).padStart(2, '0')}m${String(s).padStart(2, '0')}s`;
    }
    return `${String(m).padStart(2, '0')}m${String(s).padStart(2, '0')}s`;
  }

  // Get aggregated stats for a specific chapter
  function getChapterStats(chapId) {
    const courseData = window.COURSE_DATA;
    if (!courseData || !courseData.sections) {
      return {
        totalVideos: 0,
        completedVideos: 0,
        inProgressVideos: 0,
        totalDuration: 0,
        completedDuration: 0,
        inProgressDuration: 0,
        pctCount: 0,
        pctDuration: 0
      };
    }

    let totalVideos = 0;
    let completedVideos = 0;
    let inProgressVideos = 0;
    let totalDuration = 0;
    let completedDuration = 0;
    let inProgressDuration = 0;

    for (const sec of courseData.sections) {
      const ch = sec.chapters.find(c => c.id === chapId || c.number === chapId || String(c.id) === String(chapId));
      if (ch) {
        for (const v of ch.videos) {
          totalVideos++;
          totalDuration += v.durationSeconds || 0;
          const status = getVideoStatus(v.id);
          if (status === "completed") {
            completedVideos++;
            completedDuration += v.durationSeconds || 0;
          } else if (status === "in_progress") {
            inProgressVideos++;
            inProgressDuration += v.durationSeconds || 0;
          }
        }
        break;
      }
    }

    const pctCount = totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;
    const pctDuration = totalDuration > 0 ? Math.round((completedDuration / totalDuration) * 100) : 0;

    return {
      totalVideos,
      completedVideos,
      inProgressVideos,
      totalDuration,
      completedDuration,
      inProgressDuration,
      pctCount,
      pctDuration
    };
  }

  // Get aggregated stats for a specific Part (1, 2, or 3)
  function getPartStats(partNum) {
    const courseData = window.COURSE_DATA;
    if (!courseData || !courseData.sections) {
      return { totalVideos: 0, completedVideos: 0, totalDuration: 0, completedDuration: 0, pctCount: 0 };
    }
    let totalVideos = 0;
    let completedVideos = 0;
    let totalDuration = 0;
    let completedDuration = 0;

    const sectionsInPart = courseData.sections.filter(s => s.part === Number(partNum));
    for (const sec of sectionsInPart) {
      for (const ch of sec.chapters) {
        for (const v of ch.videos) {
          totalVideos++;
          totalDuration += v.durationSeconds || 0;
          const status = getVideoStatus(v.id);
          if (status === "completed") {
            completedVideos++;
            completedDuration += v.durationSeconds || 0;
          }
        }
      }
    }
    const pctCount = totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;
    return { totalVideos, completedVideos, totalDuration, completedDuration, pctCount };
  }

  // Handle sidebar navigation: auto-open details, glow pulse, scroll, and active indicator
  function handleSidebarNavigation(targetId) {
    if (!targetId) return;
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    // 1. If target is inside collapsed details (e.g. chapter card), expand them
    let parent = targetEl.parentElement;
    while (parent) {
      if (parent.tagName === "DETAILS" && !parent.open) {
        parent.open = true;
      }
      parent = parent.parentElement;
    }

    // 2. Smoothly scroll into center
    targetEl.scrollIntoView({ behavior: "smooth", block: "center" });

    // 3. Apply glow highlight with animation trigger
    document.querySelectorAll(".glow-highlight").forEach(el => {
      el.classList.remove("glow-highlight");
    });
    void targetEl.offsetWidth; // trigger reflow
    targetEl.classList.add("glow-highlight");
    setTimeout(() => {
      targetEl.classList.remove("glow-highlight");
    }, 2400);

    // 4. Update active states in sidebar
    const cleanId = targetId.startsWith("video-") ? targetId.replace("video-", "") : targetId;
    updateActiveSidebarItem(cleanId);
  }

  // Update active sidebar link, chapter header, and parent details
  function updateActiveSidebarItem(cleanVideoId) {
    if (!cleanVideoId) return;

    // Remove active styles from links and chapter headers
    document.querySelectorAll(".sidebar-video-link").forEach(link => {
      link.classList.remove("active-sidebar-item");
    });
    document.querySelectorAll(".chapter-summary").forEach(sum => {
      sum.classList.remove("active-chapter-header");
    });

    const activeLink = document.querySelector(`.sidebar-video-link[data-sidebar-video-id="${cleanVideoId}"]`);
    if (activeLink) {
      activeLink.classList.add("active-sidebar-item");

      // Highlight and expand parent chapter details
      const parentChap = activeLink.closest(".chapter-details");
      if (parentChap) {
        if (!parentChap.open) parentChap.open = true;
        const sum = parentChap.querySelector(".chapter-summary");
        if (sum) sum.classList.add("active-chapter-header");
      }

      // Ensure parent section details is open
      const parentSec = activeLink.closest("aside#course-sidebar details");
      if (parentSec && !parentSec.open) {
        parentSec.open = true;
      }

      // Scroll sidebar container to keep active item in view if needed
      const sidebarNav = document.getElementById("sidebar-nav-container");
      if (sidebarNav) {
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = sidebarNav.getBoundingClientRect();
        if (linkRect.top < navRect.top || linkRect.bottom > navRect.bottom) {
          activeLink.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    }
  }

  // Load from localStorage
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.progress) {
          state = { ...state, ...parsed };
        }
      }
    } catch (e) {
      console.warn("Could not load course progress from localStorage", e);
    }
  }

  // Save to localStorage
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Could not save course progress to localStorage", e);
    }
  }

  // Get status for a video key
  function getVideoStatus(key) {
    if (!state.progress[key]) return "not_started";
    return state.progress[key].status || "not_started";
  }

  // Set status for a video key
  function setVideoStatus(key, newStatus) {
    if (!state.progress[key]) {
      state.progress[key] = { status: newStatus, updatedAt: Date.now() };
    } else {
      state.progress[key].status = newStatus;
      state.progress[key].updatedAt = Date.now();
    }
    if (newStatus === "in_progress") {
      state.activeVideoKey = key;
    } else if (state.activeVideoKey === key && newStatus !== "in_progress") {
      state.activeVideoKey = null;
    }
    saveState();
    syncUI();
    window.dispatchEvent(new CustomEvent("course-tracker-updated", { detail: { key, status: newStatus } }));
  }

  // Toggle status cycle: not_started -> in_progress -> completed -> not_started
  function cycleVideoStatus(key) {
    const current = getVideoStatus(key);
    let next = "not_started";
    if (current === "not_started") next = "in_progress";
    else if (current === "in_progress") next = "completed";
    else if (current === "completed") next = "not_started";
    setVideoStatus(key, next);
  }

  // Calculate statistics across all sections or a single section
  function getStats(targetSectionId) {
    const courseData = window.COURSE_DATA;
    if (!courseData || !courseData.sections) {
      return {
        totalVideos: 0,
        completedVideos: 0,
        inProgressVideos: 0,
        totalDuration: 0,
        completedDuration: 0,
        inProgressDuration: 0,
        pctCount: 0,
        pctDuration: 0
      };
    }

    let totalVideos = 0;
    let completedVideos = 0;
    let inProgressVideos = 0;
    let totalDuration = 0;
    let completedDuration = 0;
    let inProgressDuration = 0;

    const sectionsToCount = targetSectionId
      ? courseData.sections.filter(s => s.id === targetSectionId || s.slug === targetSectionId)
      : courseData.sections;

    for (const sec of sectionsToCount) {
      for (const ch of sec.chapters) {
        for (const v of ch.videos) {
          totalVideos++;
          totalDuration += v.durationSeconds || 0;
          const status = getVideoStatus(v.id);
          if (status === "completed") {
            completedVideos++;
            completedDuration += v.durationSeconds || 0;
          } else if (status === "in_progress") {
            inProgressVideos++;
            inProgressDuration += v.durationSeconds || 0;
          }
        }
      }
    }

    const pctCount = totalVideos > 0 ? Math.round((completedVideos / totalVideos) * 100) : 0;
    const pctDuration = totalDuration > 0 ? Math.round((completedDuration / totalDuration) * 100) : 0;

    return {
      totalVideos,
      completedVideos,
      inProgressVideos,
      totalDuration,
      completedDuration,
      inProgressDuration,
      pctCount,
      pctDuration
    };
  }

  // Sync all DOM elements
  function syncUI() {
    const globalStats = getStats();

    // 1. Update Global Header Stats
    const elGlobalVidCount = document.getElementById("global-video-count");
    if (elGlobalVidCount) elGlobalVidCount.textContent = `${globalStats.completedVideos}/${globalStats.totalVideos}`;

    const elGlobalTime = document.getElementById("global-time-count");
    if (elGlobalTime) {
      elGlobalTime.textContent = `${formatSeconds(globalStats.completedDuration)} / ${formatSeconds(globalStats.totalDuration)}`;
    }

    const elGlobalInProgTime = document.getElementById("global-inprogress-time");
    if (elGlobalInProgTime) {
      if (globalStats.inProgressVideos > 0) {
        elGlobalInProgTime.textContent = `${formatSeconds(globalStats.inProgressDuration)} in progress`;
        elGlobalInProgTime.classList.remove("hidden");
      } else {
        elGlobalInProgTime.classList.add("hidden");
      }
    }

    const elGlobalBar = document.getElementById("global-progress-bar");
    if (elGlobalBar) elGlobalBar.style.width = `${globalStats.pctDuration}%`;

    const elGlobalPct = document.getElementById("global-progress-pct");
    if (elGlobalPct) elGlobalPct.textContent = `${globalStats.pctDuration}%`;

    // 1b. Update Mobile Sidebar Progress Card (when present)
    const elSidebarVidCount = document.querySelector("[data-sidebar-video-count]");
    if (elSidebarVidCount) elSidebarVidCount.textContent = `${globalStats.completedVideos}/${globalStats.totalVideos} videos`;

    const elSidebarTimeCount = document.querySelector("[data-sidebar-time-count]");
    if (elSidebarTimeCount) {
      elSidebarTimeCount.textContent = `${formatSeconds(globalStats.completedDuration)} / ${formatSeconds(globalStats.totalDuration)}`;
    }

    const elSidebarBar = document.querySelector("[data-sidebar-progress-bar]");
    if (elSidebarBar) elSidebarBar.style.width = `${globalStats.pctDuration}%`;

    const elSidebarPct = document.querySelector("[data-sidebar-progress-pct]");
    if (elSidebarPct) elSidebarPct.textContent = `${globalStats.pctDuration}%`;

    const elSidebarInProgCont = document.querySelector("[data-sidebar-inprogress-container]");
    const elSidebarInProgTime = document.querySelector("[data-sidebar-inprogress-time]");
    if (elSidebarInProgCont && elSidebarInProgTime) {
      if (globalStats.inProgressVideos > 0) {
        elSidebarInProgTime.textContent = formatSeconds(globalStats.inProgressDuration);
        elSidebarInProgCont.classList.remove("hidden");
      } else {
        elSidebarInProgCont.classList.add("hidden");
      }
    }

    // 2. Update Dashboard Bento Grid Cards (if on homepage)
    const elDashCompVids = document.getElementById("dash-completed-videos");
    if (elDashCompVids) elDashCompVids.textContent = globalStats.completedVideos;

    const elDashInProgVids = document.getElementById("dash-inprogress-videos");
    if (elDashInProgVids) elDashInProgVids.textContent = globalStats.inProgressVideos;

    const elDashCompTime = document.getElementById("dash-completed-time");
    if (elDashCompTime) elDashCompTime.textContent = formatSeconds(globalStats.completedDuration);

    const elDashInProgTime = document.getElementById("dash-inprogress-time");
    if (elDashInProgTime) elDashInProgTime.textContent = formatSeconds(globalStats.inProgressDuration);

    const elDashPct = document.getElementById("dash-progress-pct");
    if (elDashPct) elDashPct.textContent = `${globalStats.pctDuration}%`;

    // 3. Update Checkboxes on Page & Sidebar
    document.querySelectorAll(".ll-checkbox[data-video-key]").forEach(cb => {
      const key = cb.getAttribute("data-video-key");
      const status = getVideoStatus(key);
      cb.setAttribute("data-state", status);
      cb.setAttribute("aria-label", `Video status: ${status.replace("_", " ")}`);

      // Update parent video card if present
      const card = cb.closest(".video-card");
      if (card) {
        card.setAttribute("data-card-state", status);
        const actionBtn = card.querySelector(".btn-mark-complete");
        if (actionBtn) {
          if (status === "completed") {
            actionBtn.innerHTML = `
              <svg class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Completed</span>
            `;
            actionBtn.className = "btn-mark-complete inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 transition-colors cursor-pointer";
          } else if (status === "in_progress") {
            actionBtn.innerHTML = `
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              <span>Mark as Complete</span>
            `;
            actionBtn.className = "btn-mark-complete inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300 dark:border-amber-800 hover:bg-amber-100 dark:hover:bg-amber-900/60 transition-colors cursor-pointer";
          } else {
            actionBtn.innerHTML = `
              <svg class="w-3.5 h-3.5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              <span>Mark as Complete</span>
            `;
            actionBtn.className = "btn-mark-complete inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-neutral-100 hover:bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 transition-colors cursor-pointer";
          }
        }
      }
    });

    // 4. Update Per-Section Progress Badges on Sidebar and Pages
    document.querySelectorAll("[data-section-stats-id]").forEach(badge => {
      const secId = badge.getAttribute("data-section-stats-id");
      const secStats = getStats(secId);
      const mode = badge.getAttribute("data-stats-mode") || "both"; // 'count', 'time', or 'both'
      if (mode === "count") {
        badge.textContent = `${secStats.completedVideos}/${secStats.totalVideos}`;
      } else if (mode === "time") {
        badge.textContent = `${formatSeconds(secStats.completedDuration)} / ${formatSeconds(secStats.totalDuration)}`;
      } else {
        badge.textContent = `${secStats.completedVideos}/${secStats.totalVideos} videos • ${formatSeconds(secStats.completedDuration)}`;
      }
    });

    // Update Section Progress Bars
    document.querySelectorAll("[data-section-progress-bar]").forEach(bar => {
      const secId = bar.getAttribute("data-section-progress-bar");
      const secStats = getStats(secId);
      bar.style.width = `${secStats.pctDuration}%`;
    });

    // 5. Update Chapter Cumulative Time Badges (Sidebar & Main Cards)
    document.querySelectorAll("[data-chapter-time-id]").forEach(el => {
      const chId = el.getAttribute("data-chapter-time-id");
      const chStats = getChapterStats(chId);
      const isSidebar = el.closest("#course-sidebar") !== null;
      if (isSidebar) {
        el.textContent = `${formatMMSS(chStats.completedDuration)}/${formatMMSS(chStats.totalDuration)}`;
      } else {
        el.textContent = `${formatMMSS(chStats.completedDuration)} / ${formatMMSS(chStats.totalDuration)}`;
      }
    });

    // Update Chapter Lesson Count Badges (if present)
    document.querySelectorAll("[data-chapter-count-id]").forEach(el => {
      const chId = el.getAttribute("data-chapter-count-id");
      const chStats = getChapterStats(chId);
      el.textContent = `${chStats.completedVideos}/${chStats.totalVideos}`;
    });

    // 6. Update Section Total Time and Summary Badges
    document.querySelectorAll("[data-section-time-id]").forEach(el => {
      const secId = el.getAttribute("data-section-time-id");
      const secStats = getStats(secId);
      el.textContent = `${formatMMSS(secStats.completedDuration)} / ${formatMMSS(secStats.totalDuration)}`;
    });

    document.querySelectorAll("[data-section-time-summary-id]").forEach(el => {
      const secId = el.getAttribute("data-section-time-summary-id");
      const secStats = getStats(secId);
      el.textContent = `${formatMMSS(secStats.completedDuration)} / ${formatMMSS(secStats.totalDuration)}`;
    });

    // Update Section Percentage Displays
    document.querySelectorAll("[data-section-pct-id]").forEach(el => {
      const secId = el.getAttribute("data-section-pct-id");
      const secStats = getStats(secId);
      el.textContent = `${secStats.pctDuration}%`;
    });
    document.querySelectorAll("[data-section-pct-display-id]").forEach(el => {
      const secId = el.getAttribute("data-section-pct-display-id");
      const secStats = getStats(secId);
      el.textContent = `(${secStats.pctDuration}%)`;
    });

    // Update Section In-Progress Displays
    document.querySelectorAll("[data-section-inprogress-id]").forEach(el => {
      const secId = el.getAttribute("data-section-inprogress-id");
      const secStats = getStats(secId);
      el.textContent = formatMMSS(secStats.inProgressDuration);
      const cont = el.closest("[data-section-inprogress-container]");
      if (cont) {
        if (secStats.inProgressVideos > 0) {
          cont.classList.remove("hidden");
          cont.classList.add("inline-flex");
        } else {
          cont.classList.add("hidden");
          cont.classList.remove("inline-flex");
        }
      }
    });

    // 7. Update Part 1/2/3 Analytics on Homepage
    document.querySelectorAll("[data-part-stats-id]").forEach(el => {
      const partNum = el.getAttribute("data-part-stats-id");
      const partStats = getPartStats(partNum);
      el.textContent = `${partStats.completedVideos}/${partStats.totalVideos} Videos • ${formatSeconds(partStats.completedDuration)} / ${formatSeconds(partStats.totalDuration)}`;
    });
  }

  // Backup & Restore
  function exportProgressJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const dlAnchor = document.createElement("a");
    const dateStr = new Date().toISOString().slice(0, 10);
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `java-spring-mastery-progress-${dateStr}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  }

  function importProgressJSON(file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      try {
        const parsed = JSON.parse(e.target.result);
        if (parsed && typeof parsed.progress === "object") {
          state = { ...state, ...parsed };
          saveState();
          syncUI();
          alert("Progress successfully restored!");
          closeModal("backup-modal");
        } else {
          alert("Invalid backup file format.");
        }
      } catch (err) {
        alert("Failed to parse JSON file.");
      }
    };
    reader.readAsText(file);
  }

  function resetAllProgress() {
    if (confirm("Are you sure you want to reset all course progress? This action cannot be undone.")) {
      state.progress = {};
      state.activeVideoKey = null;
      saveState();
      syncUI();
      closeModal("backup-modal");
    }
  }

  // Theme Management
  function initTheme() {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  // Modal helpers
  function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("hidden");
  }

  function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("hidden");
  }

  // Initialize event listeners
  document.addEventListener("DOMContentLoaded", () => {
    loadState();
    initTheme();
    syncUI();

    // Restore desktop collapsible sidebar preference
    try {
      const isSidebarCollapsed = localStorage.getItem("sidebar-collapsed") === "true";
      if (isSidebarCollapsed) {
        document.body.classList.add("sidebar-collapsed");
      }
    } catch (e) {}

    // Checkbox click delegation
    document.addEventListener("click", e => {
      const cb = e.target.closest(".ll-checkbox[data-video-key]");
      if (cb) {
        e.preventDefault();
        e.stopPropagation();
        const key = cb.getAttribute("data-video-key");
        cycleVideoStatus(key);
        return;
      }

      // Mark as complete button
      const markBtn = e.target.closest(".btn-mark-complete");
      if (markBtn) {
        e.preventDefault();
        e.stopPropagation();
        const card = markBtn.closest(".video-card");
        if (card) {
          const key = card.getAttribute("data-video-key");
          const current = getVideoStatus(key);
          if (current === "completed") {
            setVideoStatus(key, "not_started");
          } else {
            setVideoStatus(key, "completed");
          }
        }
        return;
      }

      // Mark & Next button: complete current video and scroll to next video
      const markNextBtn = e.target.closest(".btn-mark-and-next");
      if (markNextBtn) {
        e.preventDefault();
        e.stopPropagation();
        const card = markNextBtn.closest(".video-card");
        if (card) {
          const key = card.getAttribute("data-video-key");
          setVideoStatus(key, "completed");

          // Find next card on page
          const allCards = Array.from(document.querySelectorAll(".video-card"));
          const currentIndex = allCards.indexOf(card);
          if (currentIndex >= 0 && currentIndex < allCards.length - 1) {
            const nextCard = allCards[currentIndex + 1];
            nextCard.scrollIntoView({ behavior: "smooth", block: "center" });
            const nextKey = nextCard.getAttribute("data-video-key");
            if (getVideoStatus(nextKey) === "not_started") {
              setVideoStatus(nextKey, "in_progress");
            }
          }
        }
        return;
      }

      // Video link click: auto mark in-progress if not started
      const videoLink = e.target.closest("a[data-video-link]");
      if (videoLink) {
        const key = videoLink.getAttribute("data-video-key");
        if (getVideoStatus(key) === "not_started") {
          setVideoStatus(key, "in_progress");
        }
      }

      // Sidebar video link click delegation: smooth scroll, glow highlight, and active state
      const sidebarVidLink = e.target.closest(".sidebar-video-link");
      if (sidebarVidLink) {
        const href = sidebarVidLink.getAttribute("href");
        if (href && href.includes("#video-")) {
          const hashIndex = href.indexOf("#");
          const hashPart = href.substring(hashIndex);
          const targetId = hashPart.replace("#", "");
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            e.preventDefault();
            handleSidebarNavigation(targetId);
            try {
              history.pushState(null, "", hashPart);
            } catch (err) {}
            if (window.innerWidth < 1024) {
              const sidebar = document.getElementById("course-sidebar");
              const backdrop = document.getElementById("sidebar-backdrop");
              if (sidebar) sidebar.classList.add("-translate-x-full");
              if (backdrop) backdrop.classList.add("hidden");
            }
            return;
          }
        }
      }

      // Auto-close mobile sidebar when clicking internal sidebar navigation link
      const sidebarNavLink = e.target.closest("#course-sidebar a");
      if (sidebarNavLink && window.innerWidth < 1024) {
        const sidebar = document.getElementById("course-sidebar");
        const backdrop = document.getElementById("sidebar-backdrop");
        if (sidebar) sidebar.classList.add("-translate-x-full");
        if (backdrop) backdrop.classList.add("hidden");
      }

      // Mark entire section complete
      const markSecCompleteBtn = e.target.closest("[data-action='complete-section']");
      if (markSecCompleteBtn) {
        const secId = markSecCompleteBtn.getAttribute("data-section-id");
        if (confirm("Mark all videos in this section as completed?")) {
          const courseData = window.COURSE_DATA;
          const sec = courseData?.sections?.find(s => s.id === secId || s.slug === secId);
          if (sec) {
            for (const ch of sec.chapters) {
              for (const v of ch.videos) {
                state.progress[v.id] = { status: "completed", updatedAt: Date.now() };
              }
            }
            saveState();
            syncUI();
          }
        }
      }

      // Reset section
      const resetSecBtn = e.target.closest("[data-action='reset-section']");
      if (resetSecBtn) {
        const secId = resetSecBtn.getAttribute("data-section-id");
        if (confirm("Reset progress for this section?")) {
          const courseData = window.COURSE_DATA;
          const sec = courseData?.sections?.find(s => s.id === secId || s.slug === secId);
          if (sec) {
            for (const ch of sec.chapters) {
              for (const v of ch.videos) {
                delete state.progress[v.id];
              }
            }
            saveState();
            syncUI();
          }
        }
      }

      // Theme toggle
      if (e.target.closest("#theme-toggle-btn")) {
        toggleTheme();
      }

      // Backup modal trigger
      if (e.target.closest("#backup-modal-btn")) {
        openModal("backup-modal");
      }

      // Modal close triggers
      if (e.target.closest("[data-close-modal]")) {
        const modal = e.target.closest(".modal-backdrop");
        if (modal) modal.classList.add("hidden");
      }

      // Search modal triggers (Desktop & Mobile)
      if (e.target.closest("#search-trigger-btn") || e.target.closest("#mobile-search-trigger")) {
        openModal("search-modal");
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.focus();
        return;
      }

      // Desktop Collapsible Sidebar Toggle Pill (Like Astro site)
      const sidebarToggleBtn = e.target.closest("#sidebar-toggle-btn");
      if (sidebarToggleBtn) {
        e.preventDefault();
        const isCollapsed = document.body.classList.toggle("sidebar-collapsed");
        try {
          localStorage.setItem("sidebar-collapsed", isCollapsed ? "true" : "false");
        } catch (err) {}
        return;
      }

      // Expand all / Collapse all sections in sidebar
      const toggleAllBtn = e.target.closest("#toggle-all-sections-btn");
      if (toggleAllBtn) {
        e.preventDefault();
        const allDetails = document.querySelectorAll("#course-sidebar details");
        const anyClosed = Array.from(allDetails).some(d => !d.open);
        allDetails.forEach(d => { d.open = anyClosed; });
        const toggleText = toggleAllBtn.querySelector(".toggle-text");
        if (toggleText) {
          toggleText.textContent = anyClosed ? "Collapse all" : "Expand all";
        }
        return;
      }

      // Mobile sidebar toggle & close
      if (e.target.closest("#mobile-sidebar-toggle")) {
        const sidebar = document.getElementById("course-sidebar");
        const backdrop = document.getElementById("sidebar-backdrop");
        if (sidebar) sidebar.classList.remove("-translate-x-full");
        if (backdrop) backdrop.classList.remove("hidden");
        return;
      }

      if (e.target.closest("#mobile-sidebar-close-btn") || e.target.closest("#sidebar-backdrop")) {
        const sidebar = document.getElementById("course-sidebar");
        const backdrop = document.getElementById("sidebar-backdrop");
        if (sidebar) sidebar.classList.add("-translate-x-full");
        if (backdrop) backdrop.classList.add("hidden");
        return;
      }

      // Close mobile sidebar when navigating to an item on small screens (< 1024px)
      if (window.innerWidth < 1024 && e.target.closest("#course-sidebar a")) {
        const sidebar = document.getElementById("course-sidebar");
        const backdrop = document.getElementById("sidebar-backdrop");
        if (sidebar) sidebar.classList.add("-translate-x-full");
        if (backdrop) backdrop.classList.add("hidden");
      }
    });

    // Keyboard shortcuts
    document.addEventListener("keydown", e => {
      // Ctrl+K or Cmd+K for search
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        const searchModal = document.getElementById("search-modal");
        if (searchModal && searchModal.classList.contains("hidden")) {
          openModal("search-modal");
          const searchInput = document.getElementById("search-input");
          if (searchInput) searchInput.focus();
        } else if (searchModal) {
          closeModal("search-modal");
        }
      }
      // Escape closes modals
      if (e.key === "Escape") {
        closeModal("search-modal");
        closeModal("backup-modal");
      }
    });

    // Backup actions
    const btnExport = document.getElementById("btn-export-backup");
    if (btnExport) btnExport.addEventListener("click", exportProgressJSON);

    const btnReset = document.getElementById("btn-reset-backup");
    if (btnReset) btnReset.addEventListener("click", resetAllProgress);

    const fileInput = document.getElementById("import-file-input");
    if (fileInput) {
      fileInput.addEventListener("change", e => {
        if (e.target.files && e.target.files[0]) {
          importProgressJSON(e.target.files[0]);
        }
      });
    }

    // Interactive Search
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    if (searchInput && searchResults) {
      searchInput.addEventListener("input", e => {
        const q = e.target.value.toLowerCase().trim();
        if (!q || !window.COURSE_DATA) {
          searchResults.innerHTML = `<div class="p-6 text-center text-xs text-neutral-500">Type to search 618 videos and 21 modules...</div>`;
          return;
        }

        const matches = [];
        for (const sec of window.COURSE_DATA.sections) {
          for (const ch of sec.chapters) {
            for (const v of ch.videos) {
              const inTitle = v.title.toLowerCase().includes(q);
              const inDesc = v.description.toLowerCase().includes(q);
              const inConcepts = ch.keyConcepts.some(c => c.toLowerCase().includes(q));
              const inRefs = v.references.some(r => r.label.toLowerCase().includes(q) || r.description.toLowerCase().includes(q));
              if (inTitle || inDesc || inConcepts || inRefs) {
                matches.push({ sec, ch, v });
              }
              if (matches.length >= 30) break;
            }
            if (matches.length >= 30) break;
          }
          if (matches.length >= 30) break;
        }

        if (matches.length === 0) {
          searchResults.innerHTML = `<div class="p-6 text-center text-xs text-neutral-500">No matching videos found for "${q}".</div>`;
          return;
        }

        const metaBase = document.querySelector('meta[name="base-url"]')?.getAttribute('content');
        const baseUrl = metaBase ? (metaBase.endsWith('/') ? metaBase : `${metaBase}/`) : (window.location.pathname.startsWith('/java') ? '/java/' : '/');

        searchResults.innerHTML = matches.map(m => `
          <a href="${baseUrl}sections/${m.sec.slug}/#video-${m.v.id}" class="block p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors border-b border-neutral-100 dark:border-neutral-800/60 last:border-0" onclick="document.getElementById('search-modal').classList.add('hidden')">
            <div class="flex items-center justify-between gap-2 mb-1">
              <span class="text-[11px] font-semibold text-blue-600 dark:text-blue-400">§${m.ch.id} • ${m.sec.title}</span>
              <span class="text-[10px] font-mono text-neutral-500">${m.v.durationText}</span>
            </div>
            <div class="text-xs font-medium text-neutral-900 dark:text-neutral-100">${m.v.title}</div>
            ${m.v.description ? `<p class="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">${m.v.description}</p>` : ''}
          </a>
        `).join("");
      });
    }

    // Fluid header scroll elevation
    const mainHeader = document.getElementById("main-header");
    if (mainHeader) {
      const handleScroll = () => {
        if (window.scrollY > 8) {
          mainHeader.classList.add("shadow-sm");
        } else {
          mainHeader.classList.remove("shadow-sm");
        }
      };
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    // Initial hash handling on page load (auto opens parent chapter, scrolls, and glows)
    if (window.location.hash) {
      const initialHash = window.location.hash.replace("#", "");
      if (initialHash.startsWith("video-")) {
        setTimeout(() => {
          handleSidebarNavigation(initialHash);
        }, 200);
      }
    }

    // Hash change handler for anchor navigation
    window.addEventListener("hashchange", () => {
      if (window.location.hash) {
        const hash = window.location.hash.replace("#", "");
        if (hash.startsWith("video-")) {
          handleSidebarNavigation(hash);
        }
      }
    });

    // ScrollSpy observer: dynamically sync active sidebar item while reading lessons
    const videoCards = document.querySelectorAll(".video-card[data-video-key]");
    if (videoCards.length > 0 && "IntersectionObserver" in window) {
      let activeSpiedKey = null;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const key = entry.target.getAttribute("data-video-key");
              if (key && key !== activeSpiedKey) {
                activeSpiedKey = key;
                updateActiveSidebarItem(key);
              }
            }
          });
        },
        {
          rootMargin: "-15% 0px -60% 0px",
          threshold: 0
        }
      );
      videoCards.forEach(card => observer.observe(card));
    }
  });

  // Expose global tracker API
  window.CourseTracker = {
    getVideoStatus,
    setVideoStatus,
    cycleVideoStatus,
    getStats,
    getChapterStats,
    getPartStats,
    handleSidebarNavigation,
    updateActiveSidebarItem,
    syncUI,
    exportProgressJSON,
    resetAllProgress
  };
})();
