// src/app/tutorials/linked-lists-overview.js

const linkedListsOverview = {
  title: "Introduction to Linked Lists",
  slug: "linked-lists-overview",
  excerpt: "Understand the fundamental concepts of linked lists and their variations.",
  description:
    "This chapter introduces linked lists—dynamic data structures that allow efficient insertions and deletions. It covers various topics including Singly, Doubly, and Circular Linked Lists.",
  image:
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png",
  imagePath:
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gq/2013/03/Linkedlist.png",
  publishedAt: "2024-03-22",
  date: "March 22, 2024",
  author: "Swayam Dani",
  readTime: "10 min read",
  difficulty: "Beginner",
  category: "dsa",
  module: "Linked Lists",
  introduction:
    "Linked Lists are fundamental data structures that are essential for understanding dynamic memory allocation and efficient data manipulation. In this chapter, we cover the basics and introduce the following topics:",
  // Topics within the Linked Lists chapter.
  topics: [
    {
      title: "Singly Linked List",
      description: "Learn how to implement a singly linked list in C++.",
      moduleSlug: "singly-linked-list-cpp"
    },
    {
      title: "Doubly Linked List",
      description: "Explore the implementation of doubly linked lists for bidirectional traversal.",
      moduleSlug: "doubly-linked-list-cpp"
    },
    {
      title: "Circular Linked List",
      description: "Understand and implement circular linked lists for continuous traversal.",
      moduleSlug: "circular-linked-list-cpp"
    }
  ],
  conclusion:
    "By mastering these topics, you'll build a strong foundation in linked lists and be prepared for more advanced data structures.",
  furtherReading: [
    {
      title: "Linked Lists in Modern C++",
      url: "https://en.cppreference.com/w/cpp/container/forward_list"
    }
  ]
};

export default linkedListsOverview;
