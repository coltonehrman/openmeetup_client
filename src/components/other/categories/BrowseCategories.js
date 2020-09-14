import React, { useContext } from 'react';
import { CategoriesContext } from '../../../contexts';
import { Link } from 'react-router-dom';

const BrowseCategories = ({
  MAX_COUNT = 20
}) => {
  const [categoriesData] = useContext(CategoriesContext);

  const { categories, hasCategories } = categoriesData;

  if (!hasCategories) return null;

  const categoriesToDisplay = categories
    .sort((a, b) => a.groups.length - b.groups.length)
    .slice(0, MAX_COUNT);

  return (
    <>
      <div className="row mt-5">
        {categoriesToDisplay.map(({
          id, title, groups
        }) => (
          <div className="col-lg-2 column-td-6" key={id}>
            <div className={'browse-category browse-category-color' + id}>
              <Link to={`/category/${id}`} className="category-inner d-block">
                <span>{groups.length}</span>
                <p className="cat__name">{title}</p>
                <p className="cat__meta">Groups</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrowseCategories;