import { getProjects, getProjectById, getActiveProjectId } from '../app/projectManager';
import { getTodosByProject } from '../app/todoManager';
import { formatDate } from '../utils/helpers';

const app = document.getElementById('app');

export function renderApp() {
  app.innerHTML = `
    <aside class="sidebar">
      <h2>Projects</h2>
      <ul id="project-list"></ul>
      <button id="add-project-btn">Add Project</button>
    </aside>
    <div class="main">
      <h2 id="project-title"></h2>
      <form id="todo-form">
        <input name="title" placeholder="Title" required />
        <input name="description" placeholder="Description" />
        <input name="dueDate" type="date" />
        <select name="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
      <ul id="todo-list"></ul>
    </div>
  `;
  renderProjects();
  const addProjectBtn = document.getElementById('add-project-btn');
  if (addProjectBtn) {
    addProjectBtn.addEventListener('click', () => {
      projectModal.classList.remove('hidden');
      projectNameInput.focus();
    });
  }
  renderTodos();
}

export function renderProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = '';
  const activeId = getActiveProjectId();
  getProjects().forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.name;
    li.dataset.id = project.id;
    if (project.id === activeId) li.classList.add('active');
    list.appendChild(li);
  });
}

export function renderTodos() {
  const project = getProjectById(getActiveProjectId());
  if (!project) return;

  document.getElementById('project-title').textContent = project.name;

  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  project.todos.forEach(todo => {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.draggable = true;
    li.dataset.id = todo.id;
    li.innerHTML = `
      <div class="left-border ${todo.priority}"></div>
      <div class="todo-content">
        <strong>${todo.title}</strong><br/>
        ${todo.description}<br/>
        <small>${formatDate(todo.dueDate)}</small>
      </div>
    `;
    list.appendChild(li);
  });
}
