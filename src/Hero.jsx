import "./App.css";
function Hero() {
  return (
    <div className="hero-section">
      <div className="left-container">
        <h1>THE FRAGRANCE OF LIFE</h1>
      </div>
      <div className="middle-container">
        <img src="images/perfume.png" alt="" />
      </div>
      <div className="right-container">
        <p className="para" data-type="border-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, esse
          non et optio eum amet vero dolore accusantium tempora maiores,
          corrupti minus nisi necessitatibus consequuntur?
        </p>
      </div>
    </div>
  );
}

export default Hero;
