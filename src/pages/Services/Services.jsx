import './Services.css';

export default function Services() {
    return (
        <div className="Services">
            <h2>Services</h2>
            {/* <p>Kristen travels on location and takes a high volume of clients in a day.
            <br />Please review the cancellation policy when booking as we require 3 days notice to cancel appointment. the duration listed is an estimate as color services can vary based on each client’s unique needs. kp and her team always do their best to run on time and efficiently please do your part and make sure to review the updated service menu and be sure to book the correct service. if you are unsure fill out the consultation form with photos, email kristen@kphaircolor.com, or text only 708-351-7087 for clients who are looking to camouflage their grey hairs with this technique please utilize my new add on service when booking anything from a face frame to a full. this will extend your appointment time 15 minutes as this requires more of my time and attention to detail. There will be a $25 increase to your service total.</p> */}
            <div className="table">
                <table>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Includes</th>
                        <th className="recommended">For&nbsp;Who?</th>
                        <th>Timing</th>
                    </tr>
                    <tr>
                        <td>Signature Lived-In Color<br/>(Two Rounds)</td>
                        <td>$500+</td>
                        <td>
                            <li>Baby Lights + Tip Out</li>
                            <li>Face Frame Highlight</li>
                            <li>Toner/Treatment</li>
                            <li>Blowout/Style</li>
                        </td>
                        <td>New clients *or* existing clients with 5+ months of regrowth.</td>
                        <td>4 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Full Highlight<br/>(One Round)</td>
                        <td>$500+</td>
                        <td>
                            <li>Baby Lights + Tip Out</li>
                            <li>Face Frame Highlight</li>
                            <li>Toner/Treatment</li>
                            <li>Blowout/Style</li>
                        </td>
                        <td>New or returning clients concerned about integrity of hair, dimensional blondes, or Lived-In brunettes.</td>
                        <td>4 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Face Frame Highlight</td>
                        <td>$250+</td>
                        <td>
                            <li>Baby Lights + pops<br/><span className="disclaimer">(Around Face)</span></li>
                        </td>
                        <td>
                            <li>Clients looking to prolonge color by refreshing face frame or "pop."</li>
                            <li className="disclaimer">Does *NOT* include highlights anywhere else</li>
                        </td>
                        <td>1.5 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Full Face Frame Highlight</td>
                        <td>$275+</td>
                        <td>
                            <li>Baby Lights + pops<br/><span className="disclaimer">(Around Face + Nape of neck)</span></li>
                        </td>
                        <td>
                            <li>Clients loooking to prolonge color and wear hair up often.</li>
                            <li className="disclaimer">Does *NOT* include baby lights on top of the head.</li>
                        </td>
                        <td>2 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Full Baby Light</td>
                        <td>$400+</td>
                        <td>
                            <li>Baby Lights<br/><span className="disclaimer">(All Over)</span></li>
                            <li>Toner/Treatment</li>
                            <li>Blowout/Style</li>
                        </td>
                        <td>
                            <li>Clients who want a soft look.</li>
                            <li className="disclaimer">Does *NOT* include teasing or pops.</li>
                        </td>
                        <td>4 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Partial Highlight</td>
                        <td>$400+</td>
                        <td>
                            <li>Baby Lights<br/><span className="disclaimer">(Top of head / Around Face)</span></li>
                            <li>Toner/Treatment</li>
                            <li>Blowout/Style</li>
                        </td>
                        <td>Clients who need to freshen up their roots and add a pop around the face *ONLY*</td>
                        <td>3 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Single Process</td>
                        <td>$150+</td>
                        <td>
                            <li>Toner/Treatment</li>
                            <li>Blowout/Style</li>
                        </td>
                        <td>Clients looking for grey coverage</td>
                        <td>2 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Gloss</td>
                        <td>$95+</td>
                        <td>
                            <li>Toner/Treatment</li>
                            <li>Blowout/Style</li>
                        </td>
                        <td>
                        <li>Clients looking to change tone of hair, add depth, shine or dimension.</li>
                        <li className="disclaimer">Does *NOT* include any highlights</li>
                        </td>
                        <td>2 Hrs+</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}