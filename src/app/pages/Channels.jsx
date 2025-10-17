import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Col, Row, Button, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSignal, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/channel-custom.css';
import { FaCheckCircle } from 'react-icons/fa';
import '../styles/responsive.css';
import Footer from '../components/Footer';

// ✅ Verified channel indexes & sample data
const verifiedIndexes = [0, 2, 3, 5, 6, 8, 10, 11];
const channelsData = [
  { title: "Channel Name", image: "Images/s1.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s2.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s3.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s4.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s5.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s6.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s7.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s8.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s8.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s8.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s8.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
  { title: "Channel Name", image: "Images/s8.png", button: "Subscribe", subscribers: "1.2M Subscribers" },
];

// ✅ Subscribe Button
const SubscribeButton = ({ defaultText = "Subscribe", channelId }) => {
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`subscribed-${channelId}`);
    setSubscribed(saved === 'true');
  }, [channelId]);

  const toggleSubscribe = () => {
    const newState = !subscribed;
    setSubscribed(newState);
    localStorage.setItem(`subscribed-${channelId}`, newState.toString());
  };

  return (
    <Button
      variant="light"
      onClick={toggleSubscribe}
      style={{
        width: '130px',
        border: '2px solid',
        borderColor: subscribed ? '#c0c0c0' : 'red',
        backgroundColor: subscribed ? 'transparent' : '#1C1C1C',
        color: subscribed ? '#c0c0c0' : 'red',
        padding: '2px 5px',
        fontSize: '16px',
        borderRadius: '0',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer'
      }}
    >
      {subscribed ? 'Subscribed' : defaultText}
    </Button>
  );
};

// ✅ Channels List
const ChannelsList = ({ data }) => {
  const [sortOpen, setSortOpen] = useState(false);

  return (
    <div className="custom-channel">
      {/* Sort Header */}
      <div className="d-flex justify-content-between align-items-center me-4 position-relative">
        <h3 className="text-white fw-normal fs-5">Channels</h3>
        <p className="text-white fs-6 fw-normal mb-0 sort-edit">
          Sort by{' '}
          <FontAwesomeIcon
            icon={faCaretDown}
            className="ms-1 text-center drop-custom"
            onClick={() => setSortOpen(!sortOpen)}
          />
        </p>

        {/* Sort Dropdown */}
        {sortOpen && (
          <div className="text-white position-absolute z-3 my-2 end-0 sort-dropdown-custom">
            <div className="sort-list d-flex p-1 mb-1 align-items-center">
              <FontAwesomeIcon icon={faStar} className="me-2 fs-7" />
              <span className="fs-7 me-2">High Rated</span>
            </div>
            <div className="sort-list d-flex p-1 mb-1 align-items-center">
              <FontAwesomeIcon icon={faSignal} className="me-2 fs-7" />
              <span className="fs-7 me-2">Viewed</span>
            </div>
            <div className="sort-list d-flex p-1 mb-1 align-items-center" onClick={() => setSortOpen(false)}>
              <FontAwesomeIcon icon={faTimes} className="me-2 fs-7" />
              <span className="fs-7 me-2">Close</span>
            </div>
          </div>
        )}
      </div>

      <Row className="mb-3">
        {data.map((channel, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mt-3">
            <Card className="card-bg-custom card-custom-subscription text-white text-center p-2">
              <Card.Img variant="top" src={channel.image}
              style={{
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  margin: "0 auto"
                }}/>
              <div className="d-flex justify-content-center align-items-center custom-subscription w-100 mt-2">
                <SubscribeButton defaultText={channel.button} channelId={index} />
              </div>
              <Card.Body className="p-2">
                <Card.Title className="m-1 fs-6">
                  {channel.title}
                  {verifiedIndexes.includes(index) && (
                    <OverlayTrigger placement="top" overlay={<Tooltip id={`verified-tooltip-${index}`}>Verified</Tooltip>}>
                      <span style={{ cursor: 'pointer' }}>
                        <FaCheckCircle className="ms-2" style={{ color: 'white', fontSize: '14px' }} />
                      </span>
                    </OverlayTrigger>
                  )}
                </Card.Title>
                <p className="m-0 cusrom-color fs-7">{channel.subscribers}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const ChannelsPage = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <div className={`app-container ${isSidebarCollapsed ? 'collapsed' : ''}`}>
      <div className={`sidebar ${isSidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <Sidebar collapsed={isSidebarCollapsed} />
      </div>
      <div className="main-content">
        <Header toggleSidebar={toggleSidebar} />
        <ChannelsList data={channelsData} />
        <Footer className="custom-footer" />
      </div>
    </div>
  );
};

export default ChannelsPage;
