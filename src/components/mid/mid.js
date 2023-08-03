import React, { useState } from 'react';
import './mid.css';
import {Container, Row, Col} from 'react-bootstrap';

export default function mid() {
  return (
    <div id="mid">
      <Container className='mid-items'>
        <Row>
          <Col>
          <p className='hero-txt lato'>Real Estate Solutions for Real Investors</p>
            <Container className='dark-box-txt'>
              <div className='pavanam'>I am thrilled to be a part of this chapter of your life. I know that buying a home or property is one of the biggest decisions you may ever make, and I’m committed to helping you through this difficult process.</div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
