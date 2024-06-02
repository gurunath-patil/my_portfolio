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
                        <p>I am a Second year Post graduate student of the Department of Masters Of Computer Application, D Y Patil Technical & Agriculture university, Talsande, Maharashtra. I was born in Chuye, Kolhapur.</p>
                        <p>My coding journey is defined by dedication to continuous learning, consistently expanding my skill set, and keeping up-to-date with trends to ensure, as a coder...</p>
                        <p>Currently working in Compserv Private LTD, Kolhapur as a inten "Software Developer".</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3 ms-5 mb-5">
                        <a className="btn btn-dark border-warning text-warning fw-bold d-flex align-items-center" href="src/ui_source/resume.pdf" target="_black">Resume &nbsp;<span class="material-icons p-0">
                            download
                        </span></a>
                    </div>
                </div>
            </section>
        </>
    )
}