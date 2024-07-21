import "./App.css";
function SalesSection() {
  return (
    <section className="section bg-dark-black celebrate">
      <div className="glow1"></div>
      <div className="glow2"></div>
      <div className="container row">
        <div className="sale-product">
          <img src="images/sale perfume.png" alt="" />
        </div>
        <div className="sale-content">
          <p className="sale-heading">Celebrate day sale</p>
          <h3 className="sale-txt">
            Save 25% off On All <br />
            Items Collection
          </h3>
          <a href="/#" className="primary-btn">
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default SalesSection;
