import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CategoriesContext } from '../../../contexts';

const AllCategoriesGrid = () => {
  const [categoriesData] = useContext(CategoriesContext);

  const { categories, hasCategories } = categoriesData;

  if (!hasCategories) return null;

  return (
    <>
      {categories.map(({ id, groups, title }) => {
        return (
          <div className="col-lg-3 column-td-6" key={id}>
            <div className="category-item mb-4 mt-0 ml-0 mr-0 p-0">
              <figure className="category-fig m-0" style={{ height: '200px' }}>
                <figcaption className="fig-caption">
                  <Link to={`/category/${id}`} className="cat-fig-box">
                    <div className="cat-content">
                      <h4 className="cat__title mb-3" style={{ textTransform: 'uppercase' }}>{title}</h4>
                      <span className="badge">{groups.length} GROUPS</span>
                    </div>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        )
      })}
    </>
  );
}

export default AllCategoriesGrid;
