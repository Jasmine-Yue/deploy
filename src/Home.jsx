import  picture from './images/portrait.jpg';
import "./Home.css";

function Home() {
  const data = {
    title: "Xingping, A software developer",
    text: `A current graduate student of Information System at Northeastern University
          I had three year's developer experience for retailing industry`,
  };

  return (
    <div className="main__content">
      <section className="panel">
        <div className="panel__image">
          <img src={picture} alt="portrait of myself" />
        </div>
        <div className="panel__text">
          <h2 className="text__title">{data.title}</h2>
          <div className="text__detail">
            <p>
              {" "}
              While working as a data auditor, I tried my best and won the
              national prize for my work;
            </p>
            <p>
              While working as software developer, I tried my best and finished
              several big projects successfully.
            </p>
            <p>
              While being a mom, I tried my best to grow with her and see her
              blossom.
            </p>
            <p>
              Now I am ready to  try my best to be a web developer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
