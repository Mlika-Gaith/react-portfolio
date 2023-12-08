import React from "react";
import { Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import PlanetOne from "../assets/img/planet1.png";
import PlanetTwo from "../assets/img/planet2.png";
import PlanetThree from "../assets/img/planet3.png";
import PlanetFour from "../assets/img/planet4.png";
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

  return (
    <section className="banner" id="home">
      <Container>
        <div className="banner-container">
          <div className="column-left">
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
          </div>

          <div className="column-right">
            <motion.img
              src={PlanetOne}
              alt="Planet One"
              className="planet-img"
              id="planetOne"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 100, right: 150, top: 0, bottom: 250 }}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              style={{ rotate }}
            />
            <motion.img
              src={PlanetTwo}
              alt="Planet Two"
              className="planet-img"
              id="planetTwo"
              whileTap={{ scale: 0.7 }}
              drag={true}
              dragConstraints={{ left: 10, right: 50, top: 90, bottom: 150 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
              style={{ rotate }}
            />
            <motion.img
              src={PlanetThree}
              alt="Planet Three"
              className="planet-img"
              id="planetThree"
              whileTap={{ scale: 0.8 }}
              drag={true}
              dragConstraints={{ left: 40, right: 250, top: 80, bottom: 150 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
              style={{ rotate }}
            />
            <motion.img
              src={PlanetFour}
              alt="Planet Four"
              className="planet-img"
              id="planetFour"
              whileTap={{ scale: 0.9 }}
              drag={true}
              dragConstraints={{ left: 10, right: 10, top: 0, bottom: 0 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
              style={{ rotate }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
