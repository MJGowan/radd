import React, { useState, useEffect } from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {

  return (
    <div id="footer">
    <Container>
      <Row>
        <Col className='col-12 col-md-6 left-half'>
          <p>Copyright © 2024 Radd Capital Solutions</p>
        </Col>
        <Col className='col-12 col-md-6 right-half'>
          <a href='https://mjgowan.dev' className='link' target='_blank'>
              <p className=''>Developed by Madeline Gowan</p>
          </a>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
