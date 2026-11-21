import { useEffect, useState } from 'react';
import fallback from '../data/projects.js';

// Loads projects from the API and falls back to local sample data if the API is unreachable.
export default function useProjects() {
  const [projects, setProjects] = useState(fallback);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/projects')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('bad response'))))
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length) setProjects(data);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects, loading };
}
