import "./index.css";
import { useState } from "react";

const Closet = () => {
  const [clothes, setClothes] = useState('C01')

  const chooseClothes = () => {
    switch (clothes) {
      case 'C01':
        return <img className="closet-model-img" alt="" src="img/model1.png" />
      case 'C02':
        return <img className="closet-model-img" alt="" src="img/model2.png" />
      case 'C03':
        return <img className="closet-model-img" alt="" src="img/model3.png" />
      case 'C04':
        return <img className="closet-model-img" alt="" src="img/model4.png" />
      default: 
        return;
    }

  }
  return (
    <>
      <div className="closet-container">
        <h3 className="h3">CUSTOMIZE YOUR AVATAR</h3>
        <div className="closet-contents">
          <div className="closet-clothes-col">
            <div className={clothes==="C01" ? "closet-clothes-container-selected" :"closet-clothes-container" } onClick={() => setClothes('C01')}  >
              <img className="closet-clothes-image" alt="clothes_01" src="img/clothes1.png" />
              <div className="closet-clothes-desc-top">
                <p className="closet-cothes-name">CO1</p>
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "white", marginRight: '5px' }} />
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "#3F4E76" }} />
              </div>
              <div className="closet-clothes-desc-bottom">
                CAT T-SHIRT AND JEAN
              </div>
            </div>
            <div className={clothes==="C02" ? "closet-clothes-container-selected" :"closet-clothes-container" } style={{ marginTop: '40px' }} onClick={() => setClothes('C02')}>
              <img className="closet-clothes-image" alt="clothes_01" src="img/clothes2.png" />
              <div className="closet-clothes-desc-top">
                <p className="closet-cothes-name">CO2</p>
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "white", marginRight: '5px' }} />
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "#282828" }} />
              </div>
              <div className="closet-clothes-desc-bottom">
                SLEEVELESS AND LEATHER PANTS
              </div>
            </div>
          </div>
          <div className="closet-model-container">
            {chooseClothes()}
            <div className="closet-model-name">{clothes}</div>
          </div>
          <div className="closet-clothes-col">
            <div className={clothes==="C03" ? "closet-clothes-container-selected" :"closet-clothes-container" } onClick={() => setClothes('C03')}>
              <img className="closet-clothes-image" alt="clothes_03" src="img/clothes3.png" />
              <div className="closet-clothes-desc-top">
                <p className="closet-cothes-name">CO3</p>
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "#151BE4", marginRight: '5px' }} />
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "#383837" }} />
              </div>
              <div className="closet-clothes-desc-bottom">
                BLUE PADDING AND PANTS
              </div>
            </div>
            <div className={clothes==="C04" ? "closet-clothes-container-selected" :"closet-clothes-container" } style={{ marginTop: '40px' }} onClick={() => setClothes('C04')}>
              <img className="closet-clothes-image" alt="clothes_01" src="img/clothes4.png" />
              <div className="closet-clothes-desc-top">
                <p className="closet-cothes-name">CO4</p>
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "#EEC228", marginRight: '5px' }} />
                <div className="closet-clothes-colorchip" style={{ backgroundColor: "#3F4E76" }} />
              </div>
              <div className="closet-clothes-desc-bottom">
                YELLOW T-SHIRT AND OVERALLS
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Closet;