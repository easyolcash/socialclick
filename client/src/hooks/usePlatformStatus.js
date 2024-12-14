import { useState, useEffect } from 'react';
import { fetchPlatformStatus } from '../services/platformService';

export function usePlatformStatus() {
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const data = await fetchPlatformStatus();
        setStatuses(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadStatus();
  }, []);

  return { statuses, loading, error };
}