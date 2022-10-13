import "./index.css";

const RoadMap = () => {
  return (
    <>
      <div className="roadmap-container" >
        {/* <div className="roadmap-gradient" /> */}
        <h3 className="h3">HOW OUR SERVICE WORKS</h3>
        <div className="roadmap-road-container">
          <div>
            <div className="roadmap-road1" >
              <img className="roadmap-road-icon" alt="" src="img/roadmap-icon1.png" />
              <div className="roadmap-road-title">STEP 01</div>
              <div className="roadmap-road-subtitle">Donate old clothes</div>
              <div className="roadmap-road-desc">Donate clothes you don't wear. <br></br>We will give you an exchange <div></div>ticket to make an NFT every time you donate 15kg of clothes.</div>
            </div>
          </div>
          <div>
            <div className="roadmap-road2">
              <img className="roadmap-road-icon" alt="" src="img/roadmap-icon2.png" />
              <div className="roadmap-road-title">STEP 02</div>
              <div className="roadmap-road-subtitle">Make your own NFT</div>
              <div className="roadmap-road-desc">Choose the clothes you want to keep by making them into NFTs. Wear the NFT you made to cute characters. Show off your new <br></br>old clothes to others.</div>
            </div>
          </div>
          <div>
            <div className="roadmap-road3">
              <img className="roadmap-road-icon" alt="" src="img/roadmap-icon3.png" />
              <div className="roadmap-road-title">STEP 03</div>
              <div className="roadmap-road-subtitle">Make your NFT</div>
              <div className="roadmap-road-desc">We will donate 00 percent of the profits <br></br>from your donation of old clothes to the <br></br>community. Have a great experience with DONOCLO, becoming a great NFT owner, <br></br>saving the environment, and contributing <br></br>to the community by donating old clothes that you don't wear!</div>
            </div>
          </div>
        </div>

        <img className="roadmap-background" alt="" src="img/roadmap-background.png" />
      </div>
    </>
  )
}
export default RoadMap;