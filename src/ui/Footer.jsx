import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* <div className="grid grid-cols-5 gap-4 w-full h-[50vh] px-16 py-10 ">
        <div className="space-y-10">
          <div>
            <Logo />
          </div>
          <div>
            <p className="pl-5">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
          <div className="pl-5">
            <Link>Facebook</Link>
            <Link>Tweetter</Link>
            <Link>Linkedin</Link>
          </div>
        </div>
        <div className="pl-14 space-y-11">
          <h3>What We Do</h3>
          <div className="flex flex-col gap-5">
            <Link>Web Design</Link>
            <Link>App Design</Link>
            <Link>Social Media Manage</Link>
            <Link>Market Analysis Project</Link>
          </div>
        </div>
        <div className="pl-14 space-y-11">
          <h3>Company</h3>
          <div className="flex flex-col gap-5">
            <Link>About Us</Link>
            <Link>Careers</Link>
            <Link>Become Investor</Link>
          </div>
        </div>
        <div className="pl-14 space-y-11">
          <h3>Support</h3>
          <div className="flex flex-col gap-5">
            <Link>FAQ</Link>
            <Link>Policy</Link>
            <Link>Business</Link>
          </div>
        </div>
        <div className=" space-y-11">
          <h3>Contact</h3>
          <div className="flex flex-col gap-5">
            <Link>WhatsApp</Link>
            <Link>Support 24</Link>
          </div>
        </div>
      </div> */}
      <div className="flex md:flex-row flex-col  justify-between xl:space-x-52 lg:space-x-32 md:space-x-30 md:px-16 px-10 pt-10 mt-10 lg:h-[35vh] md:h-[55vh]">
        <div className="space-y-10 ">
          <div>
            <Logo />
          </div>
          <div className="xl:pl-6 lg:pl-4 ">
            <p className="w-64 font-light">
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </p>
          </div>
          <div className="pl-6 flex flex-row gap-3 ">
            <Link to="">
              <img src="/image/facebook.png" alt="" />
            </Link>
            <Link>
              <img src="/image/twitter.png" alt="" />
            </Link>
            <Link>
              <img src="/image/linkedin.png" alt="" />
            </Link>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 md:gap-6 gap-4">
          <div className=" space-y-11 mt-8 md:mt-0">
            <h3 className="font-extrabold xl:text-lg md:text-base text-sm">
              What We Do
            </h3>
            <div className="flex flex-col gap-5 md:text-base text-sm">
              <Link>Web Design</Link>
              <Link>App Design</Link>
              <Link>Social Media Manage</Link>
              <Link>Market Analysis Project</Link>
            </div>
          </div>
          <div className=" space-y-11 md:text-base text-sm">
            <h3 className="font-extrabold xl:text-lg md:text-base text-sm">
              Company
            </h3>
            <div className="flex flex-col gap-5 md:text-base text-sm">
              <Link>About Us</Link>
              <Link>Careers</Link>
              <Link>Become Investor</Link>
            </div>
          </div>
          <div className=" space-y-11 md:text-base text-sm">
            <h3 className="font-extrabold xl:text-lg md:text-base text-sm">
              Support
            </h3>
            <div className="flex flex-col gap-5 md:text-base text-sm">
              <Link>FAQ</Link>
              <Link>Policy</Link>
              <Link>Business</Link>
            </div>
          </div>
          <div className=" space-y-11">
            <h3 className="font-extrabold xl:text-lg md:text-base text-sm">
              Contact
            </h3>
            <div className="flex flex-col gap-5">
              <Link>WhatsApp</Link>
              <Link>Support 24</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
