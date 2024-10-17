import React from "react";
import image from "../images/Frame.png";
import iconuser from "../images/Frame 41.png";
import iconemail from "../images/Group (1).png";
import iconlock from "../images/Group (2).png";
import iconeye from "../images/view.png";
import Button from "./Button";
import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Signup() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image: image, 
      title: "Welcome to our shop",
      description: "Purchase imported shoes",
    },
    {
      image: image, 
      title: "Welcome to our shop",
      description: "Purchase high-quality shoes",
    },
  ];

  return (
    <>
      <div className="bg-slate-100">
        <div className="grid grid-cols-12 md:px-36 sm:px-20 px-10 py-12">
          <div className="main lg:col-span-7 col-span-12 bg-[#89089F] lg:py-36 py-28 lg:rounded-tl-xl lg:rounded-bl-xl lg:rounded-t-none rounded-t-lg  ">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index}>
                  <div className="text-center">
                    <img
                      src={slide.image}
                      alt=""
                      className="mx-auto img-fluid w-48"
                    />
                    <h4 className="text-[20px] text-white mt-3">
                      {slide.title}
                    </h4>
                    <p className="text-white text-[12px] fw-light mt-1">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="lg:col-span-5 col-span-12 bg-white py-16 lg:px-10 sm:px-20 px-8  lg:rounded-tr-xl lg:rounded-br-xl lg:rounded-b-none rounded-b-xl">
            <h2 className="text-[23px] fw-bold ">Registration</h2>
            <div className="border-2 rounded-md flex gap-2 py-1 px-2 mt-8">
              <div>
                <img src={iconuser} alt="" />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="border-0 focus:outline-none w-[100%]"
                />
              </div>
            </div>
            <div className="border-2 rounded-md flex gap-2 py-1 px-2 mt-3">
              <div>
                <img src={iconemail} alt="" />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="border-0 focus:outline-none w-[100%]"
                />
              </div>
            </div>

            <div className="border-2 rounded-md flex gap-2 py-1 px-2 mt-3">
              <div>
                <img src={iconlock} alt="" />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="border-0 focus:outline-none w-[100%]"
                />
              </div>
              <div className="ms-auto">
                <img src={iconeye} alt="" className="" />
              </div>
            </div>

            <div className="border-2 rounded-md flex gap-2 py-1 px-2 mt-3">
              <div>
                <img src={iconlock} alt="" />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Re-enter Password"
                  className="border-0 focus:outline-none w-[100%]"

                />
              </div>
              <div className="ms-auto">
                <img src={iconeye} alt="" className="w-6" />
              </div>
            </div>
            {/* <Button /> */}

            <p className="text-[#828282] text-[13px] mt-5">
              Already have an account?
            </p>
            <div className="border-2 border-[#89089F] rounded-3xl mt-3">
              <button className="text-[#89089F] text-[14px] py-2">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
