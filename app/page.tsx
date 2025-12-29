export default function Home() {
  return (
    <main className="font-mono p-20">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[100px]">Femin Justin</h1>
        <h2 className="text-[50px]">Frontend Engineer (React)</h2>
      </div>

      <div className="py-8">
        <p>
          Frontend developer with 5+ years of experience building
          production-ready web applications using React and modern JavaScript.
          Currently learning and building using Python.
        </p>
        <div className="flex gap-4">
          <button className="my-4 py-2 px-4 border-2 border-white text-white rounded-xl">
            <a href="/resume.pdf" target="_blank">
              Download Resume
            </a>
          </button>
          <button className="my-4 py-2 px-4 bg-white text-black rounded-xl">
            <a href="https://www.linkedin.com/in/feminjustin/" target="_blank">
              LinkedIn
            </a>
          </button>
          <button className="my-4 py-2 px-4 bg-white text-black rounded-xl">
            <a href="https://github.com/fjp-pjf" target="_blank">
              GitHub
            </a>
          </button>
        </div>
      </div>

      <div className="py-8">
        <h3 className="text-[24px] py-2">Skills</h3>
        <ul className="flex gap-4 list-none">
          <li>• React.js</li>
          <li>• Next.js</li>
          <li>• JavaScript</li>
          <li>• Python</li>
          <li>• Typescript</li>
          <li>• HTML, CSS</li>
          <li>• REST APIs</li>
          <li>• Git</li>
          <li>• UI Libraries</li>
          <li>• Tailwind CSS</li>
        </ul>
      </div>

      <div className="py-8">
        <h3 className="text-[24px] py-4">Professional Experience</h3>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className="border border-gray-200 rounded-lg p-5"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-medium">{exp.role}</h3>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-gray-600">
                  {exp.company} · {exp.location}
                </p>

                <ul className="mt-3 list-disc ml-5 text-sm space-y-1">
                  {exp.bullets.map((point, idx) => (
                    <li className="p-2" key={idx}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

interface experiences {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

const experiences: experiences[] = [
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
