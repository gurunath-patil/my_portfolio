import React from "react";
import "./style.css";

const projectObj = [
  {
    title: "Baramati DudhSange & ATA ERP Projects",
    view: "http://203.192.229.114:90/ERP",
    imgURL: "https://mahasarkar.co.in/wp-content/uploads/2023/11/Baramati-Taluka-Sahakari-Doodh-logo-1200x675.webp",
    description: "In this project, I contributed as both a frontend and backend developer during my internship. On the frontend, I created pages, implemented data binding, generated reports, and inserted data into the database. On the backend, I worked to create endpoints."
  },
  {
    title: "English Words Dictionary",
    view: "https://github.com/gurunath-patil/basic_english_dictionary.git",
    imgURL: "https://images.unsplash.com/photo-1524639064490-254e0a1db723?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGljdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
    description: "English dictionary webpage where users can search for words and find their meaning, audio pronunciation, synonyms, antonyms, and more details. There is also a button that links to Wikipedia to show related information about the word.you're a student, professional, language enthusiast, our English dictionary webpage is yours"
  },
  {
    title: "TO DO LIST Website Simple Page",
    view: "https://github.com/gurunath-patil",
    imgURL: "https://plus.unsplash.com/premium_photo-1683749810514-860f96ad0735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHRvJTIwZG8lMjBsaXN0fGVufDB8fDB8fHww",
    description: "It's a simple to-do list page where users can add tasks along with the time and day. When the user clicks on a button, the task is added to the list box. Users can also delete tasks from the list. Additionally, users can log in to this page. The list box is placed at the bottom"
  }
]

export function ProjectDetails() {
  return (
    <>
      <div className="overflow-hidden" id="project-selection">
        <div className="d-flex justify-content-center">
          <div className="row container mt-5">
            <div className="col-md-1 col-1 d-flex justify-content-end">
              <span className="fs-3  p-0">✍️</span>
            </div>
            <div className="col-md-7 col-7 d-flex align-items-center ">
              <span className="fs-5 p-0 fw-bold">Selected Work</span>
            </div>
            <hr className="border border-dark" />
          </div>
        </div>
        {/* project cards */}
        <div id="project-card-container">
          <div className="row d-flex justify-content-evenly vw-100">
            {projectObj.map((res, index) => {
              const { title, imgURL, view, description } = res
              return (
                <div className="col-md-3 col-8 d-flex p-0" id="project-container">
                  <div className="p-3 card-container border border-dark rounded bg-dark" key={index} >
                    <h3 className="ms-3 mt-3 fw-bold text-info">{title}</h3>
                    <p className="ms-3 paregraph-line mt-3 text-light">
                      {description}
                    </p>
                    <a
                      className="ms-3 mb-3 btn btn-success fw-bold"
                      href={view}
                      target="_blank"
                      onClick={(res) => {
                        if (!view) {
                          res.preventDefault()
                          alert('This project was done during my internship, so it is not available.')
                        }
                      }
                      }
                    >
                      View
                    </a>
                    <div className="img-container">
                      <img
                        src={imgURL}
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
