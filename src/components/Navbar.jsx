import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive]   = useState("");
  const [toggle, setToggle]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (nav) => (
    nav.page
      ? <Link to={`/${nav.id}`}>{nav.title}</Link>
      : <a href={`#${nav.id}`}>{nav.title}</a>
  );

  return (
    <nav className={`${styles.paddingX} w-full fixed top-0 z-20 py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo + home link */}
        <Link to="/" className="flex items-center gap-2"
              onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold">
            Aditya <span className="sm:block hidden">| Web&nbsp;Developer</span>
          </p>
        </Link>

        {/* desktop menu */}
        <ul className="hidden sm:flex flex-row gap-10 list-none">
          {navLinks.map(nav => (
            <li key={nav.id}
                className={`${active===nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}>
              {renderLink(nav)}
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu}
               alt="menu"
               className="w-[28px] h-[28px] object-contain"
               onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 z-10 rounded-xl`}>
            <ul className="flex flex-col gap-4 list-none">
              {navLinks.map(nav => (
                <li key={nav.id}
                    className={`font-poppins font-medium text-[16px] cursor-pointer ${
                      active===nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => { setToggle(false); setActive(nav.title); }}>
                  {renderLink(nav)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
