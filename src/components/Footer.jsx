import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-red-800 p-8 text-white text-center">
      <p className="mb-2">
        © {currentYear} <span className="font-bold">Rayeli Fashions</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
