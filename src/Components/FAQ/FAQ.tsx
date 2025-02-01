export const FAQ = () => {
    return (
        <>
            <p className="text-center m-5 t-color heading-64"
                data-aos="fade-right">
                <i className="bi bi-question-circle-fill me-3 " style={{ fontSize: "2.5rem", color: "#28a745" }} ></i>
                FAQ`s
            </p>
            <div className="accordion m-5 placement-color" id="accordionExample" >
                <div className="accordion-item mb-2 faq-margin" data-aos="zoom-up">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Do you provide courses on flexible timings ?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Yes, We have a option to take courses on flexible timings.
                            We provide class on week days,week ends.
                            You can endroll a course based on your needs.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2 faq-margin">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed placement-color"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Is that online classes available ?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the second item`s accordion body.</strong> It is hidden
                            by default, until the collapse plugin adds the appropriate classes that
                            we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It`s also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-2 faq-margin">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>This is the third item`s accordion body.</strong> It is hidden
                            by default, until the collapse plugin adds the appropriate classes that
                            we use to style each element. These classes control the overall
                            appearance, as well as the showing and hiding via CSS transitions. You
                            can modify any of this with custom CSS or overriding our default
                            variables. It`s also worth noting that just about any HTML can go within
                            the <code>.accordion-body</code>, though the transition does limit
                            overflow.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}