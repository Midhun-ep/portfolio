import React from "react";

const Skilandedu = () => {
  return (
    <>
      <div id="edu" className="h-screen relative">
        <div data-aos="zoom-in" data-aos-duration="1500">
          <h1 className="text-center font-extrabold text-3xl md:text-5xl absolute top-2 md:top-7 left-0 right-0 text-white z-20">
            CODING <span className="text-yellow-500">SKILLS</span>
          </h1>
          <h1 className="text-center font-extrabold text-5xl md:text-8xl opacity-40 text-gray-600 tracking-widest">
            EDUCATION
          </h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-y-24 pt-12 md:pt-32">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress  text-yellow-500"
              style={{ "--value": 95 }}
              role="progressbar"
            >
              <span className="text-white">95%</span>
            </div>{" "}
            <div className="text-white mt-2">HTML</div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress text-yellow-500"
              style={{ "--value": 91 }}
              role="progressbar"
            >
              <span className="text-white">91%</span>{" "}
            </div>{" "}
            <div className="text-white mt-2">CSS</div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress text-yellow-500"
              style={{ "--value": 70 }}
              role="progressbar"
            >
              <span className="text-white">70%</span>{" "}
            </div>{" "}
            <div className="text-white mt-2">JAVASCRIPT</div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress text-yellow-500"
              style={{ "--value": 72 }}
              role="progressbar"
            >
              <span className="text-white">72%</span>{" "}
            </div>{" "}
            <div className="text-white mt-2">PYTHON</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress text-yellow-500"
              style={{ "--value": 68 }}
              role="progressbar"
            >
              <span className="text-white">68%</span>{" "}
            </div>{" "}
            <div className="text-white mt-2">DJANGO</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress text-yellow-500"
              style={{ "--value": 74 }}
              role="progressbar"
            >
              <span className="text-white">74%</span>{" "}
            </div>{" "}
            <div className="text-white mt-2">REACT</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress text-yellow-500"
              style={{ "--value": 82 }}
              role="progressbar"
            >
              <span className="text-white">82%</span>{" "}
            </div>{" "}
            <div className="text-white mt-2">BOOTSTRAP</div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1100"
            className="flex flex-col items-center"
          >
            <div
              className="radial-progress text-yellow-500"
              style={{ "--value": 82 }}
              role="progressbar"
            >
              <span className="text-white">82%</span>{" "}
            </div>{" "}
            <div className="text-white mt-2">TAILWIND CSS</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skilandedu;
