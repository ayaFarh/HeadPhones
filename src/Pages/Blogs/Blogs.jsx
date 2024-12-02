import React from 'react'
import blogsImg1 from "../../assets/blogs/close-up-cute-child-portrait.jpg"
import blogsImg2 from "../../assets/blogs/girl-with-headphones.jpg"
import blogsImg3 from "../../assets/blogs/little-boy-pink-t-shirt-black-headphones-listening-music.jpg"
import blogsImg4 from "../../assets/blogs/portrait-little-boy-holding-his-modern-cellphone-watching-video-using-wireless-internet-headphones-rejoice-with-hands-up.jpg"
import { UpdateFollower } from 'react-mouse-follower'

export default function Blogs() {

    const blogDetails = [
        {id:"1",
            img:blogsImg1,
            name:"lorem Ipsum dolor sit amet dolor  sit amet, consectetur adipiscing elit",
            desc:"lorem Ipsum dolor sit amet lobortis et justo so simple"
        },
        {id:"2",
            img:blogsImg2,
            name:"lorem Ipsum dolor sit amet dolor  sit amet, consectetur adipiscing elit",
            desc:"lorem Ipsum dolor sit amet lobortis et justo so simple"
        },
        {id:"3",
            img: blogsImg3,
            name:"lorem Ipsum dolor sit amet dolor  sit amet, consectetur adipiscing elit",
            desc:"lorem Ipsum dolor sit amet lobortis et justo so simple"
        },
        {id:"4",
            img:blogsImg4,
            name:"lorem Ipsum dolor sit amet dolor  sit amet, consectetur adipiscing elit",
            desc:"lorem Ipsum dolor sit amet lobortis et justo so simple"
        },

    ]
  return <>
  <section className='py-16 text-center bg-gray-100' id='blogs'>
    
    <div className='container '>
    <h2 className=' font-bold font-poppins text-3xl mb-8'>Blogs</h2>

    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 '>

{blogDetails.map((item,index)=>
<UpdateFollower 
       mouseOptions={{
        backgroundColor:"black",
         zIndex:9999,
         followSpeed:0.5,
         scale:5,
         text:"read",
         textFontSize:"3px"
         }}
>
<div key={index} className='p-4 bg-white shadow-xl rounded-md max-w-[400px] md:max-w-[300px] m-auto space-y-2 hover:translate-y-2  hover:transition-translate duration-200'>
            <img src={item.img} alt={item.name} className='w-full h-[200px] object-cover'/>
         <div>
         <h3 className='font-bold line-clamp-1'>{item.name}</h3>
         <p className='text-black/50 line-clamp-1'>{item.desc}</p>
         </div>
        </div>
</UpdateFollower>
      
    
)}

    </div>

    </div>
  </section>
  
  </>
}
