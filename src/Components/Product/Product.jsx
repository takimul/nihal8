import React from "react";
import productData from "/assets/products.json";

const Product = () => {
  return (
    <div className="rounded-xl shadow-2xl grid grid-cols-3 gap-4">
      {productData.products.map((product) => (
        <div key={product.id}>
          <div className="border border-red-300 rounded-xl">
            <h2>{product.name}</h2>

            <p>Price: ${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
