import React, { useCallback } from "react";
import { VISIBILITY_FILTERS } from "../constants";

const VisibilityFilters: React.FC<{ activeFilter: string }> = ({
  activeFilter
}) => {
  const handleClick = useCallback(() => {}, []);
  const filters = () =>
    Object.values(VISIBILITY_FILTERS).map(filter => (
      <>
        <div key={`visibility-filter-${filter}`} onClick={handleClick}>
          <p>
            |{activeFilter === filter ? "Yes" : "No"}| Filter: {filter}
          </p>
        </div>
      </>
    ));
  return (
    <div>
      <span>{filters()}</span>
    </div>
  );
};

export default VisibilityFilters;
