"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Certification() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center justify-center border border-blue-900 text-white p-4 sm:p-6 md:p-8">
      <motion.div
        className="w-full max-w-md mx-auto rounded-xl overflow-hidden shadow-2xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <motion.div
          className="bg-gradient-to-r from-green-600 to-emerald-500 p-4 sm:p-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white">My Certification</h1>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-gray-800 border-2 border-green-500/20 p-5 sm:p-6 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-4 text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            I don&apos;t believe in certifications and any degrees.
          </motion.p>

          <motion.p
            className="text-gray-300 text-sm sm:text-base text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Real-world skills and practical experience speak louder than paper credentials.
          </motion.p>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="bg-gray-800 border-t border-green-500/30 p-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <span className="text-green-400 text-sm">Skills over certificates</span>
        </motion.div>

        {/* Animated border effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl opacity-20"
          style={{
            background: "linear-gradient(90deg, #059669, #10b981, #059669)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 3,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  )
}
