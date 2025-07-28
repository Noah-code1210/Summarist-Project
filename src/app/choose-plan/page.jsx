import React from "react";
import PricingImage from "../../../assets/pricing-top.webp";
import Image from "next/image";
import { FaFileAlt } from "react-icons/fa";
import { PiPottedPlantFill } from "react-icons/pi";
import { FaHandshake } from "react-icons/fa";

function choosePlan() {
  return (
    <>
      <div className="w-full">
        <div className='relative text-center w-full pt-12 mb-6 before:content-[""] before:absolute before:top-0 before:left-0 before:z-[-1] before:w-full before:h-full before:bg-[#032b41] before:rounded-b-[16rem]'>
          <div className="max-w-[1000px] mx-auto text-white px-6">
            <div className="text-5xl font-bold mb-10">
              Get unlimited access to many amazing books to read
            </div>
            <div className="text-xl mb-8">
              Turn ordinary moments into amazing learning opportunities
            </div>
            <figure className="flex justify-center max-w-[340px] mx-auto rounded-t-[180px] overflow-hidden">
              <Image
                src={PricingImage}
                width={340}
                height={285}
                alt="Pricing Image"
              />
            </figure>
          </div>
        </div>
        <div className="w-full py-10">
          <div className="w-full max-w-[1070px] mx-auto px-6">
            <div className="grid grid-cols-3 justify-center text-center gap-6 max-w-[800px] mx-auto mb-14">
              <div>
                <figure className="plan__features--wrapper">
                  <FaFileAlt className="w-[60px] h-[60px]" />
                </figure>
                <div className="plan__features--title">
                  <span className="bold">Key ideas in few min</span> with many books to read
                </div>
              </div>
              <div>
                <figure className="plan__features--wrapper">
                  <PiPottedPlantFill className="w-[60px] h-[60px]" />
                </figure>
                <div className="plan__features--title">
                  <span className="bold">3 million</span> people growing with Summarist every day
                </div>
              </div>
              <div>
                <figure className="plan__features--wrapper">
                  <FaHandshake className="w-[60px] h-[60px]" />
                </figure>
                <div className="plan__features--title">
                  <span className="bold">Precise recommendation</span> collections curated by experts
                </div>
              </div>
            </div>
            <div className="text-[32px] text-[#032b41] text-center mb-8 font-bold">
              Choose the plan that fits you
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default choosePlan;
