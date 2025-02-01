import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      course: "Full Stack Development",
      message: "This course changed my life! The instructors are amazing.",
      image: "/image/student1.jpg",
    },
    {
      name: "Jane Smith",
      course: "Data Science",
      message: "The content is top-notch, and the projects are practical.",
      image: "/image/student2.jpg",
    },
    {
      name: "Alex Johnson",
      course: "UI/UX Design",
      message: "I landed a job right after completing the course!",
      image: "/image/student3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      {location.pathname == '/testimonials' ?
        <div
          className="bg-image w-100 text-white d-flex align-items-center mtop-80"
          id="testimonaial-section"
          style={{
            backgroundImage: "url('/image/testimonial1.jpg')",
            height: "500px",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container text-start">
            <h1 className="main-color">Testimonials</h1>
            <p>
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>{" "}
              / <a href="/testimonials" className="text-decoration-none t-color">Testimonials</a>
            </p>
          </div>
        </div>:""}
        <section className="testimonials py-5 t-color">
          <div className={location.pathname == '/testimonials' ? "container mtop-120" : "container"}>
            <div className="row mt-3">
              {/* Left side: Heading and Buttons */}
              <div className="col-md-6 text-center">
                <h2 className="mb-4  t-color heading-64">
                  <i className="bi bi-person-circle"></i> {/* Icon */}
                  Testimonials
                </h2>
                <h6>What Our Students Say</h6>
                {/* Navigation buttons */}
                <div className="btn-group" id="id-btn">
                  <button
                    className="btn"
                    onClick={goToPrevious}
                    disabled={currentIndex === 0}
                  >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="btn"
                    onClick={goToNext}
                    disabled={currentIndex === testimonials.length - 1}
                  >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              {/* Right side: Testimonial content */}
              <div className="col-md-6 t-color">
                <div
                  className="testimonial-container d-flex overflow-hidden course-card"
                  style={{ width: "100%" }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`testimonial-card card h-100 text-center shadow-sm position-relative t-color`}
                      style={{
                        minWidth: "100%",
                        transform: `translateX(-${currentIndex * 100}%)`,
                        transition: "transform 0.5s ease-in-out",
                      }}
                    >
                      {/* <i className="bi bi-person-circle"></i> */}
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={`${testimonial.name}'s photo`}
                          className="card-img-top rounded-circle mx-auto mt-3"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      )}
                      <div className="card-body">
                        <h5 className="card-title">{testimonial.name}</h5>
                        <p className="card-subtitle text-muted">{testimonial.course}</p>
                        <p className="card-text mt-3">`{testimonial.message}`</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
  );
};

      export default Testimonials;
