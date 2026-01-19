"use client"

import React, { useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Award, Code, Briefcase, GraduationCap, Phone, Menu, X, ArrowRight, Sparkles, Calendar, MapPin } from 'lucide-react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['about', 'education', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const skills = {
    "Frontend Development": ["React", "Next.js", "HTML/CSS", "Tailwind CSS", "JavaScript"],
    "Backend Development": ["Node.js", "Express.js", "MongoDB", "MySQL"],
    "Mobile Development": ["Kotlin", "Java", "Android Studio", "Mobile UI/UX"],
    "Design & Tools": ["Figma", "UI/UX Design", "Responsive Design", "Git/GitHub"],
    "Additional Skills": [ "MVC Architecture", "Agile Methodology", "Problem Solving"]
  };

  const projects = [
    {
      title: "Airline Ticketing Application",
      description: "Designed using Figma. This app provides a clean, interactive UI prototype that allows users to search, select, and book tickets easily.",
      tech: ["Figma"],
      link: "https://www.figma.com/design/KcshHEZdq4XkhkBdImacF8/Skybound?node-id=0-1&t=lZxWIdzBj9qWPEWF-1",
      image: "/skybound.png"
    },
    {
      title: "Wellness Tracker App",
      description: "Feature-rich mobile wellness application with daily habit tracking, reminder notification, progress visualization, and CRUD operations.",
      tech: ["Kotlin", "Android Studio"],
      link: "https://github.com/NethminiThamel/wellnessHabit",
      image: "/wellness.jpg"
    },
    {
      title: "COCOCHAIN - Supply Chain Management",
      description: "Full-stack web application for online coconut supply chain management, featuring real-time inventory tracking, secure authentication, and comprehensive CRUD operations.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      link: "#",
      image: "cocochain.jpg"
    },
    {
      title: "Stock Management System",
      description: "Enterprise-level inventory management solution following MVC architecture pattern with robust database design and efficient stock tracking capabilities.",
      tech: ["Java", "HTML/CSS", "MySQL", "MVC"],
      link: "#",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
    }
  ];

  const achievements = [
    {
      title: "Dean's List - Year 1 Semester 1",
      institution: "SLIIT",
      description: "Recognized for outstanding academic performance and maintaining exceptional GPA",
      year: "2024",
      image: "/y1s1.jpg"
    },
    {
      title: "Dean's List - Year 1 Semester 2",
      institution: "SLIIT",
      description: "Continued excellence in academic achievements and consistent performance",
      year: "2025",
      image: "/y1s2.jpg"
    },
    {
      title: "Dean's List Recognition",
      institution: "SLIIT",
      description: "Continued excellence in academic achievements and consistent performance",
      year: "2026",
      image: "/deans.jpeg"
    },
    {
      title: "AI/ML Certification",
      institution: "Centre for Open Distance Education, SLIIT",
      description: "Completed specialized course in Artificial Intelligence and Machine Learning",
      year: "2025",
      image: "/AIML.png"
    },
    {
      title: "Diploma in Information & Communication Technology",
      institution: "IDM Achievers International Campus",
      description: "Foundation qualification in ICT with comprehensive technical training",
      year: "2023",
      image: "/IDM.jpeg"
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' : 'bg-gradient-to-br from-slate-50 via-white to-slate-100 text-gray-900'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 ${darkMode ? 'bg-blue-600' : 'bg-blue-200'} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob`}></div>
        <div className={`absolute top-40 right-10 w-72 h-72 ${darkMode ? 'bg-indigo-600' : 'bg-indigo-200'} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000`}></div>
        <div className={`absolute -bottom-8 left-1/2 w-72 h-72 ${darkMode ? 'bg-purple-600' : 'bg-purple-200'} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000`}></div>
      </div>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? (darkMode ? 'bg-slate-900/95 shadow-2xl' : 'bg-white/95 shadow-lg') : 'bg-transparent'} backdrop-blur-xl border-b ${scrolled ? (darkMode ? 'border-slate-700/50' : 'border-gray-200/50') : 'border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <Sparkles className="inline-block mb-1 mr-2" size={24} />
               Nethmini Thamel
            </h1>
            
            <ul className="hidden md:flex items-center space-x-1">
              {['about', 'education', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === section 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                        : `${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="https://drive.google.com/file/d/1eLP2D5xCBarR162CBthsRdEIhctSBDLt/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                View Resume
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} transition-all duration-300`}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <ul className="space-y-2">
                {['about', 'education', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`capitalize font-medium w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                        activeSection === section 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                          : `${darkMode ? 'hover:bg-slate-800' : 'hover:bg-gray-100'}`
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>

      <main className="relative max-w-7xl mx-auto px-6 pt-24">
     {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
          <div className="max-w-4xl w-full">
            <div className="text-center space-y-8">
              {/* Main Heading */}
              <div className="space-y-4">
                 <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Hi, I'm Nethmini Thamel</h1>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                  <h2 className="text-xl md:text-2xl text-bg-slate-600 dark:text-gray-400 font-light tracking-wide">
                    IT Undergraduate
                  </h2>
                  <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed text-bg-slate-300 dark:text-gray-300 max-w-3xl mx-auto font-light">
                Passionate Information Technology undergraduate at SLIIT with a proven track record in full-stack web development and mobile application development. Experienced in building scalable applications using the MERN stack and creating intuitive Android applications with Kotlin and Java.
              </p>

              
              
              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-4">
                {[
                  { icon: Github, link: "https://github.com/NethminiThamel", label: "GitHub" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/nethmini-dilrukshika-1a5bb0384/", label: "LinkedIn" },
                  { icon: Mail, link: "mailto:dilrukshikan817@gmail.com", label: "Email" },
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.link} 
                    target={social.link.startsWith('http') ? "_blank" : undefined}
                    rel={social.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800 hover:bg-slate-700 border-slate-700 hover:border-blue-500' : 'bg-white hover:bg-blue-50 border-gray-200 hover:border-blue-400'} border transition-all duration-200`}
                    title={social.label}
                  >
                    <social.icon size={22} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  View My Work
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Education Section */}
        <section id="education" className="min-h-screen py-20">
          <div className="flex items-center justify-center mb-16">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} mr-4`}>
              <GraduationCap size={32} className="text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education</h2>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* University Education */}
            <div className={`group relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-700' : 'bg-blue-50'} flex-shrink-0`}>
                  <GraduationCap size={32} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 ring-white-600 dark:text-white">
                        Bachelor of Science (Hons) in Information Technology
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        Sri Lanka Institute of Information Technology (SLIIT)
                      </p>
                    </div>
                    <div className={`mt-2 md:mt-0 px-4 py-1.5 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-900/50 text-blue-300' : 'bg-blue-100 text-blue-700'} flex-shrink-0`}>
                      2023 - Present
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text- via-white-700 dark:text-gray-300">
                      <MapPin size={18} className="text-blue-600 flex-shrink-0" />
                      <span>Malabe, Sri Lanka</span>
                    </div>
                    <div className="flex items-center gap-2 text-via-white-700 dark:text-gray-300">
                      <Award size={18} className="text-blue-600 flex-shrink-0" />
                      <span className="font-semibold">CGPA: 3.83</span>
                    </div>
                  </div>
                  
                  <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                    <p className="text-sm font-semibold text- bg-slate-300-700 dark:text-gray-300 mb-2">Key Highlights:</p>
                    <ul className="space-y-1 text-via-white-700 dark:text-gray-400 text-sm">
                      <li>• Consistently achieved Dean's List recognition across multiple semesters</li>
                      <li>• Experience in full-stack development and mobile application development</li>
                      <li>• Active participation in academic projects and technical workshops</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Education */}
            <div className={`group relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-700' : 'bg-indigo-50'} flex-shrink-0`}>
                  <GraduationCap size={32} className="text-indigo-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-ring-white-600 dark:text-white">
                    Holy Family Balika Maha Vidyalaya
                  </h3>
                  <p className="text-via-white-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-indigo-600" />
                    Wennappuwa, Sri Lanka
                  </p>
                  
                  <div className="space-y-3 mt-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                      <p className="font-semibold text-bg-slate-300-700 dark:text-white mb-1">G.C.E. Advanced Level</p>
                      <p className="text-sm text-via-white-700 dark:text-gray-400">Physical Science Stream - Passed</p>
                    </div>
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700/50' : 'bg-gray-50'}`}>
                      <p className="font-semibold text-bg-slate-300-700 dark:text-white mb-1">G.C.E. Ordinary Level</p>
                      <p className="text-sm text-via-white-700 dark:text-gray-400">Passed with distinction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen py-20">
          <div className="flex items-center justify-center mb-16">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} mr-4`}>
              <Code size={32} className="text-indigo-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items], index) => (
              <div 
                key={category} 
                className={`p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700 hover:border-indigo-500' : 'border-gray-200 hover:border-indigo-300'}`}
              >
                <h3 className="text-xl font-bold mb-4 text-ring-white-600 dark:text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></span>
                  {category}
                </h3>
                <ul className="space-y-2.5">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center text- bg-slate-300-700 dark:text-gray-300">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-3"></span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <div className="flex items-center justify-center mb-16">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} mr-4`}>
              <Briefcase size={32} className="text-purple-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700 hover:border-purple-500' : 'border-gray-200 hover:border-purple-300'} overflow-hidden`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-ring-white-600 dark:text-white">{project.title}</h3>
                  <p className="mb-4 leading-relaxed text-bg-slate-300 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-slate-700 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all duration-300 font-medium">
                    View Project 
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="min-h-screen py-20">
          <div className="flex items-center justify-center mb-16">
            <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} mr-4`}>
              <Award size={32} className="text-blue-600" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Achievements & Certifications</h2>
          </div>
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`group rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${darkMode ? 'bg-slate-800/50' : 'bg-white'} border ${darkMode ? 'border-slate-700 hover:border-blue-500' : 'border-gray-200 hover:border-blue-300'} overflow-hidden`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
  src={achievement.image} 
  alt={achievement.title}
  className="w-full h-full object-contain bg-white p-2 transition-transform duration-500"
/>

                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-md ${darkMode ? 'bg-slate-900/80 text-blue-300' : 'bg-white/90 text-blue-700'}`}>
                      {achievement.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-bg-slate-300-700 dark:text-white">{achievement.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2 text-sm">{achievement.institution}</p>
                  <p className="text-bg-slate-300 dark:text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              

              
              
            </div>

            <section id="contact" className="py-24 flex items-center justify-center">
          <div className="w-full max-w-4xl px-4">
            {/* Heading */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center mb-12">
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-800' : 'bg-gray-100'} mr-4`}>
                  <Mail size={32} className="text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Get In Touch
                </h2>
              </div>
              <p className="text-lg md:text-xl text-bg-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, innovative projects, and potential collaborations. Let's connect!
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-10">
              <a href="mailto:dilrukshikan817@gmail.com" className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-blue-500' : 'bg-white border border-gray-200 hover:border-blue-400'} group`}>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white mb-3">
                    <Mail size={24} />
                  </div>
                  <p className="text-sm text-bg-slate-300 dark:text-gray-400 mb-1">Email</p>
                  <p className="font-semibold text-bg-slate-300 dark:text-white text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">dilrukshikan817@gmail.com</p>
                </div>
              </a>

              <a href="tel:+94714540918" className={`p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${darkMode ? 'bg-slate-800/50 border border-slate-700 hover:border-indigo-500' : 'bg-white border border-gray-200 hover:border-indigo-400'} group`}>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white mb-3">
                    <Phone size={24} />
                  </div>
                  <p className="text-sm text-bg-slate-300 dark:text-gray-400 mb-1">Phone</p>
                  <p className="font-semibold text-bg-slate-300 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">+94 71 454 0918</p>
                </div>
              </a>

              <div className={`p-6 rounded-2xl shadow-lg transition-all duration-300 ${darkMode ? 'bg-slate-800/50 border border-slate-700' : 'bg-white border border-gray-200'}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white mb-3">
                    <MapPin size={24} />
                  </div>
                  <p className="text-sm text-bg-slate-300 dark:text-gray-400 mb-1">Location</p>
                  <p className="font-semibold text-bg-slate-300 dark:text-white">Sri Lanka</p>
                </div>
              </div>
            </div>
              {/* Social Media Links */}
              <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                <p className="text-sm text-bg-slate-600 dark:text-gray-400 mb-4 text-center">Connect with me on social media</p>
                <div className="flex justify-center gap-3">
                  <a href="https://github.com/NethminiThamel" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 hover:scale-110`}>
                    <Github size={24} className="text-bg-slate-300 dark:text-gray-300" />
                  </a>
                  <a href="https://www.linkedin.com/in/nethmini-dilrukshika-1a5bb0384/" target="_blank" rel="noopener noreferrer" className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 hover:scale-110`}>
                    <Linkedin size={24} className="text-bg-slate-300 dark:text-gray-300" />
                  </a>
                  <a href="mailto:dilrukshikan817@gmail.com" className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-100 hover:bg-gray-200'} transition-all duration-300 hover:scale-110`}>
                    <Mail size={24} className="text-bg-slate-300 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          
        </section>
        </main>

      {/* Footer */}
      <footer className={`relative py-8 text-center border-t ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/50 border-gray-200'} backdrop-blur-xl`}>
        <p className="text-bg-slate-300 dark:text-gray-400">© 2025 Nethmini Thamel. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
