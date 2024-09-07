import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import StoryImage from "../assets/Images/FoundingStory.png";
import Image1 from "../assets/Images/aboutus1.webp";
import Image2 from "../assets/Images/aboutus2.webp";
import Image3 from "../assets/Images/aboutus3.webp";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponent from "../components/core/AboutPage/Stats";
import HighlightText from "../components/core/HomePage/HighlightText";
import ReviewSlider from "../components/common/ReviewSlider";
import Footer from "../components/common/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, easing: 'ease-in-out' });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-t from-blue-600 via-purple-700 to-pink-500 text-white py-24">
        <div className="container mx-auto flex flex-col items-center text-center gap-10">
          <h1 className="text-5xl font-bold leading-tight" data-aos="fade-down">
            Empowering Education for a 
            <HighlightText text={"Brilliant Future"} />
          </h1>
          <p className="text-lg lg:w-2/3" data-aos="fade-up" data-aos-delay="200">
            Welcome to EduSpark! We're committed to transforming online education into an exciting, interactive experience where learning is fun, engaging, and accessible to everyone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            <img data-aos="fade-right" src={Image1} alt="Inspiration" className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500" />
            <img data-aos="fade-up" src={Image2} alt="Collaboration" className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500" />
            <img data-aos="fade-left" src={Image3} alt="Innovation" className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500" />
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <Quote />
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2" data-aos="fade-right">
            <img src={StoryImage} alt="Our Story" className="rounded-lg shadow-2xl hover:scale-105 transition-all duration-500" />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-8" data-aos="fade-left">
            <h2 className="text-4xl font-extrabold text-gradient-to-r from-green-400 to-blue-500">
              The Journey of EduSpark
            </h2>
            <p className="text-gray-700">
              EduSpark was born from the belief that education should be more than just textbooks and exams. We wanted to create a platform that inspires learners to explore, innovate, and collaborate, breaking the traditional barriers of education.
            </p>
            <p className="text-gray-700">
              Our journey began with a small team of educators and technologists who were passionate about creating flexible, quality-driven education. Today, EduSpark serves thousands of learners worldwide, empowering them to achieve their dreams.
            </p>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1" data-aos="fade-up">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-500">
              Our Vision
            </h2>
            <p className="mt-4 text-lg">
              We envision a future where education transcends boundaries. A world where learners from every corner of the globe can access high-quality, engaging learning experiences that spark curiosity and ignite potential.
            </p>
          </div>

          <div className="flex-1" data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-500">
              Our Mission
            </h2>
            <p className="mt-4 text-lg">
              Our mission is to provide a dynamic learning platform that promotes collaboration, creativity, and critical thinking. By blending technology with human connection, we aim to cultivate a vibrant learning community.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <StatsComponent />
        </div>
      </section>

      {/* Learning Resources & Contact Form */}
      <section className="bg-gradient-to-t from-blue-500 via-purple-600 to-pink-500 py-20 text-white">
        <div className="container mx-auto">
          <LearningGrid />
          <ContactFormSection />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            What Our Learners Say
          </h2>
          <ReviewSlider />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
