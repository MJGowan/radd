import React, { useState } from 'react';
import './nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Offcanvas, Container, Row, Col } from 'react-bootstrap';

export default function Nav() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const logo = require('../../assets/logo.png');
  return (
    <div id='nav' className='py-1'>
      <Container>
        <Row>
          <Col className='col-6'>
            <a href="#home">
              <img src={logo} className='logo-img' />
            </a>
          </Col>
          <Col className='d-none d-md-block'>
            <a className='navTxt' href='#topAbout'>ABOUT US</a>
          </Col>
          <Col className='d-none d-md-block'>
            <a className='navTxt' href='#topRequests'>REQUESTS</a>
          </Col>
          <Col className='d-none d-md-block'>
            <a className='navTxt' href='#topContacts'>CONTACT US</a>
          </Col>
          <Col className='col-6 d-md-none menuContainer'>
            <MenuIcon className='hamMenu' onClick={handleShow} />
          </Col>
        </Row>

        <Offcanvas data-bs-theme="dark" className="offcanvas" show={show} onHide={handleClose} responsive="lg" placement='end'>
          <Offcanvas.Header className='btnClose' closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <a className='navTxt' href='#mobileAbout'>ABOUT US</a>
            <a className='navTxt' href='#mobileRequests'>REQUESTS</a>
            <a className='navTxt' href='#mobileContacts'>CONTACT US</a>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </div>
  )
}
