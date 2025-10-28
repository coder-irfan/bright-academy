import React from "react";

function Footer({ handleNotAvailable }) {
  return (
    <>
      <footer
        id="contact"
        className="px-4 pt-12 pb-6 sm:px-6 md:pt-14 md:pb-8 md:px-8 lg:pt-20 lg:pb-10 xl:pt-24 lg:px-16 space-y-6 md:space-y-8 xl:space-y-10"
      >
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-8 lg:gap-10">
          <div className="space-y-3 lg:space-y-5 max-w-md lg:max-w-xs flex flex-col items-center justify-center lg:items-start lg:justify-start lg:text-left">
            <div className="flex items-center gap-2">
              <img
                src="images/logo.webp"
                alt="logo"
                className="w-9 h-9 lg:w-10 lg:h-10"
              />
              <p className="lg:text-lg font-medium">Bright Academy</p>
            </div>
            <p className="text-sm">
              Bright Academy is simply dummy text of the printing and
              typesetting industry. Bright Academy has been the industry's
              standard dummy a type specimen book.
            </p>
          </div>

          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-gray font-jost">
              Company
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
              <li className="">
                <a href="#" className="hover-link">
                  About Us
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  How to Work?
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Popular Course
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-gray font-jost">
              Courses
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
              <li className="">
                <a href="#" className="hover-link">
                  Categories
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Offline Course
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Video Course
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-gray font-jost">
              Support
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
              <li className="">
                <a href="#" className="hover-link">
                  FAQ
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Help Center
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Career
                </a>
              </li>
              <li className="">
                <a href="#" className="hover-link">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-h3 font-medium text-colors-gray font-jost">
              Contact Info
            </h3>
            <ul className="space-y-2 lg:space-y-3 text-sm xl:text-base">
              <li>+0913-705-3875</li>
              <li>ElizabethJ@jourrapide.com</li>
              <li>
                4808 Skinner Hollow Road <br /> Days Creek, OR 97429
              </li>
            </ul>
          </div>
        </div>

        <hr className="" />

        <div className="flex items-center justify-between text-xs sm:text-sm md:text-base gap-2">
          <p className="">© {new Date().getFullYear()} all right reserved.</p>
          <p className="">
            Developed by{" "}
            <span className="text-colors-purple underline font-medium">
              <a
                href="https://coder-irfan-portfolio.onrender.com"
                target="_blank"
              >
                Coder Irfan
              </a>
            </span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
