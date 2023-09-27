import React from "react";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="max-container text-white">
      <div className="flex gap-20 justify-between items-star max-sm:flex-col ">
        <div className="flex flex-col items-start gap-6">
          <div>
            <img src="../src/assets/images/footer-logo.svg" alt="" />
          </div>
          <p className="sm:max-w-sm leading-6 font-montserrat text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-6 mt-2">
            {socialMedia.map((social) => (
              <div className="flex bg-white rounded-full">
                <img src={social.src} alt={social.alt} className="p-3" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 max-sm:flex-col lg:gap-10 gap-20 justify-end flex-wrap">
          {footerLinks.map((footer) => (
            <div>
              <h3 className="text-2xl font-palanquin mb-6">{footer.title}</h3>
              {footer.links.map((link) => (
                <ul>
                  <li className="mt-3 text-base font-montserrat text-white-400">
                    {link.name}
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
