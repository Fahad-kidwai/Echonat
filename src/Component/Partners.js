import React from "react";

const Partners = () => {
  return (
    <div>
      <section className=" relative bg-gradient-to-tr from-cyan-500 to-blue-500  px-4 sm:px-8 lg:px-10 xl:px-20 2xl:px-64 overflow-hidden py-40 flex items-center h-3/5">
        <div className="h-full w-full absolute top-0 left-0 z-0">
          <img
            src="https://res.cloudinary.com/dydwvfozy/image/upload/v1687113653/charlesdeluvio-Lks7vei-eAg-unsplash_t8uus2.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="flex flex-wrap flex-row w-full items-center justify-center">
          <div className=" lg:w-4/6 xl:w-[75%] sm:w-full relative z-10 h-fit animate__animated animate__fadeInDown animate__slower">
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Our Partners
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              Echonat is a globally rooted tech firm with its foot marks in
              sevral companies. We provide fast, efficient and cost effective
              solution to the clients with after sales support from initaial
              stage
            </p>
          </div>
        </div>
      </section>
      <div className=" flex m-auto flex-col sm:w-full lg:w-9/12 xl:w-3/5 py-20 gap-8">
        <div className="card card-side bg-base-100 shadow-xl py-4">
          <img
            src="http://www.gcf.com.eg/images/main2_01.jpg"
            alt=""
            className=" w-40 h-32 p-3"
          />
          <div className="card-body py-2 my-auto">
            <h2 className="card-title">Greater Cairo Foundaries, Egypt</h2>
            <p>
              {" "}
              Implementing Oracle Financials, Supply Chain and currently Oracle
              Process Manufacturing
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl py-4">
          <img
            src="https://www.anbinvestment.sg/wp-content/uploads/2021/04/ANB-LOGO.png"
            alt=""
            className=" w-40 h-32 p-3"
          />
          <div className="card-body my-auto py-2">
            <h2 className="card-title">ANB Investment, Saudi Arabia</h2>
            <p>
              {" "}
              Implementing Financials and Purchasing plus investment system
              integration
            </p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl py-4">
          <img
            src="https://assets-global.website-files.com/5c7a306cee88075d06b7ccfd/5c7a306cee8807bf70b7cd50_Logo%20Full%20color.svg"
            alt=""
            className=" w-40 h-32 p-3"
          />
          <div className="card-body py-2 my-auto">
            <h2 className="card-title">Tamdeen Group, Saudi Arabia</h2>
            <p> Providing Health check for Financials and Supply Chain</p>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl py-4">
          <img
            src="https://enayacare.com/wp-content/uploads/2021/08/enaya-care_1_64x.png"
            alt=""
            className=" w-40 h-32 p-3"
          />
          <div className="card-body py-2 my-auto">
            <h2 className="card-title">Jadwa Investment, Saudi Arabia</h2>
            <p>
              {" "}
              Implementing Oracle Financials and Purchasing plus investment
              system integration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
