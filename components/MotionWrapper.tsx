// filepath: c:\Users\aojha\OneDrive\Desktop\Cohort 3.0 Web Dev\portfolio-website\components\MotionWrapper.tsx
"use client";

import { motion } from "framer-motion";

export default function MotionWrapper({ children, ...props }: any) {
  return (
    <motion.main {...props}>
      {children}
    </motion.main>
  );
}