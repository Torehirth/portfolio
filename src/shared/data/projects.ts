import posteriaImage from "../assets/images/posteria-desktop.webp";
import helTechImage from "../assets/images/heltech-desktop.webp";
import bidRallyImage from "../assets/images/bidrally-website.webp";

export const projects = [
  {
    id: "helTech",
    title: "HelTech",
    assignment: "JavaScript Frameworks",
    year: 2026,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
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
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
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
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibu",
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
