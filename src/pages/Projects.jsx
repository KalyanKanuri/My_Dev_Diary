/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { FaGithub, FaExternalLinkAlt, FaReact, FaPython, FaHtml5, FaCss3Alt, FaJs, FaLinux, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFastapi, SiFlask, SiSqlite, SiVercel } from 'react-icons/si';
import projectsIllustration from '../assets/static/projects.svg';
import qbImg from '../assets/static/qb.png';
import illImg from '../assets/static/ill.png';
import portfolioImg from '../assets/static/ui-screenshot.png';

const Projects = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and experiences. Hosted on Vercel for easy accessibility.",
      image: portfolioImg,
      technologies: [
        { icon: <FaReact />, name: "React", color: "#61DAFB" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
        { icon: <FaGithub />, name: "GitHub", color: "#181717" },
        { icon: <SiVercel />, name: "Vercel", color: "#000000" },
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" }
      ],
      github: "https://github.com/KalyanKanuri/My_Dev_Diary",
      live: "https://my-dev-diary.vercel.app/",
    },

    {
      title: "Food Ordering Platform (QuickByte)",
      description: "A full-stack Food Ordering application built with Python and Flask. Features include Order Tracking, Payment Support, Admin analytics, and more. Utilizes SQLite for data storage and is deployed on Linux servers.",
      image: qbImg, 
      technologies: [
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
        { icon: <SiFlask />, name: "Flask", color: "#000000" },
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <FaLinux />, name: "Linux", color: "#FCC624" },
        { icon: <SiSqlite />, name: "SQLite", color: "#003B57" },
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
        { icon: <FaGithub />, name: "GitHub", color: "#181717" }
      ],
      github: "https://github.com/TechHubHQ/QuickByte",
    },
    {
      title: "E-Learning Platform (IntelliLearn)",
      description: "An innovative E-Learning platform built with Python and FastAPI. Offers features like course management, user authentication, progress tracking, and interactive learning materials. Uses SQLite for efficient data management.",
      image: illImg,
      technologies: [
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
        { icon: <SiFastapi />, name: "FastAPI", color: "#009688" },
        { icon: <FaHtml5 />, name: "HTML5", color: "#E34F26" },
        { icon: <FaCss3Alt />, name: "CSS3", color: "#1572B6" },
        { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E" },
        { icon: <SiSqlite />, name: "SQLite", color: "#003B57" },
        { icon: <FaGitAlt />, name: "Git", color: "#F05032" },
        { icon: <FaGithub />, name: "GitHub", color: "#181717" }
      ],
      github: "https://github.com/TechHubHQ/ILL",
    }
  ];

  const ProjectCard = ({ project }) => (
    <div className="card lg:card-side bg-base-200 shadow-xl mb-8">
      <figure className="lg:w-2/5">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body lg:w-3/5">
        <h3 className="card-title text-2xl mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-3 text-2xl mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tooltip" data-tip={tech.name}>
              <span style={{ color: tech.color }}>{tech.icon}</span>
            </span>
          ))}
        </div>
        <div className="card-actions justify-end">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub className="mr-2" /> GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
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
            <h1 className="text-5xl font-bold mb-4">My Projects</h1>
            <p className="text-xl">Showcasing my skills through real-world applications</p>
          </header>
        </ScrollTrigger>

        {/* Projects Section */}
        <ScrollTrigger onEnter={() => setProjectsVisible(true)} onExit={() => setProjectsVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${projectsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <img src={projectsIllustration} alt="Projects" className="w-full max-w-md mx-auto" />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-xl mb-4">
                  Here are some of the projects I've worked on, demonstrating my skills in full-stack development,
                  API design, and more. Each project represents a unique challenge and showcases
                  different aspects of my technical expertise.
                </p>
                <p className="text-xl">
                  Feel free to explore the code on GitHub or check out the live demo where available. If you have
                  any questions about these projects or would like to collaborate, don't hesitate to reach out!
                </p>
              </div>
            </div>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </section>
        </ScrollTrigger>
      </div>
    </div>
  );
}

export default Projects;