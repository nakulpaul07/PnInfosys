import React from "react";

function Bentchair() {
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
            BentChair Company
            <br />
            <span className="text-sm font-medium">
              HOME / <span className="text-blue-700">Workshop</span>
            </span>
          </h4>
        </div>
      </section>

      <div className="text-center">
        <p className="mt-[3cm] text-[#009df2] font-semibold ">
          BENTCHAIR WORKSHOP
        </p>
        <h1 className="pt-3 font-semibold text-xl mb-[1cm] ">
          Workshop By Our Senior Advisor Mr.Niket Bansal
        </h1>
      </div>

      <div className="max-w-[1120px] mx-auto pb-[3cm] ">
        <div className="flex flex-wrap gap-8">
          <div className="basis-[40%]  ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/office1.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/office10.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/office9.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/office6.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/office8.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/office15.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/office17.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/office16.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/office18.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Bentchair;
