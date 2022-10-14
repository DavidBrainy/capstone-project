import React from "react";
import Fade from "react-reveal/Fade";

function index() {
  return (
    <div className=" bg-white bg-dave bg-no-repeat bg-object-cover">
      <div
        className="flex flex-col items-center justify-center 
    h-screen text-6xl text-white"
      >
        <Fade left>Welcome to the Portal</Fade>
      </div>
    </div>
  );
}

export default index;
