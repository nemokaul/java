// Auto-generated course metadata
window.COURSE_DATA = {
  "summary": {
    "totalSections": 21,
    "totalVideos": 618,
    "totalDurationSeconds": 188193,
    "totalDurationFormatted": "52h 16m"
  },
  "sections": [
    {
      "id": "section-01",
      "slug": "01-jvm-java-fundamentals",
      "number": 1,
      "title": "JVM & Java Fundamentals",
      "part": 1,
      "partTitle": "Part 1: Java & JVM Fundamentals",
      "filePath": "part-1-java-jvm-fundamentals\\01-jvm-java-fundamentals.md",
      "recommendedCourses": [
        {
          "title": "Java SE 21 Developer (1Z0-830) Cert Prep",
          "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep",
          "author": "Pearson",
          "duration": "22h 16m",
          "scope": ""
        },
        {
          "title": "Java Memory Management: Garbage Collection, JVM Tuning, and Spotting Memory Leaks",
          "url": "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks",
          "author": "Maaike van Putten",
          "duration": "1h 35m",
          "scope": ""
        },
        {
          "title": "Java Object-Oriented Programming",
          "url": "https://www.linkedin.com/learning/java-object-oriented-programming-2",
          "author": "Maaike van Putten",
          "duration": "2h 45m",
          "scope": ""
        },
        {
          "title": "Complete Guide to Java Design Patterns: Creational, Behavioral, and Structural",
          "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural",
          "author": "Maaike van Putten",
          "duration": "4h 34m",
          "scope": ""
        },
        {
          "title": "Introduction to Maven",
          "url": "https://www.linkedin.com/learning/introduction-to-maven",
          "author": "Michael Jenkins",
          "duration": "1h 30m",
          "scope": ""
        },
        {
          "title": "Complete Guide To Java Testing with JUnit 5 & Mockito",
          "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito",
          "author": "Maaike van Putten",
          "duration": "4h 45m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "01-001",
          "number": 1,
          "title": "JDK toolchain: javac, java, jshell, jpackage",
          "localChapterFile": "001-jvm-toolchain.md",
          "keyConcepts": [
            "Java Bytecode",
            "JVM Architecture",
            "`javac` Compiler",
            "Classpath",
            "Memory Management",
            "Command-Line Utilities."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDE6VjAxOkpTMkRDTFU",
              "rawKey": "S1:C1:V1",
              "title": "Java SE 21 Developer: Command-line utilities",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/command-line-utilities",
              "durationText": "20m 45s",
              "durationSeconds": 1245,
              "description": "Deep dive into `javac`, `java`, classpath (`-cp`), and module options.",
              "categoryTag": "CLI & Compilation",
              "references": [
                {
                  "label": "Oracle JDK 21 Tool Specifications: `javac` Options",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/javac.html#options",
                  "description": "Command-line syntax, `-cp` / `--class-path`, module path options (`-p`), and release targets."
                },
                {
                  "label": "Oracle JDK 21 Tool Specifications: `java` Standard Options",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#standard-options-for-java",
                  "description": "Standard VM options, system properties (`-D`), and class execution."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDE6VjAyOkxKMUhUQkFFSlA",
              "rawKey": "S1:C1:V2",
              "title": "Learning Java 17: How to build and execute Java programs",
              "url": "https://www.linkedin.com/learning/learning-java-17/how-to-build-and-execute-java-programs",
              "durationText": "2m 47s",
              "durationSeconds": 167,
              "description": "Practical walkthrough of compile-and-run workflow.",
              "categoryTag": "CLI & Compilation",
              "references": [
                {
                  "label": "Oracle Java SE 21 Tools: Source-File Mode",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#using-source-file-mode-to-launch-single-file-source-code-programs",
                  "description": "Launching single-file source code programs without explicit compilation."
                },
                {
                  "label": "Oracle Java SE 21 Docs: Classpath Specification",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/javac.html#classpath",
                  "description": "How the compiler and launcher search for user classes and library archives."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDE6VjAzOkpNTUlUVEdD",
              "rawKey": "S1:C1:V3",
              "title": "Java Memory Management: Introduction to the garbage collector",
              "url": "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/introduction-to-the-garbage-collector",
              "durationText": "2m 38s",
              "durationSeconds": 158,
              "description": "Memory layout, role of the GC, and allocation.",
              "categoryTag": "JVM Memory Architecture",
              "references": [
                {
                  "label": "Oracle HotSpot Virtual Machine Garbage Collection Tuning Guide",
                  "url": "https://docs.oracle.com/en/java/javase/21/gctuning/ergonomics1.html",
                  "description": "Generational memory layout, young/old generational hypothesis, and default ergonomics."
                },
                {
                  "label": "Oracle JVM SE 21 Specification: Runtime Data Areas",
                  "url": "https://docs.oracle.com/javase/specs/jvms/se21/html/jvms-2.html#jvms-2.5",
                  "description": "The pc register, Java virtual machine stacks, heap, and method area."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDE6VjA0OkpNTURHT1RI",
              "rawKey": "S1:C1:V4",
              "title": "Java Memory Management: Different generations on the heap",
              "url": "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/different-generations-on-the-heap",
              "durationText": "6m 3s",
              "durationSeconds": 363,
              "description": "Generational hypothesis, Young Gen (Eden, S0, S1) and Old Gen.",
              "categoryTag": "JVM Memory Architecture",
              "references": [
                {
                  "label": "Oracle HotSpot GC Tuning Guide: Generations",
                  "url": "https://docs.oracle.com/en/java/javase/21/gctuning/garbage-collector-implementation1.html",
                  "description": "Performance rationale for dividing the heap into young and tenured generations."
                },
                {
                  "label": "Oracle HotSpot GC Tuning Guide: Young Generation Sizing",
                  "url": "https://docs.oracle.com/en/java/javase/21/gctuning/factors-affecting-garbage-collection-performance1.html",
                  "description": "Survivor space ratios (`-XX:SurvivorRatio`) and tenuring thresholds."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDE6VjA1OkpNTUhTQUhE",
              "rawKey": "S1:C1:V5",
              "title": "Java Memory Management: Heap size and heap dumps",
              "url": "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/heap-size-and-heap-dumps",
              "durationText": "4m 9s",
              "durationSeconds": 249,
              "description": "Heap sizing flags (`-Xms`, `-Xmx`) and capturing heap dumps.",
              "categoryTag": "JVM Memory Architecture",
              "references": [
                {
                  "label": "Oracle Java SE 21 Tools: Advanced GC Options",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#advanced-garbage-collection-options-for-java",
                  "description": "Flags including `-XX:+HeapDumpOnOutOfMemoryError` and `-XX:HeapDumpPath`."
                },
                {
                  "label": "Oracle Java SE 21 Tools: `jcmd` Utility",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/jcmd.html#options",
                  "description": "Generating live heap diagnostics and thread dumps via CLI."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDE6VjA2OkpNTU1T",
              "rawKey": "S1:C1:V6",
              "title": "Java Memory Management: MetaSpace size",
              "url": "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/metaspace-size",
              "durationText": "3m 34s",
              "durationSeconds": 214,
              "description": "Native class metadata allocation and `-XX:MaxMetaspaceSize`.",
              "categoryTag": "JVM Memory Architecture",
              "references": [
                {
                  "label": "Oracle HotSpot GC Tuning: Other Considerations (Metaspace)",
                  "url": "https://docs.oracle.com/en/java/javase/21/gctuning/other-considerations.html#GUID-A7B4815F-98A8-4B07-B597-28EB5AB1C2A3",
                  "description": "Class metadata allocation in native memory and `-XX:MetaspaceSize`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2396
        },
        {
          "id": "01-002",
          "number": 2,
          "title": "Java syntax refresher & OOP for JS/TS developers",
          "localChapterFile": "002-java-syntax-and-oop.md",
          "keyConcepts": [
            "Classes",
            "Records",
            "Access Modifiers",
            "Method Overloading/Overriding",
            "Reference vs Value Types",
            "Naming Conventions."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDI6VjAxOkpPVUNBQg",
              "rawKey": "S1:C2:V1",
              "title": "Java OOP: Using classes as blueprints",
              "url": "https://www.linkedin.com/learning/java-object-oriented-programming-2/using-classes-as-blueprints",
              "durationText": "4m 0s",
              "durationSeconds": 240,
              "description": "Class blueprint vs runtime instances.",
              "categoryTag": "OOP Classes & Constructors",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Class Declarations",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.1",
                  "description": "Formal grammar and semantic rules for class definitions."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjAyOkpPQk9XQUM",
              "rawKey": "S1:C2:V2",
              "title": "Java OOP: Building objects with a constructor",
              "url": "https://www.linkedin.com/learning/java-object-oriented-programming-2/building-objects-with-a-constructor",
              "durationText": "2m 48s",
              "durationSeconds": 168,
              "description": "Constructor execution and field initialization.",
              "categoryTag": "OOP Classes & Constructors",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Constructor Declarations",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.8",
                  "description": "Instance initialization, `this()`, and `super()` delegation."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjAzOkpPVVREQkNBSU0",
              "rawKey": "S1:C2:V3",
              "title": "Java OOP: Understanding the difference between class and instance members",
              "url": "https://www.linkedin.com/learning/java-object-oriented-programming-2/understanding-the-difference-between-class-and-instance-members",
              "durationText": "4m 54s",
              "durationSeconds": 294,
              "description": "`static` methods and state vs instance state.",
              "categoryTag": "OOP Classes & Constructors",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Field Declarations",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.3.1.1",
                  "description": "`static` field semantics and class initialization timing."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjA0OkpTMkRBQ00",
              "rawKey": "S1:C2:V4",
              "title": "Java SE 21 Developer: Access control modifiers",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/access-control-modifiers",
              "durationText": "4m 57s",
              "durationSeconds": 297,
              "description": "`public`, `protected`, package-private, `private` visibility rules.",
              "categoryTag": "Access Control & Encapsulation",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Determining Accessibility",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.6",
                  "description": "Access matrix across packages, subclasses, and nested types."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjA1OkpTMkRFUg",
              "rawKey": "S1:C2:V5",
              "title": "Java SE 21 Developer: Encapsulation requirements",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/encapsulation-requirements",
              "durationText": "10m 8s",
              "durationSeconds": 608,
              "description": "Invariants preservation and getter/setter boundaries.",
              "categoryTag": "Access Control & Encapsulation",
              "references": [
                {
                  "label": "Oracle Java Tutorials: Controlling Access to Members of a Class",
                  "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html",
                  "description": "Encapsulation design patterns and access level table."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjA2OkpTMkREUg",
              "rawKey": "S1:C2:V6",
              "title": "Java SE 21 Developer: Defining records",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/defining-records",
              "durationText": "12m 2s",
              "durationSeconds": 722,
              "description": "Canonical, compact constructors, accessor generation.",
              "categoryTag": "Records (Immutable Data Carriers)",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Record Classes",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.10",
                  "description": "Canonical constructor synthesis, record components, and compact constructors."
                },
                {
                  "label": "Java SE 21 API Docs: `java.lang.Record`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Record.html",
                  "description": "Base class for all record types and component reflection."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjA3OkpTMkRGT1I",
              "rawKey": "S1:C2:V7",
              "title": "Java SE 21 Developer: Features of records",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/features-of-records",
              "durationText": "14m 26s",
              "durationSeconds": 866,
              "description": "Immutability properties, record deconstruction, pattern matching.",
              "categoryTag": "Records (Immutable Data Carriers)",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Record Patterns",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.30.1",
                  "description": "Pattern matching for records and deconstruction patterns."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjA4OkpTMkRPQU9NUDE",
              "rawKey": "S1:C2:V8",
              "title": "Java SE 21 Developer: Overloaded and overridden methods, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/overloaded-and-overridden-methods-part-1",
              "durationText": "9m 24s",
              "durationSeconds": 564,
              "description": "Compile-time overload resolution.",
              "categoryTag": "Method Overloading & Overriding",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Overloading",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.4.9",
                  "description": "Compile-time most specific method lookup algorithm."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDI6VjA5OkpTMkRPQU9NUDI",
              "rawKey": "S1:C2:V9",
              "title": "Java SE 21 Developer: Overloaded and overridden methods, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/overloaded-and-overridden-methods-part-2",
              "durationText": "12m 29s",
              "durationSeconds": 749,
              "description": "Dynamic dispatch, covariant returns, and `@Override`.",
              "categoryTag": "Method Overloading & Overriding",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Inheritance, Overriding, and Hiding",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.4.8",
                  "description": "Dynamic dispatch, covariant return types, and `@Override` validation."
                }
              ]
            }
          ],
          "totalDurationSeconds": 4508
        },
        {
          "id": "01-003",
          "number": 3,
          "title": "Exceptions, errors, and failure atomicity",
          "localChapterFile": "003-exceptions-and-errors.md",
          "keyConcepts": [
            "Checked vs Runtime Exceptions",
            "Error Hierarchy",
            "`try-with-resources`",
            "`AutoCloseable`",
            "Failure Atomicity."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDM6VjAxOkpTMkRGQ1dUQ0Y",
              "rawKey": "S1:C3:V1",
              "title": "Java SE 21 Developer: Flow control with try/catch/finally",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/flow-control-with-try-catch-finally",
              "durationText": "18m 32s",
              "durationSeconds": 1112,
              "description": "Execution guarantees, catch ordering, and finally blocks.",
              "categoryTag": "Try / Catch / Finally",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): The `try` statement",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.20",
                  "description": "Precise execution order of `try`, `catch`, and `finally` blocks."
                },
                {
                  "label": "Java SE 21 API Docs: `java.lang.Throwable`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html",
                  "description": "Root of the exception hierarchy, stack trace capture, and cause chaining."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDM6VjAyOkpTMkRNQ0FS",
              "rawKey": "S1:C3:V2",
              "title": "Java SE 21 Developer: Multi-catch and rethrowing",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/multi-catch-and-rethrowing",
              "durationText": "4m 57s",
              "durationSeconds": 297,
              "description": "Multi-catch pipe syntax and final rethrow semantics.",
              "categoryTag": "Try / Catch / Finally",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Precise Rethrow and Disjunctive Types",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.20",
                  "description": "Multi-catch parameter constraints and effectively final rethrow typing."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDM6VjAzOkpTMkRGQ1dUV1I",
              "rawKey": "S1:C3:V3",
              "title": "Java SE 21 Developer: Flow control with try-with-resources",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/flow-control-with-try-with-resources",
              "durationText": "4m 0s",
              "durationSeconds": 240,
              "description": "Try-with-resources syntax and suppressed exceptions.",
              "categoryTag": "Automatic Resource Management",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): `try-with-resources`",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.20.3",
                  "description": "Extended try statement with automatic resource closing and suppressed exception collection."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDM6VjA0OkpTMkRJQVAx",
              "rawKey": "S1:C3:V4",
              "title": "Java SE 21 Developer: Implementing AutoCloseable, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/implementing-autocloseable-part-1",
              "durationText": "10m 9s",
              "durationSeconds": 609,
              "description": "Closing resources cleanly, `close()` contract.",
              "categoryTag": "Automatic Resource Management",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.AutoCloseable`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/AutoCloseable.html#close()",
                  "description": "The `close()` method contract, idempotency expectations, and difference from `java.io.Closeable`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDM6VjA1OkpTMkRJQVAy",
              "rawKey": "S1:C3:V5",
              "title": "Java SE 21 Developer: Implementing AutoCloseable, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/implementing-autocloseable-part-2",
              "durationText": "9m 55s",
              "durationSeconds": 595,
              "description": "Complex multi-resource failure cleanup.",
              "categoryTag": "Automatic Resource Management",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Throwable.getSuppressed()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Throwable.html#getSuppressed()",
                  "description": "Accessing exceptions suppressed during resource closure."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDM6VjA2OkpTMkRTVFQ",
              "rawKey": "S1:C3:V6",
              "title": "Java SE 21 Developer: Subclassing Throwable types",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/subclassing-throwable-types",
              "durationText": "3m 15s",
              "durationSeconds": 195,
              "description": "Designing custom business exception hierarchies.",
              "categoryTag": "Exception Class Design",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.RuntimeException`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/RuntimeException.html",
                  "description": "Unchecked exceptions design rules and failure atomicity guidelines."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3048
        },
        {
          "id": "01-004",
          "number": 4,
          "title": "Equality, hashing, immutability, defensive copies",
          "localChapterFile": "004-objects-equality-and-immutability.md",
          "keyConcepts": [
            "`equals()` and `hashCode()` Contract",
            "Reference Equality (`==`) vs Value Equality",
            "Immutability",
            "Defensive Copying."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDQ6VjAxOkpTMkRQUkFBRQ",
              "rawKey": "S1:C4:V1",
              "title": "Java SE 21 Developer: Primitives, references, aliasing, and equality",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/primitives-references-aliasing-and-equality",
              "durationText": "16m 39s",
              "durationSeconds": 999,
              "description": "Aliasing pitfalls, `==` vs `.equals()`.",
              "categoryTag": "Equality & Object Identity",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.Object.equals`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html#equals(java.lang.Object)",
                  "description": "Reflexive, symmetric, transitive, consistent, and null-safe requirements."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDQ6VjAyOkxKQ1RFTQ",
              "rawKey": "S1:C4:V2",
              "title": "Learning Java Collections: The equals method",
              "url": "https://www.linkedin.com/learning/learning-java-collections/the-equals-method",
              "durationText": "6m 40s",
              "durationSeconds": 400,
              "description": "General contract of `equals`: reflexive, symmetric, transitive, consistent.",
              "categoryTag": "Equality & Object Identity",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.Objects.equals`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html#equals(java.lang.Object,java.lang.Object)",
                  "description": "Safe utility method for null-tolerant object equality."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDQ6VjAzOkxKQ09D",
              "rawKey": "S1:C4:V3",
              "title": "Learning Java Collections: Object comparison",
              "url": "https://www.linkedin.com/learning/learning-java-collections/object-comparison",
              "durationText": "2m 19s",
              "durationSeconds": 139,
              "description": "How `hashCode()` distributes objects across hash buckets.",
              "categoryTag": "Equality & Object Identity",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.Object.hashCode`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Object.html#hashCode()",
                  "description": "Hash code contract: equal objects must yield identical hash codes."
                },
                {
                  "label": "Java SE 21 API Docs: `java.util.Objects.hash`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Objects.html#hash(java.lang.Object...)",
                  "description": "Generating composite hash codes across object fields."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDQ6VjA0OkpTMkRJUg",
              "rawKey": "S1:C4:V4",
              "title": "Java SE 21 Developer: Immutability requirements",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/immutability-requirements",
              "durationText": "6m 22s",
              "durationSeconds": 382,
              "description": "Guidelines for immutable objects, final fields, defensive cloning.",
              "categoryTag": "Immutability & Defensive Copies",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Final Field Semantics",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.5",
                  "description": "Memory model guarantees for freeze actions on final fields."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDQ6VjA1OkpEUEhN",
              "rawKey": "S1:C4:V5",
              "title": "Java Design Patterns: Handling mutability",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/handling-mutability",
              "durationText": "2m 20s",
              "durationSeconds": 140,
              "description": "Deep vs shallow copying, defensive copies in constructors and getters.",
              "categoryTag": "Immutability & Defensive Copies",
              "references": [
                {
                  "label": "Oracle Java SE 21 Docs: Unmodifiable Collections",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html#unmodifiableList(java.util.List)",
                  "description": "Defensive wrapper views and `List.copyOf()` immutable factories."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2060
        },
        {
          "id": "01-005",
          "number": 5,
          "title": "I/O, NIO.2, modules, and packaging",
          "localChapterFile": "005-io-files-and-resources.md",
          "keyConcepts": [
            "Streams (`InputStream`/`OutputStream`)",
            "NIO.2 (`Path`",
            "`Files`)",
            "JPMS (`module-info.java`)",
            "JAR Packaging."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDU6VjAxOkpTMkRJQU9TUkE",
              "rawKey": "S1:C5:V1",
              "title": "Java SE 21 Developer: Input and output streams, Reader and Writer",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/input-and-output-streams-reader-and-writer",
              "durationText": "5m 19s",
              "durationSeconds": 319,
              "description": "Byte streams vs character streams.",
              "categoryTag": "Classic I/O",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.io.InputStream`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/InputStream.html#read(byte%5B%5D)",
                  "description": "Byte stream reading, buffering, and EOF signalling."
                },
                {
                  "label": "Java SE 21 API Docs: `java.io.Reader`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/Reader.html",
                  "description": "Character stream decoding and Unicode handling."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDU6VjAyOkpTMkRCUFNBQ0M",
              "rawKey": "S1:C5:V2",
              "title": "Java SE 21 Developer: BufferedReader, PrintWriter, Scanner and Charset conversions",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/bufferedreader-printwriter-scanner-and-charset-conversions",
              "durationText": "5m 21s",
              "durationSeconds": 321,
              "description": "Character set encoding and buffered reading.",
              "categoryTag": "Classic I/O",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.io.BufferedReader`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/BufferedReader.html#readLine()",
                  "description": "High-efficiency line-oriented stream parsing."
                },
                {
                  "label": "Java SE 21 API Docs: `java.nio.charset.StandardCharsets`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/charset/StandardCharsets.html#UTF_8",
                  "description": "Guaranteed standard charsets including UTF-8."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDU6VjAzOkpTMkRGTVAx",
              "rawKey": "S1:C5:V3",
              "title": "Java SE 21 Developer: Files methods, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/files-methods-part-1",
              "durationText": "8m 47s",
              "durationSeconds": 527,
              "description": "`Path` paths: resolving, relativizing, and normalizing.",
              "categoryTag": "Modern NIO.2 File Operations",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.nio.file.Path`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Path.html#resolve(java.lang.String)",
                  "description": "Path hierarchical navigation, `resolve()`, and `relativize()`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDU6VjA0OkpTMkRGTVAy",
              "rawKey": "S1:C5:V4",
              "title": "Java SE 21 Developer: Files methods, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/files-methods-part-2",
              "durationText": "13m 14s",
              "durationSeconds": 794,
              "description": "`Files.readAllLines()`, `Files.walk()`, `Files.copy()`, and metadata.",
              "categoryTag": "Modern NIO.2 File Operations",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.nio.file.Files`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html#readString(java.nio.file.Path)",
                  "description": "High-level file methods (`readString`, `lines`, `walk`)."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDU6VjA1OkpTMkRNQw",
              "rawKey": "S1:C5:V5",
              "title": "Java SE 21 Developer: Module compilation",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/module-compilation",
              "durationText": "13m 16s",
              "durationSeconds": 796,
              "description": "Defining module roots and compiling modular projects.",
              "categoryTag": "Java Platform Module System",
              "references": [
                {
                  "label": "Oracle Java SE 21 Tools: `javac` Module Options",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/javac.html#options-module-path",
                  "description": "Compiling modular source trees via `--module-source-path`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDU6VjA2OkpTMkRNRQ",
              "rawKey": "S1:C5:V6",
              "title": "Java SE 21 Developer: Module execution",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/module-execution",
              "durationText": "8m 48s",
              "durationSeconds": 528,
              "description": "Executing modules via `-p` and `-m`.",
              "categoryTag": "Java Platform Module System",
              "references": [
                {
                  "label": "Oracle Java SE 21 Tools: `java` Module Launcher Options",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/java.html#standard-options-for-java",
                  "description": "Launching modular applications with `-p` and `-m`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDU6VjA3OkpTMkRFQVJE",
              "rawKey": "S1:C5:V7",
              "title": "Java SE 21 Developer: Exports and requires directives",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/exports-and-requires-directives",
              "durationText": "13m 10s",
              "durationSeconds": 790,
              "description": "Module encapsulation and transitive requirements.",
              "categoryTag": "Java Platform Module System",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Module Declarations",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-7.html#jls-7.7",
                  "description": "`module-info.java` syntax, `requires`, and `exports`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDU6VjA4OkpTMkRQVU9BT0Q",
              "rawKey": "S1:C5:V8",
              "title": "Java SE 21 Developer: Provides, uses, open and opens directives",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/provides-uses-open-and-opens-directives",
              "durationText": "16m 8s",
              "durationSeconds": 968,
              "description": "Service provider interfaces and reflection opens.",
              "categoryTag": "Java Platform Module System",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Service Directives",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-7.html#jls-7.7.4",
                  "description": "`provides ... with ...` and `uses` ServiceLoader contracts."
                }
              ]
            }
          ],
          "totalDurationSeconds": 5043
        },
        {
          "id": "01-006",
          "number": 6,
          "title": "Effective Java essentials (items 1 to 25)",
          "localChapterFile": "006-effective-java-fundamentals.md",
          "keyConcepts": [
            "Static Factory Methods",
            "Builder Pattern",
            "Singleton Pattern",
            "Noninstantiability",
            "Dependency Injection",
            "Obsolete References."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDY6VjAxOkpEUEFDQw",
              "rawKey": "S1:C6:V1",
              "title": "Java Design Patterns: Avoiding complex constructors",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/avoiding-complex-constructors",
              "durationText": "2m 29s",
              "durationSeconds": 149,
              "description": "Problems with constructors with many parameters.",
              "categoryTag": "Builder Pattern & Static Factories",
              "references": [
                {
                  "label": "Oracle Java Design Patterns: Telescoping Constructor Problem",
                  "url": "https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html",
                  "description": "Evolution of constructors and why parameter explosion hurts safety."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjAyOkpEUFJXVFVUQlA",
              "rawKey": "S1:C6:V2",
              "title": "Java Design Patterns: Recognize where to use the Builder pattern",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/recognise-where-to-use-the-builder-pattern",
              "durationText": "2m 31s",
              "durationSeconds": 151,
              "description": "Builder identification and use cases.",
              "categoryTag": "Builder Pattern & Static Factories",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.StringBuilder`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/StringBuilder.html#append(java.lang.String)",
                  "description": "Canonical standard library example of fluent builder methods."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjAzOkpEUElBQ0JQ",
              "rawKey": "S1:C6:V3",
              "title": "Java Design Patterns: Implement a complete Builder pattern",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implement-a-complete-builder-pattern",
              "durationText": "6m 38s",
              "durationSeconds": 398,
              "description": "Writing step-by-step fluent builders.",
              "categoryTag": "Builder Pattern & Static Factories",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.net.http.HttpRequest.Builder`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.net.http/java/net/http/HttpRequest.Builder.html",
                  "description": "Modern immutable builder architecture in standard JDK."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjA0OkpEUFVURk1Q",
              "rawKey": "S1:C6:V4",
              "title": "Java Design Patterns: Understand the Factory Method pattern",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/understand-the-factory-method-pattern",
              "durationText": "1m 55s",
              "durationSeconds": 115,
              "description": "Named static factory methods.",
              "categoryTag": "Builder Pattern & Static Factories",
              "references": [
                {
                  "label": "Java SE 21 API Docs: Static Factory Methods in Collections",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html#of()",
                  "description": "`List.of()`, `Set.of()`, `Map.of()` static factories."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjA1OkpEUFdUVVRTUA",
              "rawKey": "S1:C6:V5",
              "title": "Java Design Patterns: When to use the Singleton pattern",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/when-to-use-the-singleton-pattern",
              "durationText": "2m 18s",
              "durationSeconds": 138,
              "description": "Singleton patterns and utility classes.",
              "categoryTag": "Singleton Pattern & Noninstantiability",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Enum Types as Singletons",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.9",
                  "description": "Why single-element enums guarantee singleton safety across serialization."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjA2OkpEUElUU1A",
              "rawKey": "S1:C6:V6",
              "title": "Java Design Patterns: Implementing the Singleton pattern",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/implementing-the-singleton-pattern",
              "durationText": "4m 2s",
              "durationSeconds": 242,
              "description": "Private constructor enforcement.",
              "categoryTag": "Singleton Pattern & Noninstantiability",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.Runtime.getRuntime()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Runtime.html#getRuntime()",
                  "description": "JDK singleton access method."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjA3OkpEUFRTV1RTUA",
              "rawKey": "S1:C6:V7",
              "title": "Java Design Patterns: Thread safety with the Singleton pattern",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-design-patterns-creational-behavioral-and-structural/thread-safety-with-the-singleton-pattern",
              "durationText": "2m 4s",
              "durationSeconds": 124,
              "description": "Double-checked locking and holder classes.",
              "categoryTag": "Singleton Pattern & Noninstantiability",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Volatile Fields and Synchronization",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.3.1.4",
                  "description": "`volatile` write memory barrier for safe double-checked initialization."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjA4OkpNTUVGR0M",
              "rawKey": "S1:C6:V8",
              "title": "Java Memory Management: Eligible for garbage collection",
              "url": "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/eligible-for-garbage-collection",
              "durationText": "1m 39s",
              "durationSeconds": 99,
              "description": "Eliminating obsolete object references.",
              "categoryTag": "Memory Leaks & Obsolete References",
              "references": [
                {
                  "label": "Oracle Java SE 21 Docs: Reachability Types",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/ref/package-summary.html#package-description",
                  "description": "Strong, soft, weak, and phantom reachability."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDY6VjA5OkpNTUFBU01M",
              "rawKey": "S1:C6:V9",
              "title": "Java Memory Management: Avoiding and solving memory leaks",
              "url": "https://www.linkedin.com/learning/java-memory-management-garbage-collection-jvm-tuning-and-spotting-memory-leaks/avoiding-and-solving-memory-leaks",
              "durationText": "3m 59s",
              "durationSeconds": 239,
              "description": "Fixing accidental object retention in data structures.",
              "categoryTag": "Memory Leaks & Obsolete References",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.WeakHashMap`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/WeakHashMap.html",
                  "description": "Cache design without leaking unreachable keys."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1655
        },
        {
          "id": "01-007",
          "number": 7,
          "title": "Maven, JUnit5 intro, and project shape",
          "localChapterFile": "007-fundamentals-review-and-tooling.md",
          "keyConcepts": [
            "Maven Project Structure (`pom.xml`",
            "coordinates",
            "lifecycles",
            "plugins)",
            "JShell REPL",
            "JUnit 5 Setup",
            "Assertions."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDc6VjAxOklUTUlUQU0",
              "rawKey": "S1:C7:V1",
              "title": "Introduction to Maven: Introduction to Apache Maven",
              "url": "https://www.linkedin.com/learning/introduction-to-maven/introduction-to-apache-maven",
              "durationText": "4m 24s",
              "durationSeconds": 264,
              "description": "Core Maven concepts and workflow.",
              "categoryTag": "Maven Essentials",
              "references": [
                {
                  "label": "Apache Maven Official Guide: What is Maven?",
                  "url": "https://maven.apache.org/what-is-maven.html",
                  "description": "Declarative builds and dependency resolution engine."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjAyOklUTVRKUFM",
              "rawKey": "S1:C7:V2",
              "title": "Introduction to Maven: The Java project structure",
              "url": "https://www.linkedin.com/learning/introduction-to-maven/the-java-project-structure",
              "durationText": "3m 18s",
              "durationSeconds": 198,
              "description": "Standard layout: `src/main/java`, `src/test/java`.",
              "categoryTag": "Maven Essentials",
              "references": [
                {
                  "label": "Apache Maven Guide: Standard Directory Layout",
                  "url": "https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html",
                  "description": "Standard locations for production sources, test sources, and resources."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjAzOklUTVRQRg",
              "rawKey": "S1:C7:V3",
              "title": "Introduction to Maven: The POM file",
              "url": "https://www.linkedin.com/learning/introduction-to-maven/the-pom-file",
              "durationText": "3m 22s",
              "durationSeconds": 202,
              "description": "Coordinates, plugins, and configuration.",
              "categoryTag": "Maven Essentials",
              "references": [
                {
                  "label": "Apache Maven POM Reference: The Basics",
                  "url": "https://maven.apache.org/pom.html#the-basics",
                  "description": "`groupId`, `artifactId`, `version`, and packaging elements."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjA0OklUTUQ",
              "rawKey": "S1:C7:V4",
              "title": "Introduction to Maven: Dependencies",
              "url": "https://www.linkedin.com/learning/introduction-to-maven/dependencies",
              "durationText": "3m 9s",
              "durationSeconds": 189,
              "description": "Adding dependency definitions.",
              "categoryTag": "Maven Essentials",
              "references": [
                {
                  "label": "Apache Maven Dependency Mechanism",
                  "url": "https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html",
                  "description": "Dependency scopes (`compile`, `test`, `provided`, `runtime`)."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjA1OklUTUlUVEJM",
              "rawKey": "S1:C7:V5",
              "title": "Introduction to Maven: Introduction to the build lifecycle",
              "url": "https://www.linkedin.com/learning/introduction-to-maven/introduction-to-the-build-lifecycle",
              "durationText": "2m 18s",
              "durationSeconds": 138,
              "description": "Lifecycles: compile, test, package, install.",
              "categoryTag": "Maven Essentials",
              "references": [
                {
                  "label": "Apache Maven Build Lifecycle Reference",
                  "url": "https://maven.apache.org/guides/introduction/introduction-to-the-lifecycle.html",
                  "description": "Default, clean, and site lifecycles."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjA2OklUTURN",
              "rawKey": "S1:C7:V6",
              "title": "Introduction to Maven: Dependency management",
              "url": "https://www.linkedin.com/learning/introduction-to-maven/dependency-management",
              "durationText": "4m 50s",
              "durationSeconds": 290,
              "description": "BOM dependencies and parent POMs.",
              "categoryTag": "Maven Essentials",
              "references": [
                {
                  "label": "Apache Maven POM Reference: Dependency Management",
                  "url": "https://maven.apache.org/pom.html#dependency-management",
                  "description": "Bill-of-Materials (BOM) imports and version governance."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjA3OkNHVEpUU1VKNUk",
              "rawKey": "S1:C7:V7",
              "title": "Complete Guide to Java Testing: Set up JUnit 5 in your Java application",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito/set-up-junit-5-in-your-java-application",
              "durationText": "2m 24s",
              "durationSeconds": 144,
              "description": "Adding JUnit Jupiter to `pom.xml`.",
              "categoryTag": "JUnit 5 Intro",
              "references": [
                {
                  "label": "JUnit 5 User Guide: Dependency Metadata",
                  "url": "https://junit.org/junit5/docs/current/user-guide/#running-tests-build-maven",
                  "description": "Configuring `maven-surefire-plugin` with `junit-jupiter`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjA4OkNHVEpUV0FSWUY",
              "rawKey": "S1:C7:V8",
              "title": "Complete Guide to Java Testing: Write and run your first JUnit 5 test",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito/write-and-run-your-first-junit-5-test",
              "durationText": "4m 11s",
              "durationSeconds": 251,
              "description": "Writing tests and running them in the IDE/CLI.",
              "categoryTag": "JUnit 5 Intro",
              "references": [
                {
                  "label": "JUnit 5 User Guide: Writing Tests",
                  "url": "https://junit.org/junit5/docs/current/user-guide/#writing-tests",
                  "description": "Annotations overview: `@Test`, `@DisplayName`, `@Disabled`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjA5OkNHVEpUQUlKNQ",
              "rawKey": "S1:C7:V9",
              "title": "Complete Guide to Java Testing: Assertions in JUnit 5",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito/assertions-in-junit-5",
              "durationText": "7m 56s",
              "durationSeconds": 476,
              "description": "`assertEquals`, `assertAll`, `assertThrows`.",
              "categoryTag": "JUnit 5 Intro",
              "references": [
                {
                  "label": "JUnit 5 User Guide: Assertions",
                  "url": "https://junit.org/junit5/docs/current/user-guide/#writing-tests-assertions",
                  "description": "Grouped assertions via `assertAll` and exception assertions via `assertThrows`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDc6VjEwOkNHVEpUSjVMSA",
              "rawKey": "S1:C7:V10",
              "title": "Complete Guide to Java Testing: JUnit 5 lifecycle hooks",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito/junit-5-lifecycle-hooks",
              "durationText": "2m 49s",
              "durationSeconds": 169,
              "description": "`@BeforeEach`, `@AfterEach`, `@BeforeAll`.",
              "categoryTag": "JUnit 5 Intro",
              "references": [
                {
                  "label": "JUnit 5 User Guide: Test Lifecycle Callbacks",
                  "url": "https://junit.org/junit5/docs/current/user-guide/#writing-tests-classes-and-methods",
                  "description": "Method execution sequence and instance per-class lifecycles."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2321
        },
        {
          "id": "01-008",
          "number": 8,
          "title": "Residual concepts and review",
          "localChapterFile": "008-misc.md",
          "keyConcepts": [
            "Java Serialization Security Risks",
            "Alternatives to Java Serialization",
            "Enums with Fields/Methods",
            "`@Override` Best Practices."
          ],
          "videos": [
            {
              "id": "UzAxOkMwMDg6VjAxOkpTMkREUw",
              "rawKey": "S1:C8:V1",
              "title": "Java SE 21 Developer: Default serialization",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/default-serialization",
              "durationText": "9m 29s",
              "durationSeconds": 569,
              "description": "How `Serializable` works and its inherent security pitfalls.",
              "categoryTag": "Serialization & Its Vulnerabilities",
              "references": [
                {
                  "label": "Oracle Java Serialization Specification: The Object Output Protocol",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/serialization/output.html",
                  "description": "Protocol specification and magic stream headers."
                },
                {
                  "label": "Oracle Secure Coding Guidelines for Java SE: Serialization and Deserialization",
                  "url": "https://www.oracle.com/java/technologies/javase/seccodeguide.html#8",
                  "description": "Vulnerability vectors, gadget chains, and deserialization filtering (`ObjectInputFilter`)."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDg6VjAyOkpTMkRDUw",
              "rawKey": "S1:C8:V2",
              "title": "Java SE 21 Developer: Customizing serialization",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/customizing-serialization",
              "durationText": "5m 49s",
              "durationSeconds": 349,
              "description": "`serialVersionUID`, transient fields, and modern alternative data formats.",
              "categoryTag": "Serialization & Its Vulnerabilities",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.io.ObjectOutputStream`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/io/ObjectOutputStream.html#writeObject(java.lang.Object)",
                  "description": "Customizing serialization with `writeObject` and `readObject`."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDg6VjAzOkpTMkRFVkFJ",
              "rawKey": "S1:C8:V3",
              "title": "Java SE 21 Developer: Enum values and initialization",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/enum-values-and-initialization",
              "durationText": "6m 2s",
              "durationSeconds": 362,
              "description": "Enum construction and values.",
              "categoryTag": "Rich Enums",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Enum Declarations",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.9.2",
                  "description": "Enum constants and implicit `values()` / `valueOf()` generation."
                }
              ]
            },
            {
              "id": "UzAxOkMwMDg6VjA0OkpTMkRFRkFN",
              "rawKey": "S1:C8:V4",
              "title": "Java SE 21 Developer: Enum fields and methods",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/enum-fields-and-methods",
              "durationText": "5m 14s",
              "durationSeconds": 314,
              "description": "Adding instance fields, constructors, and methods instead of relying on ordinal numbers.",
              "categoryTag": "Rich Enums",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Enum Body",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.9.2",
                  "description": "Custom methods, constant-specific class bodies, and constructor privacy."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1594
        }
      ],
      "totalVideos": 57,
      "totalDurationSeconds": 22625
    },
    {
      "id": "section-02",
      "slug": "02-collections-streams-generics",
      "number": 2,
      "title": "Collections, Streams, Generics",
      "part": 1,
      "partTitle": "Part 1: Java & JVM Fundamentals",
      "filePath": "part-1-java-jvm-fundamentals\\02-collections-streams-generics.md",
      "recommendedCourses": [
        {
          "title": "Learning Java Collections",
          "url": "https://www.linkedin.com/learning/learning-java-collections",
          "author": "Kathryn Hodge",
          "duration": "2h 30m",
          "scope": ""
        },
        {
          "title": "Java SE 21 Developer (1Z0-830) Cert Prep",
          "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep",
          "author": "Pearson",
          "duration": "Modules 4 & 5",
          "scope": ""
        },
        {
          "title": "Java: Lambdas and Streams",
          "url": "https://www.linkedin.com/learning/java-lambdas-and-streams",
          "author": "Bethan Palmer",
          "duration": "1h 10m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "02-001",
          "number": 1,
          "title": "Generics: type parameters, wildcards, PECS",
          "localChapterFile": "001-generics-type-system.md",
          "keyConcepts": [
            "Type Parameters",
            "Type Erasure",
            "Invariance vs Covariance",
            "Wildcards (`? extends T`",
            "`? super T`)",
            "PECS Rule (Producer Extends",
            "Consumer Super)",
            "Raw Types."
          ],
          "videos": [
            {
              "id": "UzAyOkMwMDE6VjAxOkpTMkRGT0c",
              "rawKey": "S2:C1:V1",
              "title": "Java SE 21 Developer: Fundamentals of generics",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/fundamentals-of-generics",
              "durationText": "21m 12s",
              "durationSeconds": 1272,
              "description": "Type parameters, compile-time safety checks, autoboxing, and type erasure.",
              "categoryTag": "Generics Fundamentals",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Generic Classes and Type Parameters",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.1.2",
                  "description": "Syntax and semantics of formal type parameters."
                },
                {
                  "label": "Java Language Specification (JLS 21): Type Erasure",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.6",
                  "description": "Bridge method generation and byte-code erasure rules."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDE6VjAyOkpTMkRER1RBTQ",
              "rawKey": "S2:C1:V2",
              "title": "Java SE 21 Developer: Declaring generic types and methods",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/declaring-generic-types-and-methods",
              "durationText": "9m 50s",
              "durationSeconds": 590,
              "description": "Creating generic classes, interfaces, and static generic methods.",
              "categoryTag": "Generics Fundamentals",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Generic Methods",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.4.4",
                  "description": "Type inference in generic method invocations."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDE6VjAzOkxKQ0dU",
              "rawKey": "S2:C1:V3",
              "title": "Learning Java Collections: Generic typing",
              "url": "https://www.linkedin.com/learning/learning-java-collections/generic-typing",
              "durationText": "4m 26s",
              "durationSeconds": 266,
              "description": "Type parameters in collections and preventing runtime `ClassCastException`.",
              "categoryTag": "Generics Fundamentals",
              "references": [
                {
                  "label": "Oracle Java Tutorials: Generics (Updated)",
                  "url": "https://docs.oracle.com/javase/tutorial/java/generics/types.html",
                  "description": "Diamond operator `<>` and type inference."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDE6VjA0OkpTMkRVQkFX",
              "rawKey": "S2:C1:V4",
              "title": "Java SE 21 Developer: Using bounds and wildcards",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/using-bounds-and-wildcards",
              "durationText": "16m 21s",
              "durationSeconds": 981,
              "description": "Upper bounds (`? extends`), lower bounds (`? super`), unbounded wildcards, and the PECS rule.",
              "categoryTag": "Wildcards & PECS",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Wildcard Type Arguments",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.5.1",
                  "description": "Wildcards, bounds, and subtyping relationships."
                },
                {
                  "label": "Oracle Java Tutorials: Guidelines for Wildcard Use",
                  "url": "https://docs.oracle.com/javase/tutorial/java/generics/wildcardGuidelines.html",
                  "description": "Canonical explanation of Producer Extends, Consumer Super (PECS)."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDE6VjA1OkpTMkRRRERHVw",
              "rawKey": "S2:C1:V5",
              "title": "Java SE 21 Developer: Question deep dive - Generics & Wildcards",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/question-deep-dive-27576546",
              "durationText": "4m 56s",
              "durationSeconds": 296,
              "description": "Analyzing edge cases with generic bounds, raw types, and assignment compatibility.",
              "categoryTag": "Wildcards & PECS",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Raw Types",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.8",
                  "description": "Backward compatibility, unchecked warnings, and raw type behavior."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3405
        },
        {
          "id": "02-002",
          "number": 2,
          "title": "JCF: List, Set, Map, Queue, Deque",
          "localChapterFile": "002-collections-framework.md",
          "keyConcepts": [
            "`Collection<E>` Hierarchy",
            "`List` (`ArrayList`",
            "`LinkedList`)",
            "`Set` (`HashSet`",
            "`TreeSet`)",
            "`Map` (`HashMap`",
            "`TreeMap`)",
            "`Queue`/`Deque` (`ArrayDeque`)",
            "Collections Algorithms."
          ],
          "videos": [
            {
              "id": "UzAyOkMwMDI6VjAxOkxKQ0NGQQ",
              "rawKey": "S2:C2:V1",
              "title": "Learning Java Collections: Collections framework architecture",
              "url": "https://www.linkedin.com/learning/learning-java-collections/collections-framework-architecture",
              "durationText": "3m 22s",
              "durationSeconds": 202,
              "description": "Overview of interfaces, implementations, and algorithms.",
              "categoryTag": "Framework Architecture & Collection Root",
              "references": [
                {
                  "label": "Java SE 21 API Docs: Collections Framework Overview",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/doc-files/coll-reference.html",
                  "description": "Official design overview of interfaces and implementations."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjAyOkxKQ1RDSQ",
              "rawKey": "S2:C2:V2",
              "title": "Learning Java Collections: The Collection interface",
              "url": "https://www.linkedin.com/learning/learning-java-collections/the-collection-interface",
              "durationText": "2m 4s",
              "durationSeconds": 124,
              "description": "Fundamental collection methods: `add`, `remove`, `contains`, `size`.",
              "categoryTag": "Framework Architecture & Collection Root",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.Collection`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collection.html",
                  "description": "Contract of root collection operations and bulk modifications."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjAzOkxKQ0xJ",
              "rawKey": "S2:C2:V3",
              "title": "Learning Java Collections: List interface",
              "url": "https://www.linkedin.com/learning/learning-java-collections/list-interface",
              "durationText": "3m 49s",
              "durationSeconds": 229,
              "description": "Positional access and index-based operations.",
              "categoryTag": "Lists & Arrays",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.List`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html#get(int)",
                  "description": "Index-based access, sublists, and `ListIterator`."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjA0OkxKQ0E",
              "rawKey": "S2:C2:V4",
              "title": "Learning Java Collections: ArrayList",
              "url": "https://www.linkedin.com/learning/learning-java-collections/arraylist",
              "durationText": "7m 9s",
              "durationSeconds": 429,
              "description": "Array growth, amortized complexity, and capacity resizing.",
              "categoryTag": "Lists & Arrays",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.ArrayList`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayList.html",
                  "description": "Dynamic array growth policies and constant-time operations."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjA1OkpTMkRBQU1PQ0w",
              "rawKey": "S2:C2:V5",
              "title": "Java SE 21 Developer: Arrays, and methods of Collection, List, and Set, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/arrays-and-methods-of-collection-list-and-set-part-1",
              "durationText": "20m 5s",
              "durationSeconds": 1205,
              "description": "In-depth methods, unmodifiable factory methods (`List.of()`, `Set.of()`).",
              "categoryTag": "Lists & Arrays",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `List.of()` Unmodifiable Factories",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/List.html#of()",
                  "description": "Immutability guarantees, rejection of null elements, and memory compactness."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjA2OkxKQ1M",
              "rawKey": "S2:C2:V6",
              "title": "Learning Java Collections: Set",
              "url": "https://www.linkedin.com/learning/learning-java-collections/set",
              "durationText": "1m 52s",
              "durationSeconds": 112,
              "description": "Set contract and duplicate rejection.",
              "categoryTag": "Sets & Hashing",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.Set`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Set.html",
                  "description": "Contract prohibiting duplicate elements."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjA3OkxKQ0g",
              "rawKey": "S2:C2:V7",
              "title": "Learning Java Collections: HashSet",
              "url": "https://www.linkedin.com/learning/learning-java-collections/hashset",
              "durationText": "5m 12s",
              "durationSeconds": 312,
              "description": "Hash table backing, bucketing, and collision handling.",
              "categoryTag": "Sets & Hashing",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.HashSet`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashSet.html",
                  "description": "Backed by `HashMap`, iteration performance dependent on capacity and load factor."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjA4OkxKQ1Q",
              "rawKey": "S2:C2:V8",
              "title": "Learning Java Collections: TreeSet",
              "url": "https://www.linkedin.com/learning/learning-java-collections/treeset",
              "durationText": "3m 50s",
              "durationSeconds": 230,
              "description": "Balanced binary search tree backing, sorted order, `NavigableSet`.",
              "categoryTag": "Sets & Hashing",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.TreeSet`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/TreeSet.html",
                  "description": "Red-black tree backing, logarithmic time complexity, and `NavigableSet` range operations."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjA5OkxKQ1FJ",
              "rawKey": "S2:C2:V9",
              "title": "Learning Java Collections: Queue interface",
              "url": "https://www.linkedin.com/learning/learning-java-collections/queue-interface",
              "durationText": "3m 16s",
              "durationSeconds": 196,
              "description": "FIFO queues, `offer`/`poll`/`peek` semantics.",
              "categoryTag": "Queues & Deques",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.Queue`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Queue.html",
                  "description": "Two forms of operations: throwing exceptions vs returning special values (`null` / `false`)."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjEwOkxKQ0RJ",
              "rawKey": "S2:C2:V10",
              "title": "Learning Java Collections: Deque interface",
              "url": "https://www.linkedin.com/learning/learning-java-collections/deque-interface",
              "durationText": "3m 52s",
              "durationSeconds": 232,
              "description": "Double-ended queues and stack behavior.",
              "categoryTag": "Queues & Deques",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.Deque`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Deque.html",
                  "description": "Double-ended queue methods and stack replacement recommendations."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjExOkxKQ1VBQUFBUw",
              "rawKey": "S2:C2:V11",
              "title": "Learning Java Collections: Using an ArrayDeque as a stack",
              "url": "https://www.linkedin.com/learning/learning-java-collections/using-an-arraydeque-as-a-stack",
              "durationText": "4m 40s",
              "durationSeconds": 280,
              "description": "Replacing `Stack` and `Vector` with `ArrayDeque`.",
              "categoryTag": "Queues & Deques",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.ArrayDeque`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ArrayDeque.html",
                  "description": "Resizable circular array implementation, outperforming `Stack` and `LinkedList`."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjEyOkxKQ01J",
              "rawKey": "S2:C2:V12",
              "title": "Learning Java Collections: Map interface",
              "url": "https://www.linkedin.com/learning/learning-java-collections/map-interface",
              "durationText": "2m 56s",
              "durationSeconds": 176,
              "description": "Key-value pair semantics.",
              "categoryTag": "Maps & Key-Value Lookup",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.Map`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html",
                  "description": "Collection views of a map (`keySet`, `values`, `entrySet`)."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjEzOkxKQ0hBSFc",
              "rawKey": "S2:C2:V13",
              "title": "Learning Java Collections: How a HashMap works",
              "url": "https://www.linkedin.com/learning/learning-java-collections/how-a-hashmap-works",
              "durationText": "2m 33s",
              "durationSeconds": 153,
              "description": "Hash indexing, buckets, linked lists and red-black tree bins.",
              "categoryTag": "Maps & Key-Value Lookup",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.HashMap`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/HashMap.html",
                  "description": "Treeification threshold of 8 and load factor resizing mechanics."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjE0OkpTMkRNT0RBTQ",
              "rawKey": "S2:C2:V14",
              "title": "Java SE 21 Developer: Methods of Deque and Map",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/methods-of-deque-and-map",
              "durationText": "14m 46s",
              "durationSeconds": 886,
              "description": "Modern map methods: `computeIfAbsent`, `merge`, `putIfAbsent`.",
              "categoryTag": "Maps & Key-Value Lookup",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Map.computeIfAbsent()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Map.html#computeIfAbsent(K,java.util.function.Function)",
                  "description": "Atomic multi-step operations on Map entries."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjE1OkxKQ1ND",
              "rawKey": "S2:C2:V15",
              "title": "Learning Java Collections: Sorting collections",
              "url": "https://www.linkedin.com/learning/learning-java-collections/sorting-collections",
              "durationText": "4m 58s",
              "durationSeconds": 298,
              "description": "`Collections.sort()` and `Comparable<T>`.",
              "categoryTag": "Sorting & Comparators",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.Comparable`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Comparable.html#compareTo(T)",
                  "description": "Natural ordering contract and consistency with `equals`."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDI6VjE2OkpTMkRDRkFE",
              "rawKey": "S2:C2:V16",
              "title": "Java SE 21 Developer: Comparator factories and decorators",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/comparator-factories-and-decorators",
              "durationText": "12m 34s",
              "durationSeconds": 754,
              "description": "Fluent comparator creation with `Comparator.comparing()`, `thenComparing()`, `reversed()`.",
              "categoryTag": "Sorting & Comparators",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.Comparator`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Comparator.html#comparing(java.util.function.Function)",
                  "description": "Fluent static and default factory methods on Comparator."
                }
              ]
            }
          ],
          "totalDurationSeconds": 5818
        },
        {
          "id": "02-003",
          "number": 3,
          "title": "Lambdas, method refs, and standard functional interfaces",
          "localChapterFile": "003-functional-interfaces-and-lambdas.md",
          "keyConcepts": [
            "Functional Interfaces (`@FunctionalInterface`)",
            "Lambda Syntax",
            "Variable Capture",
            "Standard Interfaces (`Function`",
            "`Predicate`",
            "`Consumer`",
            "`Supplier`",
            "`BiFunction`)",
            "Method References."
          ],
          "videos": [
            {
              "id": "UzAyOkMwMDM6VjAxOkpMQVNXSUZQ",
              "rawKey": "S2:C3:V1",
              "title": "Java: Lambdas and Streams: What is functional programming?",
              "url": "https://www.linkedin.com/learning/java-lambdas-and-streams/what-is-functional-programming",
              "durationText": "2m 35s",
              "durationSeconds": 155,
              "description": "Higher-order functions and functional paradigms.",
              "categoryTag": "Functional Concepts & Lambda Syntax",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Lambda Expressions Overview",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-15.html#jls-15.27",
                  "description": "Lambda syntax grammar, parameters, and bodies."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDM6VjAyOkpMQVNGSQ",
              "rawKey": "S2:C3:V2",
              "title": "Java: Lambdas and Streams: Functional interfaces",
              "url": "https://www.linkedin.com/learning/java-lambdas-and-streams/functional-interfaces",
              "durationText": "4m 51s",
              "durationSeconds": 291,
              "description": "Single Abstract Method (SAM) types and `@FunctionalInterface`.",
              "categoryTag": "Functional Concepts & Lambda Syntax",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.FunctionalInterface`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/FunctionalInterface.html",
                  "description": "Informative annotation type for single abstract method validation."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDM6VjAzOkpTMkRMRVNW",
              "rawKey": "S2:C3:V3",
              "title": "Java SE 21 Developer: Lambda expression syntax variations",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/lambda-expression-syntax-variations",
              "durationText": "12m 8s",
              "durationSeconds": 728,
              "description": "Concise syntax, parameter type inference, expression vs block bodies.",
              "categoryTag": "Functional Concepts & Lambda Syntax",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Lambda Parameters",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-15.html#jls-15.27.1",
                  "description": "Explicit vs inferred parameter types and local variable syntax (`var`)."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDM6VjA0OkpTMkRMRUM",
              "rawKey": "S2:C3:V4",
              "title": "Java SE 21 Developer: Lambda expression contexts",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/lambda-expression-contexts",
              "durationText": "6m 5s",
              "durationSeconds": 365,
              "description": "Variable capture rules and effectively final constraints.",
              "categoryTag": "Functional Concepts & Lambda Syntax",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Variable Capture in Lambdas",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-15.html#jls-15.27.2",
                  "description": "Restrictions on capturing enclosing variables: must be effectively final."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDM6VjA1OkpTMkRDRkk",
              "rawKey": "S2:C3:V5",
              "title": "Java SE 21 Developer: Core functional interfaces",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/core-functional-interfaces",
              "durationText": "10m 35s",
              "durationSeconds": 635,
              "description": "`Predicate<T>`, `Consumer<T>`, `Function<T,R>`, `Supplier<T>`, `UnaryOperator<T>`, `BinaryOperator<T>`.",
              "categoryTag": "Built-in Functional Interfaces",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.function` Package",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/function/package-summary.html",
                  "description": "Standard 43 functional interfaces specification and primitive specializations."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDM6VjA2OkpTMkRNUg",
              "rawKey": "S2:C3:V6",
              "title": "Java SE 21 Developer: Method references",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/method-references",
              "durationText": "14m 6s",
              "durationSeconds": 846,
              "description": "The 4 method reference variations (static, bound instance, unbound instance, constructor).",
              "categoryTag": "Method References",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Method Reference Expressions",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-15.html#jls-15.13",
                  "description": "`::` operator syntax, constructor references (`Type::new`), and evaluation rules."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3020
        },
        {
          "id": "02-004",
          "number": 4,
          "title": "Streams: pipeline, collectors, primitive streams",
          "localChapterFile": "004-streams-and-pipelines.md",
          "keyConcepts": [
            "Stream Pipelines",
            "Intermediate vs Terminal Operations",
            "Laziness",
            "`Collectors` (`toList`",
            "`groupingBy`",
            "`partitioningBy`)",
            "Primitive Streams (`IntStream`)",
            "Parallel Streams."
          ],
          "videos": [
            {
              "id": "UzAyOkMwMDQ6VjAxOkpMQVNVUw",
              "rawKey": "S2:C4:V1",
              "title": "Java: Lambdas and Streams: Understanding streams",
              "url": "https://www.linkedin.com/learning/java-lambdas-and-streams/understanding-streams",
              "durationText": "2m 51s",
              "durationSeconds": 171,
              "description": "Stream data sources and execution models.",
              "categoryTag": "Pipeline Architecture & Laziness",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.stream` Package",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/package-summary.html",
                  "description": "Stream pipelines, non-interference, and side-effects."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjAyOkpMQVNVUw",
              "rawKey": "S2:C4:V2",
              "title": "Java: Lambdas and Streams: Using streams",
              "url": "https://www.linkedin.com/learning/java-lambdas-and-streams/using-streams",
              "durationText": "5m 0s",
              "durationSeconds": 300,
              "description": "`filter()`, `map()`, `collect()`.",
              "categoryTag": "Pipeline Architecture & Laziness",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.stream.Stream`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html",
                  "description": "Core stream pipeline methods and consumption lifecycle."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjAzOkpTMkRTVE1BTA",
              "rawKey": "S2:C4:V3",
              "title": "Java SE 21 Developer: Simple terminal methods and laziness",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/simple-terminal-methods-and-laziness",
              "durationText": "10m 9s",
              "durationSeconds": 609,
              "description": "Lazy evaluation and short-circuit operations.",
              "categoryTag": "Pipeline Architecture & Laziness",
              "references": [
                {
                  "label": "Java SE 21 API Docs: Stream Laziness & Terminal Operations",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/package-summary.html#StreamOps",
                  "description": "Intermediate operation fusion and short-circuit triggers."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjA0OkpTMkRUTUxN",
              "rawKey": "S2:C4:V4",
              "title": "Java SE 21 Developer: The monad-like methods",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/the-monad-like-methods",
              "durationText": "8m 41s",
              "durationSeconds": 521,
              "description": "In-depth `map()` and `flatMap()`.",
              "categoryTag": "Monadic Transformations",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Stream.flatMap()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html#flatMap(java.util.function.Function)",
                  "description": "Transforming 1-to-many stream elements into flattened single streams."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjA1OkpTMkRTVQ",
              "rawKey": "S2:C4:V5",
              "title": "Java SE 21 Developer: Stream utilities",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/stream-utilities",
              "durationText": "17m 24s",
              "durationSeconds": 1044,
              "description": "Stream generators, `takeWhile`, `dropWhile`, `Stream.iterate()`.",
              "categoryTag": "Monadic Transformations",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Stream.takeWhile()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html#takeWhile(java.util.function.Predicate)",
                  "description": "Slice streams based on predicate truth without consuming the entire source."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjA2OkpTMkRDQVJQMQ",
              "rawKey": "S2:C4:V6",
              "title": "Java SE 21 Developer: Collection and reduction, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/collection-and-reduction-part-1",
              "durationText": "13m 8s",
              "durationSeconds": 788,
              "description": "`reduce()` mechanics: identity, accumulator, combiner.",
              "categoryTag": "Reduction & Collectors",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Stream.reduce()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Stream.html#reduce(T,java.util.function.BinaryOperator)",
                  "description": "General immutable reduction algorithm."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjA3OkpTMkRDQVJQMg",
              "rawKey": "S2:C4:V7",
              "title": "Java SE 21 Developer: Collection and reduction, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/collection-and-reduction-part-2",
              "durationText": "6m 42s",
              "durationSeconds": 402,
              "description": "Mutable reduction with `collect()`.",
              "categoryTag": "Reduction & Collectors",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.stream.Collector`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collector.html",
                  "description": "Supplier, accumulator, combiner, and finisher contracts."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjA4OkpTMkRHQVBXQw",
              "rawKey": "S2:C4:V8",
              "title": "Java SE 21 Developer: Grouping and partitioning with collectors",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/grouping-and-partitioning-with-collectors",
              "durationText": "6m 33s",
              "durationSeconds": 393,
              "description": "`Collectors.groupingBy()` and `Collectors.partitioningBy()`.",
              "categoryTag": "Reduction & Collectors",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Collectors.groupingBy()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html#groupingBy(java.util.function.Function)",
                  "description": "Partitioning data into multi-valued Map buckets."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjA5OkpTMkRET1dD",
              "rawKey": "S2:C4:V9",
              "title": "Java SE 21 Developer: Downstream operations with collectors",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/downstream-operations-with-collectors",
              "durationText": "9m 10s",
              "durationSeconds": 550,
              "description": "Nested downstream collectors: `mapping`, `filtering`, `counting`.",
              "categoryTag": "Reduction & Collectors",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.stream.Collectors`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/Collectors.html",
                  "description": "Standard factory methods for composite collectors."
                }
              ]
            },
            {
              "id": "UzAyOkMwMDQ6VjEwOkpTMkRQU08",
              "rawKey": "S2:C4:V10",
              "title": "Java SE 21 Developer: Parallel stream operation",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/parallel-stream-operation",
              "durationText": "7m 21s",
              "durationSeconds": 441,
              "description": "Parallel execution, stateful operation hazards, performance trade-offs.",
              "categoryTag": "Parallel Processing",
              "references": [
                {
                  "label": "Java SE 21 API Docs: Parallelism in Streams",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/stream/package-summary.html#Parallelism",
                  "description": "ForkJoinPool common pool utilization and stateful accumulator hazards."
                }
              ]
            }
          ],
          "totalDurationSeconds": 5219
        }
      ],
      "totalVideos": 37,
      "totalDurationSeconds": 17462
    },
    {
      "id": "section-03",
      "slug": "03-concurrency-modern-java",
      "number": 3,
      "title": "Concurrency in Modern Java",
      "part": 1,
      "partTitle": "Part 1: Java & JVM Fundamentals",
      "filePath": "part-1-java-jvm-fundamentals\\03-concurrency-modern-java.md",
      "recommendedCourses": [
        {
          "title": "Advanced Java: Threads and Concurrency",
          "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency",
          "author": "Maaike van Putten",
          "duration": "2h 55m",
          "scope": ""
        },
        {
          "title": "Java SE 21 Developer (1Z0-830) Cert Prep",
          "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep",
          "author": "Pearson",
          "duration": "Modules 7 & 8",
          "scope": ""
        },
        {
          "title": "Top Features of Java 21",
          "url": "https://www.linkedin.com/learning/top-features-of-java-21",
          "author": "Kathryn Hodge",
          "duration": "",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "03-001",
          "number": 1,
          "title": "Threads, the memory model, and happens-before",
          "localChapterFile": "001-threads-and-the-jmm.md",
          "keyConcepts": [
            "Thread Lifecycle",
            "Java Memory Model (JMM)",
            "Happens-Before Relationship",
            "Shared Memory Hazards (Data Race",
            "Race Condition",
            "Deadlock",
            "Livelock)",
            "Synchronization."
          ],
          "videos": [
            {
              "id": "UzAzOkMwMDE6VjAxOkpTMkRSQVQ",
              "rawKey": "S3:C1:V1",
              "title": "Java SE 21 Developer: Runnable and thread",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/runnable-and-thread",
              "durationText": "13m 57s",
              "durationSeconds": 837,
              "description": "`Thread` class, `Runnable`, thread states, daemon threads, and termination.",
              "categoryTag": "Thread Lifecycle & Creation",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.lang.Thread`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html",
                  "description": "Thread state lifecycle specification (`NEW`, `RUNNABLE`, `BLOCKED`, `WAITING`, `TIMED_WAITING`, `TERMINATED`)."
                },
                {
                  "label": "Java Language Specification (JLS 21): Threads and Locks",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.2",
                  "description": "Thread execution model and termination."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDE6VjAyOkFKTUFJSlRBSVA",
              "rawKey": "S3:C1:V2",
              "title": "Advanced Java: Memory access in Java threads and its problems",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/memory-access-in-java-threads-and-its-problems",
              "durationText": "5m 43s",
              "durationSeconds": 343,
              "description": "Hardware memory architecture, CPU caches, main memory visibility.",
              "categoryTag": "Memory Access & Hazards",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Memory Model",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4",
                  "description": "Formal memory model, shared variables, and action orderings."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDE6VjAzOkFKTUlEUg",
              "rawKey": "S3:C1:V3",
              "title": "Advanced Java: Memory inconsistency: Data race",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/memory-inconsistency-data-race",
              "durationText": "5m 40s",
              "durationSeconds": 340,
              "description": "Multiple threads reading and writing shared variables without synchronization.",
              "categoryTag": "Memory Access & Hazards",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Data Races",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4.5",
                  "description": "Happens-before edges and definitions of conflicting accesses."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDE6VjA0OkFKVElSQw",
              "rawKey": "S3:C1:V4",
              "title": "Advanced Java: Thread interference: Race condition",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/thread-interference-race-condition",
              "durationText": "5m 38s",
              "durationSeconds": 338,
              "description": "Critical sections and non-atomic compound actions.",
              "categoryTag": "Memory Access & Hazards",
              "references": [
                {
                  "label": "Oracle Java Tutorials: Thread Interference",
                  "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/interfere.html",
                  "description": "Non-atomic operations such as counter increments (`c++`)."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDE6VjA1OkpTMkRSQ0RBTA",
              "rawKey": "S3:C1:V5",
              "title": "Java SE 21 Developer: Race conditions, deadlock, and livelock",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/race-conditions-deadlock-and-livelock",
              "durationText": "12m 20s",
              "durationSeconds": 740,
              "description": "Deadlock conditions, lock ordering, circular wait avoidance.",
              "categoryTag": "Memory Access & Hazards",
              "references": [
                {
                  "label": "Oracle Java Tutorials: Deadlock",
                  "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/deadlock.html",
                  "description": "Cyclic lock dependencies and lock ordering rules."
                },
                {
                  "label": "Oracle Java Tutorials: Livelock and Starvation",
                  "url": "https://docs.oracle.com/javase/tutorial/essential/concurrency/starvelive.html",
                  "description": "Livelock active recovery looping and thread starvation."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDE6VjA2OkpTMkRW",
              "rawKey": "S3:C1:V6",
              "title": "Java SE 21 Developer: Visibility",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/visibility",
              "durationText": "16m 49s",
              "durationSeconds": 1009,
              "description": "The `volatile` keyword, memory fences, happens-before consistency guarantees.",
              "categoryTag": "Visibility & Synchronization",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Volatile Fields",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-8.html#jls-8.3.1.4",
                  "description": "Direct cache flush and atomic read/write guarantees."
                },
                {
                  "label": "Java Language Specification (JLS 21): Synchronization Order",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.4.4",
                  "description": "Volatile read/write happens-before edges."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDE6VjA3OkFKU1BBVQ",
              "rawKey": "S3:C1:V7",
              "title": "Advanced Java: Synchronization: Purpose and use",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/synchronization-purpose-and-use",
              "durationText": "3m 53s",
              "durationSeconds": 233,
              "description": "Monitor locks, mutual exclusion, and atomic blocks.",
              "categoryTag": "Visibility & Synchronization",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Synchronization",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-17.html#jls-17.1",
                  "description": "Object monitors, `monitorenter`, and `monitorexit`."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDE6VjA4OkFKSVM",
              "rawKey": "S3:C1:V8",
              "title": "Advanced Java: Implementing synchronization",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/implementing-synchronization",
              "durationText": "3m 15s",
              "durationSeconds": 195,
              "description": "Synchronized methods and reentrant locks in practice.",
              "categoryTag": "Visibility & Synchronization",
              "references": [
                {
                  "label": "Java Language Specification (JLS 21): Synchronized Statements",
                  "url": "https://docs.oracle.com/javase/specs/jls/se21/html/jls-14.html#jls-14.19",
                  "description": "Reentrancy mechanics and monitor release semantics upon abrupt completion."
                }
              ]
            }
          ],
          "totalDurationSeconds": 4035
        },
        {
          "id": "03-002",
          "number": 2,
          "title": "Executors, futures, and CompletableFuture",
          "localChapterFile": "002-executors-and-futures.md",
          "keyConcepts": [
            "`ExecutorService`",
            "Thread Pools",
            "`Future`",
            "`CompletableFuture`",
            "`ScheduledExecutorService`",
            "`ForkJoinPool`",
            "Work-Stealing Algorithm."
          ],
          "videos": [
            {
              "id": "UzAzOkMwMDI6VjAxOkFKTVRFVFBBRQ",
              "rawKey": "S3:C2:V1",
              "title": "Advanced Java: Managing thread execution: Thread pools and executors",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/managing-thread-execution-thread-pools-and-executors",
              "durationText": "4m 3s",
              "durationSeconds": 243,
              "description": "Reusing worker threads and managing overhead.",
              "categoryTag": "Thread Pools & Executor Framework",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.Executors`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html",
                  "description": "Factory methods for `ThreadPoolExecutor` and standard thread pools."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjAyOkFKRQ",
              "rawKey": "S3:C2:V2",
              "title": "Advanced Java: ExecutorService",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/executorservice",
              "durationText": "3m 55s",
              "durationSeconds": 235,
              "description": "Submitting tasks and lifecycle management.",
              "categoryTag": "Thread Pools & Executor Framework",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.ExecutorService`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html",
                  "description": "Task submission protocol (`submit`, `invokeAll`)."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjAzOkpTMkRFQUY",
              "rawKey": "S3:C2:V3",
              "title": "Java SE 21 Developer: ExecutorService and Future",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/executorservice-and-future",
              "durationText": "9m 22s",
              "durationSeconds": 562,
              "description": "`Callable`, `Future.get()`, timeouts, and cancellation.",
              "categoryTag": "Thread Pools & Executor Framework",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.Future`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html#get()",
                  "description": "Blocking `get()` semantics, timeout overloads, and cancellation tokens."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjA0OkpTMkRFTFAx",
              "rawKey": "S3:C2:V4",
              "title": "Java SE 21 Developer: ExecutorService lifecycle, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/executorservice-lifecycle-part-1",
              "durationText": "12m 0s",
              "durationSeconds": 720,
              "description": "Shutdown states, rejecting new tasks, task draining.",
              "categoryTag": "Thread Pools & Executor Framework",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `ExecutorService.shutdown()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html#shutdown()",
                  "description": "Orderly shutdown, rejection execution handler invocation."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjA1OkpTMkRFTFAy",
              "rawKey": "S3:C2:V5",
              "title": "Java SE 21 Developer: ExecutorService lifecycle, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/executorservice-lifecycle-part-2",
              "durationText": "8m 24s",
              "durationSeconds": 504,
              "description": "Graceful termination protocols and `awaitTermination`.",
              "categoryTag": "Thread Pools & Executor Framework",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `ExecutorService.awaitTermination()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ExecutorService.html#awaitTermination(long,java.util.concurrent.TimeUnit)",
                  "description": "Standard termination waiting protocol and shutdown phases."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjA2OkFKRVRQV1M",
              "rawKey": "S3:C2:V6",
              "title": "Advanced Java: Executing tasks periodically with ScheduledExecutorService",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/executing-tasks-periodically-with-scheduledexecutorservice",
              "durationText": "6m 22s",
              "durationSeconds": 382,
              "description": "Periodic task scheduling and fixed-rate vs fixed-delay executions.",
              "categoryTag": "Thread Pools & Executor Framework",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `ScheduledExecutorService`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ScheduledExecutorService.html#scheduleAtFixedRate(java.lang.Runnable,long,long,java.util.concurrent.TimeUnit)",
                  "description": "`scheduleAtFixedRate` vs `scheduleWithFixedDelay`."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjA3OkFKVE5GTkJP",
              "rawKey": "S3:C2:V7",
              "title": "Advanced Java: The need for non-blocking operations",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/the-need-for-non-blocking-operations",
              "durationText": "3m 46s",
              "durationSeconds": 226,
              "description": "Avoiding blocked threads during I/O operations.",
              "categoryTag": "Asynchronous Workflows & CompletableFuture",
              "references": [
                {
                  "label": "Java SE 21 API Docs: Asynchronous Processing",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletionStage.html",
                  "description": "Contract for non-blocking, callback-driven computation stages."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjA4OkFKRg",
              "rawKey": "S3:C2:V8",
              "title": "Advanced Java: Future",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/future",
              "durationText": "7m 28s",
              "durationSeconds": 448,
              "description": "Blocking limitations of standard futures.",
              "categoryTag": "Asynchronous Workflows & CompletableFuture",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.Future`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Future.html",
                  "description": "Future interface contracts and blocking retrieval limitations."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjA5OkFKQw",
              "rawKey": "S3:C2:V9",
              "title": "Advanced Java: CompletableFuture",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/completablefuture",
              "durationText": "3m 9s",
              "durationSeconds": 189,
              "description": "Non-blocking callback pipelines and async composition.",
              "categoryTag": "Asynchronous Workflows & CompletableFuture",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.CompletableFuture`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html",
                  "description": "Asynchronous computation pipelines and completion stage implementation."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjEwOkFKSUM",
              "rawKey": "S3:C2:V10",
              "title": "Advanced Java: Implementing CompletableFuture",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/implementing-completablefuture",
              "durationText": "7m 19s",
              "durationSeconds": 439,
              "description": "Chaining tasks with `thenApply()`, `thenCompose()`, `thenCombine()`.",
              "categoryTag": "Asynchronous Workflows & CompletableFuture",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `CompletableFuture.thenApply()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html#thenApply(java.util.function.Function)",
                  "description": "Synchronous and asynchronous (`*Async`) transformation chaining."
                },
                {
                  "label": "Java SE 21 API Docs: `CompletableFuture.thenCompose()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CompletableFuture.html#thenCompose(java.util.function.Function)",
                  "description": "Monadic composition (flatMapping) of async stages."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjExOkFKVEVBVEZKRg",
              "rawKey": "S3:C2:V11",
              "title": "Advanced Java: Thread execution and the fork/join framework",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/thread-execution-and-the-fork-join-framework",
              "durationText": "4m 11s",
              "durationSeconds": 251,
              "description": "Recursive task decomposition.",
              "categoryTag": "Fork/Join & Work Stealing",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.ForkJoinPool`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html",
                  "description": "Divide-and-conquer parallel computing framework."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjEyOkFKV1RBV1M",
              "rawKey": "S3:C2:V12",
              "title": "Advanced Java: Worker threads and work stealing",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/worker-threads-and-work-stealing",
              "durationText": "3m 28s",
              "durationSeconds": 208,
              "description": "Deque-based work stealing algorithm.",
              "categoryTag": "Fork/Join & Work Stealing",
              "references": [
                {
                  "label": "Java SE 21 API Docs: Work-Stealing Algorithm in ForkJoinPool",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ForkJoinPool.html",
                  "description": "Dual-ended task queues and thief thread stealing mechanics."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDI6VjEzOkFKVENDT1RGSkY",
              "rawKey": "S3:C2:V13",
              "title": "Advanced Java: The core classes of the fork/join framework",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/the-core-classes-of-the-fork-join-framework",
              "durationText": "4m 50s",
              "durationSeconds": 290,
              "description": "`ForkJoinPool`, `RecursiveTask`, `RecursiveAction`.",
              "categoryTag": "Fork/Join & Work Stealing",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `RecursiveTask`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/RecursiveTask.html",
                  "description": "Value-returning recursive computations."
                },
                {
                  "label": "Java SE 21 API Docs: `RecursiveAction`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/RecursiveAction.html",
                  "description": "Void recursive computations."
                }
              ]
            }
          ],
          "totalDurationSeconds": 4697
        },
        {
          "id": "03-003",
          "number": 3,
          "title": "Concurrent collections and atomic primitives",
          "localChapterFile": "003-concurrent-collections.md",
          "keyConcepts": [
            "Thread-Safe Collections",
            "`ConcurrentHashMap`",
            "`CopyOnWriteArrayList`",
            "`BlockingQueue`",
            "`ReentrantLock`",
            "`ReadWriteLock`",
            "Atomic Variables (`AtomicInteger`",
            "`AtomicReference`)."
          ],
          "videos": [
            {
              "id": "UzAzOkMwMDM6VjAxOkFKVFNJQw",
              "rawKey": "S3:C3:V1",
              "title": "Advanced Java: Thread safety in collections",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/thread-safety-in-collections",
              "durationText": "4m 53s",
              "durationSeconds": 293,
              "description": "Iteration failure and `ConcurrentModificationException`.",
              "categoryTag": "Concurrent Collections",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.ConcurrentModificationException`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/ConcurrentModificationException.html",
                  "description": "Fail-fast iteration mechanics in non-concurrent collections."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDM6VjAyOkFKU1ZDQw",
              "rawKey": "S3:C3:V2",
              "title": "Advanced Java: Synchronized versus concurrent collections",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/synchronized-versus-concurrent-collections",
              "durationText": "4m 9s",
              "durationSeconds": 249,
              "description": "Coarse-grained locking overhead vs partitioned lock-free data structures.",
              "categoryTag": "Concurrent Collections",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Collections.synchronizedMap`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/Collections.html#synchronizedMap(java.util.Map)",
                  "description": "Coarse-grained monitor wrapper performance trade-offs."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDM6VjAzOkFKVUND",
              "rawKey": "S3:C3:V3",
              "title": "Advanced Java: Using concurrent collections",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/using-concurrent-collections",
              "durationText": "6m 57s",
              "durationSeconds": 417,
              "description": "Practical patterns with `ConcurrentHashMap`.",
              "categoryTag": "Concurrent Collections",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.ConcurrentHashMap`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/ConcurrentHashMap.html",
                  "description": "Lock striping, CAS node updates, and thread-safe bucket locking."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDM6VjA0OkpTMkRDUUFD",
              "rawKey": "S3:C3:V4",
              "title": "Java SE 21 Developer: Concurrent queues and collections",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/concurrent-queues-and-collections",
              "durationText": "10m 23s",
              "durationSeconds": 623,
              "description": "Producer-consumer architectures with `BlockingQueue` and `ConcurrentLinkedQueue`.",
              "categoryTag": "Concurrent Collections",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.BlockingQueue`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/BlockingQueue.html",
                  "description": "`put()` and `take()` blocking backpressure operations."
                },
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.CopyOnWriteArrayList`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CopyOnWriteArrayList.html",
                  "description": "Snapshot iterators and copy-on-write mutation costs."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDM6VjA1OkpTMkRTTEFBVFA",
              "rawKey": "S3:C3:V5",
              "title": "Java SE 21 Developer: Synchronizers, locks, and atomic types, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/synchronizers-locks-and-atomic-types-part-1",
              "durationText": "14m 0s",
              "durationSeconds": 840,
              "description": "Explicit locking: `ReentrantLock`, `Condition`, `ReadWriteLock`.",
              "categoryTag": "Locks & Atomic Primitives",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.locks.ReentrantLock`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantLock.html",
                  "description": "Explicit lock acquisition, timed locks, and fairness policies."
                },
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.locks.ReentrantReadWriteLock`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/locks/ReentrantReadWriteLock.html",
                  "description": "Shared read locks and exclusive write locks for read-heavy workloads."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDM6VjA2OkpTMkRTTEFBVFA",
              "rawKey": "S3:C3:V6",
              "title": "Java SE 21 Developer: Synchronizers, locks, and atomic types, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/synchronizers-locks-and-atomic-types-part-2",
              "durationText": "15m 57s",
              "durationSeconds": 957,
              "description": "Lock-free concurrency with CAS (Compare-And-Swap), `AtomicInteger`, `AtomicReference`, `CountDownLatch`, `Semaphore`.",
              "categoryTag": "Locks & Atomic Primitives",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.atomic.AtomicInteger`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/atomic/AtomicInteger.html#compareAndSet(int,int)",
                  "description": "Hardware-supported CAS primitives and lock-free state updates."
                },
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.CountDownLatch`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/CountDownLatch.html",
                  "description": "Barrier synchronization across parallel threads."
                },
                {
                  "label": "Java SE 21 API Docs: `java.util.concurrent.Semaphore`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Semaphore.html",
                  "description": "Counting semaphores for resource throttling."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3379
        },
        {
          "id": "03-004",
          "number": 4,
          "title": "Virtual threads, ScopedValue, structured concurrency",
          "localChapterFile": "004-virtual-threads.md",
          "keyConcepts": [
            "Project Loom",
            "Virtual Threads",
            "Carrier Threads",
            "Mounting/Unmounting",
            "Pinning Pitfalls",
            "Thread-per-request Scalability",
            "`ScopedValue` (JEP 464)",
            "Structured Concurrency (`StructuredTaskScope`)."
          ],
          "videos": [
            {
              "id": "UzAzOkMwMDQ6VjAxOkFKVE5GQU5DUE0",
              "rawKey": "S3:C4:V1",
              "title": "Advanced Java: The need for a new concurrent programming model",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/the-need-for-a-new-concurrent-programming-model",
              "durationText": "3m 16s",
              "durationSeconds": 196,
              "description": "OS thread overhead (1MB stack limit) and thread-per-request limits.",
              "categoryTag": "Loom Architecture & Lightweight Threads",
              "references": [
                {
                  "label": "OpenJDK JEP 444: Virtual Threads",
                  "url": "https://openjdk.org/jeps/444",
                  "description": "Motivation: high-throughput lightweight threads matching OS thread semantics."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjAyOkFKUExBVlQ",
              "rawKey": "S3:C4:V2",
              "title": "Advanced Java: Project Loom and virtual threads",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/project-loom-and-virtual-threads",
              "durationText": "5m 0s",
              "durationSeconds": 300,
              "description": "User-mode lightweight virtual threads on carrier threads.",
              "categoryTag": "Loom Architecture & Lightweight Threads",
              "references": [
                {
                  "label": "Oracle Java SE 21 Core Guide: Virtual Threads",
                  "url": "https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html",
                  "description": "Architecture of user-mode threads and carrier thread pooling."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjAzOlRGT0oyV0FWVA",
              "rawKey": "S3:C4:V3",
              "title": "Top Features of Java 21: What are virtual threads?",
              "url": "https://www.linkedin.com/learning/top-features-of-java-21/what-are-virtual-threads",
              "durationText": "",
              "durationSeconds": 0,
              "description": "High-level introduction to lightweight threading in Java 21.",
              "categoryTag": "Loom Architecture & Lightweight Threads",
              "references": [
                {
                  "label": "Java SE 21 API Docs: Virtual Threads Overview",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html#virtual-threads",
                  "description": "Characteristics, memory efficiency, and invocation patterns."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjA0OkFKUFRWVlQ",
              "rawKey": "S3:C4:V4",
              "title": "Advanced Java: Platform threads versus virtual threads",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/platform-threads-versus-virtual-threads",
              "durationText": "3m 33s",
              "durationSeconds": 213,
              "description": "Comparing execution overhead and stack footprint.",
              "categoryTag": "Platform Threads vs Virtual Threads",
              "references": [
                {
                  "label": "Oracle Java SE 21 Core Guide: Differences Between Virtual and Platform Threads",
                  "url": "https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html#GUID-E538BE3E-9426-4443-855C-62FD6A75A574",
                  "description": "Non-pooled execution, shallow stacks, and thread limits."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjA1OkFKQ1BQVlZU",
              "rawKey": "S3:C4:V5",
              "title": "Advanced Java: Comparing performance: Platform versus virtual threads",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/comparing-performance-platform-versus-virtual-threads",
              "durationText": "4m 42s",
              "durationSeconds": 282,
              "description": "Throughput comparison under heavy I/O workloads.",
              "categoryTag": "Platform Threads vs Virtual Threads",
              "references": [
                {
                  "label": "Oracle Java SE 21 Core Guide: Scheduling Virtual Threads",
                  "url": "https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html#GUID-DC4663A3-8472-460B-9FE3-BE88CE49D3D7",
                  "description": "I/O unmounting, FIFO carrier scheduling, and throughput optimization."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjA2OkFKV1RDVlQ",
              "rawKey": "S3:C4:V6",
              "title": "Advanced Java: Ways to create virtual threads",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/ways-to-create-virtual-threads",
              "durationText": "7m 30s",
              "durationSeconds": 450,
              "description": "`Thread.ofVirtual().start()`, `Executors.newVirtualThreadPerTaskExecutor()`.",
              "categoryTag": "Creating & Using Virtual Threads",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Thread.ofVirtual()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.html#ofVirtual()",
                  "description": "Fluent factory builder for virtual threads."
                },
                {
                  "label": "Java SE 21 API Docs: `Executors.newVirtualThreadPerTaskExecutor()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/util/concurrent/Executors.html#newVirtualThreadPerTaskExecutor()",
                  "description": "Virtual-thread-per-task executor implementation."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjA3OkpTMkRWVFAx",
              "rawKey": "S3:C4:V7",
              "title": "Java SE 21 Developer: Virtual threads, part 1",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/virtual-threads-part-1",
              "durationText": "8m 26s",
              "durationSeconds": 506,
              "description": "Launching virtual threads with thread factories.",
              "categoryTag": "Creating & Using Virtual Threads",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `Thread.Builder.OfVirtual`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/lang/Thread.Builder.OfVirtual.html",
                  "description": "Thread factory configuration, naming patterns, and unhandled exception handlers."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjA4OkpTMkRWVFAy",
              "rawKey": "S3:C4:V8",
              "title": "Java SE 21 Developer: Virtual threads, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/virtual-threads-part-2",
              "durationText": "17m 28s",
              "durationSeconds": 1048,
              "description": "Execution models and thread scheduling diagnostics.",
              "categoryTag": "Creating & Using Virtual Threads",
              "references": [
                {
                  "label": "OpenJDK JEP 444: Virtual Thread Diagnostics",
                  "url": "https://openjdk.org/jeps/444#Observability",
                  "description": "JFR events, thread dump analysis, and `-Djdk.traceVirtualThreadLocals`."
                }
              ]
            },
            {
              "id": "UzAzOkMwMDQ6VjA5OkFKVFRLSU1XVVY",
              "rawKey": "S3:C4:V9",
              "title": "Advanced Java: Things to keep in mind when using virtual threads",
              "url": "https://www.linkedin.com/learning/advanced-java-threads-and-concurrency/things-to-keep-in-mind-when-using-virtual-threads",
              "durationText": "4m 46s",
              "durationSeconds": 286,
              "description": "Pinning hazards with `synchronized` blocks (migrating to `ReentrantLock`), avoiding thread pooling.",
              "categoryTag": "Gotchas & Best Practices",
              "references": [
                {
                  "label": "Oracle Java SE 21 Core Guide: Virtual Thread Pinning",
                  "url": "https://docs.oracle.com/en/java/javase/21/core/virtual-threads.html#GUID-8507F077-B570-4A9A-B039-B647CAE96E24",
                  "description": "Monitorenter carrier thread pinning and migration to `ReentrantLock`."
                },
                {
                  "label": "OpenJDK JEP 464: Scoped Values (Preview)",
                  "url": "https://openjdk.org/jeps/464",
                  "description": "Replacing costly `ThreadLocal` storage with immutable scoped values across virtual threads."
                },
                {
                  "label": "OpenJDK JEP 453: Structured Concurrency (Preview)",
                  "url": "https://openjdk.org/jeps/453",
                  "description": "Managing concurrent task hierarchies and error propagation with `StructuredTaskScope`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3281
        }
      ],
      "totalVideos": 36,
      "totalDurationSeconds": 15392
    },
    {
      "id": "section-04",
      "slug": "04-web-internals-and-tdd-basics",
      "number": 4,
      "title": "Web Internals & TDD Basics",
      "part": 1,
      "partTitle": "Part 1: Java & JVM Fundamentals",
      "filePath": "part-1-java-jvm-fundamentals\\04-web-internals-and-tdd-basics.md",
      "recommendedCourses": [
        {
          "title": "Networking Foundations: Networking Basics",
          "url": "https://www.linkedin.com/learning/networking-foundations-networking-basics",
          "author": "Kevin Wallace",
          "duration": "1h 45m",
          "scope": ""
        },
        {
          "title": "HTTP Essential Training",
          "url": "https://www.linkedin.com/learning/http-essential-training",
          "author": "Morten Rand-Hendriksen",
          "duration": "1h 5m",
          "scope": ""
        },
        {
          "title": "Jakarta EE Servlets",
          "url": "https://www.linkedin.com/learning/jakarta-ee-servlets",
          "author": "Kevin Bowersox",
          "duration": "2h 15m",
          "scope": ""
        },
        {
          "title": "Learning Apache Tomcat",
          "url": "https://www.linkedin.com/learning/learning-apache-tomcat",
          "author": "Chariot Solutions",
          "duration": "1h 30m",
          "scope": ""
        },
        {
          "title": "Java SE 21 Developer (1Z0-830) Cert Prep",
          "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep",
          "author": "Pearson",
          "duration": "Module 9",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "04-001",
          "number": 1,
          "title": "TCP/IP, DNS, and HTTP semantics",
          "localChapterFile": "001-tcp-ip-and-http.md",
          "keyConcepts": [
            "OSI 7-Layer Model",
            "TCP vs UDP",
            "TCP 3-Way Handshake",
            "DNS Resolution",
            "Client/Server Architecture",
            "HTTP Methods & Idempotency",
            "Status Codes",
            "Request/Response Format",
            "Java `ServerSocket`."
          ],
          "videos": [
            {
              "id": "UzA0OkMwMDE6VjAxOk5CTFRTTA",
              "rawKey": "S4:C1:V1",
              "title": "Networking Basics: Learning the seven layers",
              "url": "https://www.linkedin.com/learning/networking-foundations-networking-basics/learning-the-seven-layers-24999853",
              "durationText": "6m 1s",
              "durationSeconds": 361,
              "description": "The 7 layers of the OSI reference model.",
              "categoryTag": "Network Foundations & Protocols",
              "references": [
                {
                  "label": "ISO/IEC 7498-1: Open Systems Interconnection Basic Reference Model",
                  "url": "https://www.iso.org/standard/20269.html",
                  "description": "Standard definition of the 7-layer OSI communication model."
                },
                {
                  "label": "IETF RFC 1122: Requirements for Internet Hosts - Communication Layers",
                  "url": "https://www.rfc-editor.org/rfc/rfc1122",
                  "description": "The 4-layer Internet architectural model."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjAyOk5CQ1RUVElN",
              "rawKey": "S4:C1:V2",
              "title": "Networking Basics: Comparison to the TCP/IP model",
              "url": "https://www.linkedin.com/learning/networking-foundations-networking-basics/comparison-to-the-tcp-ip-model-24999852",
              "durationText": "1m 49s",
              "durationSeconds": 109,
              "description": "Mapping OSI to Network Access, Internet, Transport, Application.",
              "categoryTag": "Network Foundations & Protocols",
              "references": [
                {
                  "label": "IETF RFC 1122: Section 1.1 Scope and Architectural Assumptions",
                  "url": "https://www.rfc-editor.org/rfc/rfc1122#section-1.1",
                  "description": "Protocol layering comparison and host-to-host boundaries."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjAzOk5CQ1BUSw",
              "rawKey": "S4:C1:V3",
              "title": "Networking Basics: Common protocols to know",
              "url": "https://www.linkedin.com/learning/networking-foundations-networking-basics/common-protocols-to-know-25000816",
              "durationText": "3m 50s",
              "durationSeconds": 230,
              "description": "TCP vs UDP connections, reliability, and transport characteristics.",
              "categoryTag": "Network Foundations & Protocols",
              "references": [
                {
                  "label": "IETF RFC 9293: Transmission Control Protocol (TCP)",
                  "url": "https://www.rfc-editor.org/rfc/rfc9293#section-3.4",
                  "description": "TCP state machine, 3-way handshake (`SYN`, `SYN-ACK`, `ACK`), and reliable sequencing."
                },
                {
                  "label": "IETF RFC 768: User Datagram Protocol (UDP)",
                  "url": "https://www.rfc-editor.org/rfc/rfc768",
                  "description": "Connectionless, best-effort packet delivery."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjA0Ok5CRE8",
              "rawKey": "S4:C1:V4",
              "title": "Networking Basics: DNS overview",
              "url": "https://www.linkedin.com/learning/networking-foundations-networking-basics/dns-overview-25000809",
              "durationText": "1m 42s",
              "durationSeconds": 102,
              "description": "Domain names, recursive resolvers, and DNS lookups.",
              "categoryTag": "Network Foundations & Protocols",
              "references": [
                {
                  "label": "IETF RFC 1035: Domain Names - Implementation and Specification",
                  "url": "https://www.rfc-editor.org/rfc/rfc1035#section-3",
                  "description": "DNS query/response protocol, record types (`A`, `AAAA`, `CNAME`), and root resolution."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjA1Ok5CSVY0QQ",
              "rawKey": "S4:C1:V5",
              "title": "Networking Basics: IP version 4 addresses",
              "url": "https://www.linkedin.com/learning/networking-foundations-networking-basics/ip-version-4-addresses-25000817",
              "durationText": "2m 51s",
              "durationSeconds": 171,
              "description": "Addressing, port numbers, and socket endpoints.",
              "categoryTag": "Network Foundations & Protocols",
              "references": [
                {
                  "label": "IETF RFC 791: Internet Protocol Specification",
                  "url": "https://www.rfc-editor.org/rfc/rfc791#section-3",
                  "description": "IPv4 header format, packet routing, and subnet addressing."
                },
                {
                  "label": "Java SE 21 API Docs: `java.net.ServerSocket`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/net/ServerSocket.html",
                  "description": "Listening TCP socket and connection binding."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjA2OkhFVFdJSA",
              "rawKey": "S4:C1:V6",
              "title": "HTTP Essential Training: What is HTTP?",
              "url": "https://www.linkedin.com/learning/http-essential-training/what-is-http",
              "durationText": "3m 47s",
              "durationSeconds": 227,
              "description": "Stateless client-server architecture.",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 9110: HTTP Semantics Overview",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-2",
                  "description": "Client-server messaging model, intermediary gateways, and statelessness."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjA3OkhFVEhIMkFI",
              "rawKey": "S4:C1:V7",
              "title": "HTTP Essential Training: HTTP, HTTP/2, and HTTPS",
              "url": "https://www.linkedin.com/learning/http-essential-training/http-http-2-and-https",
              "durationText": "2m 0s",
              "durationSeconds": 120,
              "description": "Evolution, binary framing, TLS transport encryption.",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 9113: HTTP/2 Specification",
                  "url": "https://www.rfc-editor.org/rfc/rfc9113#section-5",
                  "description": "Binary framing, multiplexing, and stream priorities."
                },
                {
                  "label": "IETF RFC 8446: The Transport Layer Security (TLS) Protocol Version 1.3",
                  "url": "https://www.rfc-editor.org/rfc/rfc8446",
                  "description": "Cryptographic handshake and transport security."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjA4OkhFVFRSUlA",
              "rawKey": "S4:C1:V8",
              "title": "HTTP Essential Training: The request/response pair",
              "url": "https://www.linkedin.com/learning/http-essential-training/the-request-response-pair",
              "durationText": "48s",
              "durationSeconds": 48,
              "description": "Structure of HTTP transactions.",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 9112: HTTP/1.1 Request and Response Format",
                  "url": "https://www.rfc-editor.org/rfc/rfc9112#section-2",
                  "description": "Start-line, header fields, empty line delimiter (`CRLF`), and message body."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjA5OkhFVEFPQVU",
              "rawKey": "S4:C1:V9",
              "title": "HTTP Essential Training: Anatomy of a URL",
              "url": "https://www.linkedin.com/learning/http-essential-training/anatomy-of-a-url",
              "durationText": "3m 44s",
              "durationSeconds": 224,
              "description": "Protocol, domain, port, path, query parameters.",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 3986: Uniform Resource Identifier (URI) Generic Syntax",
                  "url": "https://www.rfc-editor.org/rfc/rfc3986#section-3",
                  "description": "Syntax components: scheme, authority, path, query, fragment."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjEwOkhFVEhN",
              "rawKey": "S4:C1:V10",
              "title": "HTTP Essential Training: HTTP methods",
              "url": "https://www.linkedin.com/learning/http-essential-training/http-methods",
              "durationText": "4m 47s",
              "durationSeconds": 287,
              "description": "Safe and idempotent operations: GET, POST, PUT, DELETE, PATCH, HEAD.",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 9110: Section 9.2 Common Method Properties",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-9.2",
                  "description": "Safe methods (`GET`, `HEAD`) vs idempotent methods (`PUT`, `DELETE`)."
                },
                {
                  "label": "IETF RFC 9110: Section 9.3 Method Definitions",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3",
                  "description": "Authoritative specifications for GET, POST, PUT, DELETE."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjExOkhFVEhTTQ",
              "rawKey": "S4:C1:V11",
              "title": "HTTP Essential Training: HTTP status messages",
              "url": "https://www.linkedin.com/learning/http-essential-training/http-status-messages",
              "durationText": "3m 31s",
              "durationSeconds": 211,
              "description": "2xx (Success), 3xx (Redirection), 4xx (Client errors), 5xx (Server errors).",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 9110: Section 15 Status Codes",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-15",
                  "description": "Complete status code registry and response semantics."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjEyOkhFVFdBSEg",
              "rawKey": "S4:C1:V12",
              "title": "HTTP Essential Training: What are HTTP headers?",
              "url": "https://www.linkedin.com/learning/http-essential-training/what-are-http-headers",
              "durationText": "3m 58s",
              "durationSeconds": 238,
              "description": "Metadata, headers syntax, negotiation.",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 9110: Section 6.3 Header Fields",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-6.3",
                  "description": "Field names, values, content negotiation (`Accept`, `Content-Type`)."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDE6VjEzOkhFVEM",
              "rawKey": "S4:C1:V13",
              "title": "HTTP Essential Training: Cookies",
              "url": "https://www.linkedin.com/learning/http-essential-training/cookies",
              "durationText": "2m 36s",
              "durationSeconds": 156,
              "description": "Session tracking, `Set-Cookie`, `HttpOnly`, `SameSite`.",
              "categoryTag": "HTTP Protocol & Semantics",
              "references": [
                {
                  "label": "IETF RFC 6265: HTTP State Management Mechanism",
                  "url": "https://www.rfc-editor.org/rfc/rfc6265#section-4.1",
                  "description": "`Set-Cookie` header attributes, `Secure`, `HttpOnly`, and `SameSite` policies."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2484
        },
        {
          "id": "04-002",
          "number": 2,
          "title": "Servlet API, Tomcat internals, JSP/servlet lifecycle",
          "localChapterFile": "002-servlets-and-tomcat.md",
          "keyConcepts": [
            "Jakarta Servlet Specification",
            "Servlet Lifecycle (`init`",
            "`service`",
            "`destroy`)",
            "`HttpServletRequest`/`HttpServletResponse`",
            "Filters",
            "Web Containers",
            "Embedded Tomcat",
            "Front Controller Pattern (`DispatcherServlet`)."
          ],
          "videos": [
            {
              "id": "UzA0OkMwMDI6VjAxOkpFU0RXQlNXUw",
              "rawKey": "S4:C2:V1",
              "title": "Jakarta EE Servlets: Developing web-based systems with Servlets",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/developing-web-based-systems-with-servlets",
              "durationText": "6m 9s",
              "durationSeconds": 369,
              "description": "Role of servlets in Java web architectures.",
              "categoryTag": "Servlet Container Architecture",
              "references": [
                {
                  "label": "Jakarta Servlet 6.0 Specification",
                  "url": "https://jakarta.ee/specifications/servlet/6.0/jakarta-servlet-spec-6.0",
                  "description": "Architecture overview, component lifecycle, and web application environment."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjAyOkpFU1ND",
              "rawKey": "S4:C2:V2",
              "title": "Jakarta EE Servlets: Servlet containers",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/servlet-containers",
              "durationText": "5m 11s",
              "durationSeconds": 311,
              "description": "Container lifecycle management and thread dispatching.",
              "categoryTag": "Servlet Container Architecture",
              "references": [
                {
                  "label": "Jakarta Servlet Specification: Section 2 The Servlet Interface",
                  "url": "https://jakarta.ee/specifications/servlet/6.0/jakarta-servlet-spec-6.0#the-servlet-interface",
                  "description": "`init()`, `service()`, and `destroy()` lifecycle contract."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjAzOkpFU1NWRUM",
              "rawKey": "S4:C2:V3",
              "title": "Jakarta EE Servlets: Standalone vs. embedded containers",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/standalone-vs-embedded-containers",
              "durationText": "3m 17s",
              "durationSeconds": 197,
              "description": "Traditional server deployment vs embedded container runtimes.",
              "categoryTag": "Servlet Container Architecture",
              "references": [
                {
                  "label": "Apache Tomcat 10.1 Architecture: Containers and Connectors",
                  "url": "https://tomcat.apache.org/tomcat-10.1-doc/architecture/overview.html",
                  "description": "Server engine, Service abstraction, and Catalina container hierarchy."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjA0OkpFU1JBRUM",
              "rawKey": "S4:C2:V4",
              "title": "Jakarta EE Servlets: Running an embedded container",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/running-an-embedded-container",
              "durationText": "10m 45s",
              "durationSeconds": 645,
              "description": "Setting up an embedded container (as Spring Boot does).",
              "categoryTag": "Servlet Container Architecture",
              "references": [
                {
                  "label": "Apache Tomcat 10.1 API: `org.apache.catalina.startup.Tomcat`",
                  "url": "https://tomcat.apache.org/tomcat-10.1-doc/api/org/apache/catalina/startup/Tomcat.html",
                  "description": "Programmatic embedded Tomcat initialization."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjA1OkpFU01SVEFT",
              "rawKey": "S4:C2:V5",
              "title": "Jakarta EE Servlets: Mapping requests to a Servlet",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/mapping-requests-to-a-servlet",
              "durationText": "4m 38s",
              "durationSeconds": 278,
              "description": "URL mapping patterns and resolution order.",
              "categoryTag": "Request/Response Lifecycle & Handling",
              "references": [
                {
                  "label": "Jakarta Servlet Specification: Section 12 Mapping Requests to Servlets",
                  "url": "https://jakarta.ee/specifications/servlet/6.0/jakarta-servlet-spec-6.0#mapping-requests-to-servlets",
                  "description": "Exact match, prefix match, extension match, and default servlet."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjA2OkpFU1JITQ",
              "rawKey": "S4:C2:V6",
              "title": "Jakarta EE Servlets: Request handler methods",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/request-handler-methods",
              "durationText": "5m 19s",
              "durationSeconds": 319,
              "description": "`doGet()`, `doPost()`, `doPut()`, `doDelete()`.",
              "categoryTag": "Request/Response Lifecycle & Handling",
              "references": [
                {
                  "label": "Jakarta Servlet API: `jakarta.servlet.http.HttpServlet`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/http/httpservlet.html",
                  "description": "Method dispatching to `doGet`, `doPost`, `doPut`, `doDelete`."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjA3OkpFU09ERlFQ",
              "rawKey": "S4:C2:V7",
              "title": "Jakarta EE Servlets: Obtaining data from query parameters",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/obtaining-data-from-query-parameters",
              "durationText": "8m 0s",
              "durationSeconds": 480,
              "description": "Extracting parameters from query string.",
              "categoryTag": "Request/Response Lifecycle & Handling",
              "references": [
                {
                  "label": "Jakarta Servlet API: `ServletRequest.getParameter()`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/servletrequest.html#getParameter(java.lang.String)",
                  "description": "Query parameter and form URL-encoded body parameter parsing."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjA4OkpFU09ERkg",
              "rawKey": "S4:C2:V8",
              "title": "Jakarta EE Servlets: Obtaining data from headers",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/obtaining-data-from-headers",
              "durationText": "5m 53s",
              "durationSeconds": 353,
              "description": "Parsing client request headers.",
              "categoryTag": "Request/Response Lifecycle & Handling",
              "references": [
                {
                  "label": "Jakarta Servlet API: `HttpServletRequest.getHeader()`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/http/httpservletrequest.html#getHeader(java.lang.String)",
                  "description": "Header extraction and date/int header conversion helpers."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjA5OkpFU1NSU0M",
              "rawKey": "S4:C2:V9",
              "title": "Jakarta EE Servlets: Setting response status codes",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/setting-response-status-codes",
              "durationText": "3m 9s",
              "durationSeconds": 189,
              "description": "Producing HTTP response statuses.",
              "categoryTag": "Request/Response Lifecycle & Handling",
              "references": [
                {
                  "label": "Jakarta Servlet API: `HttpServletResponse.setStatus()`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/http/httpservletresponse.html#setStatus(int)",
                  "description": "Setting HTTP response status codes."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjEwOkpFU1JSSA",
              "rawKey": "S4:C2:V10",
              "title": "Jakarta EE Servlets: Returning response headers",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/returning-response-headers",
              "durationText": "2m 49s",
              "durationSeconds": 169,
              "description": "Setting content types and response headers.",
              "categoryTag": "Request/Response Lifecycle & Handling",
              "references": [
                {
                  "label": "Jakarta Servlet API: `HttpServletResponse.setHeader()`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/http/httpservletresponse.html#setHeader(java.lang.String,java.lang.String)",
                  "description": "Header mutation and character encoding."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjExOkpFU0Y",
              "rawKey": "S4:C2:V11",
              "title": "Jakarta EE Servlets: Filters",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/filters",
              "durationText": "6m 48s",
              "durationSeconds": 408,
              "description": "Filter chain pipeline (`FilterChain.doFilter`) for authentication and logging.",
              "categoryTag": "Interception & Request Dispatching",
              "references": [
                {
                  "label": "Jakarta Servlet Specification: Section 6 Filters",
                  "url": "https://jakarta.ee/specifications/servlet/6.0/jakarta-servlet-spec-6.0#filters",
                  "description": "Filter chaining, request wrapping, and pre/post invocation hooks."
                },
                {
                  "label": "Jakarta Servlet API: `jakarta.servlet.FilterChain`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/filterchain.html",
                  "description": "`doFilter` invocation mechanics."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjEyOkpFU0ZS",
              "rawKey": "S4:C2:V12",
              "title": "Jakarta EE Servlets: Forwarding requests",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/forwarding-requests",
              "durationText": "6m 7s",
              "durationSeconds": 367,
              "description": "Server-side forward with `RequestDispatcher` (the Front Controller pattern).",
              "categoryTag": "Interception & Request Dispatching",
              "references": [
                {
                  "label": "Jakarta Servlet API: `jakarta.servlet.RequestDispatcher`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/requestdispatcher.html",
                  "description": "`forward()` and `include()` delegation contracts."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjEzOkpFU1JBUg",
              "rawKey": "S4:C2:V13",
              "title": "Jakarta EE Servlets: Redirecting a request",
              "url": "https://www.linkedin.com/learning/jakarta-ee-servlets/redirecting-a-request",
              "durationText": "3m 23s",
              "durationSeconds": 203,
              "description": "Client-side 302 redirects vs internal forwarding.",
              "categoryTag": "Interception & Request Dispatching",
              "references": [
                {
                  "label": "Jakarta Servlet API: `HttpServletResponse.sendRedirect()`",
                  "url": "https://jakarta.ee/specifications/platform/10/apidocs/jakarta/servlet/http/httpservletresponse.html#sendRedirect(java.lang.String)",
                  "description": "Generating 302 redirect responses."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjE0OkxBVFdJVA",
              "rawKey": "S4:C2:V14",
              "title": "Learning Apache Tomcat: What is Tomcat?",
              "url": "https://www.linkedin.com/learning/learning-apache-tomcat/what-is-tomcat",
              "durationText": "1m 57s",
              "durationSeconds": 117,
              "description": "Catalina engine, Coyote connector, servlet specifications.",
              "categoryTag": "Tomcat Server Internals",
              "references": [
                {
                  "label": "Apache Tomcat 10.1 Documentation: Introduction",
                  "url": "https://tomcat.apache.org/tomcat-10.1-doc/introduction.html",
                  "description": "Catalina Servlet engine and Coyote HTTP connector architecture."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjE1OkxBVFRDRk8",
              "rawKey": "S4:C2:V15",
              "title": "Learning Apache Tomcat: Tomcat config files overview",
              "url": "https://www.linkedin.com/learning/learning-apache-tomcat/tomcat-config-files-overview",
              "durationText": "4m 19s",
              "durationSeconds": 259,
              "description": "Key configurations (`server.xml`, `context.xml`).",
              "categoryTag": "Tomcat Server Internals",
              "references": [
                {
                  "label": "Apache Tomcat 10.1 Configuration: `server.xml`",
                  "url": "https://tomcat.apache.org/tomcat-10.1-doc/config/server.html",
                  "description": "Server, Service, Connector, Engine, Host, and Context elements."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDI6VjE2OkxBVFJUTA",
              "rawKey": "S4:C2:V16",
              "title": "Learning Apache Tomcat: Reading Tomcat logs",
              "url": "https://www.linkedin.com/learning/learning-apache-tomcat/reading-tomcat-logs",
              "durationText": "4m 12s",
              "durationSeconds": 252,
              "description": "Access logs, error logs, and debugging server events.",
              "categoryTag": "Tomcat Server Internals",
              "references": [
                {
                  "label": "Apache Tomcat 10.1 Documentation: Logging",
                  "url": "https://tomcat.apache.org/tomcat-10.1-doc/logging.html",
                  "description": "JULI logging implementation and AccessLogValve formatting."
                }
              ]
            }
          ],
          "totalDurationSeconds": 4916
        },
        {
          "id": "04-003",
          "number": 3,
          "title": "Residual concepts and review (NIO.2, Channels, Buffers)",
          "localChapterFile": "003-misc.md",
          "keyConcepts": [
            "High-Performance I/O",
            "`FileChannel`",
            "NIO Buffers (`ByteBuffer`)",
            "Buffer Pointers (`position`",
            "`limit`",
            "`capacity`",
            "`flip()`",
            "`clear()`)",
            "Non-Blocking I/O."
          ],
          "videos": [
            {
              "id": "UzA0OkMwMDM6VjAxOkpTMkRXV0M",
              "rawKey": "S4:C3:V1",
              "title": "Java SE 21 Developer: Working with channel",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/working-with-channel",
              "durationText": "7m 36s",
              "durationSeconds": 456,
              "description": "`FileChannel`, `ByteBuffer.allocate()`, writing, and transitioning modes with `buffer.flip()`.",
              "categoryTag": "Channels & Buffers Mechanics",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.nio.channels.FileChannel`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/channels/FileChannel.html",
                  "description": "Reading and writing bytes to channels, memory-mapped files."
                },
                {
                  "label": "Java SE 21 API Docs: `java.nio.Buffer`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/Buffer.html",
                  "description": "Core pointer invariant: `0 <= mark <= position <= limit <= capacity`."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDM6VjAyOkpTMkRRRERDQg",
              "rawKey": "S4:C3:V2",
              "title": "Java SE 21 Developer: Question deep dive - Channels & Buffers",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/question-deep-dive-27563558",
              "durationText": "5m 12s",
              "durationSeconds": 312,
              "description": "In-depth walkthrough of pointer arithmetic (`position`, `limit`, `capacity`) and read/write loops.",
              "categoryTag": "Channels & Buffers Mechanics",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.nio.ByteBuffer`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/ByteBuffer.html#flip()",
                  "description": "`flip()` method behavior for switching buffer from write mode to read mode."
                }
              ]
            },
            {
              "id": "UzA0OkMwMDM6VjAzOkpTMkRGTVAy",
              "rawKey": "S4:C3:V3",
              "title": "Java SE 21 Developer: Files methods, part 2",
              "url": "https://www.linkedin.com/learning/java-se-21-developer-1z0-830-cert-prep/files-methods-part-2",
              "durationText": "13m 14s",
              "durationSeconds": 794,
              "description": "Recursive directory walking (`Files.walk()`), stream filtering, and path attributes.",
              "categoryTag": "NIO Directory Traversal",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.nio.file.Files.walk()`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/nio/file/Files.html#walk(java.nio.file.Path,java.nio.file.FileVisitOption...)",
                  "description": "Lazy directory stream recursion and depth controls."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1562
        }
      ],
      "totalVideos": 32,
      "totalDurationSeconds": 8962
    },
    {
      "id": "section-05",
      "slug": "05-spring-core",
      "number": 5,
      "title": "Spring Core & Internals",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\05-spring-core.md",
      "recommendedCourses": [
        {
          "title": "Spring Framework in Depth",
          "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413",
          "author": "Frank P Moley III",
          "duration": "2h 08m",
          "scope": ""
        },
        {
          "title": "Learning Spring 6 with Spring Boot 3",
          "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3",
          "author": "Mary Ellen Bowman",
          "duration": "2h 15m",
          "scope": ""
        },
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Mary Ellen Bowman",
          "duration": "4h 32m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "05-001",
          "number": 1,
          "title": "Inversion of Control and dependency injection",
          "localChapterFile": "001-ioc-and-di.md",
          "keyConcepts": [
            "IoC Container",
            "Dependency Injection",
            "Constructor vs Setter vs Field Injection",
            "`@Configuration`",
            "`@Bean`",
            "`@Component`",
            "`@Autowired`",
            "Bean Scopes."
          ],
          "videos": [
            {
              "id": "UzA1OkMwMDE6VjAxOlNGSURUSU9DSUM",
              "rawKey": "S5:C1:V1",
              "title": "Spring Framework in Depth: The inversion of control (IoC) container",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-inversion-of-control-ioc-container",
              "durationText": "5m 40s",
              "durationSeconds": 340,
              "description": "Core philosophy of IoC and container management.",
              "categoryTag": "IoC Container & ApplicationContext",
              "references": [
                {
                  "label": "Spring Framework Reference: The IoC Container",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/introduction.html",
                  "description": "Core principles of Inversion of Control and dependency inversion."
                },
                {
                  "label": "Spring Framework Reference: Container Overview",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/basics.html",
                  "description": "`BeanFactory` vs `ApplicationContext` architectures."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjAyOlNGSURJVFRB",
              "rawKey": "S5:C1:V2",
              "title": "Spring Framework in Depth: Introduction to the ApplicationContext",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/introduction-to-the-applicationcontext",
              "durationText": "4m 28s",
              "durationSeconds": 268,
              "description": "`ApplicationContext` role, instantiation, and bean registries.",
              "categoryTag": "IoC Container & ApplicationContext",
              "references": [
                {
                  "label": "Spring Framework Reference: Instantiating a Container",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/basics.html#beans-factory-instantiation",
                  "description": "Container boot with `AnnotationConfigApplicationContext`."
                },
                {
                  "label": "Spring Framework API: `ApplicationContext`",
                  "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/ApplicationContext.html",
                  "description": "Central interface providing enterprise container services."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjAzOlNGSURBSU9DSUQ",
              "rawKey": "S5:C1:V3",
              "title": "Spring Framework in Depth: Articles - Inversion of control in depth",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/articles/inversion-of-control-in-depth",
              "durationText": "1m 0s",
              "durationSeconds": 60,
              "description": "Structural breakdown of Inversion of Control patterns.",
              "categoryTag": "IoC Container & ApplicationContext",
              "references": [
                {
                  "label": "Spring Framework Reference: Dependency Injection Overview",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html",
                  "description": "How decoupling occurs via container-managed dependency graph construction."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjA0OkNTQk1JT0NQ",
              "rawKey": "S5:C1:V4",
              "title": "Creating Spring Boot Microservices: Inversion of control pattern",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/inversion-of-control-pattern",
              "durationText": "5m 29s",
              "durationSeconds": 329,
              "description": "Practical dependency inversion in modern services.",
              "categoryTag": "IoC Container & ApplicationContext",
              "references": [
                {
                  "label": "Spring Framework Reference: Constructor-based vs Setter-based DI",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html#beans-constructor-injection",
                  "description": "Comparative architectural evaluation of injection styles."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjA1OkxTNldTQjNVREk",
              "rawKey": "S5:C1:V5",
              "title": "Learning Spring 6 with Spring Boot 3: Understand dependency injection",
              "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/understand-dependency-injection",
              "durationText": "5m 4s",
              "durationSeconds": 304,
              "description": "How Spring provides collaborators to beans.",
              "categoryTag": "Dependency Injection & Wiring",
              "references": [
                {
                  "label": "Spring Framework Reference: Dependencies and Configuration in Detail",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-properties-detailed.html",
                  "description": "Resolving dependencies and property values."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjA2OlNGSURDT1NXSg",
              "rawKey": "S5:C1:V6",
              "title": "Spring Framework in Depth: Configuration of Spring with Java",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/configuration-of-spring-with-java",
              "durationText": "6m 21s",
              "durationSeconds": 381,
              "description": "Java-based configuration using `@Configuration` and `@Bean` methods.",
              "categoryTag": "Dependency Injection & Wiring",
              "references": [
                {
                  "label": "Spring Framework Reference: Java-based Container Configuration",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/java.html",
                  "description": "Full specification of `@Configuration` and `@Bean` semantics."
                },
                {
                  "label": "Spring Framework Reference: Full @Configuration vs Lite @Bean",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html",
                  "description": "CGLIB subclassing and inter-bean method invocation guarantees."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjA3OkNTQk1TQUFTQg",
              "rawKey": "S5:C1:V7",
              "title": "Creating Spring Boot Microservices: Spring ApplicationContext and Spring Beans",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-application-context-and-spring-beans",
              "durationText": "2m 24s",
              "durationSeconds": 144,
              "description": "Bean definitions and lifecycle inside the context.",
              "categoryTag": "Dependency Injection & Wiring",
              "references": [
                {
                  "label": "Spring Framework Reference: Bean Overview",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/definition.html",
                  "description": "`BeanDefinition` metadata representation and naming conventions."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjA4OkNTQk1TQUE",
              "rawKey": "S5:C1:V8",
              "title": "Creating Spring Boot Microservices: Spring autowiring annotations",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-autowiring-annotations",
              "durationText": "3m 14s",
              "durationSeconds": 194,
              "description": "Constructor injection vs field injection and `@Autowired`.",
              "categoryTag": "Dependency Injection & Wiring",
              "references": [
                {
                  "label": "Spring Framework Reference: Using @Autowired",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired.html",
                  "description": "Rules for implicit constructor autowiring and `@Qualifier` disambiguation."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjA5OlNGSURUQ1M",
              "rawKey": "S5:C1:V9",
              "title": "Spring Framework in Depth: The component scan",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-component-scan",
              "durationText": "3m 4s",
              "durationSeconds": 184,
              "description": "Discovery of annotated beans at runtime.",
              "categoryTag": "Stereotype Annotations & Component Scanning",
              "references": [
                {
                  "label": "Spring Framework Reference: Classpath Scanning and Managed Components",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html",
                  "description": "Automatic candidate component detection."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjEwOlNGSURJQ1M",
              "rawKey": "S5:C1:V10",
              "title": "Spring Framework in Depth: Implementing component scanning",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implementing-component-scanning",
              "durationText": "4m 33s",
              "durationSeconds": 273,
              "description": "Base package scanning and filter configuration.",
              "categoryTag": "Stereotype Annotations & Component Scanning",
              "references": [
                {
                  "label": "Spring Framework Reference: Using Filters to Customize Scanning",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html#beans-scanning-filters",
                  "description": "Include/exclude filters with regex and assignable types."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjExOkxTNldTQjNBRQ",
              "rawKey": "S5:C1:V11",
              "title": "Learning Spring 6 with Spring Boot 3: Annotations everywhere",
              "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/annotations-everywhere",
              "durationText": "6m 45s",
              "durationSeconds": 405,
              "description": "`@Component`, `@Service`, `@Repository`, and stereotype conventions.",
              "categoryTag": "Stereotype Annotations & Component Scanning",
              "references": [
                {
                  "label": "Spring Framework Reference: Stereotype Annotations",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html#beans-stereotype-annotations",
                  "description": "Semantic layering with `@Component`, `@Repository`, `@Service`, `@Controller`."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjEyOkxTNldTQjNCQVM",
              "rawKey": "S5:C1:V12",
              "title": "Learning Spring 6 with Spring Boot 3: Build a service abstraction",
              "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/build-a-service-abstraction",
              "durationText": "4m 14s",
              "durationSeconds": 254,
              "description": "Designing interfaces for Spring bean injection.",
              "categoryTag": "Stereotype Annotations & Component Scanning",
              "references": [
                {
                  "label": "Spring Framework Reference: Defining Bean Metadata",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/definition.html#beans-factory-collaborators",
                  "description": "Interface segregation and proxying contracts."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDE6VjEzOkxTNldTQjNEQVM",
              "rawKey": "S5:C1:V13",
              "title": "Learning Spring 6 with Spring Boot 3: Develop a service object with Spring",
              "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/develop-a-service-object-with-spring",
              "durationText": "9m 57s",
              "durationSeconds": 597,
              "description": "Full wiring demonstration of service objects.",
              "categoryTag": "Stereotype Annotations & Component Scanning",
              "references": [
                {
                  "label": "Spring Framework Reference: Fine-tuning Annotation-based Autowiring with Qualifiers",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired-qualifiers.html",
                  "description": "Disambiguating multiple service implementations."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3733
        },
        {
          "id": "05-002",
          "number": 2,
          "title": "Bean lifecycle, scopes, profiles, environment",
          "localChapterFile": "002-bean-lifecycle-and-scopes.md",
          "keyConcepts": [
            "Bean Lifecycle Stages (BeanDefinition",
            "Instantiation",
            "Setters",
            "BeanPostProcessor",
            "Destruction)",
            "Scopes (`singleton`",
            "`prototype`)",
            "`@PostConstruct`",
            "`@PreDestroy`",
            "`SmartLifecycle`",
            "Environment",
            "Profiles."
          ],
          "videos": [
            {
              "id": "UzA1OkMwMDI6VjAxOlNGSURCUw",
              "rawKey": "S5:C2:V1",
              "title": "Spring Framework in Depth: Bean scopes",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/bean-scopes",
              "durationText": "3m 25s",
              "durationSeconds": 205,
              "description": "Detailed examination of Singleton and Prototype bean scopes.",
              "categoryTag": "Bean Scopes",
              "references": [
                {
                  "label": "Spring Framework Reference: Bean Scopes",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html",
                  "description": "Singleton, Prototype, Request, Session, Application scopes."
                },
                {
                  "label": "Spring Framework Reference: Scoped Beans as Dependencies",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html#beans-factory-scopes-other-injection",
                  "description": "Using scoped proxies with `<aop:scoped-proxy/>` or `@Scope(proxyMode = ...)`."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjAyOlNGSURXVExJU0k",
              "rawKey": "S5:C2:V2",
              "title": "Spring Framework in Depth: Why the lifecycle is so important",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/why-the-lifecycle-is-so-important",
              "durationText": "3m 45s",
              "durationSeconds": 225,
              "description": "Why lifecycle management prevents resource leaks and initialization bugs.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Customizing the Nature of a Bean",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-nature.html",
                  "description": "Lifecycle callback phases and container hooks."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjAzOlNGSURMTQ",
              "rawKey": "S5:C2:V3",
              "title": "Spring Framework in Depth: Lifecycle methods",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/lifecycle-methods",
              "durationText": "4m 21s",
              "durationSeconds": 261,
              "description": "Initialization and destruction callback hooks.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Initialization Callbacks",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-nature.html#beans-factory-nature-lifecycle",
                  "description": "`@PostConstruct` vs `InitializingBean.afterPropertiesSet()` vs `@Bean(initMethod=...)`."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjA0OlNGSURUT1A",
              "rawKey": "S5:C2:V4",
              "title": "Spring Framework in Depth: The overall picture",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-overall-picture",
              "durationText": "1m 57s",
              "durationSeconds": 117,
              "description": "Architectural timeline of a bean's life inside the container.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Bean Lifecycle Sequence",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-nature.html#beans-factory-nature-lifecycle-order",
                  "description": "Execution sequence from `BeanNameAware` through `BeanPostProcessor` to `DisposableBean`."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjA1OlNGSURUSVBMQkQ",
              "rawKey": "S5:C2:V5",
              "title": "Spring Framework in Depth: The init phase: Loading bean definitions",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-init-phase-loading-bean-definitions",
              "durationText": "3m 29s",
              "durationSeconds": 209,
              "description": "Parsing configuration into `BeanDefinition` metadata.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework API: `BeanDefinition`",
                  "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/beans/factory/config/BeanDefinition.html",
                  "description": "Core metadata interface describing bean properties, constructor args, and lifecycle flags."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjA2OlNGSURJQkZQUA",
              "rawKey": "S5:C2:V6",
              "title": "Spring Framework in Depth: Init: Bean factory post-processing",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-factory-post-processing",
              "durationText": "3m 49s",
              "durationSeconds": 229,
              "description": "Mutating bean metadata with `BeanFactoryPostProcessor`.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Customizing Configuration Metadata with a `BeanFactoryPostProcessor`",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-extension.html#beans-factory-extension-factory-post-processors",
                  "description": "Transforming metadata before instances are instantiated."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjA3OlNGSURJQkk",
              "rawKey": "S5:C2:V7",
              "title": "Spring Framework in Depth: Init: Bean instantiation",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-instantiation",
              "durationText": "3m 21s",
              "durationSeconds": 201,
              "description": "Constructor invocation and object allocation on the heap.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Instantiating Beans",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/definition.html#beans-factory-class",
                  "description": "Constructor reflection, static factory methods, and instance factory methods."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjA4OlNGSURJUw",
              "rawKey": "S5:C2:V8",
              "title": "Spring Framework in Depth: Init: Setters",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-setters",
              "durationText": "1m 51s",
              "durationSeconds": 111,
              "description": "Property population and dependency wiring.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Setter-based Dependency Injection",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/dependencies/factory-collaborators.html#beans-setter-injection",
                  "description": "Container calling setter methods after invoking no-arg or parameterized constructors."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjA5OlNGSURJQlBQ",
              "rawKey": "S5:C2:V9",
              "title": "Spring Framework in Depth: Init: Bean post-processing",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-bean-post-processing",
              "durationText": "3m 8s",
              "durationSeconds": 188,
              "description": "`BeanPostProcessor` (`postProcessBeforeInitialization` and `postProcessAfterInitialization`).",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Customizing Beans by Using a `BeanPostProcessor`",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-extension.html#beans-factory-extension-bpp",
                  "description": "Wrapping instances with dynamic proxies and executing custom validation logic."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjEwOlNGSURJREJPQw",
              "rawKey": "S5:C2:V10",
              "title": "Spring Framework in Depth: Init: Differences based on configuration",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/init-differences-based-on-configuration",
              "durationText": "2m 46s",
              "durationSeconds": 166,
              "description": "Comparing Java Config vs annotations vs XML lifecycle flow.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Combining Java and Annotation Configurations",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/java/composing-configuration-classes.html",
                  "description": "Priority and precedence rules during bean registration."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjExOlNGSURUVVA",
              "rawKey": "S5:C2:V11",
              "title": "Spring Framework in Depth: The use phase",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-use-phase",
              "durationText": "3m 2s",
              "durationSeconds": 182,
              "description": "Active serving state of singletons.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: The Singleton Scope",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html#beans-factory-scopes-singleton",
                  "description": "Thread-safe access to cached singleton instances."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjEyOlNGSURURFA",
              "rawKey": "S5:C2:V12",
              "title": "Spring Framework in Depth: The destruction phase",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/the-destruction-phase",
              "durationText": "3m 15s",
              "durationSeconds": 195,
              "description": "`@PreDestroy`, `DisposableBean`, and graceful shutdown cleanup.",
              "categoryTag": "Bean Lifecycle Deep Dive",
              "references": [
                {
                  "label": "Spring Framework Reference: Destruction Callbacks",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/factory-nature.html#beans-factory-nature-lifecycle-destruct",
                  "description": "JVM shutdown hook registration and orderly bean tear-down."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjEzOlNGSURXV1RF",
              "rawKey": "S5:C2:V13",
              "title": "Spring Framework in Depth: Work with the environment",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/work-with-the-environment",
              "durationText": "5m 27s",
              "durationSeconds": 327,
              "description": "`Environment` abstraction and property source hierarchy.",
              "categoryTag": "Environment & Profiles",
              "references": [
                {
                  "label": "Spring Framework Reference: Environment Abstraction",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/environment.html",
                  "description": "Profiles, properties, and the `PropertySourcesPropertyResolver`."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDI6VjE0OlNGSURQ",
              "rawKey": "S5:C2:V14",
              "title": "Spring Framework in Depth: Profiles",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/profiles",
              "durationText": "3m 42s",
              "durationSeconds": 222,
              "description": "Activating profiles and conditional bean definition with `@Profile`.",
              "categoryTag": "Environment & Profiles",
              "references": [
                {
                  "label": "Spring Framework Reference: Bean Definition Profiles",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/environment.html#beans-definition-profiles",
                  "description": "`@Profile` annotation usage and programmatic activation."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2838
        },
        {
          "id": "05-003",
          "number": 3,
          "title": "AOP, proxies, SpEL, and event listeners",
          "localChapterFile": "003-aop-and-spel.md",
          "keyConcepts": [
            "Aspect-Oriented Programming (AOP)",
            "Join Points",
            "Pointcuts",
            "Advice (`@Before`",
            "`@After`",
            "`@Around`)",
            "Proxies (JDK Dynamic vs CGLIB)",
            "Spring Expression Language (SpEL)."
          ],
          "videos": [
            {
              "id": "UzA1OkMwMDM6VjAxOlNGSURQ",
              "rawKey": "S5:C3:V1",
              "title": "Spring Framework in Depth: Proxies",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/proxies",
              "durationText": "2m 4s",
              "durationSeconds": 124,
              "description": "JDK Dynamic Proxies (interface-based) vs CGLIB subclasses.",
              "categoryTag": "Proxies & Interception Mechanism",
              "references": [
                {
                  "label": "Spring Framework Reference: Proxying Mechanisms",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop/proxying.html",
                  "description": "JDK dynamic proxies vs CGLIB bytecode generation, and self-invocation limitations."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjAyOlNGSURBSVM",
              "rawKey": "S5:C3:V2",
              "title": "Spring Framework in Depth: Aspecting in Spring",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/aspecting-in-spring",
              "durationText": "5m 45s",
              "durationSeconds": 345,
              "description": "Cross-cutting concerns, aspects, and proxy wrapping.",
              "categoryTag": "Aspect-Oriented Programming (AOP)",
              "references": [
                {
                  "label": "Spring Framework Reference: Aspect Oriented Programming with Spring",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop.html",
                  "description": "Core AOP concepts: Join point, Pointcut, Advice, Target object, AOP proxy."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjAzOlNGSUREQU9QQVA",
              "rawKey": "S5:C3:V3",
              "title": "Spring Framework in Depth: Define aspect-oriented programming (AOP) pointcuts",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/define-aspect-oriented-programming-aop-pointcuts",
              "durationText": "4m 39s",
              "durationSeconds": 279,
              "description": "Pointcut expressions, `execution()`, `within()`, and annotations.",
              "categoryTag": "Aspect-Oriented Programming (AOP)",
              "references": [
                {
                  "label": "Spring Framework Reference: Declaring a Pointcut",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/pointcuts.html",
                  "description": "Pointcut designators (`execution`, `within`, `this`, `target`, `args`, `@annotation`)."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjA0OlNGSURJQUFC",
              "rawKey": "S5:C3:V4",
              "title": "Spring Framework in Depth: Implement AOP advice: Before",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-before",
              "durationText": "4m 18s",
              "durationSeconds": 258,
              "description": "Pre-execution interceptors with `@Before`.",
              "categoryTag": "Aspect-Oriented Programming (AOP)",
              "references": [
                {
                  "label": "Spring Framework Reference: Before Advice",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/advice.html#aop-advice-before",
                  "description": "Syntax and JoinPoint parameter inspection before method entry."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjA1OlNGSURJQUFB",
              "rawKey": "S5:C3:V5",
              "title": "Spring Framework in Depth: Implement AOP advice: After",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-after",
              "durationText": "3m 27s",
              "durationSeconds": 207,
              "description": "Post-execution cleanup with `@After` and `@AfterReturning`.",
              "categoryTag": "Aspect-Oriented Programming (AOP)",
              "references": [
                {
                  "label": "Spring Framework Reference: After Returning & After Throwing Advice",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/advice.html#aop-advice-after-returning",
                  "description": "Accessing return values and intercepting exceptions."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjA2OlNGSURJQUFB",
              "rawKey": "S5:C3:V6",
              "title": "Spring Framework in Depth: Implement AOP advice: Around",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/implement-aop-advice-around",
              "durationText": "4m 3s",
              "durationSeconds": 243,
              "description": "Surrounding join points with `ProceedingJoinPoint` for timing and security.",
              "categoryTag": "Aspect-Oriented Programming (AOP)",
              "references": [
                {
                  "label": "Spring Framework Reference: Around Advice",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/advice.html#aop-advice-around",
                  "description": "`ProceedingJoinPoint.proceed()` execution control, performance timing, and caching."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjA3OlNGSURDQllPQQ",
              "rawKey": "S5:C3:V7",
              "title": "Spring Framework in Depth: Challenge: Building your own aspect",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/challenge-building-your-own-aspect",
              "durationText": "54s",
              "durationSeconds": 54,
              "description": "Practice aspect implementation.",
              "categoryTag": "Aspect-Oriented Programming (AOP)",
              "references": [
                {
                  "label": "Spring Framework Reference: Enabling @AspectJ Support",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj.html#aop-ataspectj-configure",
                  "description": "`@EnableAspectJAutoProxy` configuration."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjA4OlNGSURTQllPQQ",
              "rawKey": "S5:C3:V8",
              "title": "Spring Framework in Depth: Solution: Building your own aspect",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/solution-building-your-own-aspect",
              "durationText": "1m 29s",
              "durationSeconds": 89,
              "description": "Aspect solution walkthrough.",
              "categoryTag": "Aspect-Oriented Programming (AOP)",
              "references": [
                {
                  "label": "Spring Framework Reference: Advice Parameters",
                  "url": "https://docs.spring.io/spring-framework/reference/core/aop/ataspectj/advice.html#aop-ataspectj-advice-params",
                  "description": "Binding method arguments into advice parameters."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDM6VjA5OlNGSURTRUw",
              "rawKey": "S5:C3:V9",
              "title": "Spring Framework in Depth: Spring Expression Language",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language",
              "durationText": "3m 12s",
              "durationSeconds": 192,
              "description": "Evaluating SpEL expressions, syntax, and `#` bean referencing.",
              "categoryTag": "Spring Expression Language (SpEL)",
              "references": [
                {
                  "label": "Spring Framework Reference: Spring Expression Language (SpEL)",
                  "url": "https://docs.spring.io/spring-framework/reference/core/expressions.html",
                  "description": "Evaluation context, literal expressions, and bean references via `@beanName`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1791
        },
        {
          "id": "05-004",
          "number": 4,
          "title": "Residual concepts and review",
          "localChapterFile": "004-misc.md",
          "keyConcepts": [
            "`Resource` and `ResourceLoader` abstraction",
            "Classpath traversal (`Files.walkFileTree`)",
            "`ApplicationEvent` and `@EventListener`",
            "`MessageSource` (i18n)",
            "Spring TestContext framework."
          ],
          "videos": [
            {
              "id": "UzA1OkMwMDQ6VjAxOkxTNldTQjNUU0I",
              "rawKey": "S5:C4:V1",
              "title": "Learning Spring 6 with Spring Boot 3: Test Spring Boot applications",
              "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/test-spring-boot-applications",
              "durationText": "4m 10s",
              "durationSeconds": 250,
              "description": "Spring TestContext framework, `@SpringBootTest`, context loading.",
              "categoryTag": "Testing Spring Core",
              "references": [
                {
                  "label": "Spring Framework Reference: Spring TestContext Framework",
                  "url": "https://docs.spring.io/spring-framework/reference/testing/testcontext-framework.html",
                  "description": "Context caching, dependency injection of test fixtures, and transaction rollback."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDQ6VjAyOlNCM0VUQ0lTQg",
              "rawKey": "S5:C4:V2",
              "title": "Spring Boot 3 Essential Training: Configuration in Spring Boot",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/configuration-in-spring-boot",
              "durationText": "5m 43s",
              "durationSeconds": 343,
              "description": "Property loading, classpath resources, and configuration hierarchy.",
              "categoryTag": "Resource Abstraction & Environmental Features",
              "references": [
                {
                  "label": "Spring Framework Reference: Resources",
                  "url": "https://docs.spring.io/spring-framework/reference/core/resources.html",
                  "description": "`ResourceLoader`, `UrlResource`, `ClassPathResource`, and `Resource` interface contracts."
                },
                {
                  "label": "Spring Framework Reference: Standard and Custom Events",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/context-introduction.html#context-functionality-events",
                  "description": "Publishing `ApplicationEvent` and handling with `@EventListener` and `@Async`."
                }
              ]
            },
            {
              "id": "UzA1OkMwMDQ6VjAzOlNGSUROUw",
              "rawKey": "S5:C4:V3",
              "title": "Spring Framework in Depth: Next steps",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/next-steps",
              "durationText": "3m 7s",
              "durationSeconds": 187,
              "description": "Synthesis of container architecture and advanced extension points.",
              "categoryTag": "Resource Abstraction & Environmental Features",
              "references": [
                {
                  "label": "Spring Framework Reference: The IoC Container Advanced Capabilities",
                  "url": "https://docs.spring.io/spring-framework/reference/core/beans/context-introduction.html",
                  "description": "Message resolution (`MessageSource`), event propagation, and low-level resource management."
                }
              ]
            }
          ],
          "totalDurationSeconds": 780
        }
      ],
      "totalVideos": 39,
      "totalDurationSeconds": 9142
    },
    {
      "id": "section-06",
      "slug": "06-spring-data-and-tx",
      "number": 6,
      "title": "Spring Data & Persistence",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\06-spring-data-and-tx.md",
      "recommendedCourses": [
        {
          "title": "Spring Data",
          "url": "https://www.linkedin.com/learning/spring-data-3",
          "author": "Mary Ellen Bowman",
          "duration": "2h 35m",
          "scope": ""
        },
        {
          "title": "Java Persistence with JPA",
          "url": "https://www.linkedin.com/learning/java-persistence-with-jpa",
          "author": "Frank P Moley III",
          "duration": "2h 27m",
          "scope": ""
        },
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Mary Ellen Bowman",
          "duration": "4h 32m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "06-001",
          "number": 1,
          "title": "JdbcTemplate, transactions, isolation, propagation",
          "localChapterFile": "001-jdbc-and-tx.md",
          "keyConcepts": [
            "`JdbcTemplate`",
            "`NamedParameterJdbcTemplate`",
            "`RowMapper`",
            "`BeanPropertyRowMapper`",
            "`@Transactional`",
            "Transaction Isolation Levels",
            "Propagation Behaviors",
            "Rollback Rules."
          ],
          "videos": [
            {
              "id": "UzA2OkMwMDE6VjAxOkpQV0pXSUFU",
              "rawKey": "S6:C1:V1",
              "title": "Java Persistence with JPA: What is a transaction?",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/what-is-a-transaction",
              "durationText": "2m 26s",
              "durationSeconds": 146,
              "description": "ACID principles, commit vs rollback, and atomic units of work.",
              "categoryTag": "Transaction Concepts & Demarcation",
              "references": [
                {
                  "label": "Spring Framework Reference: Transaction Management",
                  "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction.html",
                  "description": "Core motivations for Spring transaction abstraction across JDBC, JPA, and JTA."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjAyOkpQV0pNVA",
              "rawKey": "S6:C1:V2",
              "title": "Java Persistence with JPA: Managing transactions",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/managing-transactions",
              "durationText": "2m 37s",
              "durationSeconds": 157,
              "description": "Demarcation patterns, transaction boundaries, and rollback triggers.",
              "categoryTag": "Transaction Concepts & Demarcation",
              "references": [
                {
                  "label": "Spring Framework Reference: Declarative Transaction Management",
                  "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative.html",
                  "description": "Demarcating transactional boundaries with `@Transactional`."
                },
                {
                  "label": "Spring Framework Reference: Transaction Propagation",
                  "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/tx-propagation.html",
                  "description": "`REQUIRED`, `REQUIRES_NEW`, `NESTED`, `SUPPORTS`, `MANDATORY`, `NOT_SUPPORTED`, `NEVER`."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjAzOkpQV0pETVQ",
              "rawKey": "S6:C1:V3",
              "title": "Java Persistence with JPA: Demo: Managing transactions",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/demo-managing-transactions",
              "durationText": "2m 1s",
              "durationSeconds": 121,
              "description": "Code demonstration of transaction execution and error recovery.",
              "categoryTag": "Transaction Concepts & Demarcation",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: EntityTransaction Interface",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/apidocs/jakarta.persistence/jakarta/persistence/EntityTransaction.html",
                  "description": "Programmatic transaction control (`begin`, `commit`, `rollback`)."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjA0OkpQV0pDTUFU",
              "rawKey": "S6:C1:V4",
              "title": "Java Persistence with JPA: Challenge: Manage a transaction",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/challenge-manage-a-transaction",
              "durationText": "53s",
              "durationSeconds": 53,
              "description": "Transaction management exercise.",
              "categoryTag": "Transaction Concepts & Demarcation",
              "references": [
                {
                  "label": "Spring Framework Reference: Transaction Settings",
                  "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html",
                  "description": "Setting read-only flags and timeout configurations."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjA1OkpQV0pTTUFU",
              "rawKey": "S6:C1:V5",
              "title": "Java Persistence with JPA: Solution: Manage a transaction",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/solution-manage-a-transaction",
              "durationText": "3m 38s",
              "durationSeconds": 218,
              "description": "Solution walkthrough for reliable transaction demarcation.",
              "categoryTag": "Transaction Concepts & Demarcation",
              "references": [
                {
                  "label": "Spring Framework Reference: Using @Transactional",
                  "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html#transaction-declarative-at-transactional",
                  "description": "Class-level and method-level annotations."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjA2OkNTQk1UUg",
              "rawKey": "S6:C1:V6",
              "title": "Creating Spring Boot Microservices: Transaction rollback",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/transaction-rollback",
              "durationText": "4m 45s",
              "durationSeconds": 285,
              "description": "`@Transactional` rollback triggers on unchecked exceptions.",
              "categoryTag": "Transaction Concepts & Demarcation",
              "references": [
                {
                  "label": "Spring Framework Reference: Rolling Back a Declarative Transaction",
                  "url": "https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/rolling-back.html",
                  "description": "Default rollback on unchecked exceptions (`RuntimeException`) and configuring `rollbackFor`."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjA3OlNERVNE",
              "rawKey": "S6:C1:V7",
              "title": "Spring Data: Externalize schema declaration",
              "url": "https://www.linkedin.com/learning/spring-data-3/externalize-schema-declaration",
              "durationText": "7m 26s",
              "durationSeconds": 446,
              "description": "DDL scripts, `schema.sql`, and database connectivity.",
              "categoryTag": "Relational Data Access & Databases",
              "references": [
                {
                  "label": "Spring Boot Reference: Initialize a Database Using Basic Scripts",
                  "url": "https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-basic-sql-scripts",
                  "description": "Initializing schemas with `schema.sql` and `data.sql`."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjA4OlNEQ1RSRA",
              "rawKey": "S6:C1:V8",
              "title": "Spring Data: Connect to remote database",
              "url": "https://www.linkedin.com/learning/spring-data-3/connect-to-remote-database",
              "durationText": "6m 33s",
              "durationSeconds": 393,
              "description": "DataSource configuration and pool management.",
              "categoryTag": "Relational Data Access & Databases",
              "references": [
                {
                  "label": "Spring Boot Reference: Configure a DataSource",
                  "url": "https://docs.spring.io/spring-boot/reference/data/sql.html#data.sql.datasource",
                  "description": "HikariCP connection pool configuration and driver properties."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDE6VjA5OkxTNldTQjNFRFc",
              "rawKey": "S6:C1:V9",
              "title": "Learning Spring 6 with Spring Boot 3: Embedded databases with Spring Boot",
              "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/embedded-databases-with-spring-boot",
              "durationText": "2m 50s",
              "durationSeconds": 170,
              "description": "H2/HSQLDB memory database setup for data access.",
              "categoryTag": "Relational Data Access & Databases",
              "references": [
                {
                  "label": "Spring Boot Reference: Embedded Database Support",
                  "url": "https://docs.spring.io/spring-boot/reference/data/sql.html#data.sql.datasource.embedded",
                  "description": "Automatic discovery and pooling for H2, HSQL, and Derby."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1989
        },
        {
          "id": "06-002",
          "number": 2,
          "title": "Spring Data JPA: entities, repositories, auditing",
          "localChapterFile": "002-jpa-entities-and-repositories.md",
          "keyConcepts": [
            "`@Entity`",
            "`@Id`",
            "`@GeneratedValue`",
            "`EntityManager`",
            "`JpaRepository`",
            "Derived Query Methods",
            "`@Query` (JPQL & Native SQL)",
            "Paging & Sorting",
            "Specifications",
            "Auditing (`@CreatedDate`",
            "`@LastModifiedDate`)."
          ],
          "videos": [
            {
              "id": "UzA2OkMwMDI6VjAxOlNESkpQQQ",
              "rawKey": "S6:C2:V1",
              "title": "Spring Data: Java/Jakarta Persistence API",
              "url": "https://www.linkedin.com/learning/spring-data-3/java-jakarta-persistence-api",
              "durationText": "4m 44s",
              "durationSeconds": 284,
              "description": "JPA specification, ORM concepts, and provider integration.",
              "categoryTag": "JPA Foundations & Entity Lifecycle",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Specification",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/",
                  "description": "Core architecture and provider interoperability standard."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjAyOkpQV0pMT1JNTw",
              "rawKey": "S6:C2:V2",
              "title": "Java Persistence with JPA: Leveraging Object-Relational Mapping (ORM)",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/leveraging-object-relational-mapping-orm",
              "durationText": "2m 20s",
              "durationSeconds": 140,
              "description": "Object-relational paradigm impedance mismatch.",
              "categoryTag": "JPA Foundations & Entity Lifecycle",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Object/Relational Mapping Metadata",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a101",
                  "description": "Mapping table structures, columns, and relational types."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjAzOkpQV0pXSUFF",
              "rawKey": "S6:C2:V3",
              "title": "Java Persistence with JPA: What is an entity?",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/what-is-an-entity",
              "durationText": "4m 3s",
              "durationSeconds": 243,
              "description": "Entity anatomy, state lifecycle (Transient, Managed, Detached, Removed).",
              "categoryTag": "JPA Foundations & Entity Lifecycle",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Entity Lifecycle Model",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a105",
                  "description": "Transitions between Transient, Managed, Detached, and Removed states."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjA0OkpQV0pEV1dURU0",
              "rawKey": "S6:C2:V4",
              "title": "Java Persistence with JPA: Demo: Working with the entity manager",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/demo-working-with-the-entity-manager",
              "durationText": "4m 50s",
              "durationSeconds": 290,
              "description": "`EntityManager` operations (`persist`, `merge`, `find`, `remove`).",
              "categoryTag": "JPA Foundations & Entity Lifecycle",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 API: `jakarta.persistence.EntityManager`",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/apidocs/jakarta.persistence/jakarta/persistence/EntityManager.html",
                  "description": "Persistence context management and entity state operations."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjA1OkpQV0pEUEU",
              "rawKey": "S6:C2:V5",
              "title": "Java Persistence with JPA: Demo: Persisting entities",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/demo-persisting-entities",
              "durationText": "3m 53s",
              "durationSeconds": 233,
              "description": "Saving entities and flushing to the database.",
              "categoryTag": "JPA Foundations & Entity Lifecycle",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Synchronizing to the Database (Flush)",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a138",
                  "description": "Flush modes (`AUTO`, `COMMIT`) and write synchronization."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjA2OkpQV0pNSw",
              "rawKey": "S6:C2:V6",
              "title": "Java Persistence with JPA: Mapping keys",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/mapping-keys",
              "durationText": "3m 1s",
              "durationSeconds": 181,
              "description": "`@Id`, `@GeneratedValue`, Generation strategies (Identity, Sequence, Table).",
              "categoryTag": "JPA Foundations & Entity Lifecycle",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Primary Keys and Entity Identity",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a213",
                  "description": "GenerationType strategies (`IDENTITY`, `SEQUENCE`, `TABLE`, `AUTO`)."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjA3OkpQV0pETUs",
              "rawKey": "S6:C2:V7",
              "title": "Java Persistence with JPA: Demo: Mapping keys",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/demo-mapping-keys",
              "durationText": "1m 54s",
              "durationSeconds": 114,
              "description": "Primary key generation in practice.",
              "categoryTag": "JPA Foundations & Entity Lifecycle",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 API: `jakarta.persistence.GeneratedValue`",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/apidocs/jakarta.persistence/jakarta/persistence/GeneratedValue.html",
                  "description": "Sequence generator bindings and allocation sizing."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjA4OkpQV0pXQUVS",
              "rawKey": "S6:C2:V8",
              "title": "Java Persistence with JPA: What are entity relationships?",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/what-are-entity-relationships",
              "durationText": "3m 34s",
              "durationSeconds": 214,
              "description": "Cardinality, unidirectional vs bidirectional links.",
              "categoryTag": "Entity Relationships & Inheritance",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Entity Relationships",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a383",
                  "description": "Directionality, owning sides, and mappedBy semantics."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjA5OkpQV0pBQU9UT1I",
              "rawKey": "S6:C2:V9",
              "title": "Java Persistence with JPA: Annotating a one-to-one relationship",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/annotating-a-one-to-one-relationship",
              "durationText": "2m 18s",
              "durationSeconds": 138,
              "description": "`@OneToOne` and `@JoinColumn`.",
              "categoryTag": "Entity Relationships & Inheritance",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 API: `@OneToOne`",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/apidocs/jakarta.persistence/jakarta/persistence/OneToOne.html",
                  "description": "Unique foreign key relationships and fetch strategies."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjEwOkpQV0pBQU9UTVI",
              "rawKey": "S6:C2:V10",
              "title": "Java Persistence with JPA: Annotating a one-to-many relationship",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/annotating-a-one-to-many-relationship",
              "durationText": "2m 34s",
              "durationSeconds": 154,
              "description": "`@OneToMany`, `mappedBy`, and cascade types.",
              "categoryTag": "Entity Relationships & Inheritance",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 API: `@OneToMany`",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/apidocs/jakarta.persistence/jakarta/persistence/OneToMany.html",
                  "description": "Collection-valued associations and cascade propagation (`ALL`, `PERSIST`, `REMOVE`)."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjExOkpQV0pBQU1UT1I",
              "rawKey": "S6:C2:V11",
              "title": "Java Persistence with JPA: Annotating a many-to-one relationship",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/annotating-a-many-to-one-relationship",
              "durationText": "1m 14s",
              "durationSeconds": 74,
              "description": "`@ManyToOne` foreign key mapping.",
              "categoryTag": "Entity Relationships & Inheritance",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 API: `@ManyToOne`",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/apidocs/jakarta.persistence/jakarta/persistence/ManyToOne.html",
                  "description": "Single-valued associations and foreign key owner semantics."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjEyOkpQV0pBQU1UTVI",
              "rawKey": "S6:C2:V12",
              "title": "Java Persistence with JPA: Annotating a many-to-many relationship",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/annotating-a-many-to-many-relationship",
              "durationText": "1m 40s",
              "durationSeconds": 100,
              "description": "`@ManyToMany` and `@JoinTable`.",
              "categoryTag": "Entity Relationships & Inheritance",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 API: `@ManyToMany`",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/apidocs/jakarta.persistence/jakarta/persistence/ManyToMany.html",
                  "description": "Intermediate join table definitions and inverse mapping rules."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjEzOkpQV0pVSU1T",
              "rawKey": "S6:C2:V13",
              "title": "Java Persistence with JPA: Utilizing inheritance mapping strategies",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/utilizing-inheritance-mapping-strategies",
              "durationText": "4m 26s",
              "durationSeconds": 266,
              "description": "Single Table, Joined Table, and Table per Class strategies.",
              "categoryTag": "Entity Relationships & Inheritance",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Inheritance Mapping Strategies",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a1197",
                  "description": "`SINGLE_TABLE`, `JOINED`, and `TABLE_PER_CLASS` tradeoffs and discriminator columns."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjE0OlNEU0JTREo",
              "rawKey": "S6:C2:V14",
              "title": "Spring Data: Spring Boot Starter data JPA",
              "url": "https://www.linkedin.com/learning/spring-data-3/spring-boot-starter-data-jpa",
              "durationText": "6m 41s",
              "durationSeconds": 401,
              "description": "Auto-configuration of EntityManagerFactory and transaction managers.",
              "categoryTag": "Spring Data Repositories & Querying",
              "references": [
                {
                  "label": "Spring Boot Reference: Spring Data JPA Repositories",
                  "url": "https://docs.spring.io/spring-boot/reference/data/sql.html#data.sql.jpa-and-spring-data",
                  "description": "Auto-configuration of entity scanners and repository beans."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjE1OlNEU0RDQUo",
              "rawKey": "S6:C2:V15",
              "title": "Spring Data: Spring Data CRUDRepository and JpaRepository",
              "url": "https://www.linkedin.com/learning/spring-data-3/spring-data-crudrepository-and-jparepository",
              "durationText": "7m 0s",
              "durationSeconds": 420,
              "description": "Repository hierarchy and runtime proxy generation.",
              "categoryTag": "Spring Data Repositories & Querying",
              "references": [
                {
                  "label": "Spring Data Commons Reference: Core Concepts",
                  "url": "https://docs.spring.io/spring-data/commons/reference/repositories/core-concepts.html",
                  "description": "`Repository`, `CrudRepository`, `ListCrudRepository`, and `JpaRepository` hierarchies."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjE2OlNEUEVRTQ",
              "rawKey": "S6:C2:V16",
              "title": "Spring Data: Property expression query methods",
              "url": "https://www.linkedin.com/learning/spring-data-3/property-expression-query-methods",
              "durationText": "8m 46s",
              "durationSeconds": 526,
              "description": "Derived query methods by naming convention.",
              "categoryTag": "Spring Data Repositories & Querying",
              "references": [
                {
                  "label": "Spring Data Commons Reference: Query Creation",
                  "url": "https://docs.spring.io/spring-data/commons/reference/repositories/query-methods.html#repositories.query-methods.query-creation",
                  "description": "Parser rules for property expressions and traversal paths."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjE3OlNEUU1DV1BF",
              "rawKey": "S6:C2:V17",
              "title": "Spring Data: Query method clauses with property expressions",
              "url": "https://www.linkedin.com/learning/spring-data-3/query-method-clauses-with-property-expressions",
              "durationText": "6m 12s",
              "durationSeconds": 372,
              "description": "Operators (`Between`, `LessThan`, `In`, `Like`).",
              "categoryTag": "Spring Data Repositories & Querying",
              "references": [
                {
                  "label": "Spring Data JPA Reference: Supported Query Keywords",
                  "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html#jpa.query-methods.query-creation",
                  "description": "Supported keywords table: `findBy*`, `Between`, `LessThan`, `Like`, `IgnoreCase`."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjE4OlNEUUE",
              "rawKey": "S6:C2:V18",
              "title": "Spring Data: @Query annotation",
              "url": "https://www.linkedin.com/learning/spring-data-3/query-annotation",
              "durationText": "8m 31s",
              "durationSeconds": 511,
              "description": "Explicit JPQL and native SQL queries with `@Param`.",
              "categoryTag": "Spring Data Repositories & Querying",
              "references": [
                {
                  "label": "Spring Data JPA Reference: Using @Query",
                  "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html#jpa.query-methods.at-query",
                  "description": "Custom JPQL queries, native queries with `nativeQuery=true`, and named parameter binding."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjE5OkpQV0pRV1RKUFE",
              "rawKey": "S6:C2:V19",
              "title": "Java Persistence with JPA: Querying with the Jakarta Persistence Query Language (JPQL)",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/querying-with-the-jakarta-persistence-query-language-jpql",
              "durationText": "3m 4s",
              "durationSeconds": 184,
              "description": "JPQL syntax, type-safe queries.",
              "categoryTag": "Spring Data Repositories & Querying",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Query Language (JPQL)",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a2399",
                  "description": "Abstract schema types, polymorphic queries, and join fetch syntax."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjIwOkpQV0pVTlE",
              "rawKey": "S6:C2:V20",
              "title": "Java Persistence with JPA: Using native queries",
              "url": "https://www.linkedin.com/learning/java-persistence-with-jpa/using-native-queries",
              "durationText": "1m 37s",
              "durationSeconds": 97,
              "description": "Raw SQL queries and resultSet mappings.",
              "categoryTag": "Spring Data Repositories & Querying",
              "references": [
                {
                  "label": "Jakarta Persistence 3.1 Spec: Native SQL Queries",
                  "url": "https://jakarta.ee/specifications/persistence/3.1/jakarta-persistence-spec-3.1#a2990",
                  "description": "`@SqlResultSetMapping` and direct SQL execution."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjIxOlNEUEFT",
              "rawKey": "S6:C2:V21",
              "title": "Spring Data: Paging and sorting",
              "url": "https://www.linkedin.com/learning/spring-data-3/paging-and-sorting",
              "durationText": "5m 53s",
              "durationSeconds": 353,
              "description": "`Pageable`, `Sort`, `Page<T>`, and `Slice<T>` pagination semantics.",
              "categoryTag": "Advanced Querying, Paging & Specifications",
              "references": [
                {
                  "label": "Spring Data Commons Reference: Paging and Sorting",
                  "url": "https://docs.spring.io/spring-data/commons/reference/repositories/query-methods.html#repositories.special-parameters",
                  "description": "`PageRequest`, `Sort.by()`, and total count query cost considerations with `Slice`."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjIyOlNEU0RT",
              "rawKey": "S6:C2:V22",
              "title": "Spring Data: Spring Data Specifications",
              "url": "https://www.linkedin.com/learning/spring-data-3/spring-data-specifications",
              "durationText": "11m 33s",
              "durationSeconds": 693,
              "description": "Dynamic queries via Criteria API `Specification<T>`.",
              "categoryTag": "Advanced Querying, Paging & Specifications",
              "references": [
                {
                  "label": "Spring Data JPA Reference: Specifications",
                  "url": "https://docs.spring.io/spring-data/jpa/reference/jpa/specifications.html",
                  "description": "Composing predicates dynamically with `where`, `and`, and `or` using JPA Criteria."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjIzOlNEUQ",
              "rawKey": "S6:C2:V23",
              "title": "Spring Data: QueryDSL",
              "url": "https://www.linkedin.com/learning/spring-data-3/query-dsl",
              "durationText": "8m 55s",
              "durationSeconds": 535,
              "description": "Type-safe querying with generated metamodels.",
              "categoryTag": "Advanced Querying, Paging & Specifications",
              "references": [
                {
                  "label": "Spring Data Commons Reference: Querydsl Integration",
                  "url": "https://docs.spring.io/spring-data/commons/reference/repositories/core-concepts.html#core.extensions.querydsl",
                  "description": "`QuerydslPredicateExecutor` for type-safe query generation."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDI6VjI0OlNEUUJF",
              "rawKey": "S6:C2:V24",
              "title": "Spring Data: Query by Example",
              "url": "https://www.linkedin.com/learning/spring-data-3/query-by-example",
              "durationText": "4m 33s",
              "durationSeconds": 273,
              "description": "Example-driven filtering with `ExampleMatcher`.",
              "categoryTag": "Advanced Querying, Paging & Specifications",
              "references": [
                {
                  "label": "Spring Data Commons Reference: Query by Example",
                  "url": "https://docs.spring.io/spring-data/commons/reference/query-by-example.html",
                  "description": "Probe instances, matchers, and criteria generation without type-unsafe SQL."
                }
              ]
            }
          ],
          "totalDurationSeconds": 6796
        },
        {
          "id": "06-003",
          "number": 3,
          "title": "HATEOAS and the hypermedia response shape",
          "localChapterFile": "003-misc.md",
          "keyConcepts": [
            "HATEOAS",
            "Hypermedia JSON Response",
            "Spring Data REST",
            "`_links`",
            "`self`",
            "`profile`",
            "HAL (Hypertext Application Language)",
            "Resource Exposing."
          ],
          "videos": [
            {
              "id": "UzA2OkMwMDM6VjAxOlNEU0RS",
              "rawKey": "S6:C3:V1",
              "title": "Spring Data: Spring Data REST",
              "url": "https://www.linkedin.com/learning/spring-data-3/spring-data-rest",
              "durationText": "8m 24s",
              "durationSeconds": 504,
              "description": "Exposing repositories directly as RESTful hypermedia resources.",
              "categoryTag": "Spring Data REST & Hypermedia",
              "references": [
                {
                  "label": "Spring Data REST Reference: Introduction",
                  "url": "https://docs.spring.io/spring-data/rest/reference/intro.html",
                  "description": "Hypermedia-driven REST API generation over domain models."
                },
                {
                  "label": "Spring HATEOAS Reference: Representation Models",
                  "url": "https://docs.spring.io/spring-hateoas/docs/current/reference/html/#fundamentals.representation-models",
                  "description": "`EntityModel`, `CollectionModel`, and HAL link serialisation."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDM6VjAyOkNTQk1DQVdTRFI",
              "rawKey": "S6:C3:V2",
              "title": "Creating Spring Boot Microservices: Create APIs with Spring Data REST",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/create-apis-with-spring-data-rest",
              "durationText": "1m 36s",
              "durationSeconds": 96,
              "description": "Setting up `spring-boot-starter-data-rest`.",
              "categoryTag": "Spring Data REST & Hypermedia",
              "references": [
                {
                  "label": "Spring Boot Reference: Spring Data REST Starter",
                  "url": "https://docs.spring.io/spring-data/rest/reference/intro.html",
                  "description": "Boot configuration properties (`spring.data.rest.*`)."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDM6VjAzOkNTQk1NQUVUUg",
              "rawKey": "S6:C3:V3",
              "title": "Creating Spring Boot Microservices: Mapping API endpoints to repositories",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/mapping-api-endpoints-to-repositories",
              "durationText": "2m 37s",
              "durationSeconds": 157,
              "description": "Default URL generation and entity path mapping.",
              "categoryTag": "Spring Data REST & Hypermedia",
              "references": [
                {
                  "label": "Spring Data REST Reference: Repository Resources",
                  "url": "https://docs.spring.io/spring-data/rest/reference/repository-resources.html",
                  "description": "Resource URL patterns, item resources, and collection resources."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDM6VjA0OkNTQk1PREI",
              "rawKey": "S6:C3:V4",
              "title": "Creating Spring Boot Microservices: Override default behavior",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/override-default-behavior",
              "durationText": "1m 1s",
              "durationSeconds": 61,
              "description": "`@RepositoryRestResource` path and relation customization.",
              "categoryTag": "Spring Data REST & Hypermedia",
              "references": [
                {
                  "label": "Spring Data REST Reference: Customizing Repository Endpoints",
                  "url": "https://docs.spring.io/spring-data/rest/reference/customizing-sdr.html",
                  "description": "Modifying paths, rel attributes, and exported status via `@RepositoryRestResource`."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDM6VjA1OkNTQk1DTVRVUks",
              "rawKey": "S6:C3:V5",
              "title": "Creating Spring Boot Microservices: Challenge: Modify the URL repository keyword",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-modify-url-repository-keyword",
              "durationText": "43s",
              "durationSeconds": 43,
              "description": "Hypermedia path customization exercise.",
              "categoryTag": "Spring Data REST & Hypermedia",
              "references": [
                {
                  "label": "Spring Data REST Reference: Configuring the REST URL Base Path",
                  "url": "https://docs.spring.io/spring-data/rest/reference/customizing/configuring-the-rest-url-path.html",
                  "description": "Base path prefixing and entity exposure toggling."
                }
              ]
            },
            {
              "id": "UzA2OkMwMDM6VjA2OkNTQk1TTVRVUks",
              "rawKey": "S6:C3:V6",
              "title": "Creating Spring Boot Microservices: Solution: Modify the URL repository keyword",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-modify-url-repository-keyword",
              "durationText": "49s",
              "durationSeconds": 49,
              "description": "Solution walkthrough.",
              "categoryTag": "Spring Data REST & Hypermedia",
              "references": [
                {
                  "label": "Spring Data REST Reference: Repository Discovery",
                  "url": "https://docs.spring.io/spring-data/rest/reference/repository-resources.html",
                  "description": "HAL root discovery service and link relations."
                }
              ]
            }
          ],
          "totalDurationSeconds": 910
        }
      ],
      "totalVideos": 39,
      "totalDurationSeconds": 9695
    },
    {
      "id": "section-07",
      "slug": "07-spring-web-mvc-rest",
      "number": 7,
      "title": "Spring Web MVC & REST APIs",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\07-spring-web-mvc-rest.md",
      "recommendedCourses": [
        {
          "title": "Complete Guide to Spring MVC",
          "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc",
          "author": "Frank P Moley III",
          "duration": "4h 52m",
          "scope": ""
        },
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Mary Ellen Bowman",
          "duration": "4h 32m",
          "scope": ""
        },
        {
          "title": "Designing RESTful APIs",
          "url": "https://www.linkedin.com/learning/designing-restful-apis",
          "author": "Keith Casey",
          "duration": "1h 45m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "07-001",
          "number": 1,
          "title": "Spring MVC, DispatcherServlet, controllers",
          "localChapterFile": "001-spring-mvc-and-controllers.md",
          "keyConcepts": [
            "Front Controller Pattern",
            "`DispatcherServlet`",
            "`HandlerMapping`",
            "`HandlerAdapter`",
            "`@Controller` vs `@RestController`",
            "`@RequestMapping` variants",
            "Path Variables",
            "Request Parameters",
            "Request Bodies",
            "Jackson `HttpMessageConverter`."
          ],
          "videos": [
            {
              "id": "UzA3OkMwMDE6VjAxOkNHVFNNU01F",
              "rawKey": "S7:C1:V1",
              "title": "Complete Guide to Spring MVC: Spring MVC essentials",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/spring-mvc-essentials",
              "durationText": "53s",
              "durationSeconds": 53,
              "description": "Foundations of Spring MVC architecture.",
              "categoryTag": "DispatcherServlet & Request Lifecycle",
              "references": [
                {
                  "label": "Spring Framework Reference: Web on Servlet Stack",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc.html",
                  "description": "High-level architecture of Spring MVC on the Servlet container."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjAyOkNHVFNNRA",
              "rawKey": "S7:C1:V2",
              "title": "Complete Guide to Spring MVC: DispatcherServlet",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/dispatcherservlet",
              "durationText": "8m 32s",
              "durationSeconds": 512,
              "description": "Deep dive into the front-controller request dispatch mechanism.",
              "categoryTag": "DispatcherServlet & Request Lifecycle",
              "references": [
                {
                  "label": "Spring Framework Reference: The DispatcherServlet",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-servlet.html",
                  "description": "Front-controller architecture and `WebApplicationContext` integration."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjAzOkNHVFNNUlBBSA",
              "rawKey": "S7:C1:V3",
              "title": "Complete Guide to Spring MVC: Request processing and handling",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/request-processing-and-handling",
              "durationText": "6m 20s",
              "durationSeconds": 380,
              "description": "Internal pipeline from incoming HTTP request to handler execution.",
              "categoryTag": "DispatcherServlet & Request Lifecycle",
              "references": [
                {
                  "label": "Spring Framework Reference: Special Bean Types in WebApplicationContext",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-servlet/special-bean-types.html",
                  "description": "HandlerMapping, HandlerAdapter, and HandlerExceptionResolver roles."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjA0OkNHVFNNQ0FXQw",
              "rawKey": "S7:C1:V4",
              "title": "Complete Guide to Spring MVC: Create a web controller",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/create-a-web-controller",
              "durationText": "9m 13s",
              "durationSeconds": 553,
              "description": "Declaring web controllers and handler methods.",
              "categoryTag": "Controllers & Request Mapping",
              "references": [
                {
                  "label": "Spring Framework Reference: Annotated Controllers",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html",
                  "description": "Defining `@Controller` beans and request routing."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjA1OkNHVFNNTVJP",
              "rawKey": "S7:C1:V5",
              "title": "Complete Guide to Spring MVC: Mapping requests overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/mapping-requests-overview",
              "durationText": "5m 19s",
              "durationSeconds": 319,
              "description": "`@RequestMapping`, `@GetMapping`, `@PostMapping` concepts.",
              "categoryTag": "Controllers & Request Mapping",
              "references": [
                {
                  "label": "Spring Framework Reference: Mapping Requests",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html",
                  "description": "Composed request mappings (`@GetMapping`, `@PostMapping`, `@PutMapping`, `@DeleteMapping`, `@PatchMapping`)."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjA2OkNHVFNNTVJVUA",
              "rawKey": "S7:C1:V6",
              "title": "Complete Guide to Spring MVC: Mapping requests: URI patterns",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/mapping-requests-uri-patterns",
              "durationText": "5m 50s",
              "durationSeconds": 350,
              "description": "URL templates, path variables, matrix variables, ant-style patterns.",
              "categoryTag": "Controllers & Request Mapping",
              "references": [
                {
                  "label": "Spring Framework Reference: URI Patterns",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html#mvc-ann-requestmapping-patterns",
                  "description": "`PathPatternParser`, wildcard syntax, and path variables."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjA3OkNHVFNNTVJDTVQ",
              "rawKey": "S7:C1:V7",
              "title": "Complete Guide to Spring MVC: Mapping requests: Consumable media types",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/mapping-requests-consumable-media-types",
              "durationText": "4m 0s",
              "durationSeconds": 240,
              "description": "`consumes` attributes and Content-Type matching.",
              "categoryTag": "Controllers & Request Mapping",
              "references": [
                {
                  "label": "Spring Framework Reference: Consumable Media Types",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html#mvc-ann-requestmapping-consumes",
                  "description": "Narrowing request matching using the `Content-Type` header."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjA4OkNHVFNNTVJQTVQ",
              "rawKey": "S7:C1:V8",
              "title": "Complete Guide to Spring MVC: Mapping requests: Producible media types",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/mapping-requests-producible-media-types",
              "durationText": "3m 53s",
              "durationSeconds": 233,
              "description": "`produces` attributes and Accept header content negotiation.",
              "categoryTag": "Controllers & Request Mapping",
              "references": [
                {
                  "label": "Spring Framework Reference: Producible Media Types",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html#mvc-ann-requestmapping-produces",
                  "description": "Narrowing request matching using the `Accept` header."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjA5OkNHVFNNSE1P",
              "rawKey": "S7:C1:V9",
              "title": "Complete Guide to Spring MVC: Handler methods overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/handler-methods-overview",
              "durationText": "3m 9s",
              "durationSeconds": 189,
              "description": "Signature flexibility of Spring MVC handler methods.",
              "categoryTag": "Handler Method Arguments & Returns",
              "references": [
                {
                  "label": "Spring Framework Reference: Method Arguments",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/arguments.html",
                  "description": "Supported method arguments in controller endpoints."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjEwOkNHVFNNSE1NQQ",
              "rawKey": "S7:C1:V10",
              "title": "Complete Guide to Spring MVC: Handler methods: Method arguments",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/handler-methods-method-arguments",
              "durationText": "2m 54s",
              "durationSeconds": 174,
              "description": "Binding `@PathVariable`, `@RequestParam`, `@RequestHeader`, `@RequestBody`.",
              "categoryTag": "Handler Method Arguments & Returns",
              "references": [
                {
                  "label": "Spring Framework Reference: Request Parameters and Request Body",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/requestparam.html",
                  "description": "Binding `@PathVariable`, `@RequestParam`, and `@RequestBody`."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjExOkNHVFNNSE1SVg",
              "rawKey": "S7:C1:V11",
              "title": "Complete Guide to Spring MVC: Handler methods: Return values",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/handler-methods-return-values",
              "durationText": "5m 2s",
              "durationSeconds": 302,
              "description": "`ResponseEntity<T>`, `@ResponseBody`, direct POJO returns.",
              "categoryTag": "Handler Method Arguments & Returns",
              "references": [
                {
                  "label": "Spring Framework Reference: Return Values",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/return-types.html",
                  "description": "Supported return types including `ResponseEntity` and `@ResponseBody`."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjEyOkNHVFNNSE1UQw",
              "rawKey": "S7:C1:V12",
              "title": "Complete Guide to Spring MVC: Handler methods: Type conversion",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/handler-methods-type-conversion",
              "durationText": "4m 47s",
              "durationSeconds": 287,
              "description": "ConversionService, Formatters, and type parsing.",
              "categoryTag": "Handler Method Arguments & Returns",
              "references": [
                {
                  "label": "Spring Framework Reference: Spring Type Conversion",
                  "url": "https://docs.spring.io/spring-framework/reference/core/validation/format.html",
                  "description": "`Converter<S,T>`, `Formatter<T>`, and `FormattingConversionService`."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjEzOkNHVFNNSk8",
              "rawKey": "S7:C1:V13",
              "title": "Complete Guide to Spring MVC: Jackson overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/jackson-overview",
              "durationText": "5m 3s",
              "durationSeconds": 303,
              "description": "Jackson `ObjectMapper`, serialization/deserialization, and `MappingJackson2HttpMessageConverter`.",
              "categoryTag": "REST Controllers & JSON Serialization",
              "references": [
                {
                  "label": "Spring Framework Reference: HTTP Message Converters",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-config/message-converters.html",
                  "description": "Jackson 2 message converter and customization options."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjE0OkNTQk1EQU5S",
              "rawKey": "S7:C1:V14",
              "title": "Creating Spring Boot Microservices: Declaring a new RestController",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller",
              "durationText": "6m 29s",
              "durationSeconds": 389,
              "description": "`@RestController` semantics vs standard `@Controller`.",
              "categoryTag": "REST Controllers & JSON Serialization",
              "references": [
                {
                  "label": "Spring Framework API: `@RestController`",
                  "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/bind/annotation/RestController.html",
                  "description": "Stereotype combining `@Controller` and `@ResponseBody`."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDE6VjE1OkNTQk1DVFJIR0U",
              "rawKey": "S7:C1:V15",
              "title": "Creating Spring Boot Microservices: Create the RestController HTTP GET endpoint",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-get-endpoint",
              "durationText": "3m 23s",
              "durationSeconds": 203,
              "description": "Building read endpoints with path variable parameters.",
              "categoryTag": "REST Controllers & JSON Serialization",
              "references": [
                {
                  "label": "Spring Framework Reference: `@GetMapping`",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html",
                  "description": "Composed annotation for HTTP GET request routing."
                }
              ]
            }
          ],
          "totalDurationSeconds": 4487
        },
        {
          "id": "07-002",
          "number": 2,
          "title": "REST design, validation, error handling, HATEOAS",
          "localChapterFile": "002-rest-design-and-validation.md",
          "keyConcepts": [
            "REST Architectural Constraints",
            "HTTP Verbs and Idempotency",
            "HTTP Status Codes",
            "Jakarta Bean Validation (`@Valid`",
            "`@NotNull`",
            "`@Size`)",
            "Exception Handling (`@ExceptionHandler`",
            "`@ControllerAdvice`)",
            "RFC 7807 / RFC 9457 `ProblemDetail`."
          ],
          "videos": [
            {
              "id": "UzA3OkMwMDI6VjAxOkNTQk1DVFJG",
              "rawKey": "S7:C2:V1",
              "title": "Creating Spring Boot Microservices: Choosing the right framework",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/choosing-the-right-framework",
              "durationText": "3m 31s",
              "durationSeconds": 211,
              "description": "REST API vs RPC architectural patterns.",
              "categoryTag": "RESTful Endpoint Operations",
              "references": [
                {
                  "label": "IETF RFC 9110: HTTP Semantics Overview",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-2",
                  "description": "Resource representations, identifiers, and stateless interaction."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjAyOkNTQk1DVFJIUEU",
              "rawKey": "S7:C2:V2",
              "title": "Creating Spring Boot Microservices: Create the RestController HTTP POST endpoint",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-post-endpoint",
              "durationText": "7m 31s",
              "durationSeconds": 451,
              "description": "Resource creation with `201 Created` and URI location header.",
              "categoryTag": "RESTful Endpoint Operations",
              "references": [
                {
                  "label": "IETF RFC 9110: POST Semantics & 201 Created",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.3",
                  "description": "Target resource creation and `Location` response header contract."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjAzOkNTQk1DVFJIUFA",
              "rawKey": "S7:C2:V3",
              "title": "Creating Spring Boot Microservices: Create the RestController HTTP PUT, PATCH, and DELETE endpoints",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/create-restcontroller-http-put-patch-and-delete-endpoints",
              "durationText": "3m 34s",
              "durationSeconds": 214,
              "description": "Idempotent update (PUT), partial update (PATCH), and removal (DELETE).",
              "categoryTag": "RESTful Endpoint Operations",
              "references": [
                {
                  "label": "IETF RFC 9110: PUT and DELETE Semantics",
                  "url": "https://www.rfc-editor.org/rfc/rfc9110.html#section-9.3.4",
                  "description": "Idempotent complete resource state replacement and deletion."
                },
                {
                  "label": "IETF RFC 5789: PATCH Method for HTTP",
                  "url": "https://www.rfc-editor.org/rfc/rfc5789",
                  "description": "Partial modifications to resources and atomicity guarantees."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjA0OkNTQk1DQUFQRQ",
              "rawKey": "S7:C2:V4",
              "title": "Creating Spring Boot Microservices: Challenge: Add a PATCH endpoint",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/challenge-add-a-patch-endpoint",
              "durationText": "1m 6s",
              "durationSeconds": 66,
              "description": "Hands-on patch endpoint development.",
              "categoryTag": "RESTful Endpoint Operations",
              "references": [
                {
                  "label": "Spring Framework Reference: `@PatchMapping`",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html",
                  "description": "Routing HTTP PATCH requests."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjA1OkNTQk1TQUFQRQ",
              "rawKey": "S7:C2:V5",
              "title": "Creating Spring Boot Microservices: Solution: Add a PATCH endpoint",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/solution-add-a-patch-endpoint",
              "durationText": "1m 20s",
              "durationSeconds": 80,
              "description": "Solution walkthrough.",
              "categoryTag": "RESTful Endpoint Operations",
              "references": [
                {
                  "label": "Spring Framework API: `ResponseEntity.ok()`",
                  "url": "https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/http/ResponseEntity.html",
                  "description": "Fluent builder for customized response statuses and headers."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjA2OkNHVFNNSU8",
              "rawKey": "S7:C2:V6",
              "title": "Complete Guide to Spring MVC: @InitBinder overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/initbinder-overview",
              "durationText": "7m 46s",
              "durationSeconds": 466,
              "description": "Custom data binders and property editors.",
              "categoryTag": "Request Body Validation",
              "references": [
                {
                  "label": "Spring Framework Reference: @InitBinder",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-initbinder.html",
                  "description": "WebDataBinder configuration for parameter parsing and validation."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjA3OkNHVFNNVg",
              "rawKey": "S7:C2:V7",
              "title": "Complete Guide to Spring MVC: Validation",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/validation",
              "durationText": "3m 33s",
              "durationSeconds": 213,
              "description": "Jakarta Bean Validation constraints (`@NotNull`, `@Size`, `@Pattern`) and `@Valid`.",
              "categoryTag": "Request Body Validation",
              "references": [
                {
                  "label": "Spring Framework Reference: Validation Configuration",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-config/validation.html",
                  "description": "Enabling JSR-303 / Jakarta Bean Validation provider in Spring MVC."
                },
                {
                  "label": "Jakarta Bean Validation 3.0 Specification",
                  "url": "https://jakarta.ee/specifications/bean-validation/3.0/",
                  "description": "Standard constraint annotations and custom validator implementations."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjA4OkNHVFNNQVY",
              "rawKey": "S7:C2:V8",
              "title": "Complete Guide to Spring MVC: Advanced Validation",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/validation-25230365",
              "durationText": "3m 42s",
              "durationSeconds": 222,
              "description": "Cross-field validation and binding result inspection.",
              "categoryTag": "Request Body Validation",
              "references": [
                {
                  "label": "Spring Framework Reference: Handling Errors with BindingResult",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/arguments.html",
                  "description": "Inspecting `BindingResult` and throwing `MethodArgumentNotValidException`."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjA5OkNHVFNNRU8",
              "rawKey": "S7:C2:V9",
              "title": "Complete Guide to Spring MVC: Exceptions overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/exceptions-overview",
              "durationText": "4m 39s",
              "durationSeconds": 279,
              "description": "Exception translation and HTTP error responses.",
              "categoryTag": "Exception Handling & Problem Details",
              "references": [
                {
                  "label": "Spring Framework Reference: Exceptions",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-exceptionhandler.html",
                  "description": "`@ExceptionHandler` method signatures and error mapping."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjEwOkNHVFNNRU1B",
              "rawKey": "S7:C2:V10",
              "title": "Complete Guide to Spring MVC: Exceptions: Method arguments",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/exceptions-method-arguments",
              "durationText": "3m 56s",
              "durationSeconds": 236,
              "description": "Injecting exceptions into handlers.",
              "categoryTag": "Exception Handling & Problem Details",
              "references": [
                {
                  "label": "Spring Framework Reference: Handler Method Arguments for Exceptions",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-exceptionhandler.html#mvc-ann-exceptionhandler-args",
                  "description": "Injected argument types into exception handlers."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjExOkNHVFNNRVJW",
              "rawKey": "S7:C2:V11",
              "title": "Complete Guide to Spring MVC: Exceptions: Return values",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/exceptions-return-values",
              "durationText": "6m 47s",
              "durationSeconds": 407,
              "description": "Returning error payload entities and status codes.",
              "categoryTag": "Exception Handling & Problem Details",
              "references": [
                {
                  "label": "Spring Framework Reference: RFC 9457 ProblemDetail Support",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-rest-exceptions.html",
                  "description": "Structured RFC 7807/9457 error responses (`type`, `title`, `status`, `detail`, `instance`)."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjEyOkNHVFNNQ0E",
              "rawKey": "S7:C2:V12",
              "title": "Complete Guide to Spring MVC: Controller advice",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/controller-advice",
              "durationText": "10m 32s",
              "durationSeconds": 632,
              "description": "Global exception interception with `@ControllerAdvice` and `@ExceptionHandler`.",
              "categoryTag": "Exception Handling & Problem Details",
              "references": [
                {
                  "label": "Spring Framework Reference: Controller Advice",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-advice.html",
                  "description": "Global `@RestControllerAdvice` and `ResponseEntityExceptionHandler` base class."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDI6VjEzOkNTQk1HRUg",
              "rawKey": "S7:C2:V13",
              "title": "Creating Spring Boot Microservices: Global exception handling",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/global-exception-handling",
              "durationText": "4m 29s",
              "durationSeconds": 269,
              "description": "Catching domain exceptions and rendering structured JSON error payloads.",
              "categoryTag": "Exception Handling & Problem Details",
              "references": [
                {
                  "label": "Spring Boot Reference: Error Handling",
                  "url": "https://docs.spring.io/spring-boot/reference/web/servlet.html#web.servlet.spring-mvc.error-handling",
                  "description": "Auto-configured `/error` controller and custom error attributes."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3746
        },
        {
          "id": "07-003",
          "number": 3,
          "title": "OpenAPI 3.1, springdoc, and contract-first APIs",
          "localChapterFile": "003-openapi-and-swagger.md",
          "keyConcepts": [
            "OpenAPI 3.1 Specification",
            "JSON Schema",
            "`springdoc-openapi`",
            "Swagger UI",
            "Contract-First vs Code-First API Design",
            "`@Operation`",
            "`@ApiResponse`",
            "`@Schema`."
          ],
          "videos": [
            {
              "id": "UzA3OkMwMDM6VjAxOkNTQk1TVQ",
              "rawKey": "S7:C3:V1",
              "title": "Creating Spring Boot Microservices: Swagger UI",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui",
              "durationText": "5m 31s",
              "durationSeconds": 331,
              "description": "Adding Swagger UI to Spring Boot and inspecting live interactive endpoint docs.",
              "categoryTag": "Swagger UI & Springdoc OpenAPI",
              "references": [
                {
                  "label": "Springdoc-openapi Documentation",
                  "url": "https://springdoc.org/",
                  "description": "Automated OpenAPI 3 specification generation for Spring Boot applications."
                },
                {
                  "label": "Swagger UI Official Guide",
                  "url": "https://swagger.io/tools/swagger-ui/",
                  "description": "Interactive API exploration interface and OAS rendering."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDM6VjAyOkNTQk1BRA",
              "rawKey": "S7:C3:V2",
              "title": "Creating Spring Boot Microservices: API documentation",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/api-documentation",
              "durationText": "3m 37s",
              "durationSeconds": 217,
              "description": "Generating OpenAPI JSON/YAML contracts and annotating operations.",
              "categoryTag": "Swagger UI & Springdoc OpenAPI",
              "references": [
                {
                  "label": "OpenAPI Specification v3.1.0",
                  "url": "https://spec.openapis.org/oas/v3.1.0",
                  "description": "Official specification for OpenAPI document schema, paths, operations, components."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDM6VjAzOklUQkpBV0NBU0Q",
              "rawKey": "S7:C3:V3",
              "title": "Intro to Building Java Applications with Cursor: Automatic Swagger documentation with Cursor",
              "url": "https://www.linkedin.com/learning/intro-to-building-java-applications-with-cursor/automatic-swagger-documentation-with-cursor-26525643",
              "durationText": "4m 12s",
              "durationSeconds": 252,
              "description": "Generating Swagger/OpenAPI documentation from Spring controllers.",
              "categoryTag": "Contract & API Tooling",
              "references": [
                {
                  "label": "Springdoc-openapi Annotations Guide",
                  "url": "https://springdoc.org/#swagger-annotations",
                  "description": "`@Operation`, `@ApiResponse`, `@Parameter`, and `@Schema` metadata annotations."
                }
              ]
            },
            {
              "id": "UzA3OkMwMDM6VjA0OlBGQUFXU0RBVEE",
              "rawKey": "S7:C3:V4",
              "title": "Programming Foundations: APIs and Web Services: Documenting and testing APIs",
              "url": "https://www.linkedin.com/learning/programming-foundations-apis-and-web-services-27993033/documenting-and-testing-apis",
              "durationText": "5m 18s",
              "durationSeconds": 318,
              "description": "Industry standards for OAS documentation and client contract testing.",
              "categoryTag": "Contract & API Tooling",
              "references": [
                {
                  "label": "OpenAPI Initiative: Best Practices for API Descriptions",
                  "url": "https://spec.openapis.org/oas/v3.1.0#security-scheme-object",
                  "description": "Security schemes, reusable component definitions, and client generation."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1118
        }
      ],
      "totalVideos": 32,
      "totalDurationSeconds": 9351
    },
    {
      "id": "section-08",
      "slug": "08-webflux-reactor",
      "number": 8,
      "title": "Reactive Programming with Spring WebFlux",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\08-webflux-reactor.md",
      "recommendedCourses": [
        {
          "title": "Complete Guide to Spring MVC",
          "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc",
          "author": "Frank P Moley III",
          "duration": "4h 52m",
          "scope": ""
        },
        {
          "title": "Spring Data",
          "url": "https://www.linkedin.com/learning/spring-data-3",
          "author": "Mary Ellen Bowman",
          "duration": "2h 35m",
          "scope": ""
        },
        {
          "title": "Spring 6: Spring Security",
          "url": "https://www.linkedin.com/learning/spring-6-spring-security",
          "author": "Frank P Moley III",
          "duration": "1h 35m",
          "scope": ""
        },
        {
          "title": "Advanced Spring: Deploy Spring Boot Applications to AWS, Azure and GCP",
          "url": "https://www.linkedin.com/learning/advanced-spring-deploy-spring-boot-applications-to-aws-azure-and-gcp",
          "author": "Frank P Moley III",
          "duration": "2h 10m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "08-001",
          "number": 1,
          "title": "Reactor: Mono, Flux, schedulers, backpressure",
          "localChapterFile": "001-reactor-fundamentals.md",
          "keyConcepts": [
            "Reactive Streams Specification (`Publisher`",
            "`Subscriber`",
            "`Subscription`)",
            "Project Reactor (`Mono`",
            "`Flux`)",
            "Cold vs Hot Publishers",
            "Operators (`map`",
            "`flatMap`",
            "`filter`",
            "`zip`)",
            "Schedulers (`publishOn`",
            "`subscribeOn`)",
            "Backpressure Protocols (`request(n)`)."
          ],
          "videos": [
            {
              "id": "UzA4OkMwMDE6VjAxOkRTQkFSVklN",
              "rawKey": "S8:C1:V1",
              "title": "Deploy Spring Boot Applications: Reactive vs. imperative model",
              "url": "https://www.linkedin.com/learning/advanced-spring-deploy-spring-boot-applications-to-aws-azure-and-gcp/reactive-vs-imperative-model",
              "durationText": "4m 12s",
              "durationSeconds": 252,
              "description": "Thread-per-request blocking bottleneck vs event-loop asynchronous non-blocking model.",
              "categoryTag": "Reactive Model & Reactive Streams Fundamentals",
              "references": [
                {
                  "label": "Spring Framework Reference: WebFlux Overview & Reactive Model",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webflux.html",
                  "description": "Non-blocking event-loop runtime on Netty vs Servlet thread-per-request model."
                },
                {
                  "label": "Reactive Streams Specification",
                  "url": "https://www.reactive-streams.org/",
                  "description": "Standard for asynchronous stream processing with non-blocking backpressure."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDE6VjAyOkNHVFNNUlQ",
              "rawKey": "S8:C1:V2",
              "title": "Complete Guide to Spring MVC: Reactive types",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/reactive-types",
              "durationText": "8m 15s",
              "durationSeconds": 495,
              "description": "Reactive Streams specification, `Mono` and `Flux` publisher contracts in Spring.",
              "categoryTag": "Reactive Model & Reactive Streams Fundamentals",
              "references": [
                {
                  "label": "Project Reactor Core Reference: Mono and Flux",
                  "url": "https://projectreactor.io/docs/core/release/reference/#core-features",
                  "description": "Reactive Streams `Publisher` implementations for 0..1 and 0..N elements."
                },
                {
                  "label": "Spring Framework Reference: Reactive Types in Spring MVC",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html#mvc-ann-async-reactive-types",
                  "description": "Bridging Reactor publishers into Spring MVC asynchronous execution."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDE6VjAzOkNHVFNNRA",
              "rawKey": "S8:C1:V3",
              "title": "Complete Guide to Spring MVC: DeferredResult",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/deferredresult",
              "durationText": "4m 1s",
              "durationSeconds": 241,
              "description": "Asynchronous result setting from external threads.",
              "categoryTag": "Asynchronous Execution & Streaming",
              "references": [
                {
                  "label": "Spring Framework Reference: `DeferredResult`",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html#mvc-ann-async-deferredresult",
                  "description": "Producing response payloads asynchronously from worker threads or event queues."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDE6VjA0OkNHVFNNQw",
              "rawKey": "S8:C1:V4",
              "title": "Complete Guide to Spring MVC: Callable",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/callable",
              "durationText": "5m 3s",
              "durationSeconds": 303,
              "description": "Offloading processing from servlet containers to dedicated task executors.",
              "categoryTag": "Asynchronous Execution & Streaming",
              "references": [
                {
                  "label": "Spring Framework Reference: Callable Asynchronous Execution",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html#mvc-ann-async-callable",
                  "description": "Offloading long-running calculations to Spring `TaskExecutor`."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDE6VjA1OkNHVFNNSFNP",
              "rawKey": "S8:C1:V5",
              "title": "Complete Guide to Spring MVC: HTTP streaming overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/http-streaming-overview",
              "durationText": "9m 53s",
              "durationSeconds": 593,
              "description": "Chunked transfer encoding and streaming data emission.",
              "categoryTag": "Asynchronous Execution & Streaming",
              "references": [
                {
                  "label": "Spring Framework Reference: HTTP Streaming",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html#mvc-ann-async-http-streaming",
                  "description": "`ResponseBodyEmitter`, `SseEmitter`, and Server-Sent Events (SSE)."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDE6VjA2OkNHVFNNQ1A",
              "rawKey": "S8:C1:V6",
              "title": "Complete Guide to Spring MVC: Context propagation",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/context-propagation",
              "durationText": "8m 40s",
              "durationSeconds": 520,
              "description": "Propagating thread-local state (MDC, SecurityContext) across reactive pipeline stages.",
              "categoryTag": "Asynchronous Execution & Streaming",
              "references": [
                {
                  "label": "Project Reactor Core Reference: Context API",
                  "url": "https://projectreactor.io/docs/core/release/reference/#context",
                  "description": "Attaching contextual metadata to reactive streams across thread boundaries."
                },
                {
                  "label": "Spring Framework Reference: Context Propagation",
                  "url": "https://docs.spring.io/spring-framework/reference/integration/observability.html#observability.context-propagation",
                  "description": "Propagating tracing contexts and security across reactive schedulers."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDE6VjA3OkNHVFNNRA",
              "rawKey": "S8:C1:V7",
              "title": "Complete Guide to Spring MVC: Disconnects",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/disconnects",
              "durationText": "5m 43s",
              "durationSeconds": 343,
              "description": "Handling client cancellation and disposing reactive subscriptions.",
              "categoryTag": "Asynchronous Execution & Streaming",
              "references": [
                {
                  "label": "Spring Framework Reference: Client Disconnect",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-ann-async.html#mvc-ann-async-disconnects",
                  "description": "Detecting I/O channel drops and releasing stream resources."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2747
        },
        {
          "id": "08-002",
          "number": 2,
          "title": "WebFlux, R2DBC, RSocket",
          "localChapterFile": "002-webflux-and-r2dbc.md",
          "keyConcepts": [
            "Spring WebFlux on Netty",
            "Functional Endpoints (`RouterFunction`",
            "`HandlerFunction`)",
            "Non-blocking HTTP with `WebClient`",
            "R2DBC Reactive Relational Database Connectivity",
            "Reactive Transactions."
          ],
          "videos": [
            {
              "id": "UzA4OkMwMDI6VjAxOkNHVFNNRkVP",
              "rawKey": "S8:C2:V1",
              "title": "Complete Guide to Spring MVC: Functional endpoints overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/functional-endpoints-overview",
              "durationText": "3m 58s",
              "durationSeconds": 238,
              "description": "Shift from annotation-based controllers to functional routing.",
              "categoryTag": "Functional Endpoints & Routing",
              "references": [
                {
                  "label": "Spring Framework Reference: Functional Endpoints",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webflux-functional.html",
                  "description": "Lightweight functional alternative to annotated controllers."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDI6VjAyOkNHVFNNSE8",
              "rawKey": "S8:C2:V2",
              "title": "Complete Guide to Spring MVC: HandlerFunction overview",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/handlerfunction-overview",
              "durationText": "6m 12s",
              "durationSeconds": 372,
              "description": "Functional request handlers and lambda-based controllers.",
              "categoryTag": "Functional Endpoints & Routing",
              "references": [
                {
                  "label": "Spring Framework Reference: HandlerFunction",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webflux-functional.html#webflux-fn-handler-functions",
                  "description": "`HandlerFunction<ServerResponse>` contract and reactive handling."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDI6VjAzOkNHVFNNSFNT",
              "rawKey": "S8:C2:V3",
              "title": "Complete Guide to Spring MVC: HandlerFunction: ServerRequest & ServerResponse",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/handlerfunction-serverrequest-serverresponse",
              "durationText": "7m 9s",
              "durationSeconds": 429,
              "description": "Immutability and body parsing in reactive requests.",
              "categoryTag": "Functional Endpoints & Routing",
              "references": [
                {
                  "label": "Spring Framework Reference: ServerRequest and ServerResponse",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webflux-functional.html#webflux-fn-request",
                  "description": "Non-blocking body decoding via `bodyToMono()` and body encoding."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDI6VjA0OkNHVFNNUkFS",
              "rawKey": "S8:C2:V4",
              "title": "Complete Guide to Spring MVC: RouterFunctions and routing",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/routerfunctions-and-routing",
              "durationText": "5m 7s",
              "durationSeconds": 307,
              "description": "Composing route predicates and path handlers.",
              "categoryTag": "Functional Endpoints & Routing",
              "references": [
                {
                  "label": "Spring Framework Reference: RouterFunctions",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webflux-functional.html#webflux-fn-router-functions",
                  "description": "Route DSL composition using `RouterFunctions.route()`."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDI6VjA1OkNHVFNNRkhG",
              "rawKey": "S8:C2:V5",
              "title": "Complete Guide to Spring MVC: Filtering handler functions",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/filtering-handler-functions",
              "durationText": "5m 50s",
              "durationSeconds": 350,
              "description": "Functional route filters and interceptors.",
              "categoryTag": "Functional Endpoints & Routing",
              "references": [
                {
                  "label": "Spring Framework Reference: Filtering Handler Functions",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webflux-functional.html#webflux-fn-handler-filter-function",
                  "description": "Intercepting functional invocations with `HandlerFilterFunction`."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDI6VjA2OlNEU0RSUg",
              "rawKey": "S8:C2:V6",
              "title": "Spring Data: Spring Data reactive repositories",
              "url": "https://www.linkedin.com/learning/spring-data-3/spring-data-reactive-repositories",
              "durationText": "15m 27s",
              "durationSeconds": 927,
              "description": "Non-blocking database access, reactive drivers, and returning `Mono<T>`/`Flux<T>` from persistence layers.",
              "categoryTag": "Reactive Data Access (R2DBC)",
              "references": [
                {
                  "label": "Spring Data R2DBC Reference: Core Concepts",
                  "url": "https://docs.spring.io/spring-data/relational/reference/r2dbc.html",
                  "description": "Reactive Relational Database Connectivity with R2DBC drivers and `R2dbcEntityTemplate`."
                },
                {
                  "label": "R2DBC Specification",
                  "url": "https://r2dbc.io/spec/1.0.0.RELEASE/spec/html/",
                  "description": "Non-blocking, reactive database driver SPI."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDI6VjA3OlM2U1NJVFdT",
              "rawKey": "S8:C2:V7",
              "title": "Spring 6: Spring Security: Introduction to WebFlux Security",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-webflux-security",
              "durationText": "1m 40s",
              "durationSeconds": 100,
              "description": "Reactive security filter architecture without servlet thread-local constraints.",
              "categoryTag": "WebFlux Reactive Security",
              "references": [
                {
                  "label": "Spring Security Reference: WebFlux Security",
                  "url": "https://docs.spring.io/spring-security/reference/reactive/index.html",
                  "description": "Reactor Context-based security context holder and asynchronous filter chain."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDI6VjA4OlM2U1NJQlM",
              "rawKey": "S8:C2:V8",
              "title": "Spring 6: Spring Security: Implementing basic security",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/implementing-basic-security",
              "durationText": "5m 48s",
              "durationSeconds": 348,
              "description": "Configuring non-blocking security filters for WebFlux applications.",
              "categoryTag": "WebFlux Reactive Security",
              "references": [
                {
                  "label": "Spring Security Reference: ServerHttpSecurity",
                  "url": "https://docs.spring.io/spring-security/reference/reactive/configuration/webflux.html",
                  "description": "Configuring `SecurityWebFilterChain` using `ServerHttpSecurity`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3071
        },
        {
          "id": "08-003",
          "number": 3,
          "title": "ReactiveCrudRepository and WebTestClient",
          "localChapterFile": "003-misc.md",
          "keyConcepts": [
            "`ReactiveCrudRepository` interface",
            "Derived Query Methods returning `Mono`/`Flux`",
            "`@Query` in reactive context",
            "`WebTestClient` (`bindToController`",
            "`bindToApplicationContext`",
            "`bindToServer`)",
            "Reactive Testing."
          ],
          "videos": [
            {
              "id": "UzA4OkMwMDM6VjAxOlNEU0RSUg",
              "rawKey": "S8:C3:V1",
              "title": "Spring Data: Spring Data reactive repositories",
              "url": "https://www.linkedin.com/learning/spring-data-3/spring-data-reactive-repositories",
              "durationText": "15m 27s",
              "durationSeconds": 927,
              "description": "Interface definitions, derived query method semantics for reactive streams.",
              "categoryTag": "Reactive Repositories",
              "references": [
                {
                  "label": "Spring Data Commons: Reactive Repositories",
                  "url": "https://docs.spring.io/spring-data/commons/reference/api/java/org/springframework/data/repository/reactive/ReactiveCrudRepository.html",
                  "description": "`ReactiveCrudRepository` and `ReactiveSortingRepository` contracts."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDM6VjAyOlNEUEVRTQ",
              "rawKey": "S8:C3:V2",
              "title": "Spring Data: Property expression query methods",
              "url": "https://www.linkedin.com/learning/spring-data-3/property-expression-query-methods",
              "durationText": "8m 46s",
              "durationSeconds": 526,
              "description": "Building query methods for data repositories.",
              "categoryTag": "Reactive Repositories",
              "references": [
                {
                  "label": "Spring Data R2DBC: Query Methods",
                  "url": "https://docs.spring.io/spring-data/relational/reference/r2dbc/repositories.html#r2dbc.repositories.queries",
                  "description": "Query method declarations returning `Mono` and `Flux`."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDM6VjAzOkNHVFNNU01UUw",
              "rawKey": "S8:C3:V3",
              "title": "Complete Guide to Spring MVC: Spring MVC test support",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/spring-mvc-test-support",
              "durationText": "7m 18s",
              "durationSeconds": 438,
              "description": "Testing web layers, mock request dispatch, asserting status codes and response bodies.",
              "categoryTag": "Testing Reactive Applications",
              "references": [
                {
                  "label": "Spring Framework Reference: WebTestClient",
                  "url": "https://docs.spring.io/spring-framework/reference/testing/webtestclient.html",
                  "description": "Fluent client designed for testing WebFlux endpoints without live servers (`bindToController`)."
                }
              ]
            },
            {
              "id": "UzA4OkMwMDM6VjA0OkNHVFNNQ0g",
              "rawKey": "S8:C3:V4",
              "title": "Complete Guide to Spring MVC: Client handling",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/client-handling",
              "durationText": "3m 57s",
              "durationSeconds": 237,
              "description": "HTTP client interactions and validating response streams.",
              "categoryTag": "Testing Reactive Applications",
              "references": [
                {
                  "label": "Spring Framework Reference: WebClient",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webflux-webclient.html",
                  "description": "Non-blocking, reactive HTTP client for functional request execution and streaming."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2128
        }
      ],
      "totalVideos": 19,
      "totalDurationSeconds": 7946
    },
    {
      "id": "section-09",
      "slug": "09-graphql",
      "number": 9,
      "title": "GraphQL with Spring",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\09-graphql.md",
      "recommendedCourses": [
        {
          "title": "Spring with GraphQL",
          "url": "https://www.linkedin.com/learning/spring-with-graphql",
          "author": "Dan Vega",
          "duration": "1h 06m",
          "scope": ""
        },
        {
          "title": "GraphQL Essential Training",
          "url": "https://www.linkedin.com/learning/graphql-essential-training-20298359",
          "author": "Emmanuel Henri",
          "duration": "1h 45m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "09-001",
          "number": 1,
          "title": "Spring GraphQL: schema, resolvers, and the N+1 fix",
          "localChapterFile": "001-graphql-schema-and-resolvers.md",
          "keyConcepts": [
            "GraphQL Schema Definition Language (SDL)",
            "`schema.graphqls`",
            "Root Operations (`Query`",
            "`Mutation`",
            "`Subscription`)",
            "`@QueryMapping`",
            "`@MutationMapping`",
            "`@SchemaMapping`",
            "`DataLoader` (N+1 query problem fix)",
            "GraphiQL / Playground",
            "Custom Scalars."
          ],
          "videos": [
            {
              "id": "UzA5OkMwMDE6VjAxOlNXR0JBR0FXU0I",
              "rawKey": "S9:C1:V1",
              "title": "Spring with GraphQL: Build a GraphQL API with Spring Boot",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/build-a-graphql-api-with-spring-boot",
              "durationText": "39s",
              "durationSeconds": 39,
              "description": "Introduction to building GraphQL services on modern Spring Boot.",
              "categoryTag": "GraphQL Fundamentals & Concepts",
              "references": [
                {
                  "label": "Spring for GraphQL Reference: Overview",
                  "url": "https://docs.spring.io/spring-graphql/reference/index.html",
                  "description": "Spring support for GraphQL built on GraphQL Java."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjAyOlNXR1RQT0c",
              "rawKey": "S9:C1:V2",
              "title": "Spring with GraphQL: The power of GraphQL",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/the-power-of-graphql",
              "durationText": "4m 8s",
              "durationSeconds": 248,
              "description": "Client-driven queries, eliminating over-fetching and under-fetching compared to REST.",
              "categoryTag": "GraphQL Fundamentals & Concepts",
              "references": [
                {
                  "label": "GraphQL Official Specification: Overview",
                  "url": "https://spec.graphql.org/draft/#sec-Overview",
                  "description": "Client-specified queries and hierarchical field selection."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjAzOlNXR0dJSg",
              "rawKey": "S9:C1:V3",
              "title": "Spring with GraphQL: GraphQL in Java",
              "url": "https://www.linkedin.com/learning/spring-graphql/graphql-in-java",
              "durationText": "3m 21s",
              "durationSeconds": 201,
              "description": "`graphql-java` engine and Spring for GraphQL abstraction layer.",
              "categoryTag": "GraphQL Fundamentals & Concepts",
              "references": [
                {
                  "label": "Spring for GraphQL: Architecture",
                  "url": "https://docs.spring.io/spring-graphql/reference/index.html",
                  "description": "Relationship between Spring runtime and underlying `graphql-java` engine."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjA0OlNXR0dU",
              "rawKey": "S9:C1:V4",
              "title": "Spring with GraphQL: GraphQL terminology",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/graphql-terminology",
              "durationText": "4m 31s",
              "durationSeconds": 271,
              "description": "Types, fields, scalars, arguments, queries, and mutations explained.",
              "categoryTag": "GraphQL Fundamentals & Concepts",
              "references": [
                {
                  "label": "GraphQL Official Specification: Type System",
                  "url": "https://spec.graphql.org/draft/#sec-Type-System",
                  "description": "Scalars, Object types, Interface types, Union types, Input objects."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjA1OlNXR0dT",
              "rawKey": "S9:C1:V5",
              "title": "Spring with GraphQL: GraphQL schemas",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/graphql-schemas",
              "durationText": "2m 46s",
              "durationSeconds": 166,
              "description": "Schema definition language (SDL) structure and type contracts.",
              "categoryTag": "Schema Design & Tooling",
              "references": [
                {
                  "label": "GraphQL Official Specification: Schema",
                  "url": "https://spec.graphql.org/draft/#sec-Schema",
                  "description": "SDL syntax and root operation definitions."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjA2OlNXR1NVVFA",
              "rawKey": "S9:C1:V6",
              "title": "Spring with GraphQL: Setting up the project",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/setting-up-the-project",
              "durationText": "4m 18s",
              "durationSeconds": 258,
              "description": "Bootstrapping Spring Boot with `spring-boot-starter-graphql`.",
              "categoryTag": "Schema Design & Tooling",
              "references": [
                {
                  "label": "Spring Boot Reference: Spring for GraphQL Starter",
                  "url": "https://docs.spring.io/spring-boot/reference/web/spring-graphql.html",
                  "description": "Auto-configuration, schema file discovery, and endpoint routing."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjA3OlNXR0NUUw",
              "rawKey": "S9:C1:V7",
              "title": "Spring with GraphQL: Creating the schema",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/creating-the-schema",
              "durationText": "4m 5s",
              "durationSeconds": 245,
              "description": "Authoring `schema.graphqls` under `src/main/resources/graphql/`.",
              "categoryTag": "Schema Design & Tooling",
              "references": [
                {
                  "label": "Spring for GraphQL: Schema Creation & GraphQlSource",
                  "url": "https://docs.spring.io/spring-graphql/reference/request-execution.html#execution.graphqlsource",
                  "description": "Default file locations (`schema.graphqls`) and schema inspection."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjA4OlNXR1VUUA",
              "rawKey": "S9:C1:V8",
              "title": "Spring with GraphQL: Using the playground",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/using-the-playground",
              "durationText": "4m 21s",
              "durationSeconds": 261,
              "description": "Interactive debugging with GraphiQL playground in the browser.",
              "categoryTag": "Schema Design & Tooling",
              "references": [
                {
                  "label": "Spring for GraphQL: GraphiQL Interface",
                  "url": "https://docs.spring.io/spring-graphql/reference/transports.html#http.graphiql",
                  "description": "Enabling `/graphiql` page in development environments."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjA5OlNXR0NBU0RS",
              "rawKey": "S9:C1:V9",
              "title": "Spring with GraphQL: Creating a Spring Data repository",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/creating-a-spring-data-repository",
              "durationText": "5m 41s",
              "durationSeconds": 341,
              "description": "Hooking persistence entities to GraphQL data fetching.",
              "categoryTag": "Controllers, Resolvers & Spring Data Integration",
              "references": [
                {
                  "label": "Spring for GraphQL: Data Repositories Integration",
                  "url": "https://docs.spring.io/spring-graphql/reference/data.html",
                  "description": "Querydsl and QueryByExample auto-wiring into GraphQL query resolvers."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjEwOlNXR0NUR0M",
              "rawKey": "S9:C1:V10",
              "title": "Spring with GraphQL: Creating the GraphQL controller",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/creating-the-graphql-controller",
              "durationText": "6m 44s",
              "durationSeconds": 404,
              "description": "Implementing `@Controller` with `@QueryMapping` and `@SchemaMapping` field resolvers.",
              "categoryTag": "Controllers, Resolvers & Spring Data Integration",
              "references": [
                {
                  "label": "Spring for GraphQL: Annotated Controllers",
                  "url": "https://docs.spring.io/spring-graphql/reference/controllers.html",
                  "description": "`@SchemaMapping` and shortcut `@QueryMapping` annotations."
                },
                {
                  "label": "Spring for GraphQL: Batch Mapping & DataLoader",
                  "url": "https://docs.spring.io/spring-graphql/reference/controllers.html#controllers.batch-mapping",
                  "description": "Solving N+1 query problem with `@BatchMapping` and `DataLoader`."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjExOlNXR00",
              "rawKey": "S9:C1:V11",
              "title": "Spring with GraphQL: Mutations",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/mutations",
              "durationText": "5m 32s",
              "durationSeconds": 332,
              "description": "Handling state changes and write operations via `@MutationMapping`.",
              "categoryTag": "Controllers, Resolvers & Spring Data Integration",
              "references": [
                {
                  "label": "Spring for GraphQL: Mutation Mapping",
                  "url": "https://docs.spring.io/spring-graphql/reference/controllers.html#controllers.schema-mapping",
                  "description": "`@MutationMapping` and handling input arguments."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjEyOlNXR0U",
              "rawKey": "S9:C1:V12",
              "title": "Spring with GraphQL: Errors",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/errors",
              "durationText": "4m 8s",
              "durationSeconds": 248,
              "description": "Structured GraphQL error response formatting and exception handling.",
              "categoryTag": "Controllers, Resolvers & Spring Data Integration",
              "references": [
                {
                  "label": "Spring for GraphQL: Exception Handling",
                  "url": "https://docs.spring.io/spring-graphql/reference/controllers.html#controllers.exception-handling",
                  "description": "`@GraphQlExceptionHandler` and `DataFetcherExceptionResolver`."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjEzOlNXR0NFVEE",
              "rawKey": "S9:C1:V13",
              "title": "Spring with GraphQL: Challenge: Extending the API",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/challenge-extending-the-api",
              "durationText": "1m 19s",
              "durationSeconds": 79,
              "description": "Hands-on GraphQL schema expansion and resolver creation.",
              "categoryTag": "Controllers, Resolvers & Spring Data Integration",
              "references": [
                {
                  "label": "Spring for GraphQL: Controller Arguments",
                  "url": "https://docs.spring.io/spring-graphql/reference/controllers.html#controllers.methods",
                  "description": "Injected handler arguments (`@Argument`, `@Arguments`, `DataFetchingEnvironment`)."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjE0OlNXR1NFVEE",
              "rawKey": "S9:C1:V14",
              "title": "Spring with GraphQL: Solution: Extending the API",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/solution-extending-the-api",
              "durationText": "4m 4s",
              "durationSeconds": 244,
              "description": "Solution walkthrough.",
              "categoryTag": "Controllers, Resolvers & Spring Data Integration",
              "references": [
                {
                  "label": "Spring for GraphQL: Custom Scalars",
                  "url": "https://docs.spring.io/spring-graphql/reference/request-execution.html#execution.graphqlsource",
                  "description": "Registering Extended Scalars and coercing custom formats."
                }
              ]
            },
            {
              "id": "UzA5OkMwMDE6VjE1OlNXR05T",
              "rawKey": "S9:C1:V15",
              "title": "Spring with GraphQL: Next steps",
              "url": "https://www.linkedin.com/learning/spring-with-graphql/next-steps",
              "durationText": "4m 7s",
              "durationSeconds": 247,
              "description": "Subscriptions, DataLoader batching, and production considerations.",
              "categoryTag": "Controllers, Resolvers & Spring Data Integration",
              "references": [
                {
                  "label": "Spring for GraphQL: Subscriptions",
                  "url": "https://docs.spring.io/spring-graphql/reference/controllers.html#controllers.schema-mapping",
                  "description": "`@SubscriptionMapping` over WebSockets and SSE."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3584
        }
      ],
      "totalVideos": 15,
      "totalDurationSeconds": 3584
    },
    {
      "id": "section-10",
      "slug": "10-grpc",
      "number": 10,
      "title": "gRPC Microservices in Java",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\10-grpc.md",
      "recommendedCourses": [
        {
          "title": "Building Java Microservices with gRPC",
          "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc",
          "author": "Michael Pogrebinsky",
          "duration": "3h 05m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "10-001",
          "number": 1,
          "title": "gRPC, Protobuf, and Spring",
          "localChapterFile": "001-grpc-and-protobuf.md",
          "keyConcepts": [
            "Protocol Buffers (proto3 IDL)",
            "Field Tags",
            "Four RPC Shapes (Unary",
            "Server-streaming",
            "Client-streaming",
            "Bidirectional)",
            "`protoc` and `protoc-gen-grpc-java`",
            "`BindableService`",
            "`ManagedChannel`",
            "Client Stubs (`BlockingStub`",
            "Async Stub)",
            "`StatusRuntimeException`."
          ],
          "videos": [
            {
              "id": "UzEwOkMwMDE6VjAxOkJKTVdHTVdH",
              "rawKey": "S10:C1:V1",
              "title": "Building Java Microservices with gRPC: Microservices with gRPC",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/microservices-with-grpc",
              "durationText": "39s",
              "durationSeconds": 39,
              "description": "Modern high-performance RPC communication between backend services.",
              "categoryTag": "gRPC Architectural Foundations",
              "references": [
                {
                  "label": "gRPC Documentation: What is gRPC?",
                  "url": "https://grpc.io/docs/what-is-grpc/introduction/",
                  "description": "High-performance, open source universal RPC framework."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjAyOkJKTVdHSVND",
              "rawKey": "S10:C1:V2",
              "title": "Building Java Microservices with gRPC: Inter-service communication",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/inter-service-communication",
              "durationText": "5m 57s",
              "durationSeconds": 357,
              "description": "REST over HTTP/1 limitations vs binary RPC over HTTP/2.",
              "categoryTag": "gRPC Architectural Foundations",
              "references": [
                {
                  "label": "gRPC Documentation: Core Concepts",
                  "url": "https://grpc.io/docs/what-is-grpc/core-concepts/",
                  "description": "Protocol Buffers as interface definition and serialization mechanism."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjAzOkJKTVdHR0ZP",
              "rawKey": "S10:C1:V3",
              "title": "Building Java Microservices with gRPC: gRPC framework overview",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/grpc-framework-overview",
              "durationText": "35s",
              "durationSeconds": 35,
              "description": "High-level architecture of Google's open-source RPC framework.",
              "categoryTag": "gRPC Architectural Foundations",
              "references": [
                {
                  "label": "gRPC Java Documentation: Overview",
                  "url": "https://grpc.io/docs/languages/java/",
                  "description": "Java implementation of gRPC over Netty or OkHttp transport."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjA0OkJKTVdHR0ZG",
              "rawKey": "S10:C1:V4",
              "title": "Building Java Microservices with gRPC: gRPC framework features",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/grpc-framework-features",
              "durationText": "3m 45s",
              "durationSeconds": 225,
              "description": "Multiplexing, bidirectional streaming, header compression, and language neutrality.",
              "categoryTag": "gRPC Architectural Foundations",
              "references": [
                {
                  "label": "gRPC Core Concepts: RPC Life Cycle",
                  "url": "https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle",
                  "description": "Synchronous and asynchronous RPC handling flows."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjA1OkJKTVdHR0Y",
              "rawKey": "S10:C1:V5",
              "title": "Building Java Microservices with gRPC: gRPC foundations",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/grpc-foundations",
              "durationText": "55s",
              "durationSeconds": 55,
              "description": "Core building blocks of the framework.",
              "categoryTag": "gRPC Architectural Foundations",
              "references": [
                {
                  "label": "gRPC Java Quick Start Guide",
                  "url": "https://grpc.io/docs/languages/java/quickstart/",
                  "description": "Tooling setup, Gradle/Maven build configuration."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjA2OkJKTVdHSDFQ",
              "rawKey": "S10:C1:V6",
              "title": "Building Java Microservices with gRPC: HTTP/1 problems",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/http-1-problems",
              "durationText": "2m 16s",
              "durationSeconds": 136,
              "description": "Head-of-line blocking and textual JSON overhead.",
              "categoryTag": "gRPC Architectural Foundations",
              "references": [
                {
                  "label": "IETF RFC 9112: HTTP/1.1 Message Syntax & Bottlenecks",
                  "url": "https://www.rfc-editor.org/rfc/rfc9112#section-2",
                  "description": "Textual serialization overhead and sequential connection model."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjA3OkJKTVdHSElIMkI",
              "rawKey": "S10:C1:V7",
              "title": "Building Java Microservices with gRPC: How is HTTP/2 better?",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/how-is-http-2-better",
              "durationText": "3m 8s",
              "durationSeconds": 188,
              "description": "Binary framing, single TCP connection multiplexing, and flow control.",
              "categoryTag": "gRPC Architectural Foundations",
              "references": [
                {
                  "label": "IETF RFC 9113: HTTP/2 Multiplexing & Binary Framing",
                  "url": "https://www.rfc-editor.org/rfc/rfc9113#section-5",
                  "description": "Streams, frames, and HPACK header compression."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjA4OkJKTVdHVVBC",
              "rawKey": "S10:C1:V8",
              "title": "Building Java Microservices with gRPC: Understand protocol buffers",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/understand-protocol-buffers",
              "durationText": "1m 58s",
              "durationSeconds": 118,
              "description": "Serializing structured data into compact binary payloads.",
              "categoryTag": "Protocol Buffers (Protobuf) & Code Generation",
              "references": [
                {
                  "label": "Protocol Buffers Documentation: Overview",
                  "url": "https://protobuf.dev/overview/",
                  "description": "Binary serialization format and backward compatibility guarantees."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjA5OkJKTVdHU1REQUc",
              "rawKey": "S10:C1:V9",
              "title": "Building Java Microservices with gRPC: Steps to develop a gRPC service",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/steps-to-develop-a-grpc-service",
              "durationText": "1m 22s",
              "durationSeconds": 82,
              "description": "Contract definition, stub compilation, server implementation, client consumption.",
              "categoryTag": "Protocol Buffers (Protobuf) & Code Generation",
              "references": [
                {
                  "label": "gRPC Java: Basics Tutorial",
                  "url": "https://grpc.io/docs/languages/java/basics/",
                  "description": "Workflow from defining `.proto` service to generating Java code."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjEwOkJKTVdHVVBC",
              "rawKey": "S10:C1:V10",
              "title": "Building Java Microservices with gRPC: Using protocol buffers",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/using-protocol-buffers",
              "durationText": "2m 33s",
              "durationSeconds": 153,
              "description": "Syntax rules for `.proto` files, message fields, and numeric tags.",
              "categoryTag": "Protocol Buffers (Protobuf) & Code Generation",
              "references": [
                {
                  "label": "Protocol Buffers: Language Guide (proto3)",
                  "url": "https://protobuf.dev/programming-guides/proto3/",
                  "description": "Field numbers, field rules, scalar types, and default values."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjExOkJKTVdHU0RVUA",
              "rawKey": "S10:C1:V11",
              "title": "Building Java Microservices with gRPC: Service definition using protobuffs",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/service-definition-using-protobuffs",
              "durationText": "7m 14s",
              "durationSeconds": 434,
              "description": "Writing service RPC definitions with request and response message types.",
              "categoryTag": "Protocol Buffers (Protobuf) & Code Generation",
              "references": [
                {
                  "label": "Protocol Buffers: Defining Services",
                  "url": "https://protobuf.dev/programming-guides/proto3/#services",
                  "description": "`service` syntax and `rpc` definitions."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjEyOkJKTVdHR1NVUA",
              "rawKey": "S10:C1:V12",
              "title": "Building Java Microservices with gRPC: Generate stubs using protoc",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/generate-stubs-using-protoc",
              "durationText": "7m 35s",
              "durationSeconds": 455,
              "description": "Invoking the protobuf compiler and Maven plugin.",
              "categoryTag": "Protocol Buffers (Protobuf) & Code Generation",
              "references": [
                {
                  "label": "gRPC Java: Protobuf Maven Plugin",
                  "url": "https://github.com/grpc/grpc-java/blob/master/README.md#how-to-use-from-maven",
                  "description": "Compiling proto files into Java classes via `protobuf-maven-plugin`."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjEzOkJKTVdHR0NXVA",
              "rawKey": "S10:C1:V13",
              "title": "Building Java Microservices with gRPC: Generated classes walk-through",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/generated-classes-walk-through",
              "durationText": "3m 4s",
              "durationSeconds": 184,
              "description": "Examining `ImplBase` and generated stub interfaces.",
              "categoryTag": "Protocol Buffers (Protobuf) & Code Generation",
              "references": [
                {
                  "label": "gRPC Java API: `io.grpc.BindableService`",
                  "url": "https://grpc.github.io/grpc-java/javadoc/io/grpc/BindableService.html",
                  "description": "Contract for generated `*ImplBase` service classes."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjE0OkJKTVdHTUFD",
              "rawKey": "S10:C1:V14",
              "title": "Building Java Microservices with gRPC: Metadata and channels",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/metadata-and-channels",
              "durationText": "1m 55s",
              "durationSeconds": 115,
              "description": "`ManagedChannel` connection management and request metadata.",
              "categoryTag": "Channels, Stubs & Call Patterns",
              "references": [
                {
                  "label": "gRPC Java API: `io.grpc.ManagedChannel`",
                  "url": "https://grpc.github.io/grpc-java/javadoc/io/grpc/ManagedChannel.html",
                  "description": "Channel connection lifecycle, state transitions, and shutdown."
                },
                {
                  "label": "gRPC Java API: `io.grpc.Metadata`",
                  "url": "https://grpc.github.io/grpc-java/javadoc/io/grpc/Metadata.html",
                  "description": "Out-of-band request/response headers and binary trailers."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjE1OkJKTVdHVE9HQw",
              "rawKey": "S10:C1:V15",
              "title": "Building Java Microservices with gRPC: Types of gRPC calls",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/types-of-grpc-calls",
              "durationText": "3m 24s",
              "durationSeconds": 204,
              "description": "Detailed breakdown of Unary, Server Streaming, Client Streaming, and Bidirectional Streaming calls.",
              "categoryTag": "Channels, Stubs & Call Patterns",
              "references": [
                {
                  "label": "gRPC Guides: Four Types of Service Methods",
                  "url": "https://grpc.io/docs/what-is-grpc/core-concepts/#rpc-life-cycle",
                  "description": "Unary RPC, Server streaming RPC, Client streaming RPC, Bidirectional streaming RPC."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjE2OkJKTVdHQ0FNR1A",
              "rawKey": "S10:C1:V16",
              "title": "Building Java Microservices with gRPC: Create a maven-gRPC project",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/create-a-maven-grpc-project",
              "durationText": "4m 21s",
              "durationSeconds": 261,
              "description": "Project setup with protobuf dependencies.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Java Setup: Dependencies Guide",
                  "url": "https://github.com/grpc/grpc-java/blob/master/README.md",
                  "description": "Adding `grpc-netty-shaded`, `grpc-protobuf`, and `grpc-stub`."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjE3OkJKTVdHRFVQQUc",
              "rawKey": "S10:C1:V17",
              "title": "Building Java Microservices with gRPC: Define user.proto and generate service stubs",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/define-user-proto-and-generate-service-stubs",
              "durationText": "4m 42s",
              "durationSeconds": 282,
              "description": "Service definition in practice.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Java Tutorial: Defining the Service",
                  "url": "https://grpc.io/docs/languages/java/basics/#defining-the-service",
                  "description": "Declaring RPC methods and generating Java message builders."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjE4OkJKTVdHSVNT",
              "rawKey": "S10:C1:V18",
              "title": "Building Java Microservices with gRPC: Implement service stub",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/implement-service-stub",
              "durationText": "7m 30s",
              "durationSeconds": 450,
              "description": "Extending generated `ImplBase` and implementing business methods with `StreamObserver`.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Java API: `io.grpc.stub.StreamObserver`",
                  "url": "https://grpc.github.io/grpc-java/javadoc/io/grpc/stub/StreamObserver.html",
                  "description": "`onNext()`, `onError()`, and `onCompleted()` callback dispatching."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjE5OkJKTVdHV0NUSFQ",
              "rawKey": "S10:C1:V19",
              "title": "Building Java Microservices with gRPC: Write code to host the user service",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/write-code-to-host-the-user-service",
              "durationText": "8m 55s",
              "durationSeconds": 535,
              "description": "Starting `ServerBuilder`, binding port, and handling service lifecycle.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Java API: `io.grpc.ServerBuilder`",
                  "url": "https://grpc.github.io/grpc-java/javadoc/io/grpc/ServerBuilder.html",
                  "description": "Binding listening ports, registering service instances, and server start."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjIwOkJKTVdHVFRVUw",
              "rawKey": "S10:C1:V20",
              "title": "Building Java Microservices with gRPC: Test the user service",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/test-the-user-service",
              "durationText": "6m 13s",
              "durationSeconds": 373,
              "description": "Verifying service responses with client calls.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Java Testing: In-Process Channel and Server",
                  "url": "https://grpc.github.io/grpc-java/javadoc/io/grpc/inprocess/InProcessServerBuilder.html",
                  "description": "Zero-network, fast unit testing of gRPC services."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjIxOkJKTVdHV0FDVEM",
              "rawKey": "S10:C1:V21",
              "title": "Building Java Microservices with gRPC: Write a client to call order service",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/write-a-client-to-call-order-service",
              "durationText": "5m 14s",
              "durationSeconds": 314,
              "description": "Instantiating `BlockingStub` over `ManagedChannel` to invoke remote procedures.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Java Tutorial: Creating the Client",
                  "url": "https://grpc.io/docs/languages/java/basics/#creating-the-client",
                  "description": "Constructing channels and instantiating `*BlockingStub`."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjIyOkJKTVdHQ09DRlU",
              "rawKey": "S10:C1:V22",
              "title": "Building Java Microservices with gRPC: Call order client from user service",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/call-order-client-from-user-service",
              "durationText": "7m 44s",
              "durationSeconds": 464,
              "description": "Service-to-service RPC chaining across microservices.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Guides: Error Handling",
                  "url": "https://grpc.io/docs/guides/status-codes/",
                  "description": "Standard status codes (`UNAVAILABLE`, `NOT_FOUND`, `INVALID_ARGUMENT`) and `StatusRuntimeException`."
                }
              ]
            },
            {
              "id": "UzEwOkMwMDE6VjIzOkJKTVdHVFRGRk8",
              "rawKey": "S10:C1:V23",
              "title": "Building Java Microservices with gRPC: Test the full flow of order management",
              "url": "https://www.linkedin.com/learning/building-java-microservices-with-grpc/test-the-full-flow-of-order-management",
              "durationText": "6m 43s",
              "durationSeconds": 403,
              "description": "End-to-end integration testing of distributed gRPC calls.",
              "categoryTag": "Server Implementation & Client Invocations",
              "references": [
                {
                  "label": "gRPC Spring Boot Starter Documentation",
                  "url": "https://yidongnan.github.io/grpc-spring-boot-starter/en/",
                  "description": "`@GrpcService` annotation and auto-configured gRPC servers in Spring Boot."
                }
              ]
            }
          ],
          "totalDurationSeconds": 5862
        }
      ],
      "totalVideos": 23,
      "totalDurationSeconds": 5862
    },
    {
      "id": "section-11",
      "slug": "11-spring-security-and-oauth2",
      "number": 11,
      "title": "Spring Security & OAuth2",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\11-spring-security-and-oauth2.md",
      "recommendedCourses": [
        {
          "title": "Spring 6: Spring Security",
          "url": "https://www.linkedin.com/learning/spring-6-spring-security",
          "author": "Frank P Moley III",
          "duration": "1h 35m",
          "scope": ""
        },
        {
          "title": "Web Security: OAuth and OpenID Connect",
          "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424",
          "author": "Keith Casey",
          "duration": "1h 45m",
          "scope": ""
        },
        {
          "title": "Learn Java Cryptography",
          "url": "https://www.linkedin.com/learning/learn-java-cryptography",
          "author": "Frank P Moley III",
          "duration": "1h 40m",
          "scope": ""
        },
        {
          "title": "Complete Guide to Spring MVC",
          "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc",
          "author": "Frank P Moley III",
          "duration": "4h 52m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "11-001",
          "number": 1,
          "title": "Spring Security filter chain and Basic auth",
          "localChapterFile": "001-security-filter-and-basic-auth.md",
          "keyConcepts": [
            "`SecurityFilterChain` bean",
            "`FilterChainProxy`",
            "`AuthenticationManager`",
            "`UserDetailsService`",
            "`PasswordEncoder`",
            "HTTP Basic",
            "Form Login",
            "`AuthenticationEntryPoint`",
            "`AccessDeniedHandler`."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDE6VjAxOlM2U1NTV1NT",
              "rawKey": "S11:C1:V1",
              "title": "Spring 6: Spring Security: Secure with Spring Security",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/secure-with-spring-security",
              "durationText": "33s",
              "durationSeconds": 33,
              "description": "Introduction to modern Spring Security 6.",
              "categoryTag": "Spring Security Architecture & Filter Chain",
              "references": [
                {
                  "label": "Spring Security Reference: Getting Started",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/getting-started.html",
                  "description": "Overview of Spring Security 6 capabilities and security foundations."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjAyOlM2U1NJVFNT",
              "rawKey": "S11:C1:V2",
              "title": "Spring 6: Spring Security: Introduction to Spring Security",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-spring-security",
              "durationText": "3m 7s",
              "durationSeconds": 187,
              "description": "Architecture, servlet filter chain interception, and default security configuration.",
              "categoryTag": "Spring Security Architecture & Filter Chain",
              "references": [
                {
                  "label": "Spring Security Reference: Servlet Security Architecture",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/architecture.html",
                  "description": "DelegatingFilterProxy, FilterChainProxy, and SecurityFilterChain."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjAzOlM2U1NBVkE",
              "rawKey": "S11:C1:V3",
              "title": "Spring 6: Spring Security: Authentication vs. authorization",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/authentication-vs-authorization",
              "durationText": "3m 53s",
              "durationSeconds": 233,
              "description": "Distinguishing identity establishment from access control decisions.",
              "categoryTag": "Spring Security Architecture & Filter Chain",
              "references": [
                {
                  "label": "Spring Security Reference: Authentication Architecture",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/architecture.html",
                  "description": "SecurityContextHolder, SecurityContext, Authentication, and AuthenticationManager."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjA0OlM2U1NJTUE",
              "rawKey": "S11:C1:V4",
              "title": "Spring 6: Spring Security: In-memory authentication",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/in-memory-authentication",
              "durationText": "6m 21s",
              "durationSeconds": 381,
              "description": "Configuring `InMemoryUserDetailsManager` and test user accounts.",
              "categoryTag": "Authentication Providers & User Storage",
              "references": [
                {
                  "label": "Spring Security Reference: In-Memory Authentication",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/in-memory.html",
                  "description": "Defining UserDetails and InMemoryUserDetailsManager bean."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjA1OlM2U1NKQQ",
              "rawKey": "S11:C1:V5",
              "title": "Spring 6: Spring Security: JDBC authentication",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/jdbc-authentication",
              "durationText": "5m 54s",
              "durationSeconds": 354,
              "description": "Database-backed users via `JdbcUserDetailsManager` and standard schema.",
              "categoryTag": "Authentication Providers & User Storage",
              "references": [
                {
                  "label": "Spring Security Reference: JDBC Authentication",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/jdbc.html",
                  "description": "Standard DDL schema for users and authorities."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjA2OlM2U1NMQkZI",
              "rawKey": "S11:C1:V6",
              "title": "Spring 6: Spring Security: Leveraging bcrypt for hashing",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing",
              "durationText": "2m 45s",
              "durationSeconds": 165,
              "description": "`BCryptPasswordEncoder` integration and salted hash storage.",
              "categoryTag": "Authentication Providers & User Storage",
              "references": [
                {
                  "label": "Spring Security Reference: Password Storage",
                  "url": "https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html#authentication-password-storage-bcrypt",
                  "description": "DelegatingPasswordEncoder and BCrypt work factor tuning."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjA3OlM2U1NBQQ",
              "rawKey": "S11:C1:V7",
              "title": "Spring 6: Spring Security: Applying authorizations",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations",
              "durationText": "7m 56s",
              "durationSeconds": 476,
              "description": "`authorizeHttpRequests()` DSL, path matchers, and role checks.",
              "categoryTag": "Request Authorization & Form Login",
              "references": [
                {
                  "label": "Spring Security Reference: Authorize HTTP Requests",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authorization/authorize-http-requests.html",
                  "description": "Configuring request matchers, roles, and authorities."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjA4OlM2U1NGQkE",
              "rawKey": "S11:C1:V8",
              "title": "Spring 6: Spring Security: Form-based authentication",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/form-based-authentication",
              "durationText": "3m 25s",
              "durationSeconds": 205,
              "description": "`formLogin()` filter, session creation, and credential handling.",
              "categoryTag": "Request Authorization & Form Login",
              "references": [
                {
                  "label": "Spring Security Reference: Form Login",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/form.html",
                  "description": "UsernamePasswordAuthenticationFilter and form login configuration."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjA5OlM2U1NUTFA",
              "rawKey": "S11:C1:V9",
              "title": "Spring 6: Spring Security: The login page",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/the-login-page",
              "durationText": "3m 51s",
              "durationSeconds": 231,
              "description": "Customizing the login form and target URL redirect.",
              "categoryTag": "Request Authorization & Form Login",
              "references": [
                {
                  "label": "Spring Security Reference: Custom Login Form",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/form.html#servlet-authentication-form-custom",
                  "description": "Custom login page URL and success handlers."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjEwOlM2U1NXSUFU",
              "rawKey": "S11:C1:V10",
              "title": "Spring 6: Spring Security: Wiring it all together",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/wiring-it-all-together",
              "durationText": "2m 46s",
              "durationSeconds": 166,
              "description": "Composing the `SecurityFilterChain` bean.",
              "categoryTag": "Request Authorization & Form Login",
              "references": [
                {
                  "label": "Spring Security Reference: Java Configuration",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/configuration/java.html",
                  "description": "Defining the `@Bean SecurityFilterChain` pipeline."
                }
              ]
            },
            {
              "id": "UzExOkMwMDE6VjExOlM2U1NGVEFU",
              "rawKey": "S11:C1:V11",
              "title": "Spring 6: Spring Security: Finishing touches and testing",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/finishing-touches-and-testing",
              "durationText": "1m 46s",
              "durationSeconds": 106,
              "description": "Verifying HTTP Basic and form-based flows with curl and browser.",
              "categoryTag": "Request Authorization & Form Login",
              "references": [
                {
                  "label": "Spring Security Reference: HTTP Basic Authentication",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/basic.html",
                  "description": "BasicAuthenticationFilter and header challenge behavior."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2537
        },
        {
          "id": "11-002",
          "number": 2,
          "title": "JWT (HS256/RS256), JJWT, token storage",
          "localChapterFile": "002-jwt-and-tokens.md",
          "keyConcepts": [
            "JSON Web Tokens (JWT)",
            "JWS vs JWE",
            "HMAC (HS256) vs RSA (RS256)",
            "JJWT library",
            "Standard Claims (`sub`",
            "`iss`",
            "`aud`",
            "`exp`",
            "`nbf`)",
            "`BearerTokenAuthenticationFilter`",
            "Stateless Authentication."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDI6VjAxOldTT0FPQ08yMFQ",
              "rawKey": "S11:C2:V1",
              "title": "Web Security: OAuth and OpenID Connect: OAuth 2.0 tokens",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-tokens",
              "durationText": "2m 14s",
              "durationSeconds": 134,
              "description": "Bearer tokens, token entropy, and opaque vs structured tokens.",
              "categoryTag": "JWT Architecture & Validation",
              "references": [
                {
                  "label": "IETF RFC 6750: OAuth 2.0 Bearer Token Usage",
                  "url": "https://www.rfc-editor.org/rfc/rfc6750",
                  "description": "Bearer token specification in HTTP Authorization headers."
                }
              ]
            },
            {
              "id": "UzExOkMwMDI6VjAyOldTT0FPQ1ZK",
              "rawKey": "S11:C2:V2",
              "title": "Web Security: OAuth and OpenID Connect: Validating JWTs",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/validating-jwts",
              "durationText": "3m 44s",
              "durationSeconds": 224,
              "description": "Parsing the three Base64URL segments (Header, Payload, Signature) and cryptographic verification.",
              "categoryTag": "JWT Architecture & Validation",
              "references": [
                {
                  "label": "IETF RFC 7519: JSON Web Token (JWT)",
                  "url": "https://www.rfc-editor.org/rfc/rfc7519",
                  "description": "Token claims (`iss`, `sub`, `aud`, `exp`, `nbf`, `iat`, `jti`) and serialization format."
                },
                {
                  "label": "Spring Security Reference: OAuth2 Resource Server JWT",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html",
                  "description": "`JwtDecoder`, claim validation, and GrantedAuthoritiesConverter."
                }
              ]
            },
            {
              "id": "UzExOkMwMDI6VjAzOldTT0FPQ0hUU0E",
              "rawKey": "S11:C2:V3",
              "title": "Web Security: OAuth and OpenID Connect: Handling tokens safely and securely",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/handling-tokens-safely-and-securely",
              "durationText": "3m 14s",
              "durationSeconds": 194,
              "description": "Client token storage (cookies vs LocalStorage) and avoiding XSS theft.",
              "categoryTag": "JWT Architecture & Validation",
              "references": [
                {
                  "label": "OWASP Cheat Sheet: HTML5 Security Storage",
                  "url": "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage",
                  "description": "Risks of Web Storage for session tokens vs HttpOnly cookies."
                }
              ]
            },
            {
              "id": "UzExOkMwMDI6VjA0OkxKQ1VEUw",
              "rawKey": "S11:C2:V4",
              "title": "Learn Java Cryptography: Understanding digital signatures",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/understanding-digital-signatures",
              "durationText": "5m 9s",
              "durationSeconds": 309,
              "description": "Asymmetric signature concepts for token authenticity.",
              "categoryTag": "Token Signing & Cryptography",
              "references": [
                {
                  "label": "IETF RFC 7515: JSON Web Signature (JWS)",
                  "url": "https://www.rfc-editor.org/rfc/rfc7515",
                  "description": "JWS cryptographic signature algorithms (`HS256`, `RS256`, `ES256`)."
                }
              ]
            },
            {
              "id": "UzExOkMwMDI6VjA1OkxKQ0NBRFNJSg",
              "rawKey": "S11:C2:V5",
              "title": "Learn Java Cryptography: Creating a digital signature in Java",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/creating-a-digital-signature-in-java",
              "durationText": "7m 9s",
              "durationSeconds": 429,
              "description": "Code walkthrough signing payloads with private keys and validating with public keys.",
              "categoryTag": "Token Signing & Cryptography",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.security.Signature`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Signature.html",
                  "description": "Digital signature algorithm engine for signing and verifying byte sequences."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1290
        },
        {
          "id": "11-003",
          "number": 3,
          "title": "OAuth 2.0 and OpenID Connect",
          "localChapterFile": "003-oauth2-and-oidc.md",
          "keyConcepts": [
            "OAuth 2.0 Roles (Resource Owner",
            "Client",
            "Authorization Server",
            "Resource Server)",
            "OpenID Connect (OIDC)",
            "Authorization Code Grant + PKCE (RFC 7636)",
            "Client Credentials Grant",
            "JWKS",
            "Spring `oauth2ResourceServer()`."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDM6VjAxOldTT0FPQ1VPMjA",
              "rawKey": "S11:C3:V1",
              "title": "Web Security: OAuth and OpenID Connect: Using OAuth 2.0 and OpenID Connect",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/using-oauth-2-0-and-openid-connect",
              "durationText": "41s",
              "durationSeconds": 41,
              "description": "Overview of authorization and federated identity.",
              "categoryTag": "OAuth 2.0 Framework & Protocols",
              "references": [
                {
                  "label": "IETF RFC 6749: The OAuth 2.0 Authorization Framework",
                  "url": "https://www.rfc-editor.org/rfc/rfc6749",
                  "description": "Authoritative protocol specification for delegated authorization."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjAyOldTT0FPQ0RPMjA",
              "rawKey": "S11:C3:V2",
              "title": "Web Security: OAuth and OpenID Connect: Describing OAuth 2.0",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/describing-oauth-2-0",
              "durationText": "2m 44s",
              "durationSeconds": 164,
              "description": "The four OAuth 2.0 roles and delegation principles.",
              "categoryTag": "OAuth 2.0 Framework & Protocols",
              "references": [
                {
                  "label": "IETF RFC 6749: Section 1.1 Roles",
                  "url": "https://www.rfc-editor.org/rfc/rfc6749#section-1.1",
                  "description": "Resource owner, resource server, client, and authorization server definitions."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjAzOldTT0FPQ0VPMjA",
              "rawKey": "S11:C3:V3",
              "title": "Web Security: OAuth and OpenID Connect: Extending OAuth 2.0 with OpenID Connect",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/extending-oauth-2-0-with-openid-connect",
              "durationText": "2m 22s",
              "durationSeconds": 142,
              "description": "How OIDC layers identity authentication (`id_token`) on top of OAuth authorization.",
              "categoryTag": "OAuth 2.0 Framework & Protocols",
              "references": [
                {
                  "label": "OpenID Connect Core 1.0 Specification",
                  "url": "https://openid.net/specs/openid-connect-core-1_0.html",
                  "description": "Authentication layer built on OAuth 2.0 and `ID Token` format."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjA0OldTT0FPQ08yMEY",
              "rawKey": "S11:C3:V4",
              "title": "Web Security: OAuth and OpenID Connect: OAuth 2.0 fundamentals",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-2-0-fundamentals",
              "durationText": "3m 2s",
              "durationSeconds": 182,
              "description": "Protocol dance and security guarantees.",
              "categoryTag": "OAuth 2.0 Framework & Protocols",
              "references": [
                {
                  "label": "IETF RFC 6749: Section 1.2 Protocol Flow",
                  "url": "https://www.rfc-editor.org/rfc/rfc6749#section-1.2",
                  "description": "Abstract authorization and token grant flow."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjA1OldTT0FPQ1RUT0U",
              "rawKey": "S11:C3:V5",
              "title": "Web Security: OAuth and OpenID Connect: Touring the OAuth endpoints",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/touring-the-oauth-endpoints",
              "durationText": "2m 39s",
              "durationSeconds": 159,
              "description": "`/authorize`, `/token`, `/userinfo`, and `/.well-known/openid-configuration`.",
              "categoryTag": "OAuth 2.0 Framework & Protocols",
              "references": [
                {
                  "label": "IETF RFC 8414: OAuth 2.0 Authorization Server Metadata",
                  "url": "https://www.rfc-editor.org/rfc/rfc8414",
                  "description": "Well-known configuration endpoint (`.well-known/oauth-authorization-server`)."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjA2OldTT0FPQ0RBVU8",
              "rawKey": "S11:C3:V6",
              "title": "Web Security: OAuth and OpenID Connect: Designing and using OAuth scopes",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/designing-and-using-oauth-scopes",
              "durationText": "3m 15s",
              "durationSeconds": 195,
              "description": "Designing fine-grained API scopes (`read`, `write`, `admin`).",
              "categoryTag": "OAuth 2.0 Framework & Protocols",
              "references": [
                {
                  "label": "IETF RFC 6749: Section 3.3 Access Token Scope",
                  "url": "https://www.rfc-editor.org/rfc/rfc6749#section-3.3",
                  "description": "Granular permission scoping syntax."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjA3OldTT0FPQ09BQ0Y",
              "rawKey": "S11:C3:V7",
              "title": "Web Security: OAuth and OpenID Connect: Overview: Authorization Code Flow",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-authorization-code-flow",
              "durationText": "1m 58s",
              "durationSeconds": 118,
              "description": "Step-by-step redirect flow for web applications.",
              "categoryTag": "Authorization Code & PKCE",
              "references": [
                {
                  "label": "IETF RFC 6749: Section 4.1 Authorization Code Grant",
                  "url": "https://www.rfc-editor.org/rfc/rfc6749#section-4.1",
                  "description": "Authorization request, redirection, and token exchange."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjA4OldTT0FPQ0FDQVA",
              "rawKey": "S11:C3:V8",
              "title": "Web Security: OAuth and OpenID Connect: Auth-Code and PKCE overview",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/auth-code-and-pkce-overview",
              "durationText": "2m 25s",
              "durationSeconds": 145,
              "description": "Proof Key for Code Exchange mechanism (`code_challenge` and `code_verifier`).",
              "categoryTag": "Authorization Code & PKCE",
              "references": [
                {
                  "label": "IETF RFC 7636: Proof Key for Code Exchange (PKCE)",
                  "url": "https://www.rfc-editor.org/rfc/rfc7636",
                  "description": "Preventing authorization code interception attacks using code verifier and challenge."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjA5OldTT0FPQ1dTWVU",
              "rawKey": "S11:C3:V9",
              "title": "Web Security: OAuth and OpenID Connect: When should you use PKCE?",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/when-should-you-use-pkce",
              "durationText": "1m 37s",
              "durationSeconds": 97,
              "description": "Protecting mobile and single-page apps against code interception attacks.",
              "categoryTag": "Authorization Code & PKCE",
              "references": [
                {
                  "label": "OAuth 2.0 Security Best Current Practice: Section 2.1 PKCE",
                  "url": "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics#section-2.1",
                  "description": "Mandatory requirement of PKCE for all client types."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjEwOldTT0FPQ09DQ0Y",
              "rawKey": "S11:C3:V10",
              "title": "Web Security: OAuth and OpenID Connect: Overview: Client Credential Flow",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/overview-client-credential-flow",
              "durationText": "2m 54s",
              "durationSeconds": 174,
              "description": "Machine-to-machine authentication without end-user interaction.",
              "categoryTag": "Client Credentials Grant",
              "references": [
                {
                  "label": "IETF RFC 6749: Section 4.4 Client Credentials Grant",
                  "url": "https://www.rfc-editor.org/rfc/rfc6749#section-4.4",
                  "description": "Service-to-service direct token requests using client credentials."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjExOldTT0FPQ0xCQUU",
              "rawKey": "S11:C3:V11",
              "title": "Web Security: OAuth and OpenID Connect: Lab: Build an example (curl)",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/lab-build-an-example-curl",
              "durationText": "3m 14s",
              "durationSeconds": 194,
              "description": "Acquiring and presenting client credentials tokens via CLI.",
              "categoryTag": "Client Credentials Grant",
              "references": [
                {
                  "label": "Spring Security Reference: OAuth2 Client Credentials",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/oauth2/client/authorized-clients.html#oauth2Client-client-credentials-grant",
                  "description": "Configuring `ClientCredentialsOAuth2AuthorizedClientProvider`."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjEyOlM2U1NBT0I",
              "rawKey": "S11:C3:V12",
              "title": "Spring 6: Spring Security: Articles - OAuth basics",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/articles/oauth-basics",
              "durationText": "1m 0s",
              "durationSeconds": 60,
              "description": "Spring's integration with modern identity providers.",
              "categoryTag": "Spring OAuth 2.0 Integration",
              "references": [
                {
                  "label": "Spring Security Reference: OAuth 2.0 Overview",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html",
                  "description": "Architecture of OAuth 2.0 Client and Resource Server in Spring."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjEzOlM2U1NJVE8yMA",
              "rawKey": "S11:C3:V13",
              "title": "Spring 6: Spring Security: Introduction to OAuth 2.0",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/introduction-to-oauth-2",
              "durationText": "5m 44s",
              "durationSeconds": 344,
              "description": "Spring Security OAuth 2 client and resource server configuration.",
              "categoryTag": "Spring OAuth 2.0 Integration",
              "references": [
                {
                  "label": "Spring Security Reference: OAuth 2.0 Client",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/oauth2/client/index.html",
                  "description": "Registering client providers and managing access tokens."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjE0OlM2U1NTQU8yMA",
              "rawKey": "S11:C3:V14",
              "title": "Spring 6: Spring Security: Spring and OAuth 2.0",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/spring-and-oauth-2",
              "durationText": "3m 56s",
              "durationSeconds": 236,
              "description": "Configuring authorization servers and client registrations.",
              "categoryTag": "Spring OAuth 2.0 Integration",
              "references": [
                {
                  "label": "Spring Authorization Server Reference",
                  "url": "https://docs.spring.io/spring-authorization-server/reference/index.html",
                  "description": "Spring's standalone authorization server implementation."
                }
              ]
            },
            {
              "id": "UzExOkMwMDM6VjE1OlM2U1NVR0FBQVM",
              "rawKey": "S11:C3:V15",
              "title": "Spring 6: Spring Security: Using GitHub as an authorization service",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/using-github-as-an-authorization-service",
              "durationText": "5m 32s",
              "durationSeconds": 332,
              "description": "Live implementation of GitHub OAuth 2 social login in Spring Boot.",
              "categoryTag": "Spring OAuth 2.0 Integration",
              "references": [
                {
                  "label": "Spring Security Reference: OAuth 2.0 Login",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/oauth2/login/index.html",
                  "description": "Social login with third-party providers (GitHub, Google, Okta)."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2583
        },
        {
          "id": "11-004",
          "number": 4,
          "title": "Method security, RBAC, and ABAC",
          "localChapterFile": "004-method-security-rbac-abac.md",
          "keyConcepts": [
            "`@EnableMethodSecurity`",
            "`@PreAuthorize`",
            "`@PostAuthorize`",
            "`@Secured`",
            "SpEL Security Expressions",
            "Role-Based Access Control (RBAC)",
            "Attribute-Based Access Control (ABAC)",
            "`PermissionEvaluator`."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDQ6VjAxOlM2U1NBQQ",
              "rawKey": "S11:C4:V1",
              "title": "Spring 6: Spring Security: Applying authorizations",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/applying-authorizations",
              "durationText": "7m 56s",
              "durationSeconds": 476,
              "description": "Role-based authorization and security rules.",
              "categoryTag": "Authorization & Method Security",
              "references": [
                {
                  "label": "Spring Security Reference: Method Security",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html",
                  "description": "`@EnableMethodSecurity`, `@PreAuthorize`, `@PostAuthorize`, and `@PreFilter`."
                }
              ]
            },
            {
              "id": "UzExOkMwMDQ6VjAyOlNGSURTRUw",
              "rawKey": "S11:C4:V2",
              "title": "Spring Framework in Depth: Spring Expression Language",
              "url": "https://www.linkedin.com/learning/spring-framework-in-depth-23924413/spring-expression-language",
              "durationText": "3m 12s",
              "durationSeconds": 192,
              "description": "SpEL expressions used in `@PreAuthorize` methods (`hasRole()`, `hasAuthority()`).",
              "categoryTag": "Authorization & Method Security",
              "references": [
                {
                  "label": "Spring Security Reference: Expression-Based Access Control",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authorization/method-security.html",
                  "description": "Security SpEL expressions (`hasRole`, `hasAuthority`, `hasPermission`)."
                }
              ]
            },
            {
              "id": "UzExOkMwMDQ6VjAzOlM2U1NBRFZMRkE",
              "rawKey": "S11:C4:V3",
              "title": "Spring 6: Spring Security: Active directory vs. LDAP for authentication",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/active-directory-vs-ldap-for-authentication",
              "durationText": "3m 54s",
              "durationSeconds": 234,
              "description": "Enterprise user groups and role mapping.",
              "categoryTag": "Authorization & Method Security",
              "references": [
                {
                  "label": "Spring Security Reference: LDAP Authentication",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/passwords/ldap.html",
                  "description": "Active Directory and OpenLDAP group-to-role mappings."
                }
              ]
            }
          ],
          "totalDurationSeconds": 902
        },
        {
          "id": "11-005",
          "number": 5,
          "title": "Passwords, MFA, and modern authentication",
          "localChapterFile": "005-advanced-auth-passwords-and-mfa.md",
          "keyConcepts": [
            "Password Storage Evolution (Plaintext -> SHA -> Salted Hash -> Adaptive PBKDF2 / BCrypt / Argon2)",
            "`PasswordEncoder`",
            "Multi-Factor Authentication (MFA)",
            "TOTP",
            "WebAuthn."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDU6VjAxOkxKQ1VTSA",
              "rawKey": "S11:C5:V1",
              "title": "Learn Java Cryptography: Understanding secure hashing",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/understanding-secure-hashing",
              "durationText": "4m 6s",
              "durationSeconds": 246,
              "description": "Cryptographic hash functions and preimage resistance.",
              "categoryTag": "Password Hashing Algorithms",
              "references": [
                {
                  "label": "NIST SP 800-132: Recommendation for Password-Based Key Derivation",
                  "url": "https://csrc.nist.gov/publications/detail/sp/800-132/final",
                  "description": "Cryptographic standards for password stretching."
                }
              ]
            },
            {
              "id": "UzExOkMwMDU6VjAyOkxKQ1NQ",
              "rawKey": "S11:C5:V2",
              "title": "Learn Java Cryptography: Securing passwords",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/securing-passwords",
              "durationText": "6m 51s",
              "durationSeconds": 411,
              "description": "Salting, work factors, resistance to rainbow tables and GPU cracking.",
              "categoryTag": "Password Hashing Algorithms",
              "references": [
                {
                  "label": "OWASP Password Storage Cheat Sheet",
                  "url": "https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html",
                  "description": "Recommended work factors for Argon2id, PBKDF2, and BCrypt."
                }
              ]
            },
            {
              "id": "UzExOkMwMDU6VjAzOkxKQ0xCV0o",
              "rawKey": "S11:C5:V3",
              "title": "Learn Java Cryptography: Leveraging Bcrypt with Java",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/leveraging-bcrypt-with-java",
              "durationText": "5m 48s",
              "durationSeconds": 348,
              "description": "BCrypt adaptive hashing in Java.",
              "categoryTag": "Password Hashing Algorithms",
              "references": [
                {
                  "label": "Spring Security Reference: PasswordEncoder Interface",
                  "url": "https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html#authentication-password-storage-dpe",
                  "description": "`BCryptPasswordEncoder` implementation and log rounds configuration."
                }
              ]
            },
            {
              "id": "UzExOkMwMDU6VjA0OlM2U1NMQkZI",
              "rawKey": "S11:C5:V4",
              "title": "Spring 6: Spring Security: Leveraging bcrypt for hashing",
              "url": "https://www.linkedin.com/learning/spring-6-spring-security/leveraging-bcrypt-for-hashing",
              "durationText": "2m 45s",
              "durationSeconds": 165,
              "description": "Integrating `BCryptPasswordEncoder` in Spring Security.",
              "categoryTag": "Password Hashing Algorithms",
              "references": [
                {
                  "label": "Spring Security Reference: Password Storage Upgrade",
                  "url": "https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html",
                  "description": "Automatic hash upgrade upon successful login."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1170
        },
        {
          "id": "11-006",
          "number": 6,
          "title": "Java Cryptography Architecture (JCA) and keystores",
          "localChapterFile": "006-cryptography-and-keystore.md",
          "keyConcepts": [
            "JCA and JCE Providers",
            "`KeyGenerator`",
            "`KeyPairGenerator`",
            "`Cipher` (AES-GCM",
            "RSA)",
            "Java KeyStore (JKS",
            "PKCS12)",
            "`keytool` CLI",
            "`SecureRandom`."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDY6VjAxOkxKQ0NC",
              "rawKey": "S11:C6:V1",
              "title": "Learn Java Cryptography: Cryptography basics",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/cryptography-basics",
              "durationText": "3m 47s",
              "durationSeconds": 227,
              "description": "Cryptography terminology and security principles.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 Security Developer's Guide: Cryptography Overview",
                  "url": "https://docs.oracle.com/en/java/javase/21/security/java-cryptography-architecture-jca-reference-guide.html#GUID-2BCF77E7-2727-4C30-97EC-9F39EC196950",
                  "description": "JCA architecture and security principles."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjAyOkxKQ0pDQUo",
              "rawKey": "S11:C6:V2",
              "title": "Learn Java Cryptography: Java Cryptography Architecture (JCA)",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/java-cryptography-architecture-jca",
              "durationText": "2m 31s",
              "durationSeconds": 151,
              "description": "JCA provider architecture and SPI classes.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 Security Developer's Guide: Provider Architecture",
                  "url": "https://docs.oracle.com/en/java/javase/21/security/java-cryptography-architecture-jca-reference-guide.html#GUID-B457D29E-32A1-4DF5-A6FB-FDCC787F0C73",
                  "description": "Cryptographic service providers (`java.security.Provider`) and SPI abstraction."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjAzOkxKQ0pDRUo",
              "rawKey": "S11:C6:V3",
              "title": "Learn Java Cryptography: Java Cryptography Extensions (JCE)",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/java-cryptography-extensions-jce",
              "durationText": "2m 45s",
              "durationSeconds": 165,
              "description": "Encryption engines and provider jars.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 Security Developer's Guide: Engine Classes",
                  "url": "https://docs.oracle.com/en/java/javase/21/security/java-cryptography-architecture-jca-reference-guide.html#GUID-AC9E4575-B15E-4B07-B45F-F8B4F14704B1",
                  "description": "Cipher, KeyAgreement, Mac, KeyGenerator engine classes."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjA0OkxKQ0JKQw",
              "rawKey": "S11:C6:V4",
              "title": "Learn Java Cryptography: Basic JCA concepts",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/basic-jca-concepts",
              "durationText": "4m 11s",
              "durationSeconds": 251,
              "description": "Factory methods (`getInstance()`) and engine classes.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.security.Security`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/Security.html",
                  "description": "Provider registration and security property configuration."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjA1OkxKQ1VF",
              "rawKey": "S11:C6:V5",
              "title": "Learn Java Cryptography: Understanding encryption",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/understanding-encryption",
              "durationText": "6m 47s",
              "durationSeconds": 407,
              "description": "Ciphers, block modes, and padding.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `javax.crypto.Cipher`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html",
                  "description": "Transformation strings (`algorithm/mode/padding`), e.g., `AES/GCM/NoPadding`."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjA2OkxKQ1NWQUU",
              "rawKey": "S11:C6:V6",
              "title": "Learn Java Cryptography: Symmetric vs. asymmetric encryption",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/symmetric-vs-asymmetric-encryption",
              "durationText": "4m 39s",
              "durationSeconds": 279,
              "description": "Shared secret vs public/private key pairs.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 Security Developer's Guide: Public Key vs Secret Key",
                  "url": "https://docs.oracle.com/en/java/javase/21/security/java-cryptography-architecture-jca-reference-guide.html#GUID-7A19B533-317A-459E-A6B5-D119A56BA157",
                  "description": "Asymmetric key pairs and symmetric secret keys."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjA3OkxKQ0dBU0s",
              "rawKey": "S11:C6:V7",
              "title": "Learn Java Cryptography: Generating a symmetric key",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/generating-a-symmetric-key",
              "durationText": "4m 7s",
              "durationSeconds": 247,
              "description": "`KeyGenerator` for AES keys.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `javax.crypto.KeyGenerator`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/KeyGenerator.html",
                  "description": "Generating symmetric keys (`AES-256`) with `SecureRandom`."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjA4OkxKQ1BTRUlK",
              "rawKey": "S11:C6:V8",
              "title": "Learn Java Cryptography: Performing symmetric encryption in Java",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/performing-symmetric-encryption-in-java",
              "durationText": "7m 51s",
              "durationSeconds": 471,
              "description": "`Cipher.init()` with `SecretKeySpec` and IV parameters.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `javax.crypto.spec.GCMParameterSpec`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/spec/GCMParameterSpec.html",
                  "description": "Authenticated encryption with associated data (AEAD) initialization."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjA5OkxKQ0dBQUtQ",
              "rawKey": "S11:C6:V9",
              "title": "Learn Java Cryptography: Generating an asymmetric key pair",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/generating-an-asymmetric-key-pair",
              "durationText": "4m 41s",
              "durationSeconds": 281,
              "description": "`KeyPairGenerator` for RSA keys.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.security.KeyPairGenerator`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyPairGenerator.html",
                  "description": "RSA / EC key pair generation."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjEwOkxKQ1BBRUlK",
              "rawKey": "S11:C6:V10",
              "title": "Learn Java Cryptography: Performing asymmetric encryption in Java",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/performing-asymmetric-encryption-in-java",
              "durationText": "5m 30s",
              "durationSeconds": 330,
              "description": "Encrypting and decrypting with RSA public and private keys.",
              "categoryTag": "JCA & Symmetric/Asymmetric Encryption",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `javax.crypto.Cipher.init(int, java.security.Key)`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/javax/crypto/Cipher.html#init(int,java.security.Key)",
                  "description": "RSA encryption with `OAEPWithSHA-256AndMGF1Padding`."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjExOkxKQ1VUSw",
              "rawKey": "S11:C6:V11",
              "title": "Learn Java Cryptography: Understanding the keystore",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/understanding-the-keystore",
              "durationText": "3m 25s",
              "durationSeconds": 205,
              "description": "Secure storage for keys and certificates.",
              "categoryTag": "Java KeyStore (JKS/PKCS12)",
              "references": [
                {
                  "label": "Java SE 21 Security Developer's Guide: Key Management",
                  "url": "https://docs.oracle.com/en/java/javase/21/security/java-cryptography-architecture-jca-reference-guide.html#GUID-E5370C15-8B23-45B6-8C35-23FDC2C25D1D",
                  "description": "PKCS12 standard format and password-protected alias entries."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjEyOkxKQ0JBSks",
              "rawKey": "S11:C6:V12",
              "title": "Learn Java Cryptography: Building a Java keystore",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/building-a-java-keystore",
              "durationText": "7m 39s",
              "durationSeconds": 459,
              "description": "`KeyStore.load()` and storing private keys with certificate chains.",
              "categoryTag": "Java KeyStore (JKS/PKCS12)",
              "references": [
                {
                  "label": "Java SE 21 API Docs: `java.security.KeyStore`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/api/java.base/java/security/KeyStore.html",
                  "description": "Programmatic entry lookup, private key extraction, and certificate retrieval."
                },
                {
                  "label": "Java SE 21 Tools Guide: `keytool`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/keytool.html",
                  "description": "Command-line interface for keystore and certificate management."
                }
              ]
            },
            {
              "id": "UzExOkMwMDY6VjEzOkxKQ0FOQUJD",
              "rawKey": "S11:C6:V13",
              "title": "Learn Java Cryptography: A note about Bouncy Castle",
              "url": "https://www.linkedin.com/learning/learn-java-cryptography/a-note-about-bouncy-castle",
              "durationText": "2m 41s",
              "durationSeconds": 161,
              "description": "Adding third-party cryptographic security providers.",
              "categoryTag": "Java KeyStore (JKS/PKCS12)",
              "references": [
                {
                  "label": "Bouncy Castle Official Documentation",
                  "url": "https://www.bouncycastle.org/documentation.html",
                  "description": "Lightweight cryptography APIs for Java."
                }
              ]
            }
          ],
          "totalDurationSeconds": 3634
        },
        {
          "id": "11-007",
          "number": 7,
          "title": "Secrets management, CORS, CSRF, and Vault",
          "localChapterFile": "007-secrets-cors-and-vault.md",
          "keyConcepts": [
            "CORS Configuration",
            "CSRF Protection (`CsrfTokenRepository`)",
            "Secrets Hygiene",
            "HashiCorp Vault",
            "Spring Cloud Vault."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDc6VjAxOkNHVFNNQ0k",
              "rawKey": "S11:C7:V1",
              "title": "Complete Guide to Spring MVC: CORS introduction",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/cors-introduction",
              "durationText": "6m 11s",
              "durationSeconds": 371,
              "description": "Same-Origin Policy and preflight requests.",
              "categoryTag": "CORS & CSRF Defenses",
              "references": [
                {
                  "label": "W3C Cross-Origin Resource Sharing Specification",
                  "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS",
                  "description": "Preflight OPTIONS requests and origin headers."
                }
              ]
            },
            {
              "id": "UzExOkMwMDc6VjAyOkNHVFNNQ0M",
              "rawKey": "S11:C7:V2",
              "title": "Complete Guide to Spring MVC: CORS configuration",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/cors-configuration",
              "durationText": "4m 19s",
              "durationSeconds": 259,
              "description": "`@CrossOrigin` and `CorsRegistry` mapping.",
              "categoryTag": "CORS & CSRF Defenses",
              "references": [
                {
                  "label": "Spring Framework Reference: CORS Support",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc-cors.html",
                  "description": "`@CrossOrigin` controller annotations and `CorsRegistry` mapping."
                }
              ]
            },
            {
              "id": "UzExOkMwMDc6VjAzOkNHVFNNQ0Y",
              "rawKey": "S11:C7:V3",
              "title": "Complete Guide to Spring MVC: CORS filter",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/cors-filter",
              "durationText": "4m 59s",
              "durationSeconds": 299,
              "description": "Global `CorsFilter` configuration in the security chain.",
              "categoryTag": "CORS & CSRF Defenses",
              "references": [
                {
                  "label": "Spring Security Reference: CORS Integration",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/integrations/cors.html",
                  "description": "`http.cors()` configuration and `CorsConfigurationSource` bean."
                }
              ]
            },
            {
              "id": "UzExOkMwMDc6VjA0OkNHVFNNQ0JQQVM",
              "rawKey": "S11:C7:V4",
              "title": "Complete Guide to Spring MVC: CORS best practices and security",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/cors-best-practices-and-security",
              "durationText": "5m 13s",
              "durationSeconds": 313,
              "description": "Avoiding wildcards with credentials and preventing data leakage.",
              "categoryTag": "CORS & CSRF Defenses",
              "references": [
                {
                  "label": "OWASP CORS Cheat Sheet",
                  "url": "https://fetch.spec.whatwg.org/#http-cors-protocol",
                  "description": "Secure origin whitelist and credentials isolation."
                }
              ]
            },
            {
              "id": "UzExOkMwMDc6VjA1OkNHVFNNQ1A",
              "rawKey": "S11:C7:V5",
              "title": "Complete Guide to Spring MVC: CSRF protection",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/csrf-protection",
              "durationText": "4m 50s",
              "durationSeconds": 290,
              "description": "Synchronizer token pattern, state-changing HTTP methods, and cookie repositories.",
              "categoryTag": "CORS & CSRF Defenses",
              "references": [
                {
                  "label": "Spring Security Reference: Cross Site Request Forgery (CSRF)",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/exploits/csrf.html",
                  "description": "Synchronizer token pattern, `CsrfTokenRequestAttributeHandler`, and `CookieCsrfTokenRepository`."
                }
              ]
            },
            {
              "id": "UzExOkMwMDc6VjA2OlNDRUM",
              "rawKey": "S11:C7:V6",
              "title": "Spring Cloud: External configuration",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/external-configuration",
              "durationText": "5m 57s",
              "durationSeconds": 357,
              "description": "Externalizing sensitive credentials away from source control.",
              "categoryTag": "Secrets Management",
              "references": [
                {
                  "label": "Spring Cloud Vault Documentation",
                  "url": "https://docs.spring.io/spring-cloud-vault/reference/",
                  "description": "Managing secrets dynamically with HashiCorp Vault."
                },
                {
                  "label": "HashiCorp Vault Documentation",
                  "url": "https://developer.hashicorp.com/vault/docs",
                  "description": "Centralized secrets engine, token renewal, and dynamic credentials."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1889
        },
        {
          "id": "11-008",
          "number": 8,
          "title": "Securing springdoc and API Gateway authentication",
          "localChapterFile": "008-springdoc-and-api-gateway-auth.md",
          "keyConcepts": [
            "Securing OpenAPI endpoints (`/v3/api-docs`",
            "`/swagger-ui/**`)",
            "Spring Cloud Gateway Authentication Filter",
            "JWT Token Propagation",
            "Downstream Header Relay."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDg6VjAxOkNTQk1VQ0ZBQUc",
              "rawKey": "S11:C8:V1",
              "title": "Creating Spring Boot Microservices: Use cases for an API gateway microservice",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-an-api-gateway-microservice",
              "durationText": "3m 49s",
              "durationSeconds": 229,
              "description": "Centralized entry point, routing, and authentication termination.",
              "categoryTag": "API Gateway Security",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: How It Works",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/how-it-works.html",
                  "description": "GatewayHandlerMapping and GatewayWebfilter chain architecture."
                }
              ]
            },
            {
              "id": "UzExOkMwMDg6VjAyOkNTQk1SVFRKTQ",
              "rawKey": "S11:C8:V2",
              "title": "Creating Spring Boot Microservices: Routing to the JPA microservice",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice",
              "durationText": "6m 47s",
              "durationSeconds": 407,
              "description": "Route definitions and predicate matching.",
              "categoryTag": "API Gateway Security",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: Route Predicates",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/gatewayfilter-factories.html",
                  "description": "Route predicate factories and path routing."
                }
              ]
            },
            {
              "id": "UzExOkMwMDg6VjAzOkNTQk1BU1NUVEc",
              "rawKey": "S11:C8:V3",
              "title": "Creating Spring Boot Microservices: Add Spring Security to the gateway",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway",
              "durationText": "6m 50s",
              "durationSeconds": 410,
              "description": "Securing the gateway perimeter and passing identity downstream.",
              "categoryTag": "API Gateway Security",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: Token Relay Filter",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/gatewayfilter-factories/tokenrelay-factory.html",
                  "description": "Forwarding OAuth2 JWT bearer tokens to downstream microservices."
                }
              ]
            },
            {
              "id": "UzExOkMwMDg6VjA0OlNDQUc",
              "rawKey": "S11:C8:V4",
              "title": "Spring Cloud: API gateways",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/api-gateways",
              "durationText": "3m 37s",
              "durationSeconds": 217,
              "description": "Gateway filter architecture and security mediation.",
              "categoryTag": "API Gateway Security",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: Global Filters",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/global-filters.html",
                  "description": "Pre and post filter execution for security inspection."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1263
        },
        {
          "id": "11-009",
          "number": 9,
          "title": "Security review and residual concepts",
          "localChapterFile": "009-security-review-and-misc.md",
          "keyConcepts": [
            "Security Headers (HSTS",
            "X-Content-Type-Options",
            "CSP)",
            "Session Management & Fixation Protection",
            "OWASP Top 10 Defenses",
            "Security Auditing."
          ],
          "videos": [
            {
              "id": "UzExOkMwMDk6VjAxOkNHVFNNU1JI",
              "rawKey": "S11:C9:V1",
              "title": "Complete Guide to Spring MVC: Security response headers",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/security-response-headers",
              "durationText": "5m 10s",
              "durationSeconds": 310,
              "description": "Injecting headers to mitigate browser-side attacks.",
              "categoryTag": "Security Response Headers & Hardening",
              "references": [
                {
                  "label": "Spring Security Reference: Security HTTP Response Headers",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/exploits/headers.html",
                  "description": "Default headers: `Strict-Transport-Security`, `X-Content-Type-Options: nosniff`, `Content-Security-Policy`."
                }
              ]
            },
            {
              "id": "UzExOkMwMDk6VjAyOkNHVFNNU01T",
              "rawKey": "S11:C9:V2",
              "title": "Complete Guide to Spring MVC: Spring MVC security",
              "url": "https://www.linkedin.com/learning/complete-guide-to-spring-mvc/spring-mvc-security",
              "durationText": "5m 13s",
              "durationSeconds": 313,
              "description": "Defense-in-depth principles for Java web backends.",
              "categoryTag": "Security Response Headers & Hardening",
              "references": [
                {
                  "label": "OWASP Top 10 Security Risks",
                  "url": "https://owasp.org/www-project-top-ten/",
                  "description": "Injection, Broken Authentication, Security Misconfiguration defenses."
                },
                {
                  "label": "Spring Security Reference: Session Fixation Protection",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/authentication/session-management.html#ns-session-fixation",
                  "description": "`changeSessionId` migration on login to prevent fixation."
                }
              ]
            },
            {
              "id": "UzExOkMwMDk6VjAzOldTT0FPQ09SUA",
              "rawKey": "S11:C9:V3",
              "title": "Web Security: OAuth and OpenID Connect: OAuth recommended practices",
              "url": "https://www.linkedin.com/learning/web-security-oauth-and-openid-connect-23016424/oauth-recommended-practices",
              "durationText": "3m 31s",
              "durationSeconds": 211,
              "description": "Modern security best practices, token expiration, and audit logging.",
              "categoryTag": "Security Response Headers & Hardening",
              "references": [
                {
                  "label": "OAuth 2.0 Security Best Current Practice (BCP)",
                  "url": "https://datatracker.ietf.org/doc/html/draft-ietf-oauth-security-topics",
                  "description": "Threat model, token replay defenses, and audience restriction."
                }
              ]
            }
          ],
          "totalDurationSeconds": 834
        }
      ],
      "totalVideos": 64,
      "totalDurationSeconds": 16102
    },
    {
      "id": "section-12",
      "slug": "12-spring-boot-deep-dive",
      "number": 12,
      "title": "Spring Boot 3 Deep Dive & Observability",
      "part": 2,
      "partTitle": "Part 2: Spring Fundamentals",
      "filePath": "part-2-spring-fundamentals\\12-spring-boot-deep-dive.md",
      "recommendedCourses": [
        {
          "title": "Spring Boot 3 Essential Training",
          "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training",
          "author": "Frank P Moley III",
          "duration": "3h 15m",
          "scope": ""
        },
        {
          "title": "Advanced Spring: Spring Boot Actuator",
          "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator",
          "author": "Frank P Moley III",
          "duration": "1h 40m",
          "scope": ""
        },
        {
          "title": "Running Spring Boot in Production",
          "url": "https://www.linkedin.com/learning/running-spring-boot-in-production",
          "author": "Frank P Moley III",
          "duration": "4h 12m",
          "scope": ""
        },
        {
          "title": "Spring Cloud: Cloud-Native Architecture and Distributed Systems",
          "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems",
          "author": "Frank P Moley III",
          "duration": "1h 45m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "12-001",
          "number": 1,
          "title": "SpringApplication lifecycle, runners, failure analysers",
          "localChapterFile": "001-spring-application-lifecycle.md",
          "keyConcepts": [
            "`SpringApplication.run()` Phases",
            "Spring Boot Lifecycle Events",
            "`ApplicationRunner`",
            "`CommandLineRunner`",
            "`FailureAnalyzer`",
            "Startup Diagnostics."
          ],
          "videos": [
            {
              "id": "UzEyOkMwMDE6VjAxOlNCM0VUU0lT",
              "rawKey": "S12:C1:V1",
              "title": "Spring Boot 3 Essential Training: Spring into Spring",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/spring-into-spring",
              "durationText": "42s",
              "durationSeconds": 42,
              "description": "Bootstrapping philosophy of Spring Boot.",
              "categoryTag": "Application Bootstrapping & Lifecycle Execution",
              "references": [
                {
                  "label": "Spring Boot Reference: SpringApplication",
                  "url": "https://docs.spring.io/spring-boot/reference/features/spring-application.html",
                  "description": "Application entry point and bootstrapping lifecycle phases."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDE6VjAyOlNCM0VUQ0FQ",
              "rawKey": "S12:C1:V2",
              "title": "Spring Boot 3 Essential Training: Creating a project",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/creating-a-project",
              "durationText": "3m 18s",
              "durationSeconds": 198,
              "description": "Project initialization and entry point generation.",
              "categoryTag": "Application Bootstrapping & Lifecycle Execution",
              "references": [
                {
                  "label": "Spring Initializr Reference",
                  "url": "https://start.spring.io/",
                  "description": "Generating production-ready Spring Boot project skeletons."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDE6VjAzOlNCM0VUVVRQ",
              "rawKey": "S12:C1:V3",
              "title": "Spring Boot 3 Essential Training: Understanding the project",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/understanding-the-project",
              "durationText": "4m 30s",
              "durationSeconds": 270,
              "description": "Main method anatomy and the `SpringApplication.run` call.",
              "categoryTag": "Application Bootstrapping & Lifecycle Execution",
              "references": [
                {
                  "label": "Spring Boot Reference: Application Events and Listeners",
                  "url": "https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.application-events-and-listeners",
                  "description": "`ApplicationStartingEvent`, `ApplicationEnvironmentPreparedEvent`, `ApplicationReadyEvent`."
                },
                {
                  "label": "Spring Boot Reference: Failure Analyzers",
                  "url": "https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.failure-analyzers",
                  "description": "Formatting startup failures and diagnosing port collisions or bean missing exceptions."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDE6VjA0OlNCM0VUQ0k",
              "rawKey": "S12:C1:V4",
              "title": "Spring Boot 3 Essential Training: CommandLineRunner interface",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/commandlinerunner-interface",
              "durationText": "4m 3s",
              "durationSeconds": 243,
              "description": "Post-startup execution with `CommandLineRunner` and `ApplicationRunner`.",
              "categoryTag": "Runners & Startup Logic",
              "references": [
                {
                  "label": "Spring Boot Reference: ApplicationRunner and CommandLineRunner",
                  "url": "https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.command-line-runner",
                  "description": "Running tasks once `SpringApplication.run()` has completed."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDE6VjA1OlNCM0VUQkFDTEE",
              "rawKey": "S12:C1:V5",
              "title": "Spring Boot 3 Essential Training: Building a command-line application",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/building-a-command-line-application",
              "durationText": "3m 45s",
              "durationSeconds": 225,
              "description": "Executing operational logic immediately following context refresh.",
              "categoryTag": "Runners & Startup Logic",
              "references": [
                {
                  "label": "Spring Boot API: `CommandLineRunner`",
                  "url": "https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/CommandLineRunner.html",
                  "description": "Functional interface contract with `String... args`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDE6VjA2OlNCM0VUQ0JBQw",
              "rawKey": "S12:C1:V6",
              "title": "Spring Boot 3 Essential Training: Challenge: Build a CommandLineRunner",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/challenge-build-a-commandlinerunner",
              "durationText": "1m 26s",
              "durationSeconds": 86,
              "description": "Practical runner challenge.",
              "categoryTag": "Runners & Startup Logic",
              "references": [
                {
                  "label": "Spring Boot API: `ApplicationRunner`",
                  "url": "https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/ApplicationRunner.html",
                  "description": "`ApplicationArguments` parameter parsing."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDE6VjA3OlNCM0VUU0JBQw",
              "rawKey": "S12:C1:V7",
              "title": "Spring Boot 3 Essential Training: Solution: Build a CommandLineRunner",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/solution-build-a-commandlinerunner",
              "durationText": "2m 42s",
              "durationSeconds": 162,
              "description": "Solution walkthrough.",
              "categoryTag": "Runners & Startup Logic",
              "references": [
                {
                  "label": "Spring Boot Reference: Ordering Runners with @Order",
                  "url": "https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.command-line-runner",
                  "description": "Specifying execution sequence of multiple runner beans."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1226
        },
        {
          "id": "12-002",
          "number": 2,
          "title": "Auto-configuration and custom starters",
          "localChapterFile": "002-autoconfig-and-starters.md",
          "keyConcepts": [
            "`@EnableAutoConfiguration`",
            "`AutoConfigurationImportSelector`",
            "Conditional Annotations (`@ConditionalOnClass`",
            "`@ConditionalOnMissingBean`)",
            "`AutoConfiguration.imports`",
            "Custom Starter Architecture."
          ],
          "videos": [
            {
              "id": "UzEyOkMwMDI6VjAxOlNCM0VUVUFD",
              "rawKey": "S12:C2:V1",
              "title": "Spring Boot 3 Essential Training: Understanding auto-configuration",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/understanding-auto-configuration",
              "durationText": "4m 44s",
              "durationSeconds": 284,
              "description": "How Spring Boot discovers classpath dependencies and applies conditional beans.",
              "categoryTag": "Auto-Configuration Engine",
              "references": [
                {
                  "label": "Spring Boot Reference: Auto-configuration",
                  "url": "https://docs.spring.io/spring-boot/reference/using/auto-configuration.html",
                  "description": "`@EnableAutoConfiguration` mechanism and evaluation order."
                },
                {
                  "label": "Spring Boot Reference: Condition Annotations",
                  "url": "https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html#features.developing-auto-configuration.condition-annotations",
                  "description": "Class, Bean, Property, Resource, and Web application conditions."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDI6VjAyOkxTNldTQjNFQVM",
              "rawKey": "S12:C2:V2",
              "title": "Learning Spring 6 with Spring Boot 3: Examine a Spring Boot skeleton project",
              "url": "https://www.linkedin.com/learning/learning-spring-6-with-spring-boot-3/examine-a-spring-boot-skeleton-project",
              "durationText": "4m 48s",
              "durationSeconds": 288,
              "description": "Auto-configuration triggers and starter dependencies.",
              "categoryTag": "Auto-Configuration Engine",
              "references": [
                {
                  "label": "Spring Boot Reference: Starters",
                  "url": "https://docs.spring.io/spring-boot/reference/using/build-systems.html#using.build-systems.starters",
                  "description": "Starter dependency descriptors and transitively provided dependencies."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDI6VjAzOlNCM0VUQlNCUw",
              "rawKey": "S12:C2:V3",
              "title": "Spring Boot 3 Essential Training: Building Spring Boot starters",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/building-spring-boot-starters",
              "durationText": "5m 19s",
              "durationSeconds": 319,
              "description": "Creating custom reusable starter modules with autoconfiguration imports.",
              "categoryTag": "Authoring Custom Starters",
              "references": [
                {
                  "label": "Spring Boot Reference: Creating Your Own Starter",
                  "url": "https://docs.spring.io/spring-boot/reference/features/developing-auto-configuration.html#features.developing-auto-configuration.custom-starter",
                  "description": "Naming conventions, `AutoConfiguration.imports` under `META-INF/spring/`, and autoconfigure module separation."
                }
              ]
            }
          ],
          "totalDurationSeconds": 891
        },
        {
          "id": "12-003",
          "number": 3,
          "title": "Externalised configuration: properties, YAML, profiles",
          "localChapterFile": "003-externalised-configuration.md",
          "keyConcepts": [
            "`@ConfigurationProperties`",
            "Property Validation",
            "Priority Order Hierarchy",
            "Multi-Document YAML",
            "Profile-Specific Files (`application-{profile}.properties`)",
            "ConfigData API",
            "Spring Cloud Config."
          ],
          "videos": [
            {
              "id": "UzEyOkMwMDM6VjAxOlNCM0VUQ0lTQg",
              "rawKey": "S12:C3:V1",
              "title": "Spring Boot 3 Essential Training: Configuration in Spring Boot",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/configuration-in-spring-boot",
              "durationText": "5m 43s",
              "durationSeconds": 343,
              "description": "Loading external properties, YAML hierarchy, and relaxed binding.",
              "categoryTag": "Configuration Management & Profiles",
              "references": [
                {
                  "label": "Spring Boot Reference: Externalized Configuration",
                  "url": "https://docs.spring.io/spring-boot/reference/features/external-config.html",
                  "description": "Precedence hierarchy (command line args, Java system properties, OS env vars, application properties)."
                },
                {
                  "label": "Spring Boot Reference: Type-safe Configuration Properties",
                  "url": "https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.typesafe-configuration-properties",
                  "description": "`@ConfigurationProperties`, relaxed binding, and validation."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDM6VjAyOlNCM0VUU1BJQg",
              "rawKey": "S12:C3:V2",
              "title": "Spring Boot 3 Essential Training: Spring Profiles in Boot",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/spring-profiles-in-boot",
              "durationText": "7m 30s",
              "durationSeconds": 450,
              "description": "Profile activation (`dev`, `staging`, `prod`) and profile-specific property files.",
              "categoryTag": "Configuration Management & Profiles",
              "references": [
                {
                  "label": "Spring Boot Reference: Profiles",
                  "url": "https://docs.spring.io/spring-boot/reference/features/profiles.html",
                  "description": "`spring.profiles.active`, profile groups, and profile-specific files."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDM6VjAzOlJTQklQV1VFUEk",
              "rawKey": "S12:C3:V3",
              "title": "Running Spring Boot in Production: Why use environmental profiles in your architecture?",
              "url": "https://www.linkedin.com/learning/running-spring-boot-in-production/why-use-environmental-profiles-in-your-architecture",
              "durationText": "3m 26s",
              "durationSeconds": 206,
              "description": "Architecting environments with 12-factor configuration principles.",
              "categoryTag": "Configuration Management & Profiles",
              "references": [
                {
                  "label": "The Twelve-Factor App: Config",
                  "url": "https://12factor.net/config",
                  "description": "Strict separation of config from code across development, staging, and production."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDM6VjA0OlJTQklQRVBGV1M",
              "rawKey": "S12:C3:V4",
              "title": "Running Spring Boot in Production: Enhance property files with Spring Profiles",
              "url": "https://www.linkedin.com/learning/running-spring-boot-in-production/enhance-property-files-with-spring-profiles",
              "durationText": "10m 8s",
              "durationSeconds": 608,
              "description": "Advanced profile layering and variable substitution.",
              "categoryTag": "Configuration Management & Profiles",
              "references": [
                {
                  "label": "Spring Boot Reference: Multi-document Files",
                  "url": "https://docs.spring.io/spring-boot/reference/features/external-config.html#features.external-config.files.multi-document",
                  "description": "YAML and Properties multi-document document separators (`#---`) and `spring.config.activate.on-profile`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDM6VjA1OlJTQklQRVNQV0I",
              "rawKey": "S12:C3:V5",
              "title": "Running Spring Boot in Production: Enhancing Spring Profiles with beans",
              "url": "https://www.linkedin.com/learning/running-spring-boot-in-production/enhancing-spring-profiles-with-beans",
              "durationText": "7m 19s",
              "durationSeconds": 439,
              "description": "Bean registration conditioned on active profiles.",
              "categoryTag": "Configuration Management & Profiles",
              "references": [
                {
                  "label": "Spring Boot Reference: Profile-specific Configuration",
                  "url": "https://docs.spring.io/spring-boot/reference/features/profiles.html#features.profiles.profile-specific-configuration",
                  "description": "Conditional bean loading using `@Profile`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDM6VjA2OlNDRUM",
              "rawKey": "S12:C3:V6",
              "title": "Spring Cloud: External configuration",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/external-configuration",
              "durationText": "5m 57s",
              "durationSeconds": 357,
              "description": "Centralized configuration repository.",
              "categoryTag": "Distributed Configuration Servers",
              "references": [
                {
                  "label": "Spring Cloud Config Reference: Overview",
                  "url": "https://docs.spring.io/spring-cloud-config/reference/",
                  "description": "Centralized configuration management across microservices."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDM6VjA3OlNDU1VDUw",
              "rawKey": "S12:C3:V7",
              "title": "Spring Cloud: Setting up config server",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/setting-up-config-server",
              "durationText": "3m 46s",
              "durationSeconds": 226,
              "description": "Hosting a dedicated Spring Cloud Config Server.",
              "categoryTag": "Distributed Configuration Servers",
              "references": [
                {
                  "label": "Spring Cloud Config Server Reference",
                  "url": "https://docs.spring.io/spring-cloud-config/reference/server.html",
                  "description": "`@EnableConfigServer` and Git/Vault/JDBC backends."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDM6VjA4OlNDQ0NT",
              "rawKey": "S12:C3:V8",
              "title": "Spring Cloud: Consuming config server",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/consuming-config-server",
              "durationText": "4m 1s",
              "durationSeconds": 241,
              "description": "Bootstrapping client apps with remote configuration.",
              "categoryTag": "Distributed Configuration Servers",
              "references": [
                {
                  "label": "Spring Cloud Config Client Reference",
                  "url": "https://docs.spring.io/spring-cloud-config/reference/client.html",
                  "description": "Importing config server properties with `spring.config.import=configserver:`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2870
        },
        {
          "id": "12-004",
          "number": 4,
          "title": "Actuator, Micrometer, Prometheus, Grafana, OpenTelemetry",
          "localChapterFile": "004-actuator-and-observability.md",
          "keyConcepts": [
            "Spring Boot Actuator Endpoints (`/health`",
            "`/info`",
            "`/metrics`)",
            "Custom `@Endpoint`",
            "Custom `HealthIndicator`",
            "Micrometer Dimensioned Metrics",
            "Prometheus Scraping",
            "Grafana Dashboards",
            "Distributed Tracing."
          ],
          "videos": [
            {
              "id": "UzEyOkMwMDQ6VjAxOkFTU0JBSVRTQkE",
              "rawKey": "S12:C4:V1",
              "title": "Advanced Spring: Spring Boot Actuator: Introduction to Spring Boot Actuator",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/introduction-to-spring-boot-actuator",
              "durationText": "3m 10s",
              "durationSeconds": 190,
              "description": "Observability role of Actuator in production environments.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Overview",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/index.html",
                  "description": "Production-ready features for monitoring and managing applications."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjAyOkFTU0JBQUVBRA",
              "rawKey": "S12:C4:V2",
              "title": "Advanced Spring: Spring Boot Actuator: Actuator endpoints and documentation",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/actuator-endpoints-and-documentation",
              "durationText": "2m 12s",
              "durationSeconds": 132,
              "description": "Overview of standard endpoints.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Endpoints",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html",
                  "description": "Built-in endpoints (`health`, `info`, `metrics`, `beans`, `env`, `loggers`, `mappings`)."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjAzOkFTU0JBRUFFRQ",
              "rawKey": "S12:C4:V3",
              "title": "Advanced Spring: Spring Boot Actuator: Exposing and enabling endpoints",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/exposing-and-enabling-endpoints",
              "durationText": "5m 25s",
              "durationSeconds": 325,
              "description": "`management.endpoints.web.exposure.include` security controls.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Exposing Endpoints",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.exposing",
                  "description": "Controlling HTTP and JMX endpoint exposure."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjA0OkFTU0JBU0RBQ0g",
              "rawKey": "S12:C4:V4",
              "title": "Advanced Spring: Spring Boot Actuator: Show details and create health endpoint groups",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-details-and-create-health-endpoint-groups",
              "durationText": "4m 4s",
              "durationSeconds": 244,
              "description": "Health detail grouping for internal vs external callers.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Health Groups",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.health.groups",
                  "description": "Splitting health indicators into custom group endpoints."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjA1OkFTU0JBU0FJV1Q",
              "rawKey": "S12:C4:V5",
              "title": "Advanced Spring: Spring Boot Actuator: Show application information with the info endpoint",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/show-application-information-with-the-info-endpoint",
              "durationText": "4m 10s",
              "durationSeconds": 250,
              "description": "Git commit and build information via `/info`.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Application Information",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.info",
                  "description": "`git.properties`, `build-info.properties`, and custom `InfoContributor`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjA2OkFTU0JBT1RBQlA",
              "rawKey": "S12:C4:V6",
              "title": "Advanced Spring: Spring Boot Actuator: Overriding the Actuator base path",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/overriding-the-actuator-base-path",
              "durationText": "4m 36s",
              "durationSeconds": 276,
              "description": "Customizing the management port and base path.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Customizing the Management Server Port",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/monitoring.html#actuator.monitoring.customizing-management-server-port",
                  "description": "`management.server.port` and `management.endpoints.web.base-path`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjA3OkFTU0JBSVRISUk",
              "rawKey": "S12:C4:V7",
              "title": "Advanced Spring: Spring Boot Actuator: Implementing the Health Indicator interface",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/implementing-the-health-indicator-interface",
              "durationText": "6m 12s",
              "durationSeconds": 372,
              "description": "Authoring custom `HealthIndicator` beans with detailed status maps.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Custom HealthIndicators",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.health.writing-custom-health-indicators",
                  "description": "Implementing `HealthIndicator` or `ReactiveHealthIndicator`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjA4OkFTU0JBQ0FDQUU",
              "rawKey": "S12:C4:V8",
              "title": "Advanced Spring: Spring Boot Actuator: Creating a custom Actuator endpoint",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-a-custom-actuator-endpoint",
              "durationText": "4m 21s",
              "durationSeconds": 261,
              "description": "`@Endpoint`, `@ReadOperation`, `@WriteOperation` custom endpoints.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Implementing Custom Endpoints",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.implementing-custom",
                  "description": "Writing `@Endpoint`, `@ReadOperation`, `@WriteOperation`, and `@DeleteOperation`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjA5OkFTU0JBSFRTQUU",
              "rawKey": "S12:C4:V9",
              "title": "Advanced Spring: Spring Boot Actuator: How to secure Actuator endpoints with Spring Security",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/how-to-secure-actuator-endpoints-with-spring-security",
              "durationText": "7m 4s",
              "durationSeconds": 424,
              "description": "Restricting sensitive actuator endpoints to admin roles.",
              "categoryTag": "Actuator Endpoints & Customization",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Securing HTTP Endpoints",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.security",
                  "description": "Integrating `EndpointRequest.toAnyEndpoint()` with Spring Security."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjEwOkFTU0JBU0JBTUE",
              "rawKey": "S12:C4:V10",
              "title": "Advanced Spring: Spring Boot Actuator: Spring Boot Actuator metrics and Prometheus",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/spring-boot-actuator-metrics-and-prometheus",
              "durationText": "1m 43s",
              "durationSeconds": 103,
              "description": "Dimensional metrics philosophy and time-series export.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Micrometer Documentation: Concepts",
                  "url": "https://docs.micrometer.io/micrometer/reference/concepts.html",
                  "description": "Dimensional metrics instrumenting (meters, tags, registries)."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjExOkFTU0JBTVBS",
              "rawKey": "S12:C4:V11",
              "title": "Advanced Spring: Spring Boot Actuator: Micrometer Prometheus registry",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/micrometer-prometheus-registry",
              "durationText": "2m 14s",
              "durationSeconds": 134,
              "description": "Adding `micrometer-registry-prometheus` and exposing `/actuator/prometheus`.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Prometheus Export",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/metrics.html#actuator.metrics.export.prometheus",
                  "description": "Exposing Prometheus scrape endpoints."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjEyOkFTU0JBUEM",
              "rawKey": "S12:C4:V12",
              "title": "Advanced Spring: Spring Boot Actuator: Prometheus configuration",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/prometheus-configuration",
              "durationText": "1m 56s",
              "durationSeconds": 116,
              "description": "Configuring scraping targets and intervals.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Prometheus Documentation: Configuration",
                  "url": "https://prometheus.io/docs/prometheus/latest/configuration/configuration/",
                  "description": "`scrape_configs` and targets setup."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjEzOkFTU0JBSUFSQVA",
              "rawKey": "S12:C4:V13",
              "title": "Advanced Spring: Spring Boot Actuator: Installing and running a Prometheus Docker image",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-prometheus-docker-image",
              "durationText": "2m 50s",
              "durationSeconds": 170,
              "description": "Running Prometheus in a local container.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Prometheus Documentation: Installation via Docker",
                  "url": "https://prometheus.io/docs/prometheus/latest/installation/",
                  "description": "Running Prometheus container with mapped volume."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjE0OkFTU0JBVFRQVUY",
              "rawKey": "S12:C4:V14",
              "title": "Advanced Spring: Spring Boot Actuator: Take the Prometheus UI for a spin",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/take-the-prometheus-ui-for-a-spin",
              "durationText": "2m 33s",
              "durationSeconds": 153,
              "description": "Querying metrics with PromQL expressions.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Prometheus Documentation: Querying Basics (PromQL)",
                  "url": "https://prometheus.io/docs/prometheus/latest/querying/basics/",
                  "description": "Instant vectors, range vectors, and rate functions."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjE1OkFTU0JBQUNN",
              "rawKey": "S12:C4:V15",
              "title": "Advanced Spring: Spring Boot Actuator: Adding custom metrics",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/adding-custom-metrics",
              "durationText": "4m 22s",
              "durationSeconds": 262,
              "description": "Instrumenting business code with Micrometer `MeterRegistry` (Counters, Timers, Gauges).",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Spring Boot Actuator Reference: Registering Custom Metrics",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/metrics.html#actuator.metrics.registering-custom",
                  "description": "Injecting `MeterRegistry` and creating `Counter`, `Timer`, and `Gauge`."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjE2OkFTU0JBVkNNRlQ",
              "rawKey": "S12:C4:V16",
              "title": "Advanced Spring: Spring Boot Actuator: Viewing custom metrics from the Prometheus UI",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/viewing-custom-metrics-from-the-prometheus-ui",
              "durationText": "3m 35s",
              "durationSeconds": 215,
              "description": "Verifying custom application metrics.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Micrometer Documentation: Prometheus MeterRegistry",
                  "url": "https://docs.micrometer.io/micrometer/reference/implementations/prometheus.html",
                  "description": "Formatting custom metric meters into Prometheus time series."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjE3OkFTU0JBSUFSQUc",
              "rawKey": "S12:C4:V17",
              "title": "Advanced Spring: Spring Boot Actuator: Installing and running a Grafana Docker image",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/installing-and-running-a-grafana-docker-image",
              "durationText": "2m 45s",
              "durationSeconds": 165,
              "description": "Setting up Grafana container.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Grafana Documentation: Run Grafana Docker",
                  "url": "https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/",
                  "description": "Starting Grafana instance."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjE4OkFTU0JBSU1ERlA",
              "rawKey": "S12:C4:V18",
              "title": "Advanced Spring: Spring Boot Actuator: Import metrics data from Prometheus to Grafana",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/import-metrics-data-from-prometheus-to-grafana",
              "durationText": "1m 50s",
              "durationSeconds": 110,
              "description": "Configuring Prometheus datasource in Grafana.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Grafana Documentation: Prometheus Data Source",
                  "url": "https://grafana.com/docs/grafana/latest/datasources/prometheus/",
                  "description": "Connecting Grafana to Prometheus endpoint."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDQ6VjE5OkFTU0JBQ0RXRw",
              "rawKey": "S12:C4:V19",
              "title": "Advanced Spring: Spring Boot Actuator: Creating dashboards with Grafana",
              "url": "https://www.linkedin.com/learning/advanced-spring-spring-boot-actuator/creating-dashboards-with-grafana",
              "durationText": "5m 12s",
              "durationSeconds": 312,
              "description": "Visualizing rates, error percentages, and latency percentiles.",
              "categoryTag": "Micrometer, Prometheus & Grafana Observability",
              "references": [
                {
                  "label": "Grafana Documentation: Dashboards Overview",
                  "url": "https://grafana.com/docs/grafana/latest/dashboards/",
                  "description": "Building panel visualizations and alert thresholds."
                }
              ]
            }
          ],
          "totalDurationSeconds": 4214
        },
        {
          "id": "12-005",
          "number": 5,
          "title": "Graceful shutdown, Kubernetes probes, Resilience4j",
          "localChapterFile": "005-graceful-shutdown-and-resilience.md",
          "keyConcepts": [
            "Graceful Shutdown (`server.shutdown=graceful`)",
            "Kubernetes Liveness and Readiness Probes (`/actuator/health/liveness`",
            "`/actuator/health/readiness`)",
            "AvailabilityChangeEvent",
            "Resilience Patterns (Circuit Breaker",
            "Rate Limiter",
            "Retry",
            "Bulkhead) with Resilience4j."
          ],
          "videos": [
            {
              "id": "UzEyOkMwMDU6VjAxOlNDQ0I",
              "rawKey": "S12:C5:V1",
              "title": "Spring Cloud: Circuit breaking",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/circuit-breaking",
              "durationText": "2m 31s",
              "durationSeconds": 151,
              "description": "Fault tolerance pattern: Open, Closed, and Half-Open states.",
              "categoryTag": "Circuit Breakers & Fault Tolerance",
              "references": [
                {
                  "label": "Resilience4j Documentation: CircuitBreaker",
                  "url": "https://resilience4j.readme.io/docs/circuitbreaker",
                  "description": "State machine transitions (CLOSED, OPEN, HALF_OPEN) and ring-bit buffer metrics."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDU6VjAyOlNDU1VBQ0I",
              "rawKey": "S12:C5:V2",
              "title": "Spring Cloud: Setting up a circuit breaker",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/setting-up-a-circuit-breaker",
              "durationText": "4m 56s",
              "durationSeconds": 296,
              "description": "Integrating circuit breakers to prevent cascading downstream failures.",
              "categoryTag": "Circuit Breakers & Fault Tolerance",
              "references": [
                {
                  "label": "Spring Cloud Circuit Breaker Reference",
                  "url": "https://docs.spring.io/spring-cloud-circuitbreaker/reference/",
                  "description": "Spring Cloud Circuit Breaker abstraction over Resilience4j."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDU6VjAzOlNCM0VUQ1NCQQ",
              "rawKey": "S12:C5:V3",
              "title": "Spring Boot 3 Essential Training: Containerizing Spring Boot applications",
              "url": "https://www.linkedin.com/learning/spring-boot-3-essential-training/containerizing-spring-boot-applications",
              "durationText": "5m 48s",
              "durationSeconds": 348,
              "description": "Packaging for containerized cloud deployment.",
              "categoryTag": "Production Packaging & Container Operations",
              "references": [
                {
                  "label": "Spring Boot Reference: Graceful Shutdown",
                  "url": "https://docs.spring.io/spring-boot/reference/web/graceful-shutdown.html",
                  "description": "`server.shutdown=graceful` and in-flight request draining."
                },
                {
                  "label": "Spring Boot Actuator Reference: Kubernetes Probes",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.kubernetes-probes",
                  "description": "`/actuator/health/liveness` and `/actuator/health/readiness` state publishing."
                }
              ]
            },
            {
              "id": "UzEyOkMwMDU6VjA0OlJTQklQR05XUw",
              "rawKey": "S12:C5:V4",
              "title": "Running Spring Boot in Production: Going native with Spring",
              "url": "https://www.linkedin.com/learning/running-spring-boot-in-production/going-native-with-spring",
              "durationText": "13m 34s",
              "durationSeconds": 814,
              "description": "Ahead-of-time (AOT) compilation and GraalVM native images for instant startup.",
              "categoryTag": "Production Packaging & Container Operations",
              "references": [
                {
                  "label": "Spring Boot Reference: GraalVM Native Image Support",
                  "url": "https://docs.spring.io/spring-boot/reference/packaging/native-image/index.html",
                  "description": "Ahead-of-Time compilation, reachability metadata, and memory footprint reduction."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1609
        }
      ],
      "totalVideos": 41,
      "totalDurationSeconds": 10810
    },
    {
      "id": "section-13",
      "slug": "13-persistence-migrations",
      "number": 13,
      "title": "Persistence & Database Migrations",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\13-persistence-migrations.md",
      "recommendedCourses": [
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Frank Moley",
          "duration": "2h 45m",
          "scope": ""
        },
        {
          "title": "Advanced SQL for Application Development",
          "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development",
          "author": "Dan Sullivan",
          "duration": "2h 15m",
          "scope": ""
        },
        {
          "title": "Spring Data",
          "url": "https://www.linkedin.com/learning/spring-data-3",
          "author": "Keshav Macwan",
          "duration": "2h 50m",
          "scope": ""
        },
        {
          "title": "Docker for Java Developers",
          "url": "https://www.linkedin.com/learning/docker-for-java-developers",
          "author": "Arun Gupta",
          "duration": "2h 10m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "13-001",
          "number": 1,
          "title": "Flyway SQL-first migrations + Liquibase alternative",
          "localChapterFile": "001-flyway-and-liquibase.md",
          "keyConcepts": [
            "Versioned Migrations (`V1__init.sql`)",
            "Repeatable Migrations (`R__`)",
            "Undo Migrations (`U`)",
            "`flyway_schema_history`",
            "Checksum Validation",
            "Liquibase Master Changelogs",
            "`<changeSet>` Declarations",
            "Spring Boot Auto-Configuration (`FlywayAutoConfiguration`)."
          ],
          "videos": [
            {
              "id": "UzEzOkMwMDE6VjAxOkNTQk1EVldGTQ",
              "rawKey": "S13:C1:V1",
              "title": "Creating Spring Boot Microservices: Database versioning with Flyway migrate",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/database-versioning-with-flyway-migrate",
              "durationText": "4m 10s",
              "durationSeconds": 250,
              "description": "Configuring Flyway in Spring Boot, writing migration scripts, and managing runtime execution before JPA initialization.",
              "categoryTag": "Flyway Database Versioning",
              "references": [
                {
                  "label": "Spring Boot Reference: Execute Flyway Database Migrations on Startup",
                  "url": "https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.migration-tool.flyway",
                  "description": "Auto-configuration of Flyway and migration location properties."
                },
                {
                  "label": "Flyway Documentation: Migrations",
                  "url": "https://documentation.red-gate.com/fd/migrations-271585107.html",
                  "description": "Versioned, undo, and repeatable migration naming rules."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDE6VjAyOkFTRkFEQVNNV0Y",
              "rawKey": "S13:C1:V2",
              "title": "Advanced SQL for Application Development: Automated schema migration with Flyway",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-flyway",
              "durationText": "2m 1s",
              "durationSeconds": 121,
              "description": "Versioned migration concepts, ordering conventions, baseline scripts, and checksum tracking.",
              "categoryTag": "Flyway Database Versioning",
              "references": [
                {
                  "label": "Flyway Documentation: Schema History Table",
                  "url": "https://documentation.red-gate.com/fd/flyway-schema-history-table-273973417.html",
                  "description": "Structure and validation of `flyway_schema_history`."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDE6VjAzOkFTRkFEQVNNV0w",
              "rawKey": "S13:C1:V3",
              "title": "Advanced SQL for Application Development: Automated schema migration with Liquibase",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/automated-schema-migration-with-liquibase",
              "durationText": "2m 24s",
              "durationSeconds": 144,
              "description": "Structuring XML/YAML changelogs, declaring changeset tags, rollback definitions, and changelog locks.",
              "categoryTag": "Liquibase Declarative Changelogs",
              "references": [
                {
                  "label": "Spring Boot Reference: Execute Liquibase Database Migrations on Startup",
                  "url": "https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.migration-tool.liquibase",
                  "description": "Auto-configuration of Liquibase and changelog paths."
                },
                {
                  "label": "Liquibase Documentation: Change Sets",
                  "url": "https://docs.liquibase.com/concepts/changelogs/changeset.html",
                  "description": "Authorship, unique ID, rollback definitions, and locks."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDE6VjA0OlNERVNE",
              "rawKey": "S13:C1:V4",
              "title": "Spring Data: Externalize schema declaration",
              "url": "https://www.linkedin.com/learning/spring-data-3/externalize-schema-declaration",
              "durationText": "7m 26s",
              "durationSeconds": 446,
              "description": "Disabling `hibernate.ddl-auto=update` in favour of external migration files and schema management scripts.",
              "categoryTag": "Liquibase Declarative Changelogs",
              "references": [
                {
                  "label": "Spring Boot Reference: Initialize a Database Using Basic Scripts",
                  "url": "https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.using-basic-sql-scripts",
                  "description": "DDL scripts, `spring.jpa.hibernate.ddl-auto=validate`, and schema separation."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDE6VjA1OkFTRkFEVVND",
              "rawKey": "S13:C1:V5",
              "title": "Advanced SQL for Application Development: Understanding schema changes",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/understanding-schema-changes",
              "durationText": "3m 33s",
              "durationSeconds": 213,
              "description": "The risks of ad-hoc schema modifications in production and establishing disciplined version control.",
              "categoryTag": "Schema Changes & Evolution Lifecycle",
              "references": [
                {
                  "label": "Martin Fowler: Evolutionary Database Design",
                  "url": "https://martinfowler.com/articles/evodb.html",
                  "description": "Version control for database schemas and automated zero-downtime migrations."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDE6VjA2OkFTRkFEQUhTRlM",
              "rawKey": "S13:C1:V6",
              "title": "Advanced SQL for Application Development: Ad hoc scripts for schema changes",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/ad-hoc-scripts-for-schema-changes",
              "durationText": "3m 17s",
              "durationSeconds": 197,
              "description": "Pitfalls of manual DDL updates and why versioned migration tools are mandatory.",
              "categoryTag": "Schema Changes & Evolution Lifecycle",
              "references": [
                {
                  "label": "Flyway Documentation: Repair Command",
                  "url": "https://documentation.red-gate.com/fd/repair-184127443.html",
                  "description": "Resolving failed migrations and repairing checksum mismatches."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1371
        },
        {
          "id": "13-002",
          "number": 2,
          "title": "Schema evolution, MySQL/Postgres strategy",
          "localChapterFile": "002-schema-evolution-and-multi-db.md",
          "keyConcepts": [
            "Docker Entrypoint Initialization (`/docker-entrypoint-initdb.d`)",
            "Multi-Database Provisioning per Stack",
            "`CREATE DATABASE IF NOT EXISTS`",
            "Character Set & Collation (`utf8mb4_unicode_ci`)",
            "Volume Persistence across Reboots."
          ],
          "videos": [
            {
              "id": "UzEzOkMwMDI6VjAxOkNTQk1TQkRD",
              "rawKey": "S13:C2:V1",
              "title": "Creating Spring Boot Microservices: Spring Boot Docker Compose",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose",
              "durationText": "6m 38s",
              "durationSeconds": 398,
              "description": "Declaring database services in Compose files and automatic connection binding at startup.",
              "categoryTag": "Docker Database Container Bootstrapping",
              "references": [
                {
                  "label": "Spring Boot Reference: Docker Compose Support",
                  "url": "https://docs.spring.io/spring-boot/reference/features/dev-services.html#features.dev-services.docker-compose",
                  "description": "Auto-discovery and connection parameter injection for container services."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDI6VjAyOlNEQ1RSRA",
              "rawKey": "S13:C2:V2",
              "title": "Spring Data: Connect to remote database",
              "url": "https://www.linkedin.com/learning/spring-data-3/connect-to-remote-database",
              "durationText": "6m 33s",
              "durationSeconds": 393,
              "description": "Configuring Spring Boot connection pooling and properties to talk to isolated Docker DBMS instances.",
              "categoryTag": "Docker Database Container Bootstrapping",
              "references": [
                {
                  "label": "PostgreSQL Official Docker Image Documentation",
                  "url": "https://hub.docker.com/_/postgres",
                  "description": "Environment variables (`POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`) and port publishing."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDI6VjAzOkFTRkFEQ1BBQkg",
              "rawKey": "S13:C2:V3",
              "title": "Advanced SQL for Application Development: Connection pooling and bulk heads",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/connection-pooling-and-bulk-heads",
              "durationText": "3m 53s",
              "durationSeconds": 233,
              "description": "Managing connection pools per microservice database to prevent starvation and ensure isolation.",
              "categoryTag": "Docker Database Container Bootstrapping",
              "references": [
                {
                  "label": "HikariCP Documentation: Configuration",
                  "url": "https://github.com/brettwooldridge/HikariCP#configuration-knobs-baby",
                  "description": "Connection pool sizing, maxLifetime, and leakDetectionThreshold."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDI6VjA0OkNTQk1PV0RD",
              "rawKey": "S13:C2:V4",
              "title": "Creating Spring Boot Microservices: Orchestrate with Docker Compose",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/orchestrate-with-docker-compose",
              "durationText": "8m 7s",
              "durationSeconds": 487,
              "description": "Orchestrating multiple microservices with isolated persistent data volumes and startup hooks.",
              "categoryTag": "Container Init Hooks & Environment Strategy",
              "references": [
                {
                  "label": "Docker Compose Specification: Services & Volumes",
                  "url": "https://docs.docker.com/compose/compose-file/05-services/",
                  "description": "Volume persistence and health check dependencies (`depends_on: condition: service_healthy`)."
                }
              ]
            },
            {
              "id": "UzEzOkMwMDI6VjA1OkFTRkFEVUVWRkM",
              "rawKey": "S13:C2:V5",
              "title": "Advanced SQL for Application Development: Using environment variables for connection parameters",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/using-environment-variables-for-connection-parameters",
              "durationText": "3m 57s",
              "durationSeconds": 237,
              "description": "Best practices for decoupling credentials and database endpoints via environment configuration.",
              "categoryTag": "Container Init Hooks & Environment Strategy",
              "references": [
                {
                  "label": "Docker Initialization Scripts (`/docker-entrypoint-initdb.d/`)",
                  "url": "https://github.com/docker-library/docs/blob/master/postgres/README.md#initialization-scripts",
                  "description": "Executing shell and SQL scripts on initial container startup."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1748
        }
      ],
      "totalVideos": 11,
      "totalDurationSeconds": 3119
    },
    {
      "id": "section-14",
      "slug": "14-testing-tdd",
      "number": 14,
      "title": "Testing & TDD",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\14-testing-tdd.md",
      "recommendedCourses": [
        {
          "title": "Advanced Spring: Effective Integration Testing with Spring Boot",
          "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot",
          "author": "Kevin Bowersox",
          "duration": "1h 45m",
          "scope": ""
        },
        {
          "title": "Test-Driven Development in Spring Boot with JUnit and Mockito",
          "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito",
          "author": "Nelson Djalo",
          "duration": "2h 20m",
          "scope": ""
        },
        {
          "title": "Complete Guide To Java Testing with JUnit 5 & Mockito",
          "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito",
          "author": "Maaike van Putten",
          "duration": "4h 45m",
          "scope": ""
        },
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Frank Moley",
          "duration": "2h 45m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "14-001",
          "number": 1,
          "title": "Spring Boot test slices: `@SpringBootTest`, `@WebMvcTest`, `@DataJpaTest`, `TestRestTemplate`",
          "localChapterFile": "001-spring-boot-test-slices.md",
          "keyConcepts": [
            "Slices vs Full Context",
            "`@SpringBootTest(webEnvironment = RANDOM_PORT)`",
            "`@WebMvcTest` with `@MockitoBean`",
            "`@DataJpaTest` with `TestEntityManager`",
            "`@AutoConfigureMockMvc`",
            "`TestRestTemplate`."
          ],
          "videos": [
            {
              "id": "UzE0OkMwMDE6VjAxOkVJVEVXVFRZREE",
              "rawKey": "S14:C1:V1",
              "title": "Effective Integration Testing: Effective ways to test your data access",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/effective-ways-to-test-your-data-access",
              "durationText": "5m 2s",
              "durationSeconds": 302,
              "description": "Isolating the persistence layer, rollback semantics, and test entity managers.",
              "categoryTag": "Persistence Slice Testing (`@DataJpaTest`)",
              "references": [
                {
                  "label": "Spring Boot Reference: Auto-configured Spring Data JPA Tests",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html#testing.spring-boot-applications.autoconfigured-spring-data-jpa",
                  "description": "Using `@DataJpaTest` to configure in-memory databases and scan `@Entity` classes."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDE6VjAyOkVJVFdJVEZBSlI",
              "rawKey": "S14:C1:V2",
              "title": "Effective Integration Testing: Writing integration tests for a JPA repository",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository",
              "durationText": "5m 47s",
              "durationSeconds": 347,
              "description": "Executing focused repository slice tests against embedded and configured datasources.",
              "categoryTag": "Persistence Slice Testing (`@DataJpaTest`)",
              "references": [
                {
                  "label": "Spring Boot API: `TestEntityManager`",
                  "url": "https://docs.spring.io/spring-boot/api/java/org/springframework/boot/jpa/test/autoconfigure/TestEntityManager.html",
                  "description": "Helper for tests that need to persist, find, and flush entities without repository abstraction."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDE6VjAzOlNERURGVA",
              "rawKey": "S14:C1:V3",
              "title": "Spring Data: Embedded database for testing",
              "url": "https://www.linkedin.com/learning/spring-data-3/embedded-database-for-testing",
              "durationText": "2m 34s",
              "durationSeconds": 154,
              "description": "Automatically standing up H2/HSQLDB databases during repository slice test runs.",
              "categoryTag": "Persistence Slice Testing (`@DataJpaTest`)",
              "references": [
                {
                  "label": "Spring Boot Reference: Auto-configured Data Tests",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html#testing.spring-boot-applications.autoconfigured-spring-data-jpa",
                  "description": "`@AutoConfigureTestDatabase` replaces standard datasources with embedded in-memory DBs by default."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDE6VjA0OkVJVFdUT1dDUlQ",
              "rawKey": "S14:C1:V4",
              "title": "Effective Integration Testing: Which type of web controller responsibilities to test?",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/which-type-of-web-controller-responsibilities-to-test",
              "durationText": "4m 35s",
              "durationSeconds": 275,
              "description": "Differentiating unit testing, controller contract testing, and full HTTP testing.",
              "categoryTag": "Web Controller Slice Testing (`@WebMvcTest`)",
              "references": [
                {
                  "label": "Spring Boot Reference: Auto-configured Spring MVC Tests",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html#testing.spring-boot-applications.spring-mvc-tests",
                  "description": "Testing the MVC layer in isolation without booting the full server."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDE6VjA1OkVJVFdJVEZBV0M",
              "rawKey": "S14:C1:V5",
              "title": "Effective Integration Testing: Writing integration tests for a web controller",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-web-controller",
              "durationText": "4m 42s",
              "durationSeconds": 282,
              "description": "Configuring `@WebMvcTest` to limit component scan and verify JSON serializers and route mapping.",
              "categoryTag": "Web Controller Slice Testing (`@WebMvcTest`)",
              "references": [
                {
                  "label": "Spring Framework Reference: MockitoBean and MockitoSpyBean",
                  "url": "https://docs.spring.io/spring-framework/reference/testing/annotations/integration-spring/annotation-mockitobean.html",
                  "description": "Injecting Mockito mocks into the ApplicationContext slice."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDE6VjA2OlRJU0JXV00",
              "rawKey": "S14:C1:V6",
              "title": "TDD in Spring Boot: Working with MockMvc",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/working-with-mockmvc",
              "durationText": "2m 1s",
              "durationSeconds": 121,
              "description": "Using MockMvc to perform requests, verify HTTP headers, status codes, and JSON response bodies.",
              "categoryTag": "Web Controller Slice Testing (`@WebMvcTest`)",
              "references": [
                {
                  "label": "Spring Framework Reference: MockMvc",
                  "url": "https://docs.spring.io/spring-framework/reference/testing/mockmvc.html",
                  "description": "Performing HTTP requests against controllers using server-side mocks."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDE6VjA3OkVJVFdJVEZSRQ",
              "rawKey": "S14:C1:V7",
              "title": "Effective Integration Testing: Writing integration tests for rest endpoints",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-rest-endpoints",
              "durationText": "6m 53s",
              "durationSeconds": 413,
              "description": "Booting the complete ApplicationContext on a random port and asserting via real HTTP requests.",
              "categoryTag": "Full Context & HTTP Server Testing (`@SpringBootTest`)",
              "references": [
                {
                  "label": "Spring Boot Reference: Testing with a Running Server",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html#testing.spring-boot-applications.with-running-server",
                  "description": "Using `@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)`."
                },
                {
                  "label": "Spring Boot Reference: TestRestTemplate",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html#testing.spring-boot-applications.test-rest-template",
                  "description": "Full HTTP communication against active test servers."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDE6VjA4OkNTQk1KTUFT",
              "rawKey": "S14:C1:V8",
              "title": "Creating Spring Boot Microservices: JUnit, Mockito, and SpringBootTest",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest",
              "durationText": "12m 39s",
              "durationSeconds": 759,
              "description": "Deep dive into combining JUnit 5, `@SpringBootTest`, and Mockito collaborators.",
              "categoryTag": "Full Context & HTTP Server Testing (`@SpringBootTest`)",
              "references": [
                {
                  "label": "Spring Boot Reference: Testing Spring Boot Applications",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/spring-boot-applications.html",
                  "description": "Application context caching and test execution lifecycle."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2653
        },
        {
          "id": "14-002",
          "number": 2,
          "title": "Testcontainers, contract testing, REST-assured",
          "localChapterFile": "002-testcontainers-and-contract-tests.md",
          "keyConcepts": [
            "Disposable Docker Containers",
            "Spring Boot `@ServiceConnection`",
            "`@Testcontainers(disabledWithoutDocker = true)`",
            "Consumer-Driven Contracts (Pact / Spring Cloud Contract)",
            "Provider Verification."
          ],
          "videos": [
            {
              "id": "UzE0OkMwMDI6VjAxOkVJVElUU0ND",
              "rawKey": "S14:C2:V1",
              "title": "Effective Integration Testing: Introduction to Spring Cloud Contract",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/introduction-to-spring-cloud-contract",
              "durationText": "4m 8s",
              "durationSeconds": 248,
              "description": "The mechanics of contract testing: isolating API producers and consumers via shared stubs.",
              "categoryTag": "Contract Testing Foundations & Consumer Verification",
              "references": [
                {
                  "label": "Spring Cloud Contract Reference: Overview",
                  "url": "https://docs.spring.io/spring-cloud-contract/reference/",
                  "description": "Consumer Driven Contracts (CDC) and automated contract stubs."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDI6VjAyOkVJVEVDQVJDQVc",
              "rawKey": "S14:C2:V2",
              "title": "Effective Integration Testing: Ensuring client app (rest call) and web app (controller) are in sync",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/ensuring-client-app-rest-call-and-web-app-controller-are-in-sync-10134626",
              "durationText": "5m 57s",
              "durationSeconds": 357,
              "description": "Generating wire contract files and ensuring producer changes do not break downstream consumers.",
              "categoryTag": "Contract Testing Foundations & Consumer Verification",
              "references": [
                {
                  "label": "Spring Cloud Contract Reference: Generating Stubs",
                  "url": "https://docs.spring.io/spring-cloud-contract/reference/project-features-stubrunner.html",
                  "description": "WireMock stub runner and validating contracts against provider controllers."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDI6VjAzOkVJVElUV01BRUE",
              "rawKey": "S14:C2:V3",
              "title": "Effective Integration Testing: Integration testing without making an external API call",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/integration-testing-without-making-an-external-api-call",
              "durationText": "3m 50s",
              "durationSeconds": 230,
              "description": "Stubbing remote wire services and verifying outbound HTTP client integrations.",
              "categoryTag": "Service Integration & External Dependencies",
              "references": [
                {
                  "label": "WireMock Official Documentation",
                  "url": "https://wiremock.org/docs/",
                  "description": "Stubbing HTTP responses for integration and contract verification."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDI6VjA0OkNTQk1TQkRD",
              "rawKey": "S14:C2:V4",
              "title": "Creating Spring Boot Microservices: Spring Boot Docker Compose",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose",
              "durationText": "6m 38s",
              "durationSeconds": 398,
              "description": "Running integrated test services and managed container topologies.",
              "categoryTag": "Service Integration & External Dependencies",
              "references": [
                {
                  "label": "Spring Boot Reference: Testcontainers Integration",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/testcontainers.html",
                  "description": "Managing real databases, messaging queues, and caches via Docker containers."
                },
                {
                  "label": "Spring Boot Reference: Service Connections",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/testcontainers.html#testing.testcontainers.service-connections",
                  "description": "Automatic discovery and connection parameter injection via `@ServiceConnection`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1233
        },
        {
          "id": "14-003",
          "number": 3,
          "title": "TDD on the critical path: red, green, refactor",
          "localChapterFile": "003-tdd-on-the-critical-path.md",
          "keyConcepts": [
            "Red-Green-Refactor Loop",
            "Test-First Design",
            "Mockito Collaborators",
            "Hexagonal Port Extraction",
            "In-Memory Test Adapters."
          ],
          "videos": [
            {
              "id": "UzE0OkMwMDM6VjAxOlRJU0JJVFRJU0I",
              "rawKey": "S14:C3:V1",
              "title": "TDD in Spring Boot: Introduction to TDD in Spring Boot",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/introduction-to-tdd-in-spring-boot",
              "durationText": "4m 52s",
              "durationSeconds": 292,
              "description": "Mindset shift: writing specification tests before production implementation.",
              "categoryTag": "The Core TDD Cycle",
              "references": [
                {
                  "label": "Martin Fowler: Test Driven Development",
                  "url": "https://martinfowler.com/bliki/TestDrivenDevelopment.html",
                  "description": "Core philosophy of Red-Green-Refactor."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDM6VjAyOlRJU0JSUFdBRlQ",
              "rawKey": "S14:C3:V2",
              "title": "TDD in Spring Boot: Red phase: Write a failing test",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/red-phase-write-a-failing-test",
              "durationText": "4m 24s",
              "durationSeconds": 264,
              "description": "Creating a targeted test that fails for the exact intended semantic reason.",
              "categoryTag": "The Core TDD Cycle",
              "references": [
                {
                  "label": "JUnit 5 User Guide: Writing Tests",
                  "url": "https://junit.org/junit5/docs/current/user-guide/#writing-tests",
                  "description": "Writing test assertions with `@Test` and assertion failure messages."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDM6VjAzOlRJU0JHUElNQ1Q",
              "rawKey": "S14:C3:V3",
              "title": "TDD in Spring Boot: Green phase: Implement minimal code to pass",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/green-phase-implement-the-minimal-code-to-pass-the-test",
              "durationText": "1m 7s",
              "durationSeconds": 67,
              "description": "Implementing just enough logic to satisfy assertions without premature generalization.",
              "categoryTag": "The Core TDD Cycle",
              "references": [
                {
                  "label": "Kent Beck: Test-Driven Development by Example",
                  "url": "https://www.oreilly.com/library/view/test-driven-development/0321146530/",
                  "description": "The rule of making tests pass with smallest possible change."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDM6VjA0OlRJU0JSUElDUQ",
              "rawKey": "S14:C3:V4",
              "title": "TDD in Spring Boot: Refactor phase: Improve code quality",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/refactor-phase-improve-the-code-quality",
              "durationText": "54s",
              "durationSeconds": 54,
              "description": "Cleaning structure, extracting ports, and eliminating duplication while tests remain green.",
              "categoryTag": "The Core TDD Cycle",
              "references": [
                {
                  "label": "Refactoring: Improving the Design of Existing Code",
                  "url": "https://refactoring.com/",
                  "description": "Clean code mechanics backed by a passing test safety net."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDM6VjA1OlRJU0JXVFRGVFI",
              "rawKey": "S14:C3:V5",
              "title": "TDD in Spring Boot: Writing TDD test for the repository",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/writing-tdd-test-for-the-repository",
              "durationText": "6m 26s",
              "durationSeconds": 386,
              "description": "Driving data access methods and assertions through tests.",
              "categoryTag": "Driving the Architecture Layer-by-Layer",
              "references": [
                {
                  "label": "Spring Data Commons: Testing Repositories",
                  "url": "https://docs.spring.io/spring-data/commons/reference/repositories/core-concepts.html",
                  "description": "Fast persistence verification."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDM6VjA2OlRJU0JXQVRURlQ",
              "rawKey": "S14:C3:V6",
              "title": "TDD in Spring Boot: Writing a TDD test for the service layer",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/writing-a-tdd-test-for-the-service-layer",
              "durationText": "5m 39s",
              "durationSeconds": 339,
              "description": "Driving business rules and Mockito interactions.",
              "categoryTag": "Driving the Architecture Layer-by-Layer",
              "references": [
                {
                  "label": "Mockito Official Documentation",
                  "url": "https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html",
                  "description": "`when().thenReturn()`, `verify()`, and Mockito argument captors."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDM6VjA3OlRJU0JXVEZUVEY",
              "rawKey": "S14:C3:V7",
              "title": "TDD in Spring Boot: Writing the first TDD test for the controller",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/writing-the-first-tdd-test-for-the-controller",
              "durationText": "8m 53s",
              "durationSeconds": 533,
              "description": "Driving endpoint paths, HTTP verbs, and status codes.",
              "categoryTag": "Driving the Architecture Layer-by-Layer",
              "references": [
                {
                  "label": "Spring Framework Reference: Testing Web Endpoints",
                  "url": "https://docs.spring.io/spring-framework/reference/testing/mockmvc.html#mockmvc-assertions",
                  "description": "`status().isOk()`, `jsonPath()` verification."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDM6VjA4OlRJU0JDUFRB",
              "rawKey": "S14:C3:V8",
              "title": "TDD in Spring Boot: Common pitfalls to avoid",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/common-pitfalls-to-avoid",
              "durationText": "4m 23s",
              "durationSeconds": 263,
              "description": "Over-mocking, testing implementation details instead of behaviour, and skipping the refactor step.",
              "categoryTag": "Discipline & Pitfalls",
              "references": [
                {
                  "label": "Martin Fowler: Mocks Aren't Stubs",
                  "url": "https://martinfowler.com/articles/mocksArentStubs.html",
                  "description": "Classical TDD vs Mockist TDD trade-offs."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2198
        },
        {
          "id": "14-004",
          "number": 4,
          "title": "Frontend testing (Vitest) and mobile test automation",
          "localChapterFile": "004-frontend-and-mobile-testing.md",
          "keyConcepts": [
            "Mobile Automation Architecture",
            "Appium Driver Factory",
            "Page Object Pattern",
            "Cucumber BDD Scenarios",
            "Vitest Component Testing."
          ],
          "videos": [
            {
              "id": "UzE0OkMwMDQ6VjAxOlRBRkFB",
              "rawKey": "S14:C4:V1",
              "title": "Test Automation Foundations: Automation architecture",
              "url": "https://www.linkedin.com/learning/test-automation-foundations/automation-architecture",
              "durationText": "4m 12s",
              "durationSeconds": 252,
              "description": "Structuring modular test frameworks, separating test intent from execution mechanics.",
              "categoryTag": "Test Automation Principles & BDD Scenarios",
              "references": [
                {
                  "label": "Appium Documentation: Introduction",
                  "url": "https://appium.io/docs/en/latest/",
                  "description": "Cross-platform mobile automation framework."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDQ6VjAyOlRBRlBPTQ",
              "rawKey": "S14:C4:V2",
              "title": "Test Automation Foundations: Page object model",
              "url": "https://www.linkedin.com/learning/test-automation-foundations/the-page-object-pattern",
              "durationText": "4m 45s",
              "durationSeconds": 285,
              "description": "Designing reusable screen classes and encapsulating driver locator strategies.",
              "categoryTag": "Test Automation Principles & BDD Scenarios",
              "references": [
                {
                  "label": "Selenium / Appium Design Patterns: Page Object Models",
                  "url": "https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/",
                  "description": "Encapsulating screen interactions and locators."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDQ6VjAzOlJVVElPVVdU",
              "rawKey": "S14:C4:V3",
              "title": "React: Using TypeScript: Implementation of useEffect with TypeScript",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/implementation-of-useeffect-with-typescript",
              "durationText": "4m 19s",
              "durationSeconds": 259,
              "description": "Testing side-effects and asynchronous component lifecycles in UI test harnesses.",
              "categoryTag": "Unit & Component Level Verification",
              "references": [
                {
                  "label": "Vitest Documentation: Guide",
                  "url": "https://vitest.dev/guide/",
                  "description": "Next-generation fast unit and component testing."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDQ6VjA0OkNHVEpUVExBQQ",
              "rawKey": "S14:C4:V4",
              "title": "Complete Guide To Java Testing: Test lifecycle and assertions",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito/test-lifecycle-and-display-names",
              "durationText": "6m 12s",
              "durationSeconds": 372,
              "description": "Standardizing test lifecycle hooks across automated suites.",
              "categoryTag": "Unit & Component Level Verification",
              "references": [
                {
                  "label": "JUnit 5 User Guide: Test Lifecycle",
                  "url": "https://junit.org/junit5/docs/current/user-guide/#writing-tests-annotations",
                  "description": "`@BeforeEach`, `@AfterEach`, `@BeforeAll`, `@AfterAll`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1168
        },
        {
          "id": "14-005",
          "number": 5,
          "title": "Test reporting, soft assertions, and parallel execution",
          "localChapterFile": "005-misc.md",
          "keyConcepts": [
            "AssertJ Soft Assertions (`assertSoftly`)",
            "Parallel JUnit 5 Execution (`junit.jupiter.execution.parallel.enabled`)",
            "Extent Reports",
            "Allure Reporting",
            "Thread-Safe Session Pools."
          ],
          "videos": [
            {
              "id": "UzE0OkMwMDU6VjAxOkNHVEpUR0FBU0E",
              "rawKey": "S14:C5:V1",
              "title": "Complete Guide To Java Testing: Grouped assertions and soft assertions",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito/grouped-assertions-and-soft-assertions",
              "durationText": "5m 44s",
              "durationSeconds": 344,
              "description": "Collecting multiple assertion failures in a single test run without premature exit.",
              "categoryTag": "Soft Assertions & Advanced AssertJ",
              "references": [
                {
                  "label": "AssertJ Core Documentation: Soft Assertions",
                  "url": "https://assertj.github.io/doc/#assertj-core-soft-assertions",
                  "description": "`SoftAssertions.assertSoftly()` pattern collecting multiple errors."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDU6VjAyOkVJVENIUlRXTUE",
              "rawKey": "S14:C5:V2",
              "title": "Effective Integration Testing: Creating human-readable tests with Mockito and AssertJ",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/creating-human-readable-tests-with-mockito-and-assertj",
              "durationText": "3m 3s",
              "durationSeconds": 183,
              "description": "Crafting expressive, fluent assertions that produce self-documenting test failures.",
              "categoryTag": "Soft Assertions & Advanced AssertJ",
              "references": [
                {
                  "label": "AssertJ Fluent Assertions Guide",
                  "url": "https://assertj.github.io/doc/",
                  "description": "Rich assertions for collections, maps, dates, and optional types."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDU6VjAzOkNHVEpUUlRJUA",
              "rawKey": "S14:C5:V3",
              "title": "Complete Guide To Java Testing: Running tests in parallel",
              "url": "https://www.linkedin.com/learning/complete-guide-to-java-testing-with-junit-5-mockito/running-tests-in-parallel",
              "durationText": "6m 28s",
              "durationSeconds": 388,
              "description": "Configuring thread counts, concurrent mode, and isolating shared resources with `@ResourceLock`.",
              "categoryTag": "Parallel Execution & Test Reporting",
              "references": [
                {
                  "label": "JUnit 5 User Guide: Parallel Execution",
                  "url": "https://junit.org/junit5/docs/current/user-guide/#writing-tests-parallel-execution",
                  "description": "Configuring `junit.jupiter.execution.parallel.enabled=true` and `@ResourceLock`."
                }
              ]
            },
            {
              "id": "UzE0OkMwMDU6VjA0OlREREJQRldNVA",
              "rawKey": "S14:C5:V4",
              "title": "Test-Driven Development: Best practices for writing maintainable tests",
              "url": "https://www.linkedin.com/learning/test-driven-development-in-spring-boot-with-junit-and-mockito/best-practices-for-writing-maintainable-tests",
              "durationText": "2m 53s",
              "durationSeconds": 173,
              "description": "Structuring test suites for clean CI artifact generation and debugging.",
              "categoryTag": "Parallel Execution & Test Reporting",
              "references": [
                {
                  "label": "Allure Framework Documentation",
                  "url": "https://allurereport.org/docs/",
                  "description": "Generating interactive multi-language test execution reports."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1088
        }
      ],
      "totalVideos": 28,
      "totalDurationSeconds": 8340
    },
    {
      "id": "section-15",
      "slug": "15-clean-architecture",
      "number": 15,
      "title": "Clean Architecture, DDD & CQRS",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\15-clean-architecture.md",
      "recommendedCourses": [
        {
          "title": "Software Architecture: Domain-Driven Design",
          "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design",
          "author": "Michael M. David",
          "duration": "2h 05m",
          "scope": ""
        },
        {
          "title": "Microservices: Design Patterns",
          "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771",
          "author": "Frank Moley",
          "duration": "1h 50m",
          "scope": ""
        },
        {
          "title": "Software Architecture Patterns",
          "url": "https://www.linkedin.com/learning/software-architecture-patterns-14392036",
          "author": "Mark Richards",
          "duration": "2h 15m",
          "scope": ""
        },
        {
          "title": "Advanced Java: Clean Code and Architecture Principles",
          "url": "https://www.linkedin.com/learning/advanced-java-programming",
          "author": "Maaike van Putten",
          "duration": "3h 10m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "15-001",
          "number": 1,
          "title": "Hexagonal architecture, DDD aggregates, and bounded contexts",
          "localChapterFile": "001-hexagonal-and-ddd.md",
          "keyConcepts": [
            "Hexagonal Architecture (Ports & Adapters)",
            "Domain Core Isolation (Zero Framework Dependencies)",
            "Bounded Contexts",
            "Ubiquitous Language",
            "Aggregate Roots & Invariants",
            "Anti-Corruption Layer (ACL)",
            "Domain Events."
          ],
          "videos": [
            {
              "id": "UzE1OkMwMDE6VjAxOlNBRFdJRA",
              "rawKey": "S15:C1:V1",
              "title": "Software Architecture DDD: What is DDD?",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/what-is-ddd",
              "durationText": "4m 41s",
              "durationSeconds": 281,
              "description": "Strategic design foundation: putting domain logic at the center of system design.",
              "categoryTag": "Domain-Driven Design Principles & Bounded Contexts",
              "references": [
                {
                  "label": "Domain-Driven Design Reference (Eric Evans)",
                  "url": "https://www.domainlanguage.com/ddd/reference/",
                  "description": "Strategic design patterns and model-driven design principles."
                },
                {
                  "label": "Alistair Cockburn: Hexagonal Architecture (Ports and Adapters)",
                  "url": "https://alistair.cockburn.us/hexagonal-architecture/",
                  "description": "Decoupling business domain from external inputs and storage technologies."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDE6VjAyOlNBRFdBQw",
              "rawKey": "S15:C1:V2",
              "title": "Software Architecture DDD: What are contexts?",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/what-are-contexts",
              "durationText": "4m 7s",
              "durationSeconds": 247,
              "description": "Defining bounded contexts to partition distinct business models and domain boundaries.",
              "categoryTag": "Domain-Driven Design Principles & Bounded Contexts",
              "references": [
                {
                  "label": "Martin Fowler: Bounded Context",
                  "url": "https://martinfowler.com/bliki/BoundedContext.html",
                  "description": "Boundary within a domain where a particular model applies consistently."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDE6VjAzOlNBRFRVTA",
              "rawKey": "S15:C1:V3",
              "title": "Software Architecture DDD: The ubiquitous language",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/the-ubiquitous-language",
              "durationText": "4m 16s",
              "durationSeconds": 256,
              "description": "Establishing consistent vocabulary shared across business experts, domain models, and code.",
              "categoryTag": "Domain-Driven Design Principles & Bounded Contexts",
              "references": [
                {
                  "label": "Martin Fowler: Ubiquitous Language",
                  "url": "https://martinfowler.com/bliki/UbiquitousLanguage.html",
                  "description": "Developing a shared terminology between development teams and domain experts."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDE6VjA0OlNBRFNOREU",
              "rawKey": "S15:C1:V4",
              "title": "Software Architecture DDD: Same name, different entity",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/same-name-different-entity",
              "durationText": "3m 8s",
              "durationSeconds": 188,
              "description": "Resolving semantic collisions across bounded contexts and designing Anti-Corruption Layers.",
              "categoryTag": "Domain-Driven Design Principles & Bounded Contexts",
              "references": [
                {
                  "label": "Microsoft Architecture Guides: Anti-Corruption Layer Pattern",
                  "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer",
                  "description": "Translating communications between different subsystem domain models."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDE6VjA1OlNBRERF",
              "rawKey": "S15:C1:V5",
              "title": "Software Architecture DDD: Demo: Entities",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/demo-entities",
              "durationText": "7m 3s",
              "durationSeconds": 423,
              "description": "Entity identity, mutable vs immutable attributes, and aggregate root boundaries.",
              "categoryTag": "Aggregates, Entities & Domain Events",
              "references": [
                {
                  "label": "DDD Aggregate Pattern",
                  "url": "https://martinfowler.com/bliki/DDD_Aggregate.html",
                  "description": "Cluster of domain objects treated as a single unit with transactional consistency invariants."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDE6VjA2OlNBRERF",
              "rawKey": "S15:C1:V6",
              "title": "Software Architecture DDD: Demo: Events",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/demo-events",
              "durationText": "5m 6s",
              "durationSeconds": 306,
              "description": "Capturing past domain occurrences as immutable domain event records.",
              "categoryTag": "Aggregates, Entities & Domain Events",
              "references": [
                {
                  "label": "Martin Fowler: Domain Event",
                  "url": "https://martinfowler.com/eaaDev/DomainEvent.html",
                  "description": "Capturing occurrences of something that happened in the business domain."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDE6VjA3OlNBRERDTQ",
              "rawKey": "S15:C1:V7",
              "title": "Software Architecture DDD: Demo: Context maps",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/demo-context-maps",
              "durationText": "4m 28s",
              "durationSeconds": 268,
              "description": "Mapping relationships between upstream and downstream bounded contexts.",
              "categoryTag": "Aggregates, Entities & Domain Events",
              "references": [
                {
                  "label": "DDD Context Mapping Patterns",
                  "url": "https://www.domainlanguage.com/ddd/reference/",
                  "description": "Shared Kernel, Customer/Supplier, Conformist, and Open Host Service relationships."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDE6VjA4OlNBRFdJRVM",
              "rawKey": "S15:C1:V8",
              "title": "Software Architecture DDD: What is event storming?",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/what-is-event-storming",
              "durationText": "2m 52s",
              "durationSeconds": 172,
              "description": "Collaborative modeling workshop method to discover domain events, commands, and aggregates.",
              "categoryTag": "Aggregates, Entities & Domain Events",
              "references": [
                {
                  "label": "Event Modeling & Event Storming Guide",
                  "url": "https://eventmodeling.org/",
                  "description": "Rapid workshop methodology for capturing domain events and user workflows."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2141
        },
        {
          "id": "15-002",
          "number": 2,
          "title": "CQRS, event sourcing, and executable architecture boundaries",
          "localChapterFile": "002-cqrs-event-sourcing-archunit.md",
          "keyConcepts": [
            "Command Query Responsibility Segregation (CQRS)",
            "Write Model vs Read Model Projections",
            "Event Sourcing (Append-Only Event Store",
            "Deterministic State Replay)",
            "Optimistic Locking",
            "ArchUnit Architecture Verification."
          ],
          "videos": [
            {
              "id": "UzE1OkMwMDI6VjAxOk1EUENRUlM",
              "rawKey": "S15:C2:V1",
              "title": "Microservices Design Patterns: Command Query Responsibility Segregation",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/command-query-responsibility-segregation",
              "durationText": "4m 31s",
              "durationSeconds": 271,
              "description": "Separating read models optimized for querying from write models optimized for business rule validation.",
              "categoryTag": "CQRS Pattern & Asynchronous Projections",
              "references": [
                {
                  "label": "Martin Fowler: CQRS",
                  "url": "https://martinfowler.com/bliki/CQRS.html",
                  "description": "Segregating read and write operations into distinct models."
                },
                {
                  "label": "Microservices.io: CQRS Pattern",
                  "url": "https://microservices.io/patterns/data/cqrs.html",
                  "description": "Implementing read queries against event-projected view stores."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDI6VjAyOk1EUEFF",
              "rawKey": "S15:C2:V2",
              "title": "Microservices Design Patterns: Asynchronous eventing",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/asynchronous-eventing",
              "durationText": "2m 47s",
              "durationSeconds": 167,
              "description": "Publishing state transitions asynchronously to update materialized query views.",
              "categoryTag": "CQRS Pattern & Asynchronous Projections",
              "references": [
                {
                  "label": "Martin Fowler: Event Sourcing",
                  "url": "https://martinfowler.com/eaaDev/EventSourcing.html",
                  "description": "Capturing all changes to application state as a sequence of immutable events."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDI6VjAzOk1EUFNTRA",
              "rawKey": "S15:C2:V3",
              "title": "Microservices Design Patterns: Single service database",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/single-service-database",
              "durationText": "3m 31s",
              "durationSeconds": 211,
              "description": "Database-per-service pattern and preventing shared write access across microservices.",
              "categoryTag": "CQRS Pattern & Asynchronous Projections",
              "references": [
                {
                  "label": "Microservices.io: Database per Service Pattern",
                  "url": "https://microservices.io/patterns/data/database-per-service.html",
                  "description": "Preventing loose coupling erosion and runtime contention across boundaries."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDI6VjA0OlNBRENSUw",
              "rawKey": "S15:C2:V4",
              "title": "Software Architecture DDD: Choreographed/reactive systems",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/choreographed-reactive-systems",
              "durationText": "3m 0s",
              "durationSeconds": 180,
              "description": "Decoupled event-driven flows where microservices react to domain events.",
              "categoryTag": "Event-Driven Architectures & Orchestration",
              "references": [
                {
                  "label": "Microservices.io: Saga Pattern (Choreography)",
                  "url": "https://microservices.io/patterns/data/saga.html",
                  "description": "Decentralized saga coordination through event messaging and compensation."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDI6VjA1OlNBRE9EUw",
              "rawKey": "S15:C2:V5",
              "title": "Software Architecture DDD: Orchestrated/declarative systems",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/orchestrated-declarative-systems",
              "durationText": "3m 6s",
              "durationSeconds": 186,
              "description": "Centralized command coordination vs decentralized event reactions.",
              "categoryTag": "Event-Driven Architectures & Orchestration",
              "references": [
                {
                  "label": "Microservices.io: Saga Pattern (Orchestration)",
                  "url": "https://microservices.io/patterns/data/saga.html",
                  "description": "Central orchestrator directing transactional steps and rollback compensations."
                }
              ]
            },
            {
              "id": "UzE1OkMwMDI6VjA2Ok1EUERPQVM",
              "rawKey": "S15:C2:V6",
              "title": "Microservices Design Patterns: Decomposition of a system",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/decomposition-of-a-system",
              "durationText": "3m 49s",
              "durationSeconds": 229,
              "description": "Defining strict boundaries between subdomains and preventing infrastructure leakages into core models.",
              "categoryTag": "Architectural Boundary Enforcement",
              "references": [
                {
                  "label": "ArchUnit User Guide: Layered and Hexagonal Architecture",
                  "url": "https://www.archunit.org/userguide/html/000_Index.html#_layered_architecture",
                  "description": "Automated JUnit tests verifying package dependencies and clean architectural rings."
                },
                {
                  "label": "ArchUnit User Guide: Onion Architecture Support",
                  "url": "https://www.archunit.org/userguide/html/000_Index.html#_onion_architecture",
                  "description": "Verifying domain, application, and adapter layer separation."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1244
        }
      ],
      "totalVideos": 14,
      "totalDurationSeconds": 3385
    },
    {
      "id": "section-16",
      "slug": "16-microservices-patterns",
      "number": 16,
      "title": "Microservices Patterns",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\16-microservices-patterns.md",
      "recommendedCourses": [
        {
          "title": "Spring Cloud: Cloud-Native Architecture and Distributed Systems",
          "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems",
          "author": "Frank Moley",
          "duration": "1h 45m",
          "scope": ""
        },
        {
          "title": "Microservices: Design Patterns",
          "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771",
          "author": "Frank Moley",
          "duration": "1h 50m",
          "scope": ""
        },
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Frank Moley",
          "duration": "2h 45m",
          "scope": ""
        },
        {
          "title": "Building Microservices with Spring Boot 3",
          "url": "https://www.linkedin.com/learning/building-microservices-with-spring-boot-3",
          "author": "Aditi Dixit",
          "duration": "2h 30m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "16-001",
          "number": 1,
          "title": "Service discovery (Eureka), config server, OpenFeign",
          "localChapterFile": "001-service-discovery-and-config.md",
          "keyConcepts": [
            "Standalone Eureka Naming Server (`@EnableEurekaServer`)",
            "Eureka Client Auto-Registration (`@EnableDiscoveryClient`)",
            "OpenFeign Declarative Client (`@FeignClient`)",
            "Spring Cloud Config Server (`spring.config.import=optional:configserver:`)",
            "Git-backed Configuration."
          ],
          "videos": [
            {
              "id": "UzE2OkMwMDE6VjAxOlNDRUM",
              "rawKey": "S16:C1:V1",
              "title": "Spring Cloud: External configuration",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/external-configuration",
              "durationText": "5m 57s",
              "durationSeconds": 357,
              "description": "Architecture of centralizing properties across distributed microservices.",
              "categoryTag": "Centralized Configuration",
              "references": [
                {
                  "label": "Spring Cloud Config Reference: Architecture",
                  "url": "https://docs.spring.io/spring-cloud-config/reference/",
                  "description": "Centralized Git/Vault/JDBC configuration store for distributed topologies."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjAyOlNDU1VDUw",
              "rawKey": "S16:C1:V2",
              "title": "Spring Cloud: Setting up config server",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/setting-up-config-server",
              "durationText": "3m 46s",
              "durationSeconds": 226,
              "description": "Configuring `@EnableConfigServer` and pointing to a Git configuration repository.",
              "categoryTag": "Centralized Configuration",
              "references": [
                {
                  "label": "Spring Cloud Config Server Reference",
                  "url": "https://docs.spring.io/spring-cloud-config/reference/server.html",
                  "description": "Configuring `@EnableConfigServer` and backend property sources."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjAzOlNDQ0NT",
              "rawKey": "S16:C1:V3",
              "title": "Spring Cloud: Consuming config server",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/consuming-config-server",
              "durationText": "4m 1s",
              "durationSeconds": 241,
              "description": "Bootstrapping client services to fetch application properties dynamically.",
              "categoryTag": "Centralized Configuration",
              "references": [
                {
                  "label": "Spring Cloud Config Client Reference",
                  "url": "https://docs.spring.io/spring-cloud-config/reference/client.html",
                  "description": "`spring.config.import=configserver:` client configuration."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjA0Ok1EUEVD",
              "rawKey": "S16:C1:V4",
              "title": "Microservices Design Patterns: External configuration",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/external-configuration",
              "durationText": "3m 33s",
              "durationSeconds": 213,
              "description": "Architectural benefits and security implications of external configuration stores.",
              "categoryTag": "Centralized Configuration",
              "references": [
                {
                  "label": "The Twelve-Factor App: Config",
                  "url": "https://12factor.net/config",
                  "description": "Strict separation of configuration from code."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjA1OlNDU0Q",
              "rawKey": "S16:C1:V5",
              "title": "Spring Cloud: Service discovery",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/service-discovery",
              "durationText": "1m 47s",
              "durationSeconds": 107,
              "description": "Problem statement: dynamic IP addressing in distributed cloud environments.",
              "categoryTag": "Service Discovery & Client-Side Load Balancing",
              "references": [
                {
                  "label": "Spring Cloud Netflix Reference: Service Discovery",
                  "url": "https://docs.spring.io/spring-cloud-netflix/reference/spring-cloud-netflix.html#spring-cloud-eureka-server",
                  "description": "Service registry mechanics and cluster coordination."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjA2OlNDU1VF",
              "rawKey": "S16:C1:V6",
              "title": "Spring Cloud: Setting up Eureka",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/setting-up-eureka",
              "durationText": "2m 35s",
              "durationSeconds": 155,
              "description": "Running the Eureka naming server on port 8761 and disabling self-preservation in test profiles.",
              "categoryTag": "Service Discovery & Client-Side Load Balancing",
              "references": [
                {
                  "label": "Spring Cloud Netflix: Eureka Server",
                  "url": "https://docs.spring.io/spring-cloud-netflix/reference/spring-cloud-netflix.html#spring-cloud-eureka-server",
                  "description": "`@EnableEurekaServer` configuration and peer awareness."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjA3OlNDUldF",
              "rawKey": "S16:C1:V7",
              "title": "Spring Cloud: Registering with Eureka",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/registering-with-eureka",
              "durationText": "2m 20s",
              "durationSeconds": 140,
              "description": "Configuring client heartbeat intervals and instance hostname registration.",
              "categoryTag": "Service Discovery & Client-Side Load Balancing",
              "references": [
                {
                  "label": "Spring Cloud Netflix: Registering with Eureka",
                  "url": "https://docs.spring.io/spring-cloud-netflix/reference/spring-cloud-netflix.html#_registering_with_eureka",
                  "description": "Eureka client heartbeat and renewal intervals."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjA4Ok1EUFNE",
              "rawKey": "S16:C1:V8",
              "title": "Microservices Design Patterns: Service discovery",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/service-discovery",
              "durationText": "2m 51s",
              "durationSeconds": 171,
              "description": "Registry pattern comparison (server-side vs client-side registration).",
              "categoryTag": "Service Discovery & Client-Side Load Balancing",
              "references": [
                {
                  "label": "Microservices.io: Service Discovery Pattern",
                  "url": "https://microservices.io/patterns/server-side-discovery.html",
                  "description": "Client-side vs server-side discovery comparison."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjA5OlNDQ1M",
              "rawKey": "S16:C1:V9",
              "title": "Spring Cloud: Consuming services",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/consuming-services",
              "durationText": "3m 13s",
              "durationSeconds": 193,
              "description": "Inter-service communication options in Spring Boot microservices.",
              "categoryTag": "Declarative HTTP with OpenFeign",
              "references": [
                {
                  "label": "Spring Cloud OpenFeign Reference",
                  "url": "https://docs.spring.io/spring-cloud-openfeign/reference/spring-cloud-openfeign.html",
                  "description": "Declarative REST client integration with Spring MVC annotations."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDE6VjEwOlNDQ1dP",
              "rawKey": "S16:C1:V10",
              "title": "Spring Cloud: Consuming with OpenFeign",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/consuming-with-openfeign",
              "durationText": "5m 18s",
              "durationSeconds": 318,
              "description": "Declaring `@FeignClient(name = \"user-service\")` interfaces with Spring MVC annotations.",
              "categoryTag": "Declarative HTTP with OpenFeign",
              "references": [
                {
                  "label": "Spring Cloud OpenFeign: Feign Clients",
                  "url": "https://docs.spring.io/spring-cloud-openfeign/reference/spring-cloud-openfeign.html#spring-cloud-feign-inheritance",
                  "description": "`@FeignClient`, client-side load balancing via Spring Cloud LoadBalancer."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2121
        },
        {
          "id": "16-002",
          "number": 2,
          "title": "API gateway routing and filters",
          "localChapterFile": "002-api-gateway-routing-and-filters.md",
          "keyConcepts": [
            "Spring Cloud Gateway (Netty-based Reactive Engine)",
            "`RouteLocator`",
            "Predicates (`Path`",
            "`Header`",
            "`Method`)",
            "Pre/Post Filters",
            "Rate Limiting",
            "Cross-Origin Resource Sharing (CORS)."
          ],
          "videos": [
            {
              "id": "UzE2OkMwMDI6VjAxOk1EUEdQ",
              "rawKey": "S16:C2:V1",
              "title": "Microservices Design Patterns: Gateway pattern",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/gateway-pattern",
              "durationText": "7m 16s",
              "durationSeconds": 436,
              "description": "Role of the single entrypoint: SSL termination, request routing, authentication, and aggregation.",
              "categoryTag": "API Gateway Architecture & Patterns",
              "references": [
                {
                  "label": "Microservices.io: API Gateway Pattern",
                  "url": "https://microservices.io/patterns/apigateway.html",
                  "description": "Single entry point for all clients in microservice architectures."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDI6VjAyOlNDQUc",
              "rawKey": "S16:C2:V2",
              "title": "Spring Cloud: API gateways",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/api-gateways",
              "durationText": "3m 37s",
              "durationSeconds": 217,
              "description": "Configuring Spring Cloud Gateway to route client requests to downstream services.",
              "categoryTag": "API Gateway Architecture & Patterns",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: How It Works",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/how-it-works.html",
                  "description": "Gateway Handler Mapping and WebFilter pipeline."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDI6VjAzOkNTQk1VQ0ZBQUc",
              "rawKey": "S16:C2:V3",
              "title": "Creating Spring Boot Microservices: Use cases for an API gateway microservice",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/use-cases-for-an-api-gateway-microservice",
              "durationText": "3m 49s",
              "durationSeconds": 229,
              "description": "Gateway responsibilities in separating internal topologies from public clients.",
              "categoryTag": "API Gateway Architecture & Patterns",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: Overview",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/",
                  "description": "Reactive gateway architecture built on Project Reactor and Netty."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDI6VjA0OkNTQk1SVFRKTQ",
              "rawKey": "S16:C2:V4",
              "title": "Creating Spring Boot Microservices: Routing to the JPA microservice",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-jpa-microservice",
              "durationText": "6m 47s",
              "durationSeconds": 407,
              "description": "Writing route definitions with path predicates and uri destination forwards.",
              "categoryTag": "Routing & Filter Implementation",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: RouteLocator Java DSL",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/fluent-java-routes-api.html",
                  "description": "`RouteLocatorBuilder` fluent routing configuration."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDI6VjA1OkNTQk1SVFRNTQ",
              "rawKey": "S16:C2:V5",
              "title": "Creating Spring Boot Microservices: Routing to the MongoDB microservice",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/routing-to-the-mongodb-microservice",
              "durationText": "3m 28s",
              "durationSeconds": 208,
              "description": "Dynamic routing across heterogeneous backend microservices.",
              "categoryTag": "Routing & Filter Implementation",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: GatewayFilter Factories",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/gatewayfilter-factories.html",
                  "description": "`StripPrefix`, `AddRequestHeader`, `RewritePath` filters."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDI6VjA2OkNTQk1BU1NUVEc",
              "rawKey": "S16:C2:V6",
              "title": "Creating Spring Boot Microservices: Add Spring Security to the gateway",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway",
              "durationText": "6m 50s",
              "durationSeconds": 410,
              "description": "Securing routes, token forwarding, and centralized filter chains at the perimeter.",
              "categoryTag": "Routing & Filter Implementation",
              "references": [
                {
                  "label": "Spring Cloud Gateway Reference: Token Relay Filter",
                  "url": "https://docs.spring.io/spring-cloud-gateway/reference/spring-cloud-gateway-server-webflux/gatewayfilter-factories/tokenrelay-factory.html",
                  "description": "Relaying JWT bearer tokens downstream."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1907
        },
        {
          "id": "16-003",
          "number": 3,
          "title": "Resilience4j and fault tolerance",
          "localChapterFile": "003-resilience4j-and-fault-tolerance.md",
          "keyConcepts": [
            "Resilience4j Circuit Breaker States (CLOSED",
            "OPEN",
            "HALF_OPEN)",
            "Sliding Window Metrics",
            "Failure Rate Threshold",
            "Fallback Methods",
            "Retry Pattern with Exponential Backoff",
            "Bulkhead & RateLimiter."
          ],
          "videos": [
            {
              "id": "UzE2OkMwMDM6VjAxOlNDQ0I",
              "rawKey": "S16:C3:V1",
              "title": "Spring Cloud: Circuit breaking",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/circuit-breaking",
              "durationText": "2m 31s",
              "durationSeconds": 151,
              "description": "Preventing cascading failure across interconnected microservices.",
              "categoryTag": "Circuit Breaker Mechanics",
              "references": [
                {
                  "label": "Martin Fowler: Circuit Breaker Pattern",
                  "url": "https://martinfowler.com/bliki/CircuitBreaker.html",
                  "description": "Failing fast when services are unresponsive."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDM6VjAyOlNDU1VBQ0I",
              "rawKey": "S16:C3:V2",
              "title": "Spring Cloud: Setting up a circuit breaker",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/setting-up-a-circuit-breaker",
              "durationText": "4m 56s",
              "durationSeconds": 296,
              "description": "Implementing Resilience4j circuit breakers and configuring fallback responses.",
              "categoryTag": "Circuit Breaker Mechanics",
              "references": [
                {
                  "label": "Resilience4j Documentation: CircuitBreaker",
                  "url": "https://resilience4j.readme.io/docs/circuitbreaker",
                  "description": "Ring-buffer failure tracking, transitions, and fallback methods."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDM6VjAzOkFTRkFERE5SVEE",
              "rawKey": "S16:C3:V3",
              "title": "Advanced SQL for Application Development: Database not responding, timeouts, and exponential backoff",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/database-not-responding-timeouts-and-exponential-backoff",
              "durationText": "4m 11s",
              "durationSeconds": 251,
              "description": "Timeout thresholds, retry policies, and backoff jitter.",
              "categoryTag": "Circuit Breaker Mechanics",
              "references": [
                {
                  "label": "Resilience4j Documentation: Retry",
                  "url": "https://resilience4j.readme.io/docs/retry",
                  "description": "Exponential backoff intervals and jitter."
                }
              ]
            }
          ],
          "totalDurationSeconds": 698
        },
        {
          "id": "16-004",
          "number": 4,
          "title": "Tracing, SLO, and observability",
          "localChapterFile": "004-tracing-slo-and-observability.md",
          "keyConcepts": [
            "Distributed Tracing",
            "Micrometer Tracing",
            "OpenTelemetry Standards",
            "TraceId & SpanId Context Propagation (W3C / B3)",
            "Zipkin / Tempo UI",
            "Prometheus Metrics",
            "Service Level Objectives (SLOs)."
          ],
          "videos": [
            {
              "id": "UzE2OkMwMDQ6VjAxOk1EUFRQ",
              "rawKey": "S16:C4:V1",
              "title": "Microservices Design Patterns: Tracing patterns",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/tracing-patterns",
              "durationText": "2m 36s",
              "durationSeconds": 156,
              "description": "Generating trace identifiers and propagating correlation headers across asynchronous service boundaries.",
              "categoryTag": "Distributed Tracing & Context Propagation",
              "references": [
                {
                  "label": "W3C Trace Context Specification",
                  "url": "https://www.w3.org/TR/trace-context/",
                  "description": "`traceparent` and `tracestate` header standards."
                },
                {
                  "label": "Micrometer Tracing Reference",
                  "url": "https://docs.micrometer.io/tracing/reference/index.html",
                  "description": "Unified tracing facade over OpenTelemetry and Brave."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDQ6VjAyOlNDVA",
              "rawKey": "S16:C4:V2",
              "title": "Spring Cloud: Telemetry",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/telemetry",
              "durationText": "3m 20s",
              "durationSeconds": 200,
              "description": "Exporting trace spans and metrics from Spring Boot actuators to distributed collectors.",
              "categoryTag": "Distributed Tracing & Context Propagation",
              "references": [
                {
                  "label": "Spring Boot Reference: Tracing",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/tracing.html",
                  "description": "OpenTelemetry tracer bridges and Zipkin reporter auto-configuration."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDQ6VjAzOk1EUE1BUA",
              "rawKey": "S16:C4:V3",
              "title": "Microservices Design Patterns: Metrics aggregation patterns",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/metrics-aggregation-patterns",
              "durationText": "4m 52s",
              "durationSeconds": 292,
              "description": "Pulling metrics into Prometheus dashboards to track error rates and p99 latency SLOs.",
              "categoryTag": "Metrics & Logging Aggregation",
              "references": [
                {
                  "label": "Google SRE Book: Monitoring Distributed Systems & SLOs",
                  "url": "https://sre.google/sre-book/monitoring-distributed-systems/",
                  "description": "The Four Golden Signals (Latency, Traffic, Errors, Saturation)."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDQ6VjA0Ok1EUExBUA",
              "rawKey": "S16:C4:V4",
              "title": "Microservices Design Patterns: Log aggregation patterns",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/log-aggregation-patterns",
              "durationText": "5m 13s",
              "durationSeconds": 313,
              "description": "Structured JSON logging and central log indexing correlated by traceId.",
              "categoryTag": "Metrics & Logging Aggregation",
              "references": [
                {
                  "label": "Spring Boot Reference: Custom Log Formatting",
                  "url": "https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.custom-log-configuration",
                  "description": "Structured logging and MDC traceId correlation."
                }
              ]
            }
          ],
          "totalDurationSeconds": 961
        },
        {
          "id": "16-005",
          "number": 5,
          "title": "Saga and event-driven microservices",
          "localChapterFile": "005-saga-and-event-driven-microservices.md",
          "keyConcepts": [
            "Distributed Transactions",
            "Saga Pattern",
            "Choreography vs Orchestration",
            "Compensating Transactions",
            "Transactional Outbox Pattern",
            "Dual-Write Dilemma",
            "Eventual Consistency."
          ],
          "videos": [
            {
              "id": "UzE2OkMwMDU6VjAxOk1EUEFUQk0",
              "rawKey": "S16:C5:V1",
              "title": "Microservices Design Patterns: Atomic transaction-based microservices",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices",
              "durationText": "4m 15s",
              "durationSeconds": 255,
              "description": "Designing Sagas with compensating actions to handle distributed rollback without 2-phase commit (2PC).",
              "categoryTag": "Sagas & Atomic Transactions",
              "references": [
                {
                  "label": "Microservices.io: Saga Pattern",
                  "url": "https://microservices.io/patterns/data/saga.html",
                  "description": "Managing transactions across multiple microservices without distributed locks."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDU6VjAyOk1EUFNTRA",
              "rawKey": "S16:C5:V2",
              "title": "Microservices Design Patterns: Shared service database",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/shared-service-database",
              "durationText": "4m 4s",
              "durationSeconds": 244,
              "description": "Trade-offs and anti-patterns of sharing databases vs transactional decoupling.",
              "categoryTag": "Sagas & Atomic Transactions",
              "references": [
                {
                  "label": "Microservices.io: Transactional Outbox Pattern",
                  "url": "https://microservices.io/patterns/data/transactional-outbox.html",
                  "description": "Reliably publishing events while updating the local database atomically."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDU6VjAzOlNBRE9EUw",
              "rawKey": "S16:C5:V3",
              "title": "Software Architecture DDD: Orchestrated/declarative systems",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/orchestrated-declarative-systems",
              "durationText": "3m 6s",
              "durationSeconds": 186,
              "description": "Orchestrator-driven sagas using workflow state machines.",
              "categoryTag": "Event-Driven Workflows",
              "references": [
                {
                  "label": "Temporal / Camunda: Orchestration vs Choreography",
                  "url": "https://camunda.com/blog/2023/02/orchestration-vs-choreography/",
                  "description": "Central coordinator managing workflow steps and compensations."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDU6VjA0OlNBRENSUw",
              "rawKey": "S16:C5:V4",
              "title": "Software Architecture DDD: Choreographed/reactive systems",
              "url": "https://www.linkedin.com/learning/software-architecture-domain-driven-design/choreographed-reactive-systems",
              "durationText": "3m 0s",
              "durationSeconds": 180,
              "description": "Choreographed sagas where services publish events and trigger subsequent actions independently.",
              "categoryTag": "Event-Driven Workflows",
              "references": [
                {
                  "label": "Microservices.io: Event-Driven Architecture",
                  "url": "https://microservices.io/patterns/data/event-driven-architecture.html",
                  "description": "Loose coupling via domain events and eventual consistency."
                }
              ]
            }
          ],
          "totalDurationSeconds": 865
        },
        {
          "id": "16-006",
          "number": 6,
          "title": "Misc (Distributed locking, ShedLock, Idempotency)",
          "localChapterFile": "006-misc.md",
          "keyConcepts": [
            "Distributed Locks (Redis / ShedLock)",
            "Idempotency Keys (`Idempotency-Key` header)",
            "At-Least-Once Delivery Deduplication",
            "Blue-Green & Canary Deployment Strategies."
          ],
          "videos": [
            {
              "id": "UzE2OkMwMDY6VjAxOk1EUFNQ",
              "rawKey": "S16:C6:V1",
              "title": "Microservices Design Patterns: Sidecar pattern",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/sidecar-pattern",
              "durationText": "4m 39s",
              "durationSeconds": 279,
              "description": "Offloading auxiliary tasks (proxies, secret refresh, log shipping) to sidecar processes.",
              "categoryTag": "Deployment Strategies & Fault Isolation",
              "references": [
                {
                  "label": "Microsoft Azure Architecture Patterns: Sidecar Pattern",
                  "url": "https://learn.microsoft.com/en-us/azure/architecture/patterns/sidecar",
                  "description": "Deploying components of an application into a separate process/container."
                }
              ]
            },
            {
              "id": "UzE2OkMwMDY6VjAyOk1EUENE",
              "rawKey": "S16:C6:V2",
              "title": "Microservices Design Patterns: Continuous delivery",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/continuous-delivery",
              "durationText": "4m 3s",
              "durationSeconds": 243,
              "description": "Automated zero-downtime deployment pipelines, blue-green cutovers, and canary traffic shifting.",
              "categoryTag": "Deployment Strategies & Fault Isolation",
              "references": [
                {
                  "label": "Martin Fowler: BlueGreen Deployment",
                  "url": "https://martinfowler.com/bliki/BlueGreenDeployment.html",
                  "description": "Zero-downtime releases by switching routing between identical production environments."
                },
                {
                  "label": "ShedLock Official Documentation",
                  "url": "https://github.com/lukas-krecan/ShedLock",
                  "description": "Ensuring scheduled tasks execute at most once concurrently across distributed instances."
                }
              ]
            }
          ],
          "totalDurationSeconds": 522
        }
      ],
      "totalVideos": 29,
      "totalDurationSeconds": 7074
    },
    {
      "id": "section-17",
      "slug": "17-messaging-kafka-rabbitmq",
      "number": 17,
      "title": "Messaging (Kafka & RabbitMQ)",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\17-messaging-kafka-rabbitmq.md",
      "recommendedCourses": [
        {
          "title": "Apache Kafka Essential Training: Getting Started",
          "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044",
          "author": "Emanuel Henri",
          "duration": "1h 45m",
          "scope": ""
        },
        {
          "title": "Data Resilience with Spring and RabbitMQ Event Streaming",
          "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming",
          "author": "Kevin Bowersox",
          "duration": "2h 10m",
          "scope": ""
        },
        {
          "title": "Learning RabbitMQ: Efficient Message Queuing",
          "url": "https://www.linkedin.com/learning/learning-rabbitmq-efficient-message-queuing",
          "author": "Barron Stone",
          "duration": "1h 35m",
          "scope": ""
        },
        {
          "title": "Event-Driven Architecture in Practice",
          "url": "https://www.linkedin.com/learning/event-driven-architecture",
          "author": "Mark Richards",
          "duration": "2h 20m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "17-001",
          "number": 1,
          "title": "Kafka producer & consumer",
          "localChapterFile": "001-kafka-producer-consumer.md",
          "keyConcepts": [
            "Kafka Architecture",
            "Brokers",
            "Topics & Partitions",
            "Consumer Groups & Offsets",
            "Spring `KafkaTemplate`",
            "`@KafkaListener`",
            "Deserialization / Error Handlers",
            "Dead Letter Publishing (`DeadLetterPublishingRecoverer`)."
          ],
          "videos": [
            {
              "id": "UzE3OkMwMDE6VjAxOktFVE1R",
              "rawKey": "S17:C1:V1",
              "title": "Kafka Essential Training: Message queues",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/message-queues",
              "durationText": "3m 16s",
              "durationSeconds": 196,
              "description": "Introduction to asynchronous decoupled event streaming.",
              "categoryTag": "Kafka Core Concepts & Storage Model",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Introduction",
                  "url": "https://kafka.apache.org/documentation/#intro_topics",
                  "description": "Event streaming platform foundations and distributed commit log."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjAyOktFVFdJSw",
              "rawKey": "S17:C1:V2",
              "title": "Kafka Essential Training: What is Kafka?",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/what-is-kafka",
              "durationText": "2m 5s",
              "durationSeconds": 125,
              "description": "High-throughput distributed append-only log architecture.",
              "categoryTag": "Kafka Core Concepts & Storage Model",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Design Principles",
                  "url": "https://kafka.apache.org/documentation/#design",
                  "description": "High throughput, linear disk I/O, zero-copy data transfer."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjAzOktFVFQ",
              "rawKey": "S17:C1:V3",
              "title": "Kafka Essential Training: Topics",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/topics",
              "durationText": "2m 16s",
              "durationSeconds": 136,
              "description": "Defining event categories and organizing event records.",
              "categoryTag": "Kafka Core Concepts & Storage Model",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Topics and Logs",
                  "url": "https://kafka.apache.org/documentation/#intro_topics",
                  "description": "Topic anatomy, partitioned append-only order."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjA0OktFVEtC",
              "rawKey": "S17:C1:V4",
              "title": "Kafka Essential Training: Kafka brokers",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/kafka-brokers",
              "durationText": "1m 51s",
              "durationSeconds": 111,
              "description": "Cluster nodes, leader election, and partition replication.",
              "categoryTag": "Kafka Core Concepts & Storage Model",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Replication",
                  "url": "https://kafka.apache.org/documentation/#replication",
                  "description": "Broker cluster leaders, followers, and In-Sync Replicas (ISR)."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjA1OktFVExJSw",
              "rawKey": "S17:C1:V5",
              "title": "Kafka Essential Training: Logs in Kafka",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/logs-in-kafka",
              "durationText": "1m 39s",
              "durationSeconds": 99,
              "description": "Immutable commit log storage and disk-backed message retention.",
              "categoryTag": "Kafka Core Concepts & Storage Model",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Log Compaction",
                  "url": "https://kafka.apache.org/documentation/#compaction",
                  "description": "Retaining the latest value per message key on disk."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjA2OktFVFBBQw",
              "rawKey": "S17:C1:V6",
              "title": "Kafka Essential Training: Producers and consumers",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/producers-and-consumers",
              "durationText": "3m 26s",
              "durationSeconds": 206,
              "description": "Roles in writing and reading from distributed topics.",
              "categoryTag": "Kafka Core Concepts & Storage Model",
              "references": [
                {
                  "label": "Spring for Apache Kafka Reference: Overview",
                  "url": "https://docs.spring.io/spring-kafka/reference/",
                  "description": "Spring integration for Apache Kafka."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjA3OktFVElUUA",
              "rawKey": "S17:C1:V7",
              "title": "Kafka Essential Training: Intro to partitions",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/intro-to-partitions",
              "durationText": "3m 13s",
              "durationSeconds": 193,
              "description": "Scalability through topic partitioning and parallel throughput.",
              "categoryTag": "Partitions, Keys & Consumer Groups",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Distribution & Partitioning",
                  "url": "https://kafka.apache.org/documentation/#intro_distribution",
                  "description": "Parallelism across cluster nodes."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjA4OktFVFBXSw",
              "rawKey": "S17:C1:V8",
              "title": "Kafka Essential Training: Publishing with keys",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-with-keys",
              "durationText": "1m 33s",
              "durationSeconds": 93,
              "description": "Key-based hashing to guarantee in-order delivery per business entity.",
              "categoryTag": "Partitions, Keys & Consumer Groups",
              "references": [
                {
                  "label": "Apache Kafka API: `org.apache.kafka.clients.producer.ProducerRecord`",
                  "url": "https://kafka.apache.org/36/javadoc/org/apache/kafka/clients/producer/ProducerRecord.html",
                  "description": "Record headers, timestamps, and key hashing algorithms (`murmur2`)."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjA5OktFVENH",
              "rawKey": "S17:C1:V9",
              "title": "Kafka Essential Training: Consumer groups",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-groups",
              "durationText": "3m 9s",
              "durationSeconds": 189,
              "description": "Horizontal scaling: rebalancing partitions across consumers in a group.",
              "categoryTag": "Partitions, Keys & Consumer Groups",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Consumer Groups",
                  "url": "https://kafka.apache.org/documentation/#intro_consumers",
                  "description": "Partition assignment strategies and consumer rebalance protocols."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjEwOktFVENPTQ",
              "rawKey": "S17:C1:V10",
              "title": "Kafka Essential Training: Consumer offset management",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consumer-offset-management",
              "durationText": "3m 55s",
              "durationSeconds": 235,
              "description": "Tracking read positions in `__consumer_offsets`, auto-commit vs manual commit.",
              "categoryTag": "Partitions, Keys & Consumer Groups",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Offset Management",
                  "url": "https://kafka.apache.org/documentation/#consumerconfigs_enable.auto.commit",
                  "description": "`enable.auto.commit` vs manual ack with `Acknowledgment.acknowledge()`."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjExOktFVENBUElK",
              "rawKey": "S17:C1:V11",
              "title": "Kafka Essential Training: Creating a producer in Java",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-producer-in-java",
              "durationText": "2m 13s",
              "durationSeconds": 133,
              "description": "Configuring Java client properties, serializers, and producer instances.",
              "categoryTag": "Java Producers & Consumers",
              "references": [
                {
                  "label": "Spring for Apache Kafka: Sending Messages",
                  "url": "https://docs.spring.io/spring-kafka/reference/kafka/sending-messages.html",
                  "description": "Using `KafkaTemplate.send()` with `CompletableFuture<SendResult>`."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjEyOktFVFBNSUo",
              "rawKey": "S17:C1:V12",
              "title": "Kafka Essential Training: Publishing messages in Java",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/publishing-messages-in-java",
              "durationText": "45s",
              "durationSeconds": 45,
              "description": "Sending `ProducerRecord` objects and evaluating future metadata.",
              "categoryTag": "Java Producers & Consumers",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Producer Configurations",
                  "url": "https://kafka.apache.org/documentation/#producerconfigs",
                  "description": "`acks=all`, `retries`, and idempotence."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjEzOktFVENBQ0lK",
              "rawKey": "S17:C1:V13",
              "title": "Kafka Essential Training: Creating a consumer in Java",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/creating-a-consumer-in-java",
              "durationText": "2m 19s",
              "durationSeconds": 139,
              "description": "Subscribing to topics and poll loops.",
              "categoryTag": "Java Producers & Consumers",
              "references": [
                {
                  "label": "Spring for Apache Kafka: Receiving Messages",
                  "url": "https://docs.spring.io/spring-kafka/reference/kafka/receiving-messages/listener-annotation.html",
                  "description": "`@KafkaListener` method signatures, payload injection, and container factory setup."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDE6VjE0OktFVENNSUo",
              "rawKey": "S17:C1:V14",
              "title": "Kafka Essential Training: Consuming messages in Java",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/consuming-messages-in-java",
              "durationText": "1m 49s",
              "durationSeconds": 109,
              "description": "Iterating `ConsumerRecords` and deserializing message payloads.",
              "categoryTag": "Java Producers & Consumers",
              "references": [
                {
                  "label": "Spring for Apache Kafka: Dead Letter Publishing",
                  "url": "https://docs.spring.io/spring-kafka/reference/kafka/annotation-error-handling.html#dead-letters",
                  "description": "`DeadLetterPublishingRecoverer` and `DefaultErrorHandler` for poison pills."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2009
        },
        {
          "id": "17-002",
          "number": 2,
          "title": "RabbitMQ and AMQP",
          "localChapterFile": "002-rabbitmq-and-amqp.md",
          "keyConcepts": [
            "Advanced Message Queuing Protocol (AMQP 0-9-1)",
            "Exchanges (Direct",
            "Topic",
            "Fanout",
            "Headers)",
            "Queues",
            "Bindings & Routing Keys",
            "Spring AMQP `RabbitTemplate`",
            "`@RabbitListener`",
            "Dead-Letter Exchanges (DLX)."
          ],
          "videos": [
            {
              "id": "UzE3OkMwMDI6VjAxOlNSUklSRkRS",
              "rawKey": "S17:C2:V1",
              "title": "Spring & RabbitMQ Resilience: Introducing RabbitMQ for data resilience",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/introducing-rabbitmq-for-data-resilience",
              "durationText": "6m 2s",
              "durationSeconds": 362,
              "description": "AMQP architecture vs traditional brokered message queues.",
              "categoryTag": "AMQP Protocol & Topology",
              "references": [
                {
                  "label": "RabbitMQ Documentation: Core Concepts",
                  "url": "https://www.rabbitmq.com/docs",
                  "description": "Message brokers, publishers, channels, queues, and consumers."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDI6VjAyOlNSUkNXUkVBUQ",
              "rawKey": "S17:C2:V2",
              "title": "Spring & RabbitMQ Resilience: Communicate with RabbitMQ exchanges and queues",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/communicate-with-rabbitmq-exchanges-and-queues",
              "durationText": "5m 44s",
              "durationSeconds": 344,
              "description": "Binding queues to exchanges with routing keys and wildcard topic matching.",
              "categoryTag": "AMQP Protocol & Topology",
              "references": [
                {
                  "label": "RabbitMQ Documentation: Exchanges and Exchange Types",
                  "url": "https://www.rabbitmq.com/docs/exchanges",
                  "description": "Direct, Fanout, Topic (`*` and `#` routing patterns), Headers."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDI6VjAzOlNSUkNSV1JRUQ",
              "rawKey": "S17:C2:V3",
              "title": "Spring & RabbitMQ Resilience: Consuming reliable with RabbitMQ quorum queues",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/consuming-reliable-with-rabbitmq-quorum-queues",
              "durationText": "4m 26s",
              "durationSeconds": 266,
              "description": "High-availability queues backed by the Raft consensus algorithm.",
              "categoryTag": "AMQP Protocol & Topology",
              "references": [
                {
                  "label": "RabbitMQ Documentation: Quorum Queues",
                  "url": "https://www.rabbitmq.com/docs/quorum-queues",
                  "description": "Replicated FIFO queues using Raft for data safety and fault tolerance."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDI6VjA0OlNSUkNXUlM",
              "rawKey": "S17:C2:V4",
              "title": "Spring & RabbitMQ Resilience: Consuming with RabbitMQ Streams",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/consuming-with-rabbitmq-streams",
              "durationText": "3m 21s",
              "durationSeconds": 201,
              "description": "Log-based messaging semantics inside RabbitMQ.",
              "categoryTag": "AMQP Protocol & Topology",
              "references": [
                {
                  "label": "RabbitMQ Documentation: Streams",
                  "url": "https://www.rabbitmq.com/docs/streams",
                  "description": "High-throughput persistent stream storage and time-travel replay."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDI6VjA1OlNSUklTQVJGUg",
              "rawKey": "S17:C2:V5",
              "title": "Spring & RabbitMQ Resilience: Introducing Spring and RabbitMQ for resiliency",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/introducing-spring-and-rabbitmq-for-resiliency",
              "durationText": "6m 10s",
              "durationSeconds": 370,
              "description": "Configuring `spring-boot-starter-amqp` and `ConnectionFactory`.",
              "categoryTag": "Spring Boot AMQP Integration",
              "references": [
                {
                  "label": "Spring AMQP Reference: Overview",
                  "url": "https://docs.spring.io/spring-amqp/reference/",
                  "description": "Spring Boot AMQP starter, auto-configured connection factories."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDI6VjA2OlNSUlBSV1NBUg",
              "rawKey": "S17:C2:V6",
              "title": "Spring & RabbitMQ Resilience: Publishing reliably with Spring and RabbitMQ",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/publishing-reliably-with-spring-and-rabbitmq",
              "durationText": "6m 27s",
              "durationSeconds": 387,
              "description": "Using `RabbitTemplate.convertAndSend` with publisher confirms and mandatory flags.",
              "categoryTag": "Spring Boot AMQP Integration",
              "references": [
                {
                  "label": "Spring AMQP Reference: RabbitTemplate",
                  "url": "https://docs.spring.io/spring-amqp/reference/amqp/template.html",
                  "description": "Publishing messages, JSON converters, and publisher confirms/returns."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDI6VjA3OlNSUkNSV1NBUlE",
              "rawKey": "S17:C2:V7",
              "title": "Spring & RabbitMQ Resilience: Consuming reliably with Spring and RabbitMQ quorum queues",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/consuming-reliably-with-spring-and-rabbitmq-quorum-queues",
              "durationText": "13m 4s",
              "durationSeconds": 784,
              "description": "Wiring `@RabbitListener`, manual ACKs, and Dead Letter Exchanges for poison messages.",
              "categoryTag": "Spring Boot AMQP Integration",
              "references": [
                {
                  "label": "Spring AMQP Reference: Annotation-driven Listener Endpoints",
                  "url": "https://docs.spring.io/spring-amqp/reference/amqp/receiving-messages/async-annotation-driven.html",
                  "description": "`@RabbitListener`, acknowledge modes (`MANUAL`, `AUTO`), and DLX redirection."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2714
        },
        {
          "id": "17-003",
          "number": 3,
          "title": "Transactional outbox and CDC",
          "localChapterFile": "003-transactional-outbox-and-cdc.md",
          "keyConcepts": [
            "Dual-Write Dilemma",
            "Transactional Outbox Pattern",
            "Atomic Database Transactions",
            "Change Data Capture (CDC)",
            "Debezium Connector",
            "Kafka Connect."
          ],
          "videos": [
            {
              "id": "UzE3OkMwMDM6VjAxOlNSUlVEUg",
              "rawKey": "S17:C3:V1",
              "title": "Spring & RabbitMQ Resilience: Understanding data resiliency",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/understanding-data-resiliency",
              "durationText": "4m 3s",
              "durationSeconds": 243,
              "description": "Why updating a relational database and publishing to a message broker in the same method without 2PC causes data loss.",
              "categoryTag": "Dual-Write Problem & Data Consistency",
              "references": [
                {
                  "label": "Microservices.io: Transactional Outbox Pattern",
                  "url": "https://microservices.io/patterns/data/transactional-outbox.html",
                  "description": "Solving the dual-write problem using local database transactions."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDM6VjAyOk1EUEFUQk0",
              "rawKey": "S17:C3:V2",
              "title": "Microservices Design Patterns: Atomic transaction-based microservices",
              "url": "https://www.linkedin.com/learning/microservices-design-patterns-23454771/atomic-transaction-based-microservices",
              "durationText": "4m 15s",
              "durationSeconds": 255,
              "description": "Designing atomic storage boundaries and asynchronous reconciliation.",
              "categoryTag": "Dual-Write Problem & Data Consistency",
              "references": [
                {
                  "label": "Martin Fowler: Transactional Outbox",
                  "url": "https://microservices.io/patterns/data/transactional-outbox.html",
                  "description": "Persisting outgoing messages in a database table as part of domain transaction."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDM6VjAzOkFEUFdTQVNDU1M",
              "rawKey": "S17:C3:V3",
              "title": "AI Data Pipelines with Spring: API Spring Cloud Stream source with RabbitMQ",
              "url": "https://www.linkedin.com/learning/ai-data-pipelines-with-spring/api-spring-cloud-stream-source-with-rabbitmq",
              "durationText": "7m 8s",
              "durationSeconds": 428,
              "description": "Decoupled event sourcing from streaming pipeline backends.",
              "categoryTag": "CDC Pipelines & Event Streaming",
              "references": [
                {
                  "label": "Spring Cloud Stream Reference: Core Concepts",
                  "url": "https://docs.spring.io/spring-cloud-stream/reference/",
                  "description": "Binder abstraction connecting Spring applications to message brokers."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDM6VjA0OlNSUkNSV1NBUlM",
              "rawKey": "S17:C3:V4",
              "title": "Spring & RabbitMQ Resilience: Consuming reliably with Spring and RabbitMQ Streams",
              "url": "https://www.linkedin.com/learning/data-resilience-with-spring-and-rabbitmq-event-streaming/consuming-reliably-with-spring-and-rabbitmq-streams",
              "durationText": "9m 21s",
              "durationSeconds": 561,
              "description": "Reading continuous event stream changes with high throughput.",
              "categoryTag": "CDC Pipelines & Event Streaming",
              "references": [
                {
                  "label": "Debezium Documentation: Outbox Event Router",
                  "url": "https://debezium.io/documentation/reference/stable/transformations/outbox-event-router.html",
                  "description": "Capturing database outbox table inserts via WAL and publishing to Kafka."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1487
        },
        {
          "id": "17-004",
          "number": 4,
          "title": "Misc (Schema registry, Avro, Idempotency)",
          "localChapterFile": "004-misc.md",
          "keyConcepts": [
            "Confluent Schema Registry",
            "Apache Avro Schemas",
            "Backward/Forward Compatibility",
            "Log Compaction",
            "Idempotent Producers (`enable.idempotence=true`)",
            "Exactly-Once Semantics (EOS)."
          ],
          "videos": [
            {
              "id": "UzE3OkMwMDQ6VjAxOktFVE0",
              "rawKey": "S17:C4:V1",
              "title": "Kafka Essential Training: Messages",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/messages",
              "durationText": "3m 33s",
              "durationSeconds": 213,
              "description": "Message payloads, headers, schema validation, and serialization protocols.",
              "categoryTag": "Message Contracts & Enterprise Kafka",
              "references": [
                {
                  "label": "Apache Avro Documentation",
                  "url": "https://avro.apache.org/docs/current/",
                  "description": "Compact binary serialization system with JSON schema definition."
                },
                {
                  "label": "Confluent Schema Registry Overview",
                  "url": "https://docs.confluent.io/platform/current/schema-registry/index.html",
                  "description": "Enforcing schema evolution compatibility rules (`BACKWARD`, `FORWARD`, `FULL`)."
                }
              ]
            },
            {
              "id": "UzE3OkMwMDQ6VjAyOktFVElLSVRF",
              "rawKey": "S17:C4:V2",
              "title": "Kafka Essential Training: Implementing Kafka in the enterprise",
              "url": "https://www.linkedin.com/learning/apache-kafka-essential-training-getting-started-22398044/articles/implementing-kafka-in-the-enterprise",
              "durationText": "2m 30s",
              "durationSeconds": 150,
              "description": "Best practices for enterprise topic governance, schemas, and resilience.",
              "categoryTag": "Message Contracts & Enterprise Kafka",
              "references": [
                {
                  "label": "Apache Kafka Documentation: Exactly Once Semantics (EOS)",
                  "url": "https://kafka.apache.org/documentation/#semantics",
                  "description": "Idempotent producers and transactional messaging across partitions."
                }
              ]
            }
          ],
          "totalDurationSeconds": 363
        }
      ],
      "totalVideos": 27,
      "totalDurationSeconds": 6573
    },
    {
      "id": "section-18",
      "slug": "18-containerisation-deploy",
      "number": 18,
      "title": "Containerization & Deployment",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\18-containerisation-deploy.md",
      "recommendedCourses": [
        {
          "title": "Kubernetes for Java Developers",
          "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers",
          "author": "Arun Gupta",
          "duration": "2h 25m",
          "scope": ""
        },
        {
          "title": "Running Spring Boot in Production",
          "url": "https://www.linkedin.com/learning/running-spring-boot-in-production",
          "author": "Frank Moley",
          "duration": "2h 15m",
          "scope": ""
        },
        {
          "title": "Docker for Java Developers",
          "url": "https://www.linkedin.com/learning/docker-for-java-developers",
          "author": "Arun Gupta",
          "duration": "2h 10m",
          "scope": ""
        },
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Frank Moley",
          "duration": "2h 45m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "18-001",
          "number": 1,
          "title": "Dockerfile and buildpacks",
          "localChapterFile": "001-dockerfile-and-buildpacks.md",
          "keyConcepts": [
            "Multi-Stage Dockerfiles",
            "Layered JARs (`layertools`)",
            "Cloud Native Buildpacks (`./mvnw spring-boot:build-image`)",
            "Jib Maven Plugin",
            "Non-Root Users (`USER spring`)",
            "Distroless & Minimal Custom JREs."
          ],
          "videos": [
            {
              "id": "UzE4OkMwMDE6VjAxOktGSkREVw",
              "rawKey": "S18:C1:V1",
              "title": "Kubernetes for Java Developers: Docker workflow",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/docker-workflow",
              "durationText": "2m 29s",
              "durationSeconds": 149,
              "description": "Containerizing Java applications from local build to runtime container.",
              "categoryTag": "Docker Image Construction for Java",
              "references": [
                {
                  "label": "Docker Documentation: Get Started with Java",
                  "url": "https://docs.docker.com/language/java/",
                  "description": "Containerizing Java applications and best practices."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDE6VjAyOktGSkRCQURJVUE",
              "rawKey": "S18:C1:V2",
              "title": "Kubernetes for Java Developers: Build a Docker image using a Dockerfile",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/build-a-docker-image-using-a-dockerfile",
              "durationText": "5m 33s",
              "durationSeconds": 333,
              "description": "Writing clean multi-stage Dockerfiles for Maven builds and separating build tools from runtime.",
              "categoryTag": "Docker Image Construction for Java",
              "references": [
                {
                  "label": "Spring Boot Reference: Layered Dockerfiles",
                  "url": "https://docs.spring.io/spring-boot/reference/packaging/container-images/dockerfiles.html",
                  "description": "`layertools` extraction and multi-stage caching optimization."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDE6VjAzOktGSkRXV0FEQw",
              "rawKey": "S18:C1:V3",
              "title": "Kubernetes for Java Developers: Work with a Docker container",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/work-with-a-docker-container",
              "durationText": "3m 59s",
              "durationSeconds": 239,
              "description": "Running, port-mapping, and inspecting Java container workloads.",
              "categoryTag": "Docker Image Construction for Java",
              "references": [
                {
                  "label": "Docker Documentation: Run Containers",
                  "url": "https://docs.docker.com/engine/reference/commandline/run/",
                  "description": "Port binding, environment variable injection, and resource constraints."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDE6VjA0OktGSkRCQURJVUo",
              "rawKey": "S18:C1:V4",
              "title": "Kubernetes for Java Developers: Build a Docker image using Jib",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/build-a-docker-image-using-jib",
              "durationText": "5m 31s",
              "durationSeconds": 331,
              "description": "Daemonless image construction using Google's Jib without writing Dockerfiles.",
              "categoryTag": "Docker Image Construction for Java",
              "references": [
                {
                  "label": "GoogleContainerTools/jib Documentation",
                  "url": "https://github.com/GoogleContainerTools/jib/tree/master/jib-maven-plugin",
                  "description": "Containerizing Java applications without a Docker daemon."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDE6VjA1OktGSkRNRElVQ0o",
              "rawKey": "S18:C1:V5",
              "title": "Kubernetes for Java Developers: Minimal Docker image using custom JRE",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/minimal-docker-image-using-custom-jre",
              "durationText": "4m 46s",
              "durationSeconds": 286,
              "description": "Using `jlink` to produce stripped custom runtimes, slashing image sizes from 500MB to under 80MB.",
              "categoryTag": "Docker Image Construction for Java",
              "references": [
                {
                  "label": "Java SE 21 Tools Reference: `jlink`",
                  "url": "https://docs.oracle.com/en/java/javase/21/docs/specs/man/jlink.html",
                  "description": "Assembling and optimizing a set of modules and their dependencies into a custom runtime image."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDE6VjA2OkNTQk1EQU0",
              "rawKey": "S18:C1:V6",
              "title": "Creating Spring Boot Microservices: Dockerizing a microservice",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/dockerizing-a-microservice",
              "durationText": "6m 48s",
              "durationSeconds": 408,
              "description": "Packaging Spring Boot applications into optimized OCI container images.",
              "categoryTag": "Spring Boot Native Container Packaging",
              "references": [
                {
                  "label": "Spring Boot Reference: Cloud Native Buildpacks",
                  "url": "https://docs.spring.io/spring-boot/reference/packaging/container-images/cloud-native-buildpacks.html",
                  "description": "`spring-boot:build-image` goal using Paketo buildpacks."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDE6VjA3OkNTQk1XRA",
              "rawKey": "S18:C1:V7",
              "title": "Creating Spring Boot Microservices: Why Docker?",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/why-docker",
              "durationText": "2m 33s",
              "durationSeconds": 153,
              "description": "Consistency guarantees across developer machines, CI runners, and Kubernetes clusters.",
              "categoryTag": "Spring Boot Native Container Packaging",
              "references": [
                {
                  "label": "Open Container Initiative (OCI) Image Specification",
                  "url": "https://opencontainers.org/",
                  "description": "Standard specifications for container formats and runtimes."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1899
        },
        {
          "id": "18-002",
          "number": 2,
          "title": "GraalVM native image",
          "localChapterFile": "002-graalvm-native-image.md",
          "keyConcepts": [
            "GraalVM Native Image",
            "Spring AOT (Ahead-Of-Time Processing)",
            "Reachability Metadata (`reflect-config.json`)",
            "Native Compilation (`./mvnw -Pnative native:compile`)",
            "Sub-50ms Cold Starts",
            "Reduced Memory Footprint (RSS)."
          ],
          "videos": [
            {
              "id": "UzE4OkMwMDI6VjAxOlJTQklQR05XUw",
              "rawKey": "S18:C2:V1",
              "title": "Running Spring Boot in Production: Going native with Spring",
              "url": "https://www.linkedin.com/learning/running-spring-boot-in-production/going-native-with-spring",
              "durationText": "13m 34s",
              "durationSeconds": 814,
              "description": "Comprehensive walkthrough of compiling Spring Boot 3 applications to standalone OS native binaries using GraalVM. Explores closed-world assumptions, AOT code generation, reflection metadata hints, and instant startup metrics.",
              "categoryTag": "GraalVM Native Image Compilation",
              "references": [
                {
                  "label": "GraalVM Native Image Documentation",
                  "url": "https://www.graalvm.org/latest/reference-manual/native-image/",
                  "description": "Ahead-of-time compilation of Java applications into native executables."
                },
                {
                  "label": "Spring Boot Reference: Introducing GraalVM Native Images",
                  "url": "https://docs.spring.io/spring-boot/reference/packaging/native-image/introducing-graalvm-native-images.html",
                  "description": "Closed-world assumption, build-time code generation, and memory efficiency."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDI6VjAyOktGSkRNRElVQ0o",
              "rawKey": "S18:C2:V2",
              "title": "Kubernetes for Java Developers: Minimal Docker image using custom JRE",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/minimal-docker-image-using-custom-jre",
              "durationText": "4m 46s",
              "durationSeconds": 286,
              "description": "Comparing traditional JVM memory footprints with stripped native containers in serverless and containerized environments.",
              "categoryTag": "Container Sizing & Memory Considerations",
              "references": [
                {
                  "label": "Spring Boot Reference: Reachability Metadata",
                  "url": "https://docs.spring.io/spring-boot/reference/packaging/native-image/advanced-topics.html#packaging.native-image.advanced.reachability-metadata",
                  "description": "Configuring reflection, serialization, and proxy metadata hints with `@RegisterReflectionForBinding`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1100
        },
        {
          "id": "18-003",
          "number": 3,
          "title": "Kubernetes and Helm",
          "localChapterFile": "003-kubernetes-and-helm.md",
          "keyConcepts": [
            "Kubernetes Objects (Deployment",
            "Service",
            "Ingress",
            "ConfigMap",
            "Secret)",
            "Spring Boot Health Probes (`/actuator/health/liveness`",
            "`/actuator/health/readiness`)",
            "Helm Charts (`templates/`",
            "`values.yaml`)",
            "Rolling Updates & Graceful Shutdown."
          ],
          "videos": [
            {
              "id": "UzE4OkMwMDM6VjAxOktGSkRLQ0FJ",
              "rawKey": "S18:C3:V1",
              "title": "Kubernetes for Java Developers: Kubernetes concepts and instantiation",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/kubernetes-concepts-and-instantiation",
              "durationText": "4m 54s",
              "durationSeconds": 294,
              "description": "Pods, replica sets, controllers, and scheduler architecture.",
              "categoryTag": "Kubernetes Architecture & Manifests",
              "references": [
                {
                  "label": "Kubernetes Documentation: Core Concepts",
                  "url": "https://kubernetes.io/docs/concepts/",
                  "description": "Control plane, nodes, pods, and workload controllers."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDM6VjAyOktGSkRLUg",
              "rawKey": "S18:C3:V2",
              "title": "Kubernetes for Java Developers: Kubernetes resources",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/kubernetes-resources",
              "durationText": "4m 13s",
              "durationSeconds": 253,
              "description": "Defining declarative YAML specifications for enterprise Java applications.",
              "categoryTag": "Kubernetes Architecture & Manifests",
              "references": [
                {
                  "label": "Kubernetes Documentation: Deployments",
                  "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
                  "description": "Declarative updates for Pods and ReplicaSets."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDM6VjAzOktGSkRHU1dN",
              "rawKey": "S18:C3:V3",
              "title": "Kubernetes for Java Developers: Getting started with Minikube",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/getting-started-with-minikube",
              "durationText": "3m 19s",
              "durationSeconds": 199,
              "description": "Standing up a local single-node Kubernetes cluster for developer testing.",
              "categoryTag": "Kubernetes Architecture & Manifests",
              "references": [
                {
                  "label": "Minikube Documentation",
                  "url": "https://minikube.sigs.k8s.io/docs/",
                  "description": "Local Kubernetes engine for testing manifests."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDM6VjA0OktGSkREVVNN",
              "rawKey": "S18:C3:V4",
              "title": "Kubernetes for Java Developers: Deploy using standalone manifests",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/deploy-using-standalone-manifests",
              "durationText": "4m 29s",
              "durationSeconds": 269,
              "description": "Deploying Spring Boot apps, wiring Services, and exposing container ports.",
              "categoryTag": "Kubernetes Architecture & Manifests",
              "references": [
                {
                  "label": "Kubernetes Documentation: Configure Liveness and Readiness Probes",
                  "url": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
                  "description": "Probing container health with HTTP GET requests."
                },
                {
                  "label": "Spring Boot Reference: Kubernetes Probes",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/endpoints.html#actuator.endpoints.kubernetes-probes",
                  "description": "Automated integration with `/actuator/health/liveness` and `/actuator/health/readiness`."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDM6VjA1OktGSkRJVEhD",
              "rawKey": "S18:C3:V5",
              "title": "Kubernetes for Java Developers: Introduction to Helm charts",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/introduction-to-helm-charts",
              "durationText": "5m 38s",
              "durationSeconds": 338,
              "description": "Understanding Helm as the package manager for Kubernetes.",
              "categoryTag": "Packaging & Templating with Helm",
              "references": [
                {
                  "label": "Helm Documentation: Introduction",
                  "url": "https://helm.sh/docs/intro/quickstart/",
                  "description": "The package manager for Kubernetes applications."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDM6VjA2OktGSkREVUhD",
              "rawKey": "S18:C3:V6",
              "title": "Kubernetes for Java Developers: Deploy using Helm charts",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/deploy-using-helm-charts",
              "durationText": "4m 18s",
              "durationSeconds": 258,
              "description": "Parameterizing environment properties, secrets, and replicas using `values.yaml`.",
              "categoryTag": "Packaging & Templating with Helm",
              "references": [
                {
                  "label": "Helm Documentation: Chart Template Guide",
                  "url": "https://helm.sh/docs/chart_template_guide/",
                  "description": "Templating manifests, values files, and release management."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDM6VjA3OktGSkRJVFNNQUk",
              "rawKey": "S18:C3:V7",
              "title": "Kubernetes for Java Developers: Introduction to service mesh and Istio",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/introduction-to-service-mesh-and-istio",
              "durationText": "6m 32s",
              "durationSeconds": 392,
              "description": "Istio sidecar injection, mTLS, and distributed routing.",
              "categoryTag": "Advanced Service Mesh & Traffic Management",
              "references": [
                {
                  "label": "Istio Documentation: What is Istio?",
                  "url": "https://istio.io/latest/docs/concepts/what-is-istio/",
                  "description": "Service mesh architecture, Envoy sidecars, and zero-trust mTLS."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDM6VjA4OktGSkRUU1VJ",
              "rawKey": "S18:C3:V8",
              "title": "Kubernetes for Java Developers: Traffic shifting using Istio",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/traffic-shifting-using-istio",
              "durationText": "3m 17s",
              "durationSeconds": 197,
              "description": "Canary and blue-green traffic shifting across service versions.",
              "categoryTag": "Advanced Service Mesh & Traffic Management",
              "references": [
                {
                  "label": "Istio Documentation: Traffic Management",
                  "url": "https://istio.io/latest/docs/concepts/traffic-management/",
                  "description": "VirtualService and DestinationRule configurations."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2200
        },
        {
          "id": "18-004",
          "number": 4,
          "title": "Misc (CI/CD, ArgoCD, Container Security)",
          "localChapterFile": "004-misc.md",
          "keyConcepts": [
            "GitHub Actions CI Pipelines",
            "GitOps with ArgoCD",
            "Trivy Image Vulnerability Scanning",
            "Resource Requests & Limits (`resources.requests.cpu`",
            "`resources.limits.memory`)."
          ],
          "videos": [
            {
              "id": "UzE4OkMwMDQ6VjAxOktGSkRT",
              "rawKey": "S18:C4:V1",
              "title": "Kubernetes for Java Developers: Skaffold",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/skaffold",
              "durationText": "7m 3s",
              "durationSeconds": 423,
              "description": "Continuous developer feedback loops: auto-building and auto-deploying code directly into Kubernetes.",
              "categoryTag": "Pipelines & Cloud Deployment Automation",
              "references": [
                {
                  "label": "Skaffold Documentation",
                  "url": "https://skaffold.dev/docs/",
                  "description": "Easy and repeatable Kubernetes development workflows."
                }
              ]
            },
            {
              "id": "UzE4OkMwMDQ6VjAyOktGSkRBQw",
              "rawKey": "S18:C4:V2",
              "title": "Kubernetes for Java Developers: AWS CodePipeline",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/aws-codepipeline",
              "durationText": "9m 6s",
              "durationSeconds": 546,
              "description": "Automated multi-stage build, container scanning, and cluster deployment pipelines.",
              "categoryTag": "Pipelines & Cloud Deployment Automation",
              "references": [
                {
                  "label": "Argo CD Documentation",
                  "url": "https://argo-cd.readthedocs.io/en/stable/",
                  "description": "Declarative, GitOps continuous delivery tool for Kubernetes."
                },
                {
                  "label": "Trivy Documentation",
                  "url": "https://trivy.dev/",
                  "description": "Comprehensive security scanner for container images and Kubernetes configs."
                }
              ]
            }
          ],
          "totalDurationSeconds": 969
        }
      ],
      "totalVideos": 19,
      "totalDurationSeconds": 6168
    },
    {
      "id": "section-19",
      "slug": "19-spring-ai-agents-mcp",
      "number": 19,
      "title": "Spring AI, Agents & MCP",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\19-spring-ai-agents-mcp.md",
      "recommendedCourses": [
        {
          "title": "Introduction to Spring AI",
          "url": "https://www.linkedin.com/learning/introduction-to-spring-ai",
          "author": "Daniel Fang",
          "duration": "1h 10m",
          "scope": ""
        },
        {
          "title": "AI Data Pipelines with Spring",
          "url": "https://www.linkedin.com/learning/ai-data-pipelines-with-spring",
          "author": "Kevin Bowersox",
          "duration": "1h 35m",
          "scope": ""
        },
        {
          "title": "Building AI-Powered Applications",
          "url": "https://www.linkedin.com/learning/building-ai-powered-applications",
          "author": "Maaike van Putten",
          "duration": "2h 05m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "19-001",
          "number": 1,
          "title": "ChatClient and prompts",
          "localChapterFile": "001-chatclient-and-prompts.md",
          "keyConcepts": [
            "Spring AI Architecture",
            "`ChatClient` Fluent API",
            "`ChatModel` Providers (OpenAI",
            "Ollama",
            "Anthropic)",
            "System Prompts",
            "Dynamic Prompt Templates (`PromptTemplate`)",
            "Structured Output Parsing (`BeanOutputConverter`)."
          ],
          "videos": [
            {
              "id": "UzE5OkMwMDE6VjAxOklUU0FXSVNB",
              "rawKey": "S19:C1:V1",
              "title": "Introduction to Spring AI: What is Spring AI?",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/what-is-spring-ai",
              "durationText": "5m 5s",
              "durationSeconds": 305,
              "description": "The Spring philosophy applied to AI: portable abstractions over heterogeneous LLM providers.",
              "categoryTag": "Spring AI Architecture & Model Abstraction",
              "references": [
                {
                  "label": "Spring AI Reference: Introduction & Core Concepts",
                  "url": "https://docs.spring.io/spring-ai/reference/index.html",
                  "description": "Enterprise AI abstractions, portable clients, and generative AI patterns."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDE6VjAyOklUU0FTVVNB",
              "rawKey": "S19:C1:V2",
              "title": "Introduction to Spring AI: Setting up Spring AI",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/setting-up-spring-ai",
              "durationText": "3m 51s",
              "durationSeconds": 231,
              "description": "Adding starters, API keys, and auto-configuration properties.",
              "categoryTag": "Spring AI Architecture & Model Abstraction",
              "references": [
                {
                  "label": "Spring AI Reference: Getting Started",
                  "url": "https://docs.spring.io/spring-ai/reference/getting-started.html",
                  "description": "Adding repositories, bill of materials (BOM), and model starters."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDE6VjAzOklUU0FTQVNN",
              "rawKey": "S19:C1:V3",
              "title": "Introduction to Spring AI: Spring AI supported models",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/spring-ai-supported-models",
              "durationText": "4m 2s",
              "durationSeconds": 242,
              "description": "Multi-model ecosystem: OpenAI, Anthropic, Ollama, HuggingFace, and Azure.",
              "categoryTag": "Spring AI Architecture & Model Abstraction",
              "references": [
                {
                  "label": "Spring AI Reference: Chat Models",
                  "url": "https://docs.spring.io/spring-ai/reference/api/chat/comparison.html",
                  "description": "Supported foundation models and provider configurations."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDE6VjA0OklUU0FFQ01XU0E",
              "rawKey": "S19:C1:V4",
              "title": "Introduction to Spring AI: Exploring chat models with Spring AI",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/exploring-chat-models-with-spring-ai",
              "durationText": "6m 0s",
              "durationSeconds": 360,
              "description": "Using `ChatClient` and `ChatModel` to submit structured messages and retrieve completions.",
              "categoryTag": "Chat Models & Fluent Prompting",
              "references": [
                {
                  "label": "Spring AI Reference: ChatClient Fluent API",
                  "url": "https://docs.spring.io/spring-ai/reference/api/chatclient.html",
                  "description": "Method chaining with `.prompt().system().user().call().content()`."
                },
                {
                  "label": "Spring AI Reference: Structured Output",
                  "url": "https://docs.spring.io/spring-ai/reference/api/structured-output-converter.html",
                  "description": "Parsing responses into Java records via `BeanOutputConverter`."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDE6VjA1OklUU0FMVkNBTQ",
              "rawKey": "S19:C1:V5",
              "title": "Introduction to Spring AI: Local vs. cloud AI models",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/local-vs-cloud-ai-models",
              "durationText": "7m 12s",
              "durationSeconds": 432,
              "description": "Developing locally with Ollama / Testcontainers vs deploying to cloud foundation models.",
              "categoryTag": "Chat Models & Fluent Prompting",
              "references": [
                {
                  "label": "Spring AI Reference: Ollama Integration",
                  "url": "https://docs.spring.io/spring-ai/reference/api/chat/ollama-chat.html",
                  "description": "Running Llama 3, Mistral, and local models on workstation GPUs."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDE6VjA2OkFEUFdTSVNB",
              "rawKey": "S19:C1:V6",
              "title": "AI Data Pipelines with Spring: Introducing Spring AI",
              "url": "https://www.linkedin.com/learning/ai-data-pipelines-with-spring/introducing-spring-ai",
              "durationText": "3m 18s",
              "durationSeconds": 198,
              "description": "Wiring Spring AI chat clients into production backend services.",
              "categoryTag": "Chat Models & Fluent Prompting",
              "references": [
                {
                  "label": "Spring AI Reference: Prompts & PromptTemplate",
                  "url": "https://docs.spring.io/spring-ai/reference/api/prompt.html",
                  "description": "Dynamic variable substitution and template evaluation."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1768
        },
        {
          "id": "19-002",
          "number": 2,
          "title": "Embeddings, vector stores, and RAG",
          "localChapterFile": "002-embeddings-vector-stores-rag.md",
          "keyConcepts": [
            "`EmbeddingModel` Vectorization",
            "Vector Databases (PgVector",
            "Redis",
            "Milvus",
            "Chroma)",
            "ETL Document Ingestion",
            "Token Text Splitters",
            "Retrieval-Augmented Generation (RAG) Advisors (`QuestionAnswerAdvisor`)."
          ],
          "videos": [
            {
              "id": "UzE5OkMwMDI6VjAxOklUU0FTQUVNQQ",
              "rawKey": "S19:C2:V1",
              "title": "Introduction to Spring AI: Spring AI: Embedding models AI",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/spring-ai-embedding-models-ai",
              "durationText": "4m 14s",
              "durationSeconds": 254,
              "description": "Converting raw unstructured text into dense mathematical vector representations.",
              "categoryTag": "Embedding Models & Vector Stores",
              "references": [
                {
                  "label": "Spring AI Reference: Embedding Models",
                  "url": "https://docs.spring.io/spring-ai/reference/api/embeddings.html",
                  "description": "`EmbeddingModel` interface, tokenization, and vector generation."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDI6VjAyOklUU0FFVkRXU0E",
              "rawKey": "S19:C2:V2",
              "title": "Introduction to Spring AI: Exploring vector databases with Spring AI",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/exploring-vector-databases-with-spring-ai",
              "durationText": "5m 14s",
              "durationSeconds": 314,
              "description": "Indexing high-dimensional vectors and querying nearest neighbors with cosine similarity.",
              "categoryTag": "Embedding Models & Vector Stores",
              "references": [
                {
                  "label": "Spring AI Reference: Vector Stores",
                  "url": "https://docs.spring.io/spring-ai/reference/api/vectordbs.html",
                  "description": "Similarity search, metadata filtering, and database backends."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDI6VjAzOklUU0FTQlNGQU0",
              "rawKey": "S19:C2:V3",
              "title": "Introduction to Spring AI: Spring Boot starter for AI models and vector stores",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/spring-boot-starter-for-ai-models-and-vector-stores",
              "durationText": "3m 22s",
              "durationSeconds": 202,
              "description": "Declaring `VectorStore` beans via Spring Boot auto-configuration.",
              "categoryTag": "Embedding Models & Vector Stores",
              "references": [
                {
                  "label": "Spring AI Reference: Document Ingestion ETL Framework",
                  "url": "https://docs.spring.io/spring-ai/reference/api/etl-pipeline.html",
                  "description": "Document readers, token splitters, and vector store writers."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDI6VjA0OkFEUFdTSVBBQVY",
              "rawKey": "S19:C2:V4",
              "title": "AI Data Pipelines with Spring: Introducing Postgres as a vector database with Spring AI",
              "url": "https://www.linkedin.com/learning/ai-data-pipelines-with-spring/introducing-postgres-as-a-vector-database-with-spring-ai",
              "durationText": "4m 3s",
              "durationSeconds": 243,
              "description": "Enabling the `vector` extension in PostgreSQL and mapping schema tables.",
              "categoryTag": "Postgres Vector (PgVector) & RAG Ingestion",
              "references": [
                {
                  "label": "Spring AI Reference: PgVector Store",
                  "url": "https://docs.spring.io/spring-ai/reference/api/vectordbs/pgvector.html",
                  "description": "Auto-configured `PgVectorStore`, HNSW/IVFFlat index types."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDI6VjA1OkFEUFdTVlNEUFc",
              "rawKey": "S19:C2:V5",
              "title": "AI Data Pipelines with Spring: Vector similarity data pipeline with Spring AI and Postgres",
              "url": "https://www.linkedin.com/learning/ai-data-pipelines-with-spring/vector-similarity-data-pipeline-with-spring-ai-and-postgres",
              "durationText": "8m 27s",
              "durationSeconds": 507,
              "description": "Executing cosine and Euclidean similarity searches against embedded document collections.",
              "categoryTag": "Postgres Vector (PgVector) & RAG Ingestion",
              "references": [
                {
                  "label": "PgVector Extension Documentation",
                  "url": "https://github.com/pgvector/pgvector",
                  "description": "Vector similarity search operators (`<->`, `<=>`, `<#>`)."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDI6VjA2OkFEUFdTVFNBRFA",
              "rawKey": "S19:C2:V6",
              "title": "AI Data Pipelines with Spring: Text-sentiment analysis data pipeline with Spring AI and RAG",
              "url": "https://www.linkedin.com/learning/ai-data-pipelines-with-spring/text-sentiment-analysis-data-pipeline-with-spring-ai-and-rag",
              "durationText": "10m 8s",
              "durationSeconds": 608,
              "description": "End-to-end RAG architecture: retrieving context chunks and injecting them into the prompt window.",
              "categoryTag": "Postgres Vector (PgVector) & RAG Ingestion",
              "references": [
                {
                  "label": "Spring AI Reference: QuestionAnswerAdvisor & RAG",
                  "url": "https://docs.spring.io/spring-ai/reference/api/chatclient.html#_advisors",
                  "description": "Automatic context retrieval and prompt injection."
                }
              ]
            }
          ],
          "totalDurationSeconds": 2128
        },
        {
          "id": "19-003",
          "number": 3,
          "title": "Tools and function calling",
          "localChapterFile": "003-tools-and-function-calling.md",
          "keyConcepts": [
            "Function Calling Abstraction",
            "`@Tool` Method Annotations",
            "`@JsonClassDescription` & `@JsonPropertyDescription`",
            "Spring `@Bean` Function Callbacks (`java.util.function.Function`)",
            "Agentic Tool Execution Loop."
          ],
          "videos": [
            {
              "id": "UzE5OkMwMDM6VjAxOklUU0FGQ0FOU0E",
              "rawKey": "S19:C3:V1",
              "title": "Introduction to Spring AI: Function callings: A new Spring AI feature",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/function-callings-a-new-spring-ai-feature",
              "durationText": "6m 21s",
              "durationSeconds": 381,
              "description": "Giving LLMs the ability to invoke external Java methods dynamically based on intent recognition and JSON schema generation.",
              "categoryTag": "Function Calling & Tool Registration",
              "references": [
                {
                  "label": "Spring AI Reference: Tool Calling / Function Calling",
                  "url": "https://docs.spring.io/spring-ai/reference/api/tools.html",
                  "description": "Annotating methods with `@Tool` and declaring `@Bean java.util.function.Function`."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDM6VjAyOklUU0FVVFNBUkQ",
              "rawKey": "S19:C3:V2",
              "title": "Introduction to Spring AI: Unveiling the Spring AI reference documentation",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/unveiling-the-spring-ai-reference-documentation",
              "durationText": "1m 29s",
              "durationSeconds": 89,
              "description": "Deep dive into function callback registries and auto-wiring external capabilities.",
              "categoryTag": "Function Calling & Tool Registration",
              "references": [
                {
                  "label": "Spring AI Reference: Function Callback Resolvers",
                  "url": "https://docs.spring.io/spring-ai/reference/api/tools.html#_function_callback_definition",
                  "description": "Resolving tool schemas and executing callbacks synchronously or asynchronously."
                }
              ]
            }
          ],
          "totalDurationSeconds": 470
        },
        {
          "id": "19-004",
          "number": 4,
          "title": "MCP servers and clients",
          "localChapterFile": "004-mcp-servers-and-clients.md",
          "keyConcepts": [
            "Model Context Protocol (MCP) Specification",
            "MCP Clients & Servers",
            "Transport Channels (stdio",
            "SSE / HTTP)",
            "Exposing Spring Boot Service Endpoints as MCP Tools",
            "Dynamic Schema Publishing."
          ],
          "videos": [
            {
              "id": "UzE5OkMwMDQ6VjAxOklUU0FGQ0FOU0E",
              "rawKey": "S19:C4:V1",
              "title": "Introduction to Spring AI: Function callings: A new Spring AI feature",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/function-callings-a-new-spring-ai-feature",
              "durationText": "6m 21s",
              "durationSeconds": 381,
              "description": "Standardizing tool definitions and parameter signatures across AI runtimes.",
              "categoryTag": "Agent Interoperability & Standardized Tool Protocols",
              "references": [
                {
                  "label": "Model Context Protocol (MCP) Official Specification",
                  "url": "https://modelcontextprotocol.io/introduction",
                  "description": "Open standard for connecting AI assistants to data sources and tools."
                },
                {
                  "label": "Spring AI Reference: Model Context Protocol (MCP) Server",
                  "url": "https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-starter-docs.html",
                  "description": "Spring Boot auto-configuration for exposing tools and resources via MCP over stdio or SSE."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDQ6VjAyOlNDQ1M",
              "rawKey": "S19:C4:V2",
              "title": "Spring Cloud: Consuming services",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/consuming-services",
              "durationText": "3m 13s",
              "durationSeconds": 193,
              "description": "Service-to-service communication protocols and exposing internal business contracts to external consumers.",
              "categoryTag": "Agent Interoperability & Standardized Tool Protocols",
              "references": [
                {
                  "label": "Model Context Protocol: Transports",
                  "url": "https://modelcontextprotocol.io/docs/concepts/transports",
                  "description": "Transport protocol details for Server-Sent Events (SSE) and Standard Input/Output (stdio)."
                }
              ]
            }
          ],
          "totalDurationSeconds": 574
        },
        {
          "id": "19-005",
          "number": 5,
          "title": "Spring AI observability and safeguards",
          "localChapterFile": "005-spring-ai-observability-and-safeguards.md",
          "keyConcepts": [
            "AI Observability with Micrometer & OpenTelemetry",
            "Tracking Token Consumption (Prompt vs Completion Tokens)",
            "Latency & Cost Metrics",
            "Prompt Injection Guardrails",
            "Content Moderation Advisors."
          ],
          "videos": [
            {
              "id": "UzE5OkMwMDU6VjAxOlNDVA",
              "rawKey": "S19:C5:V1",
              "title": "Spring Cloud: Telemetry",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/telemetry",
              "durationText": "3m 20s",
              "durationSeconds": 200,
              "description": "Instrumenting microservices, capturing request execution traces, and surfacing telemetry metrics.",
              "categoryTag": "Observability & Operational Safety",
              "references": [
                {
                  "label": "Spring AI Reference: Observability",
                  "url": "https://docs.spring.io/spring-ai/reference/observability/index.html",
                  "description": "Micrometer metrics and OpenTelemetry tracing for AI requests, token usage, and latency."
                }
              ]
            },
            {
              "id": "UzE5OkMwMDU6VjAyOkFTRkFETUFMQlA",
              "rawKey": "S19:C5:V2",
              "title": "Advanced SQL for Application Development: Monitoring and logging best practices",
              "url": "https://www.linkedin.com/learning/advanced-sql-for-application-development/monitoring-and-logging-best-practices",
              "durationText": "4m 14s",
              "durationSeconds": 254,
              "description": "Monitoring external system interactions, timeouts, and auditing transactional behavior.",
              "categoryTag": "Observability & Operational Safety",
              "references": [
                {
                  "label": "OWASP Top 10 for Large Language Model Applications",
                  "url": "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
                  "description": "LLM01: Prompt Injection, LLM02: Sensitive Information Disclosure, and mitigation guardrails."
                }
              ]
            }
          ],
          "totalDurationSeconds": 454
        }
      ],
      "totalVideos": 18,
      "totalDurationSeconds": 5394
    },
    {
      "id": "section-20",
      "slug": "20-fullstack-frontend-react-vite",
      "number": 20,
      "title": "Full-Stack Frontend React + Vite",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\20-fullstack-frontend-react-vite.md",
      "recommendedCourses": [
        {
          "title": "React: Using TypeScript",
          "url": "https://www.linkedin.com/learning/react-using-typescript-23743818",
          "author": "Emmanuel Henri",
          "duration": "1h 20m",
          "scope": ""
        },
        {
          "title": "React Essential Training",
          "url": "https://www.linkedin.com/learning/react-essential-training",
          "author": "Eve Porcello",
          "duration": "2h 35m",
          "scope": ""
        },
        {
          "title": "TypeScript Essential Training",
          "url": "https://www.linkedin.com/learning/typescript-essential-training-14687057",
          "author": "Jess Chadwick",
          "duration": "3h 10m",
          "scope": ""
        },
        {
          "title": "React: Design Patterns",
          "url": "https://www.linkedin.com/learning/react-design-patterns-25656257",
          "author": "Shaun Wassell",
          "duration": "2h 45m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "20-001",
          "number": 1,
          "title": "Vite, React & TypeScript setup",
          "localChapterFile": "001-vite-react-typescript-setup.md",
          "keyConcepts": [
            "Vite Bundler (`vite.config.ts`)",
            "React 18/19",
            "TypeScript Configuration (`tsconfig.json`)",
            "Fast Refresh (HMR)",
            "Dev Server Reverse Proxy (`/api` -> `http://localhost:8080`)",
            "Directory Structure."
          ],
          "videos": [
            {
              "id": "UzIwOkMwMDE6VjAxOlJFVElBUFdW",
              "rawKey": "S20:C1:V1",
              "title": "React Essential Training: Initializing a project with Vite",
              "url": "https://www.linkedin.com/learning/react-essential-training/initializing-a-project-with-vite",
              "durationText": "3m 14s",
              "durationSeconds": 194,
              "description": "Setting up modern React toolchains with Vite for sub-second hot module replacement.",
              "categoryTag": "Project Scaffolding & Tooling",
              "references": [
                {
                  "label": "Vite Documentation: Getting Started",
                  "url": "https://vite.dev/guide/",
                  "description": "Fast modern frontend tooling and build pipeline."
                },
                {
                  "label": "Vite Configuration: Server Proxy",
                  "url": "https://vite.dev/config/server-options.html#server-proxy",
                  "description": "Forwarding `/api` requests to backend Spring Boot endpoints."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDE6VjAyOlJVVElBUlA",
              "rawKey": "S20:C1:V2",
              "title": "React: Using TypeScript: Initialize a React project",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/initialize-a-react-project",
              "durationText": "2m 18s",
              "durationSeconds": 138,
              "description": "Configuring TypeScript templates, compiler options, and dependency packages.",
              "categoryTag": "Project Scaffolding & Tooling",
              "references": [
                {
                  "label": "TypeScript Documentation: tsconfig.json",
                  "url": "https://www.typescriptlang.org/docs/handbook/tsconfig-json.html",
                  "description": "Configuring compiler options (`strict`, `jsx: react-jsx`)."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDE6VjAzOlJVVElUVFdS",
              "rawKey": "S20:C1:V3",
              "title": "React: Using TypeScript: Introduction to TypeScript with React",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/introduction-to-typescript-with-react",
              "durationText": "2m 17s",
              "durationSeconds": 137,
              "description": "Type checking benefits and tooling setup.",
              "categoryTag": "Project Scaffolding & Tooling",
              "references": [
                {
                  "label": "React Documentation: Using TypeScript",
                  "url": "https://react.dev/learn/typescript",
                  "description": "Typing props, hooks, and events in React."
                }
              ]
            }
          ],
          "totalDurationSeconds": 469
        },
        {
          "id": "20-002",
          "number": 2,
          "title": "Components, state, and routing",
          "localChapterFile": "002-components-state-and-routing.md",
          "keyConcepts": [
            "Functional Components",
            "JSX Elements",
            "Props Typing (`interface ComponentProps`)",
            "React Hooks (`useState`",
            "`useEffect`",
            "`useMemo`",
            "`useCallback`)",
            "React Router 6/7 Navigation."
          ],
          "videos": [
            {
              "id": "UzIwOkMwMDI6VjAxOlJFVENBUkM",
              "rawKey": "S20:C2:V1",
              "title": "React Essential Training: Creating a React component",
              "url": "https://www.linkedin.com/learning/react-essential-training/creating-a-react-component",
              "durationText": "3m 38s",
              "durationSeconds": 218,
              "description": "Defining reusable UI building blocks and pure render functions.",
              "categoryTag": "Component Design & Props",
              "references": [
                {
                  "label": "React Documentation: Your First Component",
                  "url": "https://react.dev/learn/your-first-component",
                  "description": "Component architecture and JSX syntax rules."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjAyOlJFVEFDUA",
              "rawKey": "S20:C2:V2",
              "title": "React Essential Training: Adding component properties",
              "url": "https://www.linkedin.com/learning/react-essential-training/adding-component-properties",
              "durationText": "3m 23s",
              "durationSeconds": 203,
              "description": "Passing unidirectional data down component trees.",
              "categoryTag": "Component Design & Props",
              "references": [
                {
                  "label": "React Documentation: Passing Props to a Component",
                  "url": "https://react.dev/learn/passing-props-to-a-component",
                  "description": "Declaring props and default values."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjAzOlJVVFJDUw",
              "rawKey": "S20:C2:V3",
              "title": "React: Using TypeScript: React components syntax",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/react-components-syntax",
              "durationText": "5m 27s",
              "durationSeconds": 327,
              "description": "Defining strongly typed props and `React.FC` / function signatures.",
              "categoryTag": "Component Design & Props",
              "references": [
                {
                  "label": "TypeScript Handbook: Everyday Types",
                  "url": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
                  "description": "Type annotations for functions and parameters."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjA0OlJVVElUSQ",
              "rawKey": "S20:C2:V4",
              "title": "React: Using TypeScript: Introduction to interfaces",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/introduction-to-interfaces",
              "durationText": "3m 7s",
              "durationSeconds": 187,
              "description": "Modeling data models and component prop contracts using TS interfaces.",
              "categoryTag": "Component Design & Props",
              "references": [
                {
                  "label": "TypeScript Handbook: Object Types",
                  "url": "https://www.typescriptlang.org/docs/handbook/2/objects.html",
                  "description": "Defining structural contracts and optional properties with interfaces."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjA1OlJFVFVUVUg",
              "rawKey": "S20:C2:V5",
              "title": "React Essential Training: Understanding the useState hook",
              "url": "https://www.linkedin.com/learning/react-essential-training/understanding-the-usestate-hook",
              "durationText": "4m 15s",
              "durationSeconds": 255,
              "description": "Local state encapsulation and state setter functions.",
              "categoryTag": "State Management & Hooks",
              "references": [
                {
                  "label": "React Reference: `useState`",
                  "url": "https://react.dev/reference/react/useState",
                  "description": "State hook declaration and updater functions."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjA2OlJVVERPU1dU",
              "rawKey": "S20:C2:V6",
              "title": "React: Using TypeScript: Define our state with TypeScript",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/define-our-state-with-typescript",
              "durationText": "5m 9s",
              "durationSeconds": 309,
              "description": "Type-safe state initializers and generic state hooks (`useState<User | null>`).",
              "categoryTag": "State Management & Hooks",
              "references": [
                {
                  "label": "React Documentation: Typing `useState`",
                  "url": "https://react.dev/learn/typescript#typing-usestate",
                  "description": "Explicit generics for unions and complex states."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjA3OlJVVElPVVdU",
              "rawKey": "S20:C2:V7",
              "title": "React: Using TypeScript: Implementation of useEffect with TypeScript",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/implementation-of-useeffect-with-typescript",
              "durationText": "4m 19s",
              "durationSeconds": 259,
              "description": "Component lifecycle synchronization and cleanup functions.",
              "categoryTag": "State Management & Hooks",
              "references": [
                {
                  "label": "React Reference: `useEffect`",
                  "url": "https://react.dev/reference/react/useEffect",
                  "description": "Synchronizing with external systems and cleanup lifecycles."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjA4OlJFVENDQVI",
              "rawKey": "S20:C2:V8",
              "title": "React Essential Training: Challenge: Creating a route",
              "url": "https://www.linkedin.com/learning/react-essential-training/challenge-creating-a-route",
              "durationText": "49s",
              "durationSeconds": 49,
              "description": "Structuring client-side routing and path parameter matching.",
              "categoryTag": "Routing",
              "references": [
                {
                  "label": "React Router Documentation: Tutorial",
                  "url": "https://reactrouter.com/6.28.0/start/tutorial",
                  "description": "Client-side routing setup and layout nested routes."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDI6VjA5OlJFVFNDQVI",
              "rawKey": "S20:C2:V9",
              "title": "React Essential Training: Solution: Creating a route",
              "url": "https://www.linkedin.com/learning/react-essential-training/solution-creating-a-route",
              "durationText": "2m 38s",
              "durationSeconds": 158,
              "description": "Declaring nested route layouts and navigation links.",
              "categoryTag": "Routing",
              "references": [
                {
                  "label": "React Router Reference: `createBrowserRouter`",
                  "url": "https://reactrouter.com/6.28.0/routers/create-browser-router",
                  "description": "Data routers and `<RouterProvider />`."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1965
        },
        {
          "id": "20-003",
          "number": 3,
          "title": "Data fetching and forms",
          "localChapterFile": "003-data-fetching-and-forms.md",
          "keyConcepts": [
            "Axios HTTP Client",
            "TanStack React Query (`useQuery`",
            "`useMutation`)",
            "Stale-While-Revalidate Caching",
            "React Hook Form",
            "Schema Validation with Zod."
          ],
          "videos": [
            {
              "id": "UzIwOkMwMDM6VjAxOlJFVEZESVJB",
              "rawKey": "S20:C3:V1",
              "title": "React Essential Training: Fetching data in React applications",
              "url": "https://www.linkedin.com/learning/react-essential-training/fetching-data-in-react-applications",
              "durationText": "4m 37s",
              "durationSeconds": 277,
              "description": "Asynchronous HTTP requests, handling loading states, and error display.",
              "categoryTag": "Data Fetching Foundations",
              "references": [
                {
                  "label": "TanStack Query Documentation: Overview",
                  "url": "https://tanstack.com/query/latest/docs/framework/react/overview",
                  "description": "Declarative asynchronous state management and caching."
                },
                {
                  "label": "Axios Documentation",
                  "url": "https://axios-http.com/docs/intro",
                  "description": "Promise-based HTTP client for browser and node."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDM6VjAyOlJFVFBEQVA",
              "rawKey": "S20:C3:V2",
              "title": "React Essential Training: Passing data as props",
              "url": "https://www.linkedin.com/learning/react-essential-training/passing-data-as-props",
              "durationText": "5m 55s",
              "durationSeconds": 355,
              "description": "Distributing remote API response models to child presentation views.",
              "categoryTag": "Data Fetching Foundations",
              "references": [
                {
                  "label": "TanStack Query: Queries Guide",
                  "url": "https://tanstack.com/query/latest/docs/framework/react/guides/queries",
                  "description": "Query keys, loading states, and data passing."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDM6VjAzOlJFVEJBRg",
              "rawKey": "S20:C3:V3",
              "title": "React Essential Training: Building a form",
              "url": "https://www.linkedin.com/learning/react-essential-training/building-a-form",
              "durationText": "6m 11s",
              "durationSeconds": 371,
              "description": "Controlled inputs, form submission events, and validation error feedback.",
              "categoryTag": "Forms & Client Validation",
              "references": [
                {
                  "label": "React Hook Form Documentation",
                  "url": "https://react-hook-form.com/get-started",
                  "description": "Performant, flexible forms with easy validation."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDM6VjA0OlJVVE9DVA",
              "rawKey": "S20:C3:V4",
              "title": "React: Using TypeScript: Other complex types",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/other-complex-types",
              "durationText": "4m 53s",
              "durationSeconds": 293,
              "description": "Strongly typing form input change events (`React.ChangeEvent<HTMLInputElement>`).",
              "categoryTag": "Forms & Client Validation",
              "references": [
                {
                  "label": "Zod Documentation",
                  "url": "https://zod.dev/",
                  "description": "TypeScript-first schema declaration and validation library."
                }
              ]
            }
          ],
          "totalDurationSeconds": 1296
        },
        {
          "id": "20-004",
          "number": 4,
          "title": "MUI and design systems",
          "localChapterFile": "004-mui-and-design-system.md",
          "keyConcepts": [
            "Material UI (MUI) Core Components",
            "`ThemeProvider`",
            "Responsive Layout Grids (`Grid2`)",
            "Typography",
            "Palette Configuration",
            "Dark/Light Mode Theming."
          ],
          "videos": [
            {
              "id": "UzIwOkMwMDQ6VjAxOlJEUExD",
              "rawKey": "S20:C4:V1",
              "title": "React: Design Patterns: Layout components",
              "url": "https://www.linkedin.com/learning/react-design-patterns-25656257/layout-components",
              "durationText": "5m 12s",
              "durationSeconds": 312,
              "description": "Building composable, themeable UI shells and design systems.",
              "categoryTag": "Design Systems & UI Layouts",
              "references": [
                {
                  "label": "MUI Core Documentation",
                  "url": "https://mui.com/material-ui/getting-started/",
                  "description": "Component library implementing Google's Material Design."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDQ6VjAyOlJVVFJCUEk",
              "rawKey": "S20:C4:V2",
              "title": "React: Using TypeScript: Review best practices interfaces",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/review-best-practices-interfaces",
              "durationText": "1m 46s",
              "durationSeconds": 106,
              "description": "Defining standardized component theme contracts.",
              "categoryTag": "Design Systems & UI Layouts",
              "references": [
                {
                  "label": "MUI Customization: Theming",
                  "url": "https://mui.com/material-ui/customization/theming/",
                  "description": "Custom color palettes, typography variants, and dark mode toggles."
                }
              ]
            }
          ],
          "totalDurationSeconds": 418
        },
        {
          "id": "20-005",
          "number": 5,
          "title": "Frontend auth and JWT storage",
          "localChapterFile": "005-frontend-auth-and-jwt-storage.md",
          "keyConcepts": [
            "Full-Stack JWT Authentication Flow",
            "Storage Strategies (Memory vs HttpOnly Cookies vs LocalStorage)",
            "Axios Interceptors (Attaching `Authorization: Bearer <token>`)",
            "401 Interception & Refresh Token Rotation."
          ],
          "videos": [
            {
              "id": "UzIwOkMwMDU6VjAxOlJVVElPQ1dU",
              "rawKey": "S20:C5:V1",
              "title": "React: Using TypeScript: Implementation of context with TypeScript",
              "url": "https://www.linkedin.com/learning/react-using-typescript-23743818/implementation-of-context-with-typescript",
              "durationText": "8m 37s",
              "durationSeconds": 517,
              "description": "Storing global authentication state (current user, roles, tokens) in a type-safe React Context.",
              "categoryTag": "Authentication State & Secure Contexts",
              "references": [
                {
                  "label": "React Reference: `useContext`",
                  "url": "https://react.dev/reference/react/useContext",
                  "description": "Passing auth state deeply without prop drilling."
                },
                {
                  "label": "OWASP Cheat Sheet: HTML5 Security Storage",
                  "url": "https://cheatsheetseries.owasp.org/cheatsheets/HTML5_Security_Cheat_Sheet.html#local-storage",
                  "description": "Token storage security trade-offs (memory vs HttpOnly cookies)."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDU6VjAyOkNTQk1BU1NUVEc",
              "rawKey": "S20:C5:V2",
              "title": "Creating Spring Boot Microservices: Add Spring Security to the gateway",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway",
              "durationText": "6m 50s",
              "durationSeconds": 410,
              "description": "Verifying JWT bearer tokens at the gateway and propagating user identities.",
              "categoryTag": "Authentication State & Secure Contexts",
              "references": [
                {
                  "label": "Axios Documentation: Interceptors",
                  "url": "https://axios-http.com/docs/interceptors",
                  "description": "Intercepting requests to append bearer tokens and intercepting 401 to refresh tokens."
                }
              ]
            }
          ],
          "totalDurationSeconds": 927
        },
        {
          "id": "20-006",
          "number": 6,
          "title": "Misc (Production build & Nginx deployment)",
          "localChapterFile": "006-misc.md",
          "keyConcepts": [
            "Production Build Optimization (`vite build`)",
            "Environment Variables (`import.meta.env`)",
            "Multi-Stage Dockerfile with Nginx Alpine",
            "Nginx SPA Routing (`try_files $uri /index.html`)."
          ],
          "videos": [
            {
              "id": "UzIwOkMwMDY6VjAxOktGSkRCQURJVUE",
              "rawKey": "S20:C6:V1",
              "title": "Kubernetes for Java Developers: Build a Docker image using a Dockerfile",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/build-a-docker-image-using-a-dockerfile",
              "durationText": "5m 33s",
              "durationSeconds": 333,
              "description": "Multi-stage image packaging: stage 1 builds the bundle, stage 2 serves via a minimal web server.",
              "categoryTag": "Containerization & Production SPA Serving",
              "references": [
                {
                  "label": "Vite Documentation: Building for Production",
                  "url": "https://vite.dev/guide/build.html",
                  "description": "Production bundling, asset hashing, and tree shaking."
                }
              ]
            },
            {
              "id": "UzIwOkMwMDY6VjAyOlJFVERQQQ",
              "rawKey": "S20:C6:V2",
              "title": "React Essential Training: Designing performant apps",
              "url": "https://www.linkedin.com/learning/react-essential-training/designing-performant-apps-with-react-server-components",
              "durationText": "1m 36s",
              "durationSeconds": 96,
              "description": "Production asset optimization and bundling considerations.",
              "categoryTag": "Containerization & Production SPA Serving",
              "references": [
                {
                  "label": "Nginx Documentation: `try_files` Directive",
                  "url": "https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files",
                  "description": "SPA fallback routing for client-side routing."
                }
              ]
            }
          ],
          "totalDurationSeconds": 429
        }
      ],
      "totalVideos": 22,
      "totalDurationSeconds": 5504
    },
    {
      "id": "section-21",
      "slug": "21-capstone-batteries-included",
      "number": 21,
      "title": "Capstone Batteries Included",
      "part": 3,
      "partTitle": "Part 3: Spring Boot in Practice",
      "filePath": "part-3-spring-boot-in-practice\\21-capstone-batteries-included.md",
      "recommendedCourses": [
        {
          "title": "Running Spring Boot in Production",
          "url": "https://www.linkedin.com/learning/running-spring-boot-in-production",
          "author": "Frank Moley",
          "duration": "2h 15m",
          "scope": ""
        },
        {
          "title": "Creating Spring Boot Microservices",
          "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices",
          "author": "Frank Moley",
          "duration": "2h 45m",
          "scope": ""
        },
        {
          "title": "Kubernetes for Java Developers",
          "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers",
          "author": "Arun Gupta",
          "duration": "2h 25m",
          "scope": ""
        },
        {
          "title": "Introduction to Spring AI",
          "url": "https://www.linkedin.com/learning/introduction-to-spring-ai",
          "author": "Daniel Fang",
          "duration": "1h 10m",
          "scope": ""
        }
      ],
      "chapters": [
        {
          "id": "21-001",
          "number": 1,
          "title": "Capstone architecture and scaffold",
          "localChapterFile": "001-capstone-architecture-scaffold.md",
          "keyConcepts": [
            "Multi-Module Maven Hierarchy (`domain`",
            "`application`",
            "`infrastructure`",
            "`bootstrap`)",
            "Clean Hexagonal Domain Isolation",
            "Flyway PostgreSQL Migrations",
            "Spring Security JWT Bearer Filter",
            "Spring AI `@Tool`-Backed `/api/chat` Endpoint",
            "Micrometer/Prometheus `/actuator/prometheus` Scrape",
            "Testcontainers Integration Tests",
            "Multi-Stage OCI Containerization",
            "Kubernetes Deployment Manifests."
          ],
          "videos": [
            {
              "id": "UzIxOkMwMDE6VjAxOkNTQk1DVFJG",
              "rawKey": "S21:C1:V1",
              "title": "Creating Spring Boot Microservices: Choosing the right framework",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/choosing-the-right-framework",
              "durationText": "3m 31s",
              "durationSeconds": 211,
              "description": "Architectural trade-offs, modular domain boundaries, and layering principles.",
              "categoryTag": "Architecture Scaffolding & Multi-Module Organization",
              "references": [
                {
                  "label": "Apache Maven Guide: Working with Multiple Modules",
                  "url": "https://maven.apache.org/guides/mini/guide-multiple-modules.html",
                  "description": "Aggregator parent POMs and submodule dependency graphs."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjAyOkNTQk1URE0",
              "rawKey": "S21:C1:V2",
              "title": "Creating Spring Boot Microservices: The domain model",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/the-domain-model",
              "durationText": "2m 9s",
              "durationSeconds": 129,
              "description": "Modeling core business entities decoupled from infrastructure mechanisms.",
              "categoryTag": "Architecture Scaffolding & Multi-Module Organization",
              "references": [
                {
                  "label": "Alistair Cockburn: Hexagonal Architecture (Ports and Adapters)",
                  "url": "https://alistair.cockburn.us/hexagonal-architecture/",
                  "description": "Isolating domain logic from frameworks and external protocols."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjAzOkNTQk1UUEU",
              "rawKey": "S21:C1:V3",
              "title": "Creating Spring Boot Microservices: The persistence entities",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/the-perstence-entities",
              "durationText": "2m 2s",
              "durationSeconds": 122,
              "description": "Separating domain models from JPA infrastructure entities.",
              "categoryTag": "Architecture Scaffolding & Multi-Module Organization",
              "references": [
                {
                  "label": "Spring Data Commons Reference: Core Concepts",
                  "url": "https://docs.spring.io/spring-data/commons/reference/repositories/core-concepts.html",
                  "description": "Decoupled persistence adapter implementation."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjA0OkNTQk1EVldGTQ",
              "rawKey": "S21:C1:V4",
              "title": "Creating Spring Boot Microservices: Database versioning with Flyway migrate",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/database-versioning-with-flyway-migrate",
              "durationText": "4m 10s",
              "durationSeconds": 250,
              "description": "Writing idempotent V1 SQL scripts and running migrations during application boot.",
              "categoryTag": "Database Migrations & Container Composition",
              "references": [
                {
                  "label": "Spring Boot Reference: Execute Flyway Migrations on Startup",
                  "url": "https://docs.spring.io/spring-boot/how-to/data-initialization.html#howto.data-initialization.migration-tool.flyway",
                  "description": "Automated migration execution on application boot."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjA1OkNTQk1TQkRD",
              "rawKey": "S21:C1:V5",
              "title": "Creating Spring Boot Microservices: Spring Boot Docker Compose",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/spring-boot-docker-compose",
              "durationText": "6m 38s",
              "durationSeconds": 398,
              "description": "Bootstrapping isolated PostgreSQL development containers automatically.",
              "categoryTag": "Database Migrations & Container Composition",
              "references": [
                {
                  "label": "Spring Boot Reference: Docker Compose Support",
                  "url": "https://docs.spring.io/spring-boot/reference/features/dev-services.html#features.dev-services.docker-compose",
                  "description": "Auto-detecting `compose.yaml` and providing datasource connection settings."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjA2OkNTQk1EQU5S",
              "rawKey": "S21:C1:V6",
              "title": "Creating Spring Boot Microservices: Declaring a new RestController",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/declaring-a-new-restcontroller",
              "durationText": "6m 29s",
              "durationSeconds": 389,
              "description": "Exposing secure REST contracts with input validation.",
              "categoryTag": "Security & Endpoint Exposure",
              "references": [
                {
                  "label": "Spring Framework Reference: Annotated Controllers",
                  "url": "https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html",
                  "description": "RestController mappings and validation."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjA3OkNTQk1BU1NUVEc",
              "rawKey": "S21:C1:V7",
              "title": "Creating Spring Boot Microservices: Add Spring Security to the gateway",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/add-spring-security-to-the-gateway",
              "durationText": "6m 50s",
              "durationSeconds": 410,
              "description": "Configuring stateless JWT authentication filters and security filter chains.",
              "categoryTag": "Security & Endpoint Exposure",
              "references": [
                {
                  "label": "Spring Security Reference: OAuth2 Resource Server JWT",
                  "url": "https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/jwt.html",
                  "description": "Configuring stateless JWT bearer token verification."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjA4OkNTQk1TVQ",
              "rawKey": "S21:C1:V8",
              "title": "Creating Spring Boot Microservices: Swagger UI",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/swagger-ui",
              "durationText": "5m 31s",
              "durationSeconds": 331,
              "description": "Auto-generating OpenAPI documentation via SpringDoc.",
              "categoryTag": "Security & Endpoint Exposure",
              "references": [
                {
                  "label": "Springdoc-openapi Documentation",
                  "url": "https://springdoc.org/",
                  "description": "Automated interactive Swagger UI documentation."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjA5OklUU0FFQ01XU0E",
              "rawKey": "S21:C1:V9",
              "title": "Introduction to Spring AI: Exploring chat models with Spring AI",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/exploring-chat-models-with-spring-ai",
              "durationText": "6m 0s",
              "durationSeconds": 360,
              "description": "Integrating `ChatClient` to handle conversational interactions.",
              "categoryTag": "Spring AI Integration",
              "references": [
                {
                  "label": "Spring AI Reference: ChatClient Fluent API",
                  "url": "https://docs.spring.io/spring-ai/reference/api/chatclient.html",
                  "description": "Conversational prompt chaining."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjEwOklUU0FGQ0FOU0E",
              "rawKey": "S21:C1:V10",
              "title": "Introduction to Spring AI: Function callings: A new Spring AI feature",
              "url": "https://www.linkedin.com/learning/introduction-to-spring-ai/function-callings-a-new-spring-ai-feature",
              "durationText": "6m 21s",
              "durationSeconds": 381,
              "description": "Exposing domain methods as `@Tool` functions invocable by the LLM.",
              "categoryTag": "Spring AI Integration",
              "references": [
                {
                  "label": "Spring AI Reference: Tool Calling",
                  "url": "https://docs.spring.io/spring-ai/reference/api/tools.html",
                  "description": "`@Tool` method annotations and automated tool dispatching."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjExOkNTQk1KTUFT",
              "rawKey": "S21:C1:V11",
              "title": "Creating Spring Boot Microservices: JUnit, Mockito, and SpringBootTest",
              "url": "https://www.linkedin.com/learning/creating-spring-boot-microservices/junit-mockito-and-springboottest",
              "durationText": "12m 39s",
              "durationSeconds": 759,
              "description": "Layered test execution: domain unit tests, Mockito service mocks, and full slice integration tests.",
              "categoryTag": "Testing & Quality Assurance",
              "references": [
                {
                  "label": "Spring Boot Reference: Testing",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/index.html",
                  "description": "TestContext framework, `@SpringBootTest`, `@MockitoBean`."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjEyOkFTVFdJVEZBSlI",
              "rawKey": "S21:C1:V12",
              "title": "Advanced Spring Testing: Writing integration tests for a JPA repository",
              "url": "https://www.linkedin.com/learning/advanced-spring-effective-integration-testing-with-spring-boot/writing-integration-tests-for-a-jpa-repository",
              "durationText": "5m 47s",
              "durationSeconds": 347,
              "description": "Testing Flyway migrations and repositories with Testcontainers.",
              "categoryTag": "Testing & Quality Assurance",
              "references": [
                {
                  "label": "Spring Boot Reference: Service Connections with Testcontainers",
                  "url": "https://docs.spring.io/spring-boot/reference/testing/testcontainers.html#testing.testcontainers.service-connections",
                  "description": "`@ServiceConnection` for ephemeral database containers."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjEzOlJTQklQR05XUw",
              "rawKey": "S21:C1:V13",
              "title": "Running Spring Boot in Production: Going native with Spring",
              "url": "https://www.linkedin.com/learning/running-spring-boot-in-production/going-native-with-spring",
              "durationText": "13m 34s",
              "durationSeconds": 814,
              "description": "Ahead-Of-Time compilation and GraalVM native image generation.",
              "categoryTag": "Production Packaging & Kubernetes",
              "references": [
                {
                  "label": "Spring Boot Reference: GraalVM Native Image Support",
                  "url": "https://docs.spring.io/spring-boot/reference/packaging/native-image/index.html",
                  "description": "Compiling to native binaries."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjE0OktGSkRCQURJVUE",
              "rawKey": "S21:C1:V14",
              "title": "Kubernetes for Java Developers: Build a Docker image using a Dockerfile",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/build-a-docker-image-using-a-dockerfile",
              "durationText": "5m 33s",
              "durationSeconds": 333,
              "description": "Creating multi-stage production Dockerfiles with non-root security.",
              "categoryTag": "Production Packaging & Kubernetes",
              "references": [
                {
                  "label": "Spring Boot Reference: Container Images",
                  "url": "https://docs.spring.io/spring-boot/reference/packaging/container-images/index.html",
                  "description": "Layered jars and buildpacks."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjE1OktGSkREVVNN",
              "rawKey": "S21:C1:V15",
              "title": "Kubernetes for Java Developers: Deploy using standalone manifests",
              "url": "https://www.linkedin.com/learning/kubernetes-for-java-developers/deploy-using-standalone-manifests",
              "durationText": "4m 29s",
              "durationSeconds": 269,
              "description": "Wiring Kubernetes Deployment, Service, and ConfigMap manifests.",
              "categoryTag": "Production Packaging & Kubernetes",
              "references": [
                {
                  "label": "Kubernetes Documentation: Deployments",
                  "url": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/",
                  "description": "Declaring replica controllers, rolling update strategies, and health probes."
                }
              ]
            },
            {
              "id": "UzIxOkMwMDE6VjE2OlNDVA",
              "rawKey": "S21:C1:V16",
              "title": "Spring Cloud: Telemetry",
              "url": "https://www.linkedin.com/learning/spring-cloud-cloud-native-architecture-and-distributed-systems/telemetry",
              "durationText": "3m 20s",
              "durationSeconds": 200,
              "description": "Actuator Prometheus endpoint integration for cluster monitoring.",
              "categoryTag": "Production Packaging & Kubernetes",
              "references": [
                {
                  "label": "Spring Boot Reference: Prometheus Export",
                  "url": "https://docs.spring.io/spring-boot/reference/actuator/metrics.html#actuator.metrics.export.prometheus",
                  "description": "Exposing `/actuator/prometheus` scraping endpoint."
                }
              ]
            }
          ],
          "totalDurationSeconds": 5703
        }
      ],
      "totalVideos": 16,
      "totalDurationSeconds": 5703
    }
  ]
};
