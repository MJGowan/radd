import Nav from './components/navigation/nav';
import About from './components/about/about';
import Request from './components/requests/request';
import Contacts from './components/contacts/contacts';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Request />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
