import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const teachers = [
  {
    id: "1",
    img: "images/teacher-1.webp",
    name: "Matthew E. McNatt",
    experience: "Professor @George Brown College",
    description:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    job: "Engineering physics",
  },
  {
    id: "2",
    img: "images/teacher-2.webp",
    name: "Tracy D. Wright",
    experience: "Professor @George Brown College",
    description:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    job: "Engineering physics",
  },
  {
    id: "3",
    img: "images/teacher-3.webp",
    name: "Cynthia A. Nelson",
    experience: "Professor @George Brown College",
    description:
      "Ut enim ad minim veniam, quis nost exercitation ullamco laboris nisi ut allquip ex commodo.",
    job: "Engineering physics",
  },
];

function OurTeachers() {
  return (
    <>
      <section
        id="teachers"
        className="px-4 py-8 sm:px-6 md:py-10 md:px-8 lg:py-12 lg:px-16 scroll-mt-16"
      >
        <div className="space-y-8 lg:space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-h2 font-semibold text-colors-midnight font-jost">
              Our Teachers
            </h2>
            <p className="text-description text-colors-gray/70 text-center max-w-2xl mx-auto">
              Explore some of our experienced teachers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="space-y-3 bg-colors-white shadow-[0_0_1rem] shadow-colors-gray/40 rounded-lg p-4"
              >
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="w-full h-52 md:h-64 object-cover rounded-md"
                />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="">
                      <h3 className="text-sm md:text-base lg:text-lg font-medium font-jost">
                        {teacher.name}
                      </h3>
                      <span className="text-sm text-colors-gray/70 font-normal">
                        {teacher.experience}
                      </span>
                    </div>
                    <div className="">
                      <p className="text-xs md:text-sm text-colors-gray">
                        {teacher.description}
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-sm md:text-base font-medium text-colors-orange">
                      {teacher.job}
                    </h4>
                    <div className="flex items-center gap-2 bg-colors-gray/10 p-2 rounded-md lg:text-lg">
                      <a href="https://instagram.com" target="_blank">
                        <FaInstagram className="text-pink-600" />
                      </a>
                      <a href="https://linkedin.com" target="_blank">
                        <FaLinkedinIn className="text-blue-500" />
                      </a>
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

export default OurTeachers;
