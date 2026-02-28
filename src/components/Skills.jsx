export default function Skills() {
  const skillCategories = {
    "Languages": [
      "TypeScript", "Python", "C", "C++", "JavaScript", "Java"
    ],

    "Frontend": [
      "React", "Tailwind", "HTML", "CSS", "Figma"
    ],

    "Backend & APIs": [
      "Node.js", "Express", "Django",
      "REST APIs", "OpenAPI/Swagger",
      "RabbitMQ"
    ],

    "Cloud & Infrastructure": [
      "AWS Lambda", "API Gateway", "S3", "ECR",
      "Docker", "Terraform",
      "Azure", "Firebase",
      "CI/CD"
    ],

    "Data & Databases": [
      "PostgreSQL", "Firebase",
      "Azure Blob Storage", "Amazon S3",
      "TSV/JSON",
      "Schema Validation",
      "Data Transformation",
      "Synthetic Data Generation"
    ],

    "Testing & Tooling": [
      "Jest", "TDD",
      "Integration Testing", "Coverity",
      "GitHub", "GitLab", "Bitbucket",
      "Jira", "Agile", "Scrum",
      "Visual Studio", "VS Code"
    ]
  }

  return (
    <section id="skills" className="py-20 px-6 bg-slate-950">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">
        Technical Skills
      </h2>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
              {category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span
                  key={skill}
                  className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}