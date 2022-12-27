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

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {currentPage === 'booking' ? ( <Booking /> )
        : currentPage === 'services' ? ( <Services /> )
        : currentPage === 'about' ? ( <About /> )
        : currentPage === 'testimonials' ? ( <Testimonials /> )
        : currentPage === 'contact' ? ( <Contact /> )
        : ( <></> )}
      </main>
      <Footer />
    </>
  );
}
