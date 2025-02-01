import React, { useEffect, useState } from "react";
import { Placements } from "../Placements/Placements";
import Testimonials from "../Testimonials/Testimonials";
import Courses from "../Courses/Courses";
import { About } from "../AboutUs/About-us";
import { FAQ } from "../FAQ/FAQ";
import { Query } from "../Query/Query";

export const Home = () => {
    return (
        <>
            {/* Main Carousel */}
            <div
                id="carouselMain"
                className="carousel slide"
                style={{ marginTop: "80px", marginBottom: "80px", marginRight: "15px" }}
                data-aos="fade-right"
                data-bs-ride="carousel"
                data-bs-interval="3000"

            >
                {/* Carousel Indicators */}
                <div className="carousel-indicators" >
                    <button
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide-to="0"
                        className="active curosel-indicator-color"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        className="curosel-indicator-color"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselMain"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        className="curosel-indicator-color"
                    ></button>
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner mt-5">
                    <div className="carousel-item active">
                        <div className="d-flex">

                            <div className="w-50 d-flex align-items-center justify-content-center">
                                <div className="text-center home-text-center">
                                    <h5>Java Full Stack</h5>
                                    <p>Master Java and front-end technologies for full-stack development.</p>
                                </div>
                            </div>

                            <div className="w-50">
                                <img
                                    src="/image/home-2.jpg"
                                    className="d-block w-100"
                                    alt="Java Full Stack"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex">

                            <div className="w-50 d-flex align-items-center justify-content-center">
                                <div className="text-center home-text-center">
                                    <h5>Java Full Stack</h5>
                                    <p>Master Java and front-end technologies for full-stack development.</p>
                                </div>
                            </div>

                            <div className="w-50">
                                <img
                                    src="/image/home-2.jpg"
                                    className="d-block w-100"
                                    alt="Java Full Stack"
                                />
                            </div>
                        </div>

                    </div>
                    <div className="carousel-item">
                        <div className="d-flex">

                            <div className="w-50 d-flex align-items-center justify-content-center">
                                <div className="text-center home-text-center">
                                    <h5>Web Development</h5>
                                    <p>Create modern and responsive websites with advanced tools.</p>
                                </div>
                            </div>
                            <div className="w-50">
                                <img
                                    src="/image/home-3.jpg"
                                    className="d-block w-100"
                                    alt="Web Development"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselMain"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselMain"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* Content Section */}


            <About></About>
            {/* Courses Section */}
            <Courses />

            {/* Placements Section */}
            <Placements />

            {/* Testimonials Section */}
            <Testimonials />

            <FAQ></FAQ>

            <Query></Query>
        </>
    )
}


