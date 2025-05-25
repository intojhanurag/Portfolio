"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Github, Eye } from "lucide-react"

export default function Projects() {
  const [showFunProjects, setShowFunProjects] = useState(false)

  const projects = [
    {
      id: 1,
      title: "Yt-Learn",
      subtitle: "Your Playlist companion",
      image: "/yt-learn.png",
      link1: "https://github.com/intojhanurag/Yt-Learn",
      link2: "https://yt-learn.vercel.app/",
      tags: ["Next.js", "typescript", "Clerk", "Shadcn UI"],
      level: "main project",
    },
    {
      id: 2,
      title: "ThinkFlow",
      subtitle: "Your digital mind reimagined",
      image: "/project1.png",
      link1: "https://github.com/intojhanurag/Second---Brain-",
      link2: "https://second-brain-mauve.vercel.app/",
      tags: ["React", "typescript", "Nodejs", "MongoDb"],
      level: "main project",
    },
    {
      id: 3,
      title: "Calore",
      subtitle: "Diet Planning using AI",
      image: "/project2.png",
      link1: "https://github.com/intojhanurag/Igdtudw",
      link2: "https://igdtudw.vercel.app/",
      tags: ["React", "Gemini", "CSS", "javascript"],
      level: "main project",
    },
    {
      id: 4,
      title: "JS Game",
      subtitle: "Runner game using js canvas",
      image: "/project3.png",
      link1: "https://github.com/intojhanurag/JavaScipt-Game",
      link2: "https://java-scipt-game.vercel.app/",
      tags: ["javascript", "html", "css", "canvas"],
      level: "main project",
    },
    {
      id: 5,
      title: "Ui Ux",
      subtitle: "Created a ui ux design for a hackathon project",
      image: "/project5.avif",
      link1: "#",
      link2: "https://www.figma.com/design/a1AIw8lCXVUba3IMBSgdB1/Hackathon-2.0?node-id=0-1&p=f&t=9peBIFUCj15XJdsB-0",
      tags: ["figma"],
      level: "main project",
    },
    {
      id: 6,
      title: "Deep Learning For Computer Vision -Sign detection",
      subtitle: "Created a sign recognition using screenpipe",
      image: "/project4.jpg",
      link1: "https://github.com/intojhanurag/Sign-lanuage-prediction",
      link2: "#",
      tags: ["ML", "screenpipe"],
      level: "main project",
    },
    {
      id: 7,
      title: "Helping Hand",
      subtitle: "this is a website that will help the twitter newbie audience to choose their mentor according to their niche",
      image: "/helping-hand.png",
      link1: "https://github.com/intojhanurag/Helping-Hand",
      link2: "https://helping-hand-jgwi.vercel.app/",
      tags: ["typescript", "twitter api","tailwind","mongodb"],
      level: "fun project",
    },
  ]

  // Filter projects based on toggle state
  const filteredProjects = projects.filter((project) =>
    showFunProjects ? project.level === "fun project" : project.level === "main project",
  )

  return (
    <div>
      <h2 className="text-3xl font-bold text-center text-green-500 mb-8">
        {showFunProjects ? "Fun Projects" : "Main Projects"}
      </h2>

      {/* Toggle Button */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          <span className={`text-sm font-medium ${!showFunProjects ? "text-green-500" : "text-gray-400"}`}>Main</span>
          <button
            onClick={() => setShowFunProjects(!showFunProjects)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${
              showFunProjects ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                showFunProjects ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${showFunProjects ? "text-green-500" : "text-gray-400"}`}>Fun</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-lg border border-blue-900 flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-48">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Text and Links */}
            <div className="p-4 bg-black flex flex-col">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{project.subtitle}</p>
              <div className="flex gap-4 mb-3">
                {project.link1 && project.link1 !== "#" && (
                  <Link href={project.link1} target="_blank" rel="noopener noreferrer">
                    <Github className="w-fit text-green-400 hover:text-blue-900 cursor-pointer" />
                  </Link>
                )}
                {project.link2 && project.link2 !== "#" && (
                  <Link href={project.link2} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-fit text-green-400 hover:text-blue-900 cursor-pointer" />
                  </Link>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-full"
                    style={{
                      backgroundColor: index % 3 === 0 ? "#34D399" : index % 3 === 1 ? "#60A5FA" : "#F3F4F6",
                      color: index % 3 === 2 ? "#000" : "#FFF",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <br />
      <div className="col-span-2 md:col-span-3 lg:col-span-3 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-bold">I have worked on over 5 Hackathon Projects</h3>
        <p className="text-lg mt-2">
          These projects span across various domains, including Web3, AI/ML, AI Agents, and more. They showcase my
          skills in problem-solving, teamwork, and innovation.
        </p>
      </div>
    </div>
  )
}
