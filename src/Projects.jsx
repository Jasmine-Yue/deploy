import Accordion from "./Accordion";
import Carousel from "./Carousel";
import data from "./accordionData";
import "./Projects.css";

import project1 from "./images/project1.png";
import project2 from "./images/project2.png";
import project3 from "./images/project3.png";
import project4 from "./images/project4.png";
import project5 from "./images/project5.png";

function Projects() {
  const images = [
    {
      title: "project1-Cloud-Navtive Webapp",
      image: project1,
    },
    {
      title: "project2-Full STack FlashCards Website",
      image: project2,
    },
    {
      title: "project3-Cats Website",
      image: project3,
    },
    {
      title: "project4-Web Guess-word Game",
      image: project4,
    },
    {
      title: "project5-My Todo List",
      image: project5,
    },
  ];

  return (
    <div className="main__content">
      <div className="projects">
        <div className="projects__skills">
          <h2 className="skills__title">Skillsets And Tools</h2>
          <Accordion data={data} className="skills__details"></Accordion>
        </div>
        <div className="projects__intro">
          <h2 className="">Projects Browse</h2>
          <Carousel images={images}></Carousel>
        </div>
      </div>
    </div>
  );
}
export default Projects;
