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
  meta,
  freelance,
  shopify,
  sheryians,

  falverra,
  tripguide,
  threejs,
} from "../assets";
import jwellery from "../assets/images/jwellery.png";
import Kards from "../assets/images/kards.png";
import welding from "../assets/images/welding.png";
import Hekto from "../assets/images/Hekto.png";
import NeaConnect from "../assets/images/Neaconnect.png";
import my from "../assets/images/my.png";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
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
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company_name: "Self-employed",
    icon: freelance, // Replace with any icon you like
    iconBg: "#0188E3",
    date: "Jan 2024 - Present",
    points: [
      "Built responsive and interactive web apps using React.js, Tailwind CSS, and GSAP.",
      "Developed and deployed modern landing pages and portfolio websites for clients.",
      "Integrated APIs and handled form validation, animations, and smooth scroll effects.",
      "Delivered pixel-perfect UI designs based on Figma and Adobe XD mockups.",
    ],
  },
  {
    title: "Full Stack Development Trainee",
    company_name: "Skill Park -Shankhamul ",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Aug 2023 - Mar 2024",
    points: [
      "Completed an intensive training program focused on MERN stack development.",
      "Built multiple full-stack projects, including CRUD apps and authentication systems.",
      "Worked with tools like Node.js, Express.js, MongoDB, React.js, and Git.",
      "Gained hands-on experience in deploying apps and following clean code practices.",
    ],
  },

  {
    title: "Web Development Trainee",
    company_name: "DeekWalk Institute of technology ",
    icon: sheryians, // Or institute logo
    iconBg: "#ffff",
    date: "Mar 2022 - Jul 2023",
    points: [
      "Started my journey in web development by learning the fundamentals of HTML, CSS, and JavaScript.",
    "Built beginner-level projects like personal portfolios and simple to-do list applications.",
    "Received hands-on training in React.js and basic backend development using Node.js and Express.",
    "Collaborated with peers on mini-projects to understand version control using Git and GitHub.",
  
    ],
  },
];



const projects = [
      {
    name: "NEA-Connect",
    description:
      "NEA-Connect is a digital e-governance platform developed for the NEA, designed to streamline customer services and internal operations.Provides features such as online bill payments,outage reporting, and real-time updates. With a responsive design and secure architecture. It enhances accessibility, transparency, and efficiency for both customers and the authority across Nepal.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Multi-Page",
        color: "pink-text-gradient",
      },
    ],
    image:NeaConnect,
    source_code_link: "https://github.com/mesurajan/NEA-Frontend",
    live_website_link: "https://nea-connect-frontend.vercel.app/",
  },
 {
    name: "Hekto Furniture ",
    description:
      "A beautifully designed e-commerce website for a modern furniture store. The site features intuitive navigation, product filtering, smooth animations, responsive layout, and a secure checkout process. It offers customers an elegant online shopping experience where they can explore and purchase premium furniture collections from any device, anytime, anywhere",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Multi-Page",
        color: "pink-text-gradient",
      },
    ],
    image:Hekto,
    source_code_link: "https://github.com/mesurajan/Software-Ecommerce-frontend",
    live_website_link: "https://software-ecommerce-frontend.vercel.app/",
  },

  
    {
    name: "My Old Landing-page",
    description:
      "It is a sleek and minimalistic landing page built for showcasing a my personal old portfolio. Featuring dynamic project galleries, scroll-triggered animations, service highlights,multiple old projects  and responsive design, it creates an immersive user experience. It’s perfect for professionals wanting to present their work visually with elegance, clarity, and style.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Js",
        color: "green-text-gradient",
      },
    ],
    image: my,
    source_code_link: "https://github.com/mesurajan/Old_Portfolio",
    live_website_link: "https://mesurajan.github.io/Old_Portfolio/",
  },


 


  {
    name: "Jwellery Shop",
    description:
      "A beautifully designed e-commerce website for a modern jewellery store. The site features intuitive navigation, product filtering, smooth animations, responsive layout, and a secure checkout process. It offers customers an elegant online shopping experience where they can explore and purchase premium jewellery collections from any device, anytime, anywhere.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image:jwellery,
    source_code_link: "https://github.com/mesurajan/Jwellery_Shop",
    live_website_link: "https://mesurajan.github.io/Jwellery_Shop/",
  },
  
  {
    name: "Kards-Landing Page",
    description:
      "Kards is a sleek and minimalistic landing page built for showcasing a photographer’s or designer’s personal brand. Featuring dynamic image galleries, scroll-triggered animations, service highlights, and responsive design, it creates an immersive user experience. It’s perfect for professionals wanting to present their work visually with elegance, clarity, and style.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
      {
        name: "Js",
        color: "green-text-gradient",
      },
    ],
    image: Kards,
    source_code_link: "https://github.com/mesurajan/Kards/settings/pages",
    live_website_link: "https://mesurajan.github.io/Kards/",
  },

  {
    name: "Tro Weld",
    description:
      "Tro Weld is a multi-page business website designed for a welding and fabrication company. It includes dedicated pages like home, services, gallery, about, and contact. Featuring responsive layouts, clean navigation, modern visuals, fast performance, and SEO-friendly structure, it effectively showcases the company’s offerings, builds credibility, and provides customers with a seamless browsing .",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "Js",
        color: "pink-text-gradient",
      },
    ],
    image: welding,
    // github link ⬇️
    source_code_link: "https://github.com/mesurajan/Weldling",
    // project link ⬇️
    live_website_link: "https://mesurajan.github.io/Weldling/",
  },

  

];

export { services, technologies, experiences,  projects };
