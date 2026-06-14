import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiOpenai,
  SiDocker,
  SiDatabricks,
} from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import { BarChart3 } from 'lucide-react';

// Define reusable tech stack icons & colors
const techStacks = {
  next: { icon: SiNextdotjs, name: "Next.js", color: '#000000' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  express: { icon: SiExpress, name: "Express.js", color: '#000000' },
  postgresql: { icon: SiPostgresql, name: "PostgreSQL", color: '#4169e1' },
  redis: { icon: SiRedis, name: "Redis", color: '#d82c20' },
  openai: { icon: SiOpenai, name: "OpenAI API", color: '#00a67e' },
  docker: { icon: SiDocker, name: "Docker", color: '#2496ed' },
  azure: { icon: VscAzure, name: "Azure Data Factory", color: '#0089d6' },
  databricks: { icon: SiDatabricks, name: "Databricks", color: '#ff3621' },
  pyspark: { icon: FaPython, name: "PySpark/Python", color: '#3776ab' },
  powerbi: { icon: BarChart3, name: "Power BI", color: '#f2c811' },
};

// Define projects data
const projects = [
  {
    title: 'LuminaPath AI',
    description: 'An AI-powered learning platform featuring adaptive courses, AI career roadmaps, ATS resume analysis, and mock interviews. Built with Next.js, Express, PostgreSQL with normalized schema, Redis caching, JWT auth, and containerized with Docker.',
    image: '/assets/luminapath.png',
    github: 'https://github.com/devpanchal007/LuminaPath-AI',
    techStack: [
      techStacks.next,
      techStacks.typescript,
      techStacks.express,
      techStacks.postgresql,
      techStacks.redis,
      techStacks.openai,
      techStacks.docker,
    ],
  },
  {
    title: 'Azure Spotify ETL Pipeline',
    description: 'An end-to-end cloud data pipeline ingesting Spotify datasets via REST APIs into ADLS Gen2, orchestrating PySpark transformations through Azure Data Factory and Databricks, and producing analytics-ready datasets for Power BI dashboards using Medallion Architecture.',
    image: '/assets/spotify_etl.png',
    github: 'https://github.com/devpanchal007/Spotify-ETL-Pipeline',
    techStack: [
      techStacks.azure,
      techStacks.databricks,
      techStacks.pyspark,
      techStacks.postgresql, // generic database reference
      techStacks.powerbi,
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projects</SectionTitle>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
