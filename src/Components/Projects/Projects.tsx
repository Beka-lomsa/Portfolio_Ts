import "./Projects.css";
import equi from "../img/calculator.png";
import calcul from "../img/calculator.png";
import todo from "../img/calculator.png";
import cards from "../img/calculator.png";
import realTime from "../img/calculator.png";
import devDark from "../img/calculator.png";
import rate from "../img/calculator.png";
import faq from "../img/calculator.png";
import { TbWorldCode } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";


function Projects(){
  return(
    <div className="proCont_background">
      <div className="project_Container">
        <div className="Cards">
          <img src={realTime} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
        <div className="Cards">
          <img src={devDark} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
        <div className="Cards">
          <img src={cards} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
        <div className="Cards">
          <img src={todo} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
        <div className="Cards">
          <img src={calcul} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
        <div className="Cards">
          <img src={rate} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
        <div className="Cards">
          <img src={faq} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
        <div className="Cards">
          <img src={equi} alt="" />
          <div className="all_Btn">
            <a className="web_link" href="#">
              <button type="button" className="web"><TbWorldCode className="commIcons"/>WebSite</button>
            </a>
            <a className="code_link" href="#">
              <button type="button" className="code_git"><BsGithub className="commIcons"/>Code</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Projects
