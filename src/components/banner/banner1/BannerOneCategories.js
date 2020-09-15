import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CategoriesContext } from '../../../contexts';

const BannerOneCategories = () => {
  const [categoriesData] = useContext(CategoriesContext);
  const { categories, hasCategories } = categoriesData;

  const featuredCategories = categories.filter(({ isFeatured }) => isFeatured);

  if (!hasCategories || featuredCategories.length === 0) return null;

  return (
    <>
      <div className="highlighted-categories">
        <h4 className="highlighted-element">or</h4>
        <h5 className="highlighted__title">
          browse featured categories:
        </h5>
        <div className="highlight-lists d-flex justify-content-center mt-4">
          {featuredCategories.map(category => (
            <Link to={`/category/${category.id}`} className="d-flex justify-content-center align-items-center category-item" key={category.id}>
              {/* <span className="icon-element"><RiHotelBedLine /></span> */}
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BannerOneCategories;
