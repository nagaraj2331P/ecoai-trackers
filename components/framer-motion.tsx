
"use client";
import { motion } from "framer-motion";
export default function SideAnimations()
{
  return (
    <>
      {/* Left floating leaf */}
      <motion.div
        className="fixed left-0 top-1/3 w-16 h-16 bg-green-400 rounded-full opacity-70 z-10"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Right floating circle */}
      <motion.div
        className="fixed right-0 bottom-1/4 w-12 h-12 bg-green-300 rounded-full opacity-60 z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </>
  );
}

 