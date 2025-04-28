import { Code, Server, Cpu, Lightbulb } from "lucide-react";

export default function TechStack() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border border-blue-900 bg-black">
      <h2 className="text-3xl font-bold text-green-400 text-center mb-12">Core <span className="text-white">Tech</span> Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Frontend */}
        <div className="space-y-4 shadow-lg rounded-lg p-6" style={{ backgroundColor: "#072b4b" }}>
          <div className="flex items-center gap-2">
            <Code className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-green-400">Frontend</h3>
          </div>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> React.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> State Management
            </li>
          </ul>
        </div>

        {/* Backend */}
        <div className="space-y-4 shadow-lg rounded-lg p-6" style={{ backgroundColor: "#072b4b" }}>
          <div className="flex items-center gap-2">
            <Server className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-green-400">Backend</h3>
          </div>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Authentication (JWT, NextAuth)
            </li>
          </ul>
        </div>

        {/* Core Subjects */}
        <div className="space-y-4 shadow-lg rounded-lg p-6" style={{ backgroundColor: "#072b4b" }}>
          <div className="flex items-center gap-2">
            <Cpu className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-green-400">Core Subjects</h3>
          </div>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Data Structure & Algorithm
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> OOPS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Operating System
            </li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="space-y-4 shadow-lg rounded-lg p-6" style={{ backgroundColor: "#072b4b" }}>
          <div className="flex items-center gap-2">
            <Lightbulb className="text-green-400" size={24} />
            <h3 className="text-xl font-semibold text-green-400">Programming Languages I know</h3>
          </div>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> C++ (Proficient)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> JavaScript (Proficient)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Python (Basics)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">•</span> Testing (Unit & Integration)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
