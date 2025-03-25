// src/app/tutorials/tree-overview.js

const treeOverview = {
  title: "Introduction to Tree Data Structures",
  slug: "tree-overview", // or "tree-data-structures-overview" if preferred
  excerpt: "Understand the basics of tree data structures and their applications.",
  description:
    "This chapter introduces tree data structures used for efficient searching, sorting, and data organization. It covers topics including B Trees and Binary Search Trees (BSTs).",
  image:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  imagePath:
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
  publishedAt: "2024-03-21",
  date: "March 21, 2024",
  author: "Swayam Dani",
  readTime: "10 min read",
  difficulty: "Beginner",
  category: "dsa",
  module: "Trees",
  introduction:
    "Trees are hierarchical data structures that are crucial for various applications. This chapter covers the fundamentals and introduces the following topics:",
  topics: [
    {
      title: "B Trees",
      description: "Learn about B Trees, a self-balancing tree data structure used in databases.",
      moduleSlug: "b-trees-cpp" // Ensure you have a corresponding tutorial for B Trees.
    },
    {
      title: "Binary Search Trees (BSTs)",
      description: "Master BSTs for efficient sorted data management in C++.",
      moduleSlug: "binary-search-tree-cpp"
    }
  ],
  conclusion:
    "Understanding these tree structures will prepare you for more advanced algorithms and data organization challenges.",
  furtherReading: [
    {
      title: "Binary Search Tree Implementation",
      url: "https://en.cppreference.com/"
    }
  ]
};

export default treeOverview;
