import React from "react";
// import { IoLogoInstagram } from "react-icons/io5";
// import { FaFacebook } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="py-[30px] bg-[rgb(40, 40, 52)]">
      <div className="conteiner">
        <div className="flex items-center justify-between">
          <div className="flex items-start flex-col gap-[10px] text-white">
            <h1 className="text-xl font-bold">OFFERS AND TRENDS</h1>
            <h1 className="text-3xl font-semibold">Newsletter Application</h1>
            <p className="font-semibold ">Enter your email address and let us notify you <br />
            about news and discounts...</p>
            <div className="flex items-center justify-between gap-[30px]">
                <input type="text" className="py-[12px] px-[32px] bg-white rounded-lg text-black" />
                <button className="py-[12px] px-[32px] bg-gray-400 text-black rounded-lg font-semibold">SIGN UP</button>
            </div>
          </div>
          <div className="flex items-end flex-col gap-[10px] text-white">
          <h1 className="text-xl font-bold">STAY UP TO DATE</h1>
            <h1 className="text-3xl font-semibold">Follow Us</h1>
            <p className="font-semibold text-end ">Become part of our friends on social networks and  <br />find out first about the discounts and novelties that <br />we announce...</p>
<div className="flex items-center justify-between gap-[30px]">
    {/* <a href=""> < IoLogoInstagram /></a>
    <a href=""><FaFacebook /></a> */}
</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
