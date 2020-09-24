import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-between w-full background-lamborghini fixed z-10 px-10 h-24 top-0 ">
        <div className="flex items-center">
          <img
            src="https://www.lamborghini.com/themes/custom/lambo_facelift_2019/images/logo.png"
            alt="logo lamborghini"
            className="px-6"
          />
          <div className="px-4 flex items-center">
            <p className="text-gray-200 pr-4 pl-2 text-lg uppercase cursor-pointer animate-border">
              models
            </p>
            <p className="text-gray-200 pr-4 pl-2 text-lg uppercase animate-border cursor-pointer">
              ownership
            </p>
            <p className="text-gray-200 pr-4 pl-2 text-lg uppercase animate-border cursor-pointer">
              motorsport
            </p>
            <p className="text-gray-200 pr-4 pl-2 text-lg uppercase animate-border cursor-pointer">
              esports
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <p className="text-gray-200 pr-6 pl-2 text-lg uppercase animate-border cursor-pointer">
              dealerships
            </p>
            <p className="text-gray-200 pr-6 pl-2 text-lg uppercase animate-border cursor-pointer">
              museum
            </p>
            <p className="text-gray-200 pr-6 pl-2 text-lg uppercase animate-border cursor-pointer">
              store
            </p>
            <div className="px-6">
              <i className="text-xl pr-8 text-gray-200 fas fa-cog" />
              <i className="text-xl pr-8 text-gray-200 fas fa-comment-alt" />
              <i className="text-xl pr-8 text-gray-200 fas fa-search" />
              <i className="text-xl pr-8 text-gray-200 fas fa-bars" />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full bottom-0 z-10 bg-black fixed'>
        <p className='text-white py-1 text-sm font-medium'>Fuel consumption and emission values of al vehicles promoted on this page -Fuel consumption and emission: 15- 11 mpg</p>
      </div>
    </div>
  );
}
