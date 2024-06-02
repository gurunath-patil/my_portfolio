import React, { Fragment } from "react";
import * as ReactDOM from "react-dom/client";
import Title_ui from "./title";
import { ProjectDetails } from "./project_details";
import { About } from "./about";
import Experience from "./exprince";
import Skills from "./skills";
import Education from "./education";
import Contact from "./contact";

ReactDOM.createRoot(document.getElementById('root')).render(
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