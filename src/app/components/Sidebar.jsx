import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faClock,
  faClockRotateLeft,
  faCloudArrowUp,
  faHouseChimney,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import '../styles/Sidebar.css';
import { FaListUl } from 'react-icons/fa';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ collapsed }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('categoriesClose');
    if (saved !== null) {
      setOpen(saved === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('categoriesClose', open.toString());
  }, [open]);

  const isActive = (path) => location.pathname === path;

  return (
    <Container fluid className="m-0 p-0">
      <Row className="g-0">
        <Col>
          <div className={`side-bar-custom ${collapsed ? "sidebar-collapsed" : ""}`}>

            <Link to="/Home" className="text-decoration-none">
              <div className={`px-2 side-selection icon-text-wrapper ${isActive('/Home') ? 'active-link' : ''}`}>
                <FontAwesomeIcon icon={faHouseChimney} className="font-icon" />
                <span className="title-name">Home</span>
              </div>
            </Link>

            <Link to="/Channels" className="text-decoration-none">
              <div className={`px-2 side-selection icon-text-wrapper ${isActive('/Channels') ? 'active-link' : ''}`}>
                <FontAwesomeIcon icon={faUserGroup} className="font-icon" />
                <span className="title-name">Channels</span>
              </div>
            </Link>

            <Link to="/Upload" className="text-decoration-none">
              <div className={`px-2 side-selection icon-text-wrapper ${isActive('/Upload') ? 'active-link' : ''}`}>
                <FontAwesomeIcon icon={faCloudArrowUp} className="font-icon" />
                <span className="title-name">Upload Video</span>
              </div>
            </Link>
          
            <div onClick={() => setOpen(!open)}>
              <div className="px-2 icon-text-wrapper side-selection">
                <FaListUl className="font-icon" />
                <span className="title-name">Categories</span>
                {!collapsed && (open ? <BsChevronUp className="font-icon ms-auto" /> : <BsChevronDown className="font-icon ms-auto" />)}
              </div>
            </div>

            {open && !collapsed && (
              <div className="px-3">
                <div className="bg-dark text-white rounded">
                  <div className="custom-list p-2">Movie</div>
                  <div className="custom-list p-2">Music</div>
                  <div className="custom-list p-2">Television</div>
                </div>
              </div>
            )}

            <Link to="/WatchLater" className="text-decoration-none">
              <div className={`px-2 side-selection icon-text-wrapper ${isActive('/WatchLater') ? 'active-link' : ''}`}>
                <FontAwesomeIcon icon={faClock} className="font-icon" />
                <span className="title-name">Watch Later</span>
              </div>
            </Link>

            <Link to="/Settings" className="text-decoration-none">
              <div className={`px-2 side-selection icon-text-wrapper ${isActive('/Settings') ? 'active-link' : ''}`}>
                <FontAwesomeIcon icon={faClockRotateLeft} className="font-icon" />
                <span className="title-name">Settings</span>
              </div>
            </Link>

            <Link to="/MyAccount" className="text-decoration-none">
              <div className={`px-2 side-selection icon-text-wrapper ${isActive('/MyAccount') ? 'active-link' : ''}`}>
                <FontAwesomeIcon icon={faCircleUser} className="font-icon" />
                <span className="title-name text-center">My Account</span>
              </div>
            </Link>

            <div className="custom-headline mt-2">
              {!collapsed && <span className="text-white mb-2 mt-2 d-block px-3">SUBSCRIPTIONS</span>}

              <Link to="/SubsMembers" className="text-decoration-none">
                <div className="p-1 m-1 d-flex align-items-center">
                  <img src="Images/s1.png" alt="s1 Icon" width="30px" className="rounded-circle me-3" />
                  {!collapsed && <p className="text-white m-0 fs-8">Your Life</p>}
                </div>
              </Link>

              <Link to="/SubsMembers" className="text-decoration-none">
                <div className="p-1 m-1 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src="Images/s2.png" alt="s2 Icon" width="30px" className="rounded-circle me-3" />
                    {!collapsed && <p className="text-white m-0 fs-8">Unboxing</p>}
                  </div>
                  {!collapsed && (
                    <div className="notifcation d-flex justify-content-center align-items-center">2</div>
                  )}
                </div>
              </Link>

              <Link to="/SubsMembers" className="text-decoration-none">
                <div className="p-1 m-1 d-flex align-items-center">
                  <img src="Images/s3.png" alt="s3 Icon" width="30px" className="rounded-circle me-3" />
                  {!collapsed && <p className="text-white m-0 fs-8">Product/Services</p>}
                </div>
              </Link>

              <Link to="/SubsMembers" className="text-decoration-none">
                <div className="p-1 m-1 d-flex align-items-center">
                  <img src="Images/s4.png" alt="s4 Icon" width="30px" className="rounded-circle me-3" />
                  {!collapsed && <p className="text-white m-0 fs-8">Gaming</p>}
                </div>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Sidebar;
