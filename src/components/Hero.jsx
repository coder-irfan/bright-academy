import React from "react";

function Hero() {
  return (
    <>
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-24 xl:pt-48 xl:pb-32 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-14">
          <div className="max-w-xl lg:max-w-xl space-y-3 md:space-y-4 text-center md:text-left">
            <h1 className="text-h1 font-semibold text-colors-midnight leading-tight">
              The <span className="text-colors-orange">Smart</span> Choice For{" "}
              <span className="text-colors-orange">Future</span>
            </h1>
            <p className="text-sm lg:text-base">
              Bright Academy is a global training provider based across the UK
              that specialises in accredited, professional, and bespoke training
              courses designed to empower learners and enhance career growth.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-2 sm:pt-4 lg:pt-8">
              <a href="#courses" className="button">
                See More
              </a>
              <a href="#benefits" className="button">
                Benefits
              </a>
            </div>
          </div>

          <div className="">
            <img
              src="images/illustration-1.webp"
              alt="illustration"
              className="w-80 sm:w-96 md:w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
