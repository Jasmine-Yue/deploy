

function Panel({img,alt,title,text,children}) {
    return (
        <section className="panel">
            <img src={img} alt={alt} className="panel__img" />
             <h2 className="panel__title">{title}</h2>
             <div className="panel__text">{children}</div>
        </section>
    );

/*     const panelData=[
      { id:1,
        img: "https://placekitten.com/125/125?image=1",
        title:'long time internet subjects' ,
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime error, similique mollitia inventore perspiciatis?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus et voluptatem officia quidem. Alias.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam id asperiores facere animi recusandae similique.` 
        },
         { id:2,
        img: "https://placekitten.com/125/125?image=2",
        title: 'long time internet kings',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime error, similique mollitia inventore perspiciatis?
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt natus et voluptatem officia quidem. Alias.
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam id asperiores facere animi recusandae similique.` 
      }
    ]; */

/*       return (
        <section className="panel">
            <img src={img} alt={alt} className="panel__img" />
             <h2 className="panel__title">{title}</h2>
             <div className="panel__text">{text}</div>
        </section>
    ); */

}

export default Panel;