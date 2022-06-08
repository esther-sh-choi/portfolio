import ladderDemo from "./images/ladder-demo.gif";
import { faMobileScreen, faDisplay } from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    icon: [faDisplay, faMobileScreen],
    id: 1234,
    title: "Ladder Game for Indecisive People",
    skills: ["Figma", "React.js", "CSS Module"],
    description:
      "Assigning roles for a project or choosing who brings the dessert for a potluck can be a daunting task for indecisive people. Each person can simply choose an animal character after inputing the corresponding number of options. Then, let the ladder algorithm decide who will take what option!",
    technology: [
      "Technology: Howler, Context API, React hooks (useHistory, useRef, useContext), localStorage, Canvas API",
      "Built ladder algorithm from scratch",
      "Dynamic website based on the number of players",
    ],
    image: {
      src: ladderDemo,
      alt: "Ladder game demo thumbnail",
    },
  },
  {
    status: "comingSoon",
    icon: [faDisplay, faMobileScreen],
    id: 5678,
    title: "Foodify - Playlist of Restaurants",
    skills: ["Figma", "React.js", "CSS Module", "Node.js"],
    description:
      "We love to share our favourite songs through a playlist. Why not have a playlist for our favorite restaurants? Introducing the Eatlist. Share your go-to restaurants with the world!",
    technology: [
      "Technology: Google Places API, React hooks (useHistory, useRef, useContext), Redux",
      "CRUD website",
      "Sign-up and login",
    ],
    image: {
      src: ladderDemo,
      alt: "Ladder game demo thumbnail",
    },
  },
];
