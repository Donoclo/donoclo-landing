import './App.css';
import { useState, useEffect, useRef } from "react";
import Carousel from './component/Carousel'
import Closet from './component/Closet';
import RoadMap from './component/RoadMap';
import Header from './component/Header';
import Main from './component/Main';
import Card from './component/Card';
import Mint from './component/Mint';
import './font/font.css';

function App() {
  const outerDivRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      function snapScroll(i) {
        outerDivRef.current.scrollTo({
          top: pageHeight * i,
          left: 0,
          behavior: "smooth",
        });
        setScrollIndex(i + 1);
      }

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          snapScroll(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          snapScroll(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          snapScroll(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          snapScroll(4)
        } else {
          snapScroll(5);
        }
      } else {
        if (scrollTop >= 0 && scrollTop < pageHeight * 2) {
          snapScroll(0);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          snapScroll(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          snapScroll(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {
          snapScroll(3);
        } else {
          snapScroll(4);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);

  return (
    <>
      <Header />
      <div ref={outerDivRef} className="outer" >
        <div className ="main-ani" style={scrollIndex === 1 ? { animation: 'fade-in 1s ease-out' } : {}}>
          <Main />
        </div>
        <Card />
        <div className ="roadmap-ani" style={scrollIndex === 3 ? { animation: 'fade-in 1s ease-out' } : {}}>
          <RoadMap />
        </div>
        <Carousel />
        <Closet />
        <Mint />
      </div>
    </>
  );
}

export default App;
