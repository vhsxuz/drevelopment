import Image from "next/image"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export const metadata = {
  title: "Resume, Andreas Alexander",
  description: "Experience, projects, education, certifications, and skills of Andreas Alexander, an engineer in Jakarta.",
}

const about = "Engineer who owns the full engagement lifecycle, from understanding client problems to designing, demoing, and delivering solutions users actually adopt. I build software that creates real impact: GIS and geospatial intelligence platforms driving retail and government decision-making, investment features used by millions on e-commerce, and operational systems that replace manual workflows for growing businesses. I bridge the technical and the practical fluently, hands-on implementing SuperMap and ESRI GIS platforms, CI/CD deployment pipelines, and cloud infrastructure on Alibaba Cloud for production client environments. Backed by a strong security mindset and published CVE research, I thrive where technical delivery and business outcomes go hand in hand."

// Shown under the page title. The full `about` text is kept above for the CV.
const aboutShort = "Engineer who owns the full engagement lifecycle, from understanding client problems to designing, demoing, and delivering solutions users actually adopt."

// Set to true to list the bullet points under each job again.
const showExperiencePoints = false

const experience = [
  {
    company: "Secure Pasifik Teknologi",
    location: "Jakarta",
    position: "System Engineer (Seciron MAST & OpenText Fortify)",
    duration: "August 2026 to current",
    points: [
      "Integrated OpenText Fortify SAST and DAST scans into client CI/CD pipelines, scripting automated security checks that validate each build before release.",
      "Delivered solution overview presentations to clients and partners, explaining application security capabilities in both technical and business terms.",
      "Conducted product demonstrations and hands-on walkthroughs for stakeholders, validating results against their requirements and gathering feedback.",
      "Documented the end-to-end implementation of a mobile application security project for a government institution.",
      "Provided technical support during the maintenance period, troubleshooting and resolving platform issues for users.",
      "Developed project plans and timelines for implementation engagements, defining milestones and deliverables to keep deployments on schedule.",
    ],
  },
  {
    company: "Blue Power Technology (CTI Group)",
    location: "Jakarta",
    position: "Software Developer, GIS (SuperMap & ESRI Platform)",
    duration: "October 2024 to July 2026",
    points: [
      "Build and ship SuperMap and ESRI-based GIS applications end-to-end for retail and government clients, translating user needs into reliable, map-driven products.",
      "Own full-lifecycle project delivery: gather requirements, define project timelines and Statements of Work (SOW), conduct solution demos, facilitate User Acceptance Testing (UAT), and elaborate in knowledge transfer sessions for user handover.",
      "Elaborate in post-sales implementation activities including platform installation, infrastructure sizing, CI/CD pipeline setup for production deployment, and ongoing maintenance.",
      "Own end-to-end maintenance for government GIS applications generating IDR 750 million in revenue: triage and fix defects, manage license expansions, drive codebase remediation, write technical documentation, and elaborate in internal knowledge-sharing to upskill the team.",
      "Developed a geospatial portal for a government intelligence agency (IDR 300 million revenue) using Node.js and Python, integrating spatial data from heterogeneous sources, including Esri ArcMap and Eternix Blaze Terra into a unified platform with a project/data catalog, daily data gallery for weekly picket schedules, and a quick-access hub for ArcGIS and Blaze Terra tools.",
      "Develop location-intelligence solutions that turn geospatial data into decisions, covering site selection, coverage analysis, and regional insights.",
      "Deliver mobile logistics tools for on-premise vehicle navigation and fleet efficiency within private facilities.",
    ],
  },
  {
    company: "Levels Living",
    location: "Singapore",
    position: "Software Developer",
    duration: "March 2024 to May 2024",
    points: [
      "Built an internal e-commerce operations portal that gives the team a single interface to manage product listings and track orders across e-commerce storefronts, eliminating the need to switch between platforms manually.",
      "Designed the system to consolidate multi-channel order fulfillment into one unified view, reducing operational overhead and the risk of missed or duplicated orders across sales channels.",
      "Delivered the portal as a fully production-ready system with secure VPS hosting, SSL encryption, and scalable frontend deployment which was built to support the team's long-term growth without requiring infrastructure changes.",
    ],
  },
  {
    company: "Blibli.com",
    location: "Jakarta",
    position: "iOS Developer",
    duration: "February 2023 to February 2024",
    points: [
      "Extended Blibli's in-app financial investment feature, enabling millions of active users to invest in digital gold and reksa dana directly within the Blibli iOS app that deepened the platform's role beyond e-commerce into everyday personal finance.",
      "Researched and developed an internal CoreML-powered tool to automatically detect and remove duplicate and unused image assets across the codebase, reducing app bloat and improving the development team's asset management workflow.",
    ],
  },
  {
    company: "Binus University",
    location: "Jakarta",
    position: "Laboratory Assistant",
    duration: "August 2021 to February 2022",
    points: [
      "Guided undergraduate students through foundational programming concepts in C and object-oriented design principles through Framework Layer Architecture (FLA) in Java language, helping build their core engineering mindset.",
      "Designed examination cases for SQL and Data Structure modules, and evaluated student submissions for the FLA course directly contributing to the academic assessment quality for 30+ students.",
    ],
  },
]

