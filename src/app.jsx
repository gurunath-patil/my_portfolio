import React from "react";
import Title_ui from "./title";
import { About } from "./about";
import { ProjectDetails } from "./project_details";
import Experience from "./exprince";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";

export default function App() {

    return (
        <>
            <Title_ui />
            <About />
            <ProjectDetails />
            <Experience />
            <Skills />
            <Education />
            <Contact />
        </>
    )
}