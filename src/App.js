import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { ToggleMenu } from "./components/ToggleMenu";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <ToggleMenu isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
