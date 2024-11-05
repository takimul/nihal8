import React from "react";
import Navbar from "../Navbar/Navbar";
import CommonBanner from "../CommonBanner/CommonBanner";
import Footer from "../Footer/Footer";

const Statistics = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CommonBanner title={"Stastics"}></CommonBanner>
      <div className="mt-48">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Statistics;
