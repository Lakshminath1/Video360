import React, {useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '../styles/Common.css';
import { faCaretDown, faCirclePlay, faSignal, faStar, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../styles/responsive.css';

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

// Channel Data
const channelsData = [
  {
    title: "Channel Name",
    image: "Images/s1.png",
    button: "Subscribe",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s2.png",
    button: "Subscribe",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s3.png",
    button: "Subscribe",
    subscribers: "1.2M Subscribers"
  },
  {
    title: "Channel Name",
    image: "Images/s4.png",
    button: "Subscribe",
    subscribers: "1.2M Subscribers"
  }
];


const SubscribeButton = ({ defaultText = "Subscribe" }) => {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <Button variant="light" className="subscribe-btn" onClick={() => setSubscribed(!subscribed)}
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
      }}>
      {subscribed ? 'Subscribed' : defaultText}
    </Button>
  );
};



// Channel Cards Component
const Channels = ({ data }) => {
const [Sortoderopen, setsortoderopen] = useState(false);

  return (
  <div className="mt-4 custom-channels">
    <div className="d-flex justify-content-between custom-title-channel align-items-center me-4 position-relative">
      <h3 className="text-white fs-5 fw-normal">Popular Channels</h3>
      <p className="text-white fs-6 fw-normal mb-0 sort-edit">
        Sort by <FontAwesomeIcon icon={faCaretDown} className="ms-1 text-center drop-custom"  onClick={() => setsortoderopen(prev => !prev)}/>
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
    <Row className="mb-3 custom-channel-area">
      {data.map((channel, index) => (
        
        <Col key={index} xs={12} sm={6} md={4} lg={3} >
          <div className="custom-channel-card">
          <Card className="card-bg-custom text-white text-center p-2 mt-1">
            <Card.Img variant="top" src={channel.image} style={{borderRadius: "50%", width: "80px", height: "80px", objectFit: "cover", margin: "0 auto"}}/>
            <div className="d-flex justify-content-center align-items-center custom-subscription w-100 mt-2">
              <SubscribeButton variant="danger"defaultText={channel.button}/>
            </div>
            <Card.Body className="p-2">
              <Card.Title className="m-1 fs-6">{channel.title}</Card.Title>
              <p className="m-0 cusrom-color fs-7">{channel.subscribers}</p>
            </Card.Body>
          </Card>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);
};

// Videos Section Component
const Videos = () => {
  return (
    <Container className=" m-0" >
      <div className="video-grid">
        {videodata.map((video, index) => (
          <Col key={index}>
            <Link to="/Player" className="text-decoration-none">
              <Card key={index} className="border-0 rounded-0 custom-card-layout position-relative ">
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
            </Link>
          </Col>
        ))}
      </div>
      
      <Channels data={channelsData} />
        
    </Container>
  );
};

export default Videos;
