/* eslint-disable react/prop-types */
import { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';
import { FaCode, FaClock, FaChartBar, FaLanguage, FaChartLine } from 'react-icons/fa';
import codingActivityIllustration from '../assets/static/coding-activity.svg';

const CodingActivity = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [chartsVisible, setChartsVisible] = useState(false);

  const StatCard = ({ icon, title, children }) => (
    <div className="card bg-base-200 shadow-xl">
      <div className="card-body items-center text-center">
        {icon}
        <h3 className="card-title text-xl mt-2">{title}</h3>
        {children}
      </div>
    </div>
  );

  return (
    <div className="bg-base-100 min-h-screen pt-16">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section with Illustration */}
        <ScrollTrigger onEnter={() => setHeaderVisible(true)} onExit={() => setHeaderVisible(false)}>
          <header className={`text-center mb-16 transition-all duration-1000 ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-5xl font-bold mb-4">Coding Activity</h1>
                <p className="text-xl">Tracking my programming journey and productivity</p>
              </div>
              <div className="md:w-1/2">
                <img src={codingActivityIllustration} alt="Coding activity illustration" className="w-full max-w-md mx-auto" />
              </div>
            </div>
          </header>
        </ScrollTrigger>

        {/* Stats Section */}
        <ScrollTrigger onEnter={() => setStatsVisible(true)} onExit={() => setStatsVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Key Stats</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                icon={<FaCode className="text-4xl text-primary" />}
                title="Languages Used"
              >
                <p className="text-3xl font-bold">5+</p>
              </StatCard>
              <StatCard 
                icon={<FaClock className="text-4xl text-secondary" />}
                title="Coding Time"
              >
                <img 
                  href="https://codetime.dev" 
                  alt="CodeTime Badge" 
                  src="https://img.shields.io/endpoint?style=social&color=222&url=https%3A%2F%2Fapi.codetime.dev%2Fshield%3Fid%3D21162%26project%3D%26in=0" 
                  className="mt-2"
                />
                <p className="text-sm mt-2">Powered by CodeTime</p>
              </StatCard>
              <StatCard 
                icon={<FaChartBar className="text-4xl text-accent" />}
                title="Projects Completed"
              >
                <p className="text-3xl font-bold">5+</p>
              </StatCard>
            </div>
          </section>
        </ScrollTrigger>

        {/* Charts Section */}
        <ScrollTrigger onEnter={() => setChartsVisible(true)} onExit={() => setChartsVisible(false)}>
          <section className={`mb-16 transition-all duration-1000 ${chartsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-8 text-center">Activity Charts</h2>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title text-2xl mb-4">
                    <FaChartLine className="mr-2 text-secondary" />
                    Coding Activity
                    </h3>
                    <img src="https://wakatime.com/share/@kalyan/b6039c07-ebd9-41a5-bb82-8dbeed8a0b4c.png" alt="Languages chart" className="w-full" />
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="card bg-base-200 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title text-2xl mb-4">
                    <FaLanguage className="mr-2 text-primary" />
                    Languages Over Last 7 Days
                    </h3>
                    <img src="https://wakatime.com/share/@kalyan/cb953ddf-0bec-413e-bdb7-b2be3b29c9f9.png" alt="Coding activity chart" className="w-full" />
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

export default CodingActivity;