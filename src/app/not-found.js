import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-4xl font-bold mb-4">404 - Page Not Found</h2>
      <p className="text-xl mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}