function page() {
  return (
    <>
      <div className="relative flex flex-col ml-[200px] w-[1669px] transition-all">
        <div className="w-full py-10">
          <div className="w-full max-w-[1070px] mx-auto px-6">
            <div className="account__section--title text-left border-b-1 border-[#e1e7ea] pb-4 text-[32px] text-[#032b41] mb-8 font-bold">
              Settings
            </div>
            <div className="settings__content">
              <div className="settings__sub-title">
                Your Subscription Plan
              </div>
              <div className="text-[#032b41]">Basic</div>
              <a href="/choose-plan" className="w-fit bg-[#2bd97c] text-[#032b41] h-10 rounded-sm  transition-all flex items-center justify-center min-w-[180px] hover:bg-[#20ba68]">Upgrade to Premium</a>
            </div>
            <div className="settings__content border-white">
                <div className="settings__sub-title">
                  Email
                </div>
                <div className="text-[#032b41]">
                  @youremail
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
