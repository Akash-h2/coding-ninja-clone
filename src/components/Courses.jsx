/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import course1 from "../assets/course1.svg";
import course2 from "../assets/course2.png";

const courses = [
  {
    title: "Full Stack Development",
    description: "Become a full-stack developer with structured guidance.",
    image: course1,
  },
  {
    title: "Data Structures & Algorithms",
    description: "Master DSA and ace coding interviews with confidence.",
    image: course2,
  },
];

const CourseSection = () => {
  return (
    <section id="courses" className="py-12 sm:py-16 bg-gray-100">
      {/* Heading */}
      <div className="text-center px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-300">
          OUR OFFERINGS
        </h1>
      </div>

      {/* Courses Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 2xl:ml-65">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className="bg-white p-5 sm:p-6 rounded-lg shadow-md sm:shadow-lg text-center transform hover:scale-105 transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              className="w-32 sm:w-40 mx-auto mb-4"
              src={course.image}
              alt={course.title}
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-3 sm:mt-4">
              {course.title}
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              {course.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseSection;
