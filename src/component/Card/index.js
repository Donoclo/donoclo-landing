import "./index.css";

const Card = () => {
  return (
    <>
      <div className="card-container">
        <video muted autoPlay loop className="card-background-video">
          <source src="video/card-background.mp4" />
        </video>
        <div className="card-contents">
          <img className="card-video" alt="" src="img/card-transparent.gif" />
          <div className="card-description">
            <h3 className="h3">DONATE CLOTHES &<br></br> MAKE YOUR OWN ITEM</h3>

            <div className="card-sentence">Were you hesitating
              to donate old clothes even though you don't wear them anymore?
              Donate to DONOCLO. And keep your memories as an unchanging ITEM for a long time.
              You can dress your character in that outfit and share the cool clothes with people.
              Record the memories in your clothes together.</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card;