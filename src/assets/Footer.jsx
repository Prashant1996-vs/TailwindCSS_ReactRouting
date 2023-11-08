import React from "react";
function Footer() {
  return (
    <footer className="h-[10vh] w-[40vw] text-center fixed bottom-[7vh] flex justify-center items-center rounded-[10px] backdrop-blur-[10px]">
      <p className="cursor-pointer font-mono font-bold hover:underline">
        Copyright &copy; 2023 Prashant Sharma. All Rights Reserved
      </p>
    </footer>
  );
}
export default Footer;
