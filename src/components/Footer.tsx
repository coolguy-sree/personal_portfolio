import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SURYA SAROJ</h3>
            <p className="text-gray-400">
              Building digital experiences that make a difference.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white">Skills</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/coolguy-sree"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/iamsuryasarojsistla24/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:sistlasree24@gmail.com"
                className="text-gray-400 hover:text-white"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p className="text-gray-400 mt-8">
          Explore my resume by clicking here:<a href="https://drive.google.com/file/d/1T3JnQeWyHGUHXit6AMWmmZdm0laz0XV4/view?usp=sharing" download className="text-blue-500 hover:underline"> Resume</a></p>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SURYA SAROJ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}