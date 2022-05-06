import React from 'react'
import { Link } from 'react-router-dom'

const PageTopComponent = ({pageTitle}) => {
    return (
        <section className="page__title p-relative d-flex align-items-center fix" data-background="assets/img/page-title/page-title-1.jpg" style={{ backgroundImage: 'url("assets/img/page-title/page-title-1.jpg")' }}>
            <div className="slider__shape">
                <img className="shape triangle" src="assets/img/icon/slider/triangle.png" alt="triangle" />
                <img className="shape dotted-square" src="assets/img/icon/slider/dotted-square.png" alt="dotted-square" />
                <img className="shape solid-square" src="assets/img/icon/slider/solid-square.png" alt="solid-square" />
                <img className="shape circle-2" src="assets/img/icon/slider/circle.png" alt="circle" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="page__title-content mt-100">
                            <h2>{pageTitle}</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default PageTopComponent