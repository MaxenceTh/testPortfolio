import { img } from "motion/react-client";

export const myProjects = [
  {
    id: 1,
    title: "Authentication & Authorization Sport App",
    description:
      "A secure authentication and authorization application using JWT for sport application.",
    subDescription: [
      "Integrated JWT for authentication",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with material UI from a theme called Berry",
      "Connected to a secure PostgreSQL database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg",
    tags: [
      {
        id: 1,
        name: "Java",
        path: "/assets/logos/java.svg",
      },
      {
        id: 2,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 3,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 4,
        name: "Spring",
        path: "/assets/logos/spring.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Badminton's training application",
    description:
      "A cool application which shows differents badminton's exercices and some cool features.",
    subDescription: [
      "Integrated features like a timer or random arrow to help the user to train better",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Tailwind",
        path: "/assets/logos/tailwind.svg",
      },
    ],
  },
  {
    id: 3,
    title: "Cinema's application",
    description:
      "A litte application using a Cinema API showing every cinema in France",
    subDescription: [
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Using a new API with docs",
      "PostgreSQL and PostGIS integration",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "PostgreSQL",
        path: "/assets/logos/postgresql.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwind.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Ujap Badminton website",
    description:
      "Development of the website of my badminton's association",
    subDescription: [
      "Built with Wordpress",
      "Developed with Timber and then only with Wordpress and elementary",
      "Worked with others association's members",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      {
        id: 1,
        name: "Wordpress",
        path: "/assets/logos/wordpress.svg",
      },
      {
        id: 2,
        name: "HTML",
        path: "/assets/logos/html.svg",
      },
      {
        id: 3,
        name: "CSS",
        path: "/assets/logos/css.svg",
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "WordPress Custom Theme",
  //   description:
  //     "A fully customizable WordPress theme optimized for performance and SEO.",
  //   subDescription: [
  //     "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
  //     "Integrated Tailwind CSS for modern styling and UI enhancements.",
  //     "Optimized SEO and page speed using Vite.js for fast builds.",
  //     "Implemented custom widgets and plugin compatibility for extended functionality.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/wordpress-theme.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "WordPress",
  //       path: "/assets/logos/wordpress.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "HTML5",
  //       path: "/assets/logos/html5.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "CSS3",
  //       path: "/assets/logos/css3.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "Vite.js",
  //       path: "/assets/logos/vitejs.svg",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: "Online Learning Platform",
  //   description:
  //     "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
  //   subDescription: [
  //     "Built using Blazor WebAssembly for a seamless SPA experience.",
  //     "Implemented video streaming with Azure Media Services.",
  //     "Added a quiz system with dynamic question generation and real-time grading.",
  //     "Integrated Stripe API for secure payment processing.",
  //   ],
  //   href: "",
  //   logo: "",
  //   image: "/assets/projects/elearning.jpg",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "Blazor",
  //       path: "/assets/logos/blazor.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "Azure",
  //       path: "/assets/logos/azure.svg",
  //     },
  //     {
  //       id: 3,
  //       name: "Stripe",
  //       path: "/assets/logos/stripe.svg",
  //     },
  //     {
  //       id: 4,
  //       name: "TailwindCSS",
  //       path: "/assets/logos/tailwindcss.svg",
  //     },
  //   ],
  // },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "FullStack developer",
    job: "Finistère Assurance",
    date: "April 2024 - July 2024",
    contents: [
      "Integration of correction adress tool and geolocalisation",
      "Designed and implemented intuitive map interfaces using MapsUI, enhancing user experience and enabling seamless interactive map integration.",
      "Developed applications for industrial automation, leveraging C++ and the Fatek API for PLC communication.",
      "Enhanced responsiveness and usability of applications using Windows Forms and WPF frameworks.",
      "Executed XML to SVG conversions using X-DOM, ensuring dynamic and efficient data visualization.",
    ],
  },
  {
    title: "AI Developer",
    job: "Mer Concept",
    date: "November 2023 - March 2024",
    contents: [
      "Estimate the height of the SVR-lazartigue with a neural networks",
      "Developed back-end systems enabling vehicle-to-cloud communication for telemetry, diagnostics, and remote control:",
      "✅ Implemented secure APIs, following ISO 26262 automotive safety standards.",
      "✅ Ensured data privacy for customers and partners through industry-compliant protocols.",
      "✅ Delivered remote features like over-the-air updates, real-time tracking, and remote start capabilities.",
    ],
  },
   {
    title: "Application Developer",
    job: "Université Bretagne Occidentales",
    date: "May 2023 - June 2023",
    contents: [
      "Adding new features on a existing application.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
  {
    title: "Web Developer",
    job: "Agence roquette",
    date: "April 2022 - June 2022",
    contents: [
      "Environemtnal website conception.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];

export const stack = [
  {
    name: "Java"
  },
  {
    name: "Spring"
  },
  {
    name: "React"
  },
  {    
    name: "TailwindCSS"
  },
  {    
    name: "JavaScript"
  },
  {    
    name: "Docker"
  },
  {    
    name: "Git"
  },
  {    
    name: "GitHub"
  },
  {    
    name: "Vue.js"
  },
  {    
    name: "WordPress"
  },

]

export const items = [
    {
      title: "Control & Correction Address App",
      text: "Finistère Assurance",
      status: "Intership",
      lien: "https://www.finistere-assurance.bzh/",
      img: "./assets/FI.png",
      stack: ["WebDev", "Java", "Spring", "PostgreSQL", "Docker"],
    },
    {
      title: "Estimate Height SVR-Lazartigue with IA",
      status: "Intership",
      text: "MerConcept & Brest University",
      img: "./assets/MerConcept.png",
      lien: "https://www.merconcept.fr/",
      stack: ["Python", "Tensorflow"],
    },
    {
      title: "Website Environmental Conception",
      status: "Intership",
      text: "Agence Roquette",
      img: "./assets/Roquette.png",
      lien: "https://www.agence-roquette.com/",
      stack: ["Wordpress", "Timber", "Twig"],
    },
    {
      title: "WebSport application",
      status: "Personal project",
      text: "Me",
      img: "./assets/badminton.png",
      lien: "https://github.com/MaxenceTh/WebSport",
      stack: ["React", "Java", "Spring", "PostgreSQL", "TypeScript"],
    },
     {
      title: "Badminton training application",
      status: "Personal project",
      text: "Me",
      img: "./assets/badminton.png",
      lien: "https://github.com/MaxenceTh/BadmintonTraining",
      stack: ["Vue", "TailwindCSS", "JavaScript"],
    },
  ];