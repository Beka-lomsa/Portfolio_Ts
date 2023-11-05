import "./Resume.css";
import cvImg from "../../img/7beka.jpg";
import { TfiLocationPin } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { BsPhoneVibrate } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";

function Resume() {
  return (
    <div className="resume_Container">
      <div className="connection_container">
        <div className="left_part">
          <header className="cv_header">
            <img className="cvImg" src={cvImg} alt="cvImg" />
            <div className="persInfo">
              <h1>Beka Lomsadze</h1>
              <h3>Junior Front-End Developer</h3>
              <article>
                As a Junior React Developer, I specialize in creating
                interactive and user-centric web experiences. My expertise lies
                in React, JavaScript, TypeScript, HTML, and CSS. I'm passionate
                about crafting innovative solutions and am dedicated to
                excellence. Let's connect and create something extraordinary
                together.
              </article>
            </div>
          </header>
          <section className="contact_Info">
            <div className="leftPart_contact">
              <p>
                <TfiLocationPin className="cont_icons" /> Georgia, Tbilisi
              </p>
              <p>
                <SlSocialLinkedin className="cont_icons" />
                <a href="https://www.linkedin.com/in/beka-beka-7aa4b2256/">
                  https://www.linkedin.com/in/beka-beka-7aa4b2256/
                </a>
              </p>
              <p>
                <FiGithub className="cont_icons" />
                <a href="https://github.com/Beka-lomsa">
                  https://github.com/Beka-lomsa
                </a>
              </p>
            </div>
            <div className="rightPart_contact">
              <p>
                <BsPhoneVibrate className="cont_icons" />
                +995 591 05 74 85
              </p>
              <p>
                <RiMailSendLine className="cont_icons" />
                beqa.lomsadze3@gmail.com
              </p>
              <p>
                <CiFacebook className="cont_icons" />
                <a href="https://www.facebook.com/">
                  https://www.facebook.com/
                </a>
              </p>
            </div>
          </section>
          <section className="skills_container">
            <h2>Skills</h2>
            <div className="list_ofSkills">
              <p>React</p>
              <p>HTML</p>
              <p>VS Code</p>
              <p>TypeScript</p>
              <p>CSS</p>
              <p>Git</p>
              <p>JavaScript</p>
              <p>Figma</p>
            </div>
          </section>
          <section className="experience_container">
            <h2>Experience</h2>
            <h4>Independent React Developer 2022-Jun - Present</h4>
            <p>
              Actively engaged in self-initiated React and TypeScript
              development projects to enhance expertise and proficiency. Created
              a diverse portfolio of projects, including:
            </p>
            <div className="list_experience">
              <ul>
                <li>
                  <strong>RealTime App:</strong> Designed and built a real-time
                  application with features like live chat and data
                  synchronization
                </li>
                <li>
                  <strong>To-Do List:</strong> Created a task management
                  application with features for adding, editing, and tracking
                  tasks.
                </li>
                <li>
                  <strong>Accordion:</strong>Implemented an interactive
                  accordion component for dynamic content display.
                </li>
                <li>
                  <strong>Rate Card:</strong> Designed a rate card application
                  to estimate project costs and pricing.
                </li>
                <li>
                  <strong>Rate Card:</strong> Designed a rate card application
                  to estimate project costs and pricing.
                </li>
                <li>
                  <strong>Menu List:</strong>
                  Developed an interactive menu list using vanilla JavaScript,
                  HTML, and CSS for displaying food items.
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="border"></div>
        <section className="courses_Info">
          <div className="courses_container">
            <h2>Courses</h2>
            <ul>
              <li><strong>rs:school</strong> - React educational course participant.</li>
              <li><strong>Udemy:</strong>React and JavaScript Courses.</li>
              <li><strong>BitCamp</strong> - Georgia: React Courses.</li>
              <li><strong>Academy of Digital Industries:</strong> HTML, CSS, JavaScript.</li>
              <li><strong>FreeCodeCamp:</strong> HTML, CSS, JavaScript.</li>
            </ul>
          </div>
          <div className="language_container">
            <h2>languages</h2>
            <ul>
              <li>Georgian (native)</li>
              <li>English (B2+)</li>
              <li>Russian (B1)</li>
            </ul>
          </div>
          <div className="education_container">
            <h2>Education</h2>
            <p>Georgian Technical University: Civil Engineering Bachelor’s degree – <strong>With Honors</strong>.</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;
