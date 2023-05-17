import React, { useEffect, useState } from "react";
import "../assets/css/Carousel.css";

const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut = autoPlay && setTimeout(slideRight, 2500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [current, autoPlay]);

  const slideRight = () => {
    setCurrent((prevCurrent) => (prevCurrent === images.length - 1 ? 0 : prevCurrent + 1));
  };


  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <div className="carousel_wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel_card ${index === current ? "carousel_card-active" : ""}`}
          >
            <img className="card_image" src={image.image} alt="" />
          </div>
        ))}

        <div className="carousel_pagination">
          {images.map((_, index) => (
            <div
              key={index}
              className={`pagination_dot ${index === current ? "pagination_dot-active" : ""}`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
