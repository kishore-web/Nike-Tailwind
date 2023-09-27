import React from "react";
import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
const SpecialOffers = () => {
  return (
    <section className="max-container flex gap-10 justify-between items-center max-xl:flex-col-reverse">
      <div className="flex flex-1">
        <img
          src="https://nike-rosy.vercel.app/assets/offer-dd627fbb.svg"
          alt="nike rosy image"
        />
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <h2 className="text-4xl font-palanquin font-bold ">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="text-lg text-gray-500 leading-8">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-lg text-gray-500 leading-8">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-5 pt-5 flex-wrap">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-400"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
