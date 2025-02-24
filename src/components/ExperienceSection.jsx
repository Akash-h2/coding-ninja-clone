import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaChevronUp, FaArrowDown } from "react-icons/fa";
import { MdOutlineWorkspacePremium, MdOutlineSchool, MdPeopleAlt } from "react-icons/md";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import uber from "../assets/uber.png";
import citibank from "../assets/citibank.png";
import amazon from "../assets/amazon.png";
import paypal from "../assets/paypal.png";

// People images
import personGoogle from "../assets/person-google.png";
import personAmazon from "../assets/person-amazon.png";
import personMicrosoft from "../assets/person-microsoft.png";
import personUber from "../assets/person-uber.png";
import personCitibank from "../assets/person-citibank.png";
import personPaypal from "../assets/person-paypal.png";

const companyLogos = [
  { name: "Google", logo: google, person: personGoogle },
  { name: "Amazon", logo: amazon, person: personAmazon },
  { name: "Microsoft", logo: microsoft, person: personMicrosoft },
  { name: "Uber", logo: uber, person: personUber },
  { name: "Citibank", logo: citibank, person: personCitibank },
  { name: "PayPal", logo: paypal, person: personPaypal },
];

const ExperienceSection = () => {
  return (
    <>
      {/* Main Experience Section */}
      <section className="h-auto min-h-[80vh] bg-black flex flex-col justify-center items-center text-center px-4 py-12">
        <motion.h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          9 Years of Transforming Tech Careers
        </motion.h2>

        {[
          "1.5 Lac+ Learners Cracked Dream Roles at Top Tech Companies",
          "1,400 Alumni in MAANG",
          "128% Average Hike via Our Placement Cell",
        ].map((text, index) => (
          <div key={index} className="flex flex-col items-center mb-6">
            <FaArrowDown className="text-gray-400 text-3xl md:text-4xl mb-4" />
            <motion.h3 className="text-lg md:text-2xl text-gray-300">
              {text}
            </motion.h3>
          </div>
        ))}

        <Link
          to="courses"
          smooth={true}
          duration={1000}
          className="mt-8 px-6 py-3 bg-orange-500 text-white rounded-lg text-lg font-semibold cursor-pointer hover:bg-orange-600 transition flex items-center gap-2"
        >
          Explore Offerings <FaChevronUp />
        </Link>
      </section>

      {/* Why Choose Us Section */}
      <div className="bg-gray-900 text-white py-16 w-full text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-10">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
          {[
            { icon: <MdOutlineWorkspacePremium />, title: "Industry Experts", text: "Learn from top instructors with real-world experience." },
            { icon: <MdOutlineSchool />, title: "Practical Learning", text: "Get hands-on experience with projects and real-time case studies." },
            { icon: <MdPeopleAlt />, title: "Strong Community", text: "Join a network of 100K+ learners and alumni worldwide." },
          ].map((item, index) => (
            <motion.div key={index} className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center">
              <div className="text-orange-500 text-5xl md:text-7xl mb-4">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-300 text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Ninjas at Top Companies */}
      <div className="bg-white text-black py-16 w-full text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-wide mb-8">
          Our Ninjas at Top Companies
        </h1>

        {/* Horizontal Scrolling Animation */}
        <div className="relative overflow-hidden w-full">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {/* Duplicate to create infinite scrolling effect */}
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <div key={index} className="flex flex-col items-center w-32 md:w-40 mx-6">
                {/* Company Logo */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 md:h-20 w-auto object-contain"
                />
                {/* Person Image (Circular) */}
                <img
                  src={company.person}
                  alt={`${company.name} Employee`}
                  className="h-16 md:h-24 w-16 md:w-24 rounded-full border-2 border-gray-300 mt-3 object-cover"
                />
                <p className="mt-2 text-sm md:text-lg font-semibold">{company.name}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
