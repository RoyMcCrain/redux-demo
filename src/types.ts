import store from "./redux/store";

export type Todo = {
  id: number;
  completed: boolean;
  content: string;
};

export type TodosState = {
  allIds: number[];
  byIds: {
    [key: number]: {
      content: string;
      completed: boolean;
    };
  };
};

export type ContainerState = ReturnType<typeof store.getState>;
