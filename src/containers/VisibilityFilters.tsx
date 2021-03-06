import VisibilityFilters from "../components/VisibilityFilters";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setFilter } from "../redux/actions";
import { TypeFilter } from "../constants";
import { ContainerState } from "../types";

type Props = {
  activeFilter: TypeFilter;
};

type DispatchProps = {
  setFilter: typeof setFilter;
};

type Action = ReturnType<typeof setFilter>

const mapStateToProps = (state: ContainerState): Props => {
  return { activeFilter: state.visibilityFilter };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  setFilter: (filter: TypeFilter) => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);
