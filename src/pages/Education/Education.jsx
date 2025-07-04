import React, { useState } from "react";
import { BookOpen, Calendar, Trophy, Award } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Technology(B.Tech) in Information Technology",
    school: "Sri Venkateswara College of Engineering Technology",
    mascot: "📘",
    year: "2022-2026",
    achievements: [
      "CGPA: 8.32",
      "3-times Hackathon Winner",
      "Finalist – Smart India Hackathon 2024, Govt. of India",
    ],
    skills: ["DSA", "OS", "JAVA", "CN", "DBMS", "AI"],
    description:
      "Gained practical knowledge in software development and problem-solving through projects and coursework, while honing teamwork and communication skills.",
  },
  {
    degree: "Intermediate (MPC)",
    school: "Government Junior College, Vizianagaram",
    mascot: "📗",
    year: "2018-2020",
    achievements: [
      "GPA: 70%",
      "Secured 2nd position in a speech competition at the district level",
    ],
    skills: ["Communication & Public Speaking", "Typing"],
    description:
      "Developed strong analytical and critical thinking skills through comprehensive study of mathematics, physics, and chemistry.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Zilla Parishad High School",
    mascot: "📗",
    year: "2015-2018",
    achievements: ["GPA: 8.3", "Winner in Science Fair, Maths Olympiad"],
    skills: ["Maths", "English", "Science", "Social"],
    description:
      "Developed strong analytical thinking, problem-solving skills, and a disciplined learning approach during school years.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -15, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const FloatingEmoji = ({ icon, className, delay = 0 }) => (
  <motion.div
    className={`absolute text-3xl md:text-4xl opacity-25 pointer-events-none glowing-text ${className}`}
    variants={floatingVariants}
    animate="animate"
    style={{ animationDelay: `${delay}s` }}
  >
    {icon}
  </motion.div>
);

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="min-h-screen relative overflow-hidden py-40 bg-[#04081A]">
      {/* Glowing floating emojis */}
      <FloatingEmoji icon="📘" className="top-10 left-8" />
      <FloatingEmoji icon="🎓" className="bottom-12 right-10" delay={0.5} />
      <FloatingEmoji icon="🧠" className="top-1/4 right-1/4" delay={1} />
      <FloatingEmoji icon="🏆" className="top-5 left-1/2" delay={1.5} />
      <FloatingEmoji icon="📚" className="bottom-1/3 left-12" delay={2} />
      <FloatingEmoji icon="✍️" className="top-1/2 right-5" delay={2.5} />
      <FloatingEmoji icon="📖" className="bottom-5 right-1/3" delay={3} />

      {/* Glowing text style */}
      <style>
        {`
          .glowing-text {
            text-shadow: 0 0 6px rgba(255,255,255,0.5), 0 0 12px rgba(255,255,255,0.3);
          }
        `}
      </style>

      {/* Grid Background + Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#04081A] via-transparent to-[#04081A]" />
        <div className="absolute inset-0 border border-white/[0.05] grid grid-cols-2 md:grid-cols-4" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Educational Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover how academic excellence shapes innovative thinking and
            professional growth.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative border rounded-xl p-8 transition-all duration-300 bg-gray-900/50 backdrop-blur-sm shadow-md ${
                hoveredIndex === index
                  ? "border-teal-500 scale-[1.02] shadow-teal-500/30"
                  : "border-blue-400/20"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{edu.mascot}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-teal-500" />
                    {edu.school}
                  </p>
                  <p className="text-gray-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {edu.year}
                  </p>
                </div>

                <p className="text-gray-300 text-sm italic border-l-2 border-teal-500 pl-3">
                  {edu.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-500" />
                    Key Achievements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 flex items-center gap-2 text-sm"
                      >
                        <Award className="w-4 h-4" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs rounded bg-blue-500/10 text-blue-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
