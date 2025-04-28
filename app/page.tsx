import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Instagram,Twitter, MapPin, Mail, User, Briefcase, GraduationCap, Heart } from "lucide-react"
import ContactForm from "@/components/contact-form"
import TechStack from "@/components/tech-stack"
import Timeline from "@/components/timeline"
import Workflow from "@/components/workflow"
import Blog from "@/components/Blog"
import DSA from "@/components/dsa"
import Certification from "@/components/certication"
import Projects from "@/components/projects"

export default function Home() {
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex justify-end p-4">
        <div className="space-x-6">
          
          <Link href="#about" className="hover:text-green-400 p-1 transition-colors border-2 rounded-sm border-green-400">
            About
          </Link>
          
          <Link href="#portfolio" className="hover:text-green-400 p-1 transition-colors border-2 rounded-sm border-green-400">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-green-400 p-1 transition-colors border-2 rounded-sm border-green-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col border border-blue-950 bg-black md:flex-row items-center gap-8 p-4 md:p-8 max-w-7xl mx-auto">
        <div className="w-36 md:w-1/4">
          <Image
            src="/image1.jpeg"
            alt="Profile Image"
            width={350}
            height={350}
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-4">
          <div className="text-green-400 font-mono">
            &lt;code&gt; I build Scalable Full Stack Applications | &lt;/code&gt;
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Anurag Kumar Ojha</h1>
          <div className="flex items-center gap-2">
            <Link href="https://github.com/intojhanurag" aria-label="GitHub" className="hover:text-green-400">
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/anuragojha2004/"
              aria-label="LinkedIn"
              className="hover:text-green-400"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/initial_coder/"
              aria-label="Instagram"
              className="hover:text-green-400"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://x.com/AnuragOjha8355"
              aria-label="Twitter"
              className="hover:text-green-400"
            >
              <Twitter size={20} />
            </Link>
          </div>
          <p className="text-gray-300">
            I'm a 2nd year engineering student, currently building full stack application.
          </p>
          <p className="text-gray-300">
            In my free time, you can often find me solving competitive programming problems.
            I enjoy challenging myself with different algorithms and improving my problem-solving skills.
          </p>
          <div className="flex gap-4 pt-4">
            <Link
              href="https://drive.google.com/drive/u/0/folders/1nbByZN5_CJud1QlmK9J7gamvf7nsaO8C"
              className="bg-green-500 hover:bg-green-600 text-black font-medium px-6 py-2 rounded-full transition-colors"
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="border border-green-500 text-green-500 hover:bg-green-500 hover:text-black font-medium px-6 py-2 rounded-full transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
      <br />
      {/* About Me Section */}
      <section id="about" className="py-16 border border-blue-900 bg-black px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-8">About <span className="text-white">Me</span></h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-4">
            <p className="text-gray-300">
              I am a passionate Full Stack Engineer with a strong focus on backend development, scalable systems, and
              real-time solutions. My journey began in coding with compititive programming in 1st year and i am a effcient problem
              solver as well as i am a full stack developer
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-green-400" />
                <span className="font-medium">Location:</span> Greater Noida (U.P,India)
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-green-400" />
                <span className="font-medium">Age:</span> 18
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-green-400" />
                <span className="font-medium">Nationality:</span> Indian
              </div>
              <div className="flex items-center gap-2">
                <Heart size={18} className="text-green-400" />
                <span className="font-medium">Interests:</span> Coding, Captures Videos
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-green-400" />
                <span className="font-medium">Study:</span> Galgotias College of Engg & Technology
              </div>
            </div>
          </div>
          <div className="md:w-1/3">
            <Image
              src="/image2.jpeg"
              alt="Coding"
              width={450}
              height={450}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
      <br />
      {/* Tech Stack Section */}
      <TechStack />

      {/* Education & Experience Section */}
      <br />
      <Timeline />
      <br />
      <Workflow/>
      <br />

      {/* Achievements Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <DSA />
        
        <Certification />
      </div>

      {/* Portfolio Section */}
      <br />
      <section id="portfolio" className="px-4 md:px-8 max-w-7xl mx-auto">
        <Projects />
        <Blog/>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-green-400 mb-8">Get in touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-6">
              Have a project for me? Any questions about something I've built? I'd love to hear from you. Drop me a
              message or use the contact form below!
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="text-green-400 mt-1" size={20} />
                <span>Noida, India</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="text-green-400 mt-1" size={20} />
                <span>aojharaj2004@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Linkedin className="text-green-400" size={20} />
                <span>anuragojha2004</span>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="text-green-400" size={20} />
                <span>intojhanurag</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="py-8 px-4 text-center text-gray-400 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Anurag Ojha. All rights reserved.</p>
      </footer>
    </main>
  )
}
