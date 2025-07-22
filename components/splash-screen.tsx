"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"

export function SplashScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center text-white"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="bg-white/20 p-6 rounded-full mb-6 mx-auto w-24 h-24 flex items-center justify-center"
        >
          <GraduationCap className="h-12 w-12" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          GrowGrad
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl opacity-90"
        >
          Bridging Students to Industry, One Visit at a Time
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 1 }}
          className="h-1 bg-white/30 rounded-full mt-8 max-w-xs mx-auto overflow-hidden"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
            className="h-full bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
