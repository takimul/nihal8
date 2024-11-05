import React, { useState } from "react";
import productData from "/assets/products.json";
import { useParams, useNavigate, json } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useLocalStorage } from "../../useLocalStorage";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productData.products.find(
    (prod) => prod.id === parseInt(productId)
  );
  // const localStorage = useLocalStorage();

  if (!product) {
    return <p>Product not found</p>;
  }

  const [data, setData] = useState([]);

  const addToWishList = (id) => {
    try {
      // Retrieve and parse wishlist, defaulting to an empty array if not found or invalid
      let products = JSON.parse(localStorage.getItem("WishList"));

      // If parsing failed (i.e., `products` is null or invalid), set it to an empty array
      if (!Array.isArray(products)) {
        products = [];
      }

      // Add the product ID if it's not already in the wishlist
      if (!products.includes(id)) {
        products.push(id);
        localStorage.setItem("WishList", JSON.stringify(products)); // Store updated wishlist
      } else {
        console.log("Product is already in the wishlist.");
      }
    } catch (error) {
      // In case of any parsing error, reset the wishlist and continue
      console.error("Error parsing wishlist data or updating it:", error);
      localStorage.setItem("WishList", JSON.stringify([id])); // Initialize with the new item
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-[#9538E2] text-white relative  ">
        <div className="hero-content text-center">
          <div className="px-10 pb-44">
            <h1 className="text-5xl font-bold">Product Details</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="w-[60%] h-56 md:h-auto absolute top-[90%] md:top-[60%] p-6 bg-slate-200  rounded-xl ">
          <div className="  md:h-full flex items-center justify-center bg-auto bg-center rounded-xl ">
            <div className="h-full bg-cover">
              <img src={product.image} alt="" className=" bg-cover " />
            </div>
            <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
            <p className="text-gray-700 mb-2">Model: {product.model}</p>
            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
            <p className="text-gray-700 mb-4">Details: {product.details}</p>
            <button
              onClick={() => navigate(-1)}
              className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
            >
              Back to Products
            </button>
            <button
              onClick={() => addToWishList(product.id)}
              className="btn btn-primary"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <div className="mt-72">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ProductDetails;
