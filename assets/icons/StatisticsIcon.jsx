import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";

function StatisticsIcon() {
  return (
    <div className="flex">
      <MdOutlineStarPurple500 className="w-8 h-8" />{" "}
      <MdOutlineStarPurple500 className="w-8 h-8" />{" "}
      <MdOutlineStarPurple500 className="w-8 h-8" />{" "}
      <MdOutlineStarPurple500 className="w-8 h-8" />{" "}
      <FaRegStarHalfStroke className="w-[27px] h-[27px] mt-0.5" />
    </div>
  );
}

export default StatisticsIcon;
