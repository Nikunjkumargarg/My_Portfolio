import {
  rabbitmq,
  nestjs,
  aws,
  cloud,
  microservices,
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  kafka,
  database,
  mongodb,
  nodered,
  sql,
  redux,
  projectsicon,
  nosh,
  ipsator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// const services = [
//   {
//     title: 'Frontend Developer',
//     icon: frontend,
//   },
//   {
//     title: 'Backend Developer',
//     icon: backend,
//   },
//   {
//     title: 'UI/UX Design',
//     icon: ux,
//   },
//   {
//     title: 'Software Prototyping',
//     icon: prototyping,
//   },
// ];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Microservices",
    icon: microservices,
  },
  {
    title: "Database Management",
    icon: database,
  },
  {
    title: "Cloud Services",
    icon: cloud,
  },
];

const technologies = [
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "sql",
    icon: sql,
  },

  {
    name: "MongoDb",
    icon: mongodb,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Node-Red",
    icon: nodered,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "rabbitmq",
    icon: rabbitmq,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'NestJS',
    icon: nestjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Kafka',
    icon: kafka,
  },
  // {
  //   name: 'figma',
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Software Developer Engineer",
    company_name: "Nosh Robotics",
    icon: nosh,
    iconBg: "#333333",
    date: "July 2025 - Present",
  },
  {
    title: "Backend Developer",
    company_name: "Ipsator",
    icon: ipsator,
    iconBg: "#333333",
    date: "Jun 2024 - July 2025",
  },
  {
    title: "Software Engineer",
    company_name: "Zeitgeist Retail Private Limited.",
    icon: kelhel,
    iconBg: "#333333",
    date: "Jan 2023 - Jun 2024",
  }
];

const projects = [
  {
    id: "project-1",
    name: "DevTinder",
    description:
      "A dating app for developers to find other developers to collaborate with.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "expressJs",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: projectsicon,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    // demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: "project-2",
    name: " Program Scheduler",
    description:
      " Awebapplication built for premier educational institutions like IITs and IIMs to manage and monitor ongoing academic programs within the campus.",
    tags: [
      {
        name: "NestJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: projectsicon,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: "project-3",
    name: "AI Recommendation System",
    description:
      "The system analyzes data from the company and competitors’ URLs, suggests relevant keywords using OpenAI, and offers recommendation tasks.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJs",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
      {
        name: "Trello",
        color: "pink-text-gradient",
      },
    ],
    image: projectsicon,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    // demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: "project-4",
    name: " In-Flight Entertainment",
    description: `Developed an in-flight entertainment system for Indigo, where passengers can create orders during the flight.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: projectsicon,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    // demo: 'https://movie-metro.netlify.app/',
  },
];

export { services, technologies, experiences, projects };
