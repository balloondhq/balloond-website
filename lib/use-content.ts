// lib/use-content.ts
import { useState, useEffect, useCallback } from 'react';
import {
  BlogPost,
  JobPosition,
  SiteContent,
  getBlogPosts,
  getJobPositions,
  getSiteContent,
  updateBlogPost,
  updateJobPosition,
  updateSiteContent,
  addBlogPost,
  addJobPosition,
  deleteBlogPost,
  deleteJobPosition,
  getPublishedBlogPosts,
  getActiveJobPositions,
  getPublishedSiteContent,
  initializeDefaultData
} from './content-manager';

// Custom hook for managing blog posts
export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshPosts = useCallback(() => {
    const updatedPosts = getBlogPosts();
    setPosts(updatedPosts);
  }, []);

  useEffect(() => {
    initializeDefaultData();
    refreshPosts();
    setLoading(false);
  }, [refreshPosts]);

  const createPost = useCallback((post: Omit<BlogPost, 'id'>) => {
    const newPost = addBlogPost(post);
    refreshPosts();
    return newPost;
  }, [refreshPosts]);

  const editPost = useCallback((id: number, updates: Partial<BlogPost>) => {
    const updatedPost = updateBlogPost(id, updates);
    refreshPosts();
    return updatedPost;
  }, [refreshPosts]);

  const removePost = useCallback((id: number) => {
    const success = deleteBlogPost(id);
    if (success) {
      refreshPosts();
    }
    return success;
  }, [refreshPosts]);

  const getPublishedPosts = useCallback(() => {
    return getPublishedBlogPosts();
  }, []);

  return {
    posts,
    loading,
    refreshPosts,
    createPost,
    editPost,
    removePost,
    getPublishedPosts
  };
};

// Custom hook for managing job positions
export const useJobPositions = () => {
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshPositions = useCallback(() => {
    const updatedPositions = getJobPositions();
    setPositions(updatedPositions);
  }, []);

  useEffect(() => {
    initializeDefaultData();
    refreshPositions();
    setLoading(false);
  }, [refreshPositions]);

  const createPosition = useCallback((position: Omit<JobPosition, 'id'>) => {
    const newPosition = addJobPosition(position);
    refreshPositions();
    return newPosition;
  }, [refreshPositions]);

  const editPosition = useCallback((id: number, updates: Partial<JobPosition>) => {
    const updatedPosition = updateJobPosition(id, updates);
    refreshPositions();
    return updatedPosition;
  }, [refreshPositions]);

  const removePosition = useCallback((id: number) => {
    const success = deleteJobPosition(id);
    if (success) {
      refreshPositions();
    }
    return success;
  }, [refreshPositions]);

  const getActivePositions = useCallback(() => {
    return getActiveJobPositions();
  }, []);

  return {
    positions,
    loading,
    refreshPositions,
    createPosition,
    editPosition,
    removePosition,
    getActivePositions
  };
};

// Custom hook for managing site content
export const useSiteContent = () => {
  const [content, setContent] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshContent = useCallback(() => {
    const updatedContent = getSiteContent();
    setContent(updatedContent);
  }, []);

  useEffect(() => {
    initializeDefaultData();
    refreshContent();
    setLoading(false);
  }, [refreshContent]);

  const editContent = useCallback((id: string, updates: Partial<SiteContent>) => {
    const updatedContent = updateSiteContent(id, updates);
    refreshContent();
    return updatedContent;
  }, [refreshContent]);

  const getPublishedContent = useCallback(() => {
    return getPublishedSiteContent();
  }, []);

  const getContentById = useCallback((id: string) => {
    return content.find(item => item.id === id);
  }, [content]);

  return {
    content,
    loading,
    refreshContent,
    editContent,
    getPublishedContent,
    getContentById
  };
};

// Hook for getting published content for public pages
export const usePublicContent = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [jobPositions, setJobPositions] = useState<JobPosition[]>([]);
  const [siteContent, setSiteContent] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshAll = useCallback(() => {
    setBlogPosts(getPublishedBlogPosts());
    setJobPositions(getActiveJobPositions());
    setSiteContent(getPublishedSiteContent());
  }, []);

  useEffect(() => {
    initializeDefaultData();
    refreshAll();
    setLoading(false);

    // Listen for storage changes
    const handleStorageChange = () => {
      refreshAll();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events from admin changes
    window.addEventListener('content-updated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('content-updated', handleStorageChange);
    };
  }, [refreshAll]);

  const getContentById = useCallback((id: string) => {
    return siteContent.find(item => item.id === id)?.content || '';
  }, [siteContent]);

  return {
    blogPosts,
    jobPositions,
    siteContent,
    loading,
    refreshAll,
    getContentById
  };
};

// Utility function to trigger content update events
export const triggerContentUpdate = () => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('content-updated'));
  }
};
