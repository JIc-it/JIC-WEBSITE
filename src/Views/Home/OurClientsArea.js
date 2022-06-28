import React from 'react'
import Slider from 'react-slick/lib/slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurClientsArea = () => {

    var settings = {

        infinite: true,
        speed: 750,
        // arrows:false,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        responsive: [
            {
                dots: true,
                breakpoint: 1240,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                dots: true,
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                dots: true,
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                dots: false,
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const images = importAll(require.context('../../Assets/Client Logos', false, /\.(png|jpe?g|svg)$/));

    function importAll(r) {
        let images = {};
        let arr = []
        // r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        r.keys().forEach((item, index) => {
            arr.push(r(item))
        });
        return arr
    }


    console.log(images)

    return (
        <section className="brand__area p-relative pt-100 pb-150">
            <div className="brand__shape">
                <img className="square" src="assets/img/icon/brand/square.png" alt />
                <img className="circle" src="assets/img/icon/brand/circle.png" alt />
                <img className="circle-2" src="assets/img/icon/brand/circle-2.png" alt />
                <img className="triangle" src="assets/img/icon/brand/trianlge.png" alt />
            </div>
            <div className="container">
                <div className="row mb-40">
                    <div className="col-xl-4 offset-xl-1 col-lg-4 offset-lg-1">
                        <div className="section__title mb-30">
                            <span>Subsidiaries </span>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-7">
                        <div className="section__title section__title-3 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <h2>Our Alliance to Make the Tomorrow Together. </h2>
                        </div>
                        {/* <div className="brand__subtitle mb-90 wow fadeInUp" data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                            <p>Our Alliance to Make the Tomorrow Together. </p>
                        </div> */}
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12">


                        <Slider {...settings}>
                            {images.map(item => (

                                <div className="brand__item px-4 mb-20">
                                    <img src={item} alt />
                                </div>
                            ))}

                        </Slider>

                    </div>
                </div>
            </div>
        </section>

    )
}

export default OurClientsArea

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: '#423d7c',
                borderRadius: '1rem'
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: '#423d7c',
                borderRadius: '1rem'
            }}
            onClick={onClick}
        />
    );
}