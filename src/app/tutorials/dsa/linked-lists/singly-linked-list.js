// src/app/tutorials/linked-lists/singly-linked-list.js

const singlyLinkedList = {
  title: "Implementing a Singly Linked List in C++",
  slug: "singly-linked-list-cpp",
  excerpt: "Learn how to create and manipulate a singly linked list data structure in C++.",
  description:
    "A comprehensive, step-by-step guide to implementing a singly linked list in C++, covering node structure, insertion, deletion, traversal, search, and advanced operations.",
  image: "https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png",
  imagePath: "https://www.geeksforgeeks.org/wp-content/uploads/gq/2013/03/Linkedlist.png",
  publishedAt: "2024-03-20",
  date: "March 20, 2024",
  author: "Swayam Dani",
  readTime: "15 min read",
  difficulty: "Beginner",
  category: "dsa",
  module: "Linked Lists",
  introduction:
    "A singly linked list is the most basic type of linked list, where each node points only to the next node in the sequence. In this tutorial, we'll build a complete singly linked list implementation in C++ from scratch. You'll learn how to create the node structure, implement insertion and deletion operations, traverse and search the list, and even perform advanced operations like reversing the list and finding the middle node.",
  prerequisites: [
    "Basic C++ programming knowledge",
    "Understanding of pointers and dynamic memory allocation",
    "Familiarity with classes and object-oriented programming"
  ],
  steps: [
    {
      title: "Defining the Node Structure",
      content:
        "The first step is to define a Node structure that will hold our data and a pointer to the next node. This simple structure forms the building block of the linked list.",
      code: "// Node structure for a singly linked list\nstruct Node {\n    int data;         // Data stored in the node\n    Node* next;       // Pointer to the next node\n    \n    // Constructor\n    Node(int value) : data(value), next(nullptr) {}\n};"
    },
    {
      title: "Creating the SinglyLinkedList Class",
      content:
        "Next, create a class that encapsulates the linked list operations. This class will maintain a pointer to the head of the list and provide methods for various operations.",
      code: "class SinglyLinkedList {\nprivate:\n    Node* head;  // Pointer to the first node\npublic:\n    SinglyLinkedList() : head(nullptr) {}\n    \n    ~SinglyLinkedList() {\n        Node* current = head;\n        while (current != nullptr) {\n            Node* next = current->next;\n            delete current;\n            current = next;\n        }\n        head = nullptr;\n    }\n    \n    // Additional methods will be implemented below\n};"
    },
    {
      title: "Implementing Insertion Operations",
      content:
        "Now, add methods to insert nodes at various positions in the list. We'll cover insertion at the beginning, at the end, and at a specific position.",
      code: "// Insert at the beginning - O(1)\nvoid insertAtBeginning(int value) {\n    Node* newNode = new Node(value);\n    newNode->next = head;\n    head = newNode;\n}\n\n// Insert at the end - O(n)\nvoid insertAtEnd(int value) {\n    Node* newNode = new Node(value);\n    if (head == nullptr) {\n        head = newNode;\n        return;\n    }\n    Node* current = head;\n    while (current->next != nullptr) {\n        current = current->next;\n    }\n    current->next = newNode;\n}\n\n// Insert at a specific position (0-based index) - O(n)\nvoid insertAtPosition(int position, int value) {\n    if (position == 0) {\n        insertAtBeginning(value);\n        return;\n    }\n    Node* newNode = new Node(value);\n    Node* current = head;\n    for (int i = 0; i < position - 1 && current->next != nullptr; i++) {\n        current = current->next;\n    }\n    newNode->next = current->next;\n    current->next = newNode;\n}"
    },
    {
      title: "Implementing Deletion Operations",
      content:
        "Deletion is as important as insertion. Here, we implement methods to delete a node from the beginning, the end, and a specific position in the list.",
      code: "// Delete from the beginning - O(1)\nbool deleteFromBeginning() {\n    if (head == nullptr) return false;\n    Node* temp = head;\n    head = head->next;\n    delete temp;\n    return true;\n}\n\n// Delete from the end - O(n)\nbool deleteFromEnd() {\n    if (head == nullptr) return false;\n    if (head->next == nullptr) {\n        delete head;\n        head = nullptr;\n        return true;\n    }\n    Node* current = head;\n    while (current->next->next != nullptr) {\n        current = current->next;\n    }\n    delete current->next;\n    current->next = nullptr;\n    return true;\n}\n\n// Delete from a specific position (0-based index) - O(n)\nbool deleteFromPosition(int position) {\n    if (head == nullptr) return false;\n    if (position == 0) return deleteFromBeginning();\n    Node* current = head;\n    for (int i = 0; i < position - 1 && current->next != nullptr; i++) {\n        current = current->next;\n    }\n    if (current == nullptr || current->next == nullptr) return false;\n    Node* temp = current->next;\n    current->next = temp->next;\n    delete temp;\n    return true;\n}"
    },
    {
      title: "Implementing Search and Display Operations",
      content:
        "To interact with the linked list, add methods for searching a value, computing the length of the list, and displaying the list elements.",
      code: "// Search for a value - O(n)\nbool search(int value) {\n    Node* current = head;\n    while (current != nullptr) {\n        if (current->data == value) return true;\n        current = current->next;\n    }\n    return false;\n}\n\n// Get the length of the list - O(n)\nint length() {\n    int count = 0;\n    Node* current = head;\n    while (current != nullptr) {\n        count++;\n        current = current->next;\n    }\n    return count;\n}\n\n// Display the list - O(n)\nvoid display() {\n    Node* current = head;\n    while (current != nullptr) {\n        std::cout << current->data;\n        if (current->next != nullptr) std::cout << \" -> \";\n        current = current->next;\n    }\n    std::cout << std::endl;\n}"
    },
    {
      title: "Advanced Operations: Reverse and Find Middle Node",
      content:
        "Finally, we implement some advanced operations: reversing the linked list and finding the middle node using the slow-fast pointer approach.",
      code: "// Reverse the linked list - O(n)\nvoid reverse() {\n    Node* prev = nullptr;\n    Node* current = head;\n    Node* next = nullptr;\n    while (current != nullptr) {\n        next = current->next;\n        current->next = prev;\n        prev = current;\n        current = next;\n    }\n    head = prev;\n}\n\n// Find the middle node - O(n)\nNode* findMiddle() {\n    if (head == nullptr) return nullptr;\n    Node* slow = head;\n    Node* fast = head;\n    while (fast != nullptr && fast->next != nullptr) {\n        slow = slow->next;\n        fast = fast->next->next;\n    }\n    return slow;\n}"
    }
  ],
  conclusion:
    "Congratulations! You've successfully implemented a complete singly linked list in C++. This tutorial covered everything from the basic node structure and class design to advanced operations like reversing the list and finding the middle node. Understanding these fundamentals will serve as a strong foundation for tackling more complex data structures.",
  nextSteps: [
    "Practice by modifying and extending the provided code.",
    "Proceed to the doubly linked list tutorial to learn about bidirectional linked lists.",
    "Challenge yourself by implementing error handling and memory optimizations."
  ],
  relatedTutorials: [
    {
      slug: "doubly-linked-list-cpp",
      title: "Implementing a Doubly Linked List in C++",
      excerpt: "Learn how to create and manipulate a doubly linked list in C++."
    },
    {
      slug: "circular-linked-list-cpp",
      title: "Implementing a Circular Linked List in C++",
      excerpt: "Understand how to implement a circular linked list in C++ for continuous traversal."
    }
  ],
  teachingMethodology: [
    "Step-by-step implementation with detailed code examples",
    "Clear explanations of each operation",
    "Visual diagrams to illustrate data flow and structure",
    "Practical tips for memory management and optimization"
  ],
  faq: [
    {
      question: "What is a singly linked list?",
      answer: "A singly linked list is a linear data structure where each node contains data and a pointer to the next node."
    },
    {
      question: "Why use a singly linked list?",
      answer: "They are simple to implement and efficient for insertions and deletions at the beginning, with minimal memory overhead."
    },
    {
      question: "What are the limitations?",
      answer: "They do not support backward traversal and accessing elements by index takes O(n) time."
    }
  ],
  additionalResources: [
    {
      title: "Singly Linked List Concepts",
      url: "https://www.geeksforgeeks.org/singly-linked-list/",
      description: "An in-depth look at singly linked lists with examples."
    },
    {
      title: "C++ Linked List Tutorial",
      url: "https://www.programiz.com/dsa/linked-list",
      description: "A tutorial on implementing linked lists in C++."
    }
  ]
};

export default singlyLinkedList;
