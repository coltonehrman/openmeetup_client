import React from 'react';
import { Link } from "react-router-dom";

const WidgetCategory = () => {
  return (
    <>
      <div className="sidebar-widget">
        <h3 className="widget-title">
          Categories
        </h3>
        <div className="title-shape"></div>
        <div className="cat-list padding-top-30px">
          <ul className="list-items">
            <li className="mb-2 pb-2">
              <Link to={`/category/`} className="d-flex justify-content-between align-items-center before-none">
                Tech <span>1</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WidgetCategory;