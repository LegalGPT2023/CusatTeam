import React from "react";

const Button = ({ styles, children="Learn more" }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-semibold text-[18px] text-teal-900 bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    {children}
  </button>
);

export default Button;
