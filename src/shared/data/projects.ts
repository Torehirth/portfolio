import posteriaImage from "../assets/images/posteria-desktop.webp";
import helTechImage from "../assets/images/heltech-desktop.webp";
import bidRallyImage from "../assets/images/bidrally-website.webp";

export const projects = [
  {
    id: "helTech",
    title: "HelTech",
    assignment: "JavaScript Frameworks",
    year: 2026,
    shortDescription:
      "A React webshop with product browsing, cart management, checkout and reusable components.",
    type: "noroff teamwork project",
    role: "teamwork",
    image: helTechImage,
    imageAlt: "helTech online shop interface",
    liveUrl: "https://helTech.netlify.app/",
    repoUrl: "https://github.com/Torehirth/helTech",
    readmeUrl: "https://github.com/Torehirth/helTech/blob/main/README.md",
    portfolioProjectUrl: "https://www.torehirth.no/projects/helTech",
    technologies: ["React", "TypeScript", "Vite", "React Router", "Zustand", "Noroff API", "Git"],
    overview:
      "HelTech is an e-commerce application built with React, TypeScript and Vite. It includes product browsing, product details, a shopping cart, checkout flow, routing and a contact page. The project was developed together with another student as part of the JavaScript Frameworks course.",
    approach:
      "The application was structured around reusable React components and separate feature areas. We kept the technology stack relatively small and used Zustand for shared state such as the shopping cart. Git and GitHub were used throughout the project to coordinate development between two developers.",
    challenges:
      "One of the main challenges was managing cart and checkout state across different parts of the application while keeping the components reusable and the data flow understandable. Working collaboratively also meant coordinating changes through Git and making sure our work could be combined without introducing conflicts.",
    learned:
      "HelTech gave me more experience building a complete application in React and TypeScript rather than working only on isolated components. I also gained practical experience with shared application state, reusable components and collaborating with another developer through Git and GitHub.",
  },
  {
    id: "posteria",
    title: "Posteria",
    assignment: "CSS Frameworks",
    year: 2025,
    shortDescription:
      "A social media platform for creating posts, connecting with others and interacting with a shared feed.",
    type: "noroff solo project",
    role: "solo",
    image: posteriaImage,
    imageAlt: "Posteria social media platform",
    liveUrl: "https://js2-posteria.netlify.app",
    repoUrl: "https://github.com/Torehirth/posteria",
    readmeUrl: "https://github.com/Torehirth/posteria/blob/main/README.md",
    portfolioProjectUrl: "https://www.torehirth.no/projects/posteria",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Noroff API", "Git"],
    overview:
      "Posteria is a responsive social media platform where users can create and share posts, view profiles and interact with other users. The project was built with HTML, JavaScript and Tailwind CSS, using the Noroff API as the data source.",
    approach:
      "The project started with interface design and prototyping in Figma before moving into development. Tailwind CSS was used to build a responsive interface, while the JavaScript was organised around the different pages and interactions with the Noroff API.",
    challenges:
      "One of the main challenges was combining API-driven functionality with a consistent responsive interface across several pages, including the feed, profiles and individual posts. The project also included both light and dark themes, which added another layer of UI state and styling to manage.",
    learned:
      "Posteria gave me more experience working with an API in a larger multi-page project and helped me understand how a CSS framework can be used to build a consistent responsive interface. It also gave me more practice moving from a Figma prototype into a working application.",
  },
  {
    id: "bidRally",
    title: "BidRally",
    assignment: "Semester Project 2",
    year: 2025,
    shortDescription:
      "An auction platform where users can create listings, place bids, search auctions and manage their profile.",
    type: "noroff solo project",
    role: "solo",
    image: bidRallyImage,
    imageAlt: "BidRally online auction platform",
    liveUrl: "https://torehirth.github.io/Bid-Rally/",
    repoUrl: "https://github.com/Torehirth/Bid-Rally",
    readmeUrl: "https://github.com/Torehirth/Bid-Rally/blob/main/README.md",
    portfolioProjectUrl: "https://www.torehirth.no/projects/bidRally",
    technologies: ["Vite", "Tailwind CSS", "JavaScript", "Noroff API", "Git"],
    overview:
      "BidRally is an online auction platform where users can register, create auction listings, place bids, search for listings and manage their profile. It was built with Vite, Tailwind CSS and vanilla JavaScript using the Noroff API v2 with JWT authentication.",
    approach:
      "The project was built as a modular JavaScript application with separate functionality for authentication, listings, bidding, search and profile management. Tailwind CSS was used for the responsive interface, while the Noroff API handled users, listings and bids.",
    challenges:
      "A major part of the project was handling authenticated and unauthenticated user flows correctly while working with API data across several features. The project also introduced automated testing, which required me to think more deliberately about how individual functions and complete user flows could be tested.",
    learned:
      "BidRally was my first project where I wrote automated tests. I used Vitest for testing JavaScript functionality and Playwright for browser-based tests. The project also gave me more experience with authentication, API integration and organising a larger vanilla JavaScript application.",
  },
];
