import VisibilityFilters from "../components/VisibilityFilters";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { setFilter } from "../redux/actions";
import { TypeFilter } from "../constants";

type Props = {
  activeFilter: TypeFilter;
};

type DispatchProps = {
  setFilter: typeof setFilter;
};

const mapStateToProps = (state: any): Props => {
  return { activeFilter: state.visibilityFilter };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setFilter: (filter: TypeFilter) => dispatch(setFilter(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibilityFilters);
