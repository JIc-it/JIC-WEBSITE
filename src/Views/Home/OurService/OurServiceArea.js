import React from 'react'
import ServiceCard from './ServiceCard'

const OurServiceArea = () => {
    const Services = [
        { image: 'assets/img/icon/services/services-1.png', title: 'Expense reporting', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        { image: 'assets/img/icon/services/services-2.png', title: 'Tax Advisory', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        { image: 'assets/img/icon/services/services-3.png', title: 'Consulting', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        { image: 'assets/img/icon/services/services-4.png', title: `Audit &amp; Assurance`, desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        { image: 'assets/img/icon/services/services-5.png', title: 'Finance Analytics', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        { image: 'assets/img/icon/services/services-6.png', title: 'Cord Processing', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        { image: 'assets/img/icon/services/services-7.png', title: 'Development', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        { image: 'assets/img/icon/services/services-8.png', title: 'Financial audit', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
    ]
    return (
        <section className="services__area pt-100 pb-80" style={{position:'relative'}}>


            <div className="container">

                <div className="slider__shape">
                    <img className="shape triangle" src="assets/img/icon/slider/triangle.png" alt="triangle" />
                    <img className="shape dotted-square" src="assets/img/icon/slider/dotted-square.png" alt="dotted-square" />
                    <img className="shape solid-square" src="assets/img/icon/slider/solid-square.png" alt="solid-square" />
                    {/* <img className="shape circle-2" src="assets/img/icon/slider/circle.png" alt="circle" /> */}
                </div>


                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="section__title section__title-3 text-center mb-90 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <span>Our Sectors</span>
                            <h2>Provide awesome customer service with our tools.</h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {Services.map(item => (
                        <ServiceCard image={item.image} title={item.title} description={item.desc} url={item.url} />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default OurServiceArea