import React from 'react';
import './hero.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function hero() {

  return (
    <div id="hero">
      <Container>
        <Row>
          <Col className='col-md-7 col-12'>
            <h2 className='hero-title lalezar'>RADD CAPITAL SOLUTIONS</h2>
          </Col>
          <Col className='callBtnContainer col-md-5 col-12'>
            <button className='callBtn' href="https://calendly.com/raddcapitalbecky/30-minute-meeting" target="_blank">SCHEDULE A CALL</button>
            <div id='topAbout'></div>
            <div id='mobileAbout'></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
