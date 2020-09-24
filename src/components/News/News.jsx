import React from 'react'

export default function News() {
  return (
    <div className='container mx-auto py-20'>
      <div className=' w-full'>
        <h2 className='text-4xl font-medium py-2 uppercase'>News</h2>
        <div className='pb-12'>
          <h1 className='text-7xl font-bold  uppercase leading-none'>Lamborghini world</h1>
        </div>

        <img
          src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_23_unica/unica_cover1.jpg'
          alt='Lamborghini World'
        />
      </div>

      <section>
        <div className='pt-12 pb-16'>
          <div className='w-full'>
            <h2 className='text-xl uppercase font-medium pb-4'>23 september 2020</h2>
          </div>

          <div className='w-full'>
            <div className='flex '>
              <div className=' flex flex-col items-start w-8/12'>
                <h1 className='text-4xl font-semibold mt-3 uppercase leading-none w-full tracking-wider'>
                  Unica, the app that connects you to the world of lamborghini
                </h1>
                <p className='text-lg font-light w-full mt-3 mb-3'>
                  With the princeless Unica App, reserved exclusively for Lamborghini owners, you can enjoy a world of exciting
                  features just tapping your finger.
                </p>
              </div>
              <div className='flex flex-col justify-start items-end w-4/12'>
                <button className='border border-gray-400 uppercase py-4 px-16 hover:bg-black hover:text-white'>
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex w-full'>
          <div className='w-1/2'>
            <img
              src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_21_esport_final/esport_final_cover.jpg'
              alt='motorsport'
            />
          </div>
          <div className='flex flex-col items-start max-h-full pl-16 '>
            <div>
              <h2 className='uppercase text-lg font-normal'>21 september 2020</h2>
            </div>
            <div className='flex flex-col h-full items-start justify-center '>
              <h3 className='px-3  bg-gray-200 hover:bg-black hover:text-white uppercase text-base'>Esports</h3>
              <h1 className='py-3 text-3xl font-bold  w-full text-justify uppercase'>
                Buid your own lamborghini <br />
                huracán evo as a 3d puzzle
              </h1>
            </div>
            <div className='flex flex-col  h-full items-start justify-end w-1/2'>
              <button className='border border-gray-400 border-solid px-16  uppercase font-normal hover:bg-black hover:text-white py-3'>
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className='flex h-full py-20'>
          <div className='w-1/2'>
            <img
              src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2020/09_16_ravensburger_evo/hura_evo_raven_cover.jpg'
              alt='Huracan'
            />
          </div>
          <div className='flex flex-col items-start max-h-full pl-16 '>
            <div>
              <h2 className='uppercase text-lg font-normal'>16 september 2020</h2>
            </div>
            <div className='flex flex-col h-full items-start justify-center '>
              <h3 className='px-3  bg-gray-200 hover:bg-black hover:text-white uppercase text-base'>Huracán</h3>
              <h1 className='py-3 text-3xl font-bold  w-full text-justify uppercase'>
                Buid your own lamborghini <br />
                huracán evo as a 3d puzzle
              </h1>
            </div>
            <div className='flex flex-col  h-full items-start justify-end w-1/2'>
              <button className='border border-gray-400 border-solid px-16 uppercase font-normal hover:bg-black hover:text-white py-3'>
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center py-10'>
          <button className='text-xl uppercase background-lamborghini text-white py-3 px-4 w-1/6 border-black border border-solid hover:bg-white hover:text-black'>
            see all
          </button>
        </div>
      </section>
    </div>
  )
}
