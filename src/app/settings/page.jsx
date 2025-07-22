import Image from "next/image";
import Logo from "../../../assets/WebsiteLogo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

function page() {
  return (
    <>
      <div className="fixed h-full w-full max-w-[200px] bg-[#f8f8f8] top-0 left-0 z-1000">
        <div className="flex items-center justify-center h-15 pt-4 max-w-40 m-auto">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt="Website Logo Img"
            className="w-40 h-10"
          />
        </div>
        <div className="flex-grow flex-shrink basis-[0%] mt-10 min-h-[615px]">
          <div>
            <a href="/account" className="account__tabs">
              <div>
                <AiOutlineHome className="account__tab--img" />
              </div>
              <div>For you</div>
            </a>
            <a href="/library" className="account__tabs">
              <div>
                <BsBookmark className="account__tab--img" />
              </div>
              <div>My Library</div>
            </a>
            <a
              href=""
              className="account__tabs cursor-not-allowed hover:bg-transparent"
            >
              <div>
                <RiBallPenLine className="account__tab--img w-6 h-6" />
              </div>
              <div>Highlights</div>
            </a>
            <a
              href=""
              className="account__tabs cursor-not-allowed hover:bg-transparent"
            >
              <div>
                <IoMdSearch className="account__tab--img" />
              </div>
              <div>Search</div>
            </a>
          </div>
        </div>
        <div>
          <a href="/settings" className="account__tabs">
            <div>
              <IoSettingsOutline className="account__tab--img" />
            </div>
            <div>Settings</div>
          </a>
          <a
            href=""
            className="account__tabs cursor-not-allowed hover:bg-transparent"
          >
            <div>
              <FaRegCircleQuestion className="account__tab--img" />
            </div>
            <div>Help & Support</div>
          </a>
          <a href="" className="account__tabs">
            <div>
              <MdLogout className="account__tab--img" />
            </div>
            <div>Logout</div>
          </a>
        </div>
      </div>
    </>
  );
}

export default page;
