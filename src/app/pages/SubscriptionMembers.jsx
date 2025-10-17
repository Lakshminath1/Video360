import React, { useState } from 'react';
import { Col, Row, Button, Card, OverlayTrigger, Tooltip, Pagination } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faStar, faSignal, faTimes, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/Common.css';
import '../styles/channel-custom.css';
import '../styles/custom-subscription.css';
import '../styles/custom-watchlater.css';
import { FaCheckCircle } from 'react-icons/fa';
import Footer from '../components/Footer';


//  Sample channel data
const verifiedIndexes = [0, 2, 3, 5, 6, 8, 10, 11];
const channelsData = [
  {
    title: "Channel Name",
    image: "Images/s1.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s2.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s3.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s4.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s5.png",
    button: "Subscribe",
    CancelBotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s6.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s7.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s8.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s8.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s8.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s8.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s8.png",
    button: "Subscribe",
    cancelbotton: "",
    subscribers: "1.2M Subscribers"
  },
];
// Subscribe Button Component
const SubscribeButton = ({ defaultText = "Subscribe" }) => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Button
      variant="light"
      className="subscribe-btn"
      onClick={() => setSubscribed(!subscribed)}
      style={{
        width: '130px',
        border: '2px solid',
        borderColor: subscribed ? '#c0c0c0' : 'red',
        backgroundColor: subscribed ? 'transparent' : '#1C1C1C',
        color: subscribed ? '#c0c0c0' : 'red',
        padding: '2px 5px',
        fontSize: '16px',
        borderRadius: '0',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      {subscribed ? 'Subscribed' : defaultText}
    </Button>
  );
};

// Channel Cards Component
const ChannelsList = ({ data }) => {
  const [Sortoderopen, setsortoderopen] = useState(false);

  return (
    <div className="mt-5 custom-channels custom-subscription-members ">
      <div className="d-flex justify-content-between align-items-center mt-5 position-relative">
        <h3 className="text-white fs-5 mt-5  fw-normal">Popular Channels</h3>
        <p className="text-white fs-6 fw-normal mb-0 sort-edit mt-5 ">
          Sort by{" "}
          <FontAwesomeIcon
            icon={faCaretDown}
            className="ms-1 text-center drop-custom"
            onClick={() => setsortoderopen(prev => !prev)}
          />
        </p>
        {Sortoderopen && (
          <div className="text-white position-absolute z-3 my-2 end-0 sort-dropdown-custom sorting-menu">
            <div className="sort-list d-flex p-1 mb-1 align-items-center">
              <FontAwesomeIcon icon={faStar} className="me-2 fs-7 fw-bold" />
              <span className="fs-7 me-2 fw-bold">Top Rated</span>
            </div>
            <div className="sort-list d-flex p-1 mb-1 align-items-center">
              <FontAwesomeIcon icon={faSignal} className="me-2 fs-7 fw-bold" />
              <span className="fs-7 me-2 fw-bold">Viewed</span>
            </div>
            <div className="sort-list d-flex p-1 mb-1 align-items-center fw-bold">
              <FontAwesomeIcon icon={faTimes} className="me-2 fs-7" />
              <span className="fs-7 me-2 fw-bold">Close</span>
            </div>
          </div>
        )}
      </div>

         <Row className="mb-3">
        {data.map((channel, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} className="mt-3 custom-subsc">
            <Card className="card-bg-custom text-white text-center p-2">
              <Card.Img variant="top" src={channel.image} 
              style={{ 
                  borderRadius: "50%",
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  margin: "0 auto",
                  marginTop: "30px"
                }}/>
            <div className="d-flex justify-content-center align-items-center w-100 mt-2">
              <div className="d-flex justify-content-center align-items-center custom-subscription">
                <SubscribeButton defaultText={channel.button} />
              </div>
              <Button className="ms-2 rounded-1 cancel-btn d-flex justify-content-center align-item-center m-0">
                <FontAwesomeIcon icon={faCircleXmark}/>
              </Button>
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
                <p className="m-0 custom-color fs-7 ">{channel.subscribers}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};


const SubscriptionMembers = () => {
  return (
 <div className="min-vh-100 ">
      <Row className="g-0">
        
        <Col xs={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={1} className="d-flex">
          <div style={{ width: '230px' }}>
            <Sidebar/>
          </div>
        </Col>

        <Col xs={12} lg={11} className="flex-grow-1 custom-channel-area">
          <div>
            <ChannelsList data={channelsData} />
          </div>
        </Col>

        
      <Pagination className="custom-pagination rounded-none my-4">
        <Pagination.Prev className="custom-prev">Previous</Pagination.Prev>
          <Pagination.Item active className="custom-active">1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
            <Pagination.Next className="custom-next">Next</Pagination.Next>
      </Pagination>
      </Row>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default SubscriptionMembers
