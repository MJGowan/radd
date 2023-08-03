import React from 'react';
import './hero.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function hero() {

  return (
    <div style={{ color: 'white' }} className='mb-5' id="hero">
      <Container className='txt-container'>
        <Row>
          <Col className='col-md-7 col-xs-12'>
          <p className='hero-title lato'>RaddxCap Investments</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
