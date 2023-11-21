import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MailChimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailChimpForm />
          <Col sm={6}>
            <img src={logo} alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="navigation" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="navigation" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="navigation" />
              </a>
            </div>
            <p>CopyRight {currentYear}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
