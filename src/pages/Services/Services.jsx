import './Services.css';

export default function Services({ currentPage, setCurrentPage }) {
    return (
        <div className="Services">
            <h2>Services</h2>
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
                        </td>
                        <td>New clients / existing clients with 5+ months regrowth</td>
                        <td>4 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Full Highlight<br/>(One Round)</td>
                        <td>$500+</td>
                        <td>
                            <li>Baby Lights + Tip Out</li>
                            <li>Face Frame Highlight</li>
                            <li>Toner/Treatment</li>
                        </td>
                        <td>Clients concerned about integrity of hair / dimensional blondes / Lived-In brunettes</td>
                        <td>4 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Face Frame Highlight</td>
                        <td>$250+</td>
                        <td>
                            <li>Baby Lights + pops<br/><span className="disclaimer">(Around Face)</span></li>
                        </td>
                        <td>
                            <li>Clients looking to prolonge color by refreshing face frame</li>
                            <li className="disclaimer">(Does not include highlights anywhere else)</li>
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
                            <li>Clients loooking to prolonge color and wear hair up often</li>
                            <li className="disclaimer">(Does not include baby lights on top of the head)</li>
                        </td>
                        <td>2 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Full Baby Light</td>
                        <td>$400+</td>
                        <td>
                            <li>Baby Lights<br/><span className="disclaimer">(All Over)</span></li>
                            <li>Toner/Treatment</li>
                        </td>
                        <td>
                            <li>Clients who want a soft look</li>
                            <li className="disclaimer">(Does not include teasing or pops)</li>
                        </td>
                        <td>4 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Partial Highlight</td>
                        <td>$400+</td>
                        <td>
                            <li>Baby Lights<br/><span className="disclaimer">(Top of head / Around Face)</span></li>
                            <li>Toner/Treatment</li>
                        </td>
                        <td>Clients looking to freshen up roots & add a pop around the face</td>
                        <td>3 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Single Process</td>
                        <td>$150+</td>
                        <td>
                            <li>Toner/Treatment</li>
                        </td>
                        <td>Clients looking for grey coverage</td>
                        <td>2 Hrs+</td>
                    </tr>
                    <tr>
                        <td>Gloss</td>
                        <td>$95+</td>
                        <td>
                            <li>Toner/Treatment</li>
                        </td>
                        <td>
                        <li>Clients looking to change tone of hair, add depth, shine or dimension.</li>
                        <li className="disclaimer">Does *NOT* include any highlights</li>
                        </td>
                        <td>2 Hrs+</td>
                    </tr>
                </table>
                <p>All services include a blowout/style.<br/>Please review my <span className="cancellation" onClick={() => setCurrentPage('cancellation')}>cancellation policy</span> prior to booking.</p>
            </div>
        </div>
    );
}