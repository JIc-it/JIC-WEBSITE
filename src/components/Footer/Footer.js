import React from 'react'
import { Link } from 'react-router-dom'
import { companies } from '../../Views/Home/FeaturesArea'

const Footer = () => {
    const date = new Date()


    return (
        <footer>
            <div className="footer__area grey-bg pt-100">
                <div className="footer__top pb-45">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    <div className="footer__widget-title">
                                        <h4>Pages</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__links">
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                                {/* <li><a href="#">Testimonials</a></li>
                                                <li><a href="#">Consulting</a></li>
                                                <li><a href="#">Partners</a></li> */}
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                                <div className="footer__widget mb-45 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                    <div className="footer__widget-title">
                                        <h4>Companies</h4>
                                    </div>
                                    <div className="footer__widget-content">
                                        <div className="footer__links">
                                            <ul>
                                                {companies.map(item => (
                                                    <li><a href={item.url}>{item.companyName}</a></li>
                                                ))}



                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
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
                                                        <span>
                                                            Kuwait City, Qibla Block No :15 street Ali Al Salem Adel tower Kuwait City, 15000, Kuwait
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon theme-color ">
                                                        <i className="fal fa-envelope" />
                                                    </div>
                                                    <div className="text theme-color ">
                                                        <span><a href='mailto:info@jobininternational.online'>info@jobininternational.online</a></span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon theme-color">
                                                        <i className="fas fa-phone-alt" />
                                                    </div>
                                                    <div className="text theme-color">
                                                        <span><a href="tel:+96522454565">+965 22454565</a></span>
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
                                    <p>Copyright © {date.getFullYear()} All Rights Reserved by <Link to="/">JIC IT Solution</Link></p>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6">
                                <div className="footer__social theme-social f-right">
                                    <ul>
                                        <li>
                                            <a href="https://www.facebook.com/jobininternational.online">
                                                <i className="fab fa-facebook-f" />
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/jobin_international_company/">
                                                <i className="fab fa-instagram" />
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/jobin-international-company-kuwait">
                                                <i className="fab fa-linkedin-in" />
                                                <i className="fab fa-linkedin-in" />
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