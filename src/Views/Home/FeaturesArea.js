import React from 'react'
import JicCinemaLogo from '../../Assets/Logos/CINEMA1-01.png'
import FlyworldLogo from '../../Assets/Logos/flyworld_v (1).png'
import JIALogo from '../../Assets/Logos/JIA_v.png'
// import BlueRaysLogo from '../../Assets/Logos/logo-01.png'
import BlueRaysLogo from '../../Assets/Logos/blue rays logo web_cvv.png'
import JobinLogo from '../../Assets/Logos/JIHRD_v-01.png'
import JicITLogo from '../../Assets/Logos/it_v (1).png'

const FeaturesArea = () => {

    return (
        <section className="features__area pb-100 mt--100 wow fadeInUp" data-wow-delay=".5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
            <div className="container">



                <div className="section__title section__title-3 text-center pt-40 pb-40 wow fadeInUp  d-sm-none" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                    <span className='capitalize'>Our Group of companies</span>
                    {/* <h2></h2> */}
                </div>
                <div className="features__inner fix">


                    <div className="row no-gutters">
                        {companies.map(item => (

                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6">
                                <div className="features__item text-center">
                                    <div className="features__thumb" data-background="assets/img/features/features-1.jpg" style={{ backgroundImage: 'url("assets/img/features/features-1.jpg")' }} />
                                    <div className="features__content">
                                        <div className="features__icon d-flex justify-content-center align-items-center" style={{height:'9rem'}}>
                                            {/* <i className={item.icon} /> */}
                                            <img src={item.icon} alt="" className={item.companyName == 'Bluerays' ? 'w-50' : 'w-75'} />
                                        </div>
                                        <p style={{
                                            color: 'white',
                                            fontSize: '13px',
                                            lineHeight: '15px',
                                            fontWeight: '600'
                                        }} className='capitalize'>{item.title}</p>
                                        <div className="features__btn">

                                            <a href={item.url} className="link-btn" target={'_blank'}>
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
export const companies = [
    { icon: BlueRaysLogo, title: 'Destinies deserve to be Constructed! Blue Rays Building Dreams of Tomorrow…', companyName: 'Bluerays', url: 'https://www.bluerays.com.kw/' },
    { icon: JIALogo, title: 'Win the Workplace with the winning Workforce…! Growth=Skill+ The right Labour ', companyName: 'Job In Arabia', url: 'https://www.job-in-arabia.com/' },
    { icon: JobinLogo, title: 'The Leader who makes your Business Empire! Ace your success with the right Workforce…', companyName: 'JIHRD', url: 'http://jihrd.in/' },
    { icon: FlyworldLogo, title: ' Fly together, to breathe the altitudes and embrace the memories…', companyName: 'Flyworld', url: 'https://www.flyworld.com.kw/' },
    { icon: JicCinemaLogo, title: 'Treasuring the Art of Cinema, The Wizard who paints the Masterpiece… ', companyName: 'JI Cinemas', url: '' },
    { icon: JicITLogo, title: 'Innovating Future beyond Time… The Torchbearer for a New Dawn. ', companyName: 'JIC IT Solutions', url: 'https://jicitsolution.com/' },

]