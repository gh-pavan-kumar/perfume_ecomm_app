import { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import "./App.css";
import ProductData from "./ProductData";
function SellingProduct() {
  const [detail, setDetail] = useState([]);
  const [close, setClose] = useState(false);

  const detailPage = (p) => {
    setDetail([{ ...p }]);
    setClose(true);
  };
  return (
    <>
      <section className="section bg-dark-black">
        {/* product code starts */}
        {close ? (
          <div className="detail_container">
            <div className="detail_content">
              <button className="close" onClick={() => setClose(false)}>
                <FaWindowClose />
              </button>
              {detail.map((x) => {
                return (
                  <>
                    <div className="detail_info">
                      <div className="img-box">
                        <img src={x.image} alt={x.perfume_name}></img>
                      </div>
                      <div className="product_detail">
                        <h2>{x.perfume_name}</h2>
                        <h3>For {x.category}</h3>
                        <h3>$ {x.price}</h3>
                        <p>{x.description}</p>
                        <h4>⭐ {x.rating.rate}</h4>

                        <button>Add To Cart</button>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        ) : null}

        <div className="container column">
          <h2>Best Selling Products</h2>
          <div className="grid-card-container">
            {ProductData.map((product) => {
              return (
                <div className="card">
                  <div className="card-product">
                    <img src={product.image} alt={product.perfume_name} />
                  </div>
                  <div className="card-info">
                    <h4>{product.perfume_name}</h4>
                    <p className="price">$ {product.price}</p>
                    <button
                      href="/#"
                      className="primary-btn"
                      onClick={() => detailPage(product)}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default SellingProduct;
