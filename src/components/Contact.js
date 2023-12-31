import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export const Contact = () => {
  const form = useRef();
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending ...");
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus({ success: true, message: "Message sent successfully" });
        },
        (error) => {
          console.log(error.text);
          setStatus({
            success: false,
            message: "Something went wrong, please try again later",
          });
        }
      );
    setButtonText("Send");
    setFormDetails(formInitialDetails);
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.img
              src={contactImg}
              alt="contact us"
              whileTap={{ scale: 1.5 }}
              animate={{
                y: [0, -20, 0],
                scaleY: [1, 0.9, 1],
                scaleX: [1, 1.08, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              drag={true}
              dragConstraints={{ left: 100, right: 250, top: 0, bottom: 50 }}
            />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit} ref={form}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    name="email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    name="phone"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    required
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    name="message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col sm={10}>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                      style={{ marginTop: 25 }}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
