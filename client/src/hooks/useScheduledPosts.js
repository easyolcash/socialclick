import { useState, useEffect } from 'react';
import { fetchScheduledPosts } from '../services/postService';

export function useScheduledPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadScheduledPosts = async () => {
      try {
        const data = await fetchScheduledPosts();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadScheduledPosts();
    // Refresh scheduled posts every minute
    const interval = setInterval(loadScheduledPosts, 60000);
    return () => clearInterval(interval);
  }, []);

  return { posts, loading, error };
}