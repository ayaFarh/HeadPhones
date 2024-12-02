import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'
import paymentIm from "../../assets/credit-cards.webp"
import fidin from "../Hero/Hero"
import { AnimatePresence,motion } from 'motion/react'

function Footer() {
  return <>
  <section className='bg-primary pt-10 pb-6'>
    <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-b border-white pb-4 ' >
{/* playing */}

<div className='space-y-3 text-white  flex flex-col items-center md:items-start '>
  
    <h3 className='text-3xl font-poppins font-bold uppercase'>playing</h3>
   <p className='max-w-[300px] text-lg text-center md:text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati odio reiciendis illum labore provident quo exercitationem cumque deserunt modi molestias!</p>


    <a href='tel:' className='block'><FaPhoneFlip className='inline-block'/> 01112234567</a>
    <a href='mailto:'><IoIosMail className='inline-block' /> b1S6s@example.com</a>

</div>


{/* quick links */}
<div className='space-y-3 text-white flex flex-col items-center md:items-start '>
    <h3 className='text-3xl font-poppins font-bold'>Quick Links</h3>
    <div className='grid grid-cols-2 gap-8 md:grid-cols-2'>
    <div className='space-y-1 text-lg '>
    <ul className=''>
            <li> <a href='#'>Home</a></li>
            <li> <a href='#'>About </a></li>
            <li> <a href='#'>Contact us</a></li>
            <li> <a href='#'>Services</a></li>
        </ul>
    </div>
    <div className='space-y-1   text-lg'>
        <ul className=' '>
            <li> <a href='#'>Home</a></li>
            <li> <a href='#'>About </a></li>
            <li> <a href='#'>Contact us</a></li>
            <li> <a href='#'>Services</a></li>
        </ul>
       
      
        
       
        
    </div>
    </div>
</div>

{/* follow us */}
<div className='space-y-3 text-white max-w-[250px] mx-auto md:mx-0  text-center md:text-start'>
    <h3 className='text-3xl font-poppins font-bold '>Follow Us</h3>
    <div className='flex justify-between items-center w-[90%] text-2xl'>
        <a href='#' className='hover:scale-110  transtion:scale duration-200' ><FaFacebook /></a>
        <a href='#'  className='hover:scale-110  transtion:scale duration-200'><FaTwitter /></a>
        <a href='#' className='hover:scale-110  transtion:scale duration-200'><FaYoutube /></a>
        <a href='#' className='hover:scale-110  transtion:scale duration-200'><FaLinkedin /></a>
        
    </div>

    <div className='space-y-2 '>
        <h2 className='text-xl '>Payment Method</h2>
        <div>
            <img src={paymentIm} alt="" />
        </div>
    </div>
</div>


        </div>
        <p className='text-center text-white mt-4 font-poppins'>Copyright &copy; 2024 All Rights Reserved Aya mohamed </p>


    </div>
  </section>
  </>
}

export default Footer