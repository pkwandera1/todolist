import { generateUniqueId } from '../utils/helpers';

export default function createProject(name) {
  return {
    id: generateUniqueId(),
    name,
    todos: [],
  };
}
