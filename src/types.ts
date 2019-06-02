import store from "./redux/store";

export type Todos = {
  id: number;
  completed: boolean;
  content: string;
};

export type ContainerState = ReturnType<typeof store.getState>;
