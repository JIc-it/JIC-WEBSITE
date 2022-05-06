import React from 'react'
import TeamCard from './TeamCard'

const TeamArea = () => {

    const Teams = [
        {name:'Berlin Corleone', position:`CEO &amp; founder`, userImg:'assets/img/team/team-1.jpg'},
        {name:'Indigo Violet', position:`Project Manager`, userImg:'assets/img/team/team-2.jpg'},
        {name:'Dylan Meringue', position:`Support`, userImg:'assets/img/team/team-3.jpg'},
        {name:'Berlin Corleone', position:`App Developer`, userImg:'assets/img/team/team-4.jpg'},
        {name:'Shahnewaz Sakil', position:`Web Developer`, userImg:'assets/img/team/team-5.jpg'},
        {name:'Norman Gordon', position:`Associate Consultant`, userImg:'assets/img/team/team-6.jpg'},
    ]
    return (
        <section className="team__area pt-30 pb-110">
            <div className="container">
                <div className="row align-items-center mb-55">
                    <div className="col-xl-6 col-lg-8 col-md-8 col-sm-8">
                        <div className="section__title section__title-3 mb-30 wow fadeInUp" data-wow-delay=".2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                            <span>Our Team</span>
                            <h2>We help to create visual strategies.</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4 col-md-4 col-sm-4">
                        {/* <div className="team__more d-flex justify-content-sm-end mb-85">
                            <a href="team.html" className="z-btn z-btn-border">View all<i className="far fa-long-arrow-right" /></a>
                        </div> */}
                    </div>
                </div>
                <div className="row">
                   
                  {Teams.map(item =>(
                      <TeamCard name={item.name} position={item.position} userImg={item.userImg} />
                  ))}
                    {/* <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="team__item team__item-add p-relative text-center fix mb-30 wow fadeInUp" data-wow-delay="1.6s" style={{ visibility: 'visible', animationDelay: '1.6s', animationName: 'fadeInUp' }}>
                            <div className="team__add">
                                <a href="team.html"><i className="fal fa-plus" /></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    )
}

export default TeamArea