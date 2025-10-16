// Configuration centrale du portfolio — modifiez ces valeurs pour personnaliser le site

// Métadonnées du site
export const siteMeta = {
  title: "Portfolio | Mathéo Girard",
  description:
    "Développeur front-end et designer — création d'expériences web modernes, performantes et accessibles.",
  keywords:
    "portfolio, développeur, front-end, design, react, nextjs, tailwind, framer-motion, ui, ux, Mathéo, Girard",
  author: "Mathéo Girard",
  themeColor: "#f13024",
  ogImage: "/og-image.png", // Optionnel: placez une image 1200x630 dans /public
};

// Ressources (logo, avatar, images réutilisées)
export const assets = {
  logo: "/logo.png",
  avatar: "/avatar.png",
  roundedText: "/rounded-text.png",
};

// Navigation principale
export const navItems = [
  { name: "home", path: "/", icon: "home" },
  { name: "about", path: "/about", icon: "about" },
  { name: "services", path: "/services", icon: "services" },
  { name: "work", path: "/work", icon: "work" },
  { name: "testimonials", path: "/testimonials", icon: "testimonials" },
  { name: "contact", path: "/contact", icon: "contact" },
];

// Réseaux sociaux
export const socialLinks = [
  { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
  { name: "Pinterest", url: "https://pinterest.com", icon: "pinterest" },
  { name: "Github", url: "https://github.com/", icon: "github" },
];

// Section héro
export const hero = {
  title: "Je transforme vos idées en",
  highlight: "produits digitaux",
  subtitle:
    "Base générique pour présenter votre proposition de valeur. Écrivez ici un court texte clair expliquant ce que vous faites, pour qui, et l'impact.",
  cta: { label: "Voir mes projets", href: "/work" },
  showParticles: true,
};

// Données "À propos"
export const aboutCounters = {
  years: 5,
  clients: 30,
  projects: 80,
  awards: 2,
};

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Développement Web",
        icons: [
          "html",
          "css",
          "js",
          "react",
          "next",
          "framer",
          "wordpress",
        ],
      },
      {
        title: "Design UI/UX",
        icons: ["figma", "xd", "photoshop"],
      },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "Front-end Engineer — Agence XYZ", stage: "2022 — Présent" },
      { title: "Développeur — Startup ABC", stage: "2020 — 2022" },
      { title: "Stagiaire — DEF", stage: "2019 — 2020" },
    ],
  },
  {
    title: "credentials",
    info: [
      { title: "Master Informatique — Université", stage: "2019" },
      { title: "Licence — Développement Web", stage: "2017" },
    ],
  },
];

// Services
export const servicesData = [
  {
    icon: "crop",
    title: "Branding",
    description:
      "Identité visuelle cohérente, palettes couleurs, typographies et guidelines.",
  },
  {
    icon: "pencil2",
    title: "Design",
    description:
      "Maquettes UI, design system, prototypage et tests utilisateurs.",
  },
  {
    icon: "desktop",
    title: "Développement",
    description:
      "Sites vitrines et web apps modernes avec Next.js, React et Tailwind CSS.",
  },
  {
    icon: "reader",
    title: "Contenu",
    description:
      "Rédaction orientée SEO et optimisation du message pour votre audience.",
  },
  {
    icon: "rocket",
    title: "SEO",
    description:
      "Performance, accessibilité et bonnes pratiques pour un meilleur ranking.",
  },
];

// Projets (thumbnails à placer dans /public)
export const projects = [
  { title: "Projet A", image: "/thumb1.jpg", url: "https://example.com/a" },
  { title: "Projet B", image: "/thumb2.jpg", url: "https://example.com/b" },
  { title: "Projet C", image: "/thumb3.jpg", url: "https://example.com/c" },
  { title: "Projet D", image: "/thumb4.jpg", url: "https://example.com/d" },
  { title: "Projet E", image: "/thumb1.jpg", url: "https://example.com/e" },
  { title: "Projet F", image: "/thumb2.jpg", url: "https://example.com/f" },
  { title: "Projet G", image: "/thumb3.jpg", url: "https://example.com/g" },
  { title: "Projet H", image: "/thumb4.jpg", url: "https://example.com/h" },
];

// Témoignages (avatars à placer dans /public)
export const testimonials = [
  {
    image: "/t-avt-1.png",
    name: "Anne Smith",
    position: "Client",
    message:
      "Un partenaire fiable et réactif. Le site est rapide, moderne et conforme à nos attentes.",
  },
  {
    image: "/t-avt-2.png",
    name: "Jean Dupont",
    position: "Client",
    message:
      "Très bonne collaboration. Le design est soigné et l'expérience utilisateur fluide.",
  },
  {
    image: "/t-avt-3.png",
    name: "Marie Curie",
    position: "Client",
    message:
      "Livraison dans les temps, code propre et maintenable. Je recommande !",
  },
];