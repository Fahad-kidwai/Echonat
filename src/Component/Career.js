import React, { Fragment, useRef } from "react";
import emailjs from "@emailjs/browser";

const Career = () => {
  const form = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_tbn71et",
      "template_u0hukoa",
      form.current,
      "VXcDgJGBEpg1f9kj3"
    )
    .then((result) => {
    console.log("passed")
      console.log(result.text);
  }, (error) => {
    console.log("failed")
      console.log(error.text);
  });

    
  };

  return (
    <Fragment>
      <section className=" relative bg-gradient-to-tr from-cyan-500 to-blue-500  px-4 sm:px-8 lg:px-10 xl:px-20 2xl:px-64 overflow-hidden py-40 flex items-center h-3/5">
        <div className="h-full w-full absolute top-0 left-0 z-0">
          <img
            src="https://res.cloudinary.com/dydwvfozy/image/upload/v1687113653/charlesdeluvio-Lks7vei-eAg-unsplash_t8uus2.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="flex flex-wrap flex-row w-full items-center justify-center">
          <div className=" lg:w-4/6 xl:w-[75%] sm:w-full relative z-10 h-fit animate__animated animate__fadeInDown animate__slower ">
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
              Career with us
            </h1>
            <p class=" text-teal-100 font-serif text-xl md:text-2xl text-justify leading-snug mt-4">
              Come join Echonat and fulfill all your aspiration and do wonders
              in your professional life as you get the liberty to be the version
              of yourself and do the work efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="relative px-4 py-10 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-12">
        <form
          ref={form}
          onSubmit={handleFormSubmit}
          className=" mx-auto my-8 p-5 border rounded-md border-blue-400 md:w-3/6 xl:w-[45%]"
        >
          <h1 className=" text-center text-2xl text-cyan-500 pb-4">
            Professional Information
          </h1>
          <div className="mb-2 flex flex-wrap justify-evenly items-center">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered input-md w-full max-w-xs my-2"
            />
          </div>
          <div className="mb-2 flex flex-wrap justify-evenly items-center">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered input-md w-full max-w-xs my-2"
            />
          </div>
          <div className="mb-2 flex flex-wrap justify-evenly items-center">
            <label for="skills">Skills</label>
            <input
              type="text"
              id="skills"
              name="skills"
              className="input input-bordered input-md w-full max-w-xs my-2"
            />
          </div>
          <button className="btn btn-block bg-cyan-500 text-white">
            Get Response
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Career;
