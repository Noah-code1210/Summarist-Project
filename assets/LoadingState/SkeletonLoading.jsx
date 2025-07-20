import React from "react";

function skeletonLoading() {
  return (
    <>
      <div className="w-full max-w-[1070px] mx-auto px-6">
        <div className="w-full py-10">
          <div className="account__section--title">Selected just for you</div>
          <div className="flex justify-between w-full max-w-[681px] h-[188px] bg-[#c0c0c0] rounded-sm p-6  mb-6 gap-[26px]"></div>
        </div>
      </div>
    </>
  );
}

export default skeletonLoading;
