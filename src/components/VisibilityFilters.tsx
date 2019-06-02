import React from "react";
import { VISIBILITY_FILTERS } from "../constants";
import { TypeFilter } from "../constants";

type Props = {
  setFilter: any;
  activeFilter: TypeFilter;
};

const VisibilityFilters: React.FC<Props> = ({ setFilter, activeFilter }) => {
  const handleClick = (filter: string) => () => setFilter(filter);
  const filters = () =>
    Object.values(VISIBILITY_FILTERS).map(filter => {
      return (
        <div key={`visibility-filter-${filter}`} onClick={handleClick(filter)}>
          <p>
            |{activeFilter === filter ? "Yes" : "No"}| Filter: {filter}
          </p>
        </div>
      );
    });
  return (
    <div>
      <span>{filters()}</span>
    </div>
  );
};

export default VisibilityFilters;
