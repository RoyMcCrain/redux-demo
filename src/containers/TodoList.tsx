import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { getTodoByVisibilityFilter } from "../redux/selectors";

import { ContainerState } from "../types";

const mapStateToProps = (state: ContainerState) => {
  const todos = getTodoByVisibilityFilter(state, state.visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
