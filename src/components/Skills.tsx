import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { SkillCard } from "./ui/SkillCard";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiTailwindcss, SiCplusplus,
  SiGit, SiGithub, SiPostman, SiNextdotjs, SiExpo, SiRedux, SiReactquery, SiTrpc,
  SiNodedotjs, SiExpress, SiFastapi, SiDocker, SiPostgresql, SiMongodb, SiMysql,
  SiRedis, SiNeo4J, SiOpenai, SiDatabricks
} from "react-icons/si";
import { FaPython, FaAws, FaBrain } from "react-icons/fa";
import { TbBrandAzure } from "react-icons/tb";
import { BarChart3 } from "lucide-react";

const row1Skills = [
  { name: "Python", icon: FaPython, color: "#306998", url: "https://www.python.org/" },
  { name: "JavaScript", icon: SiJavascript, color: "#ffd600", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", url: "https://www.typescriptlang.org/" },
  { name: "C/C++", icon: SiCplusplus, color: "#00599c", url: "https://cplusplus.com/" },
  { name: "HTML5", icon: SiHtml5, color: "#e34f26", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", icon: SiCss3, color: "#1572b6", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", url: "https://nextjs.org/" },
  { name: "React", icon: SiReact, color: "#61dafb", url: "https://react.dev/" },
  { name: "React Native", icon: SiReact, color: "#61dafb", url: "https://reactnative.dev/" },
  { name: "Expo", icon: SiExpo, color: "#000020", url: "https://expo.dev/" },
  { name: "Redux", icon: SiRedux, color: "#764abc", url: "https://redux.js.org/" },
  { name: "TanStack Query", icon: SiReactquery, color: "#ff4154", url: "https://tanstack.com/query" },
  { name: "tRPC", icon: SiTrpc, color: "#390870", url: "https://trpc.io/" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#38bdf8", url: "https://tailwindcss.com/" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", url: "https://nodejs.org/" },
  { name: "Express", icon: SiExpress, color: "#000000", url: "https://expressjs.com/" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688", url: "https://fastapi.tiangolo.com/" },
  { name: "Docker", icon: SiDocker, color: "#2496ed", url: "https://www.docker.com/" },
];

const row2Skills = [
  { name: "AWS", icon: FaAws, color: "#ff9900", url: "https://aws.amazon.com/" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1", url: "https://www.postgresql.org/" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248", url: "https://www.mongodb.com/" },
  { name: "MySQL", icon: SiMysql, color: "#4479a1" },
  { name: "Redis", icon: SiRedis, color: "#d82c20" },
  { name: "DynamoDB", icon: FaAws, color: "#4053d6" },
  { name: "Neo4j", icon: SiNeo4J, color: "#008cc1" },
  { name: "LangChain", icon: SiOpenai, color: "#1a73e8" },
  { name: "LLMs & RAG", icon: SiOpenai, color: "#00a67e" },
  { name: "System Design", icon: FaBrain, color: "#6366f1" },
  { name: "Data Structures & Algorithms", icon: FaBrain, color: "#8b5cf6" },
  { name: "Azure Data Factory", icon: TbBrandAzure, color: "#0089d6" },
  { name: "Databricks", icon: SiDatabricks, color: "#ff3621" },
  { name: "PySpark", icon: FaPython, color: "#e38b00" },
  { name: "Power BI", icon: BarChart3, color: "#f2c811" },
  { name: "Git", icon: SiGit, color: "#f34f29" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle>Skills</SectionTitle>

        <div className="max-w-6xl mx-auto mt-10 space-y-8 pause-on-hover">
          {/* Row 1: Gliding Left */}
          <div className="relative flex overflow-hidden w-full mask-gradient">
            <div className="flex gap-6 py-4 w-max animate-scroll-left">
              {[...row1Skills, ...row1Skills].map((tech, idx) => (
                <div key={idx} className="w-[120px] sm:w-[150px] flex-shrink-0">
                  <SkillCard name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Gliding Right */}
          <div className="relative flex overflow-hidden w-full mask-gradient">
            <div className="flex gap-6 py-4 w-max animate-scroll-right">
              {[...row2Skills, ...row2Skills].map((tech, idx) => (
                <div key={idx} className="w-[120px] sm:w-[150px] flex-shrink-0">
                  <SkillCard name={tech.name} icon={tech.icon} color={tech.color} url={tech.url} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}