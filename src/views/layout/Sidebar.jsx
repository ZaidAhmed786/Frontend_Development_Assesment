import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "./sidebar.css";
import sidebarimg from "../../assets/sidebar/Rectangle 3.png";
import icon5 from "../../assets/sidebar/Icons5.png";
import icon1 from "../../assets/sidebar/Icons (1).png";
import icon2 from "../../assets/sidebar/Icons (2).png";
import icon3 from "../../assets/sidebar/Icons.png";
import icon4 from "../../assets/sidebar/Cicle.png";
import icon6 from "../../assets/sidebar/icon-6.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 640); // Initialize state based on window size

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Set isOpen to true if window size is greater than 640px
      if (window.innerWidth > 640) {
        setIsOpen(true);
      } else {
        setIsOpen(false); // Close sidebar on smaller screens
      }
    };

    // Set the initial state based on window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="sm:hidden">logo</p>
        <button
          onClick={toggleSidebar}
          aria-controls="top-drawer"
          type="button"
          className="z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
      </div>

      <aside
        id="default-sidebar"
        className={`fixed top-5 mt-10 sm:top-0 sm:mt-0 w-full left-0 z-40 sm:w-64 h-screen transition-transform 
          ${isOpen ? "sm:translate-x-0 translate-y-0" : "sm:-translate-x-full -translate-y-full"} 
          translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-5 py-5 overflow-y-auto bg-white justify-between flex flex-col">
          <ul className="space-y-2 font-medium">
            <li className="pb-5">
              <div className="flex gap-3">
                <img src={sidebarimg} alt="sidebarimg" />
                <div className="heading-sidebar grid items-center">
                  <h5 className="font-open-sans text-[14px] font-bold leading-[20.79px] text-left">
                    Mark Wood
                  </h5>
                  <p className="font-open-sans text-[14px] font-bold leading-[20.79px] text-left">
                    marki@demo.com
                  </p>
                </div>
              </div>
            </li>
            <li className="pb-2">
              <Link to="/dashboard" className="sidebar-links flex items-center p-2">
                <img className="icon1 flex-shrink-0 w-5 h-5" src={icon5} alt="dashboard" />
                <span className="flex-1 ms-3 whitespace-nowrap">Dashboard</span>
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/products" className="sidebar-links flex items-center p-2">
                <img className="icon flex-shrink-0 w-5 h-5" src={icon3} alt="products" />
                <span className="flex-1 ms-3 whitespace-nowrap">Products</span>
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/notifications" className="sidebar-links flex items-center p-2">
                <img className="icon flex-shrink-0 w-5 h-5" src={icon1} alt="notifications" />
                <span className="flex-1 ms-3 whitespace-nowrap">Notifications</span>
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/analytics" className="sidebar-links flex items-center p-2">
                <img className="icon flex-shrink-0 w-5 h-5" src={icon4} alt="analytics" />
                <span className="flex-1 ms-3 whitespace-nowrap">Analytics</span>
              </Link>
            </li>
            <li className="pb-2">
              <Link to="/inventory" className="sidebar-links flex items-center p-2">
                <img className="icon flex-shrink-0 w-5 h-5" src={icon2} alt="inventory" />
                <span className="flex-1 ms-3 whitespace-nowrap">Inventory</span>
              </Link>
            </li>
          </ul>
          <ul style={{ height: "fit-content" }}>
            <li style={{ height: "fit-content" }}>
              <Link to="/logout" className="sidebar-links flex items-center p-2">
                <img className="icon flex-shrink-0 w-5 h-5" src={icon6} alt="sidbar_logout" />
                <span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
