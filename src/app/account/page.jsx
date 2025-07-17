import Image from "next/image";
import Logo from "../../../assets/WebsiteLogo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";

function page() {
  return (
    <section>
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
        <div className="flex-grow flex-shrink basis-[0%] mt-10">
          <div>
            <a href="/account" className="account__tabs">
              <div>
                <AiOutlineHome className="account__tab--img" />
              </div>
              <div>For you</div>
            </a>
            <a href="/account" className="account__tabs">
              <div>
                <BsBookmark className="account__tab--img" />
              </div>
              <div>My Library</div>
            </a>
            <a href="/account" className="account__tabs">
              <div>
                <RiBallPenLine className="account__tab--img w-6 h-6" />
              </div>
              <div>Highlights</div>
            </a>
            <a href="/account" className="account__tabs">
              <div>
                <IoMdSearch className="account__tab--img" />
              </div>
              <div>Search</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
