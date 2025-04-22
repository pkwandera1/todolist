// src/app/utils.js

// Helper to generate unique IDs
export const generateUniqueId = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
};

// Helper to debounce functions (optional utility)
export const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// Date formatting helpers (optional utilities)
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const parseDate = (str) => {
  return new Date(str);
};

// ✅ Fix: Add localStorage helpers

const STORAGE_KEY = 'todo-projects';

export const saveProjectsToStorage = (projects) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
};

export const loadProjectsFromStorage = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
};
