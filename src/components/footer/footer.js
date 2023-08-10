import React, { useState, useEffect } from 'react';
import './footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  });

  return (
    <div id="footer">
      <Row>
        <Col>
          <p>Las Vegas, NV 89131</p>
        </Col>
        <Col className='right-half logo-container'>
          <div className='d-flex justify-content-end'>
            <a href="https://www.facebook.com/people/RaddxCap-Investments/100090114548054/?comment_id=Y29tbWVudDo2Mjg3NTU3ODM3OTQzNDI2XzEyNTc0NTU4OTQ4NDUwMzE%3D" >
              <FacebookIcon className='logos' />
            </a>
            <a href="https://twitter.com/RaddxCapxBecky" >
              <TwitterIcon className='logos' />
            </a>
            <a href="https://www.linkedin.com/in/raddxcap/">
              <LinkedInIcon className='logos' />
            </a>
            <a href="https://www.instagram.com/RaddxCapxInvestments/">
              <InstagramIcon className='logos' />
            </a>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='col-6'>
          <p>(209) 313-9953</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>RaddCapitalBecky@gmail.com</p>
        </Col>
        <Col className='right-half myname col-lg-3 col-md-4 col-sm-4'>
          <a href='https://mjgowan.dev' style={{color: 'white', textDecoration: 'none'}}>
              <p className='d-flex justify-content-end'>Site designed and developed by Madeline Gowan</p>
          </a>
        </Col>
      </Row>
    </div>
  )
}
