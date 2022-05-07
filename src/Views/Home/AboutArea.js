import React from 'react'

const AboutArea = () => {
    return (
        <section className="about__area pb-100 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 pr-0 col-lg-6 d-none d-md-flex ">
                        <div className="about__thumb m-img wow fadeInLeft" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                            <img src="assets/img/about/about-1.jpg" alt />
                            <div className="about__shape">
                                <img src="assets/img/about/red-shape.png" alt />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1">
                        <div className="about__content wow fadeInRight" data-wow-delay=".4" style={{ visibility: 'visible', animationName: 'fadeInRight' }}>
                            <div className="section__title mb-25">
                                <span>Who we are</span>
                                <h2>We Unlock Potential</h2>
                            </div>
                            <p>Why I say old chap that is spiffing do one, cup of char bite your arm off lavatory bugger all mate bog-standard bits and bobs I'm telling barmy blow.</p>
                            <div className="about__list">
                                <ul>
                                    <li className="wow fadeInUp" data-wow-delay=".6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }}><span><i className="far fa-check" />Innovative ideas</span></li>
                                    <li className="wow fadeInUp" data-wow-delay=".8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}><span><i className="far fa-check" />Professional assistance</span></li>
                                    <li className="wow fadeInUp" data-wow-delay="1s" style={{ visibility: 'visible', animationDelay: '1s', animationName: 'fadeInUp' }}><span><i className="far fa-check" />Financial advisory</span></li>
                                </ul>
                            </div>
                            <a href="services.html" className="z-btn wow fadeInUp" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>What we do<i className="far fa-long-arrow-right" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutArea