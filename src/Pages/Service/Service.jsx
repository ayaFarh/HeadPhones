import React from 'react'

import serviceImg1 from "../../assets/icons/obj1.png"
import serviceImg2 from "../../assets/icons/obj2.png"
import serviceImg3 from "../../assets/icons/obj3.png"
import { UpdateFollower } from 'react-mouse-follower'

export default function Service() {
  const serviceDetails =[
    {id :"1",
    name:"security",
    description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    img:serviceImg1},
    {id :"2",
        name:"Grurantee",
        description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        img:serviceImg2},
        {id :"1",
            name:"Affordability",
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            img:serviceImg3}
  ]


  return <>
  <section className='text-black font-poppins text-center py-20 bg-gray-100' id='services'>
    <div className='container'>
    <h2 className='text-3xl font-bold  py-5'>Services</h2>
   
   <div className='grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
   {serviceDetails.map((item)=>(
       <div className='rounded-xl bg-white shadow-xl p-8 '>
        <UpdateFollower className='flex items-center justify-center flex-col'
        mouseOptions = {{
            backgroundColor:"white",
            zIndex:9999,
            followSpeed:0.5,
            rotate:-720,
            scale:5,
            mixBlendMode:"differenc",
            backgroundElement:<div>
                <img src={item.img} alt='' />
            </div>
        }}
        >
        <div className='w-[100px]'>
        <img src={item.img} alt={item.name} className='w-full'/>
        </div>
        <h2 className='font-bold  my-4'>{item.name}</h2>
        <p className='text-black/70'>{item.description}</p>
        </UpdateFollower>
        
        
       </div>
   ))}
   </div>
    </div>

  </section>
  
  </>
}
