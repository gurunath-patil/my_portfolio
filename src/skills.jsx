import React from "react";
import "./style.css"

let experience_details = [
    {
        id: 1,
        skill_title: "Programming Languages",
        languages: "HTML, CSS, JavaScript, TypeScript, Java, Python",
        description: "'I Am Familiar with all This Languages'"
    },
    {
        id: 2,
        skill_title: "Framework",
        languages: "Angular, React, Express JS & NestJs",
        description: "'I Am Familiar with all This Framework'"
    },
    {
        id: 3,
        skill_title: "Tools",
        languages: "Git & Github, Figma",
        description: "'I Am Familiar with all This Tool'"
    }
]
function Skills() {


    return (
        <>
            <section className="border" id="skill-container">
                <div className="d-flex justify-content-start mt-4 ms-2 skill-text">
                    <h2 className="fw-bold d-flex align-items-center"><span class="material-icons">code</span>&nbsp;Skills</h2>
                </div>
                <div className="d-flex justify-content-around mt-5 mb-5 flex-wrap">
                    {experience_details.map((res) => {
                        const { skill_title, languages, description } = res
                        return (
                            <div className="border border-dark p-4 fw-bold text-light rounded" id="skill-box" key={res.id}>
                                <p className="h5 text-warning">{skill_title}</p>
                                <p className="text-info">{languages}</p>
                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </>
    )
}

export default Skills