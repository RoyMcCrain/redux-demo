import { TypeFilter } from "../constants";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_FILTER = "SET_FILTER";
export type Action =
  | {
      type: typeof ADD_TODO;
      payload: {
        id: number;
        content: string;
      };
    }
  | {
      type: typeof TOGGLE_TODO;
      payload: {
        id: number;
      };
    }
  | {
      type: typeof SET_FILTER;
      payload: {
        filter: TypeFilter;
      };
    };
let nextTodoId = 0;

export const addTodo = (content: string): Action => ({
  type: ADD_TODO,
  payload: {
    id: nextTodoId++,
    content
  }
});

export const toggleTodo = (id: number): Action => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = (filter: TypeFilter): Action => ({
  type: SET_FILTER,
  payload: { filter }
});

