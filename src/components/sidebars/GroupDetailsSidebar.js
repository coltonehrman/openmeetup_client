import React from 'react';
import WidgetStatisticsInfo from './widgets/WidgetStatisticsInfo';
import WidgetCategory from './widgets/WidgetCategory';

const GroupDetailsSidebar = () => {
  return (
    <div className="sidebar section-bg">
      <WidgetStatisticsInfo />
      <WidgetCategory />
    </div>
  );
};

export default GroupDetailsSidebar;
