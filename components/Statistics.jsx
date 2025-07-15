import React from "react";
import { FaCrown } from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import StatisticsIcon from "../assets/icons/StatisticsIcon"

function Statistics() {
  return (
    <>
      <div id="statistics">
        <div className="container flex-col">
          <div className="section-title">Start growing with Summarist now</div>
          <div className="flex gap-x-10">
            <div className="statistics__box">
              <div >
                <FaCrown className="statistics__logo"/>
              </div>
              <div className="statistics__title">3 Million</div>
              <div className="statistics__para">Download on all platforms</div>
            </div>
            <div className="statistics__box">
              <div >
                <StatisticsIcon/>
              </div>
              <div className="statistics__title">4.5 Stars</div>
              <div className="statistics__para">
                Average ratings on iOS and Google Play
              </div>
            </div>
            <div className="statistics__box">
              <div >
                <FaLeaf className="statistics__logo"/>
              </div>
              <div className="statistics__title">97%</div>
              <div className="statistics__para">
                Of Summarist members create a better reading habit
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Statistics;
