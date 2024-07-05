/* eslint-disable react/prop-types */
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { FaGraduationCap, FaAward, FaLaptopCode, FaRunning, FaFilePdf, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import graduationIllustration from '../assets/static/graduation.svg';
import skillsIllustration from '../assets/static/skills.svg';
import extracurricularIllustration from '../assets/static/extracurricular.svg';

const Education = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [educationVisible, setEducationVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [certificationsVisible, setCertificationsVisible] = useState(false);
  const [extracurricularVisible, setExtracurricularVisible] = useState(false);
  const [bscOpen, setBscOpen] = useState(false);
  const [mtechOpen, setMtechOpen] = useState(false);

  const certifications = [
    { 
      name: "The Complete Python Developer",
      issuer: "Udemy",
      pdfLink: "https://ude.my/UC-ab34ece9-f263-492d-99cd-7366ce955890"
    },
    {
      name: "Tensor Flow with Python",
      issuer: "Great Learning",
      pdfLink: "https://olympus.mygreatlearning.com/courses/56698/certificate"
    }
  ];

  const EducationCard = ({ title, isOpen, toggleOpen, children }) => (
    <div className="card bg-base-200 shadow-xl mb-4">
      <div className="card-body">
        <h3 
          className="card-title text-2xl mb-4 flex items-center justify-between cursor-pointer"
          onClick={toggleOpen}
        >
          <span className="flex items-center">
            <FaGraduationCap className="mr-2" /> {title}
          </span>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </h3>
        <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-base-100 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <ScrollTrigger onEnter={() => setHeaderVisible(true)} onExit={() => setHeaderVisible(false)}>
          <header className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl font-bold mb-4">My Educational Journey</h1>
            <p className="text-xl">Exploring knowledge, acquiring skills, and growing as a professional</p>
          </header>
        </ScrollTrigger>

        {/* Education Section */}
        <ScrollTrigger onEnter={() => setEducationVisible(true)} onExit={() => setEducationVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${educationVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Academic Background</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={graduationIllustration} alt="Graduation" className="w-full max-w-md mx-auto" />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <EducationCard 
                  title="M.Tech in Software Engineering (WILP)" 
                  isOpen={mtechOpen}
                  toggleOpen={() => setMtechOpen(!mtechOpen)}
                >
                  <p className="mb-2"><strong>Institution:</strong> BITS Pilani</p>
                  <p className="mb-2"><strong>Program:</strong> Work Integrated Learning Program by Wipro </p>
                  <p className="mb-2"><strong>Expected Graduation:</strong> 2025</p>
                  <p><strong>Focus Areas:</strong> Advanced Software Engineering, Cloud Computing, AI/ML</p>
                </EducationCard>

                <EducationCard 
                  title="Bachelor of Computer Science (BSc Computers)"
                  isOpen={bscOpen}
                  toggleOpen={() => setBscOpen(!bscOpen)}
                >
                  <p className="mb-2"><strong>Institution:</strong> Andhra University</p>
                  <p className="mb-2"><strong>Graduation Year:</strong> 2021</p>
                  <p className="mb-2"><strong>GPA:</strong> 8.5 / 10</p>
                  <p><strong>Key Courses:</strong> Data Structures, Algorithms, Database Management Systems, Web Development, Cloud Computing, Distributed Systems</p>
                </EducationCard>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* Skills Section */}
        <ScrollTrigger onEnter={() => setSkillsVisible(true)} onExit={() => setSkillsVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${skillsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="flex flex-col lg:flex-row-reverse items-start justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={skillsIllustration} alt="Skills" className="w-full max-w-md mx-auto" />
              </div>
              <div className="lg:w-1/2">
                <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title text-2xl mb-4 flex items-center">
                      <FaLaptopCode className="mr-2" /> Technical Skills
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>Programming Languages: Python, TypeScript, JavaScript</li>
                      <li>Web Technologies: React, Node.js, Flask</li>
                      <li>Frameworks: Scrappy, Selenium, FastAPI, MicroServices</li>
                      <li>Database: PostgreSQL, SQLite</li>
                      <li>Cloud Platforms: AWS, Google Cloud Platform</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* Certifications Section */}
        <ScrollTrigger onEnter={() => setCertificationsVisible(true)} onExit={() => setCertificationsVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${certificationsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Certifications</h2>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4 flex items-center">
                  <FaAward className="mr-2" /> Professional Certifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="card bg-base-100 shadow-md">
                      <div className="card-body">
                        <h4 className="card-title text-lg">{cert.name}</h4>
                        <p className="text-sm">{cert.issuer}</p>
                        <div className="card-actions justify-end mt-2">
                          <a href={cert.pdfLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                            <FaFilePdf className="mr-2" /> View Certificate
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* Extracurricular Activities Section */}
        <ScrollTrigger onEnter={() => setExtracurricularVisible(true)} onExit={() => setExtracurricularVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${extracurricularVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Extracurricular Activities</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={extracurricularIllustration} alt="Extracurricular Activities" className="w-full max-w-md mx-auto" />
              </div>
              <div className="lg:w-1/2">
                <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title text-2xl mb-4 flex items-center">
                      <FaRunning className="mr-2" /> Sports and Time Management
                    </h3>
                    <ul className="list-disc list-inside">
                      <li>National Taekwondo Athlete - Black belt (3rd Dan)</li>
                      <li>Participant, All India Taekwondo Championship (2021)</li>
                      <li>Loves to play Football</li>
                      <li>I Workout everyday to keep my fitness up</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Education;