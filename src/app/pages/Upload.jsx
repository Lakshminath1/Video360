import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { FaFileArrowUp } from 'react-icons/fa6'
import '../styles/upload-custom.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'


const Upload = () => {
    const navigate = useNavigate(); 
  return (
    <div>
       <Row className="g-0">
        
        <Col xs={12}>
          <Header />
        </Col>
      </Row>
      <Row className="g-0">
        <Col xs={12} lg={1} className="d-flex">
          <div style={{ width: '230px' }}>
            <Sidebar/>
          </div>
        </Col>

        <Col xs={12} lg={11} className="mt-5 text-white custom-channel-area">
        <div className="mt-5 d-flex flex-column justify-content-center text-center align-items-center file-upload">
          <FaFileArrowUp className="custom-file-icon"/>
          <div>
            <h1 className="fs-3 m-0 fw-normal mt-3 "> Select Video Files to Upload </h1>
            <p className="custom-title"> or drag and drop video files</p>
            <Button className="upload-btn rounded-0 p-0 px-2 py-1" onClick={() => navigate('/UploadVideo')}> Upload Video </Button>        
          </div>
        </div>
        </Col>
      </Row>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Upload
