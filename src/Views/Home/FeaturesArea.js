import React from 'react'

const FeaturesArea = () => {
    const data = [
        { icon: 'icon_book_alt', title: 'Ifrs and Management Reporting ' },
        { icon: 'icon_lightbulb_alt', title: 'See term life insurance rates ' },
        { icon: 'icon_house_alt', title: 'Get health insurance quotes ' },
        { icon: 'icon_document_alt', title: 'Boat and Yacht Insurance ' },
        { icon: 'icon_ribbon_alt', title: 'Umbrella Insurance ' },
        { icon: 'icon_ribbon_alt', title: 'How we think and work ' },

    ]
    return (
        <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
            <div className="container">
                <div className="features__inner fix">
                    <div className="row no-gutters">
                        {data.map(item => (

                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
                                <div className="features__item text-center">
                                    <div className="features__thumb" data-background="assets/img/features/features-1.jpg" style={{ backgroundImage: 'url("assets/img/features/features-1.jpg")' }} />
                                    <div className="features__content">
                                        <div className="features__icon">
                                            <i className={item.icon} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <div className="features__btn">
                                            <a href="services-details.html" className="link-btn">
                                                <i className="fal fa-long-arrow-right" />
                                                <i className="fal fa-long-arrow-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>

    )
}

export default FeaturesArea