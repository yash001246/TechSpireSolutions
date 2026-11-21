import { useEffect, useState } from 'react';
import fallback from '../data/feedback.js';

// Loads approved feedback from the API; falls back to local sample data if the API is unreachable or empty.
export default function useFeedback() {
  const [feedback, setFeedback] = useState(fallback);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/feedback')
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('bad response'))))
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length) setFeedback(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return feedback;
}
