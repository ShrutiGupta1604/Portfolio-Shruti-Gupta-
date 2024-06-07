import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 
import Experiences from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences/>
      <Contact />
      <Footer />
       
    </div>
  );
}

export default App;
