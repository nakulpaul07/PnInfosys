import React from "react";

function Tour() {
  return (
    <>
      <section className="mt-[2.5cm]">
        <div
          className="max-w-[1120] bg-[#36334c] bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url(/Image/page-heading-bg.png)",
          }}
        >
          <h4 className="text-white text-center font-bold text-[40px] pt-[5cm] pb-[3cm] md:pt-[5.8cm]">
            Company Tour's
            <br />
            <span className="text-sm font-medium">
              HOME / <span className="text-blue-700">PNINFOSYS</span>
            </span>
          </h4>
        </div>
      </section>

      <div className="text-center">
        <p className="mt-[3cm] text-[#009df2] font-semibold ">
          ENJOYING MOMENTS
        </p>
        <h1 className="pt-3 font-semibold text-xl mb-[1cm] ">Pninfosys Team</h1>
      </div>

      <div className="max-w-[1120px] mx-auto pb-[3cm] ">
        <div className="flex flex-wrap gap-8">
          <div className="basis-[40%]  ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/ture4.png"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/ture6.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/ture7.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/ture12.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/ture13.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/ture17.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/ture19.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/ture32.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/ture46.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tour;
