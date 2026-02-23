export default function Home() {
  return (
    <main className="font-mono px-6 py-10 md:px-16 md:py-20 max-w-7xl mx-auto">
      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold">
          Femin Justin
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl mt-4">
          Frontend Engineer (React)
        </h2>

        <p className="mt-8 max-w-2xl text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Frontend developer with 5+ years of experience building
          production-ready web applications using React and modern JavaScript.
          Currently learning and building using MERN stack.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="/resume.pdf"
            target="_blank"
            className="py-2 px-6 border-2 border-black dark:border-white rounded-xl hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/feminjustin/"
            target="_blank"
            className="py-2 px-6 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:opacity-80 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/fjp-pjf"
            target="_blank"
            className="py-2 px-6 bg-black text-white dark:bg-white dark:text-black rounded-xl hover:opacity-80 transition"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-12 md:py-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Skills
        </h3>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-sm sm:text-base">
          {[
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "JavaScript",
            "TypeScript",
            "HTML & CSS",
            "REST APIs",
            "UI Libraries",
            "Tailwind CSS",
            "PostgreSQL",
            "Python",
            "Git",
            "Claude code",
            "Cursor"
          ].map((skill) => (
            <li
              key={skill}
              className="bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg text-center"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* EXPERIENCE */}
      <section className="py-12 md:py-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-10 text-center">
          Professional Experience
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between items-start gap-4">
                <h4 className="text-lg font-semibold">{exp.role}</h4>
                <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {exp.company} · {exp.location}
              </p>

              <ul className="mt-4 list-disc ml-5 text-sm space-y-2">
                {exp.bullets.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Synup",
    location: "Bengaluru",
    period: "Jul 2024 – Present",
    bullets: [
      "Built core SaaS features using React.js and TypeScript, improving platform stability and UX",
      "Led development of the Share of Voice dashboard with rich UI interactions and performance visualizations",
      "Owned frontend for a drag-and-drop email campaign builder with CRM data integration",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "programming.com",
    location: "Remote",
    period: "Jan 2024 – Jul 2024",
    bullets: [
      "Built responsive web applications using Next.js, React, and Tailwind CSS",
      "Integrated REST APIs with a Python backend to improve performance and data flow",
      "Converted Figma designs into reusable, production-ready UI components",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "BugBase",
    location: "Remote",
    period: "Oct 2022 – Dec 2023",
    bullets: [
      "Developed a cybersecurity SaaS platform using Next.js, Node.js, and Express.js",
      "Collaborated directly with the CTO to deliver secure, scalable frontend features",
      "Built internal tools including an HR management portal and contributed to CI/CD workflows",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Integerhouse",
    location: "Bengaluru",
    period: "Feb 2021 – Jun 2022",
    bullets: [
      "Converted Figma designs into responsive React and TypeScript applications",
      "Implemented CRUD features with REST APIs across Node.js, Python, and Firebase",
      "Worked cross-functionally to align UI/UX and improve frontend–backend coordination",
    ],
  },
];
