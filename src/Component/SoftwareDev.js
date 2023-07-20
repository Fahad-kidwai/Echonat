import React from "react";

const SoftwareDev = () => {
  return (
    <div>
      {" "}
      <section className=" relative bg-gradient-to-tr from-cyan-500 to-blue-500  px-4 sm:px-8 lg:px-10 xl:px-20 2xl:px-64 overflow-hidden py-40 flex items-center min-h-screen">
        <div className="h-full w-full absolute top-0 left-0 z-0">
          <img
            src="https://res.cloudinary.com/dydwvfozy/image/upload/v1687113653/charlesdeluvio-Lks7vei-eAg-unsplash_t8uus2.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="flex flex-wrap flex-row w-full items-center justify-center">
          <div className=" lg:w-4/6 xl:w-[75%] sm:w-full relative z-10 h-fit animate__animated animate__fadeInDown animate__slower">
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Software Development and Integration
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              At Echonat, we specialize in Software Development and Integration
              services, empowering businesses to harness the power of technology
              through custom solutions. Our experienced team of software
              engineers and developers works closely with you to understand your
              unique requirements, and delivers scalable, secure, and innovative
              software solutions that streamline your operations, drive
              efficiency, and accelerate business growth.
            </p>
          </div>
        </div>
      </section>
      <div className=" flex m-auto flex-col sm:w-full lg:w-9/12 xl:w-3/5 py-20 gap-8">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className=" w-[19rem] h-full"
              src="https://res.cloudinary.com/dydwvfozy/image/upload/v1687113653/charlesdeluvio-Lks7vei-eAg-unsplash_t8uus2.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body py-2">
            <h2 className="card-title">Custom Software Development</h2>
            <ul className=" list-disc">
              <li>
                Develop bespoke software applications tailored to your specific
                business needs.
              </li>
              <li>
                Collaborate closely with you to understand requirements,
                functionalities, and desired outcomes.
              </li>
              <li>
                Utilize the latest technologies and programming languages to
                build robust and scalable software solutions.
              </li>
            </ul>
            <div className="card-actions justify-end">
                            <button className="btn bg-cyan-500 btn-md ">
                <label htmlFor="my-modal-1">Avail Service</label>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className=" w-[19rem] h-full"
              src="https://res.cloudinary.com/dydwvfozy/image/upload/v1687113653/charlesdeluvio-Lks7vei-eAg-unsplash_t8uus2.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body py-2">
            <h2 className="card-title">
              Web and Mobile Application Development
            </h2>
            <ul className=" list-disc">
              <li>
                Create intuitive and responsive web and mobile applications
              </li>
              <li>
                Leverage the latest technologies and frameworks for seamless
                performance
              </li>
              <li>
                Deliver compelling user experiences while meeting business goals
              </li>
            </ul>
            <div className="card-actions justify-end">
                            <button className="btn bg-cyan-500 btn-md ">
                <label htmlFor="my-modal-1">Avail Service</label>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className=" w-[19rem] h-full"
              src="https://res.cloudinary.com/dydwvfozy/image/upload/v1687113653/charlesdeluvio-Lks7vei-eAg-unsplash_t8uus2.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body py-2">
            <h2 className="card-title">
              Integration of third-party systems and APIs
            </h2>
            <ul className=" list-disc">
              <li>
                Design and build robust and secure APIs (Application Programming
                Interfaces).
              </li>
              <li>
                Enable seamless integration between different systems,
                applications, and platforms.
              </li>
              <li>
                Provide documentation and support for API usage and integration.
              </li>
            </ul>
            <div className="card-actions justify-end">
                            <button className="btn bg-cyan-500 btn-md ">
                <label htmlFor="my-modal-1">Avail Service</label>
              </button>
            </div>
          </div>
        </div>
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img
              className=" w-[19rem] h-full"
              src="https://res.cloudinary.com/dydwvfozy/image/upload/v1687113653/charlesdeluvio-Lks7vei-eAg-unsplash_t8uus2.jpg"
              alt="Movie"
            />
          </figure>
          <div className="card-body py-2">
            <h2 className="card-title">
              Software Testing and Quality Assurance
            </h2>
            <ul className=" list-disc">
              <li>
                Conduct comprehensive testing to ensure software functionality,
                performance, and security.
              </li>
              <li>
                Develop test cases, execute testing procedures, and identify and
                resolve defects.
              </li>
              <li>
                Implement quality assurance processes to ensure high-quality
                software deliverables.
              </li>
            </ul>
            <div className="card-actions justify-end">
                            <button className="btn bg-cyan-500 btn-md ">
                <label htmlFor="my-modal-1">Avail Service</label>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareDev;
