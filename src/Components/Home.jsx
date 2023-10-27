import React from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <div>
         <div className="Title">
            <h1>BENGAL INSTITUE OF TECHNOLOGY</h1>
            
           <img 
            className="logo"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Top-logo.png/220px-Top-logo.png"></img>
            

        
    </div>
    <div className="navbar">
       
        <Link to="/campus">Campus</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/Facilities">Facilities</Link>
      <Link to="/placement">Placement</Link>
     
    </div>
        <div>

        <h1 className="head">Highlight/Falana/dhimkana</h1>
        </div>
        
    <button className="login-butt" onClick="https://www.google.com/">Student Login</button>
    <div className="image-slider-container">
      <div className="border-top"></div>
      <Carousel showArrows={true} showStatus={false} showIndicators={true} showThumbs={false}>
        <div className="slide">
          <img src="https://media.istockphoto.com/id/1372528688/vector/colorful-horizontal-retro-background-in-style-hippie.jpg?s=612x612&w=0&k=20&c=hIogg58mVhNQL4o-uIUY4e1q_B8vuOsIrpKuFCD9CCw=" alt="Image 1" />
        </div>
        <div className="slide">
          <img src="https://wallpapers.com/images/hd/funky-colorful-skull-art-f0r8i5x9qk7btq5n.jpg" alt="Image 2" />
        </div>
        <div className="slide">
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </Carousel>
      <div className="border-bottom"></div>
    

       
    </div>
      
      
    <div className="image-slider-container">
      <div className="border-top"></div>
      <Carousel showArrows={true} showStatus={false} showIndicators={true} showThumbs={false}>
        <div className="slide">
          <img src="https://media.istockphoto.com/id/1372528688/vector/colorful-horizontal-retro-background-in-style-hippie.jpg?s=612x612&w=0&k=20&c=hIogg58mVhNQL4o-uIUY4e1q_B8vuOsIrpKuFCD9CCw=" alt="Image 1" />
        </div>
        <div className="slide">
          <img src="https://wallpapers.com/images/hd/funky-colorful-skull-art-f0r8i5x9qk7btq5n.jpg" alt="Image 2" />
        </div>
        <div className="slide">
          <img src="image3.jpg" alt="Image 3" />
        </div>
      </Carousel>
      <div className="border-bottom"></div>
        
    </div>

    
        </div>
    )
}

export default Home 