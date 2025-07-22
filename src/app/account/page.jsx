"use client";
import Image from "next/image";
import Logo from "../../../assets/WebsiteLogo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { RiBallPenLine } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import SkeletonLoading from "../../../assets/LoadingState/SkeletonLoading";


function page() {
  const [suggestedBook, setSuggestedBook] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSuggestedBook() {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
      );
      setTimeout(() => {
        setSuggestedBook(data);
        setLoading(false);
      }, 2000);
    }
    fetchSuggestedBook();
  }, []);

  useEffect(() => {
    async function fetchRecommendedBooks() {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
      );
      console.log(data);
      setRecommendedBooks(data);
    }
    fetchRecommendedBooks();
  }, []);

  return (
    <>
      <section>
        <div className="relative flex flex-col ml-[200px] w-[1669px] transition-all">
          <div className="w-full max-w-[1920px] bg-white border-b-1 border-solid border-b-[#e1e7ea] h-20 z-1">
            <div className="relative flex items-center justify-between px-8 max-w-[1070px] mx-auto h-full">
              <figure>
                <img src={Logo} alt="" />
              </figure>
              <div className="flex items-center gap-6 w-full max-w-[340px]">
                <div className="flex items-center w-full">
                  <div className="relative gap-2">
                    <input
                      type="text"
                      placeholder="Search for books"
                      className="w-full h-10 px-4 outline-none bg-[#f1f6f4] text-[#042330] border-solid border-2 border-[#e1e7ea] rounded-lg min-w-[340px]"
                    />
                    <div className="flex items-center absolute h-full right-2 top-0 justify-end border-solid border-l-2 border-l-[#e1e7ea] pl-2">
                      <div>
                        <IoMdSearch className="w-7 h-7 text-[#03314b]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
          {loading ? (
            <>
              
              <SkeletonLoading />
            </>
          ) : (
            <div className="w-full max-w-[1070px] mx-auto px-6">
              <div className="w-full py-10">
                <div>
                  <div className="account__section--title">
                    Selected just for you
                  </div>
                  {suggestedBook.map((book) => {
                    return (
                        <a
                          key={book.id}
                          href=""
                          className="flex justify-between w-full max-w-[681px] h-[188px] bg-[#fbefd6] rounded-sm p-6  mb-6 gap-[26px]"
                        >
                          <div className="text-[#032b41] w-[40%] max-w-[234px]">
                            {book.subTitle}
                          </div>
                          <div className="w-[1px] bg-[#bac8ce]"></div>
                          <div className="flex gap-4 w-[60%] max-w-[351px]">
                            <figure className="min-w-[140px] h-[140px]">
                              <img
                                src={book.imageLink}
                                alt=""
                                className="w-[140px] h-[140px]"
                              />
                            </figure>
                            <div className="w-full">
                              <div className="font-semibold text-[#032b41] mb-2">
                                {book.title}
                              </div>
                              <div className="text-sm text-[#394547] mb-4">
                                {book.author}
                              </div>
                            </div>
                          </div>
                        </a>
                    );
                  })}
                  <div>
                    <div className="account__section--title">
                      Recommended For You
                    </div>
                    <div className="font-light color-[#394547] mb-4">
                      We think you'll like these
                    </div>
                    <div className="flex flex-wrap gap-4 snap-x snap-mandatory mb-8">
                      {recommendedBooks.map((book) => {
                        return (
                          <a
                            key={book.id}
                            href=""
                            className="recommended__book--link"
                          >
                            <div className="bg-[#032b41] w-fit h-[18px] px-2 absolute top-0 right-0 text-white text-[10px] flex items-center rounded-[20px]">
                              {book.subscriptionRequired === true
                                ? "Premium"
                                : null}
                            </div>
                            <figure className="w-[172px] h-[172px] mb-2">
                              <img
                                src={book.imageLink}
                                alt=""
                                className="w-full h-full"
                              />
                            </figure>
                            <div className="font-bold text-[#032b41] mb-2">
                              {book.title}
                            </div>
                            <div className="text-sm text-[#6b7f7b] font-light mb-2">
                              {book.author}
                            </div>
                            <div className="text-sm text-[#394547] mb-2">
                              {book.subTitle}
                            </div>
                            <div className="flex gap-2 ">
                              <div className="">
                                <IoIosStarOutline className="w-4 h-4" />
                              </div>
                              <div className="text-sm text-[#6b757b] font-light">
                                {book.averageRating}
                              </div>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default page;
