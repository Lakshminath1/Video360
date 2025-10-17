import React, { useState, useEffect } from 'react';
import {  Col, Container, Form, Navbar, Row } from 'react-bootstrap';
import '../../App.css';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faCirclePlus, faBell } from '@fortawesome/free-solid-svg-icons';
import { FaVideo } from "react-icons/fa";
import { FaCircleUser, FaGear, FaRightFromBracket } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/responsive.css';
import '../styles/custom-hamburger.css';

function Header({ toggleSidebar }) {
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  // Load notification state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('notificationClose');
    if (saved !== null) {
      setNotificationOpen(saved === 'true');
    }
  }, []);

  // Save notification state
  useEffect(() => {
    localStorage.setItem('notificationClose', notificationOpen.toString());
  }, [notificationOpen]);


  // Load account setting state
  useEffect(() => {
    const saved = localStorage.getItem('account-sett');
    if (saved !== null) {
      setAccountOpen(saved === 'true');
    }
  }, []);

  // Save account setting state
  useEffect(() => {
    localStorage.setItem('account-sett', accountOpen.toString());
  }, [accountOpen]);

  const navigate = useNavigate();
  
  return (
    <Container>
    <Row>
        <div className="custom-header bg-dark-shade custom-header d-flex justify-content-between align-items-center position-fixed top-0 z-3 p-1 start-0  me-2">
            
            <Col lg={2}>
            <Navbar className="d-flex align-items-center p-0">
                <div className="fs-6 ms-3 hamburger-btn text-white" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} className="cursor-pointer" />
                </div>
                <img src="Images/logo.png" alt="icon missing" width="120px" className="m-1 ms-3 cursor-pointer"/>
            </Navbar>
            </Col>

            <Col lg={7}>
            <div className="d-flex justify-content-end x align-item-center text-white me-4">
                <div className="d-flex text-white">
                    <Form.Control size="sm" className="search-accesss rounded-0 text-white p-0 ps-3" type="text" placeholder="Search for..."/>
                </div>
                <div className="d-flex align-items-center magni justify-content-center">
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
            </div>
            </Col>
  
            <Col lg={3}>
            <div className= "d-grid grid-custom text-white ">
                <Link to="/Upload" className="text-decoration-none text-white">
                <div className="d-flex fs-8 justify-content-end align-item-center ">
                    <div className="d-flex justify-content-end align-items-center ">
                        <FontAwesomeIcon icon={faCirclePlus} className="me-2 text-white fs-8" />
                        <p className="text-white m-0"> Upload Video </p>
                    </div>
                </div>
                </Link>
                
                <div className="d-flex justify-content-center align-items-center position-relative" onClick={() => {setNotificationOpen(!notificationOpen); setAccountOpen(false);}} style={{ cursor: 'pointer' }}>
                    <FontAwesomeIcon icon={faBell} className=" text-white position-relative" />
                    <div className="noti-badge d-flex justify-content-center align-items-center text-center text-white position-absolute">
                        3+
                    </div>
                </div>


               {notificationOpen && (
                    <div className="mt-3  position-absolute"style={{ top: '57px', right: '150px', zIndex: 1000, Width: '150px', backgroundColor:'#232323' }}>
                        <div className="d-flex align-items-center p-2 custom-tag">
                            <FaVideo className="fs-7 me-2"/>
                            <span className="fs-7 me-3">HTML, CSS New Video Added</span>
                        </div>
          
                        <div className="d-flex align-items-center p-2 custom-tag ">
                            <FaVideo  className="fs-7 me-2"/>
                            <span className="fs-7 me-3">Action Scenes</span>
                        </div>
                        
                        <div className="d-flex p-2 mb-1 align-items-center custom-tag ">
                            <FaVideo  className="fs-7 me-2"/>
                            <span className="fs-7 me-3">New Trailers</span>
                        </div>
                    </div>
                )}


                <div className="d-flex justify-content-center align-items-start text-white position-relative"  onClick={() => {setAccountOpen(!accountOpen); setNotificationOpen(false);}} style={{ cursor: 'pointer' }}>
                    <img src="Images/digit_icon.png" alt="Digit Icon Missing" width="30px"/>
                    <p className="ms-2 m-0">DIGITIT</p>
                </div>

                {accountOpen && (
                    <div className="mt-3  position-absolute   "style={{ zIndex: 1000, top: '57px', right:'10px', Width: '120px', backgroundColor:'#232323' }}>
                        <Link to="/MyAccount" className="text-decoration-none text-white">
                        <div className="d-flex align-items-center p-2 custom-set">
                            <FaCircleUser className="fs-6 me-2"/>
                            <span className="fs-7 me-3">My Account</span>
                        </div>
                        </Link>
                        <Link to="/Subscription" className="text-decoration-none text-white">
                        <div className="d-flex align-items-center p-2 custom-set ">
                            <FaVideo  className="fs-6 me-2"/>
                            <span className="fs-7 me-3">Subscriptions</span>
                        </div>
                        </Link>

                        <Link to="/Settings" className="text-decoration-none text-white">
                        <div className="d-flex p-2 mb-1 align-items-center custom-set ">
                            <FaGear  className="fs-6 me-2"/>
                            <span className="fs-7 me-3">Settings</span>
                        </div>
                        </Link>
                            
                        <div className="d-flex p-2 mb-1 align-items-center custom-settting mt-2" style={{ cursor: 'pointer' }} onClick={() => setShowLogoutConfirm(true)}>
                            <FaRightFromBracket className="fs-6 me-2" />
                            <span className="fs-7 me-3">Logout</span>
                        </div>


                       {showLogoutConfirm && (
                            <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1050 }}>
                                <div className="bg-dark text-white shadow" style={{width: '300px' }}>
                                    <div className="d-flex justify-content-between align-items-center p-3" style={{ borderBottom: '1px solid rgba(140, 137, 137, 0.788)'}}>
                                        <h5 className="m-0">Ready to Leave?</h5>
                                        <button className="btn-close btn-close-white" onClick={() => setShowLogoutConfirm(false)}></button>
                                    </div>
                                    <div className=" p-3" style={{ borderBottom: '1px solid rgba(140, 137, 137, 0.788)'}}>
                                        <p className="m-0" style={{ fontSize: '14px' }}>
                                            Select "Logout" below if you are ready to end your current session.
                                        </p>
                                    </div>
                            <div className="d-flex justify-content-end gap-2 mb-3 mt-3 me-3">
                                <button className="btn btn-secondary rounded-0 btn-md" onClick={() => setShowLogoutConfirm(false)}>
                                    Cancel
                                </button>

                                <button className="btn btn-danger rounded-0 btn-md" onClick={() => {console.log('Logging out...'); localStorage.clear();  sessionStorage.clear(); setShowLogoutConfirm(false); setAccountOpen(false); navigate('/')}}>
                                    Logout
                                </button>
                            </div>
                            </div>
                        </div>)}

                    </div>
                )}
            </div>
        </Col>
            
    </div>
    </Row>
    </Container>
  );
}

export default Header;
