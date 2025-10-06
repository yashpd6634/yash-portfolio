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
  EMAIL: "your.email@example.com",
  LINKEDIN: "https://linkedin.com/in/yourprofile",
  GITHUB: "https://github.com/yourusername",
  TWITTER: "https://twitter.com/yourusername",
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
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

export const logoIconsList = [
  {
    imgPath: "/img/logos/company-logo-1.png",
  },
  {
    imgPath: "/img/logos/company-logo-2.png",
  },
  {
    imgPath: "/img/logos/company-logo-3.png",
  },
  {
    imgPath: "/img/logos/company-logo-4.png",
  },
  {
    imgPath: "/img/logos/company-logo-5.png",
  },
  {
    imgPath: "/img/logos/company-logo-6.png",
  },
  {
    imgPath: "/img/logos/company-logo-7.png",
  },
  {
    imgPath: "/img/logos/company-logo-8.png",
  },
  {
    imgPath: "/img/logos/company-logo-9.png",
  },
  {
    imgPath: "/img/logos/company-logo-10.png",
  },
  {
    imgPath: "/img/logos/company-logo-11.png",
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
    name: "Backend Developer",
    imgPath: "/img/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/img/logos/three.png",
  },
  {
    name: "Project Manager",
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
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

export const expCards = [
  {
    review:
      "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/img/exp1.png",
    logoPath: "/img/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review:
      "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/img/exp2.png",
    logoPath: "/img/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review:
      "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/img/exp3.png",
    logoPath: "/img/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

export const expLogos = [
  {
    name: "logo1",
    imgPath: "/img/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/img/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/img/logo3.png",
  },
];

export const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/img/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/img/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/img/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/img/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/img/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/img/client6.png",
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
