import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
function All() {
  return (
    <>
      <section className="h-[100vh] w-[100vw] flex justify-center items-center">
        <header className="h-[10vh] w-[95vw] flex justify-between items-center rounded-[10px] fixed top-[2vh] font-bold font-mono backdrop-blur-[10px] border-[1px] border-black">
          <p className="ml-[20px] text-[25px]">PRASHANT</p>
          <ul className="flex justify-center items-center gap-[20px] mr-[20px] text-[18px]">
            <li>
              <NavLink
                className={"active:border-b-[2px] border-black"}
                to={"/"}
              >
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
                to={"/"}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </header>
        <footer className="h-[10vh] w-[95vw] fixed bottom-[2vh] flex justify-center items-center rounded-[10px] backdrop-blur-[10px] border-[1px] border-black">
          <p className="cursor-pointer font-mono font-bold hover:underline">
            Copyright &copy; 2023 Prashant Sharma. All Rights Reserved
          </p>
        </footer>
      </section>
    </>
  );
}
export default All;
