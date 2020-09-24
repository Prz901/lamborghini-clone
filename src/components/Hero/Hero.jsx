import React from 'react'

import Slider from 'react-slick'

export default function Hero() {
  return (
    <div>
      <Slider infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} dots={true} fade={true} arrows={false}>
        <div>
          <img
            src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2020/09_19/09_19_esport_slide_hp.jpg'
            alt=''
            className='h-screen w-full'
          />
        </div>
        <div>
          <img
            src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2020/08_09/3.jpg'
            alt=''
            className='h-screen w-full'
          />
        </div>
        <div>
          <img
            src='https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2020/08_09/2.jpg'
            alt=''
            className='h-screen w-full'
          />
        </div>
      </Slider>
    </div>
  )
}
