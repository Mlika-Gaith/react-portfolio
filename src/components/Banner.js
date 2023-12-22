import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Planet from "../assets/img/planet.png";
import { motion, useTime, useTransform } from "framer-motion";

export const Banner = () => {
  // for animations
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 10000], // For every 4 seconds...
    [0, 180], // ...rotate 360deg
    { clamp: false }
  );

  console.log(window.screen.width)

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.span
              className="tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4 }}
            >
              Welcome to my Portfolio
            </motion.span>
            <motion.h1
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5 }}
            >
              Hi I'm Ghaith <span className="wrap"></span>
              <motion.p>
                Hi there! I'm a Polytechnique School graduate and a passionate
                software engineer specializing in web development; Combining
                rigorous education with hands-on experience. Let's build
                something extraordinary together.
              </motion.p>
              <button onClick={() => console.log("connect")}>
                Let's connect <ArrowRightCircle size={25} />
              </button>
            </motion.h1>
          </Col>

          <Col xs={12} md={6} xl={5} style={{overflow:"hidden"}}>
            <motion.img
              src={Planet}
              alt="Planet One"
              className="planet-img"
              id="planetOne"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 10, right: 10, top: 0, bottom: 10 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              style={{ rotate }}
              o
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
