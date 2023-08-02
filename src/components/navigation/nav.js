import React from 'react';
import './nav.css';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

export default function nav() {
  const logo = require('../../assets/logo.png');
  return (
    <div style={{ width: '100vw' }} id='nav'>
      <Row>
        <Navbar className='bg nav'>
          <Container>
            <a href="#home">
              <img src={logo} className='logo-img' />
            </a>

            
                <div className='justify-content-end d-flex'>
                  <Nav.Link href='#about' className='nav-items pavanam'>About</Nav.Link>
                  <Nav.Link href='#projects' className='nav-items pavanam'>Projects</Nav.Link>
                  <Nav.Link href='#contacts' className='nav-items pavanam'>Contacts</Nav.Link>
                 
                </div>
              
          </Container>
        </Navbar>
      </Row>
    </div>
  )
}
