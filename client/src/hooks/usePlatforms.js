import { useState, useEffect } from 'react';
import { fetchPlatforms } from '../services/platformService';

export function usePlatforms() {
  const [platforms, setPlatforms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPlatforms = async () => {
      try {
        const data = await fetchPlatforms();
        setPlatforms(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPlatforms();
  }, []);

  return { platforms, loading, error };
}