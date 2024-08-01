import React from "react";

function Service() {
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
            Our Services <br />
            <span className="text-sm font-medium">
              HOME / <span className="text-blue-700">OUR SERVICES</span>
            </span>
          </h4>
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto">
        <h1 className="py-10 ms-[1cm] md:ms-[0cm] font-semibold text-xl">
          "PN INFOSYS is a leading global business consulting and IT service
          company. We provides a full range of maintenance and compliance
          services for Government and Commercial facilities both large and
          small. Whether you need to run your business more efficiently or
          accelerate revenue growth, PN INFOSYS can get you there. Our team is
          proficient enough to provide all the IT services, which a customer
          needs in an affordable rates. We make sure our clients are happy at
          the end of the day."
        </h1>
      </div>

      <div className="max-w-[1160px] mx-auto pb-[4cm] ">
        <div className="flex flex-wrap">
          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/3.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold pb-[2.5cm] pt-7">
              Innovative Ideas
            </h1>
          </div>

          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/1.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold pb-[2.5cm] pt-7">
              Creative Designing
            </h1>
          </div>

          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/2.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold pb-[2.5cm] pt-7">
              Creative Designing
            </h1>
          </div>
        </div>
      </div>

      <section className="bg-[#109cde]">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1  md:grid-cols-[50%_45%] gap-[5%] ">
          <div>
            <h1 className="pb-6 pt-[3.4cm] ms-[1cm] md:ms-[0cm] text-5xl text-white font-semibold py-[40px]">
              PN Services
            </h1>
            <h2 className="text-white ms-[1cm] md:ms-[0cm] text-2xl mb-6 mt-1">
              PN INFOSYS provides the best service possible to its customers
              because for us, our client’s happiness is important. Whatever we
              choose to do, we do it an exorbitant manner.
            </h2>
            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[25px] font-light">
              PN INFOSYS Company provides a full range of maintenance and
              compliance services for Government and Commercial facilities both
              large and small.
            </p>

            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[28px] pt-[0.5cm]  font-light">
              PN INFOSYS believes in developing true partnerships. We foster a
              collegial environment where individual perspectives are respected
              and honest dialogue is expected.
            </p>

            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[28px]  pt-[0.5cm] font-light">
              PN INFOSYS brings robust skills and forward looking perspectives
              to solve customer challenges. We use proven knowledge to make
              recommendations and provide expert guidance to our customers.
            </p>

            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[28px]  pt-[0.5cm] font-light">
              PN INFOSYS is driven to meet client needs with determination and
              grit. We embrace tough challenges and do not rest until the
              problem is solved, the right way.
            </p>
          </div>

          <div className="mb-20">
            <img
              className="pt-[1cm]  md:pt-[5cm]  transition animate-updown duration-300"
              src="/Image/pnservice.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
