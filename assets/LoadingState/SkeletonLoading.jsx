import React from "react";

function skeletonLoading() {
  return (
    <>
      <div className="w-full max-w-[1070px] mx-auto px-6">
        <div className="w-full py-10">
          <div className="account__section--title">Selected just for you</div>
          <div className="flex justify-between w-full max-w-[681px] h-[188px] bg-[#d6d6d6] rounded-sm p-6  mb-6 gap-[26px]"></div>
          <div className="account__section--title">Recommended For You</div>
          <div className="font-light color-[#394547] mb-4">
            We think you'll like these
          </div>
          <div className="flex flex-wrap gap-4 snap-x snap-mandatory mb-8">
            <a href="" className="bg-[#d6d6d6] w-46 h-56">
              <div className="bg-[#d6d6d6] w-6 h-4 mb-2"></div>
              <div className="bg-[#d6d6d6] w-8 h-4 mb-2">
              </div>
              <div className="text-sm text-[#394547] mb-2"></div>
              <div className="flex gap-2 ">
                <div className="">
                </div>
                <div className="text-sm text-[#6b757b] font-light">
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default skeletonLoading;
