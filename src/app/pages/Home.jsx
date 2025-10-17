import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Videos from '../components/Videos';
import Footer from '../components/Footer';
import '../styles/custom-hamburger.css';

const Home = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className={`app-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className={`sidebar ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Sidebar collapsed={isSidebarCollapsed} />
      </div>

      <div className="main-content ">
        <Header toggleSidebar={toggleSidebar} />
        <Videos isSidebarCollapsed={isSidebarCollapsed} />
        <Footer className="custom-footer" />
      </div>
    </div>
  );
};

export default Home;

