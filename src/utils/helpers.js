export function generateUniqueId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString();
}
