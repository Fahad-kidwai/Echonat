import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = () => {
  const number = 9151512705;
  const msg = "testing whatsapp functionality";
  var url = "https://web.whatsapp.com/send?phone=" + number + "&text=" + msg;
  return (
    <a
      href={url}
      target={"_blank"}
      className=" btn-circle fixed top-[92%] right-8"
    >
      <FaWhatsapp fill="green" size={35} />
    </a>
  );
};

export default Whatsapp;
