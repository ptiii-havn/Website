import React from 'react';

const ContactPage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '20px' }}>
            <div style={{ flex: 1, marginRight: '20px' }}>
                <h1 style={{ color: 'green' }}>Get in Touch</h1>
                <form>
                    <div>
                        <label>Name:</label>
                        <input type="text" required placeholder="Your Name" />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" required placeholder="Your Email" />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea required placeholder="Your Message" />
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div style={{ flex: 1 }}>
                <h2>Contact Info</h2>
                <p>Email: <a href="mailto:hello@havnliving.com">hello@havnliving.com</a></p>
                <h3>Follow Us</h3>
                <p>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a><br />
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
                <div style={{ padding: '10px', border: '1px solid #ccc', marginTop: '20px' }}>
                    <p>Interested in our services? <strong>Contact us!</strong></p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;