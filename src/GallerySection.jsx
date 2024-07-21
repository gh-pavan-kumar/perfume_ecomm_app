import "./App.css";
function GallerySection() {
  return (
    <section className="section bg-light-black">
      <div className="container column">
        <h2>Our Perfume Gallery</h2>
        <div className="gallery-container">
          <div className="image-gallery">
            <img src="images/gallery1.jpg" alt="" />
          </div>
          <div className="image-gallery">
            <img src="images/gallery2.jpg" alt="" />
          </div>
          <div className="image-gallery">
            <img src="images/gallery3.jpg" alt="" />
          </div>
          <div className="image-gallery">
            <img src="images/gallery4.jpg" alt="" />
          </div>
          <div className="image-gallery">
            <img src="images/gallery5.jpg" alt="" />
          </div>
          <div className="image-gallery">
            <img src="images/gallery6.jpg" alt="" />
          </div>
          <div className="image-gallery">
            <img src="images/gallery7.jpg" alt="" />
          </div>
          <div className="image-gallery">
            <img src="images/gallery8.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;
