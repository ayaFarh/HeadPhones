import React, { useState } from 'react'
import { FaBars, FaHeadphones } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from "motion/react"
export default function Navbar() {
const [isOpen,setIsOpen] = useState(true)
    const ToggelNav = ()=>{
        setIsOpen(!isOpen)
    }
    const navMenu =[
        {name:"Home", link:"#home"},
        {name:"Services", link:"#services"},
        {name:"Blog", link:"#blogs"},
        {name:"About", link:"#About"}, 
    ]

    const variants = {
        hidden: { 
          y: "-100%", 
          opacity: 0 
        },
        visible: { 
          y: 0, 
          opacity: 1 
        },
      };

  return<>
  <>
  <div className='bg-brandDark text-white py-4 font-varela '>
  <motion.nav 
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{duration:1 ,delay: 0.5}}
  className='md:flex justify-between items-center container py-1'>
 <div className='flex justify-between items-center relative z-20'>
 <a href='#' className='text-xl text-nowrap uppercase font-bold '>Playing/ <span className='font-extralight'>Market</span></a>
  <div>
  <FaBars className='md:hidden text-4xl '  onClick={ToggelNav}/>
  </div>
 </div>
 <motion.div className={`md:block  ${isOpen ?"block":"hidden"}`}
 variants={variants}
 animate={isOpen ? "visible" : "hidden"}
 transition={{
   duration: 0.7,
   ease: "easeInOut",
 }}
 
 >
 <ul className={`md:flex justify-center items-center gap-4 transition-all duration-300 text-center`}>
   {navMenu.map((item,index)=><li key={index}  className= "">
    <UpdateFollower  
    mouseOptions={{
        backgroundColor:"white",
        zIndex:999,
        followSpeed:1.5,
        scale:5,
        mixBlendMode:"difference"
    }}
    >
    <a href={item.link} className='inline-block text-sm py-2 px-3 md:px-1 lg:px-3 uppercase'>{item.name}</a>
    </UpdateFollower>
    
    </li>)}
   <div>
   <UpdateFollower  
    mouseOptions={{
        backgroundColor:"white",
        zIndex:999,
        followSpeed:1.5,
        scale:5,
        mixBlendMode:"difference"
    }}
    >

<button className='text-xl  md:ps-4 lg:ps-14 PS-0 '><FaHeadphones /></button>
    </UpdateFollower>

</div>
  </ul>
 </motion.div>

 

  
  </motion.nav>
  </div>

  </>
  </>
}
