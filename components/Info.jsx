import React from "react";
import { FaFileAlt, FaLightbulb, FaMicrophone } from "react-icons/fa";

function Info() {
  return (
    <>
      <div id="info">
        <div className="container">
          <div className="flex flex-col">
            <div className="text-[32px] font-bold flex justify-center mb-8">
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
              <div className="flex flex-col gap-y-2 font-medium">
                <div className="benefits">Enhance your knowledge</div>
                <div className="benefits">Achieve greater success</div>
                <div className="benefits">Improve your health</div>
                <div className="benefits">Develop better parenting skills</div>
                <div className="benefits">Increase happiness</div>
                <div className="benefits">Be the best version of yourself!</div>
              </div>
              <div className="box__wrapper">
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
                    of Summarist members <span className="bold"> establish better </span>habits.
                  </div>
                </div>
                <div className="flex">
                  <div className="percentage">90%</div>
                  <div className="summarist-title">
                    have made
                    <span className="bold"> significant positive </span>changes to their lives
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
