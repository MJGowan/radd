import Nav from './components/navigation/nav';
import About from './components/about/about';
import Contacts from './components/contacts/contacts';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import Mid from './components/mid/mid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Mid />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
