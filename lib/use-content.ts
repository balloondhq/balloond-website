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
      const data = await fetchJson('/api/blog');
      setBlogPosts(data.posts || []);
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
      setJobPositions(data.careers || []);
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
      const data = await fetchJson('/api/content');
      setSiteContent(data.content || []);
    } catch {
      setSiteContent([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { siteContent, loading, refresh };
}

// Admin hooks to fetch all content (including drafts)

// All Blog Posts (for admin panel)
export function useAdminBlogPosts() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJson('/api/blog/admin');
      setBlogPosts(data.posts || []);
    } catch {
      setBlogPosts([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { blogPosts, loading, refresh };
}

// All Job Positions (for admin panel)
export function useAdminJobPositions() {
  const [jobPositions, setJobPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJson('/api/careers/admin');
      setJobPositions(data.careers || []);
    } catch {
      setJobPositions([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return { jobPositions, loading, refresh };
}

// All Site Content (for admin panel)
export function useAdminSiteContent() {
  const [siteContent, setSiteContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchJson('/api/content/admin');
      setSiteContent(data.content || []);
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
