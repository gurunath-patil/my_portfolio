import React from "react";
import { Link, Outlet } from "react-router-dom";

function Title() {

    return (
        <>
            <section className="title-container">
                <nav className="fixed-top p-1 nav-container border-bottom border-warning border-2">
                    <ul className="d-flex justify-content-end align-items-center mb-0" id="nav-ul">
                        <li>
                            <a href="#about-container">About</a>
                        </li>
                        <li>
                            <a href="#project-selection">Project</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="d-flex justify-content-center align-items-center mt-5" id="title-flex-container">
                    <div className="container" id="title-txt-container">
                        <p className="text-light mb-0 fw-bold fs-3 mt-2">Hello World, My Name is</p>
                        <h1 className="ms-2 display-1 fw-bold p-1" id="typing-effect">Gurunath Patil.</h1>
                        <h1 className="display-2 fw-bold mb-3">I love exploring new things!</h1>
                        <p className="p-2 fs-4 fw-bold">I'm an Web developer with a goal-driven creative mindset and passion for learning and innovating.</p>
                        {/* <p className="p-1 fs-4 w-75 fw-bold">Currently, I am an intern as a Web Developer at Compserv Private LTD in Kolhapur, and I am also a postgraduate student..</p> */}
                        <Link to="/contactform" className="btn btn-primary btn-lg mt-5 ">Contact Me</Link>
                    </div>
                </div>
                <Outlet />
            </section>
        </>
    )
}

export default Title