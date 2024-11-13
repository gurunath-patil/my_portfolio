import React from "react";
import "./style.css"

let experience_details = [
    {
        id: 1,
        year: "2024",
        course_title: "Master's Of Computer Application",
        collage_name: "D Y Patil Agricuture & Technical University, Talsande"
    },
    {
        id: 2,
        year: "2022",
        course_title: "Bachelor Of Computer Scince",
        collage_name: "Shivaji University, Kolhapur"
    },
    {
        id: 3,
        year: "2019",
        course_title: "HSC",
        collage_name: "Private High School & Jr.College, Kolhapur"
    },
    {
        id: 4,
        year: "2017",
        course_title: "SSC",
        collage_name: "Rajashri Chatrapati Shahu Public School, Bhogavati, Kolhapur"
    }
]
function Education() {


    return (
        <>
            <section className="border" id="education-container">
                <div className="d-flex justify-content-center mt-4 ms-2 education-text">
                    <h2 className="fw-bold d-flex align-items-center "><span class="material-icons">school</span>&nbsp;Education</h2>
                </div>
                <div className="d-flex justify-content-around flex-wrap mt-5 mb-5">
                    {experience_details.map((res) => {
                        const { year, course_title, collage_name } = res
                        return (
                            <div className="border border-dark p-4 fw-bold text-light rounded mb-3" id="education-box" key={res.id}>
                                <p className="h5 text-danger">{year}</p>
                                <p className="h3 text-success fw-bold">{course_title}</p>
                                <p>{collage_name}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Education