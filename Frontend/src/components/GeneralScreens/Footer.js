import React from 'react';
import '../../Css/Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-about">
                    <h4>About This Blog</h4>
                    <p>This blog shares insightful articles, tips, and guides on various topics, including technology, lifestyle, and self-development. Stay inspired!</p>
                </div>
                <div className="footer-categories">
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="/category/technology">Technology</a></li>
                        <li><a href="/category/lifestyle">Lifestyle</a></li>
                        <li><a href="/category/self-development">Self Development</a></li>
                        <li><a href="/category/travel">Travel</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                        <li><a href="/terms">Terms of Use</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Me</h4>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2024 Captain Tuyen Blog. All Rights Reserved | Made with ❤️ by Captain Tuyen</p>
            </div>
        </footer>
    )
}

export default Footer;