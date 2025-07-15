import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";

function RatingIcon() {
  return (
    <>
      <div className="review__rating">
        <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />{" "}
        <MdOutlineStarPurple500 /> <MdOutlineStarPurple500 />{" "}
        <MdOutlineStarPurple500 />
      </div>
    </>
  );
}

export default RatingIcon;
