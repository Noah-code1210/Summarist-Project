"use client";

function page() {
  return (
    <>
      <div className="relative flex flex-col ml-[200px] w-[1669px] transition-all">
        <div className="w-full max-w-[1070px] mx-auto px-6">
          <div className="w-full py-10">
            <div className="account__section--title">Saved Books</div>
            <div className="font-light text-[#394547] mb-4">0 items</div>
            <div className="bg-[#f1f4f6] max-w-fit flex flex-col items-center gap-2 p-8 rounded-3xl mx-auto mb-14 text-center">
              <div className="text-[#042330] font-semibold text-lg">
                Save your favorite books!
              </div>
              <div className="text-[#394547]">
                When you save a book, it will appear here.
              </div>
            </div>
            <div className="account__section--title">Finished</div>
            <div className="font-light text-[#394547] mb-4">0 items</div>
             <div className="bg-[#f1f4f6] max-w-fit flex flex-col items-center gap-2 p-8 rounded-3xl mx-auto mb-14 text-center">
              <div className="text-[#042330] font-semibold text-lg">
                Revisit your finished books!
              </div>
              <div className="text-[#394547]">
                When you finish a book completely, it will appear here.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
