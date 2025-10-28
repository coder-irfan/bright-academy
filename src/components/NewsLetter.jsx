import React from "react";

function NewsLetter({ handleNotAvailable }) {
  return (
    <>
      <section className="px-4 py-10 sm:px-6 md:py-12 md:px-8 lg:py-16 xl:py-20 lg:px-16 relative">
        <img
          src="images/saturn.webp"
          alt="saturn"
          className="absolute top-4 sm:top-2 left-8 w-14 md:left-12 lg:left-20 sm:w-20 md:w-24 lg:w-32 xl:top-10 xl:left-28"
        />
        <div className="bg-colors-purple px-4 py-6 lg:py-10 xl:py-16 rounded-lg font-roboto">
          <div className="text-center space-y-6 sm:space-y-8 md:space-y-10 text-colors-white">
            <div className="">
              <h2 className="text-h2 font-semibold font-jost">
                Subscribe To Newsletter
              </h2>
              <p className="text-description text-colors-white/90 text-center max-w-2xl mx-auto">
                Bright Academy is simply dummy text of the printing.
              </p>
            </div>

            <div className="relative max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-6 py-2 md:py-3 outline-none rounded-full text-colors-gray"
              />
              <button
                onClick={handleNotAvailable}
                className="button absolute top-1/2 right-1 -translate-y-1/2"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NewsLetter;
