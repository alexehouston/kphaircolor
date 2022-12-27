import { useState } from 'react';
import 'animate.css';
import Flickity from 'react-flickity-component';
import Nav from '../../components/Nav/Nav';
import Booking from '../Booking/Booking';
import Services from '../Services/Services';
import About from '../About/About';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const flickityOptions = {
    initialIndex: 1,
    autoPlay: 3000,
    contain: true
  }

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'booking' ? ( <Booking /> )
        : currentPage === 'services' ? ( <Services /> )
        : currentPage === 'about' ? ( <About /> )
        : currentPage === 'testimonials' ? ( <Testimonials /> )
        : currentPage === 'contact' ? ( <Contact /> )
        : ( <div className="App">
          <h2>Low Maintenance Hair Color</h2>
          <Flickity
          className={'carousel'}
          elementType={'div'}
          options={flickityOptions}
          disableImagesLoaded={false}
          reloadOnUpdate
          static
          >
          <img src="/assets/flickity/4.jpeg" alt="" />
          <img src="/assets/flickity/0.jpeg" alt="" />
          <img src="/assets/flickity/6.jpeg" alt="" />
          <img src="/assets/flickity/3.jpeg" alt="" />
          <img src="/assets/flickity/8.jpeg" alt="" />
          <img src="/assets/flickity/1.jpeg" alt="" />
          <img src="/assets/flickity/2.jpeg" alt="" />
          <img src="/assets/flickity/5.jpeg" alt="" />
          <img src="/assets/flickity/7.jpeg" alt="" />
          </Flickity>
        </div> )}
      </main>
      <Footer />
    </>
  );
}
