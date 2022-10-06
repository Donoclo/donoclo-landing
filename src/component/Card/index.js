import "./index.css";

const Card = () => {
  return (
    <>
      <div className="card-container"   style={{background: 'url(img/background1.png)', backgroundSize:'cover'}}>
        <h3 className="h3">ABOUT NFT</h3>
            {/* <img className="card-video" src="img/card.GIF"/> */}
            <img className="card-video" src="img/card-rev.GIF"/>

        <div className="card-description">sdfhlesfldddsndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddsdfhjlsdflkjwefljhdslfjddddddddddddddddddddddddddddddddddddddddddddd</div>
      </div>
    </>
  )
}

export default Card