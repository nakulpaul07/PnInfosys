import React from "react";

function About() {
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
            About Us <br />{" "}
            <span className="text-sm font-medium">
              HOME / <span className="text-blue-700"> ABOUT US</span>
            </span>
          </h4>
        </div>
      </section>

      <section className="bg-[#109cde] mt-[3cm]">
        <div className="max-w-[1120px] mx-auto grid grid-cols-1  md:grid-cols-[50%_45%] gap-[5%] ">
          <div>
            <h1 className="pb-6 text-3xl ms-[1cm] md:ms-[0cm] text-white font-semibold py-[20px]">
              Who & We Are?
            </h1>
            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[25px] font-light">
              We are a one-stop destination for all digital solution, be it
              website designing,web development, digital marketing, SEO, mobile
              apps and full maintenance and compliance services for Government
              and Commercial facilities both large and small.. Our elegant group
              of Developers provide their innovation who transform your idea
              into an amazing website Design or Mobile App Development while
              keeping every custom project unique.
            </p>

            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[28px] pt-[1cm] font-light">
              We are part of this IT industry since 2018, we not only developed
              products and websites but also provides internship and trainning
              to students and make them capable to work in this It software
              industry, our internship and trainning program is totally based on
              hand to hand pratical with live projects.
            </p>

            <p className="text-white ms-[1cm] md:ms-[0cm] leading-[28px]  pt-[1cm] font-light">
              Our team of IT professionals certified professionals services
              Dental Offices, Medical Offices, Restaurants, Bars and all types
              of businesses throughout the Lowcountry and the world. Our team of
              IT professionals certified professionals services Hosptials,
              Colleges, Research Institutes, Schools, Restaurants, Bars and all
              types of businesses throughout the Lowcountry and the world.
            </p>
          </div>

          <div>
            <img className="pt-[3.6cm]" src="/Image/template.png" alt="" />
          </div>
        </div>
      </section>

      <div className="max-w-[1120px] mt-[3cm] mx-auto sm:flex-none md:flex lg:flex sm:justify-center  ">
        <h1 className="text-3xl ms-[1cm] md:ms-[0cm] font-medium leading-[1.6cm] sm:text-center ">
          Technologies <br />
          <span className="text-5xl  text-[#009df2]">We works on..</span>
        </h1>
        <ul className="md:ms-auto ms-[1cm] sm:text-center py-5 font-semibold  sm:flex-none md:flex lg:flex gap-12 pt-10">
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
              Programing Language.{" "}
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
              Open Source Python FrameWork
            </p>
          </div>
        </div>
      </div>

      <section className="bg-[#f0f6ff]">
        <h2 className="text-center pt-[3cm] font-semibold text-2xl">
          Our Team
        </h2>
        <h1 className="text-center font-bold text-3xl pt-3">
          Meet Our Team Members
        </h1>

        <div className="max-w-[1120px] mx-auto">
          <div className="flex flex-wrap mt-10">
            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/vkj.png"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Vikas Jain</h1>
              <p className="text-[#009df2] mb-7">Director PNINFOSYS</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/vaibhav.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Vaibhav Sir</h1>
              <p className="text-[#009df2] mb-7">Senior Advisor</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/niket.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Niket Bansal</h1>
              <p className="text-[#009df2] mb-7">Director PNINFOSYS</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/rishi.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Rishi Jha</h1>
              <p className="text-[#009df2] mb-7">General Manager</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/ceo.png"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Neha Jain</h1>
              <p className="text-[#009df2] mb-7">CEO PNINFOSYS</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/shivam-min.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">
                shivam Shrivastava
              </h1>
              <p className="text-[#009df2] mb-7">HR/Developer</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/vaibhav.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Vaibhav Sir</h1>
              <p className="text-[#009df2] mb-7">Senior Advisor</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/niket.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Niket Bansal</h1>
              <p className="text-[#009df2] mb-7">Director PNINFOSYS</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/rishi.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Rishi Jha</h1>
              <p className="text-[#009df2] mb-7">General Manager</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/ceo.png"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Neha Jain</h1>
              <p className="text-[#009df2] mb-7">CEO PNINFOSYS</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/shivam-min.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">
                shivam Shrivastava
              </h1>
              <p className="text-[#009df2] mb-7">HR/Developer</p>
            </div>

            <div className="basis-[100%] rounded-2xl mb-[1.5cm] md:basis-[22%] m-[1.5%] shadow-2xl  text-center">
              <img
                className="mx-auto rounded-t-2xl  duration-1000  hover:scale-95"
                src="/Image/vaibhav.jpg"
                alt=""
              />
              <h1 className="text-2xl font-semibold pt-4">Vaibhav Sir</h1>
              <p className="text-[#009df2] mb-7">Senior Advisor</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
