import React, { useState } from 'react';
import { 
  FaJava, FaPython, FaJs, FaReact, FaAngular, FaBootstrap, 
  FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaExternalLinkAlt, FaBars, FaTimes,
  FaChevronLeft, FaChevronRight 
} from 'react-icons/fa';
import { SiC, SiFlutter, SiDart, SiMysql, SiMongodb, SiFirebase } from 'react-icons/si';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('All');

  const [currentCert, setCurrentCert] = useState(0);

  const certificates = [
    { img: "/images/py1.png", title: "Python Programming" },
    { img: "/images/webdev.png", title: "Web Development" },
    { img: "/images/angular.png", title: "Angular Framework" },
    { img: "/images/pmmora.png", title: "Professional Development" }
  ];

  const prevCert = () => {
    setCurrentCert((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextCert = () => {
    setCurrentCert((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  const interests = [
    "Mobile Development", "Full-Stack Development", "UI/UX Design", 
    "Frontend Engineering", "AI Integration", "QA Testing"
  ];

  // Projects List
  const projects = [
    {
      title: "Emora — Emotion-Based Music Recommendation",
      category: "Fullstack",
      icon: "/images/emoralogo.png",
      desc: "Capstone project integrating facial emotion analysis with streaming APIs to generate personalized playlists dynamically. Built with Flutter, Flask, Firebase with OpenCV and DeepFace.",
      link: "#",
      github: "https://github.com/Geethma85"
    },
    {
      title: "Online Learning Platform",
      category: "Frontend",
      desc: "Codacs is a static learning platform inspired by Coursera, built with responsive layouts and course exploration modules.",
      link: "https://geethma85.github.io/static-website/",
      github: "https://github.com/Geethma85"
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      desc: "A personal portfolio built using React, Vite, and Tailwind CSS to showcase academic progress, practical skills, and software engineering projects.",
      link: "#",
      github: "https://github.com/Geethma85"
    }
  ];

  const filteredProjects = projectFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === projectFilter);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 text-lg font-bold tracking-wide text-purple-400">
            <img src="/images/Garet.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover ring-2 ring-purple-500/50" />
            <span>Geethma Piyaratne</span>
          </a>

          {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <li><a href="#about" className="hover:text-purple-400 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a></li>
          <li><a href="#certifications" className="hover:text-purple-400 transition-colors">Certifications</a></li>
          <li><a href="#volunteering" className="hover:text-purple-400 transition-colors">Volunteering</a></li>
          <li><a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
        </ul>

          {/* Mobile Hamburger Toggle */}
          <button 
            onClick={() => setNavOpen(!navOpen)} 
            className="md:hidden text-neutral-300 text-xl focus:outline-none"
          >
            {navOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {navOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-6 py-4 space-y-3">
            <a href="#about" onClick={() => setNavOpen(false)} className="block hover:text-purple-400">About</a>
            <a href="#skills" onClick={() => setNavOpen(false)} className="block hover:text-purple-400">Skills</a>
            <a href="#projects" onClick={() => setNavOpen(false)} className="block hover:text-purple-400">Projects</a>
            <a href="#volunteering" onClick={() => setNavOpen(false)} className="block hover:text-purple-400">Volunteering</a>
            <a href="#contact" onClick={() => setNavOpen(false)} className="block hover:text-purple-400">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <p className="text-purple-400 font-semibold tracking-wider uppercase text-sm">Welcome to my space</p>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Geethma Piyaratne
              </span>
            </h1>
            
            {/*INTRO */}
            <div className="text-neutral-400 max-w-xl text-base sm:text-lg leading-relaxed space-y-3">
              <p>
              An Information Systems undergraduate interested in web development, mobile app development, AI, and software quality assurance. I enjoy learning new technologies, building useful projects, and exploring different areas of the tech world.
              </p>

            </div>
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#projects" className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium shadow-lg shadow-purple-900/30 transition-all">
                Explore Projects
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl border border-neutral-700 hover:border-purple-500 text-neutral-300 font-medium transition-all">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <img 
              src="/images/pro pic (2).jpg" 
              alt="Geethma Piyaratne" 
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full object-cover ring-4 ring-neutral-800"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
        <div className="text-neutral-400 leading-relaxed max-w-3xl text-lg space-y-4 mb-12">
  <p>
    Hi, I’m Geethma, an Information Systems undergraduate with a passion for web and mobile development, technology, and building useful applications. I enjoy learning new technologies and exploring how software can be developed and tested to create reliable user experiences.
  </p>
  <p>
    <span className="text-neutral-200 font-medium">My interests include</span> web development, mobile app development, Generative AI, and QA/testing. I’m currently focused on expanding my technical skills, building projects, and gaining hands-on experience with modern technologies.
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 transition-all">
            <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <img src="/images/SUSL_logo2.png" alt="SUSL" className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="font-medium text-neutral-200">Sabaragamuwa University of Sri Lanka</h4>
                  <p className="text-sm text-neutral-400">BSc (Hons) in Information Systems</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/images/Musaeus_College_crest.png" alt="Musaeus" className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="font-medium text-neutral-200">Musaeus College</h4>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Interests Card */}
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 transition-all">
            <h3 className="text-xl font-semibold text-white mb-4">Focus & Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-purple-950/40 text-purple-300 border border-purple-800/40"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl font-bold text-white mb-12 text-center md:text-left">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
  
      {/* Languages */}
      <div className="p-8 min-h-[240px] rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-purple-500/50 hover:scale-[1.02] transition-all">
        <div className="flex flex-wrap justify-center gap-5 text-4xl mb-6">
          <SiDart className="text-cyan-400 hover:scale-110 transition-transform" title="Dart" />
          <FaPython className="text-blue-400 hover:scale-110 transition-transform" title="Python" />
          <FaJava className="text-orange-500 hover:scale-110 transition-transform" title="Java" />
          <FaJs className="text-yellow-400 hover:scale-110 transition-transform" title="JavaScript" />
          <SiC className="text-indigo-400 hover:scale-110 transition-transform" title="C" />
        </div>
        <h3 className="text-xl font-semibold text-white">Languages</h3>
      </div>

      {/* Frontend & Mobile */}
      <div className="p-8 min-h-[240px] rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-purple-500/50 hover:scale-[1.02] transition-all">
        <div className="flex flex-wrap justify-center gap-5 text-4xl mb-6">
          <SiFlutter className="text-blue-400 hover:scale-110 transition-transform" title="Flutter" />
          <FaReact className="text-cyan-400 hover:scale-110 transition-transform" title="React" />
          <FaAngular className="text-red-500 hover:scale-110 transition-transform" title="Angular" />
          <FaBootstrap className="text-purple-500 hover:scale-110 transition-transform" title="Bootstrap" />
        </div>
        <h3 className="text-xl font-semibold text-white">Frontend & Mobile</h3>
      </div>

      {/* Databases & Cloud */}
      <div className="p-8 min-h-[240px] rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center flex flex-col items-center justify-center hover:border-purple-500/50 hover:scale-[1.02] transition-all">
        <div className="flex flex-wrap justify-center gap-5 text-4xl mb-6">
          <SiMysql className="text-blue-500 hover:scale-110 transition-transform" title="MySQL" />
          <SiMongodb className="text-green-500 hover:scale-110 transition-transform" title="MongoDB" />
          <SiFirebase className="text-amber-500 hover:scale-110 transition-transform" title="Firebase" />
        </div>
        <h3 className="text-xl font-semibold text-white">Databases & Cloud</h3>
      </div>

    </div>

        {/* Updated Skills Summary */}
        <p className="text-neutral-400 leading-relaxed text-center max-w-3xl mx-auto">
          Experienced in building cross-platform mobile and web applications using Dart & Flutter alongside React. Confident in backend integration with Python and Java, database design using MySQL and MongoDB, and exploring cloud architectures and AI-driven solutions.
        </p>
      </section>

      {/* Certifications Carousel Section */}
      <section id="certifications" className="py-24 px-6 max-w-4xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h2>

        <div className="relative rounded-2xl overflow-hidden bg-neutral-900/80 border border-neutral-800 shadow-2xl">
          
          {/* Slide Image Container */}
          <div className="h-72 sm:h-96 md:h-[420px] bg-neutral-950 flex items-center justify-center p-4 sm:p-8 relative">
            <img 
              src={certificates[currentCert].img} 
              alt={certificates[currentCert].title}
              className="max-h-full max-w-full object-contain rounded-lg transition-all duration-500 ease-in-out shadow-lg"
            />
          </div>

          {/* Caption */}
          <div className="p-4 bg-neutral-900 border-t border-neutral-800 text-center">
            <h3 className="text-lg font-semibold text-purple-300">
              {certificates[currentCert].title}
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              {currentCert + 1} of {certificates.length}
            </p>
          </div>

          {/* Previous Button */}
          <button 
            onClick={prevCert}
            aria-label="Previous Certificate"
            className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-5 p-3 rounded-full bg-neutral-900/80 hover:bg-purple-600 text-white transition-colors border border-neutral-700 shadow-md focus:outline-none"
          >
            <FaChevronLeft className="text-base" />
          </button>

          {/* Next Button */}
          <button 
            onClick={nextCert}
            aria-label="Next Certificate"
            className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-5 p-3 rounded-full bg-neutral-900/80 hover:bg-purple-600 text-white transition-colors border border-neutral-700 shadow-md focus:outline-none"
          >
            <FaChevronRight className="text-base" />
          </button>

          {/* Indicator Dots */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentCert(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentCert === idx ? "w-6 bg-purple-500" : "w-2 bg-neutral-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
            <p className="text-neutral-400">Applications and solutions I've developed.</p>
          </div>
          <div className="flex gap-2">
            {['All', 'Frontend', 'Backend', 'Fullstack'].map(filter => (
              <button
                key={filter}
                onClick={() => setProjectFilter(filter)}
                className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  projectFilter === filter 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((p, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 flex flex-col justify-between group transition-all">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  {p.icon && (
                    <img 
                      src={p.icon} 
                      alt={p.title} 
                      className="w-10 h-10 object-contain rounded-lg bg-neutral-800 p-1.5 border border-neutral-700" 
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                  )}
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">{p.desc}</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium">
                {p.link !== "#" && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-purple-400 hover:underline">
                    Live Demo <FaExternalLinkAlt className="text-xs" />
                  </a>
                )}
                <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-neutral-300 hover:text-white">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Volunteering Section */}
      <section id="volunteering" className="py-24 px-6 max-w-6xl mx-auto border-t border-neutral-900">
        <h2 className="text-3xl font-bold text-white mb-12">Leadership & Volunteering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        

          {/* Rotaract SDG */}
          <div className="rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between">
            <img src="/images/sdgpic.jpg" alt="Rotaract SDG" className="w-full h-44 object-cover" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-white text-lg">Rotaract — SDG Task Force</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">Chairperson — SDG 10</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Led a community seed and plant distribution drive in Pambahinna to strengthen local food security.
                </p>
              </div>
            </div>
          </div>

          {/* Rotaract Social Media Team */}
          <div className="rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between">
            <img src="/images/yt.png" alt="Rotaract Media" className="w-full h-44 object-cover" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-white text-lg">Rotaract Club</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">Social Media Team (YouTube) • 2025–2026</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Managed YouTube channel presence, video content coordination, and digital media outreach for club events.
                </p>
              </div>
            </div>
          </div>

          {/* IEEE PearlHack */}
          <div className="rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between">
            <img src="/images/pen.jpg" alt="IEEE PearlHack" className="w-full h-44 object-cover" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-white text-lg">IEEE PearlHack 2.0</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">Secretary Team Member</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Organised coordination and communications for PearlHack, an inter-university hackathon encouraging women in tech.
                </p>
              </div>
            </div>
          </div>

          {/* IEEE WIE Hope */}
          <div className="rounded-2xl overflow-hidden bg-neutral-900/60 border border-neutral-800 hover:border-purple-500/50 hover:scale-[1.02] transition-all flex flex-col justify-between">
            <img src="/images/hope.JPG" alt="IEEE WIE Hope" className="w-full h-44 object-cover" />
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-white text-lg">IEEE WIE Hope 2.0</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">Volunteer Instructor</p>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Facilitated school teaching sessions introducing young students to foundational computer programming.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* Contact Section & Footer */}
      <footer id="contact" className="border-t border-neutral-900 bg-neutral-950 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-neutral-400 mb-8 max-w-md">
            I’m always open to connecting with fellow developers, tech enthusiasts, and professionals. Whether it’s to share ideas, collaborate, learn from each other, or simply have a conversation about technology, feel free to reach out — let’s connect!
            </p>
            <div className="flex gap-4 text-2xl text-neutral-400">
              <a href="https://www.linkedin.com/in/geethma-piyaratne" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors"><FaLinkedin /></a>
              <a href="https://github.com/Geethma85" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors"><FaGithub /></a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">Email</label>
              <input 
                type="email" 
                placeholder="name@gmail.com" 
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:border-purple-500" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-1">Message</label>
              <textarea 
                rows="4" 
                placeholder="Your message here..." 
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-100 focus:outline-none focus:border-purple-500" 
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="text-center text-sm text-neutral-500 mt-16">
          &copy; {new Date().getFullYear()} Geethma Piyaratne. All rights reserved.
        </div>
      </footer>

    </div>
  );
}