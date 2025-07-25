"use client";
import React from 'react'
import Image from "next/image";
import HeaderImg from "../../assets/HeaderImg.png";
import { FaFileAlt, FaLightbulb, FaMicrophone } from "react-icons/fa";
import RatingIcon from "../../assets/icons/ReviewsIcon";
import { FaCrown } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import StatisticsIcon from "../../assets/icons/StatisticsIcon";
import Logo from "../../assets/WebsiteLogo.png";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react'

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [skeletonLoading, setSkeletonLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const guestLogin = () => {
      setTimeout(() => {
        setSkeletonLoading(true)
        navigate("/account")
        setSkeletonLoading(false)
      }, 3000);
    }
  }, [])

  return (
    <>
      <section>
        {showModal && (
          <>
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="fixed flex justify-center items-center w-full max-w-[1920px] h-full">
              <div className="modal__container">
                <div className="flex flex-col items-center justify-center pt-12 px-8 pb-6 bg-white min-w-[400px] min-h-[523px] relative rounded-2xl ">
                  <div>
                    <IoMdClose
                      className="w-8 h-8 text-black absolute top-2 right-2 cursor-pointer"
                      onClick={() => setShowModal(false)}
                    />
                  </div>
                  <div className="text-xl font-bold text-[#032b41] mb-6">
                    Log in to Summarist
                  </div>
                  <button className="sign-in__buttons bg-[#3a579d] hover:bg-[#25396b]">
                    <figure>
                      <IoPersonSharp className="absolute w-7 h-7 top-1.5 left-2" />
                    </figure>
                      <div>Log in as Guest</div>
                  </button>
                  {
                    skeletonLoading && <div className='skeletonLoadingState'>

                    </div>
                  }
                  <div className="seperator">
                    <div className="mx-6">or</div>
                  </div>
                  <button className="sign-in__buttons bg-[#4285f4] hover:bg-[#3367d6]">
                    <figure>
                      <FcGoogle className="absolute w-9 h-9 top-0.5 left-0.5 bg-white rounded-sm p-1" />
                    </figure>
                    <div>Log in with Google</div>
                  </button>
                  <div className="seperator">
                    <div className="mx-6">or</div>
                  </div>
                  <form className="flex flex-col gap-y-4">
                    <input
                      type="text"
                      placeholder="Email Address"
                      className="input"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      className="input"
                    />
                    <button className="login__button min-w-[336px] mb-6">
                      Login
                    </button>
                  </form>
                  <div className="text-sm text-[#116be9] font-light mb-8 cursor-pointer text-center hover:text-[#124a98] transition-all">
                    Forgot your password?
                  </div>
                  <button className="w-full h-10 absolute bottom-0 bg-[#f1f6f4] text-[#116be9] rounded-b-sm cursor-pointer hover:bg-[#e1e9e8] transition-all">
                    Don't have an account?
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      <section>
        <div id="navbar">
          <div className="flex justify-between items-center">
            <Image
              src={Logo}
              width={200}
              height={200}
              alt="Website Logo Img"
              className="logo-img"
            />
            <ul className="flex gap-6 mr-[472px]">
              <li
                className="list hover:text-[#2bd97c] transition-colors"
                onClick={() => setShowModal(true)}
              >
                Login
              </li>
              <li className="list cursor-not-allowed">About</li>
              <li className="list cursor-not-allowed">Contact</li>
              <li className="list cursor-not-allowed">Help</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="flex">
                <div className="flex-col mr-48">
                  <div className="text-[40px]/12 font-bold text-[#032b41] w-full max-w-108 mb-5">
                    Gain more knowledge in less time
                  </div>
                  <div className="text-xl font-light text-[#394547] w-full max-w-96 mb-6">
                    Great summaries for busy people, individuals who barely have
                    time to read, and even people who don't like to read
                  </div>
                  <button
                    className="login__button"
                    onClick={() => setShowModal(true)}
                  >
                    Login
                  </button>
                </div>
                <Image
                  src={HeaderImg}
                  width={400}
                  height={400}
                  alt="headerImg"
                  className="w-full max-w-[340px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="info">
          <div className="container">
            <div className="flex flex-col">
              <div className="section-title">
                Understand books in few minutes
              </div>
              <div className="flex gap-12 mb-24">
                <div className="info__block--wrapper ">
                  <FaFileAlt className="info-icon" />
                  <div className="info-title">Read or listen</div>
                  <div className="info-para">
                    Save time by getting the core ideas from the best books.
                  </div>
                </div>
                <div className="info__block--wrapper">
                  <FaLightbulb className="info-icon" />
                  <div className="info-title">Find your next read</div>
                  <div className="info-para">
                    Explore book lists and personalized recommendations.
                  </div>
                </div>
                <div className="info__block--wrapper">
                  <FaMicrophone className="info-icon" />
                  <div className="info-title">Briefcasts</div>
                  <div className="info-para">
                    Gain valuable insights from briefcasts
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col gap-y-2 font-medium mr-20 ">
                  <div className="benefits">Enhance your knowledge</div>
                  <div className="benefits">Achieve greater success</div>
                  <div className="benefits">Improve your health</div>
                  <div className="benefits">
                    Develop better parenting skills
                  </div>
                  <div className="benefits">Increase happiness</div>
                  <div className="benefits">
                    Be the best version of yourself!
                  </div>
                </div>
                <div className="box__wrapper mb-24">
                  <div className="flex">
                    <div className="percentage">93%</div>
                    <div className="summarist-title">
                      of Summarist members
                      <span className="bold"> significantly increase </span>
                      reading frequency
                    </div>
                  </div>
                  <div className="flex">
                    <div className="percentage">96%</div>
                    <div className="summarist-title">
                      of Summarist members{" "}
                      <span className="bold"> establish better </span>habits.
                    </div>
                  </div>
                  <div className="flex">
                    <div className="percentage">90%</div>
                    <div className="summarist-title">
                      have made
                      <span className="bold"> significant positive </span>
                      changes to their lives
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="box__wrapper mb-24 mr-20 ">
                  <div className="flex">
                    <div className="percentage">91%</div>
                    <div className="summarist-title">
                      of Summarist members
                      <span className="bold">
                        {" "}
                        report feeling more productive{" "}
                      </span>
                      after incorporating the service into their daily routine.
                    </div>
                  </div>
                  <div className="flex">
                    <div className="percentage">94%</div>
                    <div className="summarist-title">
                      of Summarist members have{" "}
                      <span className="bold"> noticed an improvement </span>in
                      their overall comprehension and retention of information.
                    </div>
                  </div>
                  <div className="flex">
                    <div className="percentage">88%</div>
                    <div className="summarist-title">
                      have made
                      <span className="bold"> feel more informed </span>about
                      current events and industry trends since using the
                      platform.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-y-2 font-medium">
                  <div className="benefits">Expand your learning</div>
                  <div className="benefits">Accomplish your goals</div>
                  <div className="benefits">Strengthen your vitality</div>
                  <div className="benefits">Become a better caregiver</div>
                  <div className="benefits">Improve your mood</div>
                  <div className="benefits">Maximize your abilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div id="reviews">
          <div className="container flex-col">
            <div className="section-title">What our members say</div>
            <div className="review__box">
              <div className="flex gap-x-2">
                <div className="review__name">Hanna M.</div>
                <div>
                  {" "}
                  <RatingIcon />
                </div>
              </div>
              <div className="review__para">
                This app has been a<span className="bold"> game changer </span>
                for me! It's saved me so much time and effort in reading and
                comprehending books. Highly recommend it to all book lovers.
              </div>
            </div>
            <div className="review__box">
              <div className="flex gap-x-2">
                <div className="review__name">David B.</div>
                <div>
                  {" "}
                  <RatingIcon />
                </div>
              </div>
              <div className="review__para">
                I love this app! It provides
                <span className="bold"> concise and accurate summaries </span>of
                books in a way that is easy to understand. It's also very
                user-friendly and intuitive.
              </div>
            </div>
            <div className="review__box">
              <div className="flex gap-x-2">
                <div className="review__name">Nathan S.</div>
                <div>
                  {" "}
                  <RatingIcon />
                </div>
              </div>
              <div className="review__para">
                This app is a great way to get the main takeaways from a book
                without having to read the entire thing.{" "}
                <span className="bold">
                  The summaries are well-written and informative.
                </span>{" "}
                Definitely worth downloading.
              </div>
            </div>
            <div className="review__box">
              <div className="flex gap-x-2">
                <div className="review__name">Ryan R.</div>
                <div>
                  <RatingIcon />
                </div>
              </div>
              <div className="review__para">
                If you're a busy person who{" "}
                <span className="bold">
                  loves reading but doesn't have the time
                </span>{" "}
                to read every book in full, this app is for you! The summaries
                are thorough and provide a great overview of the book's content.
              </div>
            </div>
            <button
              className="login__button"
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
          </div>
        </div>
      </section>

      <section>
        <div id="statistics">
          <div className="container flex-col">
            <div className="section-title">
              Start growing with Summarist now
            </div>
            <div className="flex gap-x-10">
              <div className="statistics__box">
                <div>
                  <FaCrown className="statistics__logo" />
                </div>
                <div className="statistics__title">3 Million</div>
                <div className="statistics__para">
                  Download on all platforms
                </div>
              </div>
              <div className="statistics__box">
                <div>
                  <StatisticsIcon />
                </div>
                <div className="statistics__title">4.5 Stars</div>
                <div className="statistics__para">
                  Average ratings on iOS and Google Play
                </div>
              </div>
              <div className="statistics__box">
                <div>
                  <FaLeaf className="statistics__logo" />
                </div>
                <div className="statistics__title">97%</div>
                <div className="statistics__para">
                  Of Summarist members create a better reading habit
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="footer bg-[#f1f6f4] h-84">
          <div className="container flex">
            <div className="flex gap-x-[150px] mt-10 mb-2">
              <div className="footer__info flex-col">
                <div className="footer__title">Actions</div>
                <div className="footer__link">Summarist Magazine</div>
                <div className="footer__link">Cancel Subscription</div>
                <div className="footer__link">Help</div>
                <div className="footer__link">Contact Us</div>
              </div>
              <div className="footer__info flex-col">
                <div className="footer__title">Useful Links</div>
                <div className="footer__link">Pricing</div>
                <div className="footer__link">Summarist Business</div>
                <div className="footer__link">Gift Cards</div>
                <div className="footer__link">Authors & Publishers</div>
              </div>
              <div className="footer__info flex-col">
                <div className="footer__title">Company</div>
                <div className="footer__link">About</div>
                <div className="footer__link">Careers</div>
                <div className="footer__link">Partners</div>
                <div className="footer__link">Code of Conduct</div>
              </div>
              <div className="footer__info flex-col">
                <div className="footer__title">Other</div>
                <div className="footer__link">Sitemap</div>
                <div className="footer__link">Legal Notice</div>
                <div className="footer__link">Terms of Service</div>
                <div className="footer__link">Privacy Policies</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center font-bold">
            Copyright © 2023 Summarist.
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
