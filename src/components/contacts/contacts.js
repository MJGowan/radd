import React from 'react';
import './contacts.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

function ContactForm() {
  const [state, handleSubmit] = useForm("mwkdeknl");
  if (state.succeeded) {
    return <ContactForm />;
  }
  return (
    <form onSubmit={handleSubmit} className='lato'>
      <Container>
        <Row className='mb-2'>
          <label htmlFor="email">
            Email Address
          </label>
        </Row>
        <Row className='mb-3'>
          <input
            id="email"
            type="email"
            name="email"
            className='emailInput'
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </Row>
        <Row className='mb-3'>
          <textarea
            id="message"
            name="message"
            className='messageInput'
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </Row>
        <Row>
          <Col className='d-flex justify-content-end'>
            <button type="submit" disabled={state.submitting} className='submitBtn'>
              Submit
            </button>
          </Col>
        </Row>
      </Container>
    </form>
  );
}


export default function contacts() {
  return (
    <div id="contacts">
      <Container className='contact-container'>
        <div>
          <p className='section-title'>Contacts</p>
          <hr className='hrLength' />
        </div>
        <Row>
          <Col className='col-lg-6'>
            <Container>
              <div className='lato contactInfo'>
                <p>(209) 313-9953</p>
                <p>RaddCapitalBecky@gmail.com</p>
              </div>
              <div className='d-none d-lg-block logo-container'>
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
            </Container>
          </Col>
          <Col className='col-md-6 d-lg-none'>
            <div>
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
          <Col className='col-lg-6 col-md-12 formContainer'>
            <ContactForm />
          </Col>
        </Row>

      </Container>
    </div>
  )
}
