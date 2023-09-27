import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center gap-10 max-lg:flex-col ">
      <h2 className="flex-1 text-4xl font-bold font-palanquin lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <div className="border border-slate-gray p-2 flex flex-1 justify-between items-center lg:max-w-[40%] rounded-full max-lg:w-full max-sm:flex-col max-sm:border-none gap-4 max-sm:items-stretch">
        <input
          type="text"
          className="pl-4 input"
          placeholder="kishore.559@newsletter.com"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
