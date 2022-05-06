import React, { useEffect, useRef, useState } from 'react'
import PageTopComponent from '../../components/PageTopComponent/PageTopComponent'
import Map from './MapAddress'
import MapAddress from './MapAddress'

const Contact = () => {
    const ref = useRef([])

    const Address = [
        { location: 'Kuwait', address: 'Kuwait City, Qibla Block No :15 street Ali Al Salem Adel tower Kuwait City, 15000, Kuwait', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13908.188261774689!2d47.9688201!3d29.3689111!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3db2897c05964d6!2sJobin%20International!5e0!3m2!1sen!2sin!4v1651750953563!5m2!1sen!2sin' },
        { location: 'changanassery', address: 'FIRST FLOOR, KAVALAM ROYAL SQUARE, 1ST FLOOR, (P.O, College Rd, Changanassery, Kerala 686101', mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15742.81005583336!2d76.5398019!3d9.4474639!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x855f586ed262cd0f!2sJIC%20INTERNATIONAL%20HUMAN%20RESOURCES%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1651818856783!5m2!1sen!2sin' },
        { location: 'Kochi', address: 'Residents Ln, Changampuzha Park, Edappally, Kochi, Kerala 682026', mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d605.5185704225012!2d76.2992916727782!3d10.017397318202283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dd5ce6453a9%3A0xa7edca6f1da50716!2sInnerspace%20Coworking!5e0!3m2!1sen!2sin!4v1651819024658!5m2!1sen!2sin' },
    ]
    const [activeId, setactiveId] = useState(0)


    useEffect(() => {
        ref.current.filter((itm, idx) => idx != activeId && itm.childNodes[1].classList.remove('show') | itm.childNodes[0].classList.add('collapsed'))
    }, [activeId])


    console.log(ref)
    return (
        <>
            <PageTopComponent pageTitle={'Contact us'} />
            <section className='' />

            <section className="faq__area row px-0 p-relative pt-135 pb-120 grey-bg-12">

                <div className="col-md-6 col-12">
                    <div className="row px-0 justify-content-center">
                        <div className="col-md-10 col-10">
                            <Map height={'450px'} mapUrl={Address[activeId].mapUrl} />
                        </div>
                    </div>
                </div>


                <div className="container col-12 col-md-6">
                    <div className="row px-0 justify-content-center">
                        <div className="col-md-10 col-10">
                            <div className="faq__wrapper">
                                <div className="section__title section__title-3 mb-25 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                    {/* <span>Thinking</span> */}
                                    <h2>Locate us<br />
                                    </h2>
                                </div>
                                <div id="accordion">

                                    {Address.map((item, idx) => (

                                        <div key={idx} className="card wow fadeInUp" id='myCollapse' data-wow-delay=".4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <div ref={(element) => { ref.current[idx] = element }}>
                                                        <button onClick={() => setactiveId(idx)} className="btn btn-link" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.location}`} aria-expanded="false" aria-controls="collapseOne">
                                                            {item.location}
                                                        </button>

                                                        <div className={`collapse `} id={`collapse${item.location}`} data-parent='#accordion'>
                                                            <div className="card m-0 card-body">
                                                                <p>{item.address}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </h5>
                                            </div>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className='pt-100 pb-80 grey-bg-12' /> */}
        </>
    )
}

export default Contact