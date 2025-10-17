import React, { useState } from 'react';
import { Col, Row, Form, Button, ProgressBar } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import '../styles/Custom-uploadvideo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

const categoryList = [
  "Abaft", "Cemetery", "Vessel", "Brick", "Trouble", "Stitch", "Purpose", "Pin", "Agonizing",
  "Shallow", "Fall", "Rescue", "Spray", "Leg", "Quiet", "Scissors"
];

const UploadVideo = () => {
  const [progress] = useState(45);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else if (selectedCategories.length < 6) {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div>
      <Row>
        <Col xs={12}>
          <Header />
        </Col>
      </Row>

      <Row>
        <Col lg={1} xs={12}>
          <Sidebar />
        </Col>

        <Col lg={11} xs={12} className="text-white px-4 py-3">
        <div className="custom-upload-video">
          <h4 className="mb-4 fs-5">Upload Details</h4>

          <Row>
            <Col md={2}>
              <div style={{ width: '100%', height: '100px', backgroundColor:'#8781BD' }} />
            </Col>
            <Col md={10}>
            <div className="d-flex justify-content-between ">
              <div>
                <h6 className="m-0">Contrary to popular belief, Lorem Ipsum (2020) is not.</h6>
                <p className="text-danger m-0">102.6 MB · 2:13 MIN Remaining</p>
              </div>

              <div className="cursor-pointer">
                <FontAwesomeIcon className="text-white" icon={faCircleXmark}/>
              </div>
            </div>
              <ProgressBar animated now={progress} variant="danger" className="my-2 custom-progress"/>
              <small className="text-danger">Your Video is still uploading, please keep this page open until it's done.</small>
            </Col>
          </Row>

          <Form className="mt-4">
            <Form.Group className="mb-3">
              <Form.Label>Video Title</Form.Label>
              <Form.Control type="text" className="rounded-0 custom-form-upload" placeholder="Contrary to popular belief, Lorem Ipsum (2020) is not." />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>About</Form.Label>
              <Form.Control as="textarea" className="rounded-0 custom-form-upload text-white" rows={3} placeholder="Description" />
            </Form.Group>

            <Row className="mb-3">
              <Col md={3}>
                <Form.Label>Orientation</Form.Label>
                <Form.Select className="rounded-0 custom-form-upload">
                  <option>Straight</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Label>Privacy Settings</Form.Label>
                <Form.Select className="rounded-0 custom-form-upload">
                  <option>Public</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Label>Monetize</Form.Label>
                <Form.Select className="rounded-0 custom-form-upload">
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Col>
              <Col md={3}>
                <Form.Label>License</Form.Label>
                <Form.Select className="rounded-0 custom-form-upload">
                  <option>Standard</option>
                </Form.Select>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col md={6}>
                <Form.Label>Tags (13 Tags Remaining)</Form.Label>
                <Form.Control className="rounded-0 custom-form-upload" placeholder="Gaming, PS4" />
              </Col>
              <Col md={3}>
                <Form.Label>Cast (Optional)</Form.Label>
                <Form.Control className="rounded-0 custom-form-upload" placeholder="Nathan Drake," />
              </Col>
              <Col md={3}>
                <Form.Label>Language in Video (Optional)</Form.Label>
                <Form.Select className="rounded-0 custom-form-upload"> 
                  <option>English</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="mt-3">
              <Form.Label>
                Category <span className="text-white">(you can select up to 6 categories)</span>
              </Form.Label>
              <Row>
                {categoryList.map((cat, idx) => (
                  <Col xs={6} md={3} key={idx} className="mb-2">
                    <Form.Check
                      type="checkbox"
                      label={cat}
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    />
                  </Col>
                ))}
              </Row>
            </div>

            <div className="text-center mt-4">
              <Button className="rounded-0 custom-form-upload custom-upload-btn">Save Changes</Button>
            </div>

            <p className="text-white text-center mt-4">
              There are many variations of passages of Lorem Ipsum available, but the majority <span className="text-danger">Terms of Service</span> and <span className="text-danger">Community Guidelines</span>.
            </p>
          </Form>
          </div>
        </Col>
      </Row>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default UploadVideo;
