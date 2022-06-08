import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faDisplay } from "@fortawesome/free-solid-svg-icons";

export const projects = [
  {
    icon: [faDisplay, faMobileScreen],
    id: 0,
    title: "Ladder Game for Indecisive People",
    skills: ["Figma", "React.js", "CSS Module"],
    description:
      "Assigning roles for a project or choosing who brings the dessert for a potluck can be a daunting task for indecisive people. Each person chooses an animal character after inputing various options. Then, simply let the ladder algorithm decide who will take what option!",
    technology: [
      "Technology: Howler, Context API, React hooks (useHistory, useRef, useContext), Local Storage",
      "I built my own ladder algorithm from scratch using arrays. Dynamic design based on the number of players.",
    ],
  },
];
