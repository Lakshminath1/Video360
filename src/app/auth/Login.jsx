import React from 'react';
import { Container, Form } from 'react-bootstrap';
import './login_style.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  return (    
    <Container
      fluid
      className="d-flex justify-content-center align-items-center flex-column mb-5"
      style={{
        minHeight: '100vh',
        color: 'white',
        backgroundColor: '#232323',
        padding: '20px',
      }}>
      <img
        src="Images/Favicon.png"
        alt="Missing Favicon"
        width="83"
        className="mb-4"/>
      <div className="text-center">
        <h1 className="fs-4">Welcome to Video360</h1>
        <p className="text-center fs-12">Welcome Back!! Sign In</p>
      </div>

      <div className="mt-3 login-form-container" style={{ width: '320px', maxWidth: '100%' }}>
        <Form className="mb-3">
          <Form.Group>
            <Form.Label className="fs-6" style={{ color: '#888785' }}>
              Username or Mobile Number
            </Form.Label>
            <Form.Control
              className="input-texted p-2 ps-2 rounded-1"
              type="text"
              placeholder="Enter username"
              defaultValue="DIGITIT"
              required/>
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label className="fs-6" style={{ color: '#888785' }}>
              Password
            </Form.Label>
            <Form.Control
              className="input-texted p-2 ps-2 rounded-1" type="password" placeholder="Enter Password" defaultValue="••••••••••••" required/>
          </Form.Group>

          <button onClick={() => navigate('/Home')} className="btn login-button rounded-1 p-2 mt-3 d-flex" type="button">
            Sign In
          </button>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
