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
    type: "noroff teamwork",
    image: helTechImage,
    imageAlt: "helTech online shop",
    liveUrl: "https://helTech.netlify.app/",
    repoUrl: "https://github.com/Torehirth/helTech",
    readmeUrl: "https://github.com/Torehirth/helTech/blob/main/README.md",
    technologies: ["React", "TypeScript", "Vite", "React Router", "Zustand", "Noroff API"],
  },
  {
    id: "posteria",
    title: "Posteria",
    assignment: "CSS Frameworks",
    year: 2025,
    shortDescription:
      "A social media platform for creating posts, connecting with others and interacting with a shared feed.",
    type: "noroff solo",
    image: posteriaImage,
    imageAlt: "Posteria social media platform",
    liveUrl: "https://js2-posteria.netlify.app",
    repoUrl: "https://github.com/Torehirth/posteria",
    readmeUrl: "https://github.com/Torehirth/posteria/blob/main/README.md",
    technologies: ["HTML", "Tailwind CSS", "JavaScript", "Noroff API"],
  },
  {
    id: "bidRally",
    title: "BidRally",
    assignment: "Semester Project 2",
    year: 2025,
    shortDescription:
      "An auction platform where users can create listings, place bids, search auctions and manage their profile.",
    type: "noroff solo",
    image: bidRallyImage,
    imageAlt: "BidRally online auction platform",
    liveUrl: "https://torehirth.github.io/Bid-Rally/",
    repoUrl: "https://github.com/Torehirth/Bid-Rally",
    readmeUrl: "https://github.com/Torehirth/Bid-Rally/blob/main/README.md",
    technologies: [
      "Vite",
      "Tailwind CSS",
      "JavaScript",
      "Noroff API",
      "Vitest",
      "Playwright",
      "Noroff API",
    ],
  },
];
