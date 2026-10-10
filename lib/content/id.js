import { WHATSAPP_DISPLAY } from "@/lib/i18n";

/**
 * Indonesian copy. Written, not machine-translated.
 *
 * Register rules from the spec: `Anda` on the business-facing segments,
 * `kamu` on the wedding segment, and English technical nouns (website,
 * hosting, checkout) kept as-is because that is what clients actually say.
 */
const id = {
  localeName: "Bahasa Indonesia",
  dir: "ltr",

  nav: {
    home: "Beranda",
    services: "Layanan",
    work: "Portofolio",
    events: "Acara",
    playground: "Playground",
    contact: "Kontak",
  },

  profile: {
    name: "Andreas Alexander",
    role: "Creative Developer",
    cv: "/documents/CV.pdf",
    photo: "/assets/profile.png",
  },

  hero: {
    eyebrow: "Creative Developer",
    title: "Menjembatani ide dan code.",
    lead: "Saya membangun hal ambisius yang kata developer lain tidak sepadan dengan usahanya — interaktif, cepat, dan benar-benar jadi.",
    primary: "Lihat portofolio",
    secondary: "Mulai proyek",
    overlay: { part1: "ide", part2: "& code." },
    location: "Jakarta, Indonesia",
    readMore: "Selengkapnya",
  },

  trust: {
    heading: "Diukur, bukan diklaim",
    items: [
      { num: 100, suffix: "", label: "Target performa Lighthouse" },
      { num: 18, suffix: "", label: "Proyek selesai" },
      { num: 2, suffix: "+", label: "Tahun mengerjakan proyek klien" },
    ],
  },

  switcher: {
    label: "Anda yang mana?",
    hint: "Pilih yang paling mendekati.",
    tabs: {
      companies: "Perusahaan",
      msme: "UMKM",
      weddings: "Pernikahan & acara",
    },
  },

  segments: {
    companies: {
      subline:
        "Untuk tim yang butuh produk digital yang tetap kencang saat trafik ramai.",
      pillars: [
        {
          title: "Web application custom",
          body: "Dashboard, internal tool, dan halaman produk di atas React Server Components.",
          deliverable: "Aplikasi rapi dan teruji yang bisa dilanjutkan tim Anda sendiri.",
        },
        {
          title: "Landing page yang kuat",
          body: "Halaman campaign yang tahan lonjakan trafik dan skor Lighthouse-nya mendekati 100.",
          deliverable: "Halaman, pemasangan analytics, dan angka untuk membuktikannya.",
        },
        {
          title: "Tool interaktif",
          body: "Kalkulator, configurator, dan visualisasi data — hal yang mengubah pengunjung jadi leads.",
          deliverable: "Tool siap embed lengkap dengan API-nya.",
        },
      ],
      cta: {
        heading: "Mari kita rancang dengan benar.",
        body: "Kirim brief-nya. Anda dapat sketsa arsitektur dan angka yang realistis, bukan telepon sales.",
        button: "Chat lewat WhatsApp",
        message:
          "Halo Andreas, saya punya proyek yang ingin saya diskusikan. (dari halaman perusahaan)",
      },
    },

    msme: {
      subline:
        "Untuk usaha lokal yang butuh toko online sungguhan, bukan sekadar akun media sosial.",
      pillars: [
        {
          title: "Toko online yang enak dibuka di HP",
          body: "Sebagian besar pembeli Anda datang lewat 4G dengan layar yang sudah retak.",
          deliverable: "Katalog yang cepat, checkout lewat WhatsApp, dan halaman yang bisa Anda ubah sendiri.",
        },
        {
          title: "Ketemu di Google",
          body: "SEO lokal, structured data, dan listing Maps yang tersambung ke website.",
          deliverable: "Website yang muncul saat orang mencari nama dan alamat Anda.",
        },
        {
          title: "Bisa jalan tanpa saya",
          body: "Admin sederhana supaya harga dan foto bisa diganti tanpa panggil developer.",
          deliverable: "CMS, plus satu sore untuk pelatihan.",
        },
      ],
      cta: {
        heading: "Toko Anda online bulan ini.",
        body: "Mulai Rp 300.000. Lingkup jelas, tanpa biaya bulanan. Ceritakan apa yang Anda jual, saya sebutkan biayanya.",
        button: "Tanya lewat WhatsApp",
        message:
          "Halo Andreas, saya mau tanya soal website untuk usaha saya. (dari halaman UMKM)",
      },
    },

    weddings: {
      subline: "Untuk pasangan yang ingin undangan yang benar-benar disimpan tamunya.",
      pillars: [
        {
          title: "Undangan digital interaktif",
          body: "Microsite dengan nama kalian sendiri, bukan template yang namanya tinggal ditempel.",
          deliverable: "Domain sendiri, siap dibuka di hari H.",
        },
        {
          title: "RSVP yang benar-benar terdata",
          body: "Tamu membalas dalam dua ketukan; kalian dapat daftar hadir, pilihan menu, dan jumlah tamu secara langsung.",
          deliverable: "Dashboard dan file CSV yang bisa langsung dipakai catering.",
        },
        {
          title: "Photo wall langsung",
          body: "Tamu mengunggah dari HP, fotonya muncul di layar venue dalam hitungan detik.",
          deliverable: "Photo wall termoderasi plus semua file aslinya setelah acara.",
        },
      ],
      cta: {
        heading: "Coba dulu sebelum pesan.",
        body: "Demo di bawah ini yang sebenarnya. Utak-atik saja, lalu kabari tanggal kalian.",
        button: "Coba demonya",
        message: "Halo Andreas, saya tertarik dengan undangan digital. Tanggal acara: ",
      },
    },
  },

  demo: {
    eyebrow: "Demo langsung",
    title: "Ini produknya, sedang berjalan.",
    lead: "Tekan RSVP di dalam HP. Dashboard di sebelahnya ikut berubah saat itu juga — itu yang dilihat pasangannya.",
    phone: {
      names: "Dina & Raka",
      date: "Sabtu, 14 Maret",
      venue: "Taman Sari, Jakarta",
      story: "Delapan tahun lalu kami berbagi satu payung. Sampai sekarang masih.",
      rsvpButton: "Isi RSVP",
      formTitle: "Bisa hadir?",
      nameLabel: "Nama kamu",
      attendingLabel: "Jadi datang?",
      yes: "Ya, saya hadir",
      no: "Maaf, berhalangan",
      mealLabel: "Pilihan menu",
      meals: ["Ayam", "Sapi", "Vegetarian"],
      submit: "Kirim RSVP",
      confirmed: "Sampai jumpa di sana.",
      declined: "Terima kasih sudah mengabari.",
      back: "Isi ulang",
    },
    dashboard: {
      title: "Dashboard pasangan",
      tabs: { guests: "Tamu", wall: "Photo wall" },
      attending: "Hadir",
      declined: "Berhalangan",
      pending: "Belum membalas",
      mealSplit: "Sebaran menu",
      guestList: "Daftar tamu",
      export: "Unduh CSV",
      simulate: "Simulasikan unggahan",
      reset: "Reset demo",
      empty: "Belum ada foto.",
    },
  },

  capability: {
    eyebrow: "Dibangun dengan",
    title: "Stack-nya, apa adanya.",
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
    eyebrow: "Cara kerjanya",
    title: "Empat langkah, tanpa kejutan.",
    steps: [
      { title: "Ngobrol", body: "Lewat telepon atau WhatsApp. Anda ceritakan, saya bilang apakah layak dibangun." },
      { title: "Lingkup", body: "Rencana tertulis dengan harga pasti dan tanggal. Anda setujui dulu sebelum dikerjakan." },
      { title: "Dikerjakan", body: "Ada link yang bisa Anda buka kapan saja untuk melihat progresnya. Tidak ada hilang sebulan." },
      { title: "Serah terima", body: "Code, domain, dan pelatihannya. Semuanya milik Anda, bukan sewa dari saya." },
    ],
  },

  work: {
    eyebrow: "Portofolio",
    title: "Yang pernah saya bangun",
    lead: "Ketuk salah satu proyek untuk detailnya.",
    all: "Semua",
    viewSource: "Lihat source code",
    noSource: "Source code proyek ini tidak dipublikasikan.",
    stack: "Teknologi",
  },

  events: {
    eyebrow: "Acara",
    title: "Undangan yang sudah tayang",
    lead: "Microsite untuk tanggal yang sungguhan. Masing-masing punya domain, daftar RSVP, dan photo wall sendiri.",
    viewDemo: "Buka demonya",
  },

  playground: {
    eyebrow: "Playground",
    title: "Tempat ide-ide mahal ditaruh",
    lead: "Hal yang terlalu berat untuk landing page, disimpan di halaman sendiri supaya halaman lain tidak ikut menanggung.",
    enter: "Jalankan",
    poster: "Tekan jalankan untuk memuat scene 3D (sekitar 140 KB).",
  },

  contact: {
    eyebrow: "Kontak",
    title: "Mari bekerja sama",
    lead: "WhatsApp paling cepat. Form di bawah akan menuliskan pesannya untuk Anda.",
    nameLabel: "Nama Anda",
    aboutLabel: "Soal apa?",
    messageLabel: "Pesan",
    messagePlaceholder: "Ceritakan apa yang ingin Anda bangun.",
    submit: "Buka WhatsApp",
    hint: "Ini membuka WhatsApp dengan pesan yang sudah siap dikirim. Tidak ada data yang disimpan di sini.",
    whatsapp: WHATSAPP_DISPLAY,
    directTitle: "Atau hubungi langsung",
  },

  footer: {
    tagline: "Menjembatani ide dan code — mewujudkan gagasan jadi nyata.",
    rights: "Hak cipta dilindungi.",
    language: "Bahasa",
    cv: "Unduh CV",
  },

  common: {
    skipToContent: "Lompat ke konten",
    toggleTheme: "Ganti tampilan",
    close: "Tutup",
    deliverable: "Anda dapat",
  },
};

export default id;
