import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import SwipeScroll from "./components/UI/SwipeScroll";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import "./app.scss";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="app">
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <SwipeScroll />
      <div className="sections">
        <Intro setOpenMenu={setOpenMenu} />
        <Skills setOpenMenu={setOpenMenu} />
        <Projects setOpenMenu={setOpenMenu} />
        <Contact setOpenMenu={setOpenMenu} />
      </div>
    </div>
  );
}

export default App;
