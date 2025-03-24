// src/app/utils/blogData.js
import { allBlogPosts } from '../blog/posts';

export function getAllBlogPosts() {
  // Make sure we handle potential errors in the import
  if (!Array.isArray(allBlogPosts)) {
    console.error("allBlogPosts is not an array:", allBlogPosts);
    return [];
  }
  
  // Filter out any undefined or incomplete blog post objects
  return allBlogPosts.filter(post => 
    post && 
    post.title && 
    post.slug &&
    post.excerpt
  );
}

export function getFeaturedPosts(count = 1) {
  const posts = getAllBlogPosts();
  return posts.filter(post => post.featured).slice(0, count);
}

export function getLatestPosts(count = 3) {
  const posts = getAllBlogPosts();
  return [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
}

export function getBlogPostBySlug(slug) {
  if (!slug) return null;
  
  const posts = getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getBlogPostsByCategory(category) {
  const posts = getAllBlogPosts();
  if (!category || category === 'all') return posts;
  return posts.filter(post => post.category === category);
}