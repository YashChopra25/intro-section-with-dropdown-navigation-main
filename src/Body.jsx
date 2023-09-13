import React from "react";
import img1 from "./images/client-databiz.svg";
import img2 from "./images/client-audiophile.svg";
import img3 from "./images/client-meet.svg";
import img4 from "./images/client-maker.svg";
import imghero from "./images/image-hero-desktop.png";
const Body = () => {
  return (
    <>
      <main>
        <div className="leftside">
          <div className="content">
            <h1>Make remote work</h1>
            <p>
              Get your team in sync,no matter your location. Streamline 
              processes. create team rituals,and watch productivity soar.
            </p>
            <button>Learn more </button>
            <div className="imagesleft">
              <img src={img1} alt="client-databiz.svg" />
              <img src={img2} alt="client-audiophile.svg" />
              <img src={img3} alt="client-meet.svg" />
              <img src={img4} alt="client-maker.svg" />
            </div>
          </div>
        </div>
        <div className="rightside">
          <img src={imghero} alt="hero" />
        </div> 
      </main>
    </>
  );
};
export default Body;
