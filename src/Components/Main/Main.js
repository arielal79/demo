import "./Main.css";
/*import portrait from "../../images/4x4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3 } from "@fortawesome/free-brands-svg-icons";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";*/

const Main = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="info">
          <div className="image">
            <div className="image-container"></div>
          </div>
          <div className="text">
            <h2>Acerca de mi</h2>
            <section>
              Mi nombre es Ariel, tengo 41 años, Aficionado a la tecnología, la
              cual considero que no solo es un medio para concretar ideas, es
              una pasión.
            </section>
          </div>
        </div>

        <h2 className="stack">Stack Tecnológico</h2>

        <div className="skills">
          <div className="skill">
            <div className="icon-container"></div>
            <span className="number">95%</span>
            <div className="bar">
              <span className="complete progress1"></span>
            </div>
          </div>

          <div className="skill">
            <div className="icon-container"></div>
            <span className="number">90%</span>
            <div className="bar">
              <span className="complete progress2"></span>
            </div>
          </div>

          <div className="skill">
            <div className="icon-container"></div>
            <span className="number">70%</span>
            <div className="bar">
              <span className="complete progress3"></span>
            </div>
          </div>

          <div className="skill">
            <div className="icon-container"></div>
            <span className="number">50%</span>
            <div className="bar">
              <span className="complete progress4"></span>
            </div>
          </div>

          <div className="skill">
            <div className="icon-container"></div>
            <span className="number">5%</span>
            <div className="bar">
              <span className="complete progress5"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
