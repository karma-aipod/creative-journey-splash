import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import { MorphingText } from "@/components/ui/morphing-text";

const Journey = () => {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="coding setup"
              className="rounded-lg object-cover w-full h-40 mb-2"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Development Environment Setup</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="code editor"
              className="rounded-lg object-cover w-full h-40 mb-2"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Code Architecture Design</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="development"
              className="rounded-lg object-cover w-full h-40 mb-2"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Feature Implementation</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
              alt="workspace"
              className="rounded-lg object-cover w-full h-40 mb-2"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Workspace Optimization</p>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="coding"
              className="rounded-lg object-cover w-full h-40 mb-2"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Learning React Patterns</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
              alt="development"
              className="rounded-lg object-cover w-full h-40 mb-2"
            />
            <p className="text-sm text-neutral-700 dark:text-neutral-300">Animation Implementation</p>
          </motion.div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div className="grid grid-cols-1 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-neutral-900 p-4 rounded-lg shadow-lg cursor-pointer"
          >
            <h3 className="text-lg font-semibold mb-4">Key Achievements</h3>
            <div className="space-y-2">
              <p className="text-neutral-700 dark:text-neutral-300">✅ Mastered React and TypeScript</p>
              <p className="text-neutral-700 dark:text-neutral-300">✅ Built multiple production applications</p>
              <p className="text-neutral-700 dark:text-neutral-300">✅ Learned advanced animation techniques</p>
              <p className="text-neutral-700 dark:text-neutral-300">✅ Contributed to open source projects</p>
            </div>
          </motion.div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="relative w-full mb-12">
        <MorphingText
          texts={["My Journey", "My Story", "My Path"]}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Changelog from my journey
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div className="relative -mx-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 py-12">
        <VelocityScroll 
          text="DEVELOPMENT JOURNEY THROUGH THE YEARS" 
          default_velocity={3}
          className="text-4xl font-bold text-neutral-800 dark:text-neutral-200"
        />
      </div>

      <div className="relative w-full mt-12">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
};

export default Journey;