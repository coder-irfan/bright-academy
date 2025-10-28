import React from "react";

const testimonials = [
  {
    id: "1",
    text: "“Teachings of the great explore of truth, the master-builder of human happiness. no one rejects,dislikes, or avoids pleasure itself, pleasure itself“",
    img: "images/client-1.webp",
    name: "Finlay Kirk",
    job: "Web Developer",
  },
  {
    id: "2",
    text: "“Complete account of the system and expound the actual Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots“",
    img: "images/client-2.webp",
    name: "Dannette P. Cervantes",
    job: "Web Designer",
  },
  {
    id: "3",
    text: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour”",
    img: "images/client-3.webp",
    name: "Clara R. Altman",
    job: "UI/UX Design",
  },
];

function Testimonials() {
  return (
    <>
      <section className="px-4 py-10 sm:px-6 md:py-10 md:px-8 lg:py-20 lg:px-16 relative">
        <div className="absolute top-0 md:bottom-32 left-0 md:top-auto md:left-[-5rem] bg-colors-orange/15 md:bg-colors-orange/25 w-96 h-96 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute md:top-32 right-0 md:right-[-5rem] bg-colors-purple/15 md:bg-colors-purple/25 w-96 h-96 blur-[100px] rounded-full -z-10"></div>
        <div className="space-y-6 lg:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-h2 font-semibold text-colors-midnight font-jost">
              What students say
            </h2>
            <p className="text-description text-colors-gray/70 text-center max-w-2xl mx-auto">
              Explore what our students say about our online methods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
            {testimonials.map((testimonial) => (
              <div
                className="bg-colors-white shadow-[0_0_0.5rem] shadow-colors-gray/40 rounded-lg p-4 lg:p-6 space-y-4 lg:space-y-6"
                key={testimonial.id}
              >
                <p className="text-colors-gray/80 text-sm md:text-base">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-2">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-8 sm:w-10"
                  />
                  <div className="">
                    <h4 className="text-sm md:text-base font-medium">
                      {testimonial.name}
                    </h4>
                    <span className="text-xs md:text-sm text-colors-gray/80">
                      {testimonial.job}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
