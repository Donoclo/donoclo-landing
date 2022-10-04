import "./index.css";
import { useEffect, useState } from "react";

const RoadMap = () => {
  const [position, setPosition] = useState(0);

  function onScroll(){
    setPosition(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener("scroll", onScroll);
    return ()=>{
      window.removeEventListener("scroll", onScroll);
    }
  },[])

  console.log(position)
  
  return(
    <>
      <div className="roadmap-container">
        <h3 className="h3" style={{position:'absolute', top:'70px'}}>HOW OUR SERVICE WORKS</h3>
        <img className="roadmap-background" src="img/roadmap.png" style={position < 600 ?{ opacity: (position-200)/200 }  : position > 1000 ?{opacity: (-position+1300)/100} : {}}/>
        <div className="roadmap-road1" style={position < 600 ?{ transform:`translateX(${position-600}px)`, opacity: (position-300)/100 }  : position > 1000 ?{transform:`translateX(${-position+1000}px)`, opacity: (-position+1300)/100} : {}}>
          <div className="roadmap-road-title">STEP 01</div>
          <div className="roadmap-road-subtitle">Donate old clothes</div>
          <div className="roadmap-road-desc">wktpgks tjfauddl durl emfdjrkf sdgsdgsd dPwjddlqslek blablablablablablawktpgks tjfauddl durl emfdjrkf dPwjddlqslek blablablablablablawktpgks tjfauddl durl emfdjrkf dPwjddlqslek wktpgks </div>
        </div>
        <div className="roadmap-road2" style={position < 600 ?{ transform:`translateX(${position-600}px)`, opacity: (position-300)/100 }  : position > 1000 ?{transform:`translateX(${-position+1000}px)`, opacity: (-position+1300)/100} : {}}>
          <div className="roadmap-road-title">STEP 02</div>
          <div className="roadmap-road-subtitle">Make your NFT</div>
          <div className="roadmap-road-desc">wktpgks tjfauddl durl emfdjrkf sdgsdgsd dPwjddlqslek blablablablablablawktpgks tjfauddl durl emfdjrkf dPwjddlqslek blablablablablablawktpgks tjfauddl durl emfdjrkf dPwjddlqslek wktpgks </div>
        </div>
        <div className="roadmap-road3" style={position < 600 ?{  transform:`translateX(${-position+600}px)`,opacity: (position-300)/100 } : position > 1000 ?{transform:`translateX(${+position-1000}px)`, opacity: (-position+1300)/100} : {}}>
          <div className="roadmap-road-title">STEP 03</div>
          <div className="roadmap-road-subtitle">Make your NFT</div>
          <div className="roadmap-road-desc">wktpgks tjfauddl durl emfdjrkf sdgsdgsd dPwjddlqslek blablablablablablawktpgks tjfauddl durl emfdjrkf dPwjddlqslek blablablablablablawktpgks tjfauddl durl emfdjrkf dPwjddlqslek wktpgks </div>
        </div>
      </div>
    </>
  )
}
export default RoadMap;