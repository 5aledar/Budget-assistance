import React, { useState } from 'react';
import "./HomeStyle.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import GeneralStatistics from '../../components/GeneralStatistics/GeneralStatistics';

const Home = () => {
  // State to keep track of which item is currently being displayed
  const [activeIndex, setActiveIndex] = useState(null);

  // Callback to handle sidebar item selection
  const handleSidebarItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="container-home">
      <Navbar />
      <div className="container container-home-content">
        <div className="row">
          <div className="col-4">
            <Sidebar onClickItem={handleSidebarItemClick} />
          </div>
          <div className="col mt-5">
            {/* Conditionally render based on activeIndex */}
            {activeIndex === 0 && <GeneralStatistics/>}
            {activeIndex === 1 && <p>hello</p>}
            {activeIndex === 2 && <p>marhaba</p>}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
