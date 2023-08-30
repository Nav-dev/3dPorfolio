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
    c,
    git,
    python,
    internshala,
    NaturalisT,
    ist,
    signlang,
    chatapp,
    boxoffice,
    threejs,
    tictactoe,
  } from "../assets";
  
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "DSA",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "c++",
      icon: c,
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
      name: "python",
      icon: python,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Internshala",
      icon: internshala,
      iconBg: "#E6DEDD",
      date: "March 2023 - April 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "NaturalisT Foundation",
      icon: NaturalisT,
      iconBg: "#E6DEDD",
      date: "July 2023 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js and Wordpress.",
        "Developed website of NaturalisT Foundation and connected with backend.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Training",
      company_name: "IST",
      icon: ist,
      iconBg: "#383E56",
      date: "Jan 2023 - Jul 2023",
      points: [
        "Learnt ReactJS, API technology and how to implement it preactically .",
        "Developed website and how to connect with backend.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Learnt how to manage small databases and how to host them.",
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
  
  const projects = [
    {
      name: "Sign Language Detection",
      description:
        "Produced a model that can recognize hand gestures and signs.Implementation of CNN algorithm as it provides with better accuracy as compared to other methods.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "CNN",
          color: "green-text-gradient",
        },
        {
          name: "Machinelearning",
          color: "pink-text-gradient",
        },
      ],
      image: signlang,
      source_code_link: "https://github.com/Nav-dev/Sign-Language-System-",
    },
    {
      name: "Chat Application",
      description:
        "Web application through which we can chat, create avatar, create groups and also create admins and various security features. ",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: chatapp,
      source_code_link: "https://github.com/Nav-dev/Chat-App",
    },
    {
      name: "Box Office",
      description:
        "A comprehensive app in which we can see all movies, series, actors, also decription of movies and information about the cast.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "JSX",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: boxoffice,
      source_code_link: "https://github.com/Nav-dev/box-office-app",
    },
    {
      name: "Tic Tac Toe",
      description:
        "Provides hands on experience of tic-tac-toe game also provides history of the moves and can go directly to that move.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/Nav-dev/box-office-app",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };