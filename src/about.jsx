import React from "react";
import developerMan from "./ui_source/image.jpg"

export function About() {

    return (
        <>
            <section className="row" id="about-container">
                {/* image container  */}
                <div className="col-md-5 d-flex justify-content-center align-items-center">
                    <img src={developerMan} className="h-75 w-50 rounded-circle border border-dark" alt="image" />
                </div>

                {/* txt container */}
                <div className="col-md-6" id="about-txt-container">
                    <h2 className="d-flex align-items-center mt-5"><span class="material-icons style-icon">
                        person
                    </span>&nbsp;ABOUT ME</h2>
                    <div className="text-capitalize mt-4 ms-5 p-2 text-light">
                        <p>a web developer with a master’s degree in Computer Science. I have a strong foundation in both front-end and back-end technologies, including HTML, CSS, JavaScript, TypeScript, React, Angular, Node.js, Express js and Nest JS.</p>
                        <p className="mt-2">I Have 1 Year's of experience internship at Compserve Consultant Private Ltd, where I gained hands-on experience working on real-world projects, such as ERP systems and custom applications.</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3 ms-5 mb-5">
                        <a className="btn btn-dark border-warning text-warning fw-bold d-flex align-items-center" href="https://drive.google.com/file/d/1DrnTV_Qs7eK6FFWDplbNsRRpyBt6cKk8/view?usp=sharing" target="_black">Resume &nbsp;<span class="material-icons p-0">
                            download
                        </span></a>
                    </div>
                </div>
            </section>
        </>
    )
}
