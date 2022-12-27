import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
  return (
    <div className="Nav">
        <div className="nav1">
            <ul>
                <li onClick={() => setCurrentPage('booking')} className="hover">Booking</li>
                <li className="hover" id="kpxaeh"><a href="https://www.kpxaeh.com" target="_blank" rel="noreferrer">KP x AEH</a></li>
                <li className="hover" onClick={() => setCurrentPage('services')}>Services</li>
            </ul>
        </div>
        <div className="title">
            <h1 className="hover" onClick={() => setCurrentPage('home')}>KP Hair Color</h1>
        </div>
        <div className="nav2">
            <ul>
                <li className="hover" onClick={() => setCurrentPage('about')}>About</li>
                <li className="hover" onClick={() => setCurrentPage('testimonials')}>Testimonials</li>
                <li className="hover" onClick={() => setCurrentPage('contact')}>Contact</li>
            </ul>
        </div>
    </div>
  );
}