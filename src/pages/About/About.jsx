import HeroImg from "@/assets/images/yatish.jpg";
import Footer from "@/components/Footer"; // ✅ Import Footer component
import Skills from "@/pages/Skills/Skills"; // ✅ Import Skills component
import React from "react";
import Experience from "@/pages/Experience/Experience"; // ✅ Import Experience component
import Projects from "@/pages/Projects/Projects"; // ✅ Import Projects component
import Education from "@/pages/Education/Education"; // ✅ Import Education component
import Contact from "@/pages/Contact/Contact"; // ✅ Import Contact component

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Image Section */}
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b from-zinc-300 to-transparent aspect-76/59 relative rounded-2xl p-px">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow-xl block transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl ring-1 ring-zinc-100/20"
                  alt="yatish profile"
                  width={1000}
                  height={929}
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="relative space-y-4">
              <p className="text-white">
                👨‍💻 <strong>Full Stack Developer</strong> | 💡 <strong>Problem Solver</strong> | 🧑‍🎓 3rd Year IT Student at SVCET, Chittoor
              </p>
              <p className="text-white">
                Hi, I’m an enthusiastic and ever-curious developer with a passion for building impactful software and solving real-world problems through technology.
              </p>
              <p className="text-white">
                Beyond tech, I’m a lifelong learner, avid <strong>chess♛</strong> player, and someone who loves to dive into books📚 — from science🔬 to spiritual texts.
              </p>
              <p className="text-white">
                ✍️ Writing helps me reflect, and coding fuels my creativity.<br />
                I’m always exploring new ideas and technologies, with a keen interest in <strong>AI</strong>, <strong>Web Development</strong>, and <strong>Open Source Contributions</strong>.
              </p>
              <p className="text-white">
                I’m constantly seeking opportunities to learn, grow, and contribute, with a vision to turn ideas into real-world impact.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    Lifelong learner and innovator, driven by a desire to contribute to the developer community with new ideas and tools that deliver real value.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        {/* ✅ Footer Section */}
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />

        <Footer />
      </section>
    </>
  );
}
