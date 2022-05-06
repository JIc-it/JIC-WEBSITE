import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="footer__area grey-bg pt-100">
                <div className="footer__top pb-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    <div className="footer__widget-title">
                                        <h4>Company</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__links">
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Testimonials</a></li>
                                                <li><a href="#">Consulting</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                                <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                    <div className="footer__widget-title">
                                        <h4>Resources</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__links">
                                            <ul>
                                                <li><a href="#">Customers</a></li>
                                                <li><a href="#">Pricing</a></li>
                                                <li><a href="#">News</a></li>
                                                <li><a href="#">Learning Center</a></li>
                                                <li><a href="#">Help desk</a></li>
                                                <li><a href="#">Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 offset-xl-1 col-lg-2 offset-lg-1 col-md-4 col-sm-6">
                                <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                    <div className="footer__widget-title">
                                        <h4>Use Cases</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__links">
                                            <ul>
                                                <li><a href="#">UI Design</a></li>
                                                <li><a href="#">Agencies</a></li>
                                                <li><a href="#">Digital Marketing</a></li>
                                                <li><a href="#">SEO for Business</a></li>
                                                <li><a href="#">Enterprise</a></li>
                                                <li><a href="#">Publishers</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 offset-xl-1 col-lg-3 offset-lg-1 col-md-4 col-sm-6">
                                <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>
                                    <div className="footer__widget-title">
                                        <h4>Information</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__info">
                                            <ul>
                                                <li>
                                                    <div className="icon">
                                                        <i className="fal fa-map-marker-alt" />
                                                    </div>
                                                    <div className="text">
                                                        <span>Ave 14th Street, Mirpur 210, San Franciso, USA 3296.</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon theme-color ">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <div className="text theme-color ">
                                                        <span><a href="mailto:support@zibber.com">support@zibber.com</a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon theme-color">
                                                        <i className="fas fa-phone-alt" />
                                                    </div>
                                                    <div className="text theme-color">
                                                        <span><a href="tel:(+642)-394-396-432">(+642) 394 396 432</a></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="footer__copyright-text">
                                    <p>Copyright © 2020 All Rights Reserved passion by <Link to="/"></Link></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="footer__social theme-social f-right">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-vimeo-v" />
                                                <i className="fab fa-vimeo-v" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer