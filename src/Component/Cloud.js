import React from "react";

const Cloud = () => {
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
              Cloud Services
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              At Echonat, we offer comprehensive Cloud Services designed to
              empower businesses with flexible, scalable, and cost-effective IT
              solutions. Our team of experts leverages the full potential of
              cloud computing to transform the way you do business, enabling
              seamless collaboration, enhanced productivity, and simplified IT
              management.
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
            <h2 className="card-title">Cloud Migration and Strategy</h2>
            <ul className=" list-disc">
              <li>
                Assess your existing infrastructure and develop a tailored cloud
                migration strategy
              </li>
              <li>
                DSeamlessly migrate your applications, data, and workloads to
                the cloud.
              </li>
              <li>
                Optimize your cloud architecture for scalability, security, and
                cost-efficiency.
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
            <h2 className="card-title">Infrastructure as a Service (IaaS)</h2>
            <ul className=" list-disc">
              <li>
                Provide virtualized infrastructure resources, including servers,
                storage, and networking.
              </li>
              <li>
                Scale your infrastructure based on demand, paying only for what
                you use.
              </li>
              <li>
                Ensure high availability, performance, and reliability of your
                IT infrastructure{" "}
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
            <h2 className="card-title">Software as a Service (SaaS)</h2>
            <ul className=" list-disc">
              <li>
                Offer a wide range of cloud-based software applications to meet
                your business needs.
              </li>
              <li>
                Enable easy access to applications from any device with an
                internet connection.{" "}
              </li>
              <li>
                Eliminate the need for software installation, maintenance, and
                upgrades.
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
            <h2 className="card-title">Platform as a Service (PaaS)</h2>
            <ul className=" list-disc">
              <li>
                Provide a comprehensive platform for developing, testing, and
                deploying applications.
              </li>
              <li>
                Offer pre-configured development environments, tools, and
                frameworks.
              </li>
              <li>
                Streamline the application development process and accelerate
                time to market{" "}
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
            <h2 className="card-title">Cloud Security and Compliance</h2>
            <ul className=" list-disc">
              <li>
                Implement robust security measures to protect your data and
                applications in the cloud.
              </li>
              <li>
                Ensure compliance with industry regulations and data privacy
                standards.
              </li>
              <li>
                Conduct regular security audits and vulnerability assessments.{" "}
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

export default Cloud;
