import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="content">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us.</p>
                <div className="contact-info">
                    <p><strong>For inquiries, message us on:</strong></p>
                    <div className="contact-links">
                        <a href="https://www.facebook.com/LoansForPensioners?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="facebook-link">Facebook Page</a>
                        <a href="https://www.facebook.com/alma.aloveros" target="_blank" rel="noopener noreferrer" className="facebook-link">Alma's Personal Account</a>
                    </div>
                    <p><strong>Or contact us at:</strong></p>
                    <div className="phone-numbers">
                        <p><strong>Globe:</strong> 09277211555</p>
                        <p><strong>Smart:</strong> 09198059300</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
