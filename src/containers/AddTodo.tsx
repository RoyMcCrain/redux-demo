import AddTodo from "../components/AddTodo";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addTodo } from "../redux/actions";

type DispatchProps = {
  addTodo: typeof addTodo;
};
type Action = ReturnType<typeof addTodo>

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  addTodo: input => dispatch(addTodo(input))
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
