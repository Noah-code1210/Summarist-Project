import React from "react";
import Image from "next/image";
import HeaderImg from "../assets/HeaderImg.png";

function Header() {
  return (
    <>
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="flex">
              <div className="flex-col mr-48">
                <div className="text-[40px]/12 font-bold text-[#032b41] w-full max-w-108 mb-5">
                  Gain more knowledge in less time
                </div>
                <div className="text-xl font-light text-[#394547] w-full max-w-96 mb-6">
                  Great summaries for busy people, individuals who barely have
                  time to read, and even people who don't like to read
                </div>
                <button className="login__button">
                    Login
                </button>
              </div>
              <Image src={HeaderImg} width={400} height={400} alt="headerImg" className="w-full max-w-[340px]"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
