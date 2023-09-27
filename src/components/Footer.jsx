import React from "react";
import { footerLinks, socialMedia } from "../constants";
import { footerLogo } from "../assets/images";
import { copyrightSign } from "../assets/icons";
const Footer = () => {
  return (
    <section className="max-container text-white">
      <div className="flex gap-20 justify-between items-start max-sm:flex-col max-lg:flex-col ">
        <div className="flex flex-col items-start gap-6">
          <div>
            <img src={footerLogo} alt="footer-logo" width={150} height={46} />
          </div>
          <p className="sm:max-w-sm leading-6 font-montserrat text-white-400">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-6 mt-2">
            {socialMedia.map((social) => (
              <div
                key={social.src}
                className="flex bg-white rounded-full cursor-pointer"
              >
                <img src={social.src} alt={social.alt} className="p-3" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between max-sm:flex-col max-lg:gap-14 gap-20  flex-wrap">
          {footerLinks.map((footer) => (
            <div key={footer.title}>
              <h3 className="text-2xl font-palanquin mb-6">{footer.title}</h3>
              {footer.links.map((link) => (
                <ul key={link.name}>
                  <li className="mt-3 text-base font-montserrat cursor-pointer text-white-400">
                    {link.name}
                  </li>
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-12 justify-between items-center text-white-400 max-sm:flex-col cursor-pointer">
        <div className="flex gap-2 items-center">
          <div className="w-6 h-6">
            <img src={copyrightSign} alt="copyright" />
          </div>
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
