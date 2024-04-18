import React from "react";
import Button from "./Ui/Button";
import { FaDownload } from "react-icons/fa";
import cv from "../assets/msg963139852-4766.pdf"
import Aboutcard from "./Ui/Aboutcard";
import { AboutData } from "./Data";

const About = () => {
  return (
    <>
      <div id="about" className=" md:h-screen relative z-10 ">
        <div data-aos="zoom-in" data-aos-duration="1500">
        <h1 className="text-center font-extrabold text-3xl md:text-5xl absolute top-4 md:top-7 left-0 right-0 text-white z-20">
          ABOUT <span className="text-yellow-500">ME</span>
        </h1>
        <h1 className="text-center mb-4 md:mb-0 font-extrabold text-6xl md:text-8xl opacity-40 text-gray-600 tracking-widest">
          RESUME
        </h1>
        </div>
        <div className="grid  md:grid-cols-2 ">
          <div className="left ">
            <div data-aos="zoom-out" data-aos-duration="1500" className="head">
              <h1 className="text-white pt-2 md:pt-28 pl-[112px] font-bold text-xl md:text-2xl">
                PERSONAL INFO
              </h1>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1500" className="grid grid-cols-2 justify-items-center  pt-8">
              <div>
                <ul className="space-y-2 ">
                  <li className="text-slate-400 md:font-medium">
                    First Name:<span className="text-white">MIDHUN</span>
                  </li>
                  <li className="text-slate-400 md:font-medium">
                    Age:<span className="text-white">21</span>
                  </li>
                  <li className="text-slate-400 md:font-medium">
                    Freelance:<span className="text-white">Available</span>
                  </li>
                  <li className="text-slate-400 md:font-medium">
                    Phone:<span className="text-white ">9656043676</span>
                  </li>
                  <div data-aos="zoom-in" data-aos-duration="1300" className="pt-10 pb-8 md:pt-0 md:pb-0">
                    <a
                      href={cv}
                      download="downloaded_image.png"
                    >

                      <Button 
                        title={"DOWNLOAD CV"}
                        icon={<FaDownload className="md:size-7 " />}
                      />
                    </a>
                  </div>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="text-slate-400 md:font-medium ">
                    Last Name:<span className="text-white">EP</span>
                  </li>
                  <li className="text-slate-400 md:font-medium">
                    Nationality:<span className="text-white">India</span>
                  </li>
                  <li className="text-slate-400 md:font-medium">
                    Address:
                    <span className="text-white">
                      Edatil(H) Ravimangalam Wandoor
                    </span>
                  </li>
                  <li className="text-slate-400 md:font-medium">
                    Email:
                    <span className="text-white">midhunep12 @gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="RIGHT pt-8 pb-10 md:pb-0 md:pt-24 md:pl-12 ">
            <div className="flex flex-wrap gap-4 justify-center">
              {AboutData.map((item,index) => (
                <div key={index} data-aos="flip-left" data-aos-duration="1500">
                <Aboutcard  title={item.title} subtitle={item.subtitle} /></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
