import React from "react";
import about from "./about.jpeg";
function About() {
  return (
    <>
      <section className="h-[95vh] w-[97.5vw] flex justify-center items-center">
        <main
          style={{ backgroundImage: `url(${about})` }}
          className="h-[100%] w-[100%] bg-[length:100vw_100vh] bg-center bg-no-repeat rounded-[10px]"
        ></main>
      </section>
    </>
  );
}
export default About;
