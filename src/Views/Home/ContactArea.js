import React from 'react'

const ContactArea = () => {
    return (
        <section className="contact__area">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-xl-12">
                        <div className="contact__map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13908.188261774689!2d47.9688201!3d29.3689111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3db2897c05964d6!2sJobin%20International!5e0!3m2!1sen!2sin!4v1651812341311!5m2!1sen!2sin" />
                            <div className="contact__wrapper d-md-flex justify-content-between">
                                <div className="contact__info mr-100">
                                    <h3>Get in touch</h3>
                                    <ul>
                                        <li>
                                            <h4>Address</h4>
                                            <p>24 Parking Plaza, Suite 506 <br /> Ardmore, SA 19004</p>
                                        </li>
                                        <li>
                                            <h4>call us</h4>
                                            <p><a href="tel:(404)-888-123-456">(404) 888 123 456</a></p>
                                            <p><a href="tel:(204)-888-234-674">(204) 888 234 674</a></p>
                                        </li>
                                        <li>
                                            <h4>Email Address</h4>
                                            <p><a href="mailto:Info@example.com">Info@example.com</a></p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact__form">
                                    <form action="#">
                                        <input type="text" placeholder="Your Name" className="wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }} />
                                        <input type="email" placeholder="Your Email" className="wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }} />
                                        <textarea placeholder="Your Message" className="wow fadeInUp" data-wow-delay=".6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInUp' }} defaultValue={""} />
                                        <button type="submit" className="z-btn wow fadeInUp" data-wow-delay=".8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInUp' }}>Send Message</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ContactArea