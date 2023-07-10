import React from "react";

const ITProject = () => {
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
              IT Project Management
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              At Echonat, we specialize in IT Project Management services
              designed to ensure the successful planning, execution, and
              delivery of technology initiatives. Our experienced project
              managers combine industry knowledge, proven methodologies, and
              effective communication to drive projects from inception to
              completion, on time and within budget.
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
            <h2 className="card-title">Project Scoping and Planning</h2>
            <ul className=" list-disc">
              <li>
                Collaborate closely with your organization to understand project
                goals and requirements.
              </li>
              <li>
                Develop a comprehensive project plan, including timelines,
                milestones, and deliverables.
              </li>
              <li>Define project scope, objectives, and success criteria. </li>
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
            <h2 className="card-title">Resource Allocation and Management</h2>
            <ul className=" list-disc">
              <li>
                Identify project resource requirements, including human
                resources and technology assets.
              </li>
              <li>
                Allocate resources effectively to ensure project efficiency and
                productivity.
              </li>
              <li>
                Monitor resource utilization and make adjustments as needed.
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
            <h2 className="card-title">Budgeting and Cost Control</h2>
            <ul className=" list-disc">
              <li>
                Develop project budgets, considering resource costs, equipment,
                and other expenses.
              </li>
              <li>
                Track project expenditures and control costs to ensure project
                remains within budget.
              </li>
              <li>
                Provide accurate and transparent financial reporting throughout
                the project.
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
            <h2 className="card-title">Risk Assessment and Mitigation</h2>
            <ul className=" list-disc">
              <li>
                Conduct risk assessments to identify potential project risks and
                develop mitigation strategies.
              </li>
              <li>
                Proactively manage risks throughout the project lifecycle.
              </li>
              <li>
                Implement contingency plans to address unforeseen challenges.
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
            <h2 className="card-title">Project Documenation and Reporting</h2>
            <ul className=" list-disc">
              <li>
                Conduct a thorough project closure process, including final
                documentation and handover.
              </li>
              <li>
                Evaluate project outcomes, lessons learned, and success
                criteria.
              </li>
              <li>
                Capture best practices and insights for future project
                improvement.
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

export default ITProject;
