import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import '../styles/custom-account.css';
import Videos from '../components/Videos';
import { FaCloudUploadAlt, FaList, FaUsers, FaVideo } from 'react-icons/fa';
import Footer from '../components/Footer';
import '../styles/custom-hamburger.css';
const MyAccount = () => {
    const cardData = [
    {
      count: 26,
      label: 'Channels',
      bgColor: 'linear-gradient(to right, #e52d27, #b31217)', 
      icon: <FaUsers style={{ opacity: 0.5, transform: 'rotate(20deg)', fontSize:'80px', left: '215px', right:'0',  top:'0', width: 'fit-content', }} className="position-absolute "/>,
    },
    {
      count: 156,
      label: 'Videos',
      bgColor: 'linear-gradient(to right, #FFC407, #F7E307)', 
      icon: <FaVideo style={{ opacity: 0.5, transform: 'rotate(20deg)', fontSize:'80px', left: '215px', right:'0',  top:'0', width: 'fit-content', }} className="position-absolute "/>,
    },
    {
      count: 123,
      label: 'Categories',
      bgColor: 'linear-gradient(to right, #4FDB9C, #6adec1)', 
      icon: <FaList style={{ opacity: 0.5, transform: 'rotate(20deg)', fontSize:'80px', left: '215px', right:'0',  top:'0', width: 'fit-content', }} className="position-absolute "/>,
    },
    {
      count: 13,
      label: 'New Videos',
      bgColor: 'linear-gradient(to right, #FF3A40, #F76C4B)', 
      icon: <FaCloudUploadAlt  style={{ opacity: 0.5, transform: 'rotate(20deg)', fontSize:'80px', left: '220px', right:'0',  top:'0', width: 'fit-content', }} className="position-absolute "/>,
    },
  ];

   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };
  
  return (
    <div className={`app-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className={`sidebar ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Sidebar collapsed={isSidebarCollapsed}/>
      </div>

      <div className="w-100"> 
        <Row>   
          <Col xs={12}>
            <Header toggleSidebar={toggleSidebar}/>
          </Col>
        </Row>
        <div className="m-3">
        <div isSidebarCollapsed={isSidebarCollapsed} style={{ display: 'flex', gap: '2rem', padding: '1rem', marginTop: '90px'  }}>
          {cardData.map((item, index) => (
            <div key={index} className="position-relative m-0 p-2 text-white custom-card-acc"  style={{ background: item.bgColor }} >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 className="fs-6 fw-normal">
                    <strong>{item.count}</strong> {item.label}
                  </h4>
                  {item.icon}
                </div>
                <div className="m-0 mt-3 custom-detail-card">
                  <span className="fs-7">View Details</span>
                  <span className="cursor-pointer">&gt;</span>
                </div>
              </div>
            </div>))}
        </div>
        <Row>
          <Col xs={12} lg={12}>
          <div>
            <Videos/>
          </div>
          </Col>      
        </Row>
      </div>
      <div className="mt-5">
        <Footer/>
      </div>  
      </div>
    </div>
  )
}

export default MyAccount
