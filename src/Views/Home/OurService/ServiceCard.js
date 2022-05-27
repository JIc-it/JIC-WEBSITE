import React from 'react'

const ServiceCard = ({ icon, url, description, title }) => {
    return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12'>
            <div className="services__item mb-50 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                <div className="services__icon mb-5" style={{
                    fontSize: '1.75rem',
                    color: '#4636ff'
                }}>
                    {icon}
                </div>
                <div className="services__content">
                    <h3>
                        {/* <a href={url}>{title}</a> */}
                        <>{title}</>
                    </h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>

    )
}

export default ServiceCard