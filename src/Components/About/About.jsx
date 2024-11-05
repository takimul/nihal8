import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";

const About = () => {
  const about = true;
  return (
    <div>
      <Navbar></Navbar>
      <Banner about={about}></Banner>
      <div className="mt-72">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default About;
