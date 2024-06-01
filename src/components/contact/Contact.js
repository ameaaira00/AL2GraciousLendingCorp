import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="content">
                <h2>Contact Us</h2>
                <p>If you have any questions, feel free to reach out to us.</p>
                <div className="contact-info">
                    <p><strong>For inquiries:</strong></p>
                    <p>Look for Alma:</p>
                    <p>☎ 09277211555 (Globe)</p>
                    <p>☎ 09198059300 (Smart)</p>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
