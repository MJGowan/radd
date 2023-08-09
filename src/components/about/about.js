import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './about.css';

export default function about() {
    return (
     
        <Container id='about'>
          <p className='section-title'>About Us</p>
          <hr />
          <Row>
              <p className='lato about-txt'>With a deep-rooted commitment to making a positive impact, and an extensive background in diverse industries, RaddxCap is your trusted partner for dynamic investments. When it comes to real estate opportunities, we have a deep understanding of the market dynamics and a keen eye for spotting potential. We assist both investors and business owners in identifying and acquiring properties with a comprehensive approach that encompasses due diligence, financial analysis, negotiation, and funding, ensuring a seamless transition and setting the stage for long-term success.</p>
          </Row>
        </Container>

    )
}
