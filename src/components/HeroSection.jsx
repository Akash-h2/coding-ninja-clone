import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa"; // Dropdown Icon
import codingNinjaVideo from "../assets/codingninja.mp4";

const HeroSection = () => {
  return (
    <section className="h-250 bg-black flex flex-col justify-center items-center text-center px-4">
      <h2 className="text-blue-500 text-2xl font-bold">
        Restricted by <span className="text-purple-400">opportunities?</span>
      </h2>
      <h1 className="text-white text-5xl font-extrabold mt-4">
        Get the tech career you deserve. Faster.
      </h1>
      <p className="text-gray-300 text-lg mt-4">
        Structured coding courses that get you there faster with confidence.
      </p>

      {/* Button that slides down to the Courses Section */}
      <Link
        to="courses"
        smooth={true}
        duration={1000}
        className="mt-6 px-6 py-3 text-white bg-orange-500 rounded-lg text-lg font-semibold flex items-center gap-2 hover:bg-orange-600 cursor-pointer"
      >
        Explore Offerings <FaChevronDown />
      </Link>
 {/* Video Section */}
 <div className="mt-10 w-full  rounded-2xl max-w-4xl">
        <video
          className="w-full rounded-lg shadow-lg"
          autoPlay
          loop
          muted
          controls
        >
          <source src={codingNinjaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="/hero-bg.jpg" // Place this image in the 'public' folder
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  );
};

export default HeroSection;