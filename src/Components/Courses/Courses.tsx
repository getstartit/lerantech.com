import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Query } from "../Query/Query";

const Courses: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const courses = [
    {
      title: "Full Stack Courses",
      image: "/image/mern-1.jpg",
      topics: ["HTML", "CSS", "JavaScript", "React Js", "Node Js", "Mongo DB"],
    },
    {
      title: "Cloud Technology",
      image: "/image/cloud_course_3.jpg",
      topics: ["Linux", "AWS", "App Hosting"],
    },
    {
      title: "DevOps Engineer",
      image: "/image/devops2.jpg",
      topics: [
        "Linux",
        "AWS",
        "App Hosting",
        "Ansible",
        "Terraform",
        "Kubernetes",
        "Docker",
      ],
    },
    // Add more courses here
  ];

  // Show limited courses initially
  const [showAll, setShowAll] = useState(location.pathname === "/courses");

  const displayedCourses = showAll ? courses : courses.slice(0, 3);

  const handleViewAll = () => {
    navigate("/courses");
    setShowAll(true);
  };

  return (
    <>
      <h1
        className="text-center t-color heading-64"
        id="course-section"
        data-aos="fade-right"
        style={{ marginTop: "150px", marginBottom: "50px" }}
      >
        <i className="bi bi-book-half me-2"></i> Discover Our Courses
      </h1>

      <div
        className="row g-0 mleft-50"
        style={{ marginTop: "20px" }}
      >
        {displayedCourses.map((course, index) => (
          <div
            key={index}
            className="col-md-4 d-flex"
          >
            <div
              className="card course-card"
              data-aos="zoom-in"
              style={{ width: "100%", maxWidth: "370px", height: "450px" }}
            >
              <img
                src={course.image}
                className="card-img-top"
                data-aos="zoom-in-up"
                alt="Course preview"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title t-color">{course.title}</h5>
                <p className="card-text">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="t-color">
                      {topic}
                    </li>
                  ))}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-end me-5 mt-4">
          <button
            className="btn text-primary text-decoration-underline"
            onClick={handleViewAll}
          >
            View All Courses
          </button>
        </div>
      )}


      {location.pathname === "/courses" && <Query />}
    </>
  );
};

export default Courses;
