import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Context } from '../../common/Context'
import BodyOverlay from '../BodyOverlay/BodyOverlay'
import LogoWhite from '../../Assets/Logos/JOBIN INTERNATIONAL NEW LOGO (W).png'

const SideMenu = () => {
    const { pathname } = useLocation()
    const { isModalOpen, setisModalOpen } = useContext(Context)
    const [activeTab, setactiveTab] = useState(1)

    useEffect(() => {
        setisModalOpen(false)
    }, [pathname])

    return (
        <>
            <section className={`sidebar__area ${isModalOpen && 'sidebar-opened'}`}>
                <div className="sidebar__wrapper">
                    <div className="sidebar__close">
                        <button type='button' onClick={() => setisModalOpen(false)} className="sidebar__close-btn" id="sidebar__close-btn">
                            <span><i className="fal fa-times" /></span>
                            <span>close</span>
                        </button>
                    </div>
                    <div className="sidebar__tab">
                        <ul className="nav nav-tabs" id="sidebar-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="menu-tab" data-toggle="tab" onClick={() => setactiveTab(1)} role="tab" aria-controls="menu" aria-selected="true">menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="info-tab" data-toggle="tab" role="tab" onClick={() => setactiveTab(2)} aria-controls="info" aria-selected="false">info</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar__content">
                        <div className="tab-content" id="sidebar-tab-content">
                            <div className={`tab-pane fade ${activeTab === 1 && 'show active'}`} id="menu" role="tabpanel" aria-labelledby="menu-tab">
                                <div className="logo mb-40">
                                    <a href="index.html">
                                        <img src={LogoWhite} style={{ width: '35%' }} alt="logo" />
                                    </a>
                                </div>
                                <div className="mobile-menu mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}><span><span><span /></span></span></a>
                                    <nav className="mean-nav">
                                        <ul style={{ display: 'none' }}>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About Us </Link></li>
                                            <li className="mean-last"><Link to="/contact">Contact Us</Link></li>
                                        </ul>
                                    </nav>

                                </div></div>
                            </div>
                            <div className={`tab-pane fade ${activeTab === 2 && 'show active'}`} id="info" role="tabpanel" aria-labelledby="info-tab">
                                <div className="sidebar__info">
                                    <div className="logo mb-40">
                                        <a href="index.html">
                                            <img src={LogoWhite} style={{ width: '35%' }} alt="logo" />
                                        </a>
                                    </div>
                                    <p>
                                    Jobin International Company is the ace among the major multi-functional companies in Kuwait. With the pledge to cultivate the industrial fortune of Kuwait, the syndicate earns its legacy with innovations and conscientiousness.
                                    </p>
                                    <Link to="/contact" className="z-btn z-btn-white">contact us</Link>
                                    {/* <div className="sidebar__search">
                                        <form action="#">
                                            <input type="text" placeholder="Your Keywords.." />
                                            <button type="submit"><i className="fal fa-search" /></button>
                                        </form>
                                    </div> */}
                                    <div className="sidebar__contact mt-30">
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
                                                <div className="icon">
                                                    <i className="fal fa-envelope" />
                                                </div>
                                                <div className="text ">
                                                    <span><a href='mailto:info@jobininternational.online'>info@jobininternational.online</a></span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="fas fa-phone-alt" />
                                                </div>
                                                <div className="text">
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
            </section>


            <BodyOverlay isOpen={isModalOpen} />


        </>
    )
}

export default SideMenu