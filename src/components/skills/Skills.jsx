import React, { useState, useEffect } from "react";
import "./skills.scss";
import SkillsList from "../skillsList/SkillsList";
import { frontList, backList } from "../../skillsData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Skills({ setOpenMenu }) {
  const [selected, setSelected] = useState("front");
  const [skillData, setSkillData] = useState([]);

  const skillTypeList = [
    {
      id: "front",
      title: "Front-End",
      key: 0,
    },
    {
      id: "back",
      title: "Back-End",
      key: 1,
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "front":
        setSkillData(frontList);
        break;
      case "back":
        setSkillData(backList);
        break;
      default:
        setSkillData(frontList);
    }
  }, [selected]);

  return (
    <div className="skills" id="skills" onClick={() => setOpenMenu(false)}>
      <h1>Skills</h1>
      <ul>
        {skillTypeList.map((item) => (
          <SkillsList
            title={item.title}
            id={item.id}
            key={item.key}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {skillData.map((d) => (
          <div className="item" key={d.id}>
            <FontAwesomeIcon icon={d.icon} className="icon" />
            <h3>{d.title}</h3>
            {d.subtitle &&
              d.subtitle.map((sub) => (
                <h5 key={d.subtitle.indexOf(sub)}>{sub}</h5>
              ))}
          </div>
        ))}
      </div>
      <div className="bg wave">
        {/* <image src="../../images/wave-bg.svg" /> */}
      </div>
    </div>
  );
}
