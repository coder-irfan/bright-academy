import React from "react";

function Benefits() {
  return (
    <>
      <section
        id="benefits"
        className="px-4 py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-16 scroll-mt-20"
      >
        <div className="flex flex-col-reverse md:flex-row items-center justify-evenly gap-8 sm:gap-14">
          <img
            src="images/illustration-2.webp"
            alt="illustration"
            className="w-52 sm:w-64 lg:w-80 xl:w-96"
          />

          <div className="max-w-2xl">
            <div className="space-y-6">
              <h2 className="text-h2 font-semibold text-colors-midnight leading-tight text-center md:text-left">
                Premium <span className="text-colors-orange">Learning</span>{" "}
                Experience
              </h2>
              <div className="space-y-3 md:space-y-6">
                <div className="flex items-center gap-4">
                  <img
                    src="images/hearts.webp"
                    alt="heart"
                    className="w-10 md:w-12 bg-colors-purple p-2 rounded-md"
                  />
                  <div className="">
                    <h3 className="lg:text-lg font-medium">
                      Easily Accessible
                    </h3>
                    <p className="text-sm md:text-base text-colors-gray/80">
                      Learning Will fell Very Comfortable With Courslab.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="images/jigsaw.webp"
                    alt="jigsaw"
                    className="w-10 md:w-12 bg-colors-purple p-2 rounded-md"
                  />
                  <div className="">
                    <h3 className="lg:text-lg font-medium">
                      Easily Accessible
                    </h3>
                    <p className="text-sm md:text-base text-colors-gray/80">
                      Learning Will fell Very Comfortable With Courslab.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Benefits;