const education = {
  institution: "Binus University",
  degree: "Bachelor of Computer Science",
  duration: "September 2020 to November 2024",
  points: [
    "Graduated with a 3.76 GPA (Magna Cum Laude).",
    "Thesis: Quan C, Development of a Secure Programming Learning Platform, an interactive application that trains developers to write more secure code through hands-on vulnerability challenges.",
    "Active member of Himpunan Mahasiswa Teknik Informatika (HIMTI), the Informatics Engineering student association for 1 year.",
    "Served as a Freshmen Leader, mentoring and guiding new students during their transition into university.",
  ],
}

const projects = [
  {
    title: "ESRI GIS Project",
    client: "Government Agency (Confidential)",
    date: "March 2026",
    points: [
      "Collaborated with end users through partner Argapana to gather and analyze requirements, mapping business processes and identifying key pain points.",
      "Designed tailored solution architectures aligned with user requirements and operational workflows.",
      "Developed an Intelligence Geographical Information System (IGIS) with a Python FastAPI backend and ReactJS frontend, integrated with the ESRI GIS platform.",
      "Conducted solution demonstrations and walkthroughs for stakeholders to validate outcomes and gather feedback.",
    ],
  },
  {
    title: "Supermap GIS Project",
    client: "Government Agency (Confidential)",
    date: "July 2025",
    points: [
      "Conducting SuperMap GIS solution POC to stakeholders through partner Visindo Prima Nusantara (VPN).",
      "Gathered and analyzed user requirements to define project scope aligned with business needs.",
      "Developed the project timeline and Statement of Work (SOW) to establish clear deliverables and milestones.",
      "Elaborated in post-sales activities, including SuperMap platform installation, system remediation, and environment setup.",
      "Set up CI/CD pipelines to automate deployment to the production server.",
      "Conducted solution demonstrations to validate features against user requirements.",
      "Prepared implementation progress reports and facilitated User Acceptance Testing (UAT) with stakeholders.",
      "Delivered knowledge transfer sessions to ensure smooth handover and user adoption.",
    ],
  },
  {
    title: "Security Awareness Platform Project",
    image: "/assets/work/security-awareness-sample.png",
    imageAlt: "Sample phishing simulation page: a sign-up form for a made-up company called NovaWorks",
    imageNote: "A sample simulation page, not the client's.",
    width: 1646,
    height: 956,
    client: "Banking (Confidential)",
    date: "July 2024",
    points: [
      "Developed the frontend of a phishing simulation platform for a banking client using ReactJS, with a Python backend, to support internal security awareness training.",
      "Built interactive simulation interfaces that replicated realistic phishing scenarios to test employee awareness and identify susceptible users.",
      "Delivered a solution that successfully flagged employees who fell for simulated phishing attempts, providing the client with actionable insight for targeted security training.",
    ],
  },
  {
    title: "Common Vulnerabilities and Exposures (CVE)",
    client: "CVE-2023-45996",
    href: "https://nvd.nist.gov/vuln/detail/CVE-2023-45996",
    date: "October 2023, severity high (8.8)",
    points: [
      "Discovered and reported a SQL injection vulnerability (CWE-89) in Senayan Library Management System (SLiMS) v9 and Bulian v9.6.1, an open-source library management platform.",
      "Identified that the reborrowLimit parameter in member_type.php was improperly sanitized, allowing a remote authenticated attacker to inject crafted SQL queries.",
      "Demonstrated that the flaw could be exploited to extract sensitive database information and achieve arbitrary code execution, using Burp Suite to intercept, craft, and validate malicious payloads.",
      "Responsibly disclosed the finding, which was assigned CVE-2023-45996 and published in the NIST National Vulnerability Database (NVD).",
    ],
  },
  {
    title: "Quan C, Secure Coding Learning Platform",
    image: "/assets/work/quanc-ui.png",
    imageAlt: "Quan C home page: a vulnerable code sample beside a lock diagram showing which attack payloads got in",
    width: 2000,
    height: 1086,
    client: "github.com/ProjectQuanC/quan-c-app",
    href: "https://github.com/ProjectQuanC/quan-c-app/",
    date: "July 2024",
    points: [
      "Designed and developed Quan C, a secure coding learning platform that trains developers to write more secure code through hands-on, gamified vulnerability challenges, as my undergraduate thesis project.",
      "Built an automated challenge validation engine (\"DAST-like\") that executes user-submitted code and tests it against pre-configured payloads to verify whether a solution correctly remediates the target vulnerability.",
      "Implemented core platform features including the secure coding challenge system, real-time leaderboards ranking users by solve speed, and an admin panel for creating and managing challenges.",
      "Delivered the full stack independently using React and TypeScript on the frontend, Node.js/Express, and Python/FastAPI on the backend, containerized with Docker for self-hosted deployment on Microsoft Azure Cloud.",
    ],
  },
]

