import React from "react";

export default function Footer() {
  return (
    <div className="background-lamborghini">
      <div className="md:px-20 md:py-20 px-40 py-20">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center">
            <p className="text-white text-lg pr-2 uppercase animate-border">
              Company
            </p>
            <p className="text-white text-lg px-4 uppercase animate-border">
              Carrers
            </p>
            <p className="text-white text-lg px-4 uppercase animate-border">
              Contatc Us
            </p>
            <p className="text-white text-lg px-4 uppercase animate-border">
              Media Center
            </p>
            <p className="text-white text-lg px-4 uppercase animate-border">
              Privacy & Legal
            </p>
            <p className="text-white text-lg px-4 uppercase animate-border">
              Sitemap
            </p>
            <p className="text-white text-lg px-4 uppercase animate-border">
              newletter
            </p>
          </div>
          <div className="flex items-center">
            <i className="cursor-pointer text-white text-xl pr-6 fab fa-facebook-f" />
            <i className="cursor-pointer text-white text-xl pr-6 fab fa-twitter"></i>
            <i className="cursor-pointer text-white text-xl pr-6 fab fa-youtube"></i>
            <i className="cursor-pointer text-white text-xl pr-6 fab fa-instagram"></i>
            <i className="cursor-pointer text-white text-xl pr-6 fab fa-linkedin-in"></i>
            <i className="cursor-pointer text-white text-xl pr-6 fab fa-weibo"></i>
            <i className="cursor-pointer text-white text-xl pr-6 fab fa-weixin"></i>
          </div>
        </div>
        <div>
          <div className='mt-4'>
            <p className='text-white text-base font-normal'>
              Copyright © 2020 Automobili Lamborghini S.p.A. a sole shareholder
              company part of Audi Group.
            </p>
          </div>
          <div className='mt-2'>
            <p className='text-white text-base font-normal'>All rights reserved. VAT no. IT 00591801204</p>
          </div>
        </div>
      </div>
    </div>
  );
}
