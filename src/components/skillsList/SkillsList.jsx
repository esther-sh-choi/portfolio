import React from "react";
import "./skillsList.scss";

function SkillsList({ title, active, setSelected, id, key }) {
  return (
    <li
      className={active ? "skillsList active" : "active"}
      key={key}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default SkillsList;
