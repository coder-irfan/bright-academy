import React from "react";

const services = [
  {
    id: "1",
    img: "images/online-test.webp",
    title: "Learn The Latest Skills",
    description:
      "Contrary to popular belief, Bright Academy is not simply random test. It has roots in a BC, making it over 2000 years old.",
  },
  {
    id: "2",
    img: "images/exam.webp",
    title: "Get Ready For a Career",
    description:
      "Contrary to popular belief, Bright Academy is not simply random test. It has roots in a BC, making it over 2000 years old.",
  },
  {
    id: "3",
    img: "images/certification.webp",
    title: "Earn a Certificate",
    description:
      "Contrary to popular belief, Bright Academy is not simply random test. It has roots in a BC, making it over 2000 years old.",
  },
];

function Services() {
  return (
    <>
      <section className="px-4 sm:px-6 md:px-8 py-6 md:py-10 lg:px-16 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-4 bg-colors-purple px-4 py-6 lg:py-10 rounded-lg font-roboto text-colors-white">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col lg:flex-row gap-6 lg:gap-4 items-center justify-center lg:justify-start lg:text-start 
                text-center bg-colors-white/10 rounded-lg py-4 lg:py-10 px-4 max-w-lg mx-auto"
            >
              <div className="">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-16 md:w-20 lg:w-36"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-h3 font-semibold">{service.title}</h3>
                <p className="text-colors-lightGray text-sm lg:leading-loose">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;
