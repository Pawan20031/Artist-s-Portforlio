import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import data from "../assests/data.json";
import dataC from "../assests/data copy.json";

const Gallery = () => {
  return (
    <>
        <h2 className="gallery">Gallery</h2>
      <div className="html">
        <div className="body">
          {
          dataC.projects.map((i) => (
            <img src={i.imgSrc} alt="" className="iimg"/>
          ))
          }
        </div>
      </div></>
    
  );
};

export default Gallery;
