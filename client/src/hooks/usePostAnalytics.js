import { useState, useEffect } from 'react';
import { fetchPostAnalytics } from '../services/analyticsService';

export function usePostAnalytics(postId) {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnalytics = async () => {
      if (!postId) return;
      
      try {
        const data = await fetchPostAnalytics(postId);
        setAnalytics(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadAnalytics();
  }, [postId]);

  return { analytics, loading, error };
}