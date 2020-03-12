//calling json masterlist change location if necessary
var masterlist = [{
  "CS_core": {
    "freshman": {
      "quarter1": ["CI101", "CS164"],
      "quarter2": ["CI102", "CS171"],
      "quarter3": ["CI103", "CS172"]
    },
    "sophomore":{
      "quarter1": ["CS265", "CS270"],
      "quarter2": ["CS260", "CS375"]
    },
    "pre-junior":{
      "quarter1": ["CS281", "SE310"],
      "quarter2": ["CS283", "CS360"]
    },
    "junior":{
      "quarter1": ["SE181"]
    },
    "senior":{
      "quarter1": ["CI491"],
      "quarter2": ["CI492"],
      "quarter3": ["CI493"]
    }
  },
  "tracks": {
    "Algorithms and Data Structures": ["CS440", "CS457", "CS458"],
    "Artificial Intelligence": ["CS380", "CS383/CS385/CS387/CS481", "CS383/CS385/CS387/CS481"],
    "Computer and Network Security": ["CS472", "CS475", "CS303/CS377"],
    "Computer Architecture": ["CS352", "CS476/ECEC356/ECEC413", "CS476/ECEC356/ECEC413"],
    "Computer Graphics and Vision": ["CS430", "CS435", "CS431/CS432"],
    "Computing Systems": ["CS361", "CS370", "CS352/CS365/CS441/CS461/CS472"],
    "Game Development and Design": ["CS345", "CS341/CS342/CS387/CS445/GMAP377/GMAP378", "CS341/CS342/CS387/CS445/GMAP377/GMAP378"],
    "Human-Computer Interaction": ["CS338", "INFO310/PSY337/CS345/CS432", "INFO310/PSY337/CS345/CS432"],
    "Theory and Computation": ["CS300", "MATH300", "CS303/MATH301/MATH305"],
    "Programming Languages": ["CS440", "CS441", "CS442"],
    "Software Engineering": ["SE311", "SE410"]
  },
  "classes": {
    "CI101": {
      "name": "Computing and Informatics Design I",
      "description": "Introduces computing and informatics through a combination of lectures and hands-on laboratory exercises. Lectures emphasize an integrated view of topic areas and systems, spanning low-level software and implementation issues to high-level use and acceptance by individuals and communities. Lab exercises allow students to explore familiar systems in unique and novel ways to better understand how these systems are designed and used.",
      "credits": "2.0",
      "pre-reqs": []
    },
    "CI102": {
      "name": "Computing and Informatics Design II",
      "description": "Introduces computing and informatics through a combination of lectures and hands on laboratory exercises. Lectures emphasize an integrated view of topic areas and systems, spanning low level software and implementation issues to high level use and acceptance by individuals and communities. Lab exercises allow students to explore familiar systems in unique and novel ways to better understand how these systems are designed and used",
      "credits": "2.0",
      "pre-reqs": []
    },
    "CI103": {
      "name": "Computing and Informatics Design III",
      "description": "Follows CI 102 in the Computing & Informatics design sequence. Introduces computing and informatics through a combination of lectures and hands-on laboratory exercises. Lectures emphasize an integrated view of topic areas and systems, spanning low-level software and implementation issues to high-level use and acceptance by individuals and communities. Lab exercises allow students to explore familiar systems in unique and novel ways to better understand how these systems are designed and used.",
      "credits": "2.0",
      "pre-reqs": ["CI102"]
    },
    "CI491": {
      "name": "Senior Project I",
      "description": "Part of a multi-term capstone experience involving in-depth study and application of computing and informatics. Students work in teams to develop a significant product. Requires use of a development process that includes planning, specification, design, implementation, evaluation, and documentation. This course is writing intensive.",
      "credits": "3.0",
      "pre-reqs": ["CS451/INFO324/INFO442/SE310"]
    },
    "CI492": {
      "name": "Senior Project II",
      "description": "Part of a multi-term capstone experience involving in-depth study and application of computing and informatics. Students work in teams to develop a significant product. Requires use of a development process that includes planning, specification, design, implementation, evaluation, and documentation. This course is writing intensive.",
      "credits": "3.0",
      "pre-reqs": ["CI491"]
    },
    "CI493": {
      "name": "Senior Project III",
      "description": "Part of a multi-term capstone experience involving in-depth study and application of computing and informatics. Students work in teams to develop a significant product. Requires use of a development process that includes planning, specification, design, implementation, evaluation, and documentation. This course is writing intensive.",
      "credits": "3.0",
      "pre-reqs": ["CI492"]
    },
    "CS140": {
      "name": "Introduction to Multimedia Programming",
      "description": "Introduction to structured computer programming in a language designed for working with media (images, sound, video), e.g. Python/Jython. Topics include: variables, input and output, expressions, assignment statements, conditionals and branching, files, repetition, functions and parameter passing, one-dimensional and two-dimensional arrays, and media manipulation. Stresses good programming style, documentation, debugging, and testing.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS143": {
      "name": "Computer Programming Fundamentals",
      "description": "Introduction to structured computer programming in language of instruction (e.g. C++). Topics include: variables, input and output, expressions, assignment statements, conditionals and branching, files, repetition, functions and parameter passing, arrays, and string manipulation. Stresses good programming style, documentation, debugging and testing.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS150": {
      "name": "Computer Science Principles",
      "description": "An introduction to computer science principles: the big ideas and computational thinking practices central to computer science, and the societal impact of computing and information technology. Exposure to algorithms, big data, machine learning, privacy, security and digital citizenship while introducing and reinforcing the importance of programming.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS161": {
      "name": "Introduction to Computing",
      "description": "Introduction to the computer as a tool for productivity and communications. Provides fluency in the use of industry-standard software for professional communications and presentations, data analysis, and telecommunication. Introduce automation and programming to enhance the effective use of computers and computer applications.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS164": {
      "name": "Introduction to Computer Science",
      "description": "An introduction to the field of computer science. Exposure to core areas (selected from algorithms, artificial intelligence, computer architecture, databases, graphics, human-computer interaction, programming languages, scientific computation, software engineering) while introducing and reinforcing the importance of programming.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS171": {
      "name": "Computer Programming I",
      "description": "Introduces fundamental concepts of computing including memory, instructions, function calls, and activation records. Covers fundamentals of structured computer programming in the language of instruction: variables, input and output, expressions, assignment statements, conditionals and branching, subprograms, parameter passing, repetition, arrays, top-down design, testing, and debugging.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS172": {
      "name": "Computer Programming II",
      "description": "Covers object-oriented design, inheritance hierarchies, information hiding principles, string processing, recursion, good programming style, documentation, debugging, and testing.",
      "credits": "3.0",
      "pre-reqs": ["CS171/CS132/CS175"]
    },
    "CS175": {
      "name": "Advanced Computer Programming I",
      "description": "Advanced programming in language of instruction at an accelerated pace: introduces fundamental concepts of computing including memory, instructions, function calls, and activation records. Covers fundamentals of structured computer programming in the language of instruction: conditionals and branching, subprograms, parameter passing, repetition, arrays, top-down design, testing, and debugging. Supplements basic topics with deeper presentation of advanced techniques for those with some incoming programming experience.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS176": {
      "name": "Advanced Computer Programming II",
      "description": "Enhanced presentation of object-oriented design, inheritance hierarchies, information hiding principles, string processing, recursion, good programming style, documentation, debugging and testing. Includes special focus on language facilities and use of libraries.",
      "credits": "3.0",
      "pre-reqs": ["CS171/CS175"]
    },
    "CS190": {
      "name": "Selected Computer Language",
      "description": "Focuses on programming in a selected language of interest. Course content, language, and prerequisites may vary according to instructor, with emphasis on applications for which the language is designed. May be repeated for credit.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS260": {
      "name": "Data Structures",
      "description": "Covers stacks, queues, linked allocation, binary trees, internal searching and sorting, hashing, and applications.",
      "credits": "3.0",
      "pre-reqs": ["CS265"]
    },
    "CS265": {
      "name": "Advanced Programming Tools and Techniques",
      "description": "Introduction to the basic principles of programming practice: testing, debugging, portability, performance, design alternatives, and style. Application in a variety of programming languages, programming environments, and operating systems. Introduction to tools used in the software development process for improving program functionality, performance, and robustness.",
      "credits": "3.0",
      "pre-reqs": ["CS172/CS176/CS133/SE103/ECEC301/ECEC201"]
    },
    "CS270": {
      "name": "Mathematical Foundations of Computer Science",
      "description": "Introduces formal logic and its connections to Computer Science. Students learn to translate statements about the behavior of computer programs into logical claims and to prove such assertions using both traditional techniques and automated tools. Considers approaches to proving termination, correctness, and safety for programs. Discusses propositional and predicate logic, logical inference, recursion and recursively defined sets, mathematical induction, and structural induction.",
      "credits": "3.0",
      "pre-reqs": ["CS172/CS176/CS265/SE103/ECEC301/ECEC201"]
    },
    "CS277": {
      "name": "Algorithms and Analysis",
      "description": "Introduces foundational concepts in Computer Science theory, including computability, decidability, the Turing Machine, and algorithmic complexity. Applies concepts underlying graph theory and automata to current topics in computing to create contextualized connections between theory and practice.",
      "credits": "3.0",
      "pre-reqs": ["CS260"]
    },
    "CS281": {
      "name": "Systems Architecture",
      "description": "Covers internal function and organization of digital computers, including instruction sets, addressing methods, input-output architectures, central processor organization, machine language, and assembly language.",
      "credits": "3.0",
      "pre-reqs": ["CS270/ECE200", "CS172/CS176/SE103/ECEC301/ECEC201"]
    },
    "CS283": {
      "name": "Systems Programming",
      "description": "This course introduces computer systems, including interaction of hardware and software through the operating system, from the programmer's perspective. Three fundamental abstractions are emphasized: processes, virtual memory, and files. These abstractions provide programmers a common interface to a wide variety of hardware devices. Topics covered include linking, system level I/O, concurrent programming, and network programming.",
      "credits": "3.0",
      "pre-reqs": ["CS265"]
    },
    "CS300": {
      "name": "Applied Symbolic Computation",
      "description": "This course covers the fundamentals of symbolic mathematical methods as embodied in symbolic mathematics software systems, including: fundamental techniques, simplification of expressions, solution of applications problems, intermediate expressions swell, basic economics of symbolic manipulation, efficient solution methods for large problems, hybrid symbolic/numeric techniques.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS270", "MATH200", "MATH201"]
    },
    "CS303": {
      "name": "Algorithmic Number Theory and Cryptography",
      "description": "Covers fundamental algorithms for integer arithmetic, greatest common divisor calculation, modular arithmetic, and other number theoretic computations. Algorithms are derived, implemented and analyzed for primality testing and integer factorization. Applications to cryptography are explored including symmetric and public-key cryptosystems. A cryptosystem will be implemented and methods of attack investigated.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "MATH221/MATH222", "MATH201/ENGR231"]
    },
    "CS314": {
      "name": "Computing in the Small",
      "description": "Explores the technologies and techniques associated with microcontrollers and Systems on Chips (SOCs) as well as their use in embedded systems. A major focus is on developing software to control input and output devices.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS338": {
      "name": "Graphical User Interfaces",
      "description": "This course covers the design and implementation of graphical user interfaces. Topics include: event-driven programming, application programmer interfaces, widgets, callback functions, windowing systems and desktops, rapid prototyping languages, multithreaded GUI's. A term project involving implementation of a complex application will be undertaken.",
      "credits": "3.0",
      "pre-reqs": ["SE310/CS275"]
    },
    "CS341": {
      "name": "Serious Game Development",
      "description": "The goal of this course is to learn more about serious games, that is games used in a non-entertainment context, such as games for health, education, and persuasion, through readings and through the design, development, and implementation of serious games.",
      "credits": "3.0",
      "pre-reqs": []
    },
    "CS342": {
      "name": "Experimental Game Development",
      "description": "The goal of this course is to develop new ideas and innovations in games through the design, development, and implementation of games using short development cycles and creative thematic constraints.",
      "credits": "3.0",
      "pre-reqs": ["CS345", "GMAP345"]
    },
    "CS345": {
      "name": "Computer Game Design and Development",
      "description": "This course introduces students to the computer game design process. Students also learn how the individual skills of modeling, animation, scripting, interface design and story telling are coordinated to produce interactive media experiences for various markets, devices and purposes.",
      "credits": "3.0",
      "pre-reqs": ["DIGM260/GMAP260", "CS265/DIGM141"]
    },
    "CS352": {
      "name": "Processor Architecture & Analysis",
      "description": "This course covers performance evaluation and benchmarking, pipelining, superscalar processors, multiprocessors, and interfacing processors and peripherals. The memory hierarchy, including cache and virtual memory, are also explored from a programmer's perspective with high-performance computing techniques in mind.",
      "credits": "3.0",
      "pre-reqs": ["CS281/ECEC355"]
    },
    "CS360": {
      "name": "Programming Language Concepts",
      "description": "Introduces the design and implementation of modern programming languages: formal theory underlying language implementation; concerns in naming, binding, storage allocation and typing; semantics of expressions and operators, control flow, and subprograms; procedural and data abstraction; functional, logic, and object-oriented languages. Students will construct an interpreter for a nontrivial language.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS265", "CS270"]
    },
    "CS361": {
      "name": "Concurrent Programming",
      "description": "Covers programming of concurrent, cooperating sequential processes. Studies race conditions, critical sections, mutual exclusion, process synchronization, semaphores, monitors, message passing, the rendezvous, deadlock, and starvation.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS281/ECEC355"]
    },
    "CS365": {
      "name": "System Administration",
      "description": "Fundamentals of system administration featuring hands-on practice with an industry standard operating system. Focus on installation, maintenance and management of several systems for multi-user environments.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS265"]
    },
    "CS370": {
      "name": "Operating Systems",
      "description": "Explores the internal algorithms and structures of operating systems: CPU scheduling, memory management, file systems, and device management. Considers the operating system as a collection of cooperating sequential processes (servers) providing an extended or virtual machine that is easier to program than the underlying hardware. Topics include virtual memory, input/output devices, disk request scheduling, deadlocks, file allocation, and security and protection.",
      "credits": "3.0",
      "pre-reqs": ["CS283/ECEC353"]
    },
    "CS375": {
      "name": "Web and Mobile App Development",
      "description": "This course introduces students to web-based and mobile development technologies and practices, including tiered application development, Service-Oriented Architectures and associated exchange protocols, and web-database programming. This course explores development and integration of web services from well-known providers as well as services created by the student, using a mobile platform as a vehicle for interactions with the services.",
      "credits": "3.0",
      "pre-reqs": ["CS265/CS164&CI103", "CS172/CS176"]
    },
    "CS377": {
      "name": "Software Security",
      "description": "This course introduces students to foundational concepts underpinning the broad area of software security. It covers topics such as cryptography, access control, software flaws, malicious software, insecurity in software, and operating systems security.",
      "credits": "3.0",
      "pre-reqs": ["CS283/ECEC353"]
    },
    "CS380": {
      "name": "Artificial Intelligence",
      "description": "Explores the foundations of artificial intelligence: production systems, heuristic programming, knowledge representation, and search algorithms. Also covers programming in an AI language. Additional topics chosen from game theory, decision support systems, pattern matching and recognition, image understanding, natural language, fuzzy and non-monotonic logic, machine learning, theorem proving, and common sense reasoning.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS270"]
    },
    "CS383": {
      "name": "Machine Learning",
      "description": "This course covers the fundamentals of modern statistical machine learning. Lectures will cover the theoretical foundation and algorithmic details of representative topics including probabilities and decision theory, regression, classification, graphical models, mixture models, clustering, expectation maximization, hidden Markov models, and weak learning.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "MATH201/ENGR231", "MATH221/MATH222", "MATH311/MATH410/ECE361"]
    },
    "CS385": {
      "name": "Evolutionary Computing",
      "description": "This course covers computational intelligence approaches to problem solving for classification, adaptation, optimization, and automated control. Methods covered will include evolutionary programming/genetic algorithms, genetic programming, neural networks, swarm optimization, and fuzzy logic.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS380"]
    },
    "CS387": {
      "name": "Game AI Development",
      "description": "This course focuses on artificial intelligence (AI) techniques for computer games. Students will learn both basic and advanced AI techniques that are used in a variety of game genres including first-person shooters, driving games, strategy games, platformers, etc. The course will emphasize the difference between traditional AI and game AI, the latter having a strong design component, focusing on creating games that are “fun to play.” Topics include path-finding, decision-making, strategy and machine learning in games.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS380"]
    },
    "CS430": {
      "name": "Computer Graphics",
      "description": "The course presents the fundamental geometric representations and drawing algorithms of computer graphics through lectures and programming assignments. The representations include lines, curves, splines, polygons, meshes, parametric surfaces and solids. The algorithms include line drawing, curve and surface evaluation, polygon filling, clipping, 3D-to-2D projection and hidden surface removal.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "MATH201/MATH261/ENGR231"]
    },
    "CS431": {
      "name": "Advanced Rendering Techniques",
      "description": "The creation of realistic images from 3D models is central to the development of computer graphics. The ray tracing algorithm has become one of the most popular and powerful techniques for creating photo-realistic images. This class explores the algorithmic components of ray tracing. Students implement many of these components in their class programming projects.",
      "credits": "3.0",
      "pre-reqs": ["CS430/CS432"]
    },
    "CS432": {
      "name": "Interactive Computer Graphics",
      "description": "This is a project-oriented class that covers the concepts and programming details of interactive computer graphics. These include graphics primitives, display lists, picking, shading, rendering buffers and transformations. Students will learn an industry-standard graphics system by implementing weekly programming assignments. The course culminates with a student-defined project.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "MATH201/MATH261/ENGR231"]
    },
    "CS435": {
      "name": "Computational Photography",
      "description": "Fundamentals of computational photography, an interdisciplinary field at the intersection of computer vision, graphics, and photography. Covered topics include fundamentals of cameras, novel camera designs, image manipulation, single-view modeling, and image-based rendering with an emphasis on learning the computational methods and their underlying mathematical concepts through hands-on assignments.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "MATH201/MATH261/ENGR231"]
    },
    "CS440": {
      "name": "Theory of Computation",
      "description": "Finite automata, regular sets, and regular expressions; pushdown automata, context-free languages, and normal forms for grammars; Turing machines and recursively enumerable sets; Chomsky hierarchy; computability theory.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "MATH201/MATH261/ENGR231"]
    },
    "CS441": {
      "name": "Compiler Workshop I",
      "description": "Design and implementation of compiler for specified language. Practical application and in-depth study of parsing, scanning, run-time storage management, type analysis, code generation, and error recovery.",
      "credits": "3.0",
      "pre-reqs": ["CS270", "CS283/ECEC353", "CS360", "CS440"]
    },
    "CS442": {
      "name": "Compiler Workshop II",
      "description": "Continuation of CS 441. Advanced topics in compilation, code generation, and optimization for various programming languages and paradigms.",
      "credits": "3.0",
      "pre-reqs": ["CS441"]
    },
    "CS445": {
      "name": "Topics in Computer Gaming",
      "description": "Contemporary topics in the design and implementation of computer games. Topics may include game genres, psychological and sociological aspects of games, software tools and game development engines, character and behavior modeling, physical models and realism, virtual reality, graphics and animation, network-based games, performance analysis and efficiency.",
      "credits": "3.0",
      "pre-reqs": ["CS345/DIGM345"]
    },
    "CS457": {
      "name": "Data Structure and Algorithms I",
      "description": "This course covers techniques for analyzing algorithms, including: asymptotic analysis, recurrence relations, and probabilistic analysis; data structures such as hash tables and binary trees; algorithm design techniques such as dynamic programming, greedy methods, and divide & conquer, as well as graph algorithms for graph traversal, minimum spanning trees, and shortest paths.",
      "credits": "3.0",
      "pre-reqs": ["CS260", "CS270", "MATH221/MATH222"]
    },
    "CS458": {
      "name": "Data Structures and Algorithms II",
      "description": "This course covers the amortized analysis of algorithms and data structures; Fibonacci heaps; graph algorithms for maximizing network flow and computing minimum all pairs shortest paths; string matching algorithms; NP-Completeness and approximation algorithms.",
      "credits": "3.0",
      "pre-reqs": ["CS457"]
    },
    "CS461": {
      "name": "Database Systems",
      "description": "Covers topics including structure and function of database systems, normal form theory, data models (relational, network, and hierarchical), query processing (ISBL), relational algebra and calculus, and file structures. Includes programming project using DBMS.",
      "credits": "3.0",
      "pre-reqs": ["CS260"]
    },
    "CS465": {
      "name": "Privacy and Trust",
      "description": "This course will motivate the need for privacy protection and introduce basic privacy properties such as anonymity, unlinkability or unobservability. We will then discuss how these properties can be formalized, modeled and measured. The course will provide a broad overview of the state-of-the-art in privacy technologies, explain the main issues that these technologies address, what the current solutions are able to achieve, and the remaining open problems.",
      "credits": "3.0",
      "pre-reqs": ["CS303"]
    },
    "CS467": {
      "name": "Security and Human Behavior",
      "description": "Humans are usually the weakest link in information security. Technical measures are easily thwarted by end- user decisions. How are end user decisions made? This course examines security decisions online from the distinct perspective of economics, psychology, anthropology, evolutionary biology, and criminology. We will address topics such as System I vs. System II, mental models, risk perceptions, safety engineering, groups behaviors in primates.",
      "credits": "3.0",
      "pre-reqs": ["ECON201", "INFO110/INFO310", "PSY101"]
    },
    "CS472": {
      "name": "Computer Networks: Theory, Applications, and Programming",
      "description": "Introduction to computer networking theory, applications and programming, focusing on large heterogeneous networks. Broad topdown introductions to computer networking concepts including distributed applications, socket programming, operation system and router support, router algorithms, and sending bits over congested, noisy and unreliable communication links.",
      "credits": "3.0",
      "pre-reqs": ["CS361/CS282/ECEC353"]
    },
    "CS475": {
      "name": "Computer and Network Security",
      "description": "The key objective of this course is to provide a thorough understanding of technologies and methodologies with which computer networks can be protected. Topics that are covered include: key management and credentials, steganography and watermarking, networking security (VPNs, firewalls, intrusion detection) and system security policies.",
      "credits": "3.0",
      "pre-reqs": ["CS472/CS283/ECEC353"]
    },
    "CS476": {
      "name": "High Performance Computing",
      "description": "This course is an introduction to high performance computing, including concepts and applications. Course contents will include discussions of different types of high performance computer architectures (multi-core/multi-threaded processors, parallel computers, etc), the design, implementation, optimization and analysis of efficient algorithms for uni-processors, multi-threaded processors, parallel computers, and high performance programming.",
      "credits": "3.0",
      "pre-reqs": ["CS281", "CS283"]
    },
    "CS479": {
      "name": "Advanced Network Security",
      "description": "A study of what it takes to make a network secure, starting with an analysis of the sometimes conflicting goals (e.g. anonymity vs. traceability) through the mechanisms that can be used to achieve these goals. Covers in depth both the design options available and the design decisions made in various deployed systems, including Kerberos, IPsec, SSL, and X.509.",
      "credits": "3.0",
      "pre-reqs": ["CS475"]
    },
    "CS481": {
      "name": "Advanced Artificial Intelligence",
      "description": "This course covers topics in representation, reasoning, and decision-making under uncertainty; learning; solving problems with time-varying properties. Assignments applying AI techniques toward building intelligent machines that interact with dynamic, uncertain worlds will be given.",
      "credits": "3.0",
      "pre-reqs": ["CS380", "MATH311/MATH410/ECE361"]
    },
    "SE310": {
      "name": "Software Architecture I",
      "description": "Study of macro-level software system architectures with an emphasis on approaches to interconnection and distribution of current and emerging architectural styles.",
      "credits": "3.0",
      "pre-reqs": ["SE211", "CS265", "CS260"]
    },
    "SE181": {
      "name": "Introduction to Software Engineering and Development",
      "description": "Introduces advanced software development fundamentals including memory management, typing and scoping, datastores, software testing, and security, as well as user-centric design and user experience. This course will be taught using a specified programming language of instruction.",
      "credits": "3.0",
      "pre-reqs": ["CS172"]
    },
    "SE310":{
      "name": "Software Architecture I",
      "description": "Study of macro-level software system architectures with an emphasis on approaches to interconnection and distribution of current and emerging architectural styles.",
      "credits": "3.0",
      "pre-reqs": ["CS265","CS260"]
    },
    "SE311":{
      "name": "Software Architecture II",
      "description": "Continues discussion of software architecture with a focus on micro-level architecture including patterns, frameworks, and component-based software engineering, and commercial off-the-shelf software.",
      "credits": "3.0",
      "pre-reqs": ["SE310","CS350"]
    },
    "SE410":{
      "name": "Software Evolution",
      "description": "Covers issues related to change in software systems. Addresses principles and techniques of corrective software maintenance, software enhancements, and software product family. Introduces students to issues of change in large software systems including configuration control, change and product management.",
      "credits": "3.0",
      "pre-reqs": ["CS260"]
    },
    "ECEC201": {
      "name": "Advanced Programming for Engineers",
      "description": "This course will cover advanced usage and understanding of programming concepts using the C programming language within a Linux development environment. C will serve as a foundation for future embedded firmware and system level software authorship as well as a means to better understand the underlying program execution model and memory organization used by modern computing systems.",
      "credits": "3.0",
      "pre-reqs": ["ENGR131", "ENGR132","ECE203","CS 171"]
    },
    "ECEC356": {
      "name": "Embedded Systems",
      "description": "Lectures will cover theoretical concepts of embedded and cyber‐physical systems including discrete and continuous dynamics, hybrid systems, state machines, concurrent computation, embedded systems architecture and scheduling. Lab involves programming embedded applications for the decentralized software services architecture using C# and the Microsoft Robotics Software Development Kit (SDK) together with the hardware image processing and tracking capabilities of the Kinect sensor.",
      "credits": "4.0",
      "pre-reqs": ["ECEC204", "ECEC304"]
    },
    "ECEC413": {
      "name": "Introduction to Parallel Computer Architecture",
      "description": "This course provides an introduction to the fundamental principles and engineering trade-offs involved in designing modern parallel computers (multi-processors). Topics covered include, but are not limited to, shared-memory and message-passing programming, cache-coherence, synchronization, scalable distributed memory multi-processors, and interconnection techniques.",
      "credits": "3.0",
      "pre-reqs": ["ECEC355", "CS281"]
    },
    "GMAP377": {
      "name": "Game Development: Workshop I",
      "description": "This course examines the roles of the executive producer and the development team in taking a computer game from concept to design document through production. Students will work in small teams to research andplan a production effort that results in a pre-production prototype.",
      "credits": "3.0",
      "pre-reqs": ["GMAP345", "DIGM345", "CS345"]
    },
    "GMAP378": {
      "name": "Game Development: Workshop II",
      "description": "This course provides an environment in which the pre-production of GMAP 377 Game Development: Workshop I can be taken through a full production effort. Students work in small teams to bring a selected prototype to completion.",
      "credits": "3.0",
      "pre-reqs": ["GMAP377", "DIGM361"]
    },
    "MATH300": {
      "name": "Numerical Analysis I",
      "description": "The course covers root finding and fixed points, polynomial interpolation, splines, numerical integration and numerical differentiation. The course emphasizes computational solutions.",
      "credits": "4.0",
      "pre-reqs": ["MATH200", "MATH201", "MATH261", "CS171", "CS123"]
    },
    "MATH301": {
      "name": "Numerical Analysis II",
      "description": "A continuation of MATH 300. This course focuses on time dependent problems. It includes numerical solution of ordinary differential equation, the heat and wave equations, and moving interfaces. The discussed techniques include implicit schemes or ODEs, finite differences, spectral methods and the level set method.",
      "credits": "3.0",
      "pre-reqs": ["MATH300"]
    },
    "MATH305": {
      "name": "Introduction to Optimization Theory",
      "description": "Provides a broad survey of mathematical techniques in optimization theory used in operations research and management science. Includes topics selected from the following categories: linear programming, integer programming, network flows, and nonlinear programming.",
      "credits": "4.0",
      "pre-reqs": ["MATH201", "MATH261"]
    },
    "INFO310":{
      "name": "Human-Centered Design Process & Methods",
      "description": "Introduces the student to the process of human-centered design of interactive user interfaces. Teaches some of the basic approaches to design and evaluation of interactive user interfaces. Delivers practical advice on interaction design challenges. Applies human-centered design principles in the design of the user interface to an interactive computer system.",
      "credits": "3.0",
      "pre-reqs": ["INFO110", "INFO151", "CS171", "ECE105", "ECE203"]
    },
    "PSY337":{
      "name": "Human-Computer Interaction",
      "description": "Applies cognitive and experimental psychology to understanding how to improve the design and usability of interactive computing systems.",
      "credits": "3.0",
      "pre-reqs": ["PSY101", "PSY112"]
    }
  }
}];

var data = masterlist[0];
var classData = data.classes;
var coreClasses = data.CS_core;
var tracks = data.tracks;

//function that given the class key ie "CS101" returns an array with 0 = key, 1 = class name, 2 = # of credits
function getClassInfo(key){
    var classInfo = classData[key];
    var classArray = new Array(key,classInfo.name,classInfo.credits);
    return classArray;
}

//function that given the class key ie "CS101" returns an string with the class name
function getName(key){
    var classInfo = classData[key];
    return classInfo.name;
}

//function that given the class key ie "CS101" returns an string with the class credits
function getCredits(key){
    var classInfo = classData[key];
    return classInfo.credits;
}

//function that given the class key ie "CS101" returns an string with the class description
function getDescription(key){
    var classInfo = classData[key];
    return classInfo.description;
}

//function that given the class key ie "CS101" returns an array of class keys
function getPreReqs(key){
    var classInfo = classData[key];
    return classInfo["pre-reqs"];
}

//function that retuns an array of arrays pulling all 100 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get100s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==1){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that retuns an array of arrays pulling all 200 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get200s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==2){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that retuns an array of arrays pulling all 300 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get300s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==3){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that retuns an array of arrays pulling all 400 level classes each class being an array where 0 = key, 1 = class name, 2 = # of credits
function get400s(){
    var classArray = [];
    for(var k in classData){
        if(k.substr(2,1)==4){
            var c = getClassInfo(k);
            classArray.push(c);
        }
    }
    return classArray;
}

//function that given a track name returns an array of arrays pulling all classes for the given track each class being an array where 0 = key, 1 = class name, 2 = # of credits
//if there is one or more class with options the key (0) will be "options", class name (1) will be the number of those class options need to be taken and # credits (2) will be an array of the option class information
function getTrack(track){
    var trackClasses = tracks[track];
    var classArray = [];
    var repeat = 0;
    
    for (var i in trackClasses){
        var s = trackClasses[i]
        
        if(s.length > 7){
            if (repeat == 0){
                var ors = s.split("/");
                var orsArray = [];
                for(k in ors){
                    var c = getClassInfo(ors[k]);
                    orsArray.push(c);
                }
            }
            repeat++;
        }
        
        else{
            var c = getClassInfo(s);
            classArray.push(c);
        }
    }
    if(repeat>0){
            var repArray = new Array("options",repeat,orsArray);
            classArray.push(repArray);
    }
    
    
    return classArray;
}

//function that returns an array of classes
//each class being an array where 0 = key, 1 = class name, 2 = # of credits
function getCore(year, quarter){
    var q = "quarter" + quarter;
    var y = coreClasses[year];
    var classList = y[q];
    var classArray = [];
    
    for(var i in classList){
        var c = getClassInfo(classList[i]);
        classArray.push(c);
    }
    
    return classArray;
}
