import { addProject, setActiveProjectId, getActiveProjectId, getProjects } from '../app/projectManager';
import { addTodo, reorderTodos } from '../app/todoManager';
import { saveProjects } from '../storage/localStorage';
import { renderProjects, renderTodos } from './domController';
import createProject from '../app/project';
import createTodo from '../app/todo';

export function initEventListeners() {
  document.getElementById('add-project-btn').addEventListener('click', () => {
    const name = document.getElementById('projectNameInput').value.trim();
    if (name) {
      const project = createProject(name);
      addProject(project);
      setActiveProjectId(project.id);
      saveProjects(getProjects());
      renderProjects();
      renderTodos();
    }
  });

  document.getElementById('project-list').addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      setActiveProjectId(id);
      renderProjects();
      renderTodos();
    }
  });

  document.getElementById('todo-form').addEventListener('submit', (e) => {
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

  // Drag and Drop
  let dragged;

  document.getElementById('todo-list').addEventListener('dragstart', (e) => {
    dragged = e.target;
  });

  document.getElementById('todo-list').addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  document.getElementById('todo-list').addEventListener('drop', (e) => {
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
