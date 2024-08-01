import React from "react";

function Xiaomi() {
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
            Xiaomi Mi Company
            <br />
            <span className="text-sm font-medium">
              HOME / <span className="text-blue-700">Workshop</span>
            </span>
          </h4>
        </div>
      </section>

      <div className="text-center">
        <p className="mt-[3cm] text-[#009df2] font-semibold ">
          XIAOMI WORKSHOP
        </p>
        <h1 className="pt-3 font-semibold text-xl mb-[1cm] ">
          WorkShop by our seniour Advisor Mr.Vaibhav Shrivastav
        </h1>
      </div>

      <div className="max-w-[1120px] mx-auto pb-[3cm] ">
        <div className="flex flex-wrap gap-8">
          <div className="basis-[40%]  ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/workshop_vaibhav1.png"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/mi2.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/workshop_vaibhav3.png"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/workshop_vaibhav4.png"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/mi5.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/mi6.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/mi7.png"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/mi8.jpg"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] ms-[25px] md:ms-[0cm] md:basis-[30%] ">
            <img
              src="/Image/mi8.png"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>

          <div className="basis-[40%] md:basis-[30%] ">
            <img
              src="/Image/mi9.png"
              className="rounded-t-2xl transition-transform duration-1000 transform hover:scale-105 "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Xiaomi;
