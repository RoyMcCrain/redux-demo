import { ADD_TODO, TOGGLE_TODO, Action } from "../actions";

export type State = {
  allIds: ReadonlyArray<number>;
  byIds: {
    [key: number]: {
      content: string;
      completed: boolean;
    };
  };
};

const initState: State = {
  allIds: [],
  byIds: {}
};

export default function(state: State = initState, action: Action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id }: { id: number } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
