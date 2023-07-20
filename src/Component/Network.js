import React from "react";

const Network = () => {
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
              Network and Security Services
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              At Echonat, we offer comprehensive Network and Security Services
              designed to protect your network infrastructure and safeguard your
              valuable data. Our team of experts combines industry-leading
              technologies, proven methodologies, and extensive experience to
              deliver robust and scalable solutions that mitigate risks, enhance
              network performance, and ensure the integrity of your critical
              information.
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
            <h2 className="card-title">Network Design and Implementation</h2>
            <ul className=" list-disc">
              <li>
                Assess your business requirements and design a secure and
                scalable network infrastructure.
              </li>
              <li>
                Deploy network components, including routers, switches,
                firewalls, and access points.
              </li>
              <li>
                Optimize network performance, ensuring efficient data flow and
                minimal downtime.
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
            <h2 className="card-title">Firewall Setup and Configuration</h2>
            <ul className=" list-disc">
              <li>
                Implement and configure firewall solutions to protect your
                network from unauthorized access.
              </li>
              <li>
                Set up intrusion prevention systems to detect and prevent
                malicious activities.
              </li>
              <li>
                Continuously monitor and update firewall rules to address
                emerging threats.
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
              Intrusion detection and prevention systems!
            </h2>
            <ul className=" list-disc">
              <li>
                Deploy DLP solutions to prevent unauthorized data disclosure or
                loss.
              </li>
              <li>
                Define policies to monitor, detect, and protect sensitive data.
              </li>
              <li>
                Implement controls to prevent data exfiltration and enforce
                compliance
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
            <h2 className="card-title">Virtual Private Network (VPN)</h2>
            <ul className=" list-disc">
              <li>
                Establish secure remote access to your network through VPN
                solutions.
              </li>
              <li>
                Encrypt data transmission to maintain confidentiality and
                integrity.
              </li>
              <li>
                Configure and manage VPN tunnels for secure communication
                between remote locations.
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
              Vulnerability Assessment and Penetration Testing
            </h2>
            <ul className=" list-disc">
              <li>
                Conduct comprehensive vulnerability assessments to identify
                network and system weaknesses.
              </li>
              <li>
                Perform penetration testing to simulate real-world attacks and
                identify potential security gaps.
              </li>
              <li>
                Provide detailed reports and recommendations for remediation.
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

export default Network;
