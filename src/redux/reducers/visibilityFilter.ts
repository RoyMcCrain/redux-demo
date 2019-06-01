import { SET_FILTER } from "../actionTypes";
import { VISIBILITY_FILTERS, TypeFilter } from "../../constants";

const initialState = VISIBILITY_FILTERS.ALL;

const visibilityFilter = (
  state: TypeFilter = initialState,
  action: any
): TypeFilter => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export default visibilityFilter;
