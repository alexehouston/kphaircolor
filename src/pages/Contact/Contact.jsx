import './Contact.css';

export default function Contact() {

    const newClientForm = 'KP Hair Color - NEW CLIENT';

    return (
        <div className="Contact">
            <a href="mailto:`kristen@kphaircolor.com`?subject=`${newClientForm}`&body={body}">Click to Send an Email</a>
        </div>
    );
}