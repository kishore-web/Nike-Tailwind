import React from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const SpecialOffers = () => {
  return (
    <section className="max-container flex gap-10 justify-between items-center max-xl:flex-col-reverse">
      <div>
        <img
          src="https://nike-rosy.vercel.app/assets/offer-dd627fbb.svg"
          alt="nike rosy image"
        />
      </div>
      <div className="flex flex-col gap-5">
        <h2>Special Offer</h2>
        <p>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p>
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-5 pt-5">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn more" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
