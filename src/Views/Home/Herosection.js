import React from 'react'
import Video from '../../Assets/Video/Sony 4K Demo_ Another World_Trim.mp4'

const Herosection = () => {

    // console.log({Video})
    return (
        

        <section>
            <div className='single-slider'>
                <div className='hero-content-area'>
                    <div className="container ">
                        <div className="row">
                            <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                                <div className="slider__content">
                                    <span data-animation="fadeInUp" data-delay=".3s" className style={{ animationDelay: '0.3s' }}>We’ve added a new exciting feature in v2.0.</span>
                                    <h1 data-animation="fadeInUp" data-delay=".5s" className style={{ animationDelay: '0.5s' }}>The Fastest Growing<br /> Multifunctional Company</h1>
                                    <div className="slider__btn" data-animation="fadeInUp" data-delay=".7s" style={{ animationDelay: '0.7s' }}>
                                        {/* <a href="contact.html" className="z-btn z-btn-transparent" tabIndex={0}>Get a quote</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <video
                    className='video__herosection'
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop >
                    <source src={Video} type="video/mp4" />
                    {/* <source src={Video} type="video/ogg" /> */}
                </video>
            </div>
        </section>


    )
}

export default Herosection