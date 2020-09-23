import React from "react";

export default function News() {
  return (
    <div className="container mx-auto py-20">
      <div className=" w-full">
        <h2 className="text-4xl font-medium py-2 uppercase">News</h2>
        <div className="pb-12">
          <h1 className="text-7xl font-bold w-1/2 uppercase leading-none">
            Lamborghini <br />
            world
          </h1>
        </div>

        <img
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_21_esport_final/esport_final_cover.jpg"
          alt="Lamborghini World"
        />
      </div>
      <div className="pt-12 pb-16">
        <div>
          <h2 className="text-xl uppercase font-medium pb-4">
            21 september 2020
          </h2>
          <h3 className="text-lg uppercase px-4  bg-gray-300 w-1/12 hover:bg-black hover:text-white">
            Esports
          </h3>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold uppercase leading-none w-9/12 tracking-wider pt-4">
              Join us for the thrilling final of lamborghini's the real race
            </h1>
            <button className="border border-gray-500 uppercase py-4 px-16 hover:bg-black hover:text-white">
              Read more
            </button>
          </div>
          <p className="py-4 text-xl font-light">
            The Real Race, Lamborghini’s first ever global eSports competition
            has reached its electrifying finale.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img
            src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_16_ravensburger_evo/hura_evo_raven_cover.jpg"
            alt=""
            className='w-1/2'
          />
        </div>
      </div>
    </div>
  );
}
