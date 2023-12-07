import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";

export const ToggleMenu = ({ isOpen, toggle }) => {
  return (
    <aside
      isOpen={isOpen}
      onClick={toggle}
      className="toggle-menu-container"
      style={
        isOpen ? { opacity: "100%", top: 0 } : { opacity: "0%", top: "-100%" }
      }
    >
      <div onClick={toggle} className="close-icon">
        <FaTimes style={{ color: "#fff" }} />
      </div>
      <div className="toggle-menu-wrapper">
        <ul className="toggle-menu">
          <LinkS to="home" onClick={toggle} className="toggle-menu-link">
            Home
          </LinkS>
          <LinkS to="skills" onClick={toggle} className="toggle-menu-link">
            Skills
          </LinkS>
          <LinkS to="projects" onClick={toggle} className="toggle-menu-link">
            projects
          </LinkS>
          <LinkS to="contact" onClick={toggle} className="toggle-menu-link">
            Let's Connect
          </LinkS>
        </ul>
      </div>
    </aside>
  );
};
