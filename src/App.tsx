import 'react'; 
import { useState } from "react";
import { PiFingerprintFill } from "react-icons/pi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaReact, FaTwitter, FaInstagram } from "react-icons/fa";
import HomeSection from "./Components/Home/HomeSection";
import About from "./Components/About/About"
import Projects from "./Components/Projects/Projects";
import Resume from "./Components/Resume/Resume";
import "./App.css";

function App() {
  const [selectedInfo, setSelectedInfo] = useState<string>("Home");

  const handleMenuItemClick = (item: string): void => {
    setSelectedInfo(item);
  };

  // Alert
  const [alert, setAlert] = useState<boolean>(false);

  const handleMouseEnter = ():void => {
    setAlert(true);
  };

  const handleMouseLeave = ():void => {
    setAlert(false);
  };

  return (
    <div className="main_container">
      <header className="project_header">
        <div className="hd_left">
          <PiFingerprintFill
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="print_icons"
          />
          <div
            onClick={() => handleMenuItemClick("Home")}
            className={selectedInfo === "Home" ? "active" : "hovActive"}
          >
            Home
          </div>
        </div>
        <div className="navigationBar">
          <div
            onClick={() => handleMenuItemClick("About")}
            className={selectedInfo === "About" ? "active" : "hovActive"}
          >
            About Me
          </div>
          <div
            onClick={() => handleMenuItemClick("Projects")}
            className={selectedInfo === "Projects" ? "active" : "hovActive"}
          >
            Projects
          </div>
          <div
            onClick={() => handleMenuItemClick("Resume")}
            className={selectedInfo === "Resume" ? "active" : "hovActive"}
          >
            Resume
          </div>
        </div>
        <div className="hd_right">
          <a
            title="GitHub"
            rel="noopener"
            target="_blank"
            href="https://github.com/Beka-lomsa"
          >
            <BsGithub className="git" />
          </a>
          <a
            title="LinkedIn"
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/beka-lomsadze-7aa4b2256/"
          >
            <BsLinkedin className="linkd" />
          </a>
        </div>
      </header>
      <p className={`accdntical_Alart ${alert ? "accdntical_Alart" : "hidden_Alart"}`}>
        "B.L's Portfolio..."
      </p>
      {selectedInfo === "Home" && <HomeSection />}
      {selectedInfo === "About" && <About />}
      {selectedInfo === "Projects" && <Projects />}
      {selectedInfo === "Resume" && <Resume />}

      <footer className="footer_container">
        <div className="logos_container">
          <div className="logo">
            <FaReact className="reactIcon" size={40} />
          </div>
          <div className="social-icons">
            <a
              rel="noopener"
              title="Twitter"
              href="https://twitter.com/beqa021996"
              target="_blank"
            >
              <FaTwitter className="twitIcon" size={30} />
            </a>
            <a
              rel="noopener"
              title="Instagram"
              href="https://instagram.com/lomsazebeka?igshid=OGQ5ZDc2ODk2ZA=="
              target="_blank"
            >
              <FaInstagram className="instIcon" size={30} />
            </a>
          </div>
        </div>
        <div className="legal-info">
          <div>&copy; 2023 Portfolio</div>
          <div className='pricacyLegend'>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-use">Terms of Use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
