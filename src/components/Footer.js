import React from 'react';

const Footer = () => (
    <footer className="footer-container">
        <div className="footer-buttons">
            <button className="footer-button" onClick={() => window.location.href = '/login'}>Вийти з аккаунта</button>
        </div>
    </footer>
);

export default Footer;
