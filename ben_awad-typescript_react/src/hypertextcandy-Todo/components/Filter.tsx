import React from 'react';

interface FilterProps {
  handleFilterChange: HandleFilterChange;
  filter: string;
}

const Filter: React.FC<FilterProps> = ({ handleFilterChange, filter }) => {
  return (
    <div className="filter">
      <span
        className={filter === 'ALL' ? 'active' : ''}
        onClick={() => handleFilterChange('ALL')}
      >
        All
      </span>
      <span
        className={filter === 'TODO' ? 'active' : ''}
        onClick={() => handleFilterChange('TODO')}
      >
        ToDo
      </span>
      <span
        className={filter === 'DONE' ? 'active' : ''}
        onClick={() => handleFilterChange('DONE')}
      >
        Done
      </span>
    </div>
  );
};
export default Filter;
