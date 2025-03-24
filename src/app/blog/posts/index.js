// src/app/blog/posts/index.js

// Import individual blog posts
import cybersecurityBestPractices from './cybersecurity-best-practices';
import aiIntegration from './ai-integration';
import nextjsFeatures from './nextjs-features';

// Export all blog posts as an array
export const allBlogPosts = [
  cybersecurityBestPractices,
  aiIntegration,
  nextjsFeatures
];

// Export individual blog posts for direct access
export {
  cybersecurityBestPractices,
  aiIntegration,
  nextjsFeatures
};

// Export default as the array of all blog posts
export default allBlogPosts;