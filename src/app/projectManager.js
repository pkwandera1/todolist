let projects = [];
let activeProjectId = null;

export function setProjects(newProjects) {
  projects = newProjects;
}

export function getProjects() {
  return projects;
}

export function addProject(project) {
  projects.push(project);
}

export function getProjectById(id) {
  return projects.find(project => project.id === id);
}

export function removeProject(id) {
  projects = projects.filter(project => project.id !== id);
}

export function setActiveProjectId(id) {
  activeProjectId = id;
}

export function getActiveProjectId() {
  return activeProjectId;
}