const certifications = [
  { name: "AI Fluency for Small Businesses", issuer: "Anthropic", date: "July 2026" },
  { name: "Claude 101", issuer: "Anthropic", date: "July 2026" },
  { name: "An Introduction of DevOps", issuer: "Alibaba Cloud", date: "June 2026" },
  { name: "JavaScript (Intermediate)", issuer: "HackerRank", date: "March 2026" },
  { name: "Operate and Manage a Cloud Server", issuer: "Alibaba Cloud", date: "February 2026" },
  { name: "SQL (Advanced)", issuer: "HackerRank", date: "January 2026" },
  { name: "Problem Solving (Basic)", issuer: "HackerRank", date: "January 2026" },
  { name: "Foundations of Cybersecurity", issuer: "Coursera", date: "January 2026" },
  { name: "Supermap Junior WebGIS Engineer", issuer: "SuperMap GIS", date: "September 2025" },
  { name: "Flutter, Mobile App Development", issuer: "SanberCode", date: "May 2025" },
  { name: "Vulcanus: Secure Programming and Offensive code review course", issuer: "Hackrocks", date: "September 2024" },
  { name: "Node.js (Basic)", issuer: "HackerRank", date: "July 2023" },
  { name: "Python (Basic)", issuer: "HackerRank", date: "August 2021" },
  { name: "SQL (Basic)", issuer: "HackerRank", date: "August 2021" },
]

const skills = [
  {
    group: "DevOps and cloud",
    items: ["CI/CD pipelines", "Docker", "Alibaba Cloud", "Microsoft Azure", "VPS hosting and SSL", "Git"],
  },
  {
    group: "Web and mobile",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Node.js", "Express", "Python", "FastAPI", "PHP", "Swift", "CoreML", "Tailwind CSS", "HTML and CSS"],
  },
  {
    group: "GIS",
    items: ["SuperMap", "ESRI ArcGIS"],
  },
  {
    group: "Application security",
    items: ["OpenText Fortify SAST and DAST", "Seciron MAST", "Burp Suite"],
  },
]

const textLink = "underline decoration-accent-default decoration-2 underline-offset-[6px] hover:text-accent-hover transition-colors"
const entryTitle = "text-xl font-bold leading-tight tracking-tight xl:text-2xl"
const tab = "w-auto shrink-0 justify-start rounded-full border border-white/25 bg-transparent px-5 py-2 text-base font-semibold text-white hover:border-accent-default data-[state=active]:border-accent-default data-[state=active]:bg-accent-default data-[state=active]:text-primary data-[state=active]:shadow-none xl:rounded-none xl:border-0 xl:border-l-4 xl:border-transparent xl:px-5 xl:py-2 xl:text-2xl xl:font-extrabold xl:tracking-tight xl:text-white/60 xl:hover:text-white xl:data-[state=active]:border-accent-default xl:data-[state=active]:bg-transparent xl:data-[state=active]:text-accent-default"
const panel = "mt-0 min-h-[26rem] focus-visible:ring-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-accent-hover"

const MONTHS = /January|February|March|April|May|June|July|August|September|October|November|December/g
const shortDate = (text) => text.replace(MONTHS, (month) => month.slice(0, 3)).replace("current", "now")

// Career chart: every job becomes a bar on one shared month scale, so the
// overlap between roles and the length of each one are visible at a glance.
const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthIndex = (label) => {
  const [month, year] = label.split(" ")
  return Number(year) * 12 + MONTH_NAMES.indexOf(month)
}
const buildChart = () => {
  const today = new Date()
  const now = today.getFullYear() * 12 + today.getMonth()
  const spans = experience.map((item) => {
    const [from, to] = item.duration.split(" to ")
    return { start: monthIndex(from), end: to === "current" ? now + 1 : monthIndex(to) + 1 }
  })
  const first = Math.min(...spans.map((span) => span.start))
  const last = Math.max(...spans.map((span) => span.end))
  const percent = (value) => ((value - first) / (last - first)) * 100
  const years = []
  for (let year = Math.ceil(first / 12); year * 12 < last; year++) years.push({ year, left: percent(year * 12) })
  return {
    years,
    bars: spans.map((span) => ({ left: percent(span.start), width: percent(span.end) - percent(span.start) })),
  }
}

