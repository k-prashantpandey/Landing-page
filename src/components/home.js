import React from "react";
import { Carousel } from "flowbite-react";
import Banner1 from '../assets/Banner1.png'
import Banner2 from '../assets/Banner2.png'
import Banner3 from '../assets/Banner3.png'



const home = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-min h-screen">
      <Carousel className="w-full mx-auto bg-gray-300"> 
      <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img src={Banner1} alt="banner" className="w-60 mt-10 md:w-96 mr-8" />
        </div>
        <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold mb-4 text-blue-800 md:w-3/4 leading-snug">Innovate with Technology <span className="text-fuchsia-600">Lead the future</span></h3>
        <p>Harnessing the power of technology for a brighter future</p>
        <br />
        <button className="btn-first bg-blue-500 h-6 w-20">Register</button>
        </div>
        </div>
        </div>

        <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img src={Banner2} alt="banner" className="w-60 mt-10 md:w-96 mr-8" />
        </div>
        <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold mb-4 text-blue-800 md:w-3/4 leading-snug">Developing ideas <span className="text-fuchsia-600">into impact</span></h3>
        <p>Development: Where ideas evolve into reality.</p><br />
        <button className="btn-first bg-blue-500 h-6 w-20">Register</button>
        </div>
        </div>
        </div>

        <div className="flex h-full items-center justify-center">
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img src={Banner3} alt="banner" className="w-60 mt-10 md:w-96 mr-8" />
        </div>
        <div className="md:w-1/2">
        <h3 className="text-4xl font-semibold mb-4 text-blue-800 md:w-3/4 leading-snug">Grow boldy, <span className="text-fuchsia-600">thrive endlessly</span> </h3>
        <p>Fuel your success through continuous growth.</p><br />
        <button className="btn-first bg-blue-500 h-6 w-20">Register</button>
        </div>
        </div>
        </div>


      </Carousel>
      </div>
    </div>
  )
}

export default home