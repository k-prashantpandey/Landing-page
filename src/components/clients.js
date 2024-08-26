import React from 'react'
import Logo1 from '../assets/amd-icon.png'
import Logo2 from '../assets/ebay.png'
import Logo3 from '../assets/g-pay.png'
import Logo4 from '../assets/intel-icon.png'
import Logo5 from '../assets/netflix-icon.png'
import Logo6 from '../assets/uber-icon.png'
import Photo1 from '../assets/create presence.png'
import Photo2 from '../assets/maintain your site.png'
import Photo3 from '../assets/grow company.png'

const clints = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 inline-block px-4 lg:px-24 w-screen mx-auto max-h-full' id="clients" >

        <div className="pt-20 text-center">
        <h3 className='font-extrabold text-6xl text-red-800'>Our Clints</h3>
        <p className='text-red-500 py-1'>We have been working with some fortune 120+ clints.</p>
        </div>

        <div className='flex object-cover justify-between py-16'>
          <img src={Logo1} alt='logo' className='h-12 w-16 hover:scale-150' />
          <img src={Logo2} alt='logo' className='h-12 w-16 hover:scale-150' />
          <img src={Logo3} alt='logo' className='h-12 w-16 hover:scale-150' />
          <img src={Logo4} alt='logo' className='h-12 w-16 hover:scale-150' />
          <img src={Logo5} alt='logo' className='h-12 w-16 hover:scale-150' />
          <img src={Logo6} alt='logo' className='h-12 w-16 hover:scale-150' />
        </div>

        <div className='text-center'>
          <h2 className='text-4xl text-fuchsia-600 font-semibold'>Manage Your Company On Web<br />With Us</h2>
          <p className='text-fuchsia-500'>What we provide to our clints.</p>
        </div>

      
    


      <div className=' flex object-cover justify-between pt-20 lg:px-32'>
         <img src={Photo1} alt="pic" className='h-36 ' /> 
         <img src={Photo2} alt="pic" className='h-36 ' />
         <img src={Photo3} alt="pic" className='h-36 me-2' /> 
      </div>

  

<div className='flex text-start justify-between text-blue-700 pb-20'>
      <div className='ms-32 hover:scale-125'>
          <h3 className='text-xl font-bold'>Create your <br /> Presence on web</h3>
          <p>with us you can make your web <br /> presence easily.</p>
        </div>

        <div className='ms-16 hover:scale-125'>
          <h3 className='text-xl font-bold'>Maintain And Update <br /> Your Site</h3>
          <p>with us your site will be maintained and <br /> updated always.</p>
        </div>

        <div className='hover:scale-125'>
          <h3 className='text-xl font-bold'>grow Your Company</h3>
          <p>with us your company growth will reach <br /> new hights.</p>
        </div>
</div>
</div>


      
      







        
  )
}

export default clints