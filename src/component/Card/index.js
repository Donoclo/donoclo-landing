import "./index.css";

const Card = () => {
  return (
    <>
      <div className="card-container" style={{background: 'url(img/card-background-gra.png)', backgroundSize: "cover"}}>
      {/* <div className="card-container"> */}
      <div className="image-container">
          <img className="card-video" alt="" src="img/card-rev.GIF"/>
          {/* <img className="card-deco" alt="" src="img/card-deco.png"/> */}
        </div>
        <div className="card-contents">
        <h3 className="h3">MAKE YOUR OWN NFT</h3>

        <div className="card-description">Were you hesitating 
        to donate old clothes even though you don't wear them anymore?
        Donate to DONOCLO. And keep your memories as an unchanging NFT for a long time. 
        You can dress your character in that outfit and share the cool clothes with people. 
        Record the memories in your clothes together.</div>
      </div>
      </div>
    </>
  )
}

export default Card;