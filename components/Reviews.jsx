import React from "react";
import RatingIcon from "../assets/icons/ReviewsIcon";

function Reviews() {
  return (
    <>
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
              This app has been a<span className="bold"> game changer </span>for
              me! It's saved me so much time and effort in reading and
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
              without having to read the entire thing. {" "}
              <span className="bold">
                The summaries are well-written and informative.
              </span> {" "}
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
              If you're a busy person who {" "}
              <span className="bold">
                loves reading but doesn't have the time
              </span> {" "}
              to read every book in full, this app is for you! The summaries are
              thorough and provide a great overview of the book's content.
            </div>
          </div>
          <button className="login__button">Login</button>
        </div>
      </div>
    </>
  );
}

export default Reviews;
