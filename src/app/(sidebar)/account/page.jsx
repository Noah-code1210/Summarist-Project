"use client";
import { IoMdSearch } from "react-icons/io";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosStarOutline } from "react-icons/io";
import SkeletonLoading from "../../../../assets/LoadingState/SkeletonLoading";
import Logo from "../../../../assets/WebsiteLogo.png";


function page() {
  const [forYouBook, setForYouBook] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [suggestedBooks, setSuggestedBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchForYouBook() {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected"
      );
      setTimeout(() => {
        setForYouBook(data);
        setLoading(false);
      }, 2000);
    }
    fetchForYouBook();
  }, []);

  useEffect(() => {
    async function fetchRecommendedBooks() {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended"
      );
      setTimeout(() => {
        setRecommendedBooks(data);
        setLoading(false);
      }, 2000);
    }
    fetchRecommendedBooks();
  }, []);

  useEffect(() => {
    async function fetchSuggestedBook() {
      const { data } = await axios.get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested"
      );
      setTimeout(() => {
        setSuggestedBooks(data);
        setLoading(false);
      }, 2000);
    }
    fetchSuggestedBook();
  }, []);

  return (
    <>
      <section>
        <div className="relative flex flex-col ml-[200px] w-[1669px] transition-all">
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
                  {forYouBook.map((book) => {
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
                  <div>
                    <div className="account__section--title">
                      Suggested Books
                    </div>
                    <div className="font-light color-[#394547] mb-4">
                      Browse those books
                    </div>
                    <div className="flex flex-wrap gap-4 snap-x snap-mandatory mb-8">
                      {suggestedBooks.map((book) => {
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
