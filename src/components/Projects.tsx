import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
   {
    title: 'Redesigning Website',
    description: 'This is the official website for Bhilai Institute of Technology, Durg. The website is built using React, TypeScript, and Tailwind CSS.',
    image: 'https://site.ieee.org/sb-bitdurg/files/2018/07/Screen-Shot-2018-07-13-at-08.55.57.png',
    technologies: ['React 18','TypeScript','Tailwind CSS','Vite','React Router DOM','Lucide React'],
    github: 'https://github.com/coolguy-sree/Redesign_final',
    demo: 'https://fantastic-narwhal-259e34.netlify.app'
  },
  {
    title: 'EcoMobility Hub',
    description: 'EcoMobility Hub is a dynamic and responsive website developed for Rhyno EV Solutions Pvt., aimed at showcasing their range of Electric Vehicles (EVs) for customer purchases.',
    image: 'https://media.licdn.com/dms/image/v2/D4D16AQGpymsU-uNkGA/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1685365416796?e=2147483647&v=beta&t=FRJXpy9LfDi_nBB2M-DzXNfMbdcM2e1b3NEsTRDhRfY',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'React js'],
    github: 'https://github.com/coolguy-sree/Rhyno-Ev',
  },
  {
    title: 'Food Store Website',
    description: 'A full-featured Food Store Website built with HTML,CSS AND JAVASCRIPT',
    image: 'https://plus.unsplash.com/premium_photo-1661331839523-d381b3c8db1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    github: 'https://github.com/coolguy-sree/Fast-Food-Website',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with HTML,CSS AND JAVASCRIPT',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'React js'],
    github: 'https://github.com/coolguy-sree/Brainwave_Matrix_Intern/tree/main/task2',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays forecast data from multiple APIs',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    technologies: ['HTML', 'CSS','JAVASCRIPT', 'OpenWeather API'],
    github: 'https://github.com/coolguy-sree/Cothon_solutions_Intern/tree/main/task-3',
  },
  {
    title: 'A Quiz Application',
    description: 'The Quiz Application is a full-stack web application designed to offer an interactive quiz experience for users',
    image: 'https://1.bp.blogspot.com/--N26aRZdGGM/X3w1K1Ua5aI/AAAAAAAAA6U/CAW__gnZGAwwhtESQ8nIaM5e-vBrXRhzwCLcBGAsYHQ/s1280/Create%2Ba%2BQuiz%2BApp%2Bwith%2BTimer%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    github: 'https://github.com/coolguy-sree/Cothon_solutions_Intern/tree/main/task-1',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/90 text-gray-600 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-gray-900"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}