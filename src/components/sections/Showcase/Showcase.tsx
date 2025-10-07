import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const projectsData = [
  {
    id: 1,
    title: "Dev Hub",
    description: "A Platform for Developers to Showcase Projects & Connect",
    details:
      "Developed NextJS web application for live streaming with server creation and multiple channel types (text, voice, video, board) for user interaction. Implemented NextAuth for authentication with credential signup and OAuth providers (Google, GitHub) for session and JWT token management. Used Prisma ORM with MySQL database and Zustand for state management, integrated Livekit and Liveblock for streaming and live collaboration services. Built NestJS backend server with Socket.io for real-time chat connections and developed NextJS APIs for CRUD operations.",
    bulletPoints: [
      "Developed NextJS web application for live streaming with server creation and multiple channel types (text, voice, video, board) for user interaction",
      "Implemented NextAuth for authentication with credential signup and OAuth providers (Google, GitHub) for session and JWT token management",
      "Used Prisma ORM with MySQL database and Zustand for state management, integrated Livekit and Liveblock for streaming and live collaboration services",
      "Built NestJS backend server with Socket.io for real-time chat connections and developed NextJS APIs for CRUD operations",
    ],
    image: "/img/project1.png",
    tech: [
      "NextJS",
      "ReactJS",
      "NestJS",
      "NextAuth",
      "Radix UI",
      "React Hook Form",
      "TanStack Query",
      "Prisma",
      "MySQL",
      "Zustand",
      "Livekit",
      "Liveblock",
      "Socket.io",
    ],
    bgColor: "bg-gradient-to-br from-blue-900 to-purple-900",
    githubLink: "https://github.com/yashpd6634/dev-hub",
    liveLink: "https://dev-hub-pearl.vercel.app/",
  },
  {
    id: 2,
    title: "Auto Task",
    description: "Webhook-Driven Automation Platform",
    details:
      "Developed Microservice architecture style web application to perform automated actions like sending emails and messages triggered by Webhooks. Built primary backend server managing signin/signup logic and autoTask creation, plus hooks server managing webhook APIs. Developed trigger migrator and worker servers using outbox pattern with Kafka for data consistency and atomicity.",
    bulletPoints: [
      "Developed Microservice architecture style web application to perform automated actions like sending emails and messages triggered by Webhooks",
      "Built primary backend server managing signin/signup logic and autoTask creation, plus hooks server managing webhook APIs",
      "Developed trigger migrator and worker servers using outbox pattern with Kafka for data consistency and atomicity",
    ],
    image: "/img/project2.png",
    tech: [
      "Microservices",
      "NextJS",
      "ReactJS",
      "ExpressJS",
      "Kafka",
      "Prisma",
      "NodeJS",
    ],
    bgColor: "bg-gradient-to-br from-orange-900 to-yellow-900",
    githubLink: "https://github.com/yashpd6634/auto-task",
    hasLiveDemo: false,
  },
  {
    id: 3,
    title: "I Manager",
    description:
      "Comprehensive cross-platform desktop application designed for modern business management",
    details:
      "Developed cross-platform desktop application for comprehensive business management with inventory, billing, and analytics features. Developed intuitive UI components and logic using ReactJS, leveraging MUI for design. Architected Electron main process with Prisma SQLite ORM, implementing tRPC for type-safe IPC communication.",
    bulletPoints: [
      "Developed cross-platform desktop application for comprehensive business management with inventory, billing, and analytics features",
      "Developed intuitive UI components and logic using ReactJS, leveraging MUI for design",
      "Architected Electron main process with Prisma SQLite ORM, implementing tRPC for type-safe IPC communication",
    ],
    image: "/img/project3.png",
    tech: [
      "ReactJS",
      "ElectronJS",
      "Redux Toolkit",
      "Zod",
      "MUI",
      "Prisma",
      "SQLite",
      "tRPC",
      "TypeScript",
    ],
    bgColor: "bg-gradient-to-br from-pink-900 to-red-900",
    githubLink: "https://github.com/yashpd6634/i-manager",
    hasLiveDemo: false,
  },
  {
    id: 4,
    title: "Dev Studio",
    description: "Full-Stack Agency Management & Website Builder Platform",
    details:
      "Built a comprehensive SaaS platform for digital agencies to manage clients, create websites, and automate workflows. Features multi-tenant architecture with agency/subaccount hierarchy, drag-and-drop website builder, integrated payment processing, and automation pipelines. Implemented role-based access control, real-time notifications, and third-party integrations including Stripe, Google Drive, and Slack.",
    bulletPoints: [
      "Developed multi-tenant SaaS platform with agency and subaccount management using Next.js 14 and TypeScript",
      "Built drag-and-drop website builder with real-time preview and responsive design capabilities",
      "Created automation workflows with webhook triggers for email campaigns and notifications",
      "Designed role-based authentication system using Clerk with granular permissions",
      "Integrated third-party services including Google Drive, Slack, and Notion for seamless workflow",
    ],
    image: "/img/project4.png",
    tech: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "TailwindCSS",
      "Clerk Auth",
      "Stripe",
      "Uploadthing",
      "Turborepo",
      "React",
    ],
    bgColor: "bg-gradient-to-br from-emerald-900 to-teal-900",
    githubLink: "https://github.com/yashpd6634/dev-studio",
    hasLiveDemo: false,
  },
  {
    id: 5,
    title: "Let's Connect",
    description: "Full-Stack Social Media Platform with Real-Time Features",
    details:
      "Developed a comprehensive social media web application enabling users to create profiles, share posts with media content, engage through likes and comments, and communicate via real-time messaging. Built with modern MERN stack architecture featuring JWT authentication, real-time Socket.io integration, and cloud-based media storage for scalable social networking experience.",
    bulletPoints: [
      "Built full-stack social media platform with user authentication, profile management, and secure JWT-based session handling",
      "Implemented real-time messaging system using Socket.io with message delivery confirmations, and notification sounds",
      "Developed comprehensive system supporting text, image, and video content with like/unlike functionality and threaded comments",
      "Integrated Cloudinary for optimized media storage and delivery, enabling users to upload and share high-quality images and videos",
      "Designed responsive UI with Chakra UI framework featuring dark/light mode toggle and mobile-first responsive design",
    ],
    image: "/img/project5.png", // You'll need to add your project image
    tech: [
      "Socket.io",
      "ReactJS",
      "ExpressJS",
      "MongoDB",
      "Mongoose",
      "NodeJS",
      "Chakra UI",
      "Cloudinary",
      "Recoil",
    ],
    bgColor: "bg-gradient-to-br from-yellow-900 to-violet-900",
    githubLink: "https://github.com/yashpd6634/lets-connect",
    hasLiveDemo: false, // Set to true if you deploy it
  },
];

