import "./index.css";

const RoadMap = () => {
  return (
    <>
      <div className="roadmap-container" >
        <h3 className="h3">HOW OUR SERVICE WORKS</h3>
        <div className="roadmap-road-container">
          <div>
            <div className="roadmap-road1" >
              <img className="roadmap-road-icon" alt="" src="img/roadmap-icon1.png" />
              <div className="roadmap-road-title">STEP 01</div>
              <div className="roadmap-road-subtitle">Donate old clothes</div>
              <div className="roadmap-road-desc">Send us old clothes you don’t wear. Convenience store drop-off will be supported.</div>
            </div>
          </div>
          <div>
            <div className="roadmap-road2">
              <img className="roadmap-road-icon" alt="" src="img/roadmap-icon2.png" />
              <div className="roadmap-road-title">STEP 02</div>
              <div className="roadmap-road-subtitle">Mint your own Metaverse Fashion</div>
              <div className="roadmap-road-desc">DONOCLO will make 3D fashion models with your old clothes and make them as NFT. $DONO token will be rewarded also.</div>
            </div>
          </div>
          <div>3

            <div className="roadmap-road3">
              <img className="roadmap-road-icon" alt="" src="img/roadmap-icon3.png" />
              <div className="roadmap-road-title">STEP 03</div>
              <div className="roadmap-road-subtitle">Take of more BBOM <br></br>with $DONO</div>
              <div className="roadmap-road-desc">Use $DONO to get another fashion items in DONOCLO Market Place. Trade your 3D Fashions and be a fashionista.</div>
            </div>
          </div>
          <div>
            <div className="roadmap-road4">
              <img className="roadmap-road-icon" alt="" src="img/roadmap-icon4.png" />
              <div className="roadmap-road-title">STEP 04</div>
              <div className="roadmap-road-subtitle">Save Earth, Help Others</div>
              <div className="roadmap-road-desc">Collected old clothes will be used to help others. DONOCLO Fashion NFT will can be a great medal representing your actions for Earth and Others.</div>
            </div>
          </div>
        </div>

        <img className="roadmap-background" alt="" src="img/roadmap-background.png" />
      </div>
    </>
  )
}
export default RoadMap;