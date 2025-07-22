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
          <div className="h-80 flex flex-wrap gap-x-10 snap-x snap-mandatory mb-12">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div className="relative h-80 flex flex-wrap gap-x-4 snap-x snap-mandatory mb-8" key={index}>
                <a href="" className=" bg-[#d6d6d6] w-46 h-56" >
                  <div className="absolute bottom-16  bg-[#d6d6d6] w-42 h-4 mb-2"></div>
                  <div className="absolute bottom-10 bg-[#d6d6d6] w-30 h-4 mb-2"></div>
                  <div className="absolute bottom-4 bg-[#d6d6d6] w-38 h-4 mb-2"></div>
                  <div className="flex gap-2 ">
                    <div className=""></div>
                    <div className="absolute bottom-0  bg-[#d6d6d6] w-10 h-4"></div>
                  </div>
                </a>
              </div>
            ))}
            </div>
        </div>
      </div>
    </>
  );
}

export default skeletonLoading;
