import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export const contactMethods = [
  {
    label: "phone",
    href: "tel:+1-416-729-5604",
    icon: faPhone,
    id: "icon phone-icon",
    type: "phone",
  },
  {
    label: "email",
    href: "mailto: estherchoi.sh@gmail.com",
    icon: faEnvelope,
    id: "icon email-icon",
    type: "email",
  },
  {
    label: "LinkedIn",
    href: "http://www.linkedin.com/in/esther--choi",
    icon: faLinkedin,
    id: "icon linkedin-icon",
    type: "link",
  },
  {
    label: "Github",
    href: "https://github.com/esther-sh-choi",
    icon: faGithubSquare,
    id: "icon github-icon",
    type: "link",
  },
];
