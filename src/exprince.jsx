import React from "react";
import "./style.css"

let experience_details = [
    {
        id: 1,
        company_name: "Compserv Private LTD, Kolhapur",
        position: "Trainer & Full Stack Developer",
        duration: "September 2023 - September 2024",
        title: "Web Developer",
        details: "As A Intern for  Web development in Angular and NestJs As Well As Figma."
    }
]
function Experience() {


    return (
        <>
            <section className="border" id="exprince-container">
                <div className="d-flex justify-content-center mt-4 exprience-text">
                    <h2 className="fw-bold"><span class="material-icons">work</span>&nbsp; Work Experience</h2>
                </div>
                <div className="d-flex justify-content-around mt-5 mb-5">
                    {experience_details.map((res) => {
                        const { company_name, position, duration, title, details } = res
                        return (
                            <div className="border border-dark p-4 fw-bold text-light rounded" id="exprince-box" key={res.id}>
                                <p className="h5">{company_name}</p>
                                <p className="lh-1 text-info">{position}</p>
                                <p className="lh-3">{duration}</p>
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Experience