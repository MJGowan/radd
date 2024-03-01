import React from 'react';
import './request.css';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

export default function request() {
  const cpfImg = require('../../assets/cpfImg.png');
  const sfifImg = require('../../assets/sfifImg.png');
  const gudfImg = require('../../assets/gudfImg.png');
  const gtfImg = require('../../assets/gtfImg.png');
  const bfImg = require('../../assets/bfImg.png');
  const omaImg = require('../../assets/omaImg.png');

  return (
    <div id='requests'>
      <Container>
        <Row>
          <Col>
            <h3 className='section-title'>REQUESTS</h3>
          </Col>
        </Row>
        <Row className='d-none d-md-block'>
          <Row>
            <Col className='col-6 col-lg-4 d-flex justify-content-center mb-4'>
              <div className='myCard'>
                <Container>
                  <Row>
                    <Col className='my-3'>
                      <h6 className='miniTitle'>Commercial Property Funding</h6>
                      <img src={cpfImg} className='cardImage' />
                      <p className='colTxt'>Elevate your real estate ventures with our comprehensive funding solutions. From multifamily to hospitality, retail, storage, and office spaces, we specialize in unlocking opportunities across diverse commercial sectors.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className='col-6 col-lg-4 d-flex justify-content-center mb-4'>
              <div className='myCard'>
                <Container>
                  <Row>
                    <Col className='my-3'>
                      <h6 className='miniTitle'>Single Family Investor Funding</h6>
                      <img src={sfifImg} className='cardImage' />
                      <p className='colTxt'>Navigate the world of single-family real estate investing with confidence. Our funding solutions cater to fix & flips, debt service coverage ratio (DSCR) loans, and single-family portfolio funding. Our specialized funding options are crafted to fuel your success.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className='col-6 col-lg-4 d-flex justify-content-center mb-4'>
              <div className='myCard'>
                <Container>
                  <Row>
                    <Col className='my-3'>
                      <h6 className='miniTitle'>Ground-Up Development Funding</h6>
                      <img src={gudfImg} className='cardImage' />
                      <p className='colTxt'>We excel in financing conversion projects that breathe new life into existing structures. Partner with us to secure the financial foundation necessary to turn your development visions into tangible, successful realities.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className='col-6 col-lg-4 d-flex justify-content-center mb-4'>
              <div className='myCard'>
                <Container>
                  <Row>
                    <Col className='my-3'>
                      <h6 className='miniTitle'>Gap & Transitional Funding</h6>
                      <img src={gtfImg} className='cardImage' />
                      <p className='colTxt'>Whether you're orchestrating single-family fix & flips, enhancing the value of commercial properties, or driving ambitious development projects, our strategic financing solutions bridge the gaps in your funding needs.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className='col-6 col-lg-4 d-flex justify-content-center mb-4'>
              <div className='myCard'>
                <Container>
                  <Row>
                    <Col className='my-3'>
                      <h6 className='miniTitle'>Business Funding</h6>
                      <img src={bfImg} className='cardImage' />
                      <p className='colTxt'>Explore stability through Small Business Administration (SBA) loans, enjoy flexibility with lines of credit, strategize expansion with term loans, delve into innovation with venture capital, and secure essential equipment financing.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
            <Col className='col-6 col-lg-4 d-flex justify-content-center mb-4'>
              <div className='myCard'>
                <Container>
                  <Row>
                    <Col className='my-3'>
                      <h6 className='miniTitle'>Off-Market Assets</h6>
                      <img src={omaImg} className='cardImage' />
                      <p className='colTxt'>Uncover hidden gems with our access to off-market properties. Partnering with brokers and wholesalers nationwide, we bring you carefully vetted deals in every market. Share your criteria, and we'll proactively seek out opportunities that align with your preferences.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Row>

        <Row className='d-block d-md-none mb-4'>
          <Col>
            <Carousel fade controls={false}>
              <Carousel.Item className='d-flex justify-content-center'>
                <div className='myCard'>
                  <Container>
                    <Row>
                      <Col className='my-3'>
                        <h6 className='miniTitle'>Commercial Property Funding</h6>
                        <img src={cpfImg} className='cardImage' />
                        <p className='colTxt'>Elevate your real estate ventures with our comprehensive funding solutions. From multifamily to hospitality, retail, storage, and office spaces, we specialize in unlocking opportunities across diverse commercial sectors.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
              <Carousel.Item className='d-flex justify-content-center'>
                <div className='myCard'>
                  <Container>
                    <Row>
                      <Col className='my-3'>
                        <h6 className='miniTitle'>Single Family Investor Funding</h6>
                        <img src={sfifImg} className='cardImage' />
                        <p className='colTxt'>Navigate the world of single-family real estate investing with confidence. Our funding solutions cater to fix & flips, debt service coverage ratio (DSCR) loans, and single-family portfolio funding. Our specialized funding options are crafted to fuel your success.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
              <Carousel.Item className='d-flex justify-content-center'>
                <div className='myCard'>
                  <Container>
                    <Row>
                      <Col className='my-3'>
                        <h6 className='miniTitle'>Ground-Up Development Funding</h6>
                        <img src={gudfImg} className='cardImage' />
                        <p className='colTxt'>We excel in financing conversion projects that breathe new life into existing structures. Partner with us to secure the financial foundation necessary to turn your development visions into tangible, successful realities.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
              <Carousel.Item className='d-flex justify-content-center'>
                <div className='myCard'>
                  <Container>
                    <Row>
                      <Col className='my-3'>
                        <h6 className='miniTitle'>Gap & Transitional Funding</h6>
                        <img src={gtfImg} className='cardImage' />
                        <p className='colTxt'>Whether you're orchestrating single-family fix & flips, enhancing the value of commercial properties, or driving ambitious development projects, our strategic financing solutions bridge the gaps in your funding needs.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
              <Carousel.Item className='d-flex justify-content-center'>
                <div className='myCard'>
                  <Container>
                    <Row>
                      <Col className='my-3'>
                        <h6 className='miniTitle'>Business Funding</h6>
                        <img src={bfImg} className='cardImage' />
                        <p className='colTxt'>Explore stability through Small Business Administration (SBA) loans, enjoy flexibility with lines of credit, strategize expansion with term loans, delve into innovation with venture capital, and secure essential equipment financing.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
              <Carousel.Item className='d-flex justify-content-center'>
                <div className='myCard'>
                  <Container>
                    <Row>
                      <Col className='my-3'>
                        <h6 className='miniTitle'>Off-Market Assets</h6>
                        <img src={omaImg} className='cardImage' />
                        <p className='colTxt'>Uncover hidden gems with our access to off-market properties. Partnering with brokers and wholesalers nationwide, we bring you carefully vetted deals in every market. Share your criteria, and we'll proactively seek out opportunities that align with your preferences.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center'>
            <button className='requestBtn'>SUBMIT A REQUEST</button>
            <div id='topContacts'></div>
            <div id='mobileContacts'></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
