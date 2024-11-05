import React from "react";

const Footer = () => {
  return (
    <footer className=" p-10">
      <h1 className="font-bold text-4xl text-center">Gadget Heaven</h1>
      <p className="text-center text-gray-500 mb-6">
        Leading the way in cutting-edge technology and innovation.
      </p>
      <hr className="w-[80%] mx-auto" />

      <div className="footer md:flex justify-center md:gap-80">
        <nav>
          <h6 className="footer-title ">Services</h6>
          <a className="link link-hover text-neutral-content">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
