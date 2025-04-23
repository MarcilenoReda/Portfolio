"use client";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "eCommerce platform",
    description: "eCommerce platform with user auth, product listing, cart, checkout, and admin dashboard for managing products and orders.",
    tech: ["Next.js", "Tailwind", "Laravel", "MySql"],
    image: "/src/public/souqak-eg-04-23-2025_02_55_AM.png",
    codeUrl: "https://github.com/yourusername/real-estate-app",
    liveUrl: "https://souqak-eg.com"
  },
  {
    title: "Task Manager",
    description: "Organize tasks with drag & drop, priorities, and real-time updates.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "/images/project2.png",
    codeUrl: "https://github.com/yourusername/task-manager",
    liveUrl: "https://taskmanager.example.com"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with animations, smooth scroll, and modern sections.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    image: "/images/project3.png",
    codeUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://portfolio.example.com"
  },
  {
    title: "E-Commerce Store",
    description: "Full-stack store with cart, checkout, admin dashboard, and payment integration.",
    tech: ["Next.js", "Stripe", "Tailwind", "Prisma"],
    image: "/images/project4.png",
    codeUrl: "https://github.com/yourusername/ecommerce-store",
    liveUrl: "https://ecommerce.example.com"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-[#111] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1a1a1a] p-5 rounded-2xl shadow-lg shadow-black/20 flex flex-col justify-between"
            >
              <div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl mb-4 border border-[#333] object-cover h-48 w-full"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#222] text-gray-300 px-2 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-white bg-[#333] px-3 py-1.5 rounded hover:bg-[#444] transition"
                >
                  <Github size={16} />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center gap-1 text-sm text-white bg-[#2563eb] px-3 py-1.5 rounded hover:bg-[#1d4ed8] transition"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
