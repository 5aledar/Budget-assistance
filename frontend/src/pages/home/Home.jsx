import "./HomeStyle.css";
import React, { useState } from 'react';
import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import GeneralStatistics from '../../components/GeneralStatistics/GeneralStatistics';
import ExpensesHistory from '../../components/Expenses History/Expenses History';
import DepositHistory from '../../components/Deposit History/Deposit History';

const Home = () => {
  
  // State to keep track of which item is currently being displayed
  const [activeIndex, setActiveIndex] = useState(0);

  // Callback to handle sidebar item selection
  const handleSidebarItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="container-home">
      <Navbar />
      <div className="container-home-content mt-5">
          <div className="fixed-div">
          <Sidebar onClickItem={handleSidebarItemClick} />
          </div>
          <div className='container-div'>
            {/* Conditionally render based on activeIndex */}
            {activeIndex === 0 && <GeneralStatistics/>}
           </div>
           <div className="ps-4">
            {activeIndex === 1 && <DepositHistory/>}
            {activeIndex === 2 && <ExpensesHistory/>}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
