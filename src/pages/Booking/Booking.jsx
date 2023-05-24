import './Booking.css';

export default function Booking() {
    return (
        <div className="Booking">
            <h2>Book With Me</h2>
            <div className="cities">
                <div className="chi">
                    <h1>Chicago</h1>
                    <a className="booking-link" href="https://kpxaeh.as.me/chicago" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>August 12 + 13</li>
                        <li>November 11 + 12</li>
                    </div>
                    <div className="salon">
                        <h6><a href="https://www.solo-salon.com/" target="_blank" rel="noreferrer">Solo Salon</a></h6>
                        <li><a href="https://www.google.com/maps/place/SOLO+SALON+WASHINGTON/@41.8831539,-87.6557881,15z/data=!4m6!3m5!1s0x880e2cd8ffb2a28d:0xd97919872e4abb89!8m2!3d41.8831539!4d-87.6557881!16s%2Fg%2F11f11d9p_7" target="_blank" rel="noreferrer">1134 W Washington Blvd<br/>Chicago, IL 60607</a></li>
                    </div>
                    <hr />
                </div>
                <div className="sf">
                    <h1>San Francisco</h1>
                    <a className="booking-link" href="https://kpxaeh.as.me/sanfrancisco" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>September 10</li>
                        <li>December 10</li>
                    </div>
                    <div className="salon">
                        <h6>TBA</h6>
                        <li>&nbsp;<br/>&nbsp;</li>
                    </div>
                <hr />
                </div>
                <div className="ny">
                    <h1>New York</h1>
                    <a className="booking-link" href="https://kpxaeh.as.me/newyork" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>July 16</li>
                        <li>October 15</li>
                    </div>
                    <div className="salon">
                        <h6><a href="https://www.mariabonitany.com/" target="_blank" rel="noreferrer">Maria Bonita Salon</a></h6>
                        <li><a href="https://www.google.com/maps/place/Maria+Bonita+Salon+%26+Spa/@40.721263,-73.995793,15z/data=!4m6!3m5!1s0x89c25985e52603cf:0x7d9c3d0804b3cc3e!8m2!3d40.721263!4d-73.995793!16s%2Fg%2F1th0z897" target="_blank" rel="noreferrer">199 Mott St<br/>New York, NY 10012</a></li>
                    </div>
                    <hr />
                    <br />
                </div>
            </div>
            <p>Kristen will be traveling with stylist Alex E. Houston to all 3 locations.<br/>When booking haircut with Alex, please book at least one hour before coloring services *OR* 3 hours after.</p>
        </div>
    );
}