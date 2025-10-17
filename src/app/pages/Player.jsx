import React, { useState } from 'react';
import { Row, Col, Card, Button, Badge, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCaretDown, faStar, faSignal, faTimes, faBell, faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/custom-videoplayer.css';
import '../styles/Common.css';
import '../styles/channel-custom.css';
import Footer from '../components/Footer';

const videodata = [
  {
    image: "Images/v1.png",
    title: "Why you need to learn HTML & CSS IN 2025 | HTML & CSS for Beginners! 🚀",
    views: "46 views",
    date: "2 Weeks ago"
  },
  {
    image: "Images/v2.png",
    title: "Major Things to Understand in HTML & CSS for Beginners! 🚀 | Web Development Basics",
    views: "81 views",
    date: "2 Weeks ago"
  },
  {
    image: "Images/v3.png",
    title: "How to become a UI UX Designer in 2025 in Telugu?",
    views: "221 views",
    date: "3 Weeks ago"
  },
  {
    image: "Images/v4.png",
    title: "How to become a UI/UX Designer in 2025? | UX Designer Salary",
    views: "136 views",
    date: "1 Month ago"
  },
  {
    image: "Images/v5.png",
    title: "DIGIT institute review by Student | Learn, Grow, Succeed",
    views: "240 views",
    date: "10 Months ago"
  },
  {
    image: "Images/v6.png",
    title: "DIGIT institute is Right Place for Full Stack Development | UI Development and SQL",
    views: "853 views",
    date: "3 Years ago"
  }
];

const Player = () => {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="text-white" style={{ minHeight: '100vh' }}>
      <Row>
        <Col xs={12}><Header /></Col>
      </Row>
      <Row>
        <Col lg={1} xs={12}><Sidebar /></Col>
        <Col lg={11} xs={12} className="p-3 ms-5">
          <div className="custom-player">
            <Row className="ms-5">
              <Col lg={7}>
                <iframe src="https://www.youtube.com/embed/tIrM9Z3bvIQ?si=MHTr84T2WZWKxtk-" className="center-video-player" title="YouTube video player" allowFullScreen/>
                <div className="details-video p-3">
                  <h5 className="m-0 custom-title-name fw-normal">
                    DIGIT INSTITUTE Hyderabad - Learn from Industry Experts | Learn, Grow, Succeed
                  </h5>
                  <p className="m-0 py-2 views-custom">
                    <FontAwesomeIcon icon={faEye} /> 227 views
                  </p>
                </div>

                <Card className="title-custom text-white my-3 p-3">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <img src="Images/channels_profile.jpg" className="rounded-circle me-3 custom-channel-logo" alt="channel" width="40" />
                      <div>
                        <div className="d-flex align-items-center">
                          <h6 className="mb-1 me-2 custom-channel-name">DIGIT INSTITUTE</h6>
                          <OverlayTrigger
                            placement="top"
                            overlay={<Tooltip id="verified-tooltip">Verified</Tooltip>}>
                            <span style={{ cursor: 'pointer' }}>
                              <FaCheckCircle className="custom-check d-flex align-items-center" />
                            </span>
                          </OverlayTrigger>
                        </div>
                        <p className="m-0 custom-post">6 Months ago</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <Button variant="danger" className="rounded-0">Subscribe 1.4M</Button>
                      <div className="d-flex align-items-center justify-content-center ms-2 custom-notification">
                        <FontAwesomeIcon icon={faBell} className="custom-bell" />
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="title-custom text-white p-3">
                  <h6>Category :</h6>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {["Full Stack Development", "UI UX Design", "Software Testing", "Cloud Computing"].map((tag, i) => (
                      <Badge key={i} bg="info" text="dark">{tag}</Badge>
                    ))}
                  </div>

                  <div className="mt-3">
                    <h6>About :</h6>
                    <p className="custom-about">
                      DIGIT INSTITUTE is Your Gateway to a Thriving Tech Career. Our Expert-Lead Software Training Programs Provide in Depth Knowledge,
                      Hands-on Experience, and Industry-Relevant Skill to Help You Excel in Software Development. Whether You're a Beginner or an
                      Experianced Professional, We Equip You With The Tools to Stay Ahead in The Ever-Evolving Tech Landscape.
                    </p>
                  </div>

                  <div className="custom-tags mt-3">
                    <h6>Tags :</h6>
                    <div className="d-flex flex-wrap">
                      {["Software Training", "Corporate Training", "Software Courses"].map((tag, i) => (
                        <div key={i} className="custom-tag-name px-2 fw-normal me-2">{tag}</div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Col>

              <Col lg={5}>
              <div className="me-4">
                <div className="d-flex justify-content-between align-items-center position-relative">
                  <h3 className="text-white fw-normal fs-6">Up Next</h3>
                  <p className="text-white fs-6 mb-0 sort-edit">
                    Sort by{' '}
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="ms-1 drop-custom"
                      onClick={() => setSortOpen(!sortOpen)}
                    />
                  </p>

                  {sortOpen && (
                    <div className="text-white position-absolute z-3 my-2 end-0 sort-dropdown-custom bg-dark p-2 rounded">
                      <div className="sort-list d-flex p-1 mb-1 align-items-center">
                        <FontAwesomeIcon icon={faStar} className="me-2 fs-7" />
                        <span className="fs-7">High Rated</span>
                      </div>
                      <div className="sort-list d-flex p-1 mb-1 align-items-center">
                        <FontAwesomeIcon icon={faSignal} className="me-2 fs-7" />
                        <span className="fs-7">Viewed</span>
                      </div>
                      <div className="sort-list d-flex p-1 mb-1 align-items-center" onClick={() => setSortOpen(false)}>
                        <FontAwesomeIcon icon={faTimes} className="me-2 fs-7" />
                        <span className="fs-7">Close</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  {videodata.map((video, index) => {
                    const videoMeta = (
                      <small className="text-white custom-meta" style={{ fontSize: '11px' }}>
                        {video.views} <FontAwesomeIcon icon={faEye} className="ms-1 me-3" />
                        📆 {video.date}
                      </small>
                    );

                    return (
                      <Link to="/Player" key={index} className="text-decoration-none">
                        <div className="d-flex mb-3 custom-next-videos position-relative">
                          <FontAwesomeIcon icon={faCirclePlay} className="position-absolute text-white fs-1 custom-play-icon"/>
                          <img src={video.image} alt="thumbnail"
                            style={{
                              width: '160px',
                              height: '90px',
                              objectFit: 'cover',
                              borderRadius: '4px'
                            }}/>
                          <div className="ms-3 d-flex flex-column">
                            <p className="mb-1 fw-semibold text-white fs-6">
                              {video.title}
                            </p>
                            {videoMeta}
                          </div>
                        </div>
                      </Link>

                      
                    );
                  })}
                  
                </div>
              </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div>
          <Footer/>
        </div>
    </div>
  );
};

export default Player;
