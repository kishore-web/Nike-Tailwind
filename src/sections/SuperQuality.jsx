import React from "react";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

function SuperQuality() {
  return (
    <section
      id="about-us"
      className="max-container max-sm:mt-12 flex justify-between items-center gap-10 max-lg:flex-col w-full"
    >
      <div className="flex flex-col flex-1 gap-6 items-start">
        <h2 className="text-4xl font-palanquin font-bold">
          We Provide You <span className="text-coral-red">Super</span>{" "}
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mb-5">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Button label="View Details" />
      </div>
      <div className="flex flex-col flex-1">
        <img src={shoe8} alt="shoe" />
      </div>
    </section>
  );
}

export default SuperQuality;
