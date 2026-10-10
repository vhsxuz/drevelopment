/**
 * Projects. Locale-neutral fields (image, github, url, stack, segment) live once;
 * only the human text is keyed by locale, so adding a language never risks
 * losing a URL.
 *
 * `segment` drives the filter on /work and the case studies shown under each
 * audience on the landing page.
 */
export const projects = [
  {
    slug: "yatapos",
    num: "01",
    segment: "msme",
    image: "/assets/work/yatapos-mockup.png",
    stack: ["Mobile", "POS", "Barcode Scanner"],
    en: {
      category: "mobile app",
      title: "YataPOS",
      description:
        "YataPOS, a point of sale app with product catalog, barcode scanning, cart, and multiple payment methods.",
    },
    id: {
      category: "aplikasi mobile",
      title: "YataPOS",
      description:
        "YataPOS, aplikasi point of sale dengan katalog produk, pemindai barcode, keranjang, dan beberapa metode pembayaran.",
    },
  },
  {
    slug: "desa-pagedangan",
    num: "08",
    segment: "msme",
    image: "/assets/work/desa-pagedangan.jpeg",
    url: "https://desa-pagedangan.vercel.app/",
    stack: ["Next.js", "Village portal", "MSME product catalogue"],
    en: {
      category: "website",
      title: "Desa Pagedangan",
      description:
        "A website for Pagedangan village in Tangerang that helps its small businesses show and sell their products, alongside village services, facilities, and news.",
    },
    id: {
      category: "website",
      title: "Desa Pagedangan",
      description:
        "Website Desa Pagedangan, Tangerang, yang membantu UMKM desa menampilkan dan menjual produknya, lengkap dengan layanan, fasilitas, dan berita desa.",
    },
  },
  {
    slug: "itsec-summit",
    num: "09",
    segment: "companies",
    image: "/assets/work/itsec-summit.jpeg",
    stack: ["Event landing page", "Registration"],
    en: {
      category: "website",
      title: "ITSEC Cybersecurity Summit 2024",
      description:
        "The landing page for the ITSEC Cybersecurity Summit 2024 in Jakarta, with the agenda, sponsors, a countdown, and registration for attendees.",
    },
    id: {
      category: "website",
      title: "ITSEC Cybersecurity Summit 2024",
      description:
        "Landing page ITSEC Cybersecurity Summit 2024 di Jakarta, berisi agenda, sponsor, hitung mundur, dan pendaftaran peserta.",
    },
  },
  {
    slug: "statements-against-mankind",
    num: "02",
    segment: "companies",
    image: "/assets/work/statement-against-mankind.png",
    github: "https://github.com/vhsxuz/statements-against-mankind",
    stack: ["MERN", "Prisma ORM", "ChakraUI"],
    en: {
      category: "fullstack",
      title: "Statements Against Mankind",
      description: "Create a game similar to Card Against Humanity board game.",
    },
    id: {
      category: "fullstack",
      title: "Statements Against Mankind",
      description: "Membuat game yang mirip dengan board game Card Against Humanity.",
    },
  },
  {
    slug: "maiboutique",
    num: "04",
    segment: "msme",
    image: "/assets/work/php.png",
    github: "https://github.com/vhsxuz/maiboutique",
    stack: ["PHP", "Laravel", "Bootstrap"],
    en: {
      category: "fullstack",
      title: "Mai Boutique",
      description: "Create an online clothes store and stock management system.",
    },
    id: {
      category: "fullstack",
      title: "Mai Boutique",
      description: "Membuat toko baju online sekaligus sistem manajemen stoknya.",
    },
  },
  {
    slug: "blibli-widgets",
    num: "05",
    segment: "companies",
    image: "/assets/work/blibli-mockup.png",
    github: "https://github.com/vhsxuz/blibli-widgets",
    stack: ["Swift", "UIKit"],
    en: {
      category: "iOS Application",
      title: "Blibli Widgets",
      description:
        "Create a replica of widgets feature from Blibli iOS mobile application.",
    },
    id: {
      category: "Aplikasi iOS",
      title: "Blibli Widgets",
      description:
        "Membuat replika fitur widget dari aplikasi mobile iOS Blibli.",
    },
  },
  {
    slug: "quanc",
    num: "06",
    segment: "companies",
    image: "/assets/work/quanc-ui.png",
    github: "https://github.com/ProjectQuanC/quan-c-app",
    stack: ["React", "TypeScript", "Express", "FastAPI"],
    en: {
      category: "fullstack",
      title: "Quan C",
      description:
        "An open source secure programming platform. Developers solve secure coding challenges, and a runner tests each submitted fix automatically.",
    },
    id: {
      category: "fullstack",
      title: "Quan C",
      description:
        "Platform secure programming open source. Developer mengerjakan tantangan secure coding, lalu runner menguji setiap solusi secara otomatis.",
    },
  },
  {
    slug: "blp-test",
    num: "07",
    segment: "companies",
    image: "/assets/work/backend.png",
    github: "https://github.com/vhsxuz/blp-test",
    stack: ["MERN", "JWT Token"],
    en: {
      category: "fullstack",
      title: "BLP Item Management",
      description:
        "Create a full stack item management system for BLP recruitment test.",
    },
    id: {
      category: "fullstack",
      title: "BLP Item Management",
      description:
        "Membuat sistem manajemen barang full stack untuk tes rekrutmen BLP.",
    },
  },
];

/** Showcase entries for /events. Sample data, clearly labelled as such. */
export const eventShowcase = [
  {
    slug: "dina-raka",
    image: "/assets/work/yatapos.png",
    sample: true,
    en: { names: "Dina & Raka", date: "14 March", blurb: "Interactive invite with RSVP and a live photo wall." },
    id: { names: "Dina & Raka", date: "14 Maret", blurb: "Undangan interaktif dengan RSVP dan photo wall langsung." },
  },
];

export function getProjects(locale) {
  return projects.map((project) => ({
    ...project,
    ...project[locale],
  }));
}

export function getProject(locale, slug) {
  const found = projects.find((project) => project.slug === slug);
  return found ? { ...found, ...found[locale] } : null;
}
