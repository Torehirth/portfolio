import posteriaImage from "../assets/projects/posteria.webp";
import helTechImage from "../assets/projects/helTech.webp";
import bidRallyImage from "../assets/projects/bidRally.webp";

export const projects = [
  {
    id: "posteria",
    title: "Posteria",
    assignment: "CSS Frameworks",
    shortDescription:
      "A social media platform for creating posts, connecting with others and interacting with a shared feed.",
    image: posteriaImage,
    imageAlt: "Posteria social media platform",
    liveUrl: "https://js2-posteria.netlify.app",
    repoUrl: "https://github.com/Torehirth/posteria",
    readmeUrl: "https://github.com/Torehirth/posteria/blob/main/README.md",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
  },
  {
    id: "helTech",
    title: "helTech",
    assignment: "JavaScript Frameworks",
    shortDescription:
      "A React webshop with product browsing, cart management, checkout and reusable components.",
    image: helTechImage,
    imageAlt: "helTech online shop",
    liveUrl: "https://helTech.netlify.app/",
    repoUrl: "https://github.com/Torehirth/helTech",
    readmeUrl: "https://github.com/Torehirth/helTech/blob/main/README.md",
    technologies: ["React", "TypeScript", "Vite", "React Router", "Zustand", "Vitest"],
  },
  {
    id: "bid-rally",
    title: "BidRally",
    assignment: "Semester Project 2",
    shortDescription:
      "An auction platform where users can create listings, place bids, search auctions and manage their profile.",
    image: bidRallyImage,
    imageAlt: "BidRally online auction platform",
    liveUrl: "https://torehirth.github.io/Bid-Rally/",
    repoUrl: "https://github.com/Torehirth/Bid-Rally",
    readmeUrl: "https://github.com/Torehirth/Bid-Rally/blob/main/README.md",
    technologies: ["Vite", "Tailwind CSS", "JavaScript", "Noroff API", "Vitest", "Playwright"],
  },
];
