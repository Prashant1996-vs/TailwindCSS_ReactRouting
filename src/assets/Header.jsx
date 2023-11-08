import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="h-[10vh] w-[90vw] flex justify-between items-center rounded-[10px] fixed top-[7vh] font-bold font-mono backdrop-blur-[10px]">
      <p className="ml-[20px] text-[25px]">PRASHANT</p>
      <ul className="flex justify-center items-center gap-[20px] mr-[20px] text-[18px]">
        <li>
          <NavLink className={"active:border-b-[2px] border-black"} to={"/"}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"active:border-b-[2px] border-black"}
            to={"/about"}
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            className={"active:border-b-[2px] border-black"}
            to={"/contact"}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
