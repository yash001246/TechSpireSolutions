// Helpers for project categories and video links.

export const DEFAULT_CATEGORY = 'Web & Apps';
const CATEGORY_ORDER = [DEFAULT_CATEGORY, 'Video Editing', 'Graphic Design'];

export const categoryOf = (p) => p.category || DEFAULT_CATEGORY;

// Category list for the filter buttons: known ones first, any new ones after.
export function getCategories(projects) {
  const used = Array.from(new Set(projects.map(categoryOf)));
  return [
    ...CATEGORY_ORDER.filter((c) => used.includes(c)),
    ...used.filter((c) => !CATEGORY_ORDER.includes(c))
  ];
}

// Turns a YouTube, Vimeo or .mp4 link into something the page can play.
export function getEmbed(url) {
  if (!url) return null;
  const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/))([\w-]{11})/);
  if (yt) {
    return { type: 'youtube', id: yt[1], src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&playsinline=1` };
  }
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { type: 'vimeo', src: `https://player.vimeo.com/video/${vm[1]}?autoplay=1` };
  return { type: 'file', src: url };
}

// Card picture: your own image first, otherwise the YouTube thumbnail.
export function getThumb(p) {
  if (p.image) return p.image;
  const e = getEmbed(p.video);
  return e && e.type === 'youtube' ? `https://img.youtube.com/vi/${e.id}/hqdefault.jpg` : '';
}

export const actionLabel = (p) =>
  p.video ? 'Watch video' : categoryOf(p) === 'Graphic Design' ? 'View design' : 'View case study';