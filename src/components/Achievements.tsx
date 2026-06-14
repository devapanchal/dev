import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Award, Code2, Globe } from 'lucide-react';

const achievements = [
  {
    title: 'Hacktoberfest Top 1K',
    role: 'Open Source Contributor',
    description: 'Contributed to open source software projects and ranked among the top 1,000 contributors globally.',
    icon: Globe,
    color: 'from-orange-500 to-red-500',
    glowColor: 'rgba(239, 68, 68, 0.15)',
  },
  {
    title: '1000+ DSA Problems Solved',
    role: 'Competitive Programmer',
    description: 'Solved 1000+ algorithmic problems across LeetCode, GeeksforGeeks, and Codeforces. Best LeetCode Contest Rank: 2016.',
    icon: Code2,
    color: 'from-blue-500 to-indigo-500',
    glowColor: 'rgba(59, 130, 246, 0.15)',
  },
  {
    title: 'HackerRank Certified',
    role: 'Skills Verification',
    description: 'Successfully verified skills and earned certificates in JavaScript, REST APIs, and Problem Solving.',
    icon: Award,
    color: 'from-teal-500 to-emerald-500',
    glowColor: 'rgba(16, 185, 129, 0.15)',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle>Key Achievements</SectionTitle>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="relative group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700/80 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:border-blue-500/30 dark:hover:border-blue-400/30"
              >
                {/* Glow Background */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `0 10px 30px -10px ${item.glowColor}` }}
                />

                <div className="flex flex-col items-center text-center">
                  {/* Icon Wrapper */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1 mb-3">
                    {item.role}
                  </span>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
