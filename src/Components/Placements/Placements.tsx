import React, { useEffect, useState } from "react";
import { FAQ } from "../FAQ/FAQ";
import Testimonials from "../Testimonials/Testimonials";

export const Placements = () => {

    const [placedStudents, setPlacedStudents] = useState(0);
    const [companies, setCompanies] = useState(0);
    const [currentStudents, setCurrentStudents] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setPlacedStudents(prev => (prev < 100 ? prev + 1 : prev));
            setCompanies(prev => (prev < 60 ? prev + 1 : prev));
            setCurrentStudents(prev => (prev < 20 ? prev + 1 : prev));
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {location.pathname == '/placements' ?
                <div
                    className="bg-image w-100 text-white d-flex align-items-center mtop-80"
                     id="placements-section"
                    style={{
                        backgroundImage: "url('/image/placement1.jpg')",
                        height: "500px",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="container text-start">
                        <h1 className="main-color">Placements</h1>
                        <p>
                            <a href="/" className="text-white text-decoration-none">
                                Home
                            </a>{" "}
                            / <a href="/placements" className="text-decoration-none t-color">Placements</a>
                        </p>
                    </div>
                </div> : ""}
            <p className={location.pathname == '/placements' ? "mtop-120 text-center label t-color heading-64" : "mtop-150 text-center m-5 label t-color heading-64"}
                data-aos="zoom-up-left">
                <i className="bi bi-trophy-fill me-2" style={{ fontSize: "1.5rem", color: "#007bff" }}></i>
                Placements
            </p>
            <div className="container my-5">
                <div className="row g-5 text-center">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 placement-card">
                            <div className="card-body t-color card course-card"
                                data-aos="fade-up">
                                <i
                                    className="bi bi-people-fill mb-3"
                                    style={{ fontSize: "4rem", color: "#007bff" }}
                                ></i>
                                <h5 className="card-title placement-color">Placed Students</h5>
                                <p className="card-text display-4 fw-bold placement-color">{placedStudents}+</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 placement-card">
                            <div className="card-body t-color card course-card"
                                data-aos="fade-up">
                                <i
                                    className="bi bi-building mb-3"
                                    style={{ fontSize: "4rem", color: "#28a745" }}
                                ></i>
                                <h5 className="card-title placement-color">Companies</h5>
                                <p className="card-text display-4 fw-bold placement-color">{companies}+</p>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card shadow border-0 placement-card">
                            <div className="card-body t-color card course-card"
                                data-aos="fade-up">
                                <i
                                    className="bi bi-person-workspace mb-3"
                                    style={{ fontSize: "4rem", color: "#ffc107" }}
                                ></i>
                                <h5 className="card-title placement-color">Current Students</h5>
                                <p className="card-text display-4 fw-bold placement-color">{currentStudents}+</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {location.pathname == '/placements' ? <FAQ></FAQ> : ""}
            {location.pathname == '/placements' ? <Testimonials></Testimonials> : ""}

        </>
    )
}
