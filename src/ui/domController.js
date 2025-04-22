import { getProjects, getProjectById, getActiveProjectId } from '../app/projectManager';
import { getTodosByProject } from '../app/todoManager';
import { formatDate } from '../utils/helpers';
import { initEventListeners } from '../ui/eventHandlers'; // 👈 import event listener initializer

const app = document.getElementById('app');


export function renderApp() {
  app.innerHTML = `
    <aside id="sidebar" class="sidebar">
      <h2>Projects</h2>
      <div id="add-project-btn" title="Add Project">➕</div>
      <ul id="project-list"></ul>
    </aside>
    <div class="main">
      <h2 id="project-title"></h2>
      <form id="todo-form">
        <input name="title" placeholder="Title" required />
        <input name="description" placeholder="Description" />
        <input name="dueDate" type="date" required />
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
  renderTodos();

  initEventListeners(); // ✅ Attach listeners after everything is in place
}
export function renderProjects() {
  const list = document.getElementById('project-list');
  list.innerHTML = '';

  const projects = getProjects();
  const activeId = getActiveProjectId();

  projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project-item');
    if (project.id === activeId) {
      projectItem.classList.add('active');
    }

    const nameSpan = document.createElement('span');
    nameSpan.textContent = project.name;
    nameSpan.classList.add('project-name');
    nameSpan.dataset.projectId = project.id;

    const editBtn = document.createElement('button');
    editBtn.textContent = '✏️';
    editBtn.classList.add('edit-project-btn');
    editBtn.dataset.projectId = project.id;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('delete-project-btn');
    deleteBtn.dataset.projectId = project.id;

    const buttonGroup = document.createElement('div');
    buttonGroup.appendChild(editBtn);
    buttonGroup.appendChild(deleteBtn);

    projectItem.appendChild(nameSpan);
    projectItem.appendChild(buttonGroup);


    list.appendChild(projectItem);
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
