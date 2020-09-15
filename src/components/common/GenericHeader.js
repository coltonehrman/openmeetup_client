import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsGrid, BsListUl } from 'react-icons/bs';
import Select from 'react-select';

const sortBy = [
  {
    value: 1,
    label: 'Default'
  },
  {
    value: 2,
    label: 'High Rated'
  },
  {
    value: 3,
    label: 'Most Reviewed'
  },
  {
    value: 4,
    label: 'Popular Listing'
  }
];

const GenericHeader = ({ current, total }) => {
  const [selectedSortBy, setSelectedSortBy] = useState(null);

  return (
    <>
      <div className="generic-header margin-bottom-30px">
        <p className="showing__text text-left">
          Showing {current} of {total} entries
        </p>

        <div className="short-option mr-3">
          <Select
            value={selectedSortBy}
            onChange={setSelectedSortBy}
            placeholder="Sort by"
            options={sortBy}
          />
        </div>

        <ul className="generic-nav">
          <li>
            <Link to="/listing-grid" className="active">
              <span className="d-inline-block"><BsGrid /></span>
            </Link>
          </li>

          <li>
            <Link to="/listing-list">
              <span className="d-inline-block"><BsListUl /></span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default GenericHeader;
