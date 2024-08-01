import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}

function Header() {
  const [open, setOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  const [isOpen3, setIsOpen3] = useState(false);

  useScrollToTop();

  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const closeAllDropdowns = () => {
    setIsOpen1(false);
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const closeMobileMenu = () => {
    setOpen(false);
    closeAllDropdowns();
  };

  return (
    <>
      <nav className="md:flex md:justify-between md:items-center bg-white px-3 fixed top-0 left-0 w-full py-3 z-10">
        <div className="logo flex justify-between">
          <img
            src="/Image/colorlogo.png"
            alt=""
            className="w-30px md:full ps-3   "
          />

          {/* mobile icon */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </button>

          {/* mobile icon */}
        </div>
        <div className="menu hidden md:block">
          {" "}
          <ul className="md:flex  flex-none gap-5  text-black font-semibold text-[17px]">
            <Link to="/">Home</Link>
            <Link to="/about">AboutUs</Link>
            <Link to="/service">Service</Link>
            <Link to="/training">Training</Link>

            <div className="">
              <button
                onClick={toggleDropdown1}
                className="text-black focus:outline-none"
              >
                Workshop ↓
              </button>
              {isOpen1 && (
                <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/Xiaomi"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Xiaomi MI Company
                  </Link>
                  <Link
                    to="/bentchair"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Bectchair Company
                  </Link>
                  <Link
                    to="/rjit"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Rjit College
                  </Link>
                  <Link
                    to="/mpct"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Mpct College
                  </Link>
                </div>
              )}
            </div>

            <div className="">
              <button
                onClick={toggleDropdown2}
                className="text-black focus:outline-none"
              >
                Event ↓
              </button>
              {isOpen2 && (
                <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/studentBirthday"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Student's Birthday
                  </Link>
                  <Link
                    to="/aniversary"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Aniversary Celebration
                  </Link>
                  <Link
                    to="/tour"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Tour's
                  </Link>
                </div>
              )}
            </div>

            <div className="">
              <button
                onClick={toggleDropdown3}
                className="text-black focus:outline-none"
              >
                Placement ↓
              </button>
              {isOpen3 && (
                <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                  <Link
                    to="/placementDesk"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Placement Desk
                  </Link>
                  <Link
                    to="/placementGallery"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    onClick={closeAllDropdowns}
                  >
                    Placement Gallery
                  </Link>
                </div>
              )}
            </div>
            <Link to="/contact">ContactUs</Link>
            <Link to="">InternshipRegistration</Link>
          </ul>
        </div>
        {/* moblienavlist */}
        {open && (
          <div className="md:hidden py-3 flex justify-center ">
            <ul className="text-black font-semibold text-[17px]">
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>{" "}
              <br />
              <Link to="/about" onClick={closeMobileMenu}>
                AboutUs
              </Link>{" "}
              <br />
              <Link to="/service" onClick={closeMobileMenu}>
                Service
              </Link>{" "}
              <br />
              <Link to="/training" onClick={closeMobileMenu}>
                Training
              </Link>
              <div className="">
                <button
                  onClick={toggleDropdown1}
                  className="text-black focus:outline-none"
                >
                  Workshop ↓
                </button>
                {isOpen1 && (
                  <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <Link
                      to="/xiaomi"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Xiaomi MI Company
                    </Link>
                    <Link
                      to="/bectchair"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Bectchair Company
                    </Link>
                    <Link
                      to="/rjit"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Rjit College
                    </Link>
                    <Link
                      to="/mpct"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Mpct College
                    </Link>
                  </div>
                )}
              </div>
              <div className="">
                <button
                  onClick={toggleDropdown2}
                  className="text-black focus:outline-none"
                >
                  Event ↓
                </button>
                {isOpen2 && (
                  <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <Link
                      to="/studentBirthday"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Student's Birthday
                    </Link>
                    <Link
                      to="/aniversary"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Aniversary Celebration
                    </Link>
                    <Link
                      to="/tour"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Tour's
                    </Link>
                  </div>
                )}
              </div>
              <div className="">
                <button
                  onClick={toggleDropdown3}
                  className="text-black focus:outline-none"
                >
                  Placement ↓
                </button>
                {isOpen3 && (
                  <div className="absolute  mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                    <Link
                      to="/placementDesk"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Placement Desk
                    </Link>
                    <Link
                      to="/placementGallery"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeMobileMenu}
                    >
                      Placement Gallery
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/contact" onClick={closeMobileMenu}>
                ContactUs
              </Link>
              <br />
              <Link to="/">InternshipRegistration</Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
