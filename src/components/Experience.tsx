import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Software Engineer",
    company: "Diskovalist Inc",
    period: "Sep 2025 - Jun 2026",
    description: `Designed and optimized design and backend systems using Node.js, Express, and MySQL.
    Integrated Redis caching layer to reduce database load and improve API response latency.
    Collaborated with remote cross-functional teams to develop and deploy scalable microservices.
    Ensured application responsiveness, performance, and security across distributed environments.`,
    skills: ["MySQL", "Redis", "Node.js", "Express.js", "MongoDB", "TypeScript", "React", "Docker"],
  },
  {
    title: "MERN Stack Developer (Intern)",
    company: "Wellfounded IT Solution Pvt. Ltd.",
    period: "Jun 2025 - Aug 2025",
    description: `Built and optimized design systems using React.js, achieving 90+ Lighthouse score and 100 SEO score.
    Developed 50+ reusable UI components and real-time dashboards using Tailwind CSS, Shadcn/UI, and state management.`,
    skills: ["React", "Node.js", "Tailwind CSS", "Shadcn/UI", "MongoDB", "Express.js", "TypeScript"],
  },
  {
    title: "Web Development Lead",
    company: "College Tech Club",
    period: "Aug 2024 - Present",
    description: `Led a dedicated team of 4 developers in designing and creating the college event management platform. 
    Successfully launched a scalable event platform used by 1000+ students, improving event organization. 
    Mentored and guided 4 junior developers in modern full-stack web technologies and best coding practices.`,
    skills: ["Next.js", "PostgreSQL", "Git", "TailwindCSS", "Team Leadership"],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Cyberxield Solutions",
    period: "Jan 2024 - Feb 2024",
    description: `Developed and maintained dynamic web applications using the MERN stack for seamless user experience. 
    Designed and developed a real-time interactive dashboard that significantly increased user engagement by 40%. 
    Implemented responsive web design principles, ensuring an optimal mobile-friendly user experience.`,
    skills: ["React", "Node.js", "MongoDB", "Express.js", "TypeScript"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
