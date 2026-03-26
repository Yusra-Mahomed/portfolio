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
    <section id="skills" className="py-32 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="mb-20">
          <p className="text-blue-400 uppercase tracking-widest text-sm mb-3">
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools & technologies I use
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {Object.entries(skillCategories).map(([category, skills]) => (
            <div
              key={category}
              className="border border-white/10 rounded-2xl p-6 
              hover:border-blue-400/30 transition"
            >

              {/* Category */}
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">
                {category}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs text-slate-300 px-3 py-1 rounded-md 
                    border border-white/10 bg-white/5
                    hover:border-blue-400/40 hover:text-white transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}