import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex gap-10 max-container flex-wrap max-sm:flex-col">
      {services.map((service) => (
        <div
          key={service.label}
          className="flex flex-col flex-1 gap-5 max-sm:gap-3 justify-start shadow-3xl rounded-xl px-10 py-16 sm:min-w-[350px] sm:w-[350px] max-sm:py-10"
        >
          <div className="bg-coral-red w-11 h-11 flex justify-center items-center rounded-full ">
            <img src={service.imgURL} alt="serviceImg" height={24} width={24} />
          </div>
          <h3 className="text-3xl font-bold font-palanquin">{service.label}</h3>
          <p className="text-xl text-gray-500 font-montserrat">
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
