import React from "react";

function Footer() {
  return (
    <>
      <div className="footer bg-[#f1f6f4] h-84">
        <div className="container flex">
          <div className="flex gap-x-[150px] mt-10 mb-2">
            <div className="footer__info flex-col">
              <div className="footer__title">Actions</div>
              <div className="footer__link">Summarist Magazine</div>
              <div className="footer__link">Cancel Subscription</div>
              <div className="footer__link">Help</div>
              <div className="footer__link">Contact Us</div>
            </div>
            <div className="footer__info flex-col">
              <div className="footer__title">Useful Links</div>
              <div className="footer__link">Pricing</div>
              <div className="footer__link">Summarist Business</div>
              <div className="footer__link">Gift Cards</div>
              <div className="footer__link">Authors & Publishers</div>
            </div>
            <div className="footer__info flex-col">
              <div className="footer__title">Company</div>
              <div className="footer__link">About</div>
              <div className="footer__link">Careers</div>
              <div className="footer__link">Partners</div>
              <div className="footer__link">Code of Conduct</div>
            </div>
            <div className="footer__info flex-col">
              <div className="footer__title">Other</div>
              <div className="footer__link">Sitemap</div>
              <div className="footer__link">Legal Notice</div>
              <div className="footer__link">Terms of Service</div>
              <div className="footer__link">Privacy Policies</div>
            </div>
          </div>
        </div>
          <div className="flex items-center justify-center font-bold">Copyright © 2023 Summarist.</div>
      </div>
    </>
  );
}

export default Footer;
