// src/app/tutorials/course-overview.js

const dsaCourse = {
  title: "Data Structures & Algorithms in C++: Complete Course",
  slug: "dsa-cpp-course-overview",
  excerpt: "A comprehensive guide to mastering data structures and algorithms using C++.",
  description:
    "Master fundamental and advanced data structures and algorithms with this comprehensive C++ implementation guide, complete with complexity analysis and practical applications.",
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  imagePath:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  publishedAt: "2024-03-22",
  date: "March 22, 2024",
  author: "Swayam Dani",
  readTime: "5 min read",
  difficulty: "All Levels",
  category: "dsa",
  module: "Course Overview",
  introduction:
    "Welcome to this comprehensive tutorial series on Data Structures and Algorithms using C++. This course is structured like a textbook, with chapters and topics. Click a chapter below to view its overview and then dive into specific topics.",
  prerequisites: [
    "Basic knowledge of C++ programming",
    "Familiarity with fundamental programming concepts",
    "Understanding of basic mathematical concepts",
    "C++ development environment (compiler and IDE)"
  ],
  // Chapters (modules) – each chapter links to its overview page
  modules: [
    {
      title: "Linked Lists",
      content:
        "This chapter introduces linked lists – dynamic data structures that allow efficient insertion and deletion. Click to view the Linked Lists Overview, where you'll find topics such as Singly, Doubly, and Circular Linked Lists.",
      moduleSlug: "linked-lists-overview"
    },
    {
      title: "Trees",
      content:
        "This chapter covers tree data structures used for efficient searching and sorting. Click to view the Trees Overview, where you'll find topics like B Trees and Binary Search Trees.",
      moduleSlug: "tree-overview" // Adjust if your trees overview page uses a different slug (for example, "tree-data-structures-overview")
    }
  ],
  learningOutcomes: [
    "Implement a wide range of data structures from scratch in C++",
    "Analyze algorithms for time and space complexity",
    "Select appropriate data structures for specific problem scenarios",
    "Optimize algorithms for better performance",
    "Apply algorithm design techniques to solve complex problems",
    "Develop problem-solving skills for technical interviews"
  ],
  teachingMethodology: [
    "Conceptual explanations with visual diagrams",
    "Step-by-step C++ implementations",
    "Complexity analysis",
    "Practical examples and use cases",
    "Tips for avoiding common pitfalls",
    "Practice problems and solutions"
  ],
  conclusion:
    "This course equips you with the skills to implement, analyze, and optimize a wide range of data structures and algorithms in C++. Choose a chapter to begin your journey.",
  nextSteps: [
    "Select a chapter to view its detailed overview and topics.",
    "Follow the recommended progression within each chapter.",
    "Practice coding the implementations in C++.",
    "Review additional resources for deeper insights."
  ],
  relatedTutorials: [
    {
      title: "Introduction to C++ Programming",
      slug: "intro-cpp-programming",
      excerpt: "Learn the basics of C++ programming to prepare for this DSA course."
    },
    {
      title: "Mastering Technical Interviews",
      slug: "mastering-technical-interviews",
      excerpt: "Strategies and practice for succeeding in technical coding interviews."
    }
  ],
  testimonials: [
    {
      name: "Alex Chen",
      role: "Software Engineer at Google",
      comment:
        "This course helped me understand data structures in a way that directly improved my coding skills. The explanations are clear and practical."
    },
    {
      name: "Priya Sharma",
      role: "Computer Science Student",
      comment:
        "As someone new to DSA, this course was incredibly accessible. The visual explanations alongside code examples made complex topics much easier to grasp."
    },
    {
      name: "Marcus Johnson",
      role: "Competitive Programmer",
      comment:
        "The advanced sections gave me the edge I needed in contests. Detailed complexity analysis and optimization tips were especially useful."
    }
  ],
  faq: [
    {
      question: "Is this course suitable for beginners?",
      answer:
        "Yes, the course starts with foundational concepts and gradually builds up to advanced topics, making it accessible for beginners."
    },
    {
      question: "How much time should I dedicate to each chapter?",
      answer:
        "We recommend spending 1-2 weeks per chapter, with extra time for practice and review."
    },
    {
      question: "Will this help me prepare for coding interviews?",
      answer:
        "Absolutely! The course covers all essential data structures and algorithms commonly tested in technical interviews."
    },
    {
      question: "Are there practice problems included?",
      answer:
        "Yes, each tutorial includes practice problems to help reinforce your learning."
    },
    {
      question: "Do I need any special software?",
      answer:
        "Any C++ compiler and IDE will work. Setup instructions are provided for popular environments like Visual Studio and CLion."
    }
  ],
  additionalResources: [
    {
      title: "C++ Reference",
      url: "https://en.cppreference.com/",
      description: "Comprehensive reference for the C++ language and standard library."
    },
    {
      title: "Visualgo",
      url: "https://visualgo.net/",
      description: "Visualizations of data structures and algorithms."
    },
    {
      title: "LeetCode",
      url: "https://leetcode.com/",
      description: "Practice problems for mastering algorithms and data structures."
    },
    {
      title: "Introduction to Algorithms (CLRS)",
      description:
        "The definitive textbook on algorithms by Cormen, Leiserson, Rivest, and Stein."
    }
  ]
};

export default dsaCourse;
