import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full bg-black fixed z-10 px-10 h-24 top-0 ">
      <div className="flex items-center">
        <img
          src="https://www.lamborghini.com/themes/custom/lambo_facelift_2019/images/logo.png"
          alt="logo lamborghini"
          className="px-6"
        />
        <div className="px-4 flex items-center">
          <p className="text-gray-200 pr-4 pl-2 text-lg uppercase animate-border">models</p>
          <p className="text-gray-200 pr-4 pl-2 text-lg uppercase animate-border">ownership</p>
          <p className="text-gray-200 pr-4 pl-2 text-lg uppercase animate-border">
            motorsport
          </p>
          <p className="text-gray-200 pr-4 pl-2 text-lg uppercase animate-border">esports</p>
        </div>
      </div>
      <div>
        <div className="flex items-center">
          <p className="text-gray-200 pr-6 pl-2 text-lg uppercase animate-border">
            dealerships
          </p>
          <p className="text-gray-200 pr-6 pl-2 text-lg uppercase animate-border">museum</p>
          <p className="text-gray-200 pr-6 pl-2 text-lg uppercase animate-border">store</p>
          <div className='px-6'>
            <i className="text-xl pr-8 text-gray-200 fas fa-cog" />
            <i className="text-xl pr-8 text-gray-200 fas fa-comment-alt" />
            <i className="text-xl pr-8 text-gray-200 fas fa-search" />
            <i className="text-xl pr-8 text-gray-200 fas fa-bars" />
          </div>
        </div>
      </div>
    </div>
  );
}
