import { User2, Code2, Lightbulb } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";

const aboutSections = [
  {
    icon: User2,
    title: "Who I Am",
    description: [
      "A full-stack software engineer passionate about backend architecture and data systems.",
      "Experienced in designing scalable web apps and orchestrating cloud data pipelines.",
      "A lifelong seeker of clarity, resilience, and growth in both code and life.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "What I Do",
    description: [
      "Develop high-performance web apps using modern JavaScript/TypeScript and React.",
      "Build scalable data workflows using SQL, Azure Data Factory, Databricks, and PySpark.",
      "Design reliable microservices and design systems focused on clean, optimized code.",
    ],
    color: "bg-teal-600",
  },
  {
    icon: GoGoal,
    title: "My Goals",
    description: [
      "Live with a full heart, dedicating my full energy to my craft, relationships, and self-mastery.",
      "Approach every challenge with courage, gratitude, and purpose.",
      "Build products that leave a lasting positive impact, so I can depart with a smile and no regrets.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "My Philosophy",
    description: [
      "Amor Fati: Embrace whatever comes with grace, turning obstacles into stepping stones.",
      "Control what is within; accept and let go of what is outside your control.",
      "Inner peace is the source of outer excellence. Code with clarity, live with presence.",
    ],
    color: "bg-orange-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>About Me</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16 text-center">
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Hey there! 👋 I'm <span className="text-blue-600 font-semibold">Dev Panchal</span>,
            a Software Engineer with expertise in full-stack development and experience building cloud data pipelines and BI reporting systems. Proficient in Python, JavaScript, Node.js, React.js, SQL, Azure Data Factory, Databricks, and PySpark. Passionate about system design, scalable architecture, and shipping features end-to-end.
          </p>

          <div className="mt-6 flex justify-center">
            <span className="text-sm sm:text-base inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg shadow">
              🚀 I design scalable systems and build end-to-end solutions
            </span>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSections.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
