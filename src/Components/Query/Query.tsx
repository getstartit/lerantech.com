import { useState } from "react"
import { sendQuery } from "../../API/QueryAPI";
import { ShowPopUp } from "../Pop-up/pop-up";

export const Query = () => {
    const userDetails = {
        name: "",
        email: "",
        domain: "",
        query: ""
    };

    const [userData, setUserData] = useState(userDetails);

    const onChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [id]: value
        }));
        console.log(userData);
    };

    const onClickSubmit = async () => {
        try {
            console.log(userData, "userData")
            const sendUserQuery = await sendQuery(userData);
            console.log("Query sended Successfully...")
        } catch (error: any) {
            console.log(error.message)
        }

    }
    return (
        <>
            
            <div className="container d-flex justify-content-center align-items-center my-5 mt-5">
                <div className="row w-100 mt-5" style={{maxWidth: "1000px" }}>
                    {/* Left Side Image */}
                    <div className="col-md-6 d-flex justify-content-center align-items-center course-card card img-br"
                        data-aos="fade-right">
                        <img
                            src="/image/faq-2.jpg"
                            alt="Placements"
                            className="img-fluid"
                            style={{ borderRadius: "10px", maxHeight: "300px" }}
                        />
                    </div>

                    {/* Right Side Form */}
                    <div className="col-md-6">
                        <form
                            className="p-4 glass-card course-card"
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "10px",
                            }}
                        >
                            <h3 className="text-center mb-4 t-color" data-aos="fade-left">
                                <i className="bi bi-question-circle me-2"></i> Any Query?
                            </h3>
                            <div className="mb-3" data-aos="zoom-out">
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    placeholder="Your Name"
                                    style={{ borderRadius: "8px" }}
                                    onChange={onChangeData}
                                    value={userData.name}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    className="form-control"
                                    value={userData.email}
                                    onChange={onChangeData}
                                />
                            </div>

                            <div className="mb-3" data-aos="zoom-out">
                                <input
                                    type="text"
                                    id="domain"
                                    className="form-control"
                                    placeholder="Your Domain"
                                    style={{ borderRadius: "8px" }}
                                    onChange={onChangeData}
                                    value={userData.domain}
                                />
                            </div>

                            <div className="mb-3" data-aos="zoom-out">
                                <textarea
                                    className="form-control"
                                    id="query"
                                    placeholder="Ask Your Query"
                                    rows={3}
                                    style={{ borderRadius: "8px" }}
                                    onChange={(event: any) => onChangeData(event)}
                                    value={userData.query}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn common-bcolor btn-tcolor w-100"
                                data-aos="zoom-out"
                                style={{ borderRadius: "8px" }}
                                onClick={() => onClickSubmit()}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
} 