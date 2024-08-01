import React from "react";

function Contact() {
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
            Say Hello To Us! <br />{" "}
            <span className="text-sm font-medium">
              HOME / <span className="text-blue-700">CONTACT US</span>
            </span>
          </h4>
        </div>
      </section>

      <div className="max-w-[1160px] mx-auto pt-[2cm] pb-[3cm] ">
        <div className="flex flex-wrap">
          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/3.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold pb-7 pt-7">
              Email Address
            </h1>
            <p className="text-center text-slate-600">www.pninfosys.com</p>
            <p className="text-center mb-16 text-slate-600">
              support@pninfosys.com
            </p>
          </div>

          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/1.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold pb-7 pt-7">
              Phone Number
            </h1>
            <p className="text-center text-slate-600">+91 7000846823</p>
            <p className="text-center mb-16 text-slate-600">+91 7415289378</p>
          </div>

          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/2.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold pb-7 pt-7">
              Street Address
            </h1>
            <p className="text-center text-slate-600">MIG-332</p>
            <p className="text-center text-slate-600">
              Darpan Colony,Thatipur,
            </p>
            <p className="text-center mb-16 text-slate-600">
              Gwalior,Madhya Pradesh
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto mb-[2cm]">
        <div className="flex flex-wrap gap-10">
          <div className="basis-[100%] md:basis-[50%] shadow-md drop-shadow-lg  shadow-gray-300 ">
            <h1 className="mb-[0.4cm] text-xl ms-[1cm] font-semibold py-3 pt-9 ">
              Say Hello To Us!
            </h1>
            <input
              type="text"
              className="bg-[#f0f6ff] p-2 ps-5 w-[3] md:w-[4cm] ms-[1cm] rounded-3xl"
              placeholder="Full Name"
            />
            <input
              type="text"
              className="bg-[#f0f6ff]  p-2 ps-5  mt-7 w-[5] md:w-[7cm] ms-[1cm] rounded-3xl"
              placeholder="E-Mail Address"
            />

            <textarea
              className="bg-[#f0f6ff] p-4 mt-[1cm] w-[7cm] md:w-[11.5cm] h-[4cm] ms-[1cm] rounded-2xl"
              name=""
              placeholder="Your Message"
              id=""
            ></textarea>

            <div>
              <button class="bg-violet-500 my-6 py-3 px-5 ms-[1.3cm] mt-4 rounded-3xl text-white p-2      hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Send Message Now
              </button>
            </div>
          </div>

          <div className="basis-[100%] md:basis-[45%]  shadow-md  shadow-gray-300 ">
            <h1 className="mb-[0.4cm] text-xl ms-[1cm] font-semibold py-3 pt-9 ">
              More Info
            </h1>
            <img className="w-[239px] ms-5" src="/Image/colorlogo.png" alt="" />
            <p className="mx-7 font-light">
              PN INFOSYS provides the best service possible to its customers
              because for us, our client’s happiness is important. Whatever we
              choose to do, we do it an exorbitant manner. PN INFOSYS Company
              provides a full range of maintenance and compliance services for
              Government and Commercial facilities both large and small.
            </p>

            <div>
              <button class="bg-violet-500 my-6 py-3 px-7 ms-[0.7cm] mt-[1.5cm] rounded-3xl text-white  hover:bg-violet-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
                Read More...
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
