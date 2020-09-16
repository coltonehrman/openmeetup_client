import React from 'react';
import { BsEye } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { MdEvent } from 'react-icons/md';

const WidgetStatisticsInfo = () => {
  return (
    <>
      <div className="sidebar-widget">
        <h3 className="widget-title">
          Statistics
          </h3>
        <div className="title-shape"></div>
        <div className="info-list static-info padding-top-35px">
          <ul>
            <li className="mb-2">
              <i className="la"><MdEvent /></i> 10 Events
            </li>

            <li className="mb-2">
              <i className="la"><BsEye /></i> 745 Views
            </li>

            <li className="mb-2">
              <i className="la"><FiHeart /></i> 120 Likes
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default WidgetStatisticsInfo;
