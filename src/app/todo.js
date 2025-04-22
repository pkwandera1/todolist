import { generateUniqueId } from '../utils/helpers';

export default function createTodo(title, description, dueDate, priority) {
  return {
    id: generateUniqueId(),
    title,
    description,
    dueDate,
    priority,
  };
}
