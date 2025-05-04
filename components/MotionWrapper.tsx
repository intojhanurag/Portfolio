// filepath: c:\Users\aojha\OneDrive\Desktop\Cohort 3.0 Web Dev\portfolio-website\components\MotionWrapper.tsx
"use client";

import { motion, MotionProps } from "framer-motion";
import { HTMLAttributes } from "react";


type Props = MotionProps & HTMLAttributes<HTMLDivElement>;
export default function MotionWrapper({ children, ...props }: Props) {
  return (
    <motion.main {...props}>
      {children}
    </motion.main>
  );
}