import data from "./workdata";
import "./Work.css";
import  work1 from './images/work1.jpg';
import  work2 from './images/work2.jpg';
import  work3 from './images/work3.png';

function Work() {

  // const pictures= [picture1,picture2,picture3];

     const pictures = [
    {
      id:1,
      image: work1,
    },
    {
     id:2,
      image: work2,
    },
      {
      id:3,
      image: work3,
    }]


  const cards = data.map((item,index) => {
    const list = item.duty.map((duty) => <li key={duty}>{duty}</li>);

/*     const picture=pictures[index]; */

    return (
      <div key={item.id} className="card">
        <div className="card__picture">
          <img src={pictures[index].image} alt={`${item.title} of ${item.company}`} />
        </div>
        <div className="card__text">
          <h3 className="card__title">{item.title}</h3>
          <div className="card__location">
            <span className="location">{item.company}</span>
            <span className="time">{item.date}</span>
          </div>
          <ul className="card__list">{list}</ul>
        </div>
      </div>
    );
  });

  return (
    <div className="main__content">
      <div className="cards">
          {cards}
      </div>    
    </div>);
}
export default Work;
