export const getTodoList = (store: any) =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store: any, id: number) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

export const getTodos = (store: any) =>
  getTodoList(store).map((id: number) => getTodoById(store, id));
