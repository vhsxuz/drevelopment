import { WHATSAPP_DISPLAY } from "@/lib/i18n";

/**
 * English copy. Mirrors the shape of id.js exactly - a key missing from one
 * locale is a build-time bug, not a runtime fallback.
 */
const en = {
  localeName: "English",
  dir: "ltr",

  nav: {
    home: "Home",
    services: "Services",
    work: "Work",
    events: "Events",
    playground: "Playground",
    contact: "Contact",
  },

  profile: {
    name: "Andreas Alexander",
    role: "Creative Developer",
    cv: "/documents/CV.pdf",
    photo: "/assets/profile.png",
  },

  hero: {
    eyebrow: "Creative Developer",
    title: "Bridging vision and code.",
    lead: "I build the ambitious thing other developers said was not worth the effort — interactive, fast, and shipped.",
    primary: "See the work",
    secondary: "Start a project",
    overlay: { part1: "vision", part2: "& code." },
    location: "Jakarta, Indonesia",
    readMore: "Read more",
  },

  trust: {
    heading: "Measured, not claimed",
    items: [
      { num: 100, suffix: "", label: "Lighthouse performance target" },
      { num: 18, suffix: "", label: "Projects shipped" },
      { num: 2, suffix: "+", label: "Years building for clients" },
    ],
  },

  switcher: {
    label: "Who is this for?",
    hint: "Pick the one that sounds like you.",
    tabs: {
      companies: "Companies",
      msme: "Small business",
      weddings: "Weddings & events",
    },
  },

  segments: {
    companies: {
      subline:
        "For teams who need a product surface that performs under real traffic.",
      pillars: [
        {
          title: "Custom web applications",
          body: "Dashboards, internal tools and product surfaces built on React Server Components.",
          deliverable: "A typed, tested app your team can take over.",
        },
        {
          title: "Landing pages that hold up",
          body: "Campaign pages that survive a launch spike and score near 100 on Lighthouse.",
          deliverable: "A page, its analytics wiring, and the numbers to prove it.",
        },
        {
          title: "Interactive tools",
          body: "Calculators, configurators and data visualisations — the things that turn a visit into a lead.",
          deliverable: "An embeddable tool with its own API.",
        },
      ],
      cta: {
        heading: "Let's scope it properly.",
        body: "Send the brief. You get an architecture sketch and a realistic number, not a sales call.",
        button: "Chat on WhatsApp",
        message:
          "Hi Andreas, I have a project I'd like to scope. (from the companies page)",
      },
    },

    msme: {
      subline:
        "For local businesses who need a real storefront, not a social media page.",
      pillars: [
        {
          title: "A storefront that works on a phone",
          body: "Most of your customers arrive on 4G with a cracked screen.",
          deliverable: "A fast catalogue, WhatsApp checkout, and a page you can update yourself.",
        },
        {
          title: "Found on Google",
          body: "Local SEO, structured data, and a Maps listing wired to the site.",
          deliverable: "A site that ranks for your name and your street.",
        },
        {
          title: "Run it without me",
          body: "A simple admin so prices and photos change without a developer.",
          deliverable: "A CMS, and an afternoon of training.",
        },
      ],
      cta: {
        heading: "Your shop, online, this month.",
        body: "From Rp 300.000. Fixed scope, no retainer. Tell me what you sell and I will tell you what it costs.",
        button: "Ask on WhatsApp",
        message:
          "Hi Andreas, I'd like to ask about a website for my business. (from the small business page)",
      },
    },

    weddings: {
      subline: "For couples who want an invitation people actually keep.",
      pillars: [
        {
          title: "Interactive digital invitations",
          body: "A microsite with your names on it, not a template with your names pasted in.",
          deliverable: "A custom domain, live on the day.",
        },
        {
          title: "RSVP that actually tracks",
          body: "Guests reply in two taps; you get a live list, meal choices and a headcount.",
          deliverable: "A dashboard and a CSV your caterer accepts.",
        },
        {
          title: "Live photo wall",
          body: "Guests upload from their phones, photos appear on the venue screen in seconds.",
          deliverable: "A moderated wall and every original file afterwards.",
        },
      ],
      cta: {
        heading: "Play with it before you buy it.",
        body: "The demo below is the real thing. Break it, then tell me your date.",
        button: "Try the live demo",
        message:
          "Hi Andreas, I'm interested in a digital invitation. Our date is: ",
      },
    },
  },

  demo: {
    eyebrow: "Live demo",
    title: "This is the product, running.",
    lead: "Tap RSVP in the phone. The dashboard beside it updates in the same frame — that is what the couple sees.",
    phone: {
      names: "Dina & Raka",
      date: "Saturday, 14 March",
      venue: "Taman Sari, Jakarta",
      story: "Eight years ago we shared an umbrella. We are still sharing it.",
      rsvpButton: "RSVP",
      formTitle: "Will you join us?",
      nameLabel: "Your name",
      attendingLabel: "Can you come?",
      yes: "Yes, count me in",
      no: "Sorry, cannot make it",
      mealLabel: "Meal preference",
      meals: ["Chicken", "Beef", "Vegetarian"],
      submit: "Send RSVP",
      confirmed: "See you there.",
      declined: "Thank you for letting us know.",
      back: "Reply again",
    },
    dashboard: {
      title: "Couple's dashboard",
      tabs: { guests: "Guests", wall: "Photo wall" },
      attending: "Attending",
      declined: "Declined",
      pending: "Awaiting reply",
      mealSplit: "Meal split",
      guestList: "Guest list",
      export: "Download CSV",
      simulate: "Simulate an upload",
      reset: "Reset demo",
      empty: "No photos yet.",
    },
  },

  capability: {
    eyebrow: "Built with",
    title: "The stack, stated plainly.",
    items: [
      "Next.js App Router",
      "React Server Components",
      "Tailwind CSS",
      "Framer Motion",
      "React Three Fiber",
      "Shadcn UI",
    ],
  },

  process: {
    eyebrow: "How it runs",
    title: "Four steps, no surprises.",
    steps: [
      { title: "Talk", body: "A call or a WhatsApp thread. You describe it, I tell you if it is worth building." },
      { title: "Scope", body: "A written plan with a fixed price and a date. You approve it before anything starts." },
      { title: "Build", body: "A link you can open any day to see where it is. No month-long silences." },
      { title: "Hand over", body: "The code, the domain, the training. It is yours, not rented from me." },
    ],
  },

  work: {
    eyebrow: "Work",
    title: "Things I have built",
    lead: "Tap a project for the detail.",
    all: "All",
    viewSource: "View source",
    noSource: "This project's source is not public.",
    stack: "Stack",
  },

  events: {
    eyebrow: "Events",
    title: "Invitations, live",
    lead: "Microsites built for real dates. Each one had its own domain, its own RSVP list, and its own photo wall.",
    viewDemo: "Open the demo",
  },

  playground: {
    eyebrow: "Playground",
    title: "Where the expensive ideas live",
    lead: "The things that are too heavy for a landing page, kept on their own route so nothing else pays for them.",
    enter: "Start it",
    poster: "Press start to load the 3D scene (about 140 KB).",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's work together",
    lead: "WhatsApp is fastest. The form below writes the message for you.",
    nameLabel: "Your name",
    aboutLabel: "What is it about?",
    messageLabel: "Message",
    messagePlaceholder: "Tell me what you want to build.",
    submit: "Open WhatsApp",
    hint: "This opens WhatsApp with your message ready to send. Nothing is stored here.",
    whatsapp: WHATSAPP_DISPLAY,
    directTitle: "Or reach me directly",
  },

  footer: {
    tagline: "Bridging vision and code — turning ideas into reality.",
    rights: "All rights reserved.",
    language: "Language",
    cv: "Download CV",
  },

  common: {
    skipToContent: "Skip to content",
    toggleTheme: "Toggle appearance",
    close: "Close",
    deliverable: "You get",
  },
};

export default en;
