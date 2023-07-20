import React, { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ConnectModal = () => {
  const form = useRef();
  const [formdata, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

 

  // const handleChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.id]: e.target.value,
  //   }));
  // };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    emailjs.sendForm('service_tbn71et','template_044yh66',form.current,'VXcDgJGBEpg1f9kj3')

    document.getElementById("my-modal-1").checked = false;
  };

  return (
    <Fragment>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            x
          </label>
          <form ref={form} className="mt-6" onSubmit={handleFormSubmit}>
          <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="service"
                className="block text-sm font-semibold text-gray-800"
              >
                Service Description
              </label>
              <input
                type="textarea"
                name="service"
                id="service"
                className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-600 rounded-md hover:bg-cyan-400 focus:outline-none focus:bg-cyan-200"
              >
                Send Query
              </button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ConnectModal;
