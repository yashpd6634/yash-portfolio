// Application constants

// Navigation items
export const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Video configuration
export const VIDEO_CONFIG = {
  TOTAL_HERO_VIDEOS: 4,
  HERO_VIDEO_PATH: "/videos/hero-",
  VIDEO_EXTENSIONS: ".mp4",
};

// Animation durations
export const ANIMATION_DURATIONS = {
  FAST: 200,
  NORMAL: 300,
  SLOW: 500,
  EXTRA_SLOW: 700,
};

// Breakpoints (matching Tailwind)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
};

// Audio settings
export const AUDIO_CONFIG = {
  LOOP_AUDIO_PATH: "/audio/loop.mp3",
  DEFAULT_VOLUME: 0.5,
};

// Contact information
export const CONTACT_INFO = {
  EMAIL: "yashpd13@gmail.com",
  LINKEDIN: "https://www.linkedin.com/in/yash-dewangan-3737671a4/",
  GITHUB: "https://github.com/yashpd6634",
  TWITTER: "https://twitter.com/yashpd13",
};

// SEO metadata
export const SEO_CONFIG = {
  SITE_NAME: "Yash Portfolio",
  SITE_DESCRIPTION: "Portfolio website showcasing my work and skills",
  SITE_URL: "https://your-portfolio-url.com",
  SITE_IMAGE: "/img/og-image.jpg",
};

export const words = [
  { text: "Ideas", imgPath: "/img/ideas.svg" },
  { text: "Concepts", imgPath: "/img/concepts.svg" },
  { text: "Designs", imgPath: "/img/designs.svg" },
  { text: "Code", imgPath: "/img/code.svg" },
  { text: "Ideas", imgPath: "/img/ideas.svg" },
  { text: "Concepts", imgPath: "/img/concepts.svg" },
  { text: "Designs", imgPath: "/img/designs.svg" },
  { text: "Code", imgPath: "/img/code.svg" },
];

export const counterItems = [
  { value: 2.5, suffix: "+", label: "Years of Experience" },
  { value: 961, suffix: "+", label: "LeetCode/GFG Problems Solved" },
  { value: 29, suffix: "+", label: "Completed Personal Projects" },
  { value: 100, suffix: "+", label: "Reusable ReactJS Components Created" },
];

export const logoIconsList = [
  {
    imgPath: "/img/logos/ApacheKafka.svg",
  },
  {
    imgPath: "/img/logos/CPlusPlus.svg",
  },
  {
    imgPath: "/img/logos/HTML5.svg",
  },
  {
    imgPath: "/img/logos/CSS3.svg",
  },
  {
    imgPath: "/img/logos/React.svg",
  },
  {
    imgPath: "/img/logos/Go.svg",
  },
  {
    imgPath: "/img/logos/Nodejs.svg",
  },
  {
    imgPath: "/img/logos/GraphQL.svg",
  },
  {
    imgPath: "/img/logos/Docker.svg",
  },
  {
    imgPath: "/img/logos/Django.svg",
  },
  {
    imgPath: "/img/logos/Electron.svg",
  },
  {
    imgPath: "/img/logos/Firebase.svg",
  },
  {
    imgPath: "/img/logos/JavaScript.svg",
  },
  {
    imgPath: "/img/logos/Jest.svg",
  },
  {
    imgPath: "/img/logos/JSON.svg",
  },
  {
    imgPath: "/img/logos/MongoDB.svg",
  },
  {
    imgPath: "/img/logos/Nestjs.svg",
  },
  {
    imgPath: "/img/logos/NPM.svg",
  },
  {
    imgPath: "/img/logos/python.svg",
  },
  {
    imgPath: "/img/logos/Redux.svg",
  },
  {
    imgPath: "/img/logos/Socketio.svg",
  },
  {
    imgPath: "/img/logos/Threejs.svg",
  },
  {
    imgPath: "/img/logos/TypeScript.svg",
  },
];

export const abilities = [
  {
    imgPath: "/img/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/img/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/img/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

export const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/img/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/img/logos/python.svg",
  },
  {
    name: "NodeJS Developer",
    imgPath: "/img/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/img/logos/three.png",
  },
  {
    name: "Project Management",
    imgPath: "/img/logos/git.svg",
  },
];

export const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "NodeJS Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Go Developer",
    modelPath: "/models/go_gopher.glb",
    scale: 1.4,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Management",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const expCards = [
  {
    review:
      "Yash delivered exceptional results in developing NextJS R&D portals and reusable ReactJS components, significantly streamlining our insurance workflows and boosting developer productivity across teams.",
    imgPath: "/img/sapiens.svg",
    logoPath: "/img/sapiens.svg",
    title: "Full-Stack Developer",
    company: "Sapiens",
    date: "June 2023 – Present",
    responsibilities: [
      "Delivered component-driven NextJS R&D portals and a reusable library of ReactJS components, streamlining insurance workflows for policies/quotes/claims, resulting in enhanced code reusability and developer productivity.",
      "Optimized configuration-driven NextJS projects with pre-pushed dependencies, boosting application performance, scalability, and overall developer experience across multiple teams.",
      "Integrated REST and GraphQL APIs from various backend services and databases, enabling seamless data flow.",
      "Engineered secure authentication mechanisms using NextAuth with refresh and ID tokens, incorporating Pub-Sub for JFC forms token mapping, which strengthened authorization and minimized security vulnerabilities.",
      "Accelerated development cycles by leveraging in-house low-code tools JFC and ACE to build forms and APIs, applying advanced JavaScript expertise to solve complex problems and deliver features faster.",
    ],
  },
  {
    review:
      "Yash's contributions to our transport taxi team were outstanding. He demonstrated excellent problem-solving skills in managing Golang APIs and optimizing performance under high-traffic scenarios.",
    imgPath: "/img/gojek.svg",
    logoPath: "/img/gojek.svg",
    title: "Backend Developer Intern",
    company: "Gojek",
    date: "May 2022 – August 2022",
    responsibilities: [
      "Worked with transport taxi team managing Gojek's transport taxi APIs written in Golang, including integration of Bluebird and ComfortDelGro taxi systems.",
      "Conducted comprehensive load testing with Vegeta on regression helper services, identifying latency bottlenecks and breaking points to optimize performance under high-traffic scenarios.",
      "Documented and proposed efficient session key management solutions with TTL using Redis, Cron Jobs, and Goroutines with Mutex, ensuring secure and uninterrupted API operations.",
    ],
  },
];

export const expLogos = [
  {
    name: "sapiens",
    imgPath: "/img/sapiens.svg",
  },
  {
    name: "gojek",
    imgPath: "/img/gojek.svg",
  },
];

export const socialImgs = [
  {
    name: "insta",
    imgPath: "/img/insta.png",
  },
  {
    name: "fb",
    imgPath: "/img/fb.png",
  },
  {
    name: "x",
    imgPath: "/img/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/img/linkedin.png",
  },
];
