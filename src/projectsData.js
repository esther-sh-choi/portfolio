import ladderDemo from "./images/ladder-demo.gif";
import { faMobileScreen, faDisplay } from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    icon: [
      { label: faDisplay, alt: "Desktop Compatible" },
      { label: faMobileScreen, alt: "Mobile Compatible" },
    ],
    id: 1234,
    title: "Ladder Game for Indecisive People",
    skills: ["Figma", "React.js", "CSS Module"],
    description:
      "Assigning roles or deciding what to eat can be a daunting task for indecisive people. Simply input the roles and choose an animal. Can't choose? Let the ladder pick for you.",
    technology: [
      "Technology: Howler, Context API, React hooks (useState, useEffect, useHistory, useRef, useContext), localStorage, Canvas API",
      "Built ladder algorithm from scratch",
      "Dynamic website based on the number of players",
    ],
    image: {
      src: ladderDemo,
      alt: "Ladder game demo thumbnail",
    },
    links: {
      website: "https://adorable-stroopwafel-9cc3ff.netlify.app/",
      github: "https://github.com/esther-sh-choi/ladder-game",
    },
  },
  {
    icon: [
      { label: faDisplay, alt: "Desktop Compatible" },
      { label: faMobileScreen, alt: "Mobile Compatible" },
    ],
    id: 1357,
    title: "Project Portfolio Website",
    skills: ["React.js", "SCSS"],
    description:
      "Elegant and responsive, single-page react web application. The responsive design allows for smooth user interface and experience in various screen sizes. I made use of up-to-date and trendy design features for great aesthetics.",
    technology: ["Technology: Sass", "CSS capabilities (animation)"],
    image: {
      src: ladderDemo,
      alt: "Foodify demo thumbnail",
    },
    links: {
      website: "",
      github: "",
    },
  },
  {
    icon: [
      { label: faDisplay, alt: "Desktop Compatible" },
      { label: faMobileScreen, alt: "Mobile Compatible" },
    ],
    id: 5678,
    title: "Foodify - Playlist of Restaurants",
    skills: ["Figma", "React.js", "CSS Module", "Node.js"],
    description:
      "We love to share our favourite songs through a playlist. Why not have a playlist for our favorite restaurants? Introducing the Eatlist. Share your go-to restaurants with the world!",
    technology: [
      "Technology: Google Places API, React hooks (useHistory, useRef, useContext), Redux",
      "CRUD website",
      "User authentication using Node.js",
    ],
    image: {
      src: ladderDemo,
      alt: "Foodify demo thumbnail",
    },
    links: {
      website: "",
      github: "",
    },
  },
];
