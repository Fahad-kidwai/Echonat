import React from "react";
import { Link } from "react-router-dom";
import ConnectModal from "./ConnectModal";

const Navbar = () => {
  return (
    <>
      <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-56 p-5">
        <div className="flex flex-wrap items-center justify-between py-2">
          <div className="w-1/2 md:w-auto">
            <Link to="/" className="text-white font-bold text-4xl">
              Echonat
            </Link>
            <p className=" -mt-1 text-gray-200 font-semibold text-sm">
              Empowering Digital Solutons
            </p>
          </div>

          <label for="menu-toggle" className="pointer-cursor md:hidden block">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>

          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden md:block w-full md:w-auto" id="menu">
            <nav className="w-full bg-white md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
              <ul className="md:flex items-center">
                <li>
                  <Link
                    to="/"
                    className="py-2 inline-block md:text-white md:hidden lg:block font-semibold"
                  >
                    Home
                  </Link>
                </li>
                <li className="md:ml-4">
                  <div className="dropdown dropdown-hover">
                    <label
                      tabIndex={0}
                      className="  m-1 text-white md:px-2 font-semibold cursor-pointer"
                    >
                      Services
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-68"
                    >
                      <li>
                        <Link to="/consulting">IT Consulting Service</Link>
                      </li>
                      <li>
                        <Link to="/managed">Managed IT Service</Link>
                      </li>
                      <li>
                        <Link to="/cloud">Cloud Services</Link>
                      </li>
                      <li>
                        <Link to="/network">Netowrk and Security Services</Link>
                      </li>
                      <li>
                        <Link to="/dataManage">Date Management Services</Link>
                      </li>
                      <li>
                        <Link to="/software">
                          Software Development and Integration{" "}
                        </Link>
                      </li>
                      <li>
                        <Link to="/itProject">IT Project Management</Link>
                      </li>
                      <li>
                        <Link to="/virtualization">
                          Virtualizaton and Infrastructure Service
                        </Link>
                      </li>
                      <li>
                        <Link to="/itTraining">IT Training and Support</Link>
                      </li>
                      <li>
                        <Link to="/itSecurity">IT Security Service</Link>
                      </li>
                      <li>
                        <Link>Our Freelancing Offerings</Link>

                        
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="md:ml-4">
                  <Link
                    className="py-2 inline-block md:text-white md:px-2 font-semibold"
                    to="/partners"
                  >
                    Our Partners
                  </Link>
                </li>
                <li className="md:ml-4 md:hidden lg:block">
                  <Link
                    className="py-2 inline-block md:text-white md:px-2 font-semibold"
                    to="/career"
                  >
                    Career
                  </Link>
                </li>
                <li className="md:ml-4">
                  <Link
                    className="py-2 inline-block md:text-white md:px-2 font-semibold"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="md:ml-6 mt-3 md:mt-0">
                  <label
                    className="btn  font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"
                    htmlFor="my-modal-1"
                  >
                    Connect
                  </label>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <ConnectModal />
    </>
  );
};

export default Navbar;
