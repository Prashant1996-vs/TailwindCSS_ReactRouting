import React from "react";
import contact from "./contact.jpg";
function Contact() {
  return (
    <>
      <section className="h-[95vh] w-[97.5vw] flex justify-center items-center">
        <main
          style={{ backgroundImage: `url(${contact})` }}
          className="h-[100%] w-[100%] bg-[length:85%_95%] bg-center bg-no-repeat rounded-[10px]"
        ></main>
      </section>
    </>
  );
}
export default Contact;
