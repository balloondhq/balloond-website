import { useState, useEffect, useCallback } from 'react';

// Helper for fetching JSON from an endpoint
async function fetchJson(url: string, options = {}) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error('Network response was not ok');
  return await res.json();
}

// Blog Posts (published, for public site)
export function useBlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJson('/api/blog-posts');
      setBlogPosts(data);
    } catch {
      setBlogPosts([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { blogPosts, loading, refresh };
}

// Job Positions (active, for public site)
export function useJobPositions() {
  const [jobPositions, setJobPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJson('/api/careers');
      setJobPositions(data);
    } catch {
      setJobPositions([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { jobPositions, loading, refresh };
}

// Site Content (published, for public site)
export function useSiteContent() {
  const [siteContent, setSiteContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJson('/api/site-content');
      setSiteContent(data);
    } catch {
      setSiteContent([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { siteContent, loading, refresh };
}

// No-op for DB-backed version (kept for compatibility)
export function triggerContentUpdate() {}