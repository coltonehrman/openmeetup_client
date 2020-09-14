import React, { useContext } from 'react';
import { CategoriesContext } from '../../../contexts';
import { Link } from 'react-router-dom';

const BannerOneCategories = () => {
  const [categoriesData] = useContext(CategoriesContext);

  const { categories, hasCategories } = categoriesData;

  if (!hasCategories) return null;

  const featuredCategories = categories.filter(({ isFeatured }) => isFeatured);

  if (featuredCategories.length === 0) {
    return (
      <>
        <div className="highlighted-categories">
          <h5 className="highlighted__title">
            no featured categories
          </h5>
        </div>
      </>
    );
  }

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
