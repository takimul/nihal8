import banner from "/assets/banner.jpg";

const Banner = ({ about, detail }) => {
  return (
    <div className="hero bg-[#9538E2] text-white relative">
      <div className="hero-content text-center">
        <div className="px-10 pb-44">
          <h1 className="text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="py-6">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <div className={`${about ? "block" : "hidden"}`}>
            <button className="btn ">nihal</button>
            <button className="btn ">Siam</button>
          </div>
          <button className="btn btn-primary">Shop now</button>
        </div>
      </div>
      <div className="w-[60%] h-full md:h-[610px] absolute top-[90%] md:top-[60%] p-6 bg-slate-50 bg-opacity-50 rounded-xl overflow-hidden">
        <img className="h-full w-full rounded-lg" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
