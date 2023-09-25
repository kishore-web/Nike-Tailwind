import React from "react";
import { services } from "../constants";

const Services = () => {
  return (
    <section className="flex gap-10 max-container ">
      {services.map((service) => (
        <div className="flex flex-col flex-1 gap-5 justify-start shadow-3xl rounded-xl px-10 py-16">
          <div className="bg-coral-red w-11 h-11 flex justify-center items-center rounded-full">
            <img src={service.imgURL} alt="serviceImg" height={24} width={24} />
          </div>
          <h3>{service.label}</h3>
          <p>{service.subtext}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
