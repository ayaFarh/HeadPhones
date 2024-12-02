import React from 'react'
import Hedphone1 from "../../assets/headphone.png"
import Hedphone2 from "../../assets/headphone2.png"
import Hedphone3 from "../../assets/headphone3.png"
import { FaWhatsapp } from 'react-icons/fa'
import { UpdateFollower } from 'react-mouse-follower'
import { AnimatePresence, motion } from "motion/react"


export let fidin =(delay)=>{
    return{
        hidden:{
         opacity:0,
         y:100,
         scale:0.5
        },
        show:{
            opacity:1,
            y:0,
            scale:1,
            transition:{
                delay:delay,
                duration:0.5,
                ease:"easeInOut"
            }
        },
        exit:{
            opacity:0,
            y:50,
            scale:1,
            transition:{
                delay:delay,
                duration:0.2,
                ease:"easeInOut"
            }
        }
    }
}

export default function Hero() {
 
   
    const headphoneInfo = [
        {
            id:"1",
            tittle:"Headphone wireless",
            price:"999 LE",
            desc:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.lorem ipsum dolor sit amet consectetur adipisicing ",
            model:"model Brown",
            bgcolor:"#8b5958",
            img:Hedphone1
        },
        {
            id:"2",
            tittle:"Headphone wireless",
            price:"999 LE",
            desc:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.lorem ipsum dolor sit amet consectetur adipisicing ",
            model:"lime green",
            bgcolor:"#368153",
            img:Hedphone2
        },
        {
            id:"3",
            tittle:"Headphone wireless",
            price:"999 LE",
            desc:"lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.lorem ipsum dolor sit amet consectetur adipisicing ",
            model:"ocean blue ",
            bgcolor:"#5d818c",
            img:Hedphone3
        }
    ]
    const [activeData,setactiveData] = React.useState(headphoneInfo[0])
    const handelActiveData = (activeData)=>{
        setactiveData(activeData)
    }
  return<>
  <section className='bg-brandDark text-white font-varela' id='home'>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
 <div className='flex flex-col justify-center md:py-14 py-0 max-w[500px]'>
 <div className='space-y-4 text-center md:text-left '>
    <AnimatePresence mode='wait'>
        <UpdateFollower
          mouseOptions={{
            backgroundColor:"white",
            zIndex:999,
            followSpeed:1.5,
            scale:5,
            mixBlendMode:"difference"
        }}
        >
        <motion.h1 className='text-3xl lg:text-6xl font-bold font-varela' variants={fidin(0.2)} initial="hidden" animate="show" exit="exit">{activeData.tittle}</motion.h1>
        </UpdateFollower>
    </AnimatePresence>
 

 <AnimatePresence mode='wait'>
 <motion.p 
key={activeData.id} variants={fidin(0.3)} initial="hidden" animate="show" exit="exit"
 className='text-sm leading-loose text-white/50 w-full mr-auto md:w-[90%]'>{activeData.desc}</motion.p>
 </AnimatePresence>
 

 <AnimatePresence mode='wait'>
    <UpdateFollower
    mouseOptions = {{
        backgroundColor:activeData.backgroundColor,
        zIndex:9999,
        followSpeed:0.5,
        rotate:-720,
        scale:5,
        mixBlendMode:"differenc",
        backgroundElement:<div>
            <img src={activeData.img} alt='' />
        </div>
    }}
    >
    <motion.button 
   key={activeData.id} variants={fidin(0.4)} initial="hidden" animate="show" exit="exit"
 className=' px-4 py-2 inline-block font-normal rounded-sm' style={{backgroundColor:activeData.bgcolor}}>Buy and listen</motion.button>
    </UpdateFollower>
 
 </AnimatePresence>
 
 {/* {hedphone list separator} */}

 
 <div className='flex  gap-2 justify-center md:justify-start  items-center !mt-24'>
 <div className='w-20 h-1 bg-white'></div>
<p className='text-sm text-nowrap uppercase'>Top Hedphones for you</p>
<div className='w-20 h-1 bg-white'></div>
 </div>

 {/* {hedphone list switcher} */}

 <div className='grid grid-cols-3 gap-10'>
    {headphoneInfo.map((item)=>{
        return (
            <UpdateFollower
            mouseOptions={{
           backgroundColor:item.bgcolor,
            zIndex:9999,
            followSpeed:0.5,
            scale:5,
            text:"view details",
            textFontSize:"3px"
            }}
            >
<div key={item.id} onClick={()=>handelActiveData(item)} className='grid md:grid-cols-2 grid-cols-1 place-items-center cursor-pointer'>
       
        <div className=''>
        <img src={item.img} alt="" className=''/>
       </div>
       <div className='space-y-2 md:ml-4 lg:ml-0'>
       <p className='font-bold text-base'>{item.price}</p>
        <p className='text-xs text-nowrap'>{item.model}</p>
       </div>
     
      </div>
            </UpdateFollower>
      
        )
    })}
 </div>
 </div>
 </div>

 {/* {hero img} */}
  <div className='flex flex-col justify-end items-center'>
    <AnimatePresence mode='wait'>
        
    <motion.img key={activeData.id} variants={fidin(0.4)} transition={{duration:0.4,delay:0.2 , ease:"easeInOut"}} initial={{opacity:0,scale:0.9, y:100}} animate={{opacity:1,scale:1, y:0}} exit={{opacity:1,scale:1, y:0,transition:{duration:0.2}}} src={activeData.img} alt="" className='w-[300px] md:w-[400px] xl:w-[550px]'/>
    </AnimatePresence>
    
  </div>
  <div>
 <a href='#'> <FaWhatsapp className='text-3xl fixed bottom-10 right-10  hover:rotate-[360deg] duration-500 z-[9999]  mix-blend-difference' /></a>
  </div>
    </div>
  </section>
  </>
}
