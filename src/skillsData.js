import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faSass,
  faNodeJs,
  faFigma,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faM } from "@fortawesome/free-solid-svg-icons";

export const frontList = [
  { id: "f1", title: "React.js", icon: faReact },
  { id: "f2", title: "TypeScript", icon: faJsSquare },
  { id: "f3", title: "JavaScript", subtitle: ["ES6+"], icon: faJsSquare },
  { id: "f4", title: "HTML5", icon: faHtml5 },
  {
    id: "f5",
    title: "CSS3",
    subtitle: ["Flexbox", "Animation", "Module"],
    icon: faCss3,
  },
  { id: "f6", title: "Sass", icon: faSass },

  { id: "f7", title: "Material UI", icon: faM },
];

export const backList = [
  { id: "b1", title: "Node.js", subtitle: ["COMING SOON"], icon: faNodeJs },
];

export const otherList = [
  { id: "o1", title: "Github", icon: faGithubSquare },
  { id: "o2", title: "Figma", icon: faFigma },
];
