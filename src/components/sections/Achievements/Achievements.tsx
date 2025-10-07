import React from "react";
import { motion, easeOut } from "framer-motion";
import {
  IconTrophy,
  IconCode,
  IconAward,
  IconUsers,
} from "@tabler/icons-react";

interface Achievement {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgGradient: string;
  year?: string;
  metric?: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "WOW Award Winner",
    category: "Recognition",
    description:
      "Received the prestigious WOW Award from Sapiens for outstanding performance and exceptional contributions to the team",
    icon: <IconAward className="w-8 h-8" />,
    color: "text-yellow-400",
    bgGradient: "from-yellow-500/20 to-orange-500/20",
    year: "2024",
    metric: "Top Performer",
  },
  {
    id: 2,
    title: "DSA Problem Solver",
    category: "Problem Solving",
    description:
      "Successfully solved 900+ Data Structures and Algorithms problems across LeetCode and GeeksForGeeks platforms",
    icon: <IconCode className="w-8 h-8" />,
    color: "text-green-400",
    bgGradient: "from-green-500/20 to-emerald-500/20",
    metric: "900+ Problems",
  },
  {
    id: 3,
    title: "Webathon Champion",
    category: "Competitions",
    description:
      "Won 2nd prize at General Championship Webathon organized by IIT Bhubaneswar, showcasing exceptional web development skills",
    icon: <IconTrophy className="w-8 h-8" />,
    color: "text-purple-400",
    bgGradient: "from-purple-500/20 to-pink-500/20",
    metric: "2nd Place",
  },
  {
    id: 4,
    title: "Sponsorship Lead",
    category: "Leadership",
    description:
      "Served as Core Head of Sponsorship team for Alma Fiesta, IIT Bhubaneswar's premier socio-cultural festival",
    icon: <IconUsers className="w-8 h-8" />,
    color: "text-blue-400",
    bgGradient: "from-blue-500/20 to-cyan-500/20",
    metric: "Team Leader",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const AchievementCard: React.FC<{
  achievement: Achievement;
  index: number;
}> = ({ achievement }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      className="relative group"
    >
      <div
        className={`
        relative p-8 rounded-2xl backdrop-blur-md border border-white/10
        bg-gradient-to-br ${achievement.bgGradient}
        shadow-2xl hover:shadow-3xl transition-all duration-500
        transform perspective-1000
      `}
      >
        {/* Floating Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className={`
            inline-flex p-4 rounded-full mb-6
            bg-gradient-to-r from-white/10 to-white/5
            ${achievement.color}
            backdrop-blur-sm border border-white/20
          `}
        >
          {achievement.icon}
        </motion.div>

        {/* Category Badge */}
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/80 backdrop-blur-sm">
            {achievement.category}
          </span>
          {achievement.year && (
            <span className="text-sm font-medium text-white/60">
              {achievement.year}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
          {achievement.title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-base leading-relaxed mb-6">
          {achievement.description}
        </p>

        {/* Metric */}
        {achievement.metric && (
          <div className="flex items-center justify-between">
            <span
              className={`
              text-lg font-bold ${achievement.color}
              px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm
            `}
            >
              {achievement.metric}
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm"
            >
              <div className="w-4 h-4 rounded-full bg-gradient-to-r from-white/50 to-white/20" />
            </motion.div>
          </div>
        )}

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(45deg, transparent, ${achievement.color.replace(
              "text-",
              ""
            )}, transparent)`,
            padding: "2px",
            borderRadius: "1rem",
          }}
        >
          <div className="w-full h-full rounded-2xl bg-black/50 backdrop-blur-md" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="relative py-20 px-5 sm:px-10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6"
            whileInView={{
              backgroundPosition: ["0%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Achievements
          </motion.h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Milestones that showcase my dedication to excellence, continuous
            learning, and impactful contributions in technology and leadership.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-sm text-white/60">Major Achievements</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">900+</div>
              <div className="text-sm text-white/60">Problems Solved</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">WOW</div>
              <div className="text-sm text-white/60">Award Winner</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
