/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';
import mapIllustration from '../assets/static/map.svg';
import avatarImage from '../assets/static/avatar.jpeg';

const ContactMe = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [connectVisible, setConnectVisible] = useState(false);
  const [locationVisible, setLocationVisible] = useState(false);

  return (
    <div className="bg-base-100 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <ScrollTrigger onEnter={() => setHeaderVisible(true)} onExit={() => setHeaderVisible(false)}>
          <header className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
            <p className="text-xl">I'm excited to connect with you! Reach out and let's create something amazing together.</p>
          </header>
        </ScrollTrigger>

        {/* Connect Section */}
        <ScrollTrigger onEnter={() => setConnectVisible(true)} onExit={() => setConnectVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${connectVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
                <img src={avatarImage} alt="Kalyan Kanuri" className="w-full max-w-xs rounded-full shadow-lg object-cover aspect-square" />
              </div>
              <div className="lg:w-2/3">
                <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
                <p className="mb-4">I'm always eager to connect with fellow developers, potential collaborators, and anyone interested in tech. Feel free to reach out through any of these platforms:</p>
                <div className="flex space-x-4 text-4xl mb-6">
                  <a href="https://www.linkedin.com/in/kalyan-kanuri-12224a220/" className="text-blue-500 hover:text-blue-700 transition-colors duration-300" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/KalyanKanuri" className="text-gray-700 hover:text-gray-900 transition-colors duration-300" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="https://www.instagram.com/__kalyan.k_/#" className="text-pink-500 hover:text-pink-700 transition-colors duration-300" aria-label="Instagram">
                    <FaInstagram />
                  </a>
                  <a href="https://www.youtube.com/channel/UCUklxik_yLT0O_Ge2uaIQig" className="text-red-500 hover:text-red-700 transition-colors duration-300" aria-label="YouTube">
                    <FaYoutube />
                  </a>
                </div>
                <p>Whether you have a project idea, a job opportunity, or just want to discuss the latest in tech, I'm all ears. Let's innovate and create together!</p>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* Location Section */}
        <ScrollTrigger onEnter={() => setLocationVisible(true)} onExit={() => setLocationVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${locationVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={mapIllustration} alt="Location" className="w-full max-w-md mx-auto" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Where to Find Me</h2>
                <div className="space-y-4">
                  <p className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-primary" />
                    Visakhapatnam, Andhra Pradesh, India
                  </p>
                  <p className="flex items-center">
                    <FaPhoneAlt className="mr-2 text-primary" />
                    +91 9963059178
                  </p>
                  <p className="flex items-center">
                    <FaEnvelope className="mr-2 text-primary" />
                    kalyankanuri497@gmail.com
                  </p>
                </div>
                <div className="mt-6">
                  <p className="mb-2">I'm always open to new opportunities and collaborations. Whether you're in Hyderabad or anywhere else in the world, I'm just a message away!</p>
                  <p>Feel free to reach out through any of the social media platforms above or send me an email. I look forward to connecting with you!</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default ContactMe;