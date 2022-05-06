import React from 'react'

const TeamCard = ({name, position, userImg}) => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6">
            <div className="team__item p-relative text-center fix mb-30 wow fadeInUp" data-wow-delay="1.2s" style={{ visibility: 'visible', animationDelay: '1.2s', animationName: 'fadeInUp' }}>
                <div className="team__thumb mb-25">
                    <img src={userImg} alt="team" />
                    <div className="team__info text-left">
                        <h3><a href="team-details.html">{name}</a></h3>
                        <span> {position}</span>
                    </div>
                    <div className="team__social theme-social">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fab fa-facebook-f" />
                                    <i className="fab fa-facebook-f" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-twitter" />
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-vimeo-v" />
                                    <i className="fab fa-vimeo-v" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="team__content">
                    <h3><a href="team-details.html">{name}</a></h3>
                    <span> {position}</span>
                </div>
            </div>
        </div>
    )
}

export default TeamCard