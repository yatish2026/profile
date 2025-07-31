import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const projects = [
  {
    title: "GearUp – Full Stack Car Booking Web App",
    description: "Built a full-stack Car Rental web app with booking system, dynamic pricing, and responsive dashboards using React, Node.js, and MongoDB",
    img: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    color: "#38b718ff",
    github: "https://github.com/yatish2026/GearUp",
    live: "https://gear-up-alpha.vercel.app/",
  },
  {
    title: "Pathfinding Visualizer",
    description: "Developed a Pathfinding Visualizer using Dijkstra’s and A algorithms with interactive UI in React for real-time grid-based route simulation.",
    img: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    color: "#d4cbd4ff",
    github: "https://github.com/yatish2026/Pathfinder",
    live: "https://yatish2026.github.io/Pathfinder/",
  },


  {
    title: "Spotify Clone",
    description: "A full-stack Spotify UI clone using React and Tailwind.",
    img: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    github: "https://github.com/yatish2026/spotify-clone",
    live: "https://yatish2026.github.io/spotify-clone/",
  },
  {
    title: "N-Queens Visualiser",
    description: "JavaScript-based DSA visualisation for the N-Queens problem.",
    img: "https://i.postimg.cc/6pVrn6fc/nqueens.jpg",
    color: "#5196fd",
    github: "https://github.com/yatish2026/N-Queens-Visualiser-DSA",
    live: "https://yatish2026.github.io/N-Queens-Visualiser-DSA/",
  },
  {
    title: "SwaRaksha_AI",
    description: "AI-powered safety system with real-time alerts and tracking.",
    img: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    color: "#00ffaa",
    github: "https://github.com/yatish2026/SwaRaksha_AI",

  },
  {
    title: "Black Friday Sales",
    description: "Data analysis dashboard built with Python and Plotly.",
    img: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    color: "#ed649e",
    github: "https://github.com/yatish2026/BLACKFRIDAY-SALES_PROJECT-",
    live: "https://github.com/yatish2026/BLACKFRIDAY-SALES_PROJECT-",
  },


];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Reusable floating icon component
const FloatingIcon = ({ icon, className, delay }) => (
  <motion.div
    className={`absolute text-4xl opacity-20 animate-pulse pointer-events-none ${className} glowing-text`}
    variants={floatingVariants}
    animate="animate"
    style={{ animationDelay: `${delay}s` }}
  >
    {icon}
  </motion.div>
);

export default function ProjectShowcase() {
  const gridRef = useRef();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/projects") {
      gridRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <section
      ref={gridRef}
      className="relative min-h-screen bg-black py-20 px-6 overflow-hidden"
    >
      {/* Floating glowing icons */}
      <FloatingIcon icon="💡" className="top-10 left-10" delay={0} />
      <FloatingIcon icon="⚙️" className="bottom-20 right-10" delay={0.5} />
      <FloatingIcon icon="💻" className="top-1/3 right-1/4" delay={1} />
      <FloatingIcon icon="🔧" className="bottom-32 left-1/4" delay={1.5} />
      <FloatingIcon icon="🧠" className="top-1/4 right-12" delay={2} />
      <FloatingIcon icon="🎯" className="top-5 right-1/3" delay={2.5} />
      <FloatingIcon icon="📊" className="bottom-10 left-10" delay={3} />

      {/* Custom glowing effect */}
      <style>
        {`
          .glowing-text {
            text-shadow: 0 0 8px rgba(255, 255, 255, 0.6), 
                         0 0 16px rgba(255, 255, 255, 0.3);
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center"
        >
          🚀 My Stunning Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 border-2"
              style={{
                borderColor: project.color,
                boxShadow: `0 0 20px ${project.color}55`,
              }}
            >
              <div className="relative group overflow-hidden">
                <motion.img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm group-hover:bg-opacity-60 transition duration-300"
                  style={{ borderTop: `6px solid ${project.color}` }}
                ></div>
              </div>

              <div className="p-6 text-white flex flex-col gap-3">
                <h2 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex justify-between text-sm font-semibold">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: project.color }}
                  >
                    View Code →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                    style={{ color: project.color }}
                  >
                    Live Demo →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}