import React from "react";
import Button from "./Ui/Button";
import { BsFillSendFill } from "react-icons/bs";
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
            <div data-aos="zoom-in-down" data-aos-easing="linear"
            data-aos-duration="1100" className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">
                Contact Me <span className="text-yellow-500">now!</span>
              </h1>
              <h1 className="pt-7 text-lg font-black text-white">
                DON'T BE SHY !
              </h1>
              <p className="py-4 text-white">
                Feel free to get in touch with me. I am always open to
                discussing new projects, creative ideas or opportunities to be
                part of your visions.
              </p>
            </div>
            <div data-aos="flip-right" data-aos-easing="linear"
            data-aos-duration="1100" className="card shrink-0 w-full max-w-sm shadow-2xl bg-zinc-800">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-100 text-base">
                      Your Name
                    </span>
                  </label>
                  <input
                    type="name"
                    placeholder="NAME"
                    className="input input-bordered border-2 border-yellow-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-slate-100">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered border-2 border-yellow-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base text-slate-100">
                      Your Email
                    </span>
                  </label>
                  <textarea
                    name="massage"
                    id=""
                    rows="5"
                    placeholder="Your Massage"
                    className="input input-bordered border-2 border-yellow-500"
                    required
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <Button
                    title={"SEND MESSAGE"}
                    icon={<BsFillSendFill className="md:size-7" />}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
