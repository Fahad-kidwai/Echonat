import React, { Fragment, useState } from "react";

const ConnectModal = () => {
  const [formdata, setFormData] = useState({
    email: "",
    phNo: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
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
          <form className="mt-6" onSubmit={handleFormSubmit}>
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
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-cyan-700 bg-white border rounded-md focus:border-cyan-400 focus:ring-cyan-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phNo"
                className="block text-sm font-semibold text-gray-800"
              >
                Contact No.
              </label>
              <input
                type="number"
                name="phNo"
                id="phNo"
                onChange={handleChange}
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
                onChange={handleChange}
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
