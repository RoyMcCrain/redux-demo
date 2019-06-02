import { VISIBILITY_FILTERS } from "../constants";

export const getTodoState = (store: any) => store.todos;

export const getTodoList = (store: any): any[] =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store: any, id: number): object =>
  store.todos.byIds ? { ...store.todos.byIds[id], id } : {};

export const getTodos = (store: any): any[] =>
  getTodoList(store).map((id: number) => getTodoById(store, id));

export const getTodoByVisibilityFilter = (
  store: any,
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
