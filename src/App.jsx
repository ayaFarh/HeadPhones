
import { UpdateFollower } from 'react-mouse-follower'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import Service from './Pages/Service/Service'
import Panner from './Pages/panner/Panner'
import Blogs from './Pages/Blogs/Blogs'
import Footer from './Component/Footer/Footer.jsx'


function App() {
  

  return (
    <>
    <UpdateFollower
    mouseOptions={{
      backgroundColor:"white",
      zIndex:999,
      followSpeed:1.5,
    }
      
    }
    >
    <Navbar/>
    <Hero/>
    <Service/>
    <Panner/>
    <Blogs/>
    <Footer/>
    </UpdateFollower>
    
  
    </>
  )
}

export default App
