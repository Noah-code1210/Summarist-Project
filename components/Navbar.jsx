import React from "react";
import Image from "next/image";
import Logo from "../assets/WebsiteLogo.png";

function Navbar() {
  return (
    <>
      <div id="navbar">
          <div className="flex justify-between items-center">
            <Image src={Logo} width={200} height={200} alt="Website Logo Img" className="logo-img" />
            <ul className="flex gap-6 mr-[472px]">
              <li className="list">Login</li>
              <li className="list">About</li>
              <li className="list">Contact</li>
              <li className="list">Help</li>
            </ul>
          </div>
      </div>
    </>
  );
}

export default Navbar;
