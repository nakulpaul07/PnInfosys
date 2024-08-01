import React from "react";

function Home() {
  return (
    <>
      <section className="mt-[1.5cm]">
        <div
          className="w-full h-[15cm]  md:h-[20cm] bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: "url(/Image/banner.png)",
          }}
        >
          <h4 className="text-white text-center font-bold text-[20px] pt-[2cm] md:pt-[5.8cm]">
            WHAT ARE YOU WAITING FOR?
          </h4>
          <h1 className="text-white text-center font-bold text-[30px] p-30px md:text-[1.7cm]">
            Our PN Infosys <br /> We're ready to help you grow!
          </h1>
          <div className="mx-auto">
            <img
              src="/Image/banner2.png"
              className="mx-auto mt-[1cm] transition animate-updown duration-300"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* 2nd Part */}

      <div className="max-w-[1120] text-center my-[1.5cm] text-[1.25rem] font-light">
        <h1>
          PN INFOSYS is a leading global business consulting and IT service
          company, <br /> Whether you need to run your business more efficiently
          or accelerate revenue growth, PN INFOSYS can get you there.
        </h1>
      </div>

      <div className="max-w-[1160px] mx-auto pb-[4cm] ">
        <div className="flex flex-wrap">
          <div className="basis-[100%] mb-5 mx-auto md:basis-[23%] h-[12cm] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/collaborative1.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold py-6">
              Collaborative <br /> Spirit
            </h1>
            <p className="mx-7 text-center mb-[1.5cm] leading-6">
              We believe in developing true partnerships and making clients
              happy.
            </p>
          </div>

          <div className="basis-[100%] mb-5 mx-auto  md:basis-[23%] h-[12cm] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/thinking.png"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold py-6">
              Expert <br />
              Thinking
            </h1>
            <p className="mx-7 text-center mb-[1.5cm] leading-6">
              We believe in developing true partnerships and making clients
              happy.
            </p>
          </div>

          <div className="basis-[100%] mb-5 mx-auto md:basis-[23%] h-[12cm] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/dedication.jpg"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold py-6">
              Exorbitant <br /> Dedication
            </h1>
            <p className="mx-7 text-center mb-[1.5cm] leading-6">
              We believe in developing true partnerships and making clients
              happy.
            </p>
          </div>

          <div className="basis-[100%] mb-5 mx-auto  md:basis-[23%] h-[12cm] shadow-xl">
            <img
              className="w-[3.7cm] mt-[1.7cm] mx-auto rounded-full shadow-lg  hover:-translate-y-4 hover:duration-1000 hover:shadow-blue-400 "
              src="/Image/training.png"
              alt=""
            />
            <h1 className="text-2xl text-center font-bold py-6">
              Industrial <br />
              Training
            </h1>
            <p className="mx-7 text-center mb-[1.5cm] leading-6">
              We believe in developing true partnerships and making clients
              happy.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Environment,Free */}

      <section className="bg-[#009df2] py-8">
        <div className="max-w-[1120px] mx-auto sm:ms-[2cm]  grid grid-cols-1  md:grid-cols-[45%_auto] gap-10">
          <div>
            <h1 className="text-3xl leading-[55px] ms-[1cm] md:ms-[0cm]  pt-[3cm] text-white font-bold ">
              Learning Environment,Free <br /> Internship To Novice Students.
            </h1>
            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm] ">
                <i class="fa-solid fa-laptop p-5 bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                WEB DESIGNING <br />
                <span className="text-center text-sm font-extralight">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </span>
              </h1>
            </div>

            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm] ">
                <i class="fa-solid fa-laptop p-5 bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                WEB DEVELOPMENT <br />
                <span className="text-center text-sm font-extralight">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </span>
              </h1>
            </div>

            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm] ">
                <i class="fa-solid fa-mobile-screen-button px-[27px] py-[20px] bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                APP DEVELOPMENT <br />
                <span className="text-center text-sm font-extralight">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </span>
              </h1>
            </div>

            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm] ">
                <i class="fa-solid fa-laptop p-5 bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                ANGULAR, PYTHON, DJANGO, LARAVEL
                <br />
                <span className="text-center text-sm font-extralight">
                  Something which makes PN INFOSYS different from other IT
                  companies is that we train novice students and also make them
                  work on Live projects.
                </span>
              </h1>
            </div>
          </div>
          <div>
            <img
              src="/Image/learning.png"
              className="w-[14cm] pt-[4.7cm] transition animate-updown"
              alt=""
            />
          </div>
        </div>
      </section>

      {/*  Technologies
We works on.. */}

      <div className="max-w-[1120px] mt-[3cm] mx-auto sm:flex-none md:flex lg:flex sm:justify-center  ">
        <h1 className="text-3xl ms-[1cm] md:ms-[0cm]  font-medium leading-[1.6cm] sm:text-center ">
          Technologies <br />
          <span className="text-5xl  text-[#009df2]">We works on..</span>
        </h1>
        <ul className="md:ms-auto ms-[1cm]  sm:text-center py-5 font-semibold  sm:flex-none md:flex lg:flex gap-12 pt-10">
          <li className="text-[#009df2]">Show All</li>
          <li>Web Designing</li>
          <li>Web Development</li>
        </ul>
      </div>

      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-wrap mt-10">
          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110"
              src="/Image/html_5.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">HTML 5</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              Markup language for Web pages.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110  "
              src="/Image/css_3.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">CSS 3</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              Cascading Style Sheets.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110  "
              src="/Image/javascript1.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">Javascript</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              programming language for websites.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110 "
              src="/Image/jquery.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">jQuery</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              jQuery is a JavaScript Library.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110"
              src="/Image/angular.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">Angular</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              JavaScript framework.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110  "
              src="/Image/wordpress.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">Wordpress</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              Content Management System (CMS).
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110  "
              src="/Image/bootstrap.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">Bootstrap</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              programming language for websites.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110 "
              src="/Image/php.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">PHP</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              PHP is a Server Scripting Language.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110"
              src="/Image/sql.jpg"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">SQL</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              Query Language For Database.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110  "
              src="/Image/python.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">Python</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              Programing Language.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110  "
              src="/Image/laravel.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">Laravel</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              PHP based web-framework.
            </p>
          </div>

          <div className="basis-[100%] mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="w-[5cm] mx-auto transition-transform duration-1000 transform hover:scale-110 "
              src="/Image/django.png"
              alt=""
            />
            <h2 className="text-2xl font-medium py-6 ">Django</h2>
            <p className="px-8 text-[15px] text-[#009df2] ">
              Open Source Python FrameWork{" "}
            </p>
          </div>
        </div>
      </div>

      {/* innovation idea */}

      <section className="bg-[#009df2] py-8">
        <h1 className="text-[1.2cm] leading-[55px]  pt-[3cm] text-white text-center font-semibold  ">
          Our Services
        </h1>
        <div className="max-w-[1120px] mx-auto sm:ms-[2cm]  grid grid-cols-1  md:grid-cols-[45%_auto] gap-10">
          <div>
            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm]">
                <i class="fa-regular fa-lightbulb p-6 bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                INNOVATIVE Ideas <br />
                <span className="text-center text-sm font-extralight">
                  PN INFOSYS believes in developing true partnerships. We foster
                  a collegial environment where individual perspectives are
                  respected and honest dialogue is expected.
                </span>
              </h1>
            </div>

            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm]">
                <i class="fa-solid fa-bars mt-2 p-5 bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                CREATIVE Designing
                <br />
                <span className="text-center text-sm font-extralight">
                  PN INFOSYS brings robust skills and forward looking
                  perspectives to solve customer challenges. We use proven
                  knowledge to make recommendations and provide expert guidance
                  to our customers.
                </span>
              </h1>
            </div>

            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm]">
                <i class="fa-solid fa-users p-5 bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                CLIENT'S Happines
                <br />
                <span className="text-center text-sm font-extralight">
                  PN INFOSYS is driven to meet client needs with determination
                  and grit. We embrace tough challenges and do not rest until
                  the problem is solved, the right way.
                </span>
              </h1>
            </div>

            <div className="flex pt-[1.3cm]">
              <p className="ms-[1cm] md:ms-[0cm]">
                <i class="fa-solid fa-bullseye p-5 bg-white rounded-[100%] text-[red] text-[1cm] "></i>
              </p>
              <h1 className="ps-[1cm] text-white font-semibold leading-7 text-[1.5rem] ">
                PRACTICAL Training <br />
                <span className="text-center text-sm font-extralight">
                  We don't use paper and pencil at all in our training
                  sessions.We are provided only practical work at training class
                  session.
                </span>
              </h1>
            </div>
          </div>
          <div>
            <img
              src="/Image/e-learning.png"
              className="w-[14cm] pt-[3cm] transition animate-updown"
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1120px] mx-auto">
        <h1 className="text-[20px] ms-4 mt-[1.4cm] sm:text:-[30px] lg:text-[40px] text-left mx-auto ">
          <p>
            New <br />
            <span className="text-[#009df2] font-semibold">Event</span>
          </p>
        </h1>
      </div>

      <div className="max-w-[1120px] mx-auto">
        <div className="flex flex-wrap mt-10">
          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
              src="/Image/e1.jpg"
              alt=""
            />
            <h4 className="mx-auto text-3xl font-normal pt-6">
              Workshop by Senior Advisor
            </h4>
            <div className="list-outside text-start p-6 text-[12px]">
              <li className="pb-2 ">
                Workshop was enacted by Vaibhav Shrivastava, who is Product
                Owner at Xiaomi , China
              </li>
              <li>
                He is our Senior Advisor, he conducted the workhop in which he
                holistically motivated the team of PN INFOSYS.
              </li>
            </div>

            <button className="p-2 my-6 mx-auto rounded-lg text-white text-center bg-[#007bff]">
              Read More...
            </button>
          </div>

          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl transition-transform duration-1000 transform hover:scale-95"
              src="/Image/e2.jpg"
              alt=""
            />
            <h4 className="mx-auto text-3xl font-normal pt-6">
              PN INFOSYS invited as Chief Guest
            </h4>
            <div className="list-outside text-start p-6 text-[12px]">
              <li className="pb-2 ">
                Rustamji Institute of Technology, BSF Academy, Tekanpur invited
                PN INFOSYS as a Cheif Guest in their Software Tech-Fest.
              </li>
              <li>
                Rustamji Institute of Technology, BSF Academy, Tekanpur invited
                PN INFOSYS as a Cheif Guest in their Software Tech-Fest.Tekanpur
                invited PN INFOSYS as a Cheif.
              </li>
            </div>

            <button className="p-2 my-6 mx-auto rounded-lg text-white text-center bg-[#007bff]">
              Read More...
            </button>
          </div>

          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl transition-transform duration-1000 transform hover:scale-95"
              src="/Image/e3.jpg"
              alt=""
            />
            <h4 className="mx-auto text-3xl font-normal pt-6">
              Social Applaud by MPCT college
            </h4>
            <div className="list-outside text-start p-6 text-[12px]">
              <li className="pb-2 ">
                PN INFOSYS gave two months training sessions to MPCT College.
              </li>
              <li>
                This training was meant for web designing to make sure that at
                the end of the two months, students become capable enough to
                master Web Designing.
              </li>
            </div>

            <button className="p-2 my-6 mx-auto rounded-lg text-white text-center bg-[#007bff]">
              Read More...
            </button>
          </div>

          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl transition-transform duration-1000 transform hover:scale-95"
              src="/Image/e4.jpg"
              alt=""
            />
            <h4 className="mx-auto text-3xl font-normal pt-6">
              Social Applaud for our Work
            </h4>
            <div className="list-outside text-start p-6 text-[12px]">
              <li className="pb-2 ">
                PN INFOSYS did a project for Samaysaar Vidhyaniketan , which is
                a non-profit institution, it provides free schooling , free
                accommodation and food to poor Jain students.
              </li>
            </div>

            <button className="p-2 my-6 mx-auto rounded-lg text-white text-center bg-[#007bff]">
              Read More...
            </button>
          </div>

          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl transition-transform duration-1000 transform hover:scale-95"
              src="/Image/e5.jpg"
              alt=""
            />
            <h4 className="mx-auto text-3xl font-normal pt-6">
              New Branch Opening in Indore{" "}
            </h4>
            <div className="list-outside text-start p-6 text-[12px]">
              <li className="pb-2 ">
                PN INFOSYS has a new branch in Indore also.
              </li>
              <li>It was a grand launch of our new branch in Indore.</li>
            </div>

            <button className="p-2 my-6 mx-auto rounded-lg text-white text-center bg-[#007bff]">
              Read More...
            </button>
          </div>

          <div className="basis-[100%] rounded-3xl mb-[1.5cm] md:basis-[30%] m-[1.5%] shadow-2xl  text-center">
            <img
              className="mx-auto rounded-t-2xl transition-transform duration-1000 transform hover:scale-95"
              src="/Image/e6.jpg"
              alt=""
            />
            <h4 className="mx-auto text-3xl font-normal pt-6">
              Workshop by Senior Advisor
            </h4>
            <div className="list-outside text-start p-6 text-[12px]">
              <li className="pb-2 ">
                He is our Senior Advisor, he conducted the workhop in which he
                holistically motivated the team of PN INFOSYS.
              </li>
            </div>

            <button className="p-2 my-6 mx-auto rounded-lg text-white text-center bg-[#007bff]">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
