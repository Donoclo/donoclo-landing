import "./index.css";
import { useState } from "react";

const Closet = () => {
  const [clothes, setClothes] = useState('c01')
  const [isC01, setisC01] = useState(true)

  const chooseClothes = () => {
    switch (clothes) {
      case 'c01':
        return <img className="closet-model-img" src="img/model1.png" />
      case 'c02':
        return <img className="closet-model-img" src="img/model2.png" />
      case 'c03':
        return <img className="closet-model-img" src="img/model3.png" />
      case 'c04':
        return <img className="closet-model-img" src="img/model4.png" />
    }
  }
  return (
    <>
      <div className="closet-container">
        <h3 className="h3">CUSTOMIZE YOUR AVATAR</h3>
        <div className="closet-contents">
          <div className="closet-clothes-col">
            <div className={clothes=="c01" ? "closet-clothes-container-selected" :"closet-clothes-container" } onClick={() => setClothes('c01')}  >
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
            <div className={clothes=="c02" ? "closet-clothes-container-selected" :"closet-clothes-container" } style={{ marginTop: '40px' }} onClick={() => setClothes('c02')}>
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
            {/* <img className="closet-model-img" src="img/model1.png"/> */}
            <div className="closet-model-name">CO1</div>
          </div>
          <div className="closet-clothes-col">
            <div className={clothes=="c03" ? "closet-clothes-container-selected" :"closet-clothes-container" } onClick={() => setClothes('c03')}>
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
            <div className={clothes=="c04" ? "closet-clothes-container-selected" :"closet-clothes-container" } style={{ marginTop: '40px' }} onClick={() => setClothes('c04')}>
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