import React from 'react';

const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Python','Java','Django', 'RESTful APIs', 'SpringBoot'],
  database: ['MongoDB', 'SQL'],
  tools: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Webpack']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">Database</h3>
            <ul className="space-y-2">
              {skills.database.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-600">Tools & DevOps</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center bg-white/80 px-4 py-2 rounded-lg shadow-sm"
                >
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}