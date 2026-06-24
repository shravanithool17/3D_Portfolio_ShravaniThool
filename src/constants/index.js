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
  carrent,
  jobit,
  tripguide,
  
} from "../assets";

import project1Video from "../assets/videos/project1.mp4";
import project2Video from "../assets/videos/project2.mp4";
import certificate1 from "../assets/certificates/certificate1.jpg";
import certificate2 from "../assets/certificates/certificate2.jpg";
import certificate3 from "../assets/certificates/certificate3.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
];

const experiences = [
  {
    title: "Full Stack Web Development Intern",
    company_name: "UrbanRize Technologies",
    icon: web,
    iconBg: "#383E56",
    date: "Add your dates here",
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
    date: "Add your dates here",
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
    name: "Neural-XGBoost: Disaster Prediction System",
    description:
      "Developed a hybrid machine learning system that combines Neural Networks and XGBoost to classify disaster events such as floods, earthquakes, and wildfires using the EM-DAT dataset. Implemented data preprocessing, feature engineering, SMOTE-based class balancing, and integrated the prediction model with a React.js frontend and Node.js backend for interactive disaster risk prediction and visualization.",
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
        name: "mongodb",
        color: "green-text-gradient",
      },
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
    ],
    video: project1Video,
    source_code_link: "https://github.com/shravanithool17/PBL_DisasterPrediction_project",
  },
  {
    name: "School Management Website",
    description:
      "Developed a dynamic school management website as part of an internship program to manage and display academic information, announcements, events, and school facilities. Integrated real-world school data and implemented backend functionality using PHP and MySQL with XAMPP.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },

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
        name: "xampp",
        color: "green-text-gradient",
      },
    ],
    video: project2Video,
    source_code_link: "https://github.com/shravanithool17/School_Project_work",
  },
];

export { services, technologies, experiences, testimonials, projects, achievements };
