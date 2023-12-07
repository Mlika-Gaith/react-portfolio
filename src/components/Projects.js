import React from "react";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.jpg";
import projImg7 from "../assets/img/project7.png";
import projImg8 from "../assets/img/project8.png";
import projImg9 from "../assets/img/project9.png";
import projImg10 from "../assets/img/project10.jpg";
import projImg11 from "../assets/img/project11.png";
import projImg12 from "../assets/img/project12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { Col, Row, Container, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "WaveLink Networks",
      description: "Amplify your Reach",
      imgUrl: projImg1,
    },
    {
      title: "TechLaunch Hub",
      description: "Streamlining Solutions",
      imgUrl: projImg2,
    },
    {
      title: "StartCraft Pro",
      description: "Elevate your Business",
      imgUrl: projImg3,
    },
    {
      title: "LaunchPad Dynamics",
      description: "Navigating the Realms",
      imgUrl: projImg4,
    },
    {
      title: "Pinnacle Startups",
      description: "Unleashing the Potential",
      imgUrl: projImg5,
    },
    {
      title: "Wilderness Wonders",
      description: "Embark on a Journey",
      imgUrl: projImg6,
    },
    {
      title: "IgniteBiz",
      description: "Startup Success",
      imgUrl: projImg7,
    },
    {
      title: "Apex Launch Labs",
      description: "Design & Development",
      imgUrl: projImg8,
    },
    {
      title: "SparkCraft Innovations",
      description: "Agile Development",
      imgUrl: projImg9,
    },
    {
      title: "Nova Nexus",
      description: "Unearth the Possibilities",
      imgUrl: projImg10,
    },
    {
      title: "Genesis Ventures",
      description: " From Concept to Reality ",
      imgUrl: projImg11,
    },
    {
      title: "VentureForge",
      description: "Crafting Success",
      imgUrl: projImg12,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Explore my recent projects.</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="/home"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      if (4 <= index && index < 10) {
                        return <ProjectCard key={index} {...project} />;
                      }
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      if (index <= 5) {
                        return <ProjectCard key={index} {...project} />;
                      }
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projects.map((project, index) => {
                      if (index > 5) {
                        return <ProjectCard key={index} {...project} />;
                      }
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
