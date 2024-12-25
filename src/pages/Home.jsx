/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaPython, FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaAws, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiFastapi, SiFlask, SiSelenium, SiScrapy, SiPostgresql, SiTypescript, SiGooglecloud, SiGitlab, SiGo, SiAzuredevops } from 'react-icons/si';
import Hello from '../assets/static/avatar1.svg';
import fullstackIllustration from '../assets/static/fullstack.svg';
import learningIllustration from '../assets/static/learning.svg';
import cloudIllustration from '../assets/static/cloudcomputing.svg';

const Home = () => {
  const [introVisible, setIntroVisible] = useState(false);
  const [expertiseVisible, setExpertiseVisible] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);
  const [cloudVisible, setCloudVisible] = useState(false);

  return (
    <div className="bg-base-100 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Intro Section */}
        <ScrollTrigger onEnter={() => setIntroVisible(true)} onExit={() => setIntroVisible(false)}>
          <section className={`hero py-16 transition-opacity duration-1000 ${introVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={Hello} className="max-w-sm w-full lg:w-1/2 rounded-lg shadow-2xl" alt="Personal avatar" />
              <div className="lg:w-1/2">
                <h1 className="text-5xl font-bold">Kalyan Kanuri</h1>
                <p className="py-6 text-xl">
                  Passionate Full Stack Developer with a knack for creating innovative solutions. 
                  Blending creativity with technical expertise to build scalable and efficient web applications. 
                  Always eager to learn and apply cutting-edge technologies to solve complex problems.
                </p>
                <div className="flex space-x-4 text-4xl">
                  <a href="https://www.linkedin.com/in/kalyan-kanuri-12224a220/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/KalyanKanuri" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                    <FaGithub />
                  </a>
                  <a href="https://www.instagram.com/__kalyan.k_/#" className="text-pink-500 hover:text-pink-700 transition-colors duration-300">
                    <FaInstagram />
                  </a>
                  <a href="mailto:kalyankanuri497@gmail.com" className="text-red-500 hover:text-red-700 transition-colors duration-300">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* What I Do Section */}
        <ScrollTrigger onEnter={() => setExpertiseVisible(true)} onExit={() => setExpertiseVisible(false)}>
          <section className={`py-16 transition-all duration-1000 ${expertiseVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-8">Expertise</h2>
            
            <div className="flex flex-wrap justify-center items-center text-4xl mb-8 space-x-4">
              <SiGo className="text-blue-600 text-6xl" />
              <FaPython className="text-blue-500" />
              <SiFastapi className="text-teal-500" />
              <SiFlask className="text-gray-500" />
              <SiSelenium className="text-yellow-500" />
              <SiScrapy className="text-green-500" />
              <FaHtml5 className="text-orange-500" />
              <FaCss3Alt className="text-blue-400" />
              <FaJs className="text-yellow-400" />
              <SiTypescript className="text-blue-600" />
              <FaReact className="text-blue-300" />
              <SiPostgresql className="text-blue-600" />
              <FaDatabase className="text-gray-500" />
              <FaDocker className="text-blue-400" />
              <FaAws className="text-orange-400" />
              <SiGooglecloud className="text-blue-500" />
              <SiAzuredevops className="text-blue-500" />
              <FaGithub className="text-black" />
              <FaGitAlt className="text-orange-600" />
              <SiGitlab className="text-orange-500" />
            </div>
            
            <ScrollTrigger onEnter={() => setCardVisible(true)} onExit={() => setCardVisible(false)}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${cardVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="card bg-base-200 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={fullstackIllustration} alt="Full Stack Development" className="rounded-xl w-2/3" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h3 className="card-title text-2xl mb-4">Full Stack Development</h3>
                    <ul className="list-disc text-left">
                      <li>Developing scalable and efficient web applications</li>
                      <li>Creating RESTful APIs and microservices</li>
                      <li>Implementing responsive and interactive user interfaces</li>
                      <li>Optimizing database performance and queries</li>
                      <li>Version control and collaboration using Git and GitHub</li>
                    </ul>
                  </div>
                </div>

                <div className="card bg-base-200 shadow-xl">
                  <figure className="px-10 pt-10">
                    <img src={learningIllustration} alt="Current Learning" className="rounded-xl w-2/3" />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h3 className="card-title text-2xl mb-4">Continuous Learning</h3>
                    <ul className="list-disc text-left">
                      <li>Exploring machine learning and AI technologies</li>
                      <li>Deepening knowledge in cloud computing and serverless architectures</li>
                      <li>Advancing frontend skills with modern frameworks and libraries</li>
                      <li>Studying best practices in software architecture and design patterns</li>
                      <li>Mastering advanced Git workflows and DevOps practices</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </section>
        </ScrollTrigger>

        {/* Cloud Skills */}
        <ScrollTrigger onEnter={() => setCloudVisible(true)} onExit={() => setCloudVisible(false)}>
          <section className={`py-16 transition-all duration-1000 ${cloudVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold text-center mb-8">Cloud Expertise</h2>
            <div className="card bg-base-200 shadow-xl lg:card-side">
              <figure className="px-10 pt-10 lg:w-1/2">
                <img src={cloudIllustration} alt="Cloud Expertise" className="rounded-xl w-2/3 mx-auto" />
              </figure>
              <div className="card-body lg:w-1/2">
                <h3 className="card-title text-2xl mb-4">Cloud Technologies</h3>
                <ul className="list-disc">
                  <li>Designing and implementing cloud-native applications</li>
                  <li>Managing and optimizing cloud infrastructure on AWS and GCP</li>
                  <li>Deploying and scaling applications using containerization and orchestration tools</li>
                  <li>Implementing CI/CD pipelines with Git-based workflows</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Home;