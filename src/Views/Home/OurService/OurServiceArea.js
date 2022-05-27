import React from 'react'
import ServiceCard from './ServiceCard'

const OurServiceArea = () => {
    const Services = [
        { icon: <i class="fas fa-digging"></i>, title: 'Construction sector ', desc: 'The dream to build the pillars of innovations and development in the construction sector of Kuwait is fulfilled with the industrial ambitions of Bluerays contracting company. ', url: '' },
        { icon: <i class="fas fa-compact-disc"></i>, title: 'Entertainment sector ', desc: 'It’s showtime! Our syndicate treasures the art of cinema with Jobin International Cinemas. From real to reel and art to vision, we pioneer a new code in the world of cinema. ', url: '' },
        { icon: <i class="fas fa-desktop"></i>, title: `Digital sector `, desc: 'The World is evolving, and We are pioneering it Digitally. With the mastery to innovate the latest trends in the digital world, we envision the future with JIC IT solutions.', url: '' },
        { icon: <i class="fas fa-plane"></i>, title: 'Travel and tourism sector ', desc: 'Fly World is a new dawn that let you crown new destinations. To encourage the prospects of the travel sector JIC gave innovation to Fly world that ordains sound responsibilities constituting travel and tourism. ', url: '' },
        { icon: <i class="fas fa-male"></i>, title: 'Human resource sector ', desc: 'Win the marketplace with the winning workforce! With the ace to provide human resources for a productive industrial environment JIC laid the genesis of Jobin International Human Resources Development PVT LTD, and Job In Arabia Human Resource Development Company.', url: '' },
        // { image: 'assets/img/icon/services/services-6.png', title: 'Cord Processing', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        // { image: 'assets/img/icon/services/services-7.png', title: 'Development', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
        // { image: 'assets/img/icon/services/services-8.png', title: 'Financial audit', desc: 'Naff the wireless barney bodge lurgy cuppa cheeky.', url: 'services-details.html' },
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
                            <h2>Industrial sectors we care for  </h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {Services.map(item => (
                        <ServiceCard icon={item.icon} title={item.title} description={item.desc} url={item.url} />
                    ))}
                </div>
            </div>
        </section>

    )
}

export default OurServiceArea