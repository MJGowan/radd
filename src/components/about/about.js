import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import './about.css';

export default function about() {
    const fsfImg = require('../../assets/FullStackFunding.png');
    const csImg = require('../../assets/CreativeSolutions.png');
    const mkImg = require('../../assets/MarketKnowledge.png');

    return (
        <div id='about'>
            <Container>
                <Row>
                    <Col>
                        <h3 className='section-title'>ABOUT US</h3>
                    </Col>
                </Row>
                <Row>
                    <Row className='checkerRow'>
                        <Col className='col-12 col-md-6 imgCol'>
                            <img src={fsfImg} className='image' />
                        </Col>
                        <Col className='col-12 col-md-6 txtCol'>
                            <h6 className='miniTitle'>Full Stack Funding</h6>
                            <p className='colTxt'>From commercial real estate to fix & flip investments, gap funding to small business loans, we have solutions for any situation. With an extensive network of lenders and private money partners, we believe there's a player for every occasion. We're here to help you find them.</p>
                        </Col>
                    </Row>
                    <Row className='checkerRow'>
                        <Col className='col-6 d-none d-md-block txtCol'>
                            <h6 className='miniTitle'>Creative Solutions</h6>
                            <p className='colTxt'>We understand the ever-changing real estate market, and the need for creative solutions. We focus on creative strategies to make even the most complicated deals work.</p>
                        </Col>
                        <Col className='col-12 col-md-6 imgCol'>
                            <img src={csImg} className='image' />
                        </Col>
                        <Col className='col-12 d-block d-md-none txtCol'>
                            <h6 className='miniTitle'>Creative Solutions</h6>
                            <p className='colTxt'>We understand the ever-changing real estate market, and the need for creative solutions. We focus on creative strategies to make even the most complicated deals work.</p>
                        </Col>
                    </Row>
                    <Row className='checkerRow'>
                        <Col className='col-12 col-md-6 imgCol'>
                            <img src={mkImg} className='image' />
                        </Col>
                        <Col className='col-12 col-md-6 txtCol'>
                            <h6 className='miniTitle'>Market Knowledge</h6>
                            <p className='colTxt'>With decades of experience in the real estate and investment space, our team brings a combination of market knowledge, capital market experience, and private money partnerships to ensure all of our clients are set up for success.</p>
                            <div id='topRequests'></div>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}
