import React from "react";
import Tools from "../../components/tools/tools";
import Scene from "../../components/scene/scene";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <div className='tools-container'>
        <Tools />
      </div>
      <div className='canvas-container'>
        <Scene />
      </div>
    </>
  );
}

export default HomePage;
