import React from 'react';
import { Code2, Database, Globe } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              I'm an enthusiastic Full Stack Developer with a strong passion for building web applications. My journey in tech began with a curiosity about how the internet works, which inspired me to pursue a career in web development. Although I am a fresher, I am eager to apply my skills and continue learning in this dynamic field.
            </p>
            <p className="text-lg text-gray-600">
              I specialize in JavaScript technologies across the stack and have professional experience working with <strong>React,Node.js,TypeScript,Vue.js</strong> and various databases. I'm passionate about writing clean,
              efficient code and creating intuitive user experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/80 rounded-lg shadow-sm">
              <Globe className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">Creating responsive and interactive user interfaces</p>
            </div>
            <div className="p-6 bg-white/80 rounded-lg shadow-sm">
              <Code2 className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">Building robust and scalable server-side applications</p>
            </div>
            <div className="p-6 bg-white/80 rounded-lg shadow-sm">
              <Database className="w-8 h-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold mb-2">Database Design</h3>
              <p className="text-gray-600">Designing efficient database schemas and queries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}