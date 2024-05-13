import {
  rabbitmq,
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
  redux,
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
  database,
  mongodb,
  nodered,
  sql,
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
  // {
  //   title: 'Frontend Developer',
  //   icon: frontend,
  // },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },

  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },

  // {
  //   name: 'figma',
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Intern Full Stack Development",
    company_name: "Cognizant Technology Solutions.",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jan 2020 - June 2020",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Cognizant Technology Solutions.",
    icon: dcc,
    iconBg: "#333333",
    date: "Jan 2022 - May 2023",
  },
  // {
  //   title: 'Mentor (Volunteer)',
  //   company_name: 'Microverse',
  //   icon: microverse,
  //   iconBg: '#333333',
  //   date: 'Mar 2022 - May 2022',
  // },

  {
    title: "Backend-End Developer",
    company_name: "Zeitgeist Retail Private Limited.",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2023 - Present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Library Management",
    description:
      "Backend API to perform CRUD operations required for daily library management with basic Frontend Interface",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/KomiKult',
    // demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: "project-2",
    name: "Insurance Solution",
    description:
      "a user-friendly platform that streamlines insurance processes, ensuring swift and secure coverage for clients.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: math,
    // repo: 'https://github.com/shaqdeff/Leaderboard',
    // demo: 'https://shaqdeff.github.io/Leaderboard/',
  },
  {
    id: "project-3",
    name: "E-Commerce Platform",
    description:
      "E-Commerce platform, integrates the third party catalog api and process orders.",
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
    image: math,
    // repo: 'https://github.com/shaqdeff/Math-Magicians',
    // demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  },
  {
    id: "project-4",
    name: "Travel Packages",
    description: `Api to provide the user with different travel packages. CRUD operations are implemented.`,
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
    image: math,
    // repo: 'https://github.com/shaqdeff/Movie-Metro',
    // demo: 'https://movie-metro.netlify.app/',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   // repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   // demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
