import React from 'react';
import './contacts.css';
import { InputGroup, Form, Container, Row, Col } from 'react-bootstrap';

export default function contacts() {
  return (
    <div id="contacts">
      <Container className='contact-container'>
        <Row>
          <Col>
            <h3 className='section-title'>CONTACT US</h3>
          </Col>
        </Row>
        <Row className='d-block d-md-none infoTxtOne'>
              <Col>
                <p>(209) 313-9953 <br/> Becky@raddcapitalsolutions.com</p>
              </Col>
            </Row>
        <Row>
          <Col className='col-12 col-md-6'>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Name"
                placeholder='Name'
                aria-describedby="inputGroup-nameInput"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                aria-label="Email"
                placeholder='Email'
                aria-describedby="inputGroup-emailInput"
              />
            </InputGroup>
            <InputGroup className="mb-3 messageField">
              <Form.Control
                aria-label="Message"
                placeholder='Message'
                aria-describedby="inputGroup-messageInput"
              />
            </InputGroup>
            <button aria-label='Send Button' className='mb-5 py-2 sendBtn'>Send</button>
          </Col>
          <Col className='col-md-1'></Col>
          <Col className='col-12 col-md-5 infoTxtCol'>
            <Row className='d-none d-md-block infoTxtOne'>
              <Col>
                <p>(209) 313-9953 <br/> Becky@raddcapitalsolutions.com</p>
              </Col>
            </Row>
            <Row className='infoTxtTwo'>
                <Col>
                  <h5 className='tinyTitle'>Hours</h5>
                  <Row>
                  <Col className='col-6 col-md-2 days'>
                    <p>Mon <br/> Tue <br/> Wed <br/> Thu <br/> Fri <br/> Sat <br/> Sun</p>
                  </Col>
                  <Col>
                  <p>09:00 am - 05:00 pm <br/> 09:00 am - 05:00 pm <br/> 09:00 am - 05:00 pm <br/> 09:00 am - 05:00 pm <br/> 09:00 am - 05:00 pm <br/> Closed <br/> Closed</p>
                  </Col>
                  </Row>
                </Col>
            </Row>
          </Col>
          <Col>

          </Col>
        </Row>
      </Container>
    </div>
  )
}
