import React from "react";

const Footer = () => {
  return (
    <footer className="background px-12 py-6">
         <div className="space-x-12 mb-4">
          <i className="ri-facebook-fill text-2xl  text-white"></i>
          <i className="ri-instagram-line text-2xl  text-white"></i>
          <i className="ri-tiktok-fill text-2xl  text-white"></i>
          <i className="ri-youtube-line text-2xl  text-white"></i>
       
      </div>
      <hr className="border-white" />
      <ul className="md:flex md:gap-7 text-white font-medium my-6">
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Our Staff</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li>
          <a href="#">Ethics & Guidelines</a>
        </li>
        <li>
          <a href="#">How We Make Our Money</a>
        </li>
        <li>
          <a href="#">Newsletters</a>
        </li>
      </ul>
      <div className="text-center">
        <p className="text-sm text-[#212121]">
          © 2023 Revo. All rights reserved. Terms of Use and Privacy Policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
