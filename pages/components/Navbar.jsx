import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("white");
        setTextColor("black");
        setShadow(true);
      } else {
        setColor("transparent");
        setTextColor("white");
        setShadow(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: color }}
      className={`fixed top-0 left-0 z-10 w-full ease-in duration-300 ${
        shadow ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1
            style={{ color: textColor }}
            className="text-4xl font-bold cursor-pointer"
          >
            ADW93
          </h1>
        </Link>
        <ul
          style={{ color: textColor }}
          className="hidden sm:flex justify-center items-center"
        >
          <li className="p-4">
            <Link href="/#profile">Profile</Link>
          </li>
          <li className="p-4">
            <Link href="/#skill">Skills</Link>
          </li>
          <li className="p-4">
            <Link href="/#project">Projects</Link>
          </li>
          <li className="p-4">
            <Link href="/#contact">Contacts</Link>
          </li>
        </ul>
        {/* mobile menu */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} color={textColor} />
          )}
        </div>
        <div
          className={`sm:hidden absolute top-0 ${
            nav ? "left-0" : "left-[-100%]"
          } right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300`}
        >
          <ul>
            <li onClick={handleNav} className="text-4xl hover:text-gray-500 p-4">
              <Link href="/#profile">Profile</Link>
            </li>
            <li onClick={handleNav} className="text-4xl hover:text-gray-500 p-4">
              <Link href="/#skill">Skills</Link>
            </li>
            <li onClick={handleNav} className="text-4xl hover:text-gray-500 p-4">
              <Link href="/#project">Projects</Link>
            </li>
            <li onClick={handleNav} className="text-4xl hover:text-gray-500 p-4">
              <Link href="/#contact">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
