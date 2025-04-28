"use client"

import { useState, useEffect } from "react"
import { Lightbulb, ListTodo, Paintbrush, Code, Truck, RefreshCcw } from "lucide-react"

export default function Workflow() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="w-full border border-blue-900 bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-green-400 ">Workflow</h1>

        <p className="text-lg mb-12 max-w-3xl text-white">
          I adhere to the Agile methodology for software development. It includes analyzing and planning requirements,
          iterative software building, and continuous improvement of design and functionality.
        </p>

        {/* Main workflow steps */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 md:gap-2">
          {/* Idea */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-green-700 flex items-center justify-center bg-gray-900">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="mt-4 text-xl text-white">Idea</span>
          </div>

          {/* Arrow */}
          {!isMobile && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-12 h-0.5 bg-white"></div>
              <div className="w-6 h-6 bg-green-700 rotate-45 transform origin-center"></div>
            </div>
          )}

          {/* Planning */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-green-700 flex items-center justify-center bg-gray-900">
                <ListTodo className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="mt-4 text-xl text-white">Planning</span>
          </div>

          {/* Arrow */}
          {!isMobile && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-12 h-0.5 bg-white"></div>
              <div className="w-6 h-6 bg-green-700 rotate-45 transform origin-center"></div>
            </div>
          )}

          {/* Design */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-green-700 flex items-center justify-center bg-gray-900">
                <Paintbrush className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="mt-4 text-xl text-white">Design</span>
          </div>

          {/* Arrow */}
          {!isMobile && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-12 h-0.5 bg-white"></div>
              <div className="w-6 h-6 bg-green-700 rotate-45 transform origin-center"></div>
            </div>
          )}

          {/* Implementation */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-green-700 flex items-center justify-center bg-gray-900">
                <Code className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="mt-4 text-xl text-white">Implementation</span>
          </div>

          {/* Arrow */}
          {!isMobile && (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-12 h-0.5 bg-white"></div>
              <div className="w-6 h-6 bg-green-700 rotate-45 transform origin-center"></div>
            </div>
          )}

          {/* Deployment */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-green-700 flex items-center justify-center bg-gray-900">
                <Truck className="w-10 h-10 text-white" />
              </div>
            </div>
            <span className="mt-4 text-xl text-white">Deployment</span>
          </div>
        </div>

        {/* Detailed workflow with vertical lines */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 relative">
          {/* Vertical dotted lines */}
          {!isMobile && (
            <>
              <div className="hidden md:block absolute left-1/10 top-0 h-full border-l border-dashed border-green-700"></div>
              <div className="hidden md:block absolute left-3/10 top-0 h-full border-l border-dashed border-green-700"></div>
              <div className="hidden md:block absolute left-1/2 top-0 h-full border-l border-dashed border-green-700"></div>
              <div className="hidden md:block absolute left-7/10 top-0 h-full border-l border-dashed border-green-700"></div>
              <div className="hidden md:block absolute left-9/10 top-0 h-full border-l border-dashed border-green-700"></div>
            </>
          )}

          {/* Initial Call */}
          <div className="flex flex-col items-center mb-16">
            <div className="h-8 md:h-16 border-l border-dashed border-green-700"></div>
            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-black"></div>
            <div className="mt-8 text-center">
              <p className="text-white">Initial Call</p>
            </div>
          </div>

          {/* Requirements Analysis */}
          <div className="flex flex-col items-center mb-16">
            <div className="h-8 md:h-16 border-l border-dashed border-green-700"></div>
            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-black"></div>
            <div className="mt-8 text-center">
              <p className="text-white">Requirement Analysis</p>
            </div>
          </div>

          {/* User flow, Mock-ups & Prototypes */}
          <div className="flex flex-col items-center mb-16">
            <div className="h-8 md:h-16 border-l border-dashed border-green-700"></div>
            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-black"></div>
            <div className="mt-8 text-center">
              <p className="text-white">User flow, Mock-ups
              & Prototypes</p>
            </div>
          </div>

          {/* Architecture, Coding */}
          <div className="flex flex-col items-center mb-16">
            <div className="h-8 md:h-16 border-l border-dashed border-green-700"></div>
            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-black"></div>
            <div className="mt-8 text-center">
              <p className="text-white">Architecture, Coding</p>
            </div>
          </div>

          {/* Deployment plan */}
          <div className="flex flex-col items-center mb-16">
            <div className="h-8 md:h-16 border-l border-dashed border-green-700"></div>
            <div className="w-10 h-10 rounded-full border-2 border-green-700 flex items-center justify-center bg-black"></div>
            <div className="mt-8 text-center">
              <p className="text-white">Deployment Plan</p>
            </div>
          </div>

          {/* Feedback loops */}
          {!isMobile && (
            <>
              <div className="absolute left-3/10 top-1/3 transform -translate-x-1/2">
                <div>
                  <RefreshCcw className="w-8 h-8 mb-16 text-white" />
                </div>
              </div>
              <div className="absolute left-7/10 top-1/3 transform -translate-x-1/2">
                <div>
                  <RefreshCcw className="w-8 h-8 mb-16 text-white" />
                </div>
              </div>

              {/* Feedback loop labels */}
              <div className="absolute left-3/10 top-1/2 transform -translate-x-1/2 text-center w-40">
                <p className="text-sm text-white mr-6">
                  Client Feedback
                  <br />
                  Internal Review
                </p>
              </div>
          
            </>
          )}
        </div>
      </div>
    </div>
  )
}
