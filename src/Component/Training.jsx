import React from "react";

function Training() {
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
            Training <br />
            <span className="text-sm font-medium">
              HOME / <span className="text-blue-700">Training</span>
            </span>
          </h4>
        </div>
      </section>

      <section className="bg-[#009df2]">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1  md:grid-cols-[50%_45%] gap-[5%] ">
          <div>
            <h1 className="pb-6 ms-[1cm] md:ms-[0cm] pt-[5cm] text-5xl text-white font-semibold py-[40px]">
              Helping Hands
            </h1>

            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[25px] font-light">
              We have capability to train even novice students, students who
              don’t have any experience with coding can work efficiently in our
              training sessions. We need only adamant students who are
              disciplined enough to pay attention and have that urge in them for
              learning new things. You will have the experience to work on Live
              Projects, which will ameliorate your portfolio. Basically through
              these training sessions, we want to help students to grow, Our
              training sessions are helping hands for adamant students.
            </p>
          </div>

          <div className="mb-20">
            <img
              className="w-full  mt-[2.5cm] transition animate-updown duration-300"
              src="/Image/e-learning.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto">
        <h1 className="text-[20px] ms-4 mt-[1.4cm] sm:text:-[30px] lg:text-[40px] text-left mx-auto ">
          <p>
            What will you <br />
            <span className="text-[#009df2] font-semibold">Learn</span>
          </p>
        </h1>
      </div>

      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-wrap mt-10">
          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
              src="/Image/case3.jpg"
              alt=""
            />
            <h4 className="mx-auto text-[27px] font-semibold pt-6">
              Learn HTML, CSS, JAVASCRIPT, BOOTSTRAP, WORDPRESS
            </h4>
            <div className="list-outside text-center text-[#009df2] p-3 text-[12px]">
              <p>45 Days to Complete</p>
            </div>
          </div>

          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
              src="/Image/case1.jpg"
              alt=""
            />
            <h4 className="mx-auto text-[27px] font-semibold pt-6">
              Learn MYSQL, CORE PHP , OPS, LARAVEL
            </h4>
            <div className="list-outside text-center text-[#009df2] p-9 text-[12px]">
              <p>60 Days to Complete</p>
            </div>
          </div>

          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
              src="/Image/case2.jpg"
              alt=""
            />
            <h4 className="mx-auto text-[27px] font-semibold pt-6">
              Javescript, Angular, React Js, Node Js, React Native, Restfull
              API, Mongo DB, Git, AWS
            </h4>
            <div className="list-outside text-center text-[#009df2] p-3 text-[12px]">
              <p>90 Days to Complete</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1120px] mx-auto">
        <h1 className="text-[20px] ms-4 mt-[1.4cm] sm:text:-[30px] lg:text-[40px] text-left mx-auto ">
          <p>
            Internship
            <br />
            <span className="text-[#009df2] font-semibold">Experience</span>
          </p>
        </h1>
      </div>

      <div className="max-w-[1160px] mx-auto pb-[4cm] ">
        <div className="flex flex-wrap">
          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/banner_small.png"
              alt=""
            />
            <h1 className="text-2xl text-center font-semibold py-6">
              100% Practical Training
            </h1>
            <p className="mx-7 text-center mb-16 font-light leading-6">
              We don't use paper and pencil at all in our training sessions.
            </p>
          </div>
          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/office_work_6.png"
              alt=""
            />
            <h1 className="text-2xl text-center font-semibold py-6">
              Live Projects
            </h1>
            <p className="mx-7 text-center mb-16 font-light leading-6">
              We make you work on Live projects, in order to strengthen your
              portfolio.
            </p>
          </div>
          <div className="basis-[100%] mb-5 mx-auto md:basis-[30%] shadow-xl">
            <img
              className="w-[3cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/laptop_3.png"
              alt=""
            />
            <h1 className="text-2xl text-center font-semibold py-6">
              Innovative Ideas
            </h1>
            <p className="mx-7 text-center mb-16 font-light leading-6">
              We always inbuilt innovation in our training sessions, to learn
              something new.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Training;
