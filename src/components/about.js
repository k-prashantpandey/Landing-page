import React from 'react'
import About from '../assets/about.png'


const about = () => {
  return (

    <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 inline-flex px-4 lg:px-64 w-screen mx-auto max-h-full justify-between py-24' id='about'>

<div className='block'>
      <h3 className='font-bold text-blue-800 text-xl'>About</h3>
      <br />

      <p className=''>Welcome to Webwon, where we turn your digital dreams into reality. As a<br />
      leading web development company, We speciallize in creating innovative,<br />
      user-friendly, and responsive websites that help  businesses thrive in the<br />
      digital age. At webwon, we are a team of passionate developers, designers,<br />
      and strategists committed to delivering exceptional web solution. With a<br />
      strong emphasis on quality and clint satisfaction, we combine technical<br />
      expertise with creative design to build websites that are not only visually<br />
      appealing but also highly functional.</p>
      <br />
      <br />
      <br />

    <button className='h-6 w-20 bg-fuchsia-600 text-sm text-center font-semibold hover:scale-105'>Learn More</button>
</div>


<div className='flex'>
    <img src={About} alt='about' className='h-auto w-64' />
</div>




</div>
  )
}

export default about