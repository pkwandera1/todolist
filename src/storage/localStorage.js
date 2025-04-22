const STORAGE_KEY = 'projects';

export function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

export function loadProjects() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
