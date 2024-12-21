import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* About Section */}
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>
                        A blog application is a platform that allows users to create, edit, and publish content, enabling interaction others.

                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link to="/" className="text-light text-decoration-none">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="text-light text-decoration-none">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-light text-decoration-none">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-light text-decoration-none">
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="col-md-4 mb-3">
                        <h5>Contact Us</h5>
                        <p>
                            <i className="bi bi-telephone"></i> +91-9353421628
                        </p>
                        <p>
                            <i className="bi bi-envelope"></i> agoraAI@gmail.com
                        </p>
                        <p>
                            <i className="bi bi-geo-alt"></i> Arogo AI , INDIA
                        </p>

                        {/* Social Media Links */}
                        <div className="d-flex">
                            <a href="https://facebook.com" className="text-light me-3">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://twitter.com" className="text-light me-3">
                                <i className="bi bi-twitter"></i>
                            </a>
                            <a href="https://instagram.com" className="text-light">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p className="mb-0">
                            © {new Date().getFullYear()} Blog app. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
