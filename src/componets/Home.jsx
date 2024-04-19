import React from "react";
import { Link } from "react-scroll";
import profile from "../assets/my-profile.jpg";
import { IoArrowForwardCircle } from "react-icons/io5";
import Button from "./Ui/Button";
const Home = () => {
  return (
    <>
      <div id="home" className="grid grid-cols-1 md:grid-cols-2 lg:h-screen mb-24 md:mb-0">
        <div className="flex items-center md:mx-24 ">
          <div  className="group ml-20 md:ml-6   flex items-center">
            <div className="absolute top-6 lg:top-36  bg-yellow-500 group-hover:bg-white rounded-lg h-[280px] md:h-[500px] w-[160px] md:w-[280px] -ml-1"></div>
            <img data-aos="flip-left" data-aos-duration="2000"
              className="h-[300px] md:h-[520px] md:w-[360px] z-50 md:ml-4 rounded-3xl "
              src={profile}
              alt=""
            />
          </div>
        </div>
        <div>
          <div className="flex items-center lg:h-screen">
            <div className="ml-14 mt-6 mb-4 md:mb-0 md:ml-0 md:mt-0 w-[80%]">
              <div data-aos="zoom-in" data-aos-duration="1500">
              <h1 className="text-5xl text-wrap text-yellow-500 font-bold">
                <span className="text-6xl">- </span>IAM MIDHUN.EP.
              </h1>
              <h2 className="text-5xl text-white font-bold text-wrap">
                PYTHON DEVELOPER
              </h2></div>
              <p data-aos="zoom-in-down" data-aos-duration="1500" className="mt-6 text-wrap text-white text-base md:text-lg">
                I'm a Python Django full-stack developer skilled in React and
                Tailwind CSS. Specializing in dynamic web applications, I excel
                in both front-end and back-end development, delivering
                innovative solutions that surpass client goals.
              </p>
              <Link
              activeClass="active"
              to="morebtn"
              smooth={true}
            > <div data-aos="fade-up"
            data-aos-anchor-placement="center-bottom" data-aos-duration="1500"> 
              <Button  title={'MORE ABOUT ME'} icon={<IoArrowForwardCircle className="md:size-7" />} />
            </div></Link>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
