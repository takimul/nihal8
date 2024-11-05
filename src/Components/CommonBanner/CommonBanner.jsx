import React from "react";

const CommonBanner = ({ title }) => {
  return (
    <div className="hero bg-[#9538E2] text-white relative">
      <div className="hero-content text-center">
        <div className="px-10 py-6">
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          {/* <div>
            <button className="btn ">nihal</button>
            <button className="btn ">Siam</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CommonBanner;
