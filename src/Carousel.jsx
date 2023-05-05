import { useState } from "react";
import "./Carousel.css";
import "font-awesome/css/font-awesome.min.css";

function Carousel({ images, className }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const length = images.length;

  const projectsInfo=[
     'Project1-Cloud-Navtive Webapp',
     'Project2-Full STack FlashCards Website',
     'Project3-Cats Website',
     'Project4-Web Guess-Word Game',
     'Project5-My Todo List',
    ] 

  const Image = images.map(
    (image, index) =>
      index === currentIndex && (
        <img
          key={image.title}
          className="content__pic"
          src={image.image}
          alt={`${image.title}`}
        ></img>
      )
  );

  const handleClickPrev = () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) 
      prevIndex = length - 1;
    setCurrentIndex(prevIndex);
  };

  const handleClickNext = () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= length) 
      nextIndex = 0;
    setCurrentIndex(nextIndex);
  };

  const handleClickIndicator = (index) => {
    setCurrentIndex(index);
  };

  const getIndicatorText = (index) => (index === currentIndex ? "⦿" : "⦾");

  /*carousel__prev */
  return (
    <div className={`carousel ${className}`}>
      <div className="carousel__content">
        <button
          className="content__prev"
          onClick={handleClickPrev}
          aria-label="go to  previous image"
        >
          <i className="gg-chevron-left-o"></i>
        </button>
        {Image}
        <button
          className="content__next"
          onClick={handleClickNext}
          aria-label="go to next image"
        >
          <i className="gg-chevron-right-o"></i>
        </button>
      </div>
      <div className="carousel__indicators">
        {images.map((image, index) => (
          <span
            className={`indicator ${
              index === currentIndex ? "indicator--chosen" : ""
            } `}
            key={image.title}
            onClick={() => handleClickIndicator(index)}
          >
            {" "}
            {getIndicatorText(index)}
          </span>
        ))}
      </div>
      <p className="carousel__text">{projectsInfo[currentIndex]}</p>
    </div>
  );
}

export default Carousel;
