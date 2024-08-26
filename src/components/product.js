import React from 'react'
import Static from '../assets/static websites.png'
import Web from '../assets/web application.png'

function Product() {
  return (
  
    <div className='bg-gradient-to-r from-blue-50 via-fuchsia-50  to-green-50 block px-4 lg:px-64 w-screen mx-auto max-h-full  py-24' id='product'>

<h3 className='text-green-800 text-4xl font-extrabold text-center'>Products</h3> <br /> <br /> <br />


<h3 className='font-bold text-blue-800 text-xl'>Static Websites</h3>
<br />

<div className='flex'>
     
      <br />

      <p className=''> At WebDev, we specialize in creating high-quality static websites that <br />
      delever fast, secure and reliable online experiences, Our static websites are <br />
      perfect for businesses and indivisuals looking for a cost-effective and <br />
      efficient way to establish a strong online presence. Static websites consist <br />
      of fixed content that doesn't change dynamically. Unlike dynamic websites <br />
      that rely on server-side processing and databases, static websites are built <br />
      using simple HTML, CSS, and JAVASCRIPT. This Makes them incredibly fast <br />
      and easy to deploy, maintain, and scale. </p>
    


      <div className='flex ps-36'>
    <img src={Static} alt='' className='h-64 w-80' />
</div>

    </div>


    <button className='h-6 w-20 bg-fuchsia-600 text-sm text-center font-semibold hover:scale-105 block'>Learn More</button>


<br />
<br />
<br />
<br /><br /><br /><br />
 
    <h3 className='font-bold text-blue-800 text-xl'>Web Application</h3>
<br />

<div className='flex'>
     
      <br />

      <p className=''>
      Discover the power of modern web application with our letest project, <br />
      design to deliver seamless functionality, exceptional user experiences,<br />
       and robust performance. Our Web application is crafted to meet the <br />
      diverse nedds of businesses and indivisuals, providing a powerful tool <br />
      for managing and optimizing various tasks and processes. A web <br />
      application is a dynamic, interactive software application that runs on <br />
      web server and is accessed through a web browser, unlike static websites, <br />
      web applications offer real-time interaction and are capable of performing <br />
      complex operations, making them ideal for a wide range of purposes from <br />
      e-commerce to project management. 
      </p>
    


      <div className='flex ps-36'>
    <img src={Web} alt='' className='h-64 w-80' />
</div>

    </div>

    <br /> <br />

    <button className='h-6 w-20 bg-fuchsia-600 text-sm text-center font-semibold hover:scale-105 block'>Learn More</button>




</div>
  )
}

export default Product