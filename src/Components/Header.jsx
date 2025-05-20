import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
  }, [open]);

  return (
    <>
      <header className="background text-white px-4 py-2 flex justify-between items-center md:px-9">
        <div>
          <svg
            width="150"
            height="50"
            viewBox="0 0 200 60"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <polygon
              points="10,30 25,10 45,10 60,30 45,50 25,50"
              fill="white"
            />
            <text
              x="70"
              y="38"
              className="font-extrabold"
              fontSize="32"
              fill="white"
            >
              Revo
            </text>
          </svg>
        </div>
        <nav>
          <ul className="md:flex md:gap-6 hidden">
            <li className="hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline">
              <a href="/category/politics">Politics</a>
            </li>
            <li className="hover:underline">
              <a href="/category/entertainment">Entertainment</a>
            </li>
            <li className="hover:underline">
              <a href="/category/Health">Health</a>
            </li>
            <li className="hover:underline"><a href="/category/Sports">Sports</a></li>
          </ul>
        </nav>
        <button className="md:hidden z-100" onClick={() => setOpen(!open)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </header>
      <div
        className={`fixed top-0 left-0 h-full w-full background font-light  overflow-y-auto text-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 underline">
          <a>Your Account /</a>
          <a>Log Out </a>
        </div>

        <ul className="p-4 space-y-12  text-2xl mt-6">
          <li className="border-b-1">
            <a href="/">Home</a>
          </li>
          <li className="border-b-1">
            <a href="/category/politics">Politics</a>
          </li>
          <li className="border-b-1">
            <a href="/category/Entertainment">Entertainment</a>
          </li>
          <li className="border-b-1">
            <a href="/category/Sports">Sports</a>
          </li>
          <li className="border-b-1">
            <a href="/category/Health">Health</a>
          </li>
        </ul>
        <div className="mt-6 text-center">
          <button className="bg-[#212121] text-white font-bold py-2 px-12  mx-4 mb-4 rounded-xs">
            Subscribe
          </button>
          <div className="space-x-12 mb-4">
            <i className="ri-facebook-fill text-2xl  text-[#212121]"></i>
            <i className="ri-instagram-line text-2xl  text-[#212121]"></i>
            <i className="ri-tiktok-fill text-2xl  text-[#212121]"></i>
            <i className="ri-youtube-line text-2xl  text-[#212121]"></i>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-[#212121] mb-2">
            © 2023 Revo. All rights reserved. Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