const AppShowcase = () => {
  const [featuredProject, ...otherProjects] = projectsData;

  return (
    <div id="work" className="min-h-screen py-20 px-4 mt-20 bg-black">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Explore my portfolio of innovative applications and platforms
          </p>
        </div>

        {/* Featured Project - Large Card */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            🌟 Featured Project
          </h3>
          <CardContainer className="inter-var w-full max-w-[1200px] mx-auto">
            <CardBody
              className={`relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] ${featuredProject.bgColor} w-full h-auto rounded-xl p-12 border border-white/10 min-h-[600px]`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <CardItem
                    translateZ="50"
                    className="text-3xl md:text-5xl font-bold text-white mb-4"
                  >
                    {featuredProject.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-lg md:text-xl mb-6"
                  >
                    {featuredProject.description}
                  </CardItem>

                  {/* Key Features */}
                  <CardItem
                    translateZ="60"
                    className="text-gray-400 text-base md:text-lg mb-6"
                  >
                    <div className="space-y-3">
                      <h4 className="text-white font-semibold mb-3">
                        Key Features:
                      </h4>
                      {featuredProject.bulletPoints ? (
                        <ul className="space-y-2">
                          {featuredProject.bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              <span className="text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{featuredProject.details}</p>
                      )}
                    </div>
                  </CardItem>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {featuredProject.tech.map((tech, index) => (
                      <CardItem
                        key={index}
                        translateZ="50"
                        className="px-4 py-2 rounded-full bg-white/10 text-white text-sm md:text-base"
                      >
                        {tech}
                      </CardItem>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={featuredProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 rounded-xl text-base md:text-lg font-normal text-white bg-white/10 hover:bg-white/20 transition-colors text-center cursor-pointer"
                    >
                      View Code
                    </CardItem>
                    {featuredProject.hasLiveDemo !== false &&
                      featuredProject.liveLink && (
                        <CardItem
                          translateZ={20}
                          as="a"
                          href={featuredProject.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base md:text-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all text-center cursor-pointer"
                        >
                          Live Demo
                        </CardItem>
                      )}
                  </div>
                </div>

                <CardItem translateZ="100" className="w-full">
                  <img
                    src={featuredProject.image}
                    height="400"
                    width="600"
                    className="h-80 md:h-96 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={featuredProject.title}
                  />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        {/* Other Projects - Smaller Cards */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {otherProjects.map((project) => (
              <CardContainer
                key={project.id}
                className="inter-var w-full max-w-[600px] mx-auto"
              >
                <CardBody
                  className={`relative group/card hover:shadow-2xl hover:shadow-purple-500/[0.1] ${project.bgColor} w-full h-auto rounded-xl p-8 border border-white/10 min-h-[550px]`}
                >
                  <CardItem
                    translateZ="50"
                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                  >
                    {project.title}
                  </CardItem>

                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-gray-300 text-base md:text-lg mb-6"
                  >
                    {project.description}
                  </CardItem>

                  <CardItem translateZ="100" className="w-full mb-6">
                    <img
                      src={project.image}
                      height="300"
                      width="500"
                      className="h-64 md:h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={project.title}
                    />
                  </CardItem>

                  <CardItem
                    translateZ="60"
                    className="text-gray-400 text-sm md:text-base mb-6"
                  >
                    {project.bulletPoints ? (
                      <div className="space-y-2">
                        <h6 className="text-white font-semibold mb-2 text-sm">
                          Key Features:
                        </h6>
                        <ul className="space-y-1">
                          {project.bulletPoints.map((point, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-purple-400 mt-1 text-md">
                                •
                              </span>
                              <span className="text-gray-300 text-md leading-relaxed">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <p>{project.details}</p>
                    )}
                  </CardItem>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech, index) => (
                      <CardItem
                        key={index}
                        translateZ="50"
                        className="px-3 py-2 rounded-full bg-white/10 text-white text-sm"
                      >
                        {tech}
                      </CardItem>
                    ))}
                  </div>

                  <div className="flex justify-between items-center gap-4">
                    {project.githubLink ? (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl text-sm font-normal text-white bg-white/10 hover:bg-white/20 transition-colors text-center cursor-pointer"
                      >
                        View Code
                      </CardItem>
                    ) : (
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-6 py-3 rounded-xl text-sm font-normal text-white bg-white/10 hover:bg-white/20 transition-colors"
                      >
                        View Code
                      </CardItem>
                    )}
                    {project.hasLiveDemo !== false && project.liveLink && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold hover:from-purple-600 hover:to-pink-600 transition-all text-center cursor-pointer"
                      >
                        Live Demo
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
