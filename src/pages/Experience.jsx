import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import {
  FaBriefcase,
  FaTrophy,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import workExperienceIllustration from "../assets/static/work-experience.svg";
import achievementsIllustration from "../assets/static/achievements.svg";

const Experience = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [workExperienceVisible, setWorkExperienceVisible] = useState(false);
  const [achievementsVisible, setAchievementsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});

  const achievements = [
    "Inspiring Performance award (x2) for efforts and results that led to best customer satisfaction",
    "Atlas Award individual for outstanding performance and customer service",
    "Victory League award (x2) for contributions in the project",
    "Improved application performance by 40% through code optimization and bug fixing",
    "Mentored juniors, to understand the application flow and business strategies",
  ];

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const ExperienceCard = ({ id, title, duration, description, children }) => (
    <div
      className="card bg-base-200 shadow-xl mb-4 cursor-pointer"
      onClick={() => toggleCard(id)}
    >
      <div className="card-body">
        <h3 className="card-title text-2xl mb-4 flex items-center justify-between">
          <span className="flex items-center">
            <FaBriefcase className="mr-2" /> {title}
          </span>
          <div className="flex items-center">
            <span className="text-sm font-normal mr-2">{duration}</span>
            {expandedCards[id] ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </h3>
        <p className="mb-4">{description}</p>
        {expandedCards[id] && children}
      </div>
    </div>
  );

  return (
    <div className="bg-base-100 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        <ScrollTrigger
          onEnter={() => setHeaderVisible(true)}
          onExit={() => setHeaderVisible(false)}
        >
          <header
            className={`text-center mb-16 transition-all duration-1000 ${
              headerVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl font-bold mb-4">Professional Experience</h1>
            <p className="text-xl">
              Building innovative solutions and gaining valuable industry
              experience
            </p>
          </header>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => setWorkExperienceVisible(true)}
          onExit={() => setWorkExperienceVisible(false)}
        >
          <section
            className={`mb-16 transition-all duration-1000 ${
              workExperienceVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Work Experience
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src={workExperienceIllustration}
                  alt="Work Experience"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <ExperienceCard
                  id="wipro"
                  title="Project Engineer"
                  duration="June 2021 - Present"
                  description="As a Project Engineer at Wipro Digital, I've been deeply involved in the development and support of a critical application in the Supply Chain Management domain."
                >
                  <p className="mb-2">
                    <strong>Company:</strong> Wipro Digital
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>
                      Provided L4 Application Support, ensuring high
                      availability and rapid issue resolution for
                      mission-critical systems.
                    </li>
                    <li>
                      Conducted thorough code reviews and implemented best
                      practices, resulting in a 30% reduction in bug reports.
                    </li>
                    <li>
                      Optimized application performance through efficient
                      database queries and front-end optimizations, improving
                      overall user experience.
                    </li>
                    <li>
                      Mentored junior team members, fostering a culture of
                      knowledge sharing and continuous improvement.
                    </li>
                    <li>
                      Implemented automation strategies which reduced the
                      workload by over 50%.
                    </li>
                  </ul>
                </ExperienceCard>

                <ExperienceCard
                  id="excel"
                  title="Senior Software Engineer"
                  duration="Oct 2024 - Present"
                  description="As a Senior Software Engineer at Excel Global Solutions, I lead development efforts and mentor junior developers while implementing best practices."
                >
                  <p className="mb-2">
                    <strong>Company:</strong> Excel Global Solutions
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-4">
                    <li>Lead development of new features and improvements</li>
                    <li>Develop and maintain existing features</li>
                    <li>Implement new features and enhancements in Python</li>
                    {/* TODO: Add more details about the role */}
                  </ul>
                </ExperienceCard>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger
          onEnter={() => setAchievementsVisible(true)}
          onExit={() => setAchievementsVisible(false)}
        >
          <section
            className={`mb-16 transition-all duration-1000 ${
              achievementsVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold mb-8 text-center">
              Key Achievements
            </h2>
            <div className="flex flex-col lg:flex-row-reverse items-start justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pt-16">
                <img
                  src={achievementsIllustration}
                  alt="Achievements"
                  className="w-full max-w-md mx-auto"
                />
              </div>
              <div className="lg:w-1/2">
                <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title text-2xl mb-4 flex items-center">
                      <FaTrophy className="mr-2" /> Professional Milestones
                    </h3>
                    <ul className="list-disc list-inside">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="mb-2">
                          {achievement}
                        </li>
                      ))}
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
};

export default Experience;
