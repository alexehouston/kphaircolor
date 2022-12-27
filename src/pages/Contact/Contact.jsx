import './Contact.css';

export default function Contact() {

    return (
        <div className="Contact">
            <h2>Contact Kristen</h2>
            <div className="follow-me">
                <a href="https://instagram.com/kphaircolor" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.facebook.com/Kphaircolor/" target="_blank" rel="noreferrer"><i class="fa-brands fa-facebook"></i></a>
                <a href="mailto:kristen@kphaircolor.com" target="_blank" rel="noreferrer"><i class="fa-regular fa-envelope"></i></a>
            </div>
            <h4>Contact Alex Houston</h4>
            <div className="follow-me-2">
                <a href="https://instagram.com/byalexehouston" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.alexehouston.com" target="_blank" rel="noreferrer"><i className="fa-solid fa-earth-americas"></i></a>
                <a href="mailto:info@alexehouston.com" target="_blank" rel="noreferrer"><i class="fa-regular fa-envelope"></i></a>
            </div>
            <h6>If you're a new client, would like to assist me, or would like to leave a testimonial, please fill out the corresponding form below:</h6>
            <div className="forms">
                <a href="https://form.jotform.com/223598389579178" target="_blank" rel="noreferrer">New Client Form</a>
                <a href="https://form.jotform.com/223598139985172" target="_blank" rel="noreferrer">Assistant Form</a>
                <a href="https://form.jotform.com/223597889261170" target="_blank" rel="noreferrer">KP Health Coaching - Testimonial</a>
                <a href="https://form.jotform.com/223598631679169" target="_blank" rel="noreferrer">KP Hair Color - Testimonial</a>
            </div>
        </div>
    );
}