import React from "react";
import Button from "./Ui/Button";
// import { BsFillSendFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <div id="contact" className="relative min-h-screen">
        <div data-aos="zoom-in" data-aos-duration="1500">
          <h1 className="text-center font-extrabold text-3xl md:text-5xl absolute top-4 md:top-7 left-0 right-0 text-white z-20">
            ABOUT <span className="text-yellow-500">ME</span>
          </h1>
          <h1 className="text-center mb-4 md:mb-0 font-extrabold text-6xl md:text-8xl opacity-40 text-gray-600 tracking-widest">
            RESUME
          </h1>
        </div>
        <div className="hero md:pt-20 md:pb-10 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1100"
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl font-bold text-white">
                Contact Me <span className="text-yellow-500">now!</span>
              </h1>
              {/* <h1 className="pt-7 text-lg font-black text-white">
                DON'T BE SHY !
              </h1> */}
              <p className="py-4 text-white">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <div
              data-aos="flip-right"
              data-aos-easing="linear"
              data-aos-duration="1100"
              // className="card shrink-0 w-full max-w-sm shadow-2xl bg-zinc-800"
            >
              <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display">
                  <div className="artboard artboard-demo phone-1 ">
                    <div>
                      <h1 className="text-2xl font-extrabold mb-16">
                        GET IN TOUCH WITH{" "}
                        <span className="text-yellow-500">ME.</span>
                      </h1>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <a href="https://wa.me/+919656043676">
                        <BsWhatsapp className="text-4xl text-green-600 transition-transform duration-500 hover:scale-110 " />
                      </a>
                      <a
                        href="www.linkedin.com/in/midhun-ep-

"
                      >
                        <FaLinkedin className="text-4xl text-blue-600 transition-transform duration-500 hover:scale-110" />
                      </a>
                      <a href="https://github.com/Midhun-ep">
                        <FaGithub className="text-4xl text-gray-900 transition-transform duration-500 hover:scale-110" />
                      </a>
                      <SiGmail className="text-4xl text-gray-800 transition-transform duration-500 hover:scale-110" />
                    </div>
                    <a href="https://www.instagram.com/midhun_xr7?igsh=MWw4bmFyc2dwOXE5Zw=="><BsInstagram className="text-4xl mt-8 text-gray-800 transition-transform duration-500 hover:scale-110" /></a>

                    <footer className="footer footer-center bg-base-300 text-base-content relative top-28">
                      <aside>
                        <p>
                          Copyright © 2024 - All right reserved by MIDHUN.EP
                        </p>
                      </aside>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
