import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MinimizeIcon from "@mui/icons-material/Minimize";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import CodeIcon from "@mui/icons-material/Code";
import ContactsIcon from "@mui/icons-material/Contacts";
import Tooltip from "@mui/material/Tooltip";
import Image from "./pic.jpg";
import Image1 from "./leetcode.png";
import Image2 from "./gfg.png";
import Image3 from "./facebook.png";
import Image4 from "./instagram.png";
import Image5 from "./gmail.png";
import HomeIcon from "@mui/icons-material/Home";
import Dance from "./dance.jpg";
import Business from "./business.jpg";
import Todo from "./todo.jpg";
import TaskIcon from '@mui/icons-material/Task';
import SouthIcon from '@mui/icons-material/South';
import { ContactUs } from "./Contact";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Facebook } from "@mui/icons-material";
/**/
const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wniun15",
        "template_fb7nhef",
        form.current,
        "JCQd-ctQcp9JoeOVD"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container">
        <div id="home">
          <div className="ic">
            <a
              href="https://www.linkedin.com/in/abhinav-mishra-77448b188"
              target="_blank"
            >
              <LinkedInIcon></LinkedInIcon>
            </a>
            <a href="https://github.com/Abhinav2821998" target="_blank">
              <GitHubIcon></GitHubIcon>
            </a>
            <MinimizeIcon style={{ color: "aquaMarine" }} />{" "}
            <MinimizeIcon style={{ color: "aquaMarine" }} />
            <MinimizeIcon style={{ color: "aquaMarine" }} />
          </div>
          <h4>Hello I'm</h4>
          <h2>ABHINAV MISHRA</h2>
          <h4>Front End Developer</h4>
          <div className="homebtn">
            <a id="one" href="#contact">
              Connect
            </a>
            <a
              id="two"
              href="/Abhinav_Resume.pdf"
              download="Abhinav_Resume"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </div>

        <div id="about_me">
          <div className="heading">
            <p>About Me</p>
            <EmojiPeopleIcon />
          </div>
          <div className="bdy">
            <div className="bdy1">
              <div id="img1">
                <img src={Image} alt="Italian Trulli" />
              </div>
            </div>
            <div className="bdy2">
              <div id="one">
                <div id="card1">
                  <a>
                    <WorkHistoryIcon />
                  </a>
                  <h4>Experience</h4>
                  <h6>2+ Years</h6>
                </div>
                <div id="card2">
                  <a>
                    <AssignmentIndIcon />
                  </a>
                  <h4>Projects</h4>
                  <h6>5+ Completed</h6>
                </div>
              </div>
              <div id="two">
                <p>
                  {" "}
                  Hello, I'm Abhinav Mishra, a passionate and dedicated <br />
                  Front-End Developer with an enthusiasm of learning new <br />
                  technology developments that are taking place in IT <br />
                  industry.As a working professional, I always believe in <br />
                  utilizing my industrial knowledge in building hands-on <br />
                  projects to strengthen my web development concepts.Having{" "}
                  <br />
                  good hold over Web Development foundations i.e. HTML, CSS{" "}
                  <br />
                  and Javascript, I thrive on building React based Responsive{" "}
                  <br />
                  Web Applications.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="skills">
          <div className="heading">
            <p>Know About My Skills</p>
            <WorkspacePremiumIcon />
          </div>
          <div className="bdy">
            <div className="item">
              <div className="topic">Front-End</div>
              <div className="points">
                <br />
                <br />
                HTML
                <br />
                CSS
                <br />
                Javascript
                <br />
                Redux
                <br />
                Reactjs
              </div>
            </div>

            <div className="item">
              <div className="topic">Back-End</div>
              <div className="points">
                <br />
                <br />
                Nodejs
                <br />
                MongoDB
                <br />
                Express
              </div>
            </div>

            <div className="item">
              <div className="topic">Version Controls</div>
              <div className="points">
                <br />
                <br />
                Git
                <br />
                GitHub
              </div>
            </div>
          </div>
        </div>

         {/*<div id="myprojects">
          <div className="heading">
            <p>My Projects</p>
            <EmojiPeopleIcon />
          </div>
          <div id="bdy">
            <div className="projectcard">first project</div>
            <div className="projectcard">second</div>
            <div className="projectcard">Third</div>
          </div>
        </div>*/}

        <div id="myprojects">
          <div className="heading">
          <h1 style={{position:"relative", top:"-300px",left:"-50px",fontSize:"2rem"}}>Project Section</h1>
          <h3 style={{position:"relative",left:"-50px",color:"goldenrod"}}>My Recent Work</h3><br/>
          <h1 style={{position:"relative",left:"-50px",fontSize:"2rem"}}>Projects</h1>
          <br/>
          <h2 style={{position:"relative",left:"-50px",color:"goldenrod"}}>To explore my projects visit my Github account.</h2>
          <br/>
          <br/>
          <SouthIcon style={{position:"relative",left:"-50px",color:"goldenrod"}}/>
          <br/>
          <a href="https://github.com/Abhinav2821998" style={{position:"relative",left:"-50px"}}><GitHubIcon style={{position:"relative",left:"-5px",color:"white"}}/></a>
          </div>
          <div className="bdy">
            <div className="projectCard">
              <img
                src={Business}
              />
              <p style={{ color: "white" }}>
                A dynamic website built for the ease of service-based company,
                providing a user-friendly environment to the clients that are
                interested to setup the business.Firebase and emailjs
                integration delivers real-time updates.
              </p>
              <h2 style={{ background: "goldenRod" }}>
                CSS| Javascript| Reactjs| Firebase | Bootstrap5 | Emailjs
              </h2>
              <div className="sites" style={{display:"flex",background:"rgb(27, 150, 109)",height:"10%",marginTop:"10px",paddingLeft:"10px"}}>
                <a href="https://github.com/Abhinav2821998/BusinessWebsite_Project" className="gh" style={{width:"15%",display:"flex",background:"goldenRod",borderRadius:"10px",justifyContent:"center",alignItems:"items",marginRight:"20px",textWrap:"Wrap"}}><button style={{background:"goldenRod",textWrap:"Wrap"}}>Github</button></a>
                <a href="https://easypayakm2821998.netlify.app/" className="wb" style={{width:"15%",display:"flex",background:"goldenRod",borderRadius:"10px",paddingLeft:"10px",justifyContent:"center",alignItems:"items",textWrap:"Wrap"}}><button style={{background:"goldenRod",textWrap:"Wrap"}}>Website</button></a>
              </div>
              
            </div>
            <div className="projectCard">
              <img
                src={Todo}
              />
              <p style={{ color: "white" }}>
                Now you can plan and manage your daily tasks using this app.
              </p>
              <h2 style={{ background: "goldenRod" }}>
                Reactjs| Webpack | Bootstrap5
              </h2>
              <div className="sites" style={{display:"flex",background:"rgb(27, 150, 109)",height:"10%",marginTop:"10px",paddingLeft:"10px"}}>
                <a href="https://github.com/Abhinav2821998/ToDo_App" className="gh" style={{width:"15%",display:"flex",background:"goldenRod",borderRadius:"10px",justifyContent:"center",alignItems:"items",marginRight:"20px"}}><button style={{background:"goldenRod"}}>Github</button></a>
                <a href="https://toapp123.netlify.app/" className="wb" style={{width:"15%",display:"flex",background:"goldenRod",borderRadius:"10px",paddingLeft:"10px",justifyContent:"center",alignItems:"items"}}><button style={{background:"goldenRod"}}>Website</button></a>
              </div>
            </div>
            <div className="projectCard">
              <img
                src={Dance}
              />
              <p style={{ color: "white" }}>
                Academy registration website built using HTML,CSS and
                Javascript. MongoDB supporting in the backend.{" "}
              </p>
              <h2 style={{ background: "goldenRod" }}>
                HTML |CSS| Javascript| MongoDB | Mongoose
              </h2>
              <div className="sites" style={{display:"flex",background:"rgb(27, 150, 109)",height:"10%",marginTop:"10px",paddingLeft:"10px"}}>
                <a href="https://github.com/Abhinav2821998/Dance-Website" className="gh" style={{width:"15%",display:"flex",background:"goldenRod",borderRadius:"10px",justifyContent:"center",alignItems:"items",marginRight:"20px"}}><button style={{background:"goldenRod"}}>Github</button></a>
                <a href="https://github.com/Abhinav2821998/Dance-Website" className="wb" style={{width:"15%",display:"flex",background:"goldenRod",borderRadius:"10px",paddingLeft:"10px",justifyContent:"center",alignItems:"items"}}><button style={{background:"goldenRod"}}>Website</button></a>
              </div>
            </div>
          </div>
        </div>

        <div id="coding">
          <div className="heading">
            <p>Coding Profiles </p>
            <CodeIcon />
          </div>
          <div className="bdy">
            <div className="one">
              <CheckCircleIcon />
              <p>
                {" "}
                Solved and Submitted over 250 questions on coding platforms.
              </p>
            </div>

            <br />

            <div className="two">
              <CheckCircleIcon />
              <p>
                {" "}
                Submissions include questions from each topic of data
                structures.
              </p>
            </div>

            <br />

            <div className="three">
              <CheckCircleIcon />
              <p>
                {" "}
                Quite adept in solving coding questions in languages i.e.Python,
                Java and C++.
              </p>
            </div>
            <br />

            <div className="four">
              <Tooltip id="leetcode" title="LeetCode-Profile : abhinavm347">
                <a href="https://leetcode.com/abhinavm347/" target="_blank">
                  <img src={Image1} alt="Hello" />
                </a>
              </Tooltip>

              <Tooltip
                id="geeksforgeeks"
                title="GeeksForGeeks-Profile : abhinavm347"
              >
                <a
                  href="https://auth.geeksforgeeks.org/user/abhinavm347/"
                  target="_blank"
                >
                  <img src={Image2} alt="Hello" />
                </a>
              </Tooltip>
            </div>
          </div>
        </div>

        <div id="contact">
          <div className="heading">
            <p style={{ marginRight: "2px" }}>Get In Touch </p>
            <ContactsIcon id="icon" />
          </div>
          <div className="bdy">
            <div className="bdy1">
              <div className="connect">
                <p>Lets Connect. </p>
                <LocalPhoneIcon id="logo" />
              </div>
              <div className="media">
                <Tooltip id="facebook" title="Facebook-Profile : abhinavm347">
                  <a
                    href="https://www.facebook.com/abhinav.mishra.5074644"
                    target="_blank"
                  >
                    <img
                      style={{ background: "goldenrod" }}
                      src={Image3}
                      width="48px"
                      height="48px"
                      alt="Hello"
                    />
                  </a>
                </Tooltip>

                <Tooltip id="instagram" title="Instagram-Profile : im_ak28">
                  <a href="https://www.instagram.com/im_ak28/" target="_blank">
                    <img
                      style={{ background: "goldenrod" }}
                      src={Image4}
                      width="48px"
                      height="48px"
                      alt="Hello"
                    />
                  </a>
                </Tooltip>

                <Tooltip
                  id="gmail"
                  title="Gmail-Profile : abhinavm347@gmail.com"
                >
                  <a
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                    target="_blank"
                  >
                    <img
                      style={{ background: "goldenrod" }}
                      src={Image5}
                      width="48px"
                      height="48px"
                      alt="Hello"
                    />
                  </a>
                </Tooltip>
              </div>
            </div>
            <div className="bdy2">
              <form
                ref={form}
                onSubmit={sendEmail}
                style={{ background: "gold", width: "70%" }}
              >
                <label style={{ background: "gold", color: "black" }}>
                  Enter your Name{" "}
                </label>
                <input
                  id="nm"
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  style={{
                    background: "white",
                    display: "block",
                    width: "70%",
                  }}
                />
                <br />

                <label style={{ background: "gold", color: "black" }}>
                  Enter your Email{" "}
                </label>
                <input
                  id="em"
                  type="email"
                  placeholder="Email"
                  name="from_email"
                  style={{
                    background: "white",
                    display: "block",
                    width: "70%",
                  }}
                />
                <br />

                <label style={{ background: "gold", color: "black" }}>
                  Enter your Message{" "}
                </label>
                <textarea
                  id="msg"
                  name="message"
                  placeholder="Message"
                  style={{
                    background: "white",
                    display: "block",
                    width: "70%",
                  }}
                />
                <br />
                <button
                  id="sbmt"
                  type="submit"
                  style={{
                    background: "white",
                    width: "20%",
                    height: "20%",
                    borderRadius: "4px",
                  }}
                >
                  {" "}
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <nav id="navbar">
          <ul>
            <li className="item">
              <a href="#home">
                <HomeIcon id="icon" style={{ width: "25px", height: "25px" }} />
              </a>
            </li>
            <li className="item">
              <a href="#about_me">
                <EmojiPeopleIcon
                  id="icon"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
            </li>
            <li className="item">
              {" "}
              <a href="#skills">
                <WorkspacePremiumIcon
                  id="icon"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
            </li>
            <li className="item">
              <a href="#myprojects">
                <TaskIcon
                  id="icon"
                  style={{ width: "25px", height: "25px" }}
                />
              </a>
            </li>
            <li className="item">
              <a href="#coding">
                <CodeIcon id="icon" style={{ width: "25px", height: "25px" }} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default App;
