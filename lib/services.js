import { WHATSAPP_URL } from "@/lib/contact"

export const services = [
  {
    slug: "mobile",
    title: "Mobile apps",
    summary: "For phones and tablets, like the YataPOS cashier app and my iOS work at Blibli.",
    detail: "An app your staff or customers use on a phone or a tablet. YataPOS runs a shop counter: product catalog, barcode scanning, a cart, and cash, card, and e-wallet payments. At Blibli I worked on the iOS app for a year, in Swift.",
    image: "/assets/work/yatapos-mockup.png",
    imageAlt: "YataPOS cashier screen on a counter tablet, beside a barcode scanner and a receipt printer",
    width: 1608,
    height: 978,
  },
  {
    slug: "web",
    title: "Websites and web apps",
    summary: "The screens people use and the server behind them, like Quan C and Mai Boutique.",
    detail: "A website or a web app, front to back: the screens people use, the services and APIs behind them, and the database. Quan C is a secure coding platform built in React and TypeScript with Express and FastAPI. Mai Boutique is an online clothes store with stock management, built on Laravel.",
    image: "/assets/work/quanc-ui.png",
    imageAlt: "Quan C home page: a vulnerable code sample beside a lock diagram showing which attack payloads got in",
    width: 2000,
    height: 1086,
  },
  {
    slug: "security-training",
    title: "Security training",
    summary: "A simulated phishing campaign that shows who on your staff would fall for a real one.",
    detail: "A fake phishing campaign for your company, run with your approval, to build cyber awareness. I build a realistic page, like this sample sign-up form, and send it to your staff the way an attacker would. You get a report of who clicked and who typed in their details, so you know where to aim the training. In 2024 I built the frontend of a phishing simulation platform for a banking client.",
    image: "/assets/work/security-awareness-sample.png",
    imageAlt: "Sample phishing simulation page: a sign-up form for a made-up company called NovaWorks",
    imageNote: "A sample simulation page. NovaWorks is a made-up company.",
    width: 1646,
    height: 956,
  },
  {
    slug: "devops",
    title: "DevOps engineering",
    phrase: "DevOps engineering",
    summary: "CI/CD pipelines, servers, and cloud setup, so a release ships without manual steps.",
    detail: "Getting your software from a developer's laptop to production, the same way every time. I set up CI/CD pipelines that build, check, and deploy each change, size and install the servers, and run them on the cloud or a VPS with SSL. For GIS clients I automated deployment to their production servers. For security clients I wired OpenText Fortify SAST and DAST scans into their pipelines, so every build is checked before release.",
    image: "/assets/work/devops-sample.svg",
    imageAlt: "Sample pipeline run: build, test, security scan, and deploy all passed, with the deploy log and release details below",
    imageNote: "A sample pipeline run. The project and numbers are made up.",
    width: 1600,
    height: 960,
  },
  {
    slug: "data",
    title: "Data tools",
    summary: "Scraping, analysis, and reports that turn raw data into answers.",
    detail: "You have a question and the data is scattered, messy, or on someone else's website. I research the sources, scrape and clean the data, analyse it, and hand you the answer in a form you can use.",
    image: "/assets/work/data-tools-sample.svg",
    imageAlt: "Sample weekly price report: a line chart comparing three stores over twelve weeks, a list of findings, and a table of the biggest price gaps",
    imageNote: "A sample report. The stores, products, and prices are made up.",
    width: 1600,
    height: 960,
  },
]

// Titles are lowercased mid-sentence; `phrase` keeps names like DevOps intact
export const servicePhrase = (service) => service.phrase ?? service.title.toLowerCase()

export const askAbout = (service) => {
  const text = `Hi Andreas, I would like to ask about ${servicePhrase(service)}.`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`
}
