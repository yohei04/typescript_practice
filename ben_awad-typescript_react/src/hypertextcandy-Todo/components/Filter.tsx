import React from 'react';

interface FilterProps {
  handleFilterChange: HandleFilterChange;
}

const Filter: React.FC<FilterProps> = ({ handleFilterChange }) => {
  return (
    <div className="filter">
      <span onClick={() => handleFilterChange('ALL')}>All</span>
      <span onClick={() => handleFilterChange('TODO')}>ToDo</span>
      <span onClick={() => handleFilterChange('DONE')}>Done</span>
    </div>
  );
};
export default Filter;
