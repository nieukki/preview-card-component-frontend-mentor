import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img
        src="./images/image-header-mobile.jpg"
        className="rounded-t-3xl ds:rounded-none"
      ></img>
      <div className="rounded-t-3xl w-full h-full bg-violetAccent absolute top-0 opacity-35 ds:rounded-none"></div>
    </div>
  );
};

export default Hero;
