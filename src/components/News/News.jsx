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
          src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_23_unica/unica_cover1.jpg"
          alt="Lamborghini World"
        />
      </div>
      <div className="pt-16 pb-16">
        <div>
          <h2 className="text-xl uppercase font-medium pb-4">
            23 september 2020
          </h2>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-bold uppercase leading-none w-9/12 tracking-wider pt-4">
              Unica, the app tha connects you to the world of lamborghini
            </h1>
            <button className="border border-gray-500 uppercase py-4 px-20 hover:bg-black hover:text-white text-lg">
              Read more
            </button>
          </div>
          <p className="py-4 text-xl font-light">
            With the princeless Unica app, reserved exclusively for Lamborghini
            owners, you can enjoy a world of <br /> exciting features just by
            tapping your finger.
          </p>
        </div>
      </div>
      <div className='w-full'>
        <div className="flex h-full w-full">
          <div className="w-1/2">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_21_esport_final/esport_final_cover.jpg"
              alt="Huracan"
            />
          </div>
          <div className="flex flex-col items-start max-h-full px-12 ">
            <div>
              <h2 className="uppercase text-lg font-normal">
                21 september 2020
              </h2>
            </div>
            <div className="flex flex-col h-full items-start justify-center">
              <h3 className="px-3  bg-gray-200 hover:bg-black hover:text-white uppercase text-base">
                Esports
              </h3>
              <h1 className="py-1 text-3xl font-bold  w-full text-justify uppercase">
                Join us for the thrilling <br />
                final of lamborghini's the real race
              </h1>
            </div>
            <div className="flex flex-col  h-full items-start justify-end w-1/2">
              <button className="border border-gray-400 border-solid px-16 py-4 uppercase font-normal hover:bg-black hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="flex w-full py-16">
          <div className="w-1/2">
            <img
              src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_16_ravensburger_evo/hura_evo_raven_cover.jpg"
              alt="motorsport"
            />
          </div>
          <div className="flex flex-col items-start max-h-full px-12 ">
            <div>
              <h2 className="uppercase text-lg font-normal">
                16 september 2020
              </h2>
            </div>
            <div className="flex flex-col h-full items-start justify-center py-8">
              <h3 className="px-3  bg-gray-200 hover:bg-black hover:text-white uppercase text-base">
                Huracán
              </h3>
              <h1 className="py-3 text-3xl font-bold  w-full text-justify uppercase">
                Buid your own lamborghini <br />
                huracán evo as a 3d puzzle
              </h1>
            </div>
            <div className="flex flex-col  h-full items-start justify-end w-1/2">
              <button className="border border-gray-400 border-solid px-16 py-4 uppercase font-normal hover:bg-black hover:text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className='flex w-full justify-center items-center py-12'>
          <button className='border border-solid border-black bg-black w-1/6 py-4 uppercase font-semibold text-white hover:bg-white hover:text-black'>see all</button>
        </div>
      </div>
    </div>
  );
}
