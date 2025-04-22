import { getProjectById } from './projectManager';

export function addTodo(projectId, todo) {
  const project = getProjectById(projectId);
  project.todos.push(todo);
}

export function getTodosByProject(projectId) {
  const project = getProjectById(projectId);
  return project ? project.todos : [];
}

export function reorderTodos(projectId, newOrder) {
  const project = getProjectById(projectId);
  if (project) {
    project.todos = newOrder;
  }
}
