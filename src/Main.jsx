import "./App.css";
import GallerySection from "./GallerySection";
import OurService from "./OurService";
import SalesSection from "./SalesSection";
import SellingProduct from "./SellingProduct";
function Main() {
  return (
    <main>
      {/* <!-- --------story section--------- --> */}
      <section className="section bg-light-black">
        <div className="container row">
          <div className="product-container">
            <img src="images/perfume1.png" alt="" />
          </div>
          <div className="content">
            <h2>Our Little Stroy</h2>
            <p className="para">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore, non ea aliquam asperiores numquam porro expedita, at,
              nesciunt temporibus quaerat placeat quae consequatur ut. Ut
              voluptatem ipsam molestiae dolore esse vel ipsa, omnis sequi
              doloribus similique, alias, id facilis nesciunt.
            </p>
            <a href="/#" className="primary-btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* <!-- -------selling products--- --> */}
      <SellingProduct />
      {/* <!-- -------our services----- --> */}
      <OurService />
      {/* <!-- -----sale section------ --> */}
      <SalesSection />
      {/* <!-- ------Gallary section----- --> */}
      <GallerySection />
    </main>
  );
}

export default Main;
