import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

import "./swipescroll.scss";

function SwipeScroll() {
  const [scroll, setScroll] = useState(true);

  const showScroll = () => {
    if (window.innerWidth <= 825) {
      setScroll(false);
    } else {
      setScroll(true);
    }
  };

  window.addEventListener("resize", showScroll);

  return (
    <div className="swipe-scroll">
      <div className={`wrapper`}>
        {scroll ? <span>scroll</span> : <span>swipe</span>}
        <FontAwesomeIcon icon={faAngleDoubleDown} className="icon arrow" />
      </div>
    </div>
  );
}

export default SwipeScroll;
