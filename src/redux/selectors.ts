import { VISIBILITY_FILTERS } from "../constants";
import { ContainerState, TodosState, Todo } from '../types'

export const getTodoState = (store: ContainerState) => store.todos;

export const getTodoList = (store: ContainerState): TodosState["allIds"] =>
  store.todos.allIds;

export const getTodoById = (store: ContainerState, id: number): Todo  => (
  { ...store.todos.byIds[id], id })

export const getTodos = (store: ContainerState): Todo[] =>
  getTodoList(store).map((id: number) => getTodoById(store, id));

export const getTodoByVisibilityFilter = (
  store: ContainerState,
  visibilityFilter: string
) => {
  const allTodos = getTodos(store);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case VISIBILITY_FILTERS.INCOMPLETED:
      return allTodos.filter(todo => !todo.completed);
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos;
  }
};
