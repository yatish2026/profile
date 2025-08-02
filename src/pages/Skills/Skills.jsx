import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import { FaBrain, FaHeadphones, FaWrench, FaLaptopCode, FaHandsHelping, FaPlane, FaPenNib, FaCameraRetro } from "react-icons/fa";
import { MdLiveTv, MdSportsTennis } from "react-icons/md";
import { GiChessKnight } from "react-icons/gi";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      color: "text-blue-400",
      skills: [
        { name: "Java", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#f89820]" /> },
        { name: "SQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "HTML", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS", icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" /> },
        { name: "JavaScript", icon: <BsFileEarmarkCode className="w-4 h-4 text-yellow-400" /> },
      ],
    },
    {
      icon: TbBrandVscode,
      title: "Developer Tools",
      color: "text-green-400",
      skills: [
        { name: "GitHub", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "VS Code", icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Google Colab", icon: <FaPython className="w-4 h-4 text-[#F9AB00]" /> },
        { name: "Jupyter Notebook", icon: <SiJest className="w-4 h-4 text-[#F37626]" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Techstacks / Frameworks",
      color: "text-purple-400",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "ExpressJs", icon: <SiGraphql className="w-4 h-4 text-[#000000]" /> },
        { name: "ReactJs", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "NodeJS", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
        { name: "Material UI", icon: <SiTypescript className="w-4 h-4 text-[#007FFF]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Firebase", icon: <SiFirebase className="w-4 h-4 text-[#FFCA28]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Core Subjects",
      color: "text-yellow-400",
      skills: [
        { name: "DSA", icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" /> },
        { name: "OOPs", icon: <BsGrid1X2 className="w-4 h-4 text-blue-400" /> },
        { name: "DBMS", icon: <Database className="w-4 h-4 text-green-400" /> },
        { name: "Computer Networks", icon: <Cloud className="w-4 h-4 text-orange-400" /> },
        { name: "Operating Systems", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Paintbrush,
      title: "Interpersonal Skills",
      color: "text-pink-400",
      skills: [
        { name: "Communication", icon: <BsGrid1X2 className="w-4 h-4 text-blue-400" /> },
        { name: "Teamwork", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Problem Solving", icon: <Cpu className="w-4 h-4 text-purple-400" /> },
        { name: "Adaptability", icon: <SiRedux className="w-4 h-4 text-pink-400" /> },
        { name: "Time Management", icon: <SiJest className="w-4 h-4 text-yellow-400" /> },
        { name: "Critical Thinking", icon: <SiTypescript className="w-4 h-4 text-blue-500" /> },
        { name: "Leadership", icon: <FaAws className="w-4 h-4 text-orange-400" /> },
      ],
    },
    {
      icon: MdAnimation,
      title: "Hobbies & Interests",
      color: "text-indigo-400",
      skills: [
        { name: "Building Side Projects", icon: <FaReact className="w-4 h-4 text-cyan-400" /> },
        { name: "Problem Solving", icon: <Cpu className="w-4 h-4 text-yellow-400" /> },
        { name: "Listening to Music", icon: <FaHeadphones className="w-4 h-4 text-pink-300" /> },
        { name: "Exploring New Tech/Tools", icon: <FaWrench className="w-4 h-4 text-blue-300" /> },
        { name: "Watching Web Series", icon: <MdLiveTv className="w-4 h-4 text-red-300" /> },
        { name: "Hackathons & Tech Fests", icon: <SiFirebase className="w-4 h-4 text-orange-400" /> },
        { name: "Helping Others Learn", icon: <FaHandsHelping className="w-4 h-4 text-indigo-300" /> },
        { name: "Chess", icon: <GiChessKnight className="w-4 h-4 text-gray-300" /> },
        { name: "Badminton", icon: <MdSportsTennis className="w-4 h-4 text-lime-400" /> },
        { name: "Traveling", icon: <FaPlane className="w-4 h-4 text-teal-400" /> },
        { name: "Writing", icon: <FaPenNib className="w-4 h-4 text-amber-400" /> },
        { name: "Photography", icon: <FaCameraRetro className="w-4 h-4 text-rose-400" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
