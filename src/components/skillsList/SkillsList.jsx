import React from "react";
import "./skillsList.scss";

function SkillsList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "skillsList active" : "skillsList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default SkillsList;
