import React, { useState } from 'react'
import { Card, Col, Pagination, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCirclePlay, faSignal, faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/Common.css';
import '../styles/custom-watchlater.css'; 
import Footer from '../components/Footer'
import '../styles/responsive.css';
import '../styles/custom-hamburger.css';


// Video Data
const videodata = [
  {
    title: "Why We Need To Learn HTML & CSS In 2025 | HTML & CSS For Beginners! 🚀",
    image: "Images/v1.png",
    views: "10 Views",
    date: "3 weeks ago"
  },
  {
    title: "Major Things to Understand in HTML & CSS 🚀 | Web Development",
    image: "Images/v2.png",
    views: "10 Views",
    date: "3 weeks ago"
  },
  {
    title: "Why We Need To Learn HTML & CSS In 2025 | HTML & CSS For Beginners! 🚀",
    image: "Images/v3.png",
    views: "10 Views",
    date: "3 weeks ago"
  },
  {
    title: "Why We Need To Learn HTML & CSS In 2025 | HTML & CSS For Beginners! 🚀",
    image: "Images/v4.png",
    views: "10 Views",
    date: "3 weeks ago"
  },
  {
    title: "Why We Need To Learn HTML & CSS In 2025 | HTML & CSS For Beginners! 🚀",
    image: "Images/v5.png",
    views: "10 Views",
    date: "3 weeks ago"
  },
  {
    title: "Why We Need To Learn HTML & CSS In 2025 | HTML & CSS For Beginners! 🚀",
    image: "Images/v6.png",
    views: "10 Views",
    date: "3 weeks ago"
  },
  {
    title: "Why We Need To Learn HTML & CSS In 2025 | HTML & CSS For Beginners! 🚀",
    image: "Images/v7.png",
    views: "10 Views",
    date: "3 weeks ago"
  },
  {
    title: "Why We Need To Learn HTML & CSS In 2025 | HTML & CSS For Beginners! 🚀",
    image: "Images/v8.png",
    views: "10 Views",
    date: "3 weeks ago"
  }
];

const WatchLater = () => {
   const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarCollapsed(!isSidebarCollapsed);
    };

  const [Sortoderopen, setsortoderopen] = useState(false);
  return (
    <div className={`app-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
          <div className={`sidebar ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
            <Sidebar collapsed={isSidebarCollapsed}/>
          </div>
      <div className="custom-later main-content">
        <Row>   
          <Col xs={12}>
            <Header toggleSidebar={toggleSidebar}/>
          </Col>
        </Row>
        <div className="later" isSidebarCollapsed={isSidebarCollapsed}>
          <div className="m-2">
              <div className="custom-watchlater w-100">
                <div className=" d-flex justify-content-between align-items-center position-relative">
                  <h3 className="text-white p-0 fs-5 fw-normal"> Watch Later </h3>
                    <p className="text-white fs-6 fw-normal mb-0 sort-edit">
                      Sort by <FontAwesomeIcon icon={faCaretDown} className=" text-center drop-custom" onClick={() => setsortoderopen(prev => !prev)}/>
                    </p>
                    {Sortoderopen && (
                      <div className="text-white  position-absolute z-3 my-2 end-0 sort-dropdown-custom ">
                        <div className=" sort-list d-flex p-1 mb-1 align-items-center">
                          <FontAwesomeIcon icon={faStar} className="me-2 fs-7 fw-bold"/> 
                            <span className="fs-7 me-2 fw-bold"> Top Rated </span>
                        </div>
                        <div className=" sort-list d-flex p-1 mb-1 align-items-center"> 
                          <FontAwesomeIcon icon={faSignal} className="me-2 fs-7 fw-bold" /> 
                          <span className="fs-7 me-2 fw-bold"> Viewed </span>
                        </div>
                      
                        <div className=" sort-list d-flex p-1 mb-1 align-items-center fw-bold">
                          <FontAwesomeIcon icon={faTimes} className="me-2 fs-7"/>
                          <span className="fs-7 me-2 fw-bold">Close</span>
                        </div>
                      </div>
                    )}
                </div>
                  <div className="video-grid m-0 mt-1 py-2">
                    {videodata.map((video, index) => (
                      <Col key={index}>
                      <Card className="border-0 rounded-0 custom-card-layout position-relative ">
                        <FontAwesomeIcon icon={faCirclePlay} className="position-absolute play-icon text-white"/>
                        <Card.Img className="border-0 rounded-0" variant="top" src={video.image}/>
                        <Card.Body className="custom-card p-2">
                          <Card.Title className="fsize m-2 fw-normal">
                            {video.title}
                          </Card.Title>
                          <Card.Text className="fs-7 m-2 color-custom">
                            {video.views} {" 📆 " + video.date}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>))}
                  </div>
              </div>

            <Pagination className="custom-pagination rounded-none">
              <Pagination.Prev className="custom-prev">Previous</Pagination.Prev>
                <Pagination.Item active className="custom-active">1</Pagination.Item>
                <Pagination.Item>2</Pagination.Item>
                <Pagination.Item>3</Pagination.Item>
                  <Pagination.Next className="custom-next">Next</Pagination.Next>
            </Pagination>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default WatchLater
