import { addProject, setActiveProjectId, getActiveProjectId, getProjects, getProjectById, removeProject } from '../app/projectManager';
import { addTodo, reorderTodos } from '../app/todoManager';
import { saveProjects } from '../storage/localStorage';
import { renderProjects, renderTodos, renderApp } from './domController';
import createProject from '../app/project';
import createTodo from '../app/todo';

export function initEventListeners() {
  const addProjectBtn = document.getElementById('add-project-btn');
  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
      const projectModal = document.getElementById('projectModal');
      const projectNameInput = document.getElementById('projectNameInput');
      if (projectModal && projectNameInput) {
        projectModal.classList.remove('hidden');
        projectNameInput.focus();
      }
    });
  }

  const projectList = document.getElementById('project-list');
  if (projectList) {
    projectList.addEventListener('click', (e) => {
      const target = e.target.closest('[data-project-id]');
      if (
        target &&
        !e.target.classList.contains('edit-project-btn') &&
        !e.target.classList.contains('delete-project-btn')
      ) {
        const id = target.dataset.projectId;
        setActiveProjectId(id);
        renderProjects();
        renderTodos();
      }
    });
  }
  

  const todoForm = document.getElementById('todo-form');
  if (todoForm) {
    todoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const todo = createTodo(
        data.get('title'),
        data.get('description'),
        data.get('dueDate'),
        data.get('priority')
      );
      addTodo(getActiveProjectId(), todo);
      saveProjects(getProjects());
      renderTodos();
      e.target.reset();
    });
  }

  // Drag and Drop
  let dragged;
  const todoList = document.getElementById('todo-list');
  if (todoList) {
    todoList.addEventListener('dragstart', (e) => {
      dragged = e.target;
    });

    todoList.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    todoList.addEventListener('drop', (e) => {
      e.preventDefault();
      if (e.target.closest('li') && dragged) {
        const list = [...document.querySelectorAll('#todo-list li')];
        const draggedIndex = list.indexOf(dragged);
        const targetIndex = list.indexOf(e.target.closest('li'));

        const todos = getProjects()
          .find(p => p.id === getActiveProjectId())
          .todos.slice();

        const [moved] = todos.splice(draggedIndex, 1);
        todos.splice(targetIndex, 0, moved);

        reorderTodos(getActiveProjectId(), todos);
        saveProjects(getProjects());
        renderTodos();
      }
    });
  }

  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.addEventListener('click', (e) => {
      const projectId = e.target.dataset.projectId;

      if (e.target.classList.contains('edit-project-btn')) {
        const newName = prompt('Enter new project name:');
        if (newName) {
          const project = getProjectById(projectId);
          if (project) {
            project.name = newName;
            saveProjects(getProjects());
            renderApp();
          }
        }
      }

      if (e.target.classList.contains('delete-project-btn')) {
        const confirmDelete = confirm('Are you sure you want to delete this project?');
        if (confirmDelete) {
          removeProject(projectId);
          const remaining = getProjects();
          if (remaining.length > 0) {
            setActiveProjectId(remaining[0].id);
          } else {
            const defaultProject = createProject('Default');
            addProject(defaultProject);
            setActiveProjectId(defaultProject.id);
          }
          saveProjects(getProjects());
          renderApp();
        }
      }
    });
  }
}
