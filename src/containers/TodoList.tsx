import TodoList from "../components/TodoList";
import { connect } from "react-redux";
import { getTodoByVisibilityFilter } from "../redux/selectors";

const mapStateToProps = (state: any) => {
  const { visibilityFilter } = state;
  const todos = getTodoByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
