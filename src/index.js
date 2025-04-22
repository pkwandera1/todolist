import './styles/style.css';
import { loadProjects, saveProjects } from './storage/localStorage';
import { setProjects, getProjects, setActiveProjectId, addProject, getProjectById, removeProject, getActiveProjectId} from './app/projectManager';
import { renderApp } from './ui/domController';
import { initEventListeners } from './ui/eventHandlers';
import createProject from './app/project';

document.addEventListener('DOMContentLoaded', () => {
//Modal control
const projectModal = document.getElementById('projectModal');
const projectNameInput = document.getElementById('projectNameInput');
const confirmAddProject = document.getElementById('confirmAddProject');
const cancelAddProject = document.getElementById('cancelAddProject');

// Hide modal
function hideProjectModal() {
  projectModal.classList.add('hidden');
  projectNameInput.value = '';
}

cancelAddProject.addEventListener('click', hideProjectModal);

// Confirm add project
confirmAddProject.addEventListener('click', () => {
  const name = projectNameInput.value.trim();
  if (!name) return;

  const project = createProject(name);
  addProject(project);
  saveProjects(getProjects());
  hideProjectModal();
  renderApp();
});


  let projects = loadProjects();
  if (!projects || projects.length === 0) {
    const defaultProject = createProject('Default');
    projects = [defaultProject];
    setActiveProjectId(defaultProject.id);
  } else {
    setActiveProjectId(projects[0].id);
  }
  setProjects(projects);
  renderApp();
  initEventListeners();
});
