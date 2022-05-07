import React from 'react'
import CountUp from 'react-countup';

const CounterArea = () => {

    const data = [
        { content: 'Happy Clients', count: 524 },
        { content: 'Project Completed', count: 224 },
        { content: 'Support Given', count: 174 },
        { content: 'Offices Worldwide', count: 4 },
    ]
    return (
        <section className="counter__area pb-100">
            <div className="container">
                <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                    <div className="row">
                        {data.map(item => (

                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6">
                                <div className="counter__item text-center mb-30">
                                    <h2 className="counter">
                                        <CountUp end={item.count} />
                                    </h2>
                                    <span>{item.content}</span>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </section>

    )
}

export default CounterArea