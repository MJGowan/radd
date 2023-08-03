import Nav from './components/navigation/nav';
import About from './components/about/about';
// import Contacts from './components/contacts/contacts';
// import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Mid from './components/mid/mid';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const mom = require('./assets/becky.png');
  return (
    <div>
      {/* <Nav />
     
      <div style={{ color: 'white' }} className='mb-5' id="hero">
        <Container className='txt-container'>
          <Row>
            <Col className='col-md-7 col-xs-12'>
              <p className='hero-title lato'>RaddxCap Investments</p>
            </Col>
          </Row>
        </Container>
      </div>
     
      <div>
        <Container id='about'>
          <p className='section-title'>About Us</p>
          <hr />
          <Row>
            <div className='holdTxt'>
              <p className='lato about-txt'>With a deep-rooted commitment to making a positive impact, and an extensive background in diverse industries, RaddxCap is your trusted partner for dynamic investments. When it comes to real estate opportunities, we have a deep understanding of the market dynamics and a keen eye for spotting potential. We assist both investors and business owners in identifying and acquiring properties with a comprehensive approach that encompasses due diligence, financial analysis, negotiation, and funding, ensuring a seamless transition and setting the stage for long-term success.</p>
            </div>

            <div className='holdMom'>
              <img src={mom} className='mom' />
            </div>
          </Row>
        </Container>
      </div>
      
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
    </div> */}
    <Nav/>
    <Hero/>
    <About/>
    <Mid/>
    
    </div>
  );
}

export default App;
