import "./HomeSection.css";
import { BsRocketTakeoff, BsLightbulbFill } from "react-icons/bs";
import { GiStarSkull } from "react-icons/gi";
import Beka from "../../img/7beka.jpg";
import { GiHand } from "react-icons/gi";
import CV from "../../Fils/Beka-CV.pdf";



function HomeSection() {
  const openPdfForReview: () => void = () => {
    window.open(`${CV}`, '_blank');
  };

  return (
    <div className="homeCon_background">
      <div className="homeSection_Container">
        <div className="myReview myReview1024">
          <div className="name">
            <GiHand className="handIcon" />
            <div>
              Hello! I Am
              <span>Beka Lomsadze,</span> a junior web developer with a flair for
              creating digital wonders.
            </div>
          </div>
          <p className="listOfReview">
            <BsRocketTakeoff className="rocketIcon" /> My exploration of web
            development began with HTML, CSS, and JavaScript, and now I'm on a
            journey to master React and TypeScript
          </p>
          <p className="listOfReview">
            <GiStarSkull className="starIcon" /> I thrive on turning ideas into
            reality through clean and elegant code. From user-friendly interfaces
            to interactive web apps, I'm driven by a commitment to excellence.
          </p>
          <p className="listOfReview">
            <BsLightbulbFill className="literIcon" /> Let's create something
            extraordinary together. Feel free to explore my portfolio, and let's
            connect!
          </p>
          <div className="btnContainer">
            <div className="downloadBtn">
              <a 
                href={CV}
                download
                target="_blank"
                >
                Download <span>CV</span>
              </a>
            </div>
            <button type="button" className="projBtn" onClick={() => openPdfForReview()}>
              Review
              <span>CV</span>
            </button>
          </div>
        </div>
        <div className="img_container noImg">
          <img src={Beka} alt="Prof/Img" />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
