import './index.css';

function Main(){
  return(
    <>
    <div className="main-container" style={{background: 'url(img/main-background-gra.png)', backgroundSize:"cover"}}>
      <div className="main-image-container">
        <img className="main-image" alt="main" src="img/Main.png" />

        <div className="main-desc-container">
          <div className="main-description">Donate old clothes to give them new value. Keep some special clothes that you want to remember in NFT. Oh, by the way, we can also protect the environment.
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Main;