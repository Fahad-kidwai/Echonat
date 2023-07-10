import React from "react";

const ManageIT = () => {
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
              Managed IT Services
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              At Echonat, we offer comprehensive Managed IT Services designed to
              provide proactive, reliable, and cost-effective technology
              solutions for your business. Our team of experienced professionals
              takes care of your IT infrastructure, ensuring seamless
              operations, increased productivity, and reduced downtime, so you
              can focus on what matters most–growing your business.
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
            <h2 className="card-title">Network Monitoring and Maintenance</h2>
            <ul className=" list-disc">
              <li>
                Proactively monitor your network infrastructure to identify and
                resolve issues before they impact your business.
              </li>
              <li>
                Regularly update and maintain network components, ensuring
                optimal performance and security.
              </li>
              <li>
                Implement robust security measures to protect your network from
                cyber threats.
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn bg-cyan-500 btn-md ">Avail Service</button>
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
            <h2 className="card-title">Security Management</h2>
            <ul className=" list-disc">
              <li>
                Implement multi-layered security measures to safeguard your IT
                infrastructure.
              </li>
              <li>
                Conduct regular security assessments and vulnerability scans to
                identify and address potential risks.
              </li>
              <li>
                Deploy and manage advanced security solutions such as firewalls,
                antivirus software, and intrusion detection systems.
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn bg-cyan-500  btn-md">Avail Service</button>
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
            <h2 className="card-title">Software and Patch Management</h2>
            <ul className=" list-disc">
              <li>
                Monitor and manage software applications to ensure they are up
                to date and secure.
              </li>
              <li>
                Implement timely software patches and updates to protect against
                vulnerabilities.
              </li>
              <li>
                Streamline software deployment and license management to
                optimize efficiency and compliance.{" "}
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn bg-cyan-500  btn-md">Avail Service</button>
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
              Proactive Maintenance and System Optimization:
            </h2>
            <ul className=" list-disc">
              <li>
                Regularly perform system maintenance tasks, including updates,
                patches, and optimizations.
              </li>
              <li>
                Monitor system performance and proactively address potential
                bottlenecks.
              </li>
              <li>
                Identify opportunities for system enhancements and performance
                optimizations.{" "}
              </li>
            </ul>
            <div className="card-actions justify-end">
              <button className="btn bg-cyan-500  btn-md">Avail Service</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageIT;
