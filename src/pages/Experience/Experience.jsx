import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaUserGraduate } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:scale-[1.02]">
    <div className="absolute -inset-[2px] bg-gradient-to-r from-[#00d2ff] via-[#3a47d5] to-[#00d2ff] rounded-lg blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />
    <div className="relative bg-[#0f172a]/80 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl z-10 p-8 h-full">
      <div className="relative mb-6">
        <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-xl" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 group-hover:rotate-[15deg] transition-transform duration-300" />
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text animate-text-glow">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-400">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-xs bg-blue-400/10 px-3 py-1 rounded-full font-mono">{period}</span>
        </div>
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "DATA SCIENCE INTERN",
      company: "Indo-Euro Synchronization (IES) Pvt Ltd ",
      period: "February to May – 2024 ",
      description:
        "Completed a certified internship on Emerging Technologies – Data Science, gaining hands-on experience in data analysis, machine learning, and real-time industry applications",
    },
    {
      icon: Layers,
      title: "Full Stack Developer",
      company: "Smart India Hackathon 2024",
      period: "October to December - 2024",
      description:
        "Worked on a real-time live call translation system, aimed at breaking language barriers during phone conversations. Built using technologies like speech-to-text, language translation APIs, and real-time audio processing. Collaborated with a team to design, develop, and prototype the solution within strict deadlines.",
    },
    {
      icon: Code2,
      title: "Campus Ambassador",
      company: "GeeksforGeeks",
      period: "2024 - Present",
      description:
        "Promoting coding culture on campus by organizing events, workshops, and hackathons. Actively engaging students with GeeksforGeeks content and resources while enhancing peer learning and technical networking."
    },
  ];

  return (
    <div className="relative bg-[#0a0f1f] min-h-screen pt-32 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0f1f] via-[#0a1a2f] to-[#0a0f1f] animate-pulse" />

      <div className="relative z-10 text-center space-y-4 mb-20">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
          Professional Journey
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          "Transforming ideas into digital reality, one project at a time."
        </p>
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>

      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float delay-500" />

      {/* Footer */}
      <footer className="relative z-10 mt-20 border-t border-gray-700/30 pt-10 text-center">
        <div className="flex justify-center space-x-6 text-gray-400 text-2xl">
          <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://leetcode.com/YOUR_LEETCODE" target="_blank" rel="noopener noreferrer"><SiLeetcode /></a>
          <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://auth.geeksforgeeks.org/user/YOUR_GFG/profile" target="_blank" rel="noopener noreferrer"><SiGeeksforgeeks /></a>
        </div>
        <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} GOTTAPU YATISH. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ExperienceSection;
