import React from "react";
import { useLayoutEffect } from "react";

import NavB from "../Components/NavB";
import Icon from "../Components/Icon";
import Card from "../Components/Card";
import Ft from "../Components/Ft";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import Line from '../assets/line.png'
import Animator from "../Components/Animator";

const Eng = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <>
      <NavB l="/Ar"/>
      
      <Animator>
      <div className="content">
        {/* landing page */}
        <div className="section1">
          <div className="b">
            <div className="txt">
              <h1>Chato</h1>
              <p>Biscuit</p>
              <h3>For EveryOne</h3>
              <a href="#sc">
                <Icon className="sss" icon="fa-solid fa-arrow-down" />
              </a>
            </div>
            <div className="img">
              <img src={img1} alt="Landing Page" />
            </div>
          </div>
        </div>

        <div id="sc" className="section2">
          <h1>The ...</h1>
          <div className="row">
            <Card icon="fa-brands fa-delicious" txt="Most Delecious" />
            <Card icon="fa-solid fa-cookie" txt="Best Cookis" />
            <Card icon="fa-regular fa-heart" txt="Most Healthy" />
          </div>
        </div>
        <img id="Line" src={Line} alt="Img For Design" />
        <div className="section3">
          <iframe
            width={560}
            height={315}
            src="https://www.youtube.com/embed/3bAFraQb48U?si=S_WN_utfrrJSdvwk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen=""
          />
        </div>
        <img id="Line2" src={Line} alt="Img For Design" />

        <div className="section4">
          <h1>Since <u>1976</u></h1>
          <img src={img2} alt="Bisuit" />
        </div>
        <Ft/>
      </div>
      </Animator>
    </>
  );
};

export default Eng;
