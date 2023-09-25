import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-12">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-1 font-montserrat text-gray-600">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 max-sm:gap-6 gap-14 mt-14">
        {products.map((shoe) => (
          <div
            key={shoe.name}
            className="flex flex-col items-start gap-4 max-sm:gap-2"
          >
            <img src={shoe.imgURL} alt={shoe.name} />
            <div className="flex items-center gap-3">
              <img src={star} alt="" />
              <p className="text-xl">(4.5)</p>
            </div>
            <p className="font-bold font-palanquin text-xl">{shoe.name}</p>
            <p className="text-coral-red font-montserrat">{shoe.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
