import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../common/Context'
import SideMenu from '../SideMenu/SideMenu'
import LogoWhite from '../../Assets/Logos/JOBIN INTERNATIONAL NEW LOGO (W).png'
import Logo from '../../Assets/Logos/JOBIN INTERNATIONAL NEW LOGO.png'


const Header = () => {
    const { setisModalOpen } = useContext(Context)
    // console.log({isModalOpen})
    const [scrollPosition, setSrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setSrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header>
                <div className="header__area p-relative header__transparent">
                    <div className="header__top d-none d-md-block">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-6 col-lg-5 col-md-4">
                                    <div className="header__social">
                                        <ul>
                                            <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                            <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                            <li><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                            <li><a href="#"><i className="fab fa-pinterest-p" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-8">
                                    <div className="header__info f-right">
                                        <ul>
                                            <li>
                                                <a href="tel:(+468)-254-762-443">
                                                    <i className="fal fa-phone-alt" />
                                                    (+468) 254 762 443
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://themepure.net/cdn-cgi/l/email-protection#721b1c141d32111d1c01071e061b1c155c111d1f">
                                                    <i className="fal fa-envelope" />
                                                    <a href='mailto:info@jobininternational.online'>info@jobininternational.online</a>
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href="javascript:void(0);" className="search-toggle">
                                                    <i className="far fa-search" />
                                                </a>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="header__sticky" className={`header__bottom ${scrollPosition > 150 && 'sticky'}`}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                    <div className="logo">
                                        <Link to="/">
                                            <img src={LogoWhite} alt="logo" style={{ width: '40%' }} />
                                        </Link>
                                    </div>
                                    <div className="logo-gradient">
                                        <Link to="/">
                                            <img src={Logo} alt="logo" style={{ width: '40%' }} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-6 col-sm-6 col-6">
                                    <div className="header__bottom-right d-flex justify-content-end align-items-center">
                                        <div className="main-menu">
                                            <nav className="mobile-menu">
                                                <ul>
                                                    <li>
                                                        <Link to="/">Home</Link>

                                                    </li>
                                                    <li><Link to="/about">About Us </Link></li>

                                                    {/* <li>
                                                        <a href="portfolio.html">Insights</a>
                                                    </li>

                                                    <li>
                                                        <a href="blog.html">Blog</a>
                                                    </li> */}

                                                    <li><Link to="/contact">Contact Us</Link></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        {/* <div className="header__btn d-none d-sm-block d-lg-none d-xl-block ml-50">
                                            <a href="contact.html" className="z-btn z-btn-white">Get a Quote</a>
                                        </div> */}
                                        <div className="sidebar__menu d-lg-none">
                                            <div onClick={() => setisModalOpen(true)} className="sidebar-toggle-btn" id="sidebar-toggle">
                                                <span className="line" />
                                                <span className="line" />
                                                <span className="line" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header__search-wrapper">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <form action="#">
                                        <input type="text" placeholder="Your Keywords" />
                                        <button type="submit"><i className="far fa-search" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-overlay-2" />
                </div>
            </header>


            <SideMenu />


        </>
    )
}

export default Header