// "System Engineer (Seciron MAST)" -> role "System Engineer", focus "Seciron MAST"
const splitPosition = (position) => {
  const match = position.match(/^(.*?)\s*\((.*)\)$/)
  return match ? { role: match[1], focus: match[2] } : { role: position, focus: null }
}

// Certificates grouped under who issued them, keeping newest-first order.
const byIssuer = certifications.reduce((groups, item) => {
  const group = groups.find((entry) => entry.issuer === item.issuer)
  if (group) group.items.push(item)
  else groups.push({ issuer: item.issuer, items: [item] })
  return groups
}, [])

const Points = ({ items }) => {
  return (
    <ul className="mt-4 flex max-w-[44em] list-disc flex-col gap-2 pl-5 text-white/80 marker:text-accent-default">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}

// Bullet points stay out of the way until someone asks for them.
const Details = ({ label, items }) => {
  return (
    <details className="group mt-3">
      <summary className="w-fit cursor-pointer list-none rounded-full border border-white/25 px-4 py-1.5 text-sm transition-colors hover:border-accent-default hover:text-accent-hover [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">Show {label}</span>
        <span className="hidden group-open:inline">Hide {label}</span>
      </summary>
      <Points items={items} />
    </details>
  )
}

const Resume = () => {
  const cve = projects.find((item) => item.client.startsWith("CVE"))
  const otherProjects = projects.filter((item) => item !== cve)
  const chart = buildChart()

  return (
    <div className="container mx-auto pb-16 xl:pb-24">
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 xl:grid-cols-12 xl:items-end">
        <div className="xl:col-span-7">
          <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
            Resume
          </h1>
          <div className="mt-6 flex items-center gap-5">
            <Image
              src="/assets/profile.png"
              priority
              width={144}
              height={144}
              alt=""
              className="h-20 w-20 shrink-0 rounded-full bg-black grayscale xl:h-28 xl:w-28"
            />
            <p className="max-w-[26em] text-lg font-medium leading-snug xl:text-xl xl:leading-snug">{aboutShort}</p>
          </div>
          <p className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            <a href="/documents/CV.pdf" download="CV.pdf" className={textLink}>Download CV (PDF)</a>
            <a href="mailto:drealexander.dev@gmail.com" className={textLink}>drealexander.dev@gmail.com</a>
            <a href="https://www.linkedin.com/in/vincentius-andreas-alexander/" className={textLink}>LinkedIn</a>
          </p>
        </div>

        {/* the one published finding gets the page's single loud block */}
        {cve && (
          <a
            href={cve.href}
            className="block rounded-[28px] rounded-br-md bg-accent-default p-6 text-primary transition-colors hover:bg-accent-hover focus-visible:outline-white xl:col-span-5 xl:p-8"
          >
            <span className="block text-3xl font-extrabold leading-none tracking-[-0.03em] xl:text-4xl">{cve.client}</span>
            <span className="mt-3 block text-lg font-medium leading-snug">
              A SQL injection I found and reported. Severity high (8.8).
            </span>
            <span className="mt-4 block font-semibold underline underline-offset-4">Read the entry on nvd.nist.gov</span>
          </a>
        )}
      </div>

      {/* one section on screen at a time, so the page never becomes a wall of text */}
      <Tabs defaultValue="experience" className="mt-14 grid grid-cols-1 gap-x-8 gap-y-8 xl:mt-20 xl:grid-cols-12">
        <TabsList aria-label="Resume sections" className="-mx-[15px] flex gap-2 overflow-x-auto rounded-none px-[15px] py-1 xl:col-span-4 xl:mx-0 xl:flex-col xl:items-start xl:gap-3 xl:overflow-visible xl:p-0">
          <TabsTrigger value="experience" className={tab}>Experience</TabsTrigger>
          <TabsTrigger value="projects" className={tab}>Projects</TabsTrigger>
          <TabsTrigger value="skills" className={tab}>Skills</TabsTrigger>
          <TabsTrigger value="education" className={tab}>Education</TabsTrigger>
          <TabsTrigger value="certificates" className={tab}>Certificates</TabsTrigger>
        </TabsList>

        <div className="xl:col-span-8">
          <TabsContent value="experience" className={panel}>
            <div className="relative">
              {/* year lines run behind every row */}
              <div aria-hidden="true" className="absolute inset-0">
                {chart.years.map((tick) => (
                  <span key={tick.year} className="absolute inset-y-0 border-l border-white/10" style={{ left: `${tick.left}%` }}>
                    <span className="absolute left-1.5 top-0 text-sm text-white/60">{tick.year}</span>
                  </span>
                ))}
              </div>

              <ol className="relative flex flex-col gap-7 pt-10">
                {experience.map((item, index) => {
                  const current = item.duration.endsWith("current")
                  const { role, focus } = splitPosition(item.position)
                  const bar = chart.bars[index]
                  return (
                    <li key={item.company}>
                      <div aria-hidden="true" className="h-3 rounded-full bg-white/10">
                        <div
                          className={`h-3 min-w-3 rounded-full ${current ? "bg-accent-default" : "bg-white"}`}
                          style={{ marginLeft: `${bar.left}%`, width: `${bar.width}%` }}
                        />
                      </div>
                      <div className="mt-3 flex flex-col gap-x-8 sm:flex-row sm:items-baseline sm:justify-between">
                        <h2 className={entryTitle}>{role}</h2>
                        <p className="shrink-0 text-white/70">{shortDate(item.duration)}</p>
                      </div>
                      <p className="mt-1 font-medium">
                        {item.company}, {item.location}
                        {focus && <span className="font-normal text-white/70">. {focus}</span>}
                      </p>
                      {showExperiencePoints && <Points items={item.points} />}
                    </li>
                  )
                })}
              </ol>
            </div>
          </TabsContent>

          <TabsContent value="projects" className={panel}>
            <ul className="flex flex-col gap-9">
              {otherProjects.map((item) => {
                return (
                  <li key={item.title} className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-[11rem_1fr]">
                    <p className="text-white/70 sm:pt-1">{shortDate(item.date)}</p>
                    <div>
                      <h2 className={entryTitle}>{item.title}</h2>
                      <p className="mt-1 font-medium">
                        {item.href ? <a href={item.href} className={textLink}>{item.client}</a> : item.client}
                      </p>
                      {item.image && (
                        <figure className="mt-4 max-w-[30rem]">
                          <Image
                            src={item.image}
                            width={item.width}
                            height={item.height}
                            sizes="(min-width: 640px) 480px, 100vw"
                            className="h-auto w-full rounded-[28px] rounded-bl-md"
                            alt={item.imageAlt}
                          />
                          {item.imageNote && <figcaption className="mt-2 text-sm text-white/70">{item.imageNote}</figcaption>}
                        </figure>
                      )}
                      <Details label="what I did" items={item.points} />
                    </div>
                  </li>
                )
              })}
            </ul>
          </TabsContent>

          <TabsContent value="skills" className={panel}>
            <dl className="flex flex-col gap-8">
              {skills.map((item) => {
                return (
                  <div key={item.group} className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[11rem_1fr]">
                    <dt className="text-lg font-bold leading-tight tracking-tight sm:pt-1">{item.group}</dt>
                    <dd>
                      <ul className="flex flex-wrap gap-2">
                        {item.items.map((skill) => (
                          <li key={skill} className="rounded-full border border-white/25 px-3 py-1 text-sm">{skill}</li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </TabsContent>

          <TabsContent value="education" className={panel}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-[11rem_1fr]">
              <p className="text-white/70 sm:pt-1">{shortDate(education.duration)}</p>
              <div>
                <h2 className={entryTitle}>{education.degree}</h2>
                <p className="mt-1 font-medium">{education.institution}</p>
                <p className="mt-6 flex items-baseline gap-4">
                  <span className="text-6xl font-extrabold leading-none tracking-[-0.04em] text-accent-default xl:text-7xl">3.76</span>
                  <span className="text-lg font-medium leading-snug">GPA, Magna Cum Laude</span>
                </p>
                <Details label="more" items={education.points.slice(1)} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className={panel}>
            <dl className="flex flex-col gap-8">
              {byIssuer.map((group) => {
                return (
                  <div key={group.issuer} className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-[11rem_1fr]">
                    <dt className="text-lg font-bold leading-tight tracking-tight">{group.issuer}</dt>
                    <dd>
                      <ul className="flex flex-col gap-2">
                        {group.items.map((item) => (
                          <li key={item.name} className="flex items-baseline justify-between gap-6">
                            <span>{item.name}</span>
                            <span className="shrink-0 text-white/70">{item.date.split(" ")[1]}</span>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )
              })}
            </dl>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

export default Resume
