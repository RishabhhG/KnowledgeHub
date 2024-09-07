import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChalkboardTeacher, FaLaptopCode, FaUserFriends } from "react-icons/fa";
import Footer from "../components/common/Footer";
import CTAButton from "../components/core/HomePage/Button";
import TestimonialCard from "../components/core/HomePage/TestimonialCard";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/matrix-style-binary-code-digital-falling-numbers-blue-background_1017-37387.jpg?t=st=1725683056~exp=1725686656~hmac=6098a278ba20a6554b406fdfa7e796fa2a106386976811bad827f638c19812ea&w=996)' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6">Empower Your Future with <span className="text-blue-400">Coding Skills</span></h1>
          <p className="text-2xl mb-8">Join our platform and unlock the world of programming with hands-on projects and expert guidance.</p>
          <CTAButton linkto="/signup" active>Get Started</CTAButton>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Why Choose Us?</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaChalkboardTeacher className="text-4xl text-blue-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry experts with years of experience in coding.</p>
            </div>
            <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaLaptopCode className="text-4xl text-blue-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Hands-on Learning</h3>
              <p className="text-gray-600">Engage with interactive lessons and real-world projects.</p>
            </div>
            <div className="max-w-sm bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <FaUserFriends className="text-4xl text-blue-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-600">Join a community of learners and get support from mentors.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Students Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <TestimonialCard
              profilePic="https://via.placeholder.com/150"
              name="John Doe"
              feedback="This platform transformed my career. The projects and support were top-notch."
            />
            <TestimonialCard
              profilePic="https://via.placeholder.com/150"
              name="Jane Smith"
              feedback="I loved the hands-on approach and real-world examples. Highly recommend!"
            />
          </div>
        </div>
      </div>

      {/* Become an Instructor Section */}
      <div className="relative py-16 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Share Your Knowledge</h2>
          <p className="text-lg text-gray-300 mb-8">Join our team of instructors and help students around the world achieve their goals.</p>
          <Link to="/signup">
            <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-500 hover:bg-blue-600 transition duration-300">
              Become an Instructor <FaArrowRight className="ml-2" />
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;