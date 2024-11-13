import React from "react";
import "./style.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const projectObj = [
  {
    title: "Baramati DudhSange & ATA ERP Projects",
    view: "",
    gitHubLink: "",
    imgURL: "https://mahasarkar.co.in/wp-content/uploads/2023/11/Baramati-Taluka-Sahakari-Doodh-logo-1200x675.webp",
    description: "In this project, I contributed as both a frontend and backend developer during my internship. On the frontend, I created pages, implemented data binding, generated reports, and inserted data into the database. On the backend, I worked to create endpoints."
  },
  {
    title: "English Words Dictionary",
    view: "",
    gitHubLink: "https://github.com/gurunath-patil/basic_english_dictionary.git",
    imgURL: "https://images.unsplash.com/photo-1524639064490-254e0a1db723?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGljdGlvbmFyeXxlbnwwfHwwfHx8MA%3D%3D",
    description: "English dictionary webpage where users can search for words and find their meaning, audio pronunciation, synonyms, antonyms, and more details. There is also a button that links to Wikipedia to show related information about the word.you're a student, professional, language enthusiast, our English dictionary webpage is yours"
  },
  {
    title: "Weather Website",
    view: "https://weather-forcast-nu.vercel.app/",
    gitHubLink: "https://github.com/gurunath-patil/Weather_Forcast",
    imgURL: "https://images.unsplash.com/photo-1560977501-7cb367eccebe?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Weather Website provides up-to-date and accurate weather information for locations worldwide.This Project is the best resource for users to check current weather conditions and forecasts Weather, some Key Features: Current Weather Conditions, Hourly and Daily Forecasts, Weather Alerts and Notifications, Customizable Locations etc."
  },
  {
    title: "Blog Website",
    view: "",
    gitHubLink: "https://github.com/gurunath-patil/blog-website",
    imgURL: "https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Discover, create, and share your ideas on our dynamic blogging platform. Whether you're here to share stories, insights, or simply express yourself, our website provides an engaging space to connect with a community of thinkers and readers. With a seamless login system, you can easily access and manage your personal space, create blogs, and view others' content."
  },
  {
    title: "QR Code Generate",
    view: "https://generate-qr-code-omega.vercel.app/",
    gitHubLink: "https://github.com/gurunath-patil/Generate_QR_Code",
    imgURL: "https://images.pexels.com/photos/7289717/pexels-photo-7289717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "This application offers a simple and user-friendly way to generate QR codes from any text input. Powered by Express.js for the backend API and EJS for a seamless UI, this project is ideal for anyone needing quick QR codes for text, URLs, or contact information. Users can input their desired text, and the server dynamically generates and returns a QR code image in real-time."
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
          <div className="row d-flex justify-content-evenly align-items-center flex-wrap vw-100" style={{ rowGap: '2rem' }}>
            {projectObj.map((res, index) => {
              const { title, imgURL, view, description,gitHubLink } = res
              return (
                <Card sx={{ width: '30%', backgroundColor: '#ECF0F1' }}>
                  <CardMedia sx={{ width: '100%', height: '12rem', borderRadius: '30px', padding: '1rem' }} component="img" image={imgURL} title="image" />
                  <CardContent>
                    <Typography sx={{ fontWeight: 'bold', marginBottom: '2%', fontSize: '22px' }}>{title}</Typography>
                    <Typography sx={{ textAlign: 'justify', fontSize: '15px' }}>{description}</Typography>
                  </CardContent>
                  <CardActions>
                    {
                      view != "" &&
                      <Button variant="contained"><a style={{ color: 'white', textDecoration: 'none' }} target="_blank" href={view}>Link</a></Button>
                    }
                    {
                      gitHubLink != "" &&
                      <Button variant="contained"><a style={{ color: 'white', textDecoration: 'none' }} target="_blank" href={gitHubLink}>Github</a></Button>
                    }

                  </CardActions>
                </Card>
              )
            })}
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
