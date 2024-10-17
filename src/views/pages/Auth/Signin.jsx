import React, { useState } from "react";
import Cookies from "js-cookie";
import image from "../../../assets/Frame.png"; // Example images, adjust as needed
import iconuser from "../../../assets/Frame 41.png";
import iconemail from "../../../assets/Group (1).png";
import iconlock from "../../../assets/Group (2).png";
import iconeye from "../../../assets/view.png";
import "./App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';
 
function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rePasswordVisible, setRePasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
 
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
 
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
 
  const toggleRePasswordVisibility = () => {
    setRePasswordVisible(!rePasswordVisible);
  };
 
  const handleLogin = (e) => {
    e.preventDefault();
    let cookieName = "signupData" + email;
    if(!Cookies.get(cookieName)){
      alert("User not found");
      return;
    }
    const base64Data = Cookies.get(cookieName);
    const reverseBase64Data = base64Data.split("").reverse().join("");
    const jsonData = atob(reverseBase64Data);
    const userData = JSON.parse(jsonData);
    if (userData.email === email && userData.password === password) {
      alert("Login Successful");
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
};
 
  const handleSignup = (e) => {
    e.preventDefault();
    const signupData = {
      name,
      email,
      password,
      rePassword,
    };
      if(email && password && rePassword){
        const cookieName = "signupData" + email;
        if(Cookies.get(cookieName)){
          alert("User already exists");
          return;
        }
        const jsonData = JSON.stringify(signupData);
        const base64Data = btoa(jsonData);
        const reverseBase64Data = base64Data.split("").reverse().join("");
        Cookies.set(cookieName, reverseBase64Data, { path: "/" });
        alert("Signup Successful");
        setIsLogin(true);
      }else{
        alert("Please fill all the fields");
      }
  };
 
  const toggleForm = () => {
    setIsLogin(!isLogin);
    setPassword("");
    setRePassword("");
    setName("");
    setEmail("");
  };
 
  return (
    <div className="bg-slate-100 h-screen flex items-center justify-center">
      <div className="grid grid-cols-12 max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="lg:col-span-7 col-span-12 bg-[#89089F] py-28 px-10">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="text-center">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="mx-auto w-48"
                />
                <h4 className="text-[20px] text-white mt-3">{slide.title}</h4>
                <p className="text-white text-[12px] mt-1">
                  {slide.description}
                </p>
              </div>
            ))}
          </Slider>
        </div>
 
        <div className="lg:col-span-5 col-span-12 bg-white py-16 px-8">
          <h2 className="text-[23px] font-bold">
            {isLogin ? "Welcome Back" : "Create an Account"}
          </h2>
          <form onSubmit={isLogin ? handleLogin : handleSignup} className="mt-10 space-y-4">
            {!isLogin && (
              <div className="border-2 rounded-md flex gap-2 py-1 px-2">
                <img src={iconuser} alt="User Icon" />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-0 focus:outline-none w-full"
                />
              </div>
            )}
 
            <div className="border-2 rounded-md flex gap-2 py-1 px-2">
              <img src={iconemail} alt="Email Icon" />
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-0 focus:outline-none w-full"
              />
            </div>
 
            <div className="border-2 rounded-md flex gap-2 py-1 px-2">
              <img src={iconlock} alt="Lock Icon" />
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-0 focus:outline-none w-full"
              />
              <img
                src={iconeye}
                alt="Eye Icon"
                className="cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
 
            {isLogin && (
              <p className="text-[#6F74DD] ">Forgot password?</p>
            )}
 
            {!isLogin && (
              <div className="border-2 rounded-md flex gap-2 py-1 px-2">
                <img src={iconlock} alt="Lock Icon" />
                <input
                  type={rePasswordVisible ? "text" : "password"}
                  placeholder="Re-enter Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  required={!isLogin}
                  className="border-0 focus:outline-none w-full"
                />
                <img
                  src={iconeye}
                  alt="Eye Icon"
                  className="cursor-pointer"
                  onClick={toggleRePasswordVisibility}
                />
              </div>
            )}
 
            <button className="bg-[#89089F] text-white w-full py-2 rounded-3xl">
              {isLogin ? "Login" : "Register"}
            </button>
            <div className="text-center mt-4">
              {isLogin ? (
                <>
                  <p className="text-[#828282]">Have no account yet?</p>
                  <button
                    type="button"
                    className="border-2 border-[#89089F] text-[#89089F] bg-transparent w-full py-2 rounded-3xl"
                    onClick={toggleForm}
                  >
                    Registration
                  </button>
                </>
              ) : (
                <>
                  <p className="text-[#828282]">Already have an account?</p>
                  <button
                    type="button"
                    className="border-2 border-[#89089F] text-[#89089F] bg-transparent w-full py-2 rounded-3xl"
                    onClick={toggleForm}
                  >
                    Login
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
 
export default Auth;