import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const projects = [
  {
    title: "N-Queens Visualiser",
    description: "JavaScript-based DSA visualisation for the N-Queens problem.",
    img: "https://i.postimg.cc/6pVrn6fc/nqueens.jpg",
    color: "#5196fd",
    github: "https://github.com/yatish2026/N-Queens-Visualiser-DSA",
    live: "https://yatish2026.github.io/N-Queens-Visualiser-DSA/",
  },
  {
    title: "Spotify Clone",
    description: "A full-stack Spotify UI clone using React and Tailwind.",
    img: "https://i.postimg.cc/J75CKyrs/Annotation-2025-04-01-203959.png",
    color: "#8f89ff",
    github: "https://github.com/yatish2026/spotify-clone",
    live: "https://github.com/yatish2026/spotify-clone",
  },
  {
    title: "SwaRaksha_AI",
    description: "AI-powered safety system with real-time alerts and tracking.",
    img: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
    color: "#00ffaa",
    github: "https://github.com/yatish2026/SwaRaksha_AI",
    live: "https://github.com/yatish2026/SwaRaksha_AI",
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
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ProjectShowcase() {
  const gridRef = useRef();

  useEffect(() => {
    gridRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section ref={gridRef} className="min-h-screen bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center">
          🚀 My Stunning Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="relative group overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm group-hover:bg-opacity-50 transition duration-300"
                  style={{ borderTop: `6px solid ${project.color}` }}
                ></div>
              </div>

              <div className="p-6 text-white flex flex-col gap-4">
                <h2 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm font-semibold hover:underline"
                    style={{ color: project.color }}
                  >
                    View Code →
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm font-semibold hover:underline"
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
