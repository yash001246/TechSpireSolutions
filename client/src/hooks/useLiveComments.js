import { useCallback, useEffect, useState } from 'react';

// Live comments.
// 1. Loads the latest comments.
// 2. Listens to /api/comments/stream, so a comment posted by anyone shows up instantly.
// 3. Also refreshes every 12 seconds as a safety net (if the live connection drops).
export default function useLiveComments() {
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState('connecting'); // connecting | live | offline

  const merge = useCallback((incoming) => {
    setComments((prev) => {
      const byId = new Map(prev.map((c) => [c._id, c]));
      incoming.forEach((c) => byId.set(c._id, c));
      return [...byId.values()]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 100);
    });
  }, []);

  useEffect(() => {
    let cancelled = false;
    let source;

    const load = () =>
      fetch('/api/comments')
        .then((res) => (res.ok ? res.json() : Promise.reject(new Error('bad response'))))
        .then((data) => {
          if (cancelled || !Array.isArray(data)) return;
          merge(data);
          setStatus('live');
        })
        .catch(() => {
          if (!cancelled) setStatus('offline');
        });

    load();
    const timer = setInterval(load, 12000);

    if ('EventSource' in window) {
      source = new EventSource('/api/comments/stream');
      source.addEventListener('comment', (e) => {
        try {
          merge([JSON.parse(e.data)]);
        } catch (err) {
          /* ignore a malformed message */
        }
      });
      source.onopen = () => setStatus('live');
    }

    return () => {
      cancelled = true;
      clearInterval(timer);
      if (source) source.close();
    };
  }, [merge]);

  const post = useCallback(
    async (body) => {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || 'Could not post your comment.');
      if (data._id) merge([data]);
      return data;
    },
    [merge]
  );

  return { comments, status, post };
}