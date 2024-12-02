import React from 'react'
import pannerImg from "../../assets/headphone4.png"
import {motion} from "motion/react"
import { UpdateFollower } from 'react-mouse-follower'
export default function Panner() {
  return <>
  <section className='py-10 bg-white' id='About'>
<div className='container '>
<div className='grid md:grid-cols-2 grid-cols-1 gap-12'>
<div className='flex justify-center items-center'>
<motion.img src={pannerImg} alt='pannerimage' className='w-[500px] md:w-400px'
initial={{opacity:0 , x:-100 , rotate:-180}}
transition={{duration:0.8 ,delay:0.2 , ease:"easeInOut"}}
whileInView={{opacity:1 , x:0 , rotate:0}}
/>
</div>

<div className='flex flex-col justify-center md:items-start items-center space-y-4 '>
    <h3 className='text-2xl  md:text-4xl font-semibold font-poppins text-center md:text-start md:max-w-[80%]'>The latest headphone with the latest technology</h3>
    <p className='text-lg md:text-xl text-center md:text-start text-black/65 md:max-w-[80%]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad totam vero explicabo esse hic deleniti!</p>
    <UpdateFollower
     mouseOptions={{
        backgroundColor:"white",
        zIndex:999,
        followSpeed:1.5,
        scale:5,
        mixBlendMode:"difference"
    }}
    >
    <div className='flex justify-center'><button className='py-2 px-4  border rounded-md border-[#e33343] text-[#e33343] hover:bg-[#e33343] hover:text-white transition-color duration-200'>Learn More</button></div>
    </UpdateFollower>
</div>
<div>
</div>
</div>
<UpdateFollower
mouseOptions={{
    backgroundColor:'gray',
     zIndex:9999,
     followSpeed:1.5,
     scale:5,
      mixBlendMode:"difference"
     }}
>
<div className='py-4 px-6 text-center my-4 rounded-3xl max-w-[800px] leading-normal font-varela  mx-auto bg-gradient-to-t from-primary to-primary/70 hover:scale-105 hover:shadow-2xl transition-all duration-500 text-white'>

        <p className='text-xl md:text-3xl font-semibold font-poppins md:max-w-[85%] mx-auto'>Headphones With Good Quality And Affortable Price</p>
       
    </div>
    </UpdateFollower>

</div>


  </section>
  
  </>
}
