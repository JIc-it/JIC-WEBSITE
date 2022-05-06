import React from 'react'

const ServiceCard = ({ image, url, description, title }) => {
    return (
        <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6'>
            <div className="services__item mb-50 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                <div className="services__icon mb-25">
                    <img src={image} alt="services" />
                </div>
                <div className="services__content">
                    <h3><a href={url}>{title}</a></h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default ServiceCard