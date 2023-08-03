import React from 'react';
import './nav.css';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';

export default function nav() {
  const logo = require('../../assets/logo.png');
  return (
    <div style={{ width: '100vw' }} id='nav'>
        <Navbar>
            <a href="#home">
              <img src={logo} className='logo-img' />
            </a>
        </Navbar>
    </div>
  )
}
