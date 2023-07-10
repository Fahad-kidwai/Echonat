import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
      <div class="flex flex-col md:flex-row">
        <div class="w-full lg:w-2/6 lg:mx-4 lg:pr-4">
          <h3 class="font-bold text-2xl">Echonat</h3>
          <p class="text-gray-400">Empowering Digital Solutons.</p>
        </div>

        <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">
            Our Usp
          </h5>
          <ul class="mt-4">
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">
                Fast and Efficient
              </a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">
                24x7 Availability
              </a>
            </li>
            <li class="mt-2">
              <a href="#" title="" class="opacity-75 hover:opacity-100">
                Communication
              </a>
            </li>
          </ul>
        </div>

        <div class="w-full lg:w-2/6 mt-8 lg:mt-0 lg:mx-4 lg:pr-8">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">
            Contact Details
          </h5>
          <ul class="mt-4">
            <li>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463877.3124257801!2d46.49288533991112!3d24.72545537344616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1687863792365!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </li>
            <li class="mt-4">
              <a
                href="#"
                title=""
                class="block flex items-center opacity-75 hover:opacity-100"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10c5.514,0,10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
                    <path d="M13 7L11 7 11 13 17 13 17 11 13 11z" />
                  </svg>
                </span>
                <span class="ml-3">
                  Mon - Fri: 9:00 - 19:00
                  <br />
                  Closed on Weekends
                </span>
              </a>
            </li>
            <li class="mt-4">
              <a
                href="#"
                title=""
                class="block flex items-center opacity-75 hover:opacity-100"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                  </svg>
                </span>
                <span class="ml-3"> +96 976545231</span>
              </a>
            </li>
            <li class="mt-4">
              <a
                href="#"
                title=""
                class="block flex items-center opacity-75 hover:opacity-100"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="fill-current"
                  >
                    <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
                  </svg>
                </span>
                <span class="ml-3"> echonat@info.com </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="w-full lg:w-1/6 mt-8 lg:mt-0 lg:mx-4">
          <h5 class="uppercase tracking-wider font-semibold text-gray-500">
            We're Social
          </h5>
          <ul class="mt-4 flex">
            <li class="ml-6">
              <a href="https://in.linkedin.com/" target="_blank" title="">
                <FaLinkedin size={30} />
              </a>
            </li>

            <li class="ml-6">
              <a href="https://twitter.com/login" target="_blank" title="">
                <FaTwitter size={30} />
              </a>
            </li>
          </ul>

          <p class="text-sm text-gray-400 mt-6">
            {/* © 2018 ProDentists. <br class="hidden lg:block" /> */}
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
