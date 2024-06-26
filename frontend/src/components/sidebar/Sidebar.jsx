import React from 'react';
import "./SidebarStyle.css";

// the handler prop is named onClickItem
const Sidebar = ({ onClickItem }) => {
  const handleClick = (index) => {
    onClickItem(index);
  };

  return (
    <div>
      <div className="sidebar text-light">
        <p className="p-sidebar" onClick={() => handleClick(0)}>General statistics</p>
        <p className="p-sidebar" onClick={() => handleClick(1)}>Deposit History</p>
        <p className="p-sidebar" onClick={() => handleClick(2)}>Expenses History</p>
      </div>
    </div>
  );
};

export default Sidebar;
