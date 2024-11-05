import React, { useState } from "react";
import productData from "/assets/products.json";
import ProductDetails from "../ProductDetails/ProductDetails";
import { Link } from "react-router-dom";

const Home = () => {
  const detail = true;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sortDescending, setSortDescending] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);

  // Filter products based on the selected category
  let filteredProducts =
    selectedCategory === "All"
      ? productData.products
      : productData.products.filter(
          (product) => product.category === selectedCategory
        );
  if (sortDescending) {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <ProductDetails product={selectedProduct} onBack={handleBackToList} />
    );
  }

  return (
    <div className="mt-64">
      <div className="flex">
        <div className="w-1/4 p-4">
          <h2>Categories</h2>
          <button
            onClick={() => setSelectedCategory("All")}
            className={`block w-full py-2 px-4 mb-2 ${
              selectedCategory === "All"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSortDescending(!sortDescending)}
            className={`py-1 px-4 text-sm font-semibold rounded ${
              sortDescending ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            Sort by Price {sortDescending ? "(Ascending)" : "(Descending)"}
          </button>
          <button
            onClick={() => setSelectedCategory("Laptop")}
            className={`block w-full py-2 px-4 mb-2 ${
              selectedCategory === "Laptop"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Laptop
          </button>
          <button
            onClick={() => setSelectedCategory("Mobile")}
            className={`block w-full py-2 px-4 mb-2 ${
              selectedCategory === "Mobile"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Mobile
          </button>
          <button
            onClick={() => setSelectedCategory("Accessory")}
            className={`block w-full py-2 px-4 mb-2 ${
              selectedCategory === "Accessory"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            Accessories
          </button>
        </div>

        <div className="w-3/4 p-4 ">
          <h1>{selectedCategory} List</h1>
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div className="shadow-lg rounded-xl flex flex-col justify-end ">
                <div className="flex justify-center bg-cover p-2 ">
                  <img src={product.image} alt="" />
                </div>
                <div className="flex flex-col align-bottom border border-red-200">
                  <h2 className="text-2xl font-bold pl-4">{product.name}</h2>

                  <p className="text-slate-700 font-semibold pl-4">
                    Price: ${product.price}
                  </p>
                  <Link to={`/product/${product.id}`}>
                    <button className="mt-2 py-1 px-4 border border-[#9538E2] text-[#9538E2]  text-lg rounded-3xl ml-4 mb-4">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
