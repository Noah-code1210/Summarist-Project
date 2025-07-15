import React from "react";

function Reviews() {
  return (
    <>
      <div id="reviews">
        <div className="container flex-col">
          <div className="section-title">What our members say</div>
          <div className="review__box">
            <div className="flex gap-x-2">
              <div className="review__name">Hanna M.</div>
              <div className="review__rating"> 5 Stars</div>
            </div>
            <div className="review__para">
              This app has been a <span className="bold">game changer</span> for
              me! It's saved me so much time and effort in reading and
              comprehending books. Highly recommend it to all book lovers.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
