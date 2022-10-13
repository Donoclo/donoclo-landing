import "./index.css";
import { useEffect, useState } from "react";
import C01 from './assets/C01.png';
import C02 from './assets/C02.png';
import C03 from './assets/C03.png';
import C04 from './assets/C04.png';
import C05 from './assets/C05.png';
import C06 from './assets/C06.png';
import C07 from './assets/C07.png';

function Carousel() {
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m; 
  };

  const cards = [
    {      id: "1",
      image: C01,
    },
    {
      id: "2",
      image: C02,
    },
    {
      id: "3",
      image: C03,
    },
    {
      id: "4",
    image: C04,
    },
    {
      id: "5",
      image: C05,
    },
    {
      id: "6",
      image: C06,
    },    
    {
      id: "7",
      image: C07,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIndex((index + 1) % cards.length);
      // console.log(index);
    }, 1800);
  }, [index]);


  return (
    // <div className="Carousel">
    <div className="Carousel" style={{background: 'url(img/carousel-background-gra.png)', backgroundSize:"cover"}}>
      <h3 className="h3-1">EXPLORE</h3>
      <div className="carousel-container">
      {cards.map((item, i) => {
        const indexLeft3 = mod(index - 3, cards.length);
        const indexLeft2 = mod(index - 2, cards.length);
        const indexLeft1 = mod(index - 1, cards.length);
        const indexRight1 = mod(index + 1, cards.length);
        const indexRight2 = mod(index + 2, cards.length);
        const indexRight3 = mod(index + 3, cards.length);

        let className = "card";

        if (i === index) {
          className = "card card--active";
        } else if (i === indexRight3) {
          className = "card card--right3"
        } else if (i === indexRight2) {
          className = "card card--right2"
        } else if (i === indexRight1) {
          className = "card card--right1";
        } else if (i === indexLeft1) {
          className = "card card--left1";
        } else if (i === indexLeft2) {
          className = "card card--left2"
        } else if (i === indexLeft3) {
          className = "card card--left3"
        } else {
          className = "card";
        }

        return (
          <>
          <img
            key={item.id}
            className={className}
            src={item.image}
            alt="C"
          ></img>
          </>
        );
      })}
      </div>
      <div className="carousel-description">
        You can make NFT like above through donated old clothes. <br></br>
        Aren't you excited about what new value your old clothes will have?
      </div>
    </div>
  );
}

export default Carousel;