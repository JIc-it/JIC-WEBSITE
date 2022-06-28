import React, { useContext, useEffect, useRef } from 'react'
import Video from '../../Assets/Video/Jic Web Site Flip2.m4v'
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
                            {/* <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                                <div className="slider__content">
                                    <span data-animation="fadeInUp" data-delay=".3s" className style={{ animationDelay: '0.3s' }}>Made the Present and Making the future</span>
                                    <h1 data-animation="fadeInUp" data-delay=".5s" className style={{ animationDelay: '0.5s' }}>The Legacy that <br /> makes Destinies</h1>
                                    
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>

                {/* {IsMObile ?
                    <img src={PosterImg} alt="" className='w-100' style={{ height: '35rem', objectFit: 'cover' }} />
                    : */}
                    <video
                        ref={ref}
                        playsInline 
                        className='video__herosection'
                        muted={true}
                        autoPlay={true}
                        preLoad="auto"
                        controls={false}
                        // poster={PosterImg}
                        loop >
                        <source src={Video} type="video/mp4" />
                    </video>
                {/* } */}

            </div>
        </section>


    )
}

export default Herosection