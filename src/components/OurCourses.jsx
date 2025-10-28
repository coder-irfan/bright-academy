import React from "react";
import { FaClock, FaVideo, FaDownload } from "react-icons/fa";

const tracks = [
  {
    id: "1",
    img: "images/student-1.webp",
    sutitle: "Web Development",
    rate: "images/rate.webp",
    title: "Web Development for Beginners",
    price: "$98",
    time: "20hr 30min",
    courses: "34",
    download: "250 sales",
  },
  {
    id: "2",
    img: "images/student-2.webp",
    sutitle: "App Development",
    rate: "images/rate.webp",
    title: "App Development for Beginners",
    price: "$98",
    time: "20hr 30min",
    courses: "34",
    download: "250 sales",
  },
  {
    id: "3",
    img: "images/student-3.webp",
    sutitle: "Data Science & AI",
    rate: "images/rate.webp",
    title: "Data Science & AI for Beginners",
    price: "$98",
    time: "20hr 30min",
    courses: "34",
    download: "250 sales",
  },
  {
    id: "4",
    img: "images/student-4.webp",
    sutitle: "UI/UX Design",
    rate: "images/rate.webp",
    title: "UI/UX Design for Beginners",
    price: "$98",
    time: "20hr 30min",
    courses: "34",
    download: "250 sales",
  },
  {
    id: "5",
    img: "images/student-5.webp",
    sutitle: "Digital Marketing",
    rate: "images/rate.webp",
    title: "Digital Marketing for Beginners",
    price: "$98",
    time: "20hr 30min",
    courses: "34",
    download: "250 sales",
  },
  {
    id: "6",
    img: "images/student-6.webp",
    sutitle: "Business & Management",
    rate: "images/rate.webp",
    title: "Business & Management for Beginners",
    price: "$98",
    time: "20hr 30min",
    courses: "34",
    download: "250 sales",
  },
];

function OurTracks() {
  return (
    <>
      <section
        id="courses"
        className="px-4 py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-16 scroll-mt-10"
      >
        <div className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-h2 font-semibold text-colors-midnight font-jost">
              Our Courses
            </h2>
            <p className="text-description text-colors-gray/70 text-center max-w-2xl mx-auto">
              Explore a variety of professional learning paths designed to help
              you build real-world skills, advance your career, and achieve your
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
            {tracks.map((track) => (
              <div
                key={track.id}
                className="space-y-4 bg-colors-white shadow-[0_0_1rem] shadow-colors-gray/40 rounded-lg p-4"
              >
                <img
                  src={track.img}
                  alt={track.title}
                  className="w-full h-52 md:h-64 object-cover rounded-md"
                />
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-colors-gray/70 font-normal">
                      {track.sutitle}
                    </span>
                    <img src={track.rate} alt="rate" className="w-16" />
                  </div>
                  <div className="">
                    <h3 className="text-sm md:text-base lg:text-lg font-medium font-jost">
                      {track.title}
                    </h3>
                    <h4 className="font-medium text-sm md:text-base text-colors-orange">
                      {track.price}
                    </h4>
                  </div>
                  <hr />
                  <div className="flex items-center gap-4 text-xs md:text-sm text-colors-gray/80 pt-2 xl:pt-4">
                    <div className="flex items-center gap-1">
                      <FaClock />
                      <span className="">{track.time}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaVideo />
                      <span className="">{track.courses}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaDownload />
                      <span className="">{track.download}</span>
                    </div>
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

export default OurTracks;
