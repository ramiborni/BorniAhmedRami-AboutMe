import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import SocialMedia from "./components/SocialMedia";
import Technologies from "./components/Technologies";

function App() {
  return (
    <>
      <div className="p-8">
        <Navbar />
        <Landing />
        <Technologies />
        <Services />
        <Projects />
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
}

export default App;
