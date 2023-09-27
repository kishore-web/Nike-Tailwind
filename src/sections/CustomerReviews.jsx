import React from "react";
import { star } from "../assets/icons";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container flex flex-col items-center">
      <h2 className="text-4xl max-sm:text-3xl font-palanquin text-center font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="info-text text-center mt-5 max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex justify-evenly max-lg:flex-col gap-14 mt-14">
        {reviews.map((review) => (
          <div className="flex flex-col items-center justify-center max-w-sm">
            <div>
              <img
                src={review.imgURL}
                alt="customer photo"
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
            <p className="info-text text-center mt-5">{review.feedback}</p>
            <div className="flex gap-3 mt-3 mb-4">
              <img src={star} alt="star" />
              <p className="text-xl text-gray-500">({review.rating})</p>
            </div>
            <h3 className="text-2xl font-bold">{review.customerName}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
