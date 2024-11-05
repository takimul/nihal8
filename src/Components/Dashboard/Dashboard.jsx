//test 2
import React, { useEffect, useState } from "react";
import productData from "/assets/products.json";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import CommonBanner from "../CommonBanner/CommonBanner";

const Dashboard = () => {
  const [view, setView] = useState("wishlist"); // Controls view (wishlist or cart)
  const [wishlistIds, setWishlistIds] = useState([]);
  const [cartIds, setCartIds] = useState([]);
  const [sortDescending, setSortDescending] = useState(false); // Controls sorting order

  // Load wishlist and cart data from localStorage
  useEffect(() => {
    const storedWishlist = localStorage.getItem("WishList");
    const storedCart = localStorage.getItem("Cart");

    if (storedWishlist) {
      setWishlistIds(JSON.parse(storedWishlist));
    }

    if (storedCart) {
      setCartIds(JSON.parse(storedCart));
    }
  }, []);

  // Filter products based on the selected view (wishlist or cart)
  let filteredProducts = productData.products.filter((product) =>
    view === "wishlist"
      ? wishlistIds.includes(product.id)
      : cartIds.includes(product.id)
  );

  // Sort products based on sortDescending
  if (sortDescending) {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }
  const handleDelete = (productId) => {
    if (view === "wishlist") {
      const updatedWishlist = wishlistIds.filter((id) => id !== productId);
      setWishlistIds(updatedWishlist);
      localStorage.setItem("WishList", JSON.stringify(updatedWishlist));
    } else {
      const updatedCart = cartIds.filter((id) => id !== productId);
      setCartIds(updatedCart);
      localStorage.setItem("Cart", JSON.stringify(updatedCart));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hero bg-[#9538E2] text-white relative">
        <div className="hero-content text-center">
          <div className="px-10 py-6">
            <h1 className="text-5xl font-bold">Dashboard</h1>
            <p className="py-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setView("cart")}
                className={`btn ${
                  view === "cart" ? "btn-primary" : "btn-secondary"
                }`}
              >
                Cart
              </button>
              <button
                onClick={() => setView("wishlist")}
                className={`btn ${
                  view === "wishlist" ? "btn-primary" : "btn-secondary"
                }`}
              >
                Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Heading and sort options */}
      <div className="flex justify-between w-[70%] mx-auto my-6">
        <h1 className="text-2xl font-bold">
          {view === "wishlist" ? "Wishlist" : "Cart"} Items
        </h1>
        <div>
          <button
            onClick={() => setSortDescending(!sortDescending)}
            className={`btn ${
              sortDescending ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            Sort by Price
          </button>
          <button className="btn btn-primary ml-2">Purchase</button>
        </div>
      </div>

      {/* Product list */}
      <div className="w-3/4 p-4 mx-auto mt-10">
        {filteredProducts.length === 0 ? (
          <p className="text-center">
            No items in {view === "wishlist" ? "Wishlist" : "Cart"}
          </p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="md:card md:card-side bg-base-100 shadow-xl mb-4"
            >
              <figure>
                <img
                  className="h-[200px] w-[200px]"
                  src={product.image}
                  alt={product.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.details}</p>
                <p>Price: ${product.price}</p>

                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-52">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Dashboard;

//test 3
