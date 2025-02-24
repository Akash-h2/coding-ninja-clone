
import HeroSection from "./components/HeroSection";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import Navbar from "./components/navbar";
import ExperienceSection from "./components/ExperienceSection";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <Courses />
      <ExperienceSection/>
      <Footer />
    </div>
  );
}

export default App;
