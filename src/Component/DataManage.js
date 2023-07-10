import React from "react";

const DataManage = () => {
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
              Data Management Services
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              At Echonat, we offer comprehensive Data Management Services
              designed to help businesses effectively manage and leverage their
              data assets. Our team of experts combines industry best practices,
              advanced technologies, and proven methodologies to ensure data
              accuracy, integrity, security, and accessibility. Whether you need
              assistance with data governance, data integration, data quality,
              or data analytics, we have the expertise to support your data
              management needs.
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
            <h2 className="card-title">Data Backup and Storage Solutions</h2>
            <ul className=" list-disc">
              <li>
                Develop data backup and recovery strategies to protect against
                data loss.
              </li>
              <li>Implement automated and secure data backup solutions.</li>
              <li>
                Define data retention policies and procedures for data recovery.
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
            <h2 className="card-title">
              Database Administration and Optimization
            </h2>
            <ul className=" list-disc">
              <li>
                Provide comprehensive database administration services to ensure
                the smooth operation and performance of your databases.
              </li>
              <li>
                Install, configure, and manage database management systems
                (DBMS) such as Oracle, SQL Server, MySQL, or PostgreSQL.
              </li>
              <li>
                Monitor and optimize database performance, including query
                tuning, index optimization, and storage management.
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
            <h2 className="card-title">Data Warehousing and Analytics</h2>
            <ul className=" list-disc">
              <li>
                Design and build data warehouses and data marts to support your
                reporting and analytics needs.
              </li>
              <li>
                Implement robust business intelligence solutions for data
                visualization, reporting, and decision-making.
              </li>
              <li>
                Enable self-service analytics for business users to access and
                analyze data independently.
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
            <h2 className="card-title">Data Migration and Integration</h2>
            <ul className=" list-disc">
              <li>
                Assist with data migration projects, ensuring smooth transition
                from legacy systems to new platforms.
              </li>
              <li>Validate and cleanse data during the migration process.</li>
              <li>
                Convert data formats to meet the requirements of the target
                systems.
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
            <h2 className="card-title">Data Governance and Compliance</h2>
            <ul className=" list-disc">
              <li>
                Establish data governance frameworks and processes to ensure
                data integrity, compliance, and security.
              </li>
              <li>
                Define data ownership, roles, and responsibilities within your
                organization.
              </li>
              <li>
                Implement data stewardship and data quality management
                practices.
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

export default DataManage;
