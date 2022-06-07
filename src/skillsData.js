import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faSass,
  faBootstrap,
  faNodeJs,
  faFigma,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

export const frontList = [
  { id: 1, title: "HTML5", icon: faHtml5 },
  {
    id: 2,
    title: "CSS3",
    subtitle: ["Flexbox", "Grid", "Animation", "Module"],
    icon: faCss3,
  },
  { id: 3, title: "Sass", icon: faSass },
  { id: 4, title: "JavaScript", subtitle: ["ES6+"], icon: faJsSquare },
  { id: 5, title: "React.js", icon: faReact },
  { id: 6, title: "Github", icon: faGithubSquare },
  { id: 7, title: "Figma", icon: faFigma },
];

export const backList = [
  { id: 7, title: "Node.js", subtitle: ["COMING SOON"], icon: faNodeJs },
];
