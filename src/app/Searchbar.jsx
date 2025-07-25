'use client'
import React from "react";
import Logo from "../../assets/WebsiteLogo.png";
import { IoMdSearch } from "react-icons/io";

function Searchbar() {
  return (
    <>
      <div className="w-full max-w-[1920px] bg-white border-b-1 border-solid border-b-[#e1e7ea] h-20 z-1">
        <div className="relative flex items-center justify-between px-8 max-w-[1070px] mx-auto h-full">
          <figure>
            <img src={Logo} alt="" />
          </figure>
          <div className="flex items-center gap-6 w-full max-w-[340px]">
            <div className="flex items-center w-full">
              <div className="relative gap-2">
                <input
                  type="text"
                  placeholder="Search for books"
                  className="w-full h-10 px-4 outline-none bg-[#f1f6f4] text-[#042330] border-solid border-2 border-[#e1e7ea] rounded-lg min-w-[340px]"
                />
                <div className="flex items-center absolute h-full right-2 top-0 justify-end border-solid border-l-2 border-l-[#e1e7ea] pl-2">
                  <div>
                    <IoMdSearch className="w-7 h-7 text-[#03314b]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
