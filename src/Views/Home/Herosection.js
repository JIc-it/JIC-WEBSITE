import React, { useContext, useEffect, useRef } from 'react'
import Video from '../../Assets/Video/Sony 4K Demo_ Another World_Trim.mp4'
import PosterImg from '../../Assets/Images/mike-kononov.jpg'
import { Context } from '../../common/Context'

const Herosection = () => {
    const ref = useRef()
    const { IsMObile } = useContext(Context)

    console.log({ ref })

    useEffect(() => {

        ref.current && ref.current.play()


    }, [ref.current])

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

                {IsMObile ?
                    <img src={PosterImg} alt="" className='w-100' style={{ height: '35rem', objectFit: 'cover' }} />
                    :
                    <video
                        ref={ref}
                        playsInline={true}
                        className='video__herosection'
                        muted
                        autoPlay={"autoplay"}
                        preLoad="auto"
                        controls={false}
                        poster={PosterImg}
                        loop >
                        <source src={Video} type="video/mp4" />
                    </video>
                }

            </div>
        </section>


    )
}

export default Herosection