import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  python,
  express,
  postman,
  carrent,
  jobit,
  tripguide,

} from "../assets";

import project1Video from "../assets/videos/project1.mp4";
import project2Video from "../assets/videos/project2.mp4";
import certificate1 from "../assets/certificates/certificate1.jpg";
import certificate2 from "../assets/certificates/certificate2.jpg";
import certificate3 from "../assets/certificates/certificate3.jpg";

import bubbletalkImg from "../assets/projects/bubbletalk.png";
import electroniaImg from "../assets/projects/electronia.png";
import thinkboardImg from "../assets/projects/thinkboard.png";
import blackcofferImg from "../assets/projects/blackcoffer.png";
import shramsakhiImg from "../assets/projects/shramsakhi.svg";
import promiseledgerImg from "../assets/projects/promiseledger.png";
import pascofoodsImg from "../assets/projects/pascofoods.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },

  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Postman",  
    icon: postman,
  },
  {
    name: "express",
    icon: express,
  }

];

const experiences = [
  {
    title: "Full Stack Web Development Intern",
    company_name: "UrbanRize Technologies",
    icon: web,
    iconBg: "#383E56",
    date: "Feb-April 2026",
    points: [
      "Developed and deployed web solutions for real-world clients, including a school website and UrbanRize's corporate website.",
      "Engineered an Inventory Management System to streamline hardware product tracking, stock updates, and record management.",
      "Implemented responsive interfaces and optimized user experience using modern web technologies.",
      "Worked in a collaborative development environment, contributing to both frontend and backend modules.",
    ],
  },
  {
    title: "AI & ML Intern",
    company_name: "PMS Robotics Research Center, Pune",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Jan-Feb 2026",
    points: [
      "Developed an AI-powered chatbot as part of automation and machine learning training programs.",
      "Implemented conversational workflows and explored Natural Language Processing (NLP) concepts for intelligent user interactions.",
      "Worked on AI automation, prompt design, and foundational machine learning techniques through hands-on projects.",
      "Gained practical exposure to real-world AI application development under industry mentorship.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const achievements = [

  {
    title: "Samadhan 2.0 National AI Hackathon — Rank 17/105",
    organization: "SISTec, Bhopal",
    date: "Aug 2025",
    description:
      "Ranked 17th among 105 teams in a 36-hour national AI hackathon, building SkillScape — an AI-powered coding platform with code review, plagiarism detection, and practice modules.",
    certificate: certificate3,
  },
  {
    title: "ML Techfest Workshop",
    organization: "Techfest, IIT Bombay (with Craw Cyber Security)",
    date: "Dec 2025",
    description:
      "Hands-on ML workshop covering data preprocessing, supervised models, evaluation techniques, and intro to neural networks using Python.",
    certificate: certificate1,
  },
  {
    title: "TechFiesta 2026 — International Hackathon",
    organization: "PICT, Pune",
    date: "Jan 2026",
    description:
      "Built a Patient Health Record Management System (React, Node, Express, PostgreSQL) with REST APIs and blockchain-based secure record storage.",
    certificate: certificate2,
  },
];

const projects = [
  {
    name: "BubbleTalk — Real-Time Chat App",
    description:
      "Full-stack real-time messaging application with 1-on-1 and group chats, native voice notes recording, GIPHY & WhatsApp stickers, swipe-to-reply gestures, message reactions, live presence tracking, and 32 customizable themes.",
    tags: [
      {
        name: "react19",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
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
      {
        name: "cloudinary",
        color: "blue-text-gradient",
      },
    ],
    image: bubbletalkImg,
    source_code_link: "https://github.com/shravanithool17/BubbleTalk-Chat-App",
    live_demo_link: "https://bubble-talk-chat-app-pjda.vercel.app/login",
  },
  {
    name: "ElectrOnia — Electronics Marketplace",
    description:
      "A comprehensive multi-vendor electronics eCommerce platform featuring product catalogs, cart, vendor portals, Razorpay payments with idempotent HMAC-verified webhooks, role-based access control (RBAC), and 340+ automated Jest tests.",
    tags: [
      {
        name: "react19",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express5",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "razorpay",
        color: "pink-text-gradient",
      },
      {
        name: "jest",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: electroniaImg,
    source_code_link: "https://github.com/shravanithool17/ElectrOnia",
    live_demo_link: "https://electronia.vercel.app/",
  },
  {
    name: "ThinkBoard Notes & Productivity",
    description:
      "Interactive note-taking and productivity platform designed for seamless thought capture, featuring secure JWT authentication, category management, pinned notes, markdown support, and a responsive cloud-synced workspace.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: thinkboardImg,
    source_code_link: "https://github.com/shravanithool17/THINKBOARD_NOTES",
    live_demo_link: "https://thinkboardnotess.vercel.app/login",
  },
  {
    name: "Blackcoffer Analytics Dashboard",
    description:
      "Full-stack data visualization dashboard providing multi-dimensional insights on global indicators, dynamically filtering and plotting intensity, likelihood, relevance, year, country, and topics with interactive charts and metrics.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chartjs",
        color: "pink-text-gradient",
      },
      {
        name: "d3",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: blackcofferImg,
    source_code_link: "https://github.com/shravanithool17/blackcoffer_dashboard",
    live_demo_link: "https://blackcoffer-dashboard-client.vercel.app/",
  },
  {
    name: "PromiseLedger — Software Commitment Tracker",
    description:
      "An automated accountability system that audits software promises made by tech organizations. Uses SerpApi to inspect follow-up changelogs and release notes, and evaluates rule-based delivery vs. delay status with MongoDB storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "serpapi",
        color: "pink-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: promiseledgerImg,
    source_code_link: "https://github.com/shravanithool17/PromiseLedger",
    live_demo_link: null,
  },
  {
    name: "Pasco Foods — Indian Gourmet Platform",
    description:
      "Authentic regional Indian food e-commerce platform for cooking sauces, curry pastes, pickles, and relishes sourced from owned farms. Features a 30-second interactive curry matching quiz, recipe discovery, and cart system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
      {
        name: "ui-ux",
        color: "blue-text-gradient",
      },
    ],
    image: pascofoodsImg,
    source_code_link: "https://github.com/shravanithool17/PascoFoods",
    live_demo_link: null,
  },
  {
    name: "ShramSakhi — Women Workforce Portal",
    description:
      "Social-impact platform empowering women workers and gig laborers with verified job opportunities, labor rights awareness, government welfare scheme discovery, financial literacy tools, and a 24/7 peer community support network.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "express",
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
      {
        name: "social-impact",
        color: "pink-text-gradient",
      },
    ],
    image: shramsakhiImg,
    source_code_link: "https://github.com/shravanithool17/ShramSakhi",
    live_demo_link: null,
  },
  {
    name: "Neural-XGBoost: Disaster Prediction",
    description:
      "Developed a hybrid machine learning system combining Neural Networks and XGBoost to classify disaster events such as floods, earthquakes, and wildfires using the EM-DAT dataset with SMOTE class balancing, React frontend, and Node backend.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "xgboost",
        color: "pink-text-gradient",
      },
      {
        name: "machinelearning",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    video: project1Video,
    source_code_link: "https://github.com/shravanithool17/PBL_DisasterPrediction_project",
    live_demo_link: null,
  },
  {
    name: "School Management Website",
    description:
      "Dynamic school management portal developed as part of an internship to manage and display academic information, announcements, events, and school facilities with PHP, MySQL, and responsive frontend.",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    video: project2Video,
    source_code_link: "https://github.com/shravanithool17/School_Project_work",
    live_demo_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects, achievements };
