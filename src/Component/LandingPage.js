import React, { Fragment } from "react";
import {
  GrBusinessService,
  GrCloudSoftware,
  GrServices,
  GrShieldSecurity,
  GrSupport,
  GrUserManager,
  GrVirtualMachine,
} from "react-icons/gr";
import {
  FaCookie,
  FaCloudUploadAlt,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import "animate.css";
import "swiper/swiper-bundle.css";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const LandingPage = () => {
  return (
    <Fragment>
      <div>
        <section className=" relative bg-gradient-to-tr from-cyan-500 to-blue-500  px-4 sm:px-8 lg:px-10 xl:px-20 2xl:px-64 overflow-hidden py-40 flex items-center min-h-screen">
          <div className="h-full w-full absolute top-0 left-0 z-0">
            <img
              src="https://res.cloudinary.com/dydwvfozy/image/upload/v1686779963/marvin-meyer-SYTO3xs06fU-unsplash_crs5ca.jpg"
              alt=""
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="flex flex-wrap flex-row w-full gap-8 items-center">
            <div className=" lg:w-2/6 xl:w-[45%] sm:w-full relative z-10 h-fit animate__animated animate__fadeInDown animate__slower">
              <div>
                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                  The Tech you need is what we expertise
                </h1>
                <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
                  Always ready to give solutions
                </p>
              </div>
            </div>
            <div className=" lg:w-7/12 xl:w-[49%] sm:w-full relative z-10 max-h-60 animate__animated animate__fadeInDown animate__slower">
              <Swiper
                className=" rounded-xl"
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={true}
              >
                <SwiperSlide key={1}>
                  <div
                    style={{
                      background: `url("https://res.cloudinary.com/dydwvfozy/image/upload/v1687286151/WhatsApp_Image_2023-06-19_at_12.46.31_ktzlhk.jpg") center no-repeat`,
                    }}
                    className="swiperSlideDiv h-[60vh]"
                  ></div>
                </SwiperSlide>
                <SwiperSlide key={2}>
                  <div
                    style={{
                      background: `url("https://res.cloudinary.com/dydwvfozy/image/upload/v1687286151/WhatsApp_Image_2023-06-19_at_15.54.47_1_gshuzu.jpg") center no-repeat`,
                      backgroundSize: "cover",
                    }}
                    className="swiperSlideDiv h-[60vh]"
                  ></div>
                </SwiperSlide>
                <SwiperSlide key={3}>
                  <div
                    style={{
                      background: `url("https://res.cloudinary.com/dydwvfozy/image/upload/v1687286150/WhatsApp_Image_2023-06-19_at_15.54.47_nw4rhj.jpg") center no-repeat`,
                      backgroundSize: "cover",
                    }}
                    className="swiperSlideDiv h-[60vh]"
                  ></div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </div>

      <section className="relative px-4 py-10 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-12">
        <div className="flex flex-col lg:flex-row lg:-mx-8 text-cyan-600">
          <div className="w-full lg:w-2/3 lg:px-2 animate__animated animate__fadeInLeft animate__slower">
            <h2 className=" flex items-center gap-4  text-5xl leading-tight font-bold mt-4">
              <GrServices fill="blue" className=" inline-block" />
              Services we provide
            </h2>
            <p className="text-lg mt-1 px-16 font-semibold">
              All your needs digitalized
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-wrap mt-16 gap-8 md:-mx-4">
          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <FaCookie size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">IT Consulting Services</h2>
              <ul className=" list-disc">
                <li>Strategic IT planning and consulting</li>
                <li>Technology assessment and roadmap development</li>
                <li>Business process optimization and automation</li>
                <li>IT infrastructure design and implementation</li>
              </ul>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-sm">Learn now!</button>
              </div> */}
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <GrUserManager size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Manage IT Services</h2>
              <ul className=" list-disc">
                <li>Proactive network and server monitoring</li>
                <li>Help desk and technical support</li>
                <li>Patch management and software updates</li>
                <li>Data backup and disaster recovery solutions</li>
                <li>Security management and threat detection</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <FaCloudUploadAlt size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">Cloud Services</h2>
              <ul className=" list-disc">
                <li>Cloud migration and deployment</li>
                <li>Infrastructure as a Service (IaaS)</li>
                <li>Software as a Service (SaaS)</li>
                <li>Platform as a Service (PaaS)</li>
                <li>Cloud security and compliance</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <FaNetworkWired size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                Network And Security Services
              </h2>
              <ul className=" list-disc">
                <li>Network design and implementation</li>
                <li>Firewall setup and configuration</li>
                <li>Intrusion detection and prevention systems</li>
                <li>Virtual private network (VPN) setup</li>
                <li>Vulnerability assessment and penetration testing</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <FaDatabase size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                Data Management Services
              </h2>
              <ul className=" list-disc">
                <li> Data storage and backup solutions</li>
                <li>Database administration and optimization</li>
                <li>Data warehousing and analytics</li>
                <li> Data migration and integration</li>
                <li> Data governance and compliance</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <GrCloudSoftware size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                Software Development and Integration
              </h2>
              <ul className=" list-disc">
                <li>Custom software development</li>
                <li> Web and mobile application development</li>
                <li>Integration of third-party systems and APIs</li>
                <li>Legacy system modernization</li>
                <li> Quality assurance and testing</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <GrBusinessService size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">IT Project Management</h2>
              <ul className=" list-disc">
                <li>Project scoping and planning</li>
                <li>Resource allocation and management</li>
                <li> Budgeting and cost control</li>
                <li>Risk assessment and mitigation</li>
                <li>Project documentation and reporting</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <GrVirtualMachine size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                Virtualization and Infrastructure Services
              </h2>
              <ul className=" list-disc">
                <li> Server virtualization and consolidation</li>
                <li>Virtual desktop infrastructure (VDI)</li>
                <li> Storage virtualization</li>
                <li>Cloud infrastructure management</li>
                <li>High availability and fault tolerance solutions</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <GrSupport size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">
                IT Training and Support
              </h2>
              <ul className=" list-disc">
                <li> End-user training and support</li>
                <li> Technology adoption and change management</li>
                <li>Training programs for IT staff</li>
                <li>Knowledge base and self-help resources</li>
                <li>User documentation and manuals</li>
              </ul>
            </div>
          </div>

          <div className="card mb-8 w-80 bg-gradient-to-b from-cyan-300 to-blue-200">
            <figure className=" mt-5">
              <GrShieldSecurity size={40} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-center">IT Security Services</h2>
              <ul className=" list-disc">
                <li>Security assessment and audits</li>
                <li>Security policy development</li>
                <li>Security awareness training</li>
                <li>Incident response and management</li>
                <li>Security architecture design and implementation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LandingPage;
