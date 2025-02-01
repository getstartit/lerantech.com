import React from "react";
import { useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const location = useLocation();
  return (
    <div>
      {/* Full-Width Image with Breadcrumbs */}
      {location.pathname == '/contact-us' ? <>
      <div
        className="bg-image w-100 text-white d-flex align-items-center mtop-80"
        id="contact-section"
        style={{
          backgroundImage: "url('/image/contact-us3.jpg')",
          height: "500px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container text-start">
          <h1 className="main-color">Contact Us</h1>
          <p>
            <a href="/" className="text-white text-decoration-none">
              Home
            </a>{" "}
            / <a href="/contact-us" className="text-decoration-none t-color">Contact Us</a>
          </p>
        </div>
      </div>

        <div className="container mt-4">
          <div className="row g-4 mt-5">
            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card" data-aos="fade-up">
                <a href="tel:+1234567890" className="text-decoration-none">
                  <img
                    src="/image/phone.png"
                    alt="Call Us"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">Call Us</p>
                  <p className="p-color">+123 456 7890</p>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card course-card" data-aos="fade-up">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <img
                    src="/image/whatsapp.svg"
                    alt="Chat with us"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">Chat If any query</p>
                  <p className="p-color">WhatsApp: +123 456 7890</p>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card" data-aos="fade-up">
                <a href="mailto:info@example.com" className="text-decoration-none" data-aos="fade-up">
                  <img
                    src="/image/mail.svg"
                    alt="Email Us"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">Email Us</p>
                  <p className="p-color">info@example.com</p>
                </a>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card text-center p-3 h-100 course-card" data-aos="fade-up">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                  <img
                    src="/image/linkedin.svg"
                    alt="LinkedIn Profile"
                    className="img-fluid mb-2"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <p className="t-color fw-bold">LinkedIn</p>
                  <p className="p-color">Connect with us on LinkedIn</p>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="container mt-5">
          <div className="row">
            {/* Map Column */}
            <div className="col-md-6 mb-4" data-aos="fade-left">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.343019807083!2d80.206779!3d13.124001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMTInMjQuNCJF!5e0!3m2!1sen!2sin!4v1616628569842"
                className="w-100 course-card"
                style={{ height: "430px", border: 0, }}
                allowFullScreen={true}
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

            {/* Review Form Column */}
            <div className="col-md-6 mb-4" data-aos="fade-right">
              <div className="card p-4 course-card">
                <h5 className="mb-3 text-center t-color">Send Us Your Review</h5>
                <form>
                  <div className="mb-3 p-color">
                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                  </div>
                  <div className="mb-3 p-color">
                    <input type="email" className="form-control" id="email" placeholder="Your Email" />
                  </div>
                  <div className="mb-3 p-color">
                    <textarea className="form-control" id="review" rows={3} placeholder="Your Review"></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn common-bcolor btn-tcolor w-100"
                    style={{ borderRadius: "8px" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div></> : ""}

      <div className="card mb-3 bg-custom w-100 text-white mt-5">
        <div className="container m-2">
          <div className="row g-4">
            {/* First Column: Address */}
            <div className="col-12 col-md-4">
              <div className="card-body" data-aos="fade-left">
                <div className="logo-container mb-4">
                  <img src="/image/l_t-nobg.png" alt="logo" />
                  <div className="text-container">
                    <h1 className="heading-64">Learn Tech IT Solutions</h1>
                    <p className="para-17">
                      <i>Shape Your Career</i>
                    </p>
                  </div>
                </div>
                <h5 className="card-title mb-3" style={{ fontSize: "x-large" }}>
                  Contact Us
                </h5>
                <h6 className="card-text">Kolathur</h6>
                <p className="footer-address">
                  2nd floor, 8 & 9, 200ft road, above Louis Philippe and Allen Solly, Ambedkar Nagar, Kolathur, Chennai, Tamil Nadu 600099
                </p>
              </div>

              <div className="d-flex align-items-center flex-shrink-0 me-4" data-aos="fade-right">
                <a
                  href="tel:+"
                  className="btn p-0 me-4 btn-img"
                  aria-label="Phone"
                >
                  <img
                    src="/image/phone.png"
                    className="img-fluid rounded-start course-card"
                    alt="Phone"
                  />
                </a>
                <a
                  href="https://wa.me/"
                  className="btn p-0 me-4 btn-img"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <img
                    src="/image/whatsapp.svg"
                    className="img-fluid rounded-start course-card"
                    alt="WhatsApp"
                  />
                </a>
                <a
                  href="mailto:"
                  className="btn p-0 me-4 btn-img"
                  aria-label="Email"
                >
                  <img
                    src="/image/mail.svg"
                    className="img-fluid rounded-start course-card"
                    alt="Email"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/"
                  className="btn p-0 btn-img"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/image/linkedin.svg"
                    className="img-fluid rounded-start course-card"
                    alt="LinkedIn"
                  />
                </a>
              </div>

            </div>

            {/* Second Column: Navigation Links */}
            <div className="col-12 col-md-4 mt-5 d-flex flex-column align-items-center" data-aos="fade-left">
              <h5 className="mb-3">Quick Links</h5>
              <div className="d-flex flex-column gap-2 ">
                {[
                  { label: "Home", link: "/" },
                  { label: "About Us", link: "/about" },
                  { label: "Placements", link: "/placements" },
                  { label: "Courses", link: "/courses" },
                  { label: "Testimonials", link: "/testimonials" },
                  { label: "Contact Us", link: "/contact" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    className="nav-link text-white text-decoration-none mt-3"
                  >
                    <i className="bi bi-chevron-double-right me-3 t-color"></i>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Third Column: Map */}
            <div className="col-12 col-md-4 d-flex flex-column" data-aos="zoom-up">
              <h5 className="mb-3 mt-3 mleft-200">MAP</h5>
              <div className="ms-5" style={{ width: "100%", maxWidth: "500px", marginLeft: "50px", }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15556.343019807083!2d80.206779!3d13.124001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA3JzI0LjQiTiA4MMKwMTInMjQuNCJF!5e0!3m2!1sen!2sin!4v1616628569842"
                  className="w-100"
                  style={{ border: 0, minHeight: "280px", marginLeft: "50px", background: "transparent", }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};
