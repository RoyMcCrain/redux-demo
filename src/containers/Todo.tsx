import Todo from "../components/Todo";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleTodo } from "../redux/actions";

type DispatchProps = {
  toggleTodo: typeof toggleTodo;
};

type Action = ReturnType<typeof toggleTodo>

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
