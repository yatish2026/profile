import React, { useRef } from "react";
import { Code2, Network, Layers } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

// --- Custom Interactive Tilt Card ---
const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 150 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 150 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="transition-transform duration-500"
    >
      {children}
    </motion.div>
  );
};

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <TiltCard>
    <div className="group relative overflow-hidden transition-all duration-500">
      <div className="absolute -inset-[2px] bg-gradient-to-r from-[#00d2ff] via-[#3a47d5] to-[#00d2ff] rounded-lg blur-xl opacity-30 group-hover:opacity-60 animate-pulse" />
      <div className="relative bg-[#0f172a]/80 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl z-10 p-8 h-full">
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
          className="relative mb-6"
        >
          <div className="absolute -inset-6 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-2xl group-hover:blur-2xl transition-all" />
          <Icon className="w-12 h-12 text-cyan-400 relative z-10" />
        </motion.div>
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text animate-text-glow">
            {title}
          </h3>
          <div className="flex justify-between items-center text-gray-400">
            <span className="font-semibold text-blue-400">{company}</span>
            <span className="text-xs bg-blue-400/10 px-3 py-1 rounded-full font-mono">
              {period}
            </span>
          </div>
          <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  </TiltCard>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "DATA SCIENCE INTERN",
      company: "Indo-Euro Synchronization Pvt Ltd",
      period: "Feb - May 2024",
      description:
        "Hands-on experience in data analysis, machine learning, and real-time applications through a certified internship.",
    },
    {
      icon: Layers,
      title: "FULLSTACK DEVELOPER",
      company: "Smart India Hackathon",
      period: "Oct - Dec 2024",
      description:
        "Built a real-time live call translation system using speech-to-text, translation APIs, and real-time audio processing.",
    },
    {
      icon: Code2,
      title: "CAMPUS AMBASSADOR",
      company: "GeeksforGeeks",
      period: "2024 - Present",
      description:
        "Promoting coding culture by organizing events and hackathons, enhancing technical community engagement on campus.",
    },
  ];

  return (
    <section className="relative bg-[#0a0f1f] min-h-screen pt-24 pb-32 overflow-hidden">
      {/* Glowing Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a0f1f] via-[#0a1a2f] to-[#0a0f1f] animate-pulse" />
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-[140px] animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 rounded-full blur-[140px] animate-float delay-300" />

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center space-y-4 mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
          Experiences
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Transforming passion into progress through every role.
        </p>
      </motion.div>

      {/* Experience Cards Grid */}
      <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>

      {/* Illustration */}
      <motion.img
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        src="https://cdni.iconscout.com/illustration/premium/thumb/remote-working-3463728-2912020.png"
        alt="Laptop Illustration"
        className="absolute left-0 bottom-0 w-[300px] md:w-[400px] animate-float-slow"
      />
    </section>
  );
};

export default ExperienceSection;
