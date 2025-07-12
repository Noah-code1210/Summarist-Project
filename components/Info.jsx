import React from "react";
import { FaFileAlt, FaLightbulb, FaMicrophone } from "react-icons/fa";

function Info() {
  return (
    <>
      <div id="info">
        <div className="container">
          <div className="flex-col">
            <div className="text-[32px] font-bold flex justify-center mb-8">
              Understand books in few minutes
            </div>
            <div className="flex gap-12">
              <div className="info__block--wrapper ">
                <FaFileAlt className="info-icon"/>
                <div className="info-title">Read or listen</div>
                <div className="info-para">
                  Save time by getting the core ideas from the best books.
                </div>
              </div>
              <div className="info__block--wrapper">
                <FaLightbulb className="info-icon"/>
                <div className="info-title">Find your next read</div>
                <div className="info-para">
                  Explore book lists and personalized recommendations.
                </div>
              </div>
              <div className="info__block--wrapper">
                <FaMicrophone className="info-icon"/>
                <div className="info-title">Briefcasts</div>
                <div className="info-para">
                  Gain valuable insights from briefcasts
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
