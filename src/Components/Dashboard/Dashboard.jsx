import React, { useEffect, useState } from "react";
import productData from "/assets/products.json";
import Navbar from "../Navbar/Navbar";
import Product from "../Product/Product";
import Footer from "../Footer/Footer";
import CommonBanner from "../CommonBanner/CommonBanner";

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [id, setId] = useState([]);
  console.log(productData.products);

  useEffect(() => {
    const data = localStorage.getItem("WishList");
    setId(JSON.parse(data));
  }, []);

  // Filter products based on the selected category
  const filteredProducts = productData.products.filter((product) =>
    id.includes(product.id)
  );
  return (
    <dev>
      <Navbar></Navbar>
      <CommonBanner title={"Dashboard"}></CommonBanner>

      {/* Product list */}
      <div className="w-3/4 p-4 mx-auto mt-10">
        <h1>{selectedCategory} WishList</h1>
        <div>
          {filteredProducts.map((product) => (
            <div className="md:card md:card-side bg-base-100 shadow-xl mb-4">
              <figure>
                <img
                  className="h-[200ox] w-[200px]"
                  src={product.image}
                  alt=""
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.details}</p>
                <p>Price:${product.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer></Footer>
    </dev>
  );
};

export default Dashboard;
