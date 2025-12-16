import React from 'react';
import "./About.css";
import Image from "../image/avatar.png";
import Education from './Education';
import Project from "./project";
import Skills from './Skills';
import Contact from "./Contact";


function About(){
  return (
    <div className='file'>
    <div className='about'>
        <div className='head'>
            <div className='name'>
        <h1 className='h1'>Hi, I'm Mukesh Pathania 👋</h1>
        <p>Enthusiastic frontend developer skilled in creating responsive and interactive web applications using modern technologies. Passionate about clean UI design, performance optimization, and continuous learning. Seeking an opportunity to apply my skills and grow in a professional environment</p></div>
            <img src={Image} alt='avatar' className='avatar'/>
        </div>
        <div className='college'>
        <h2>About</h2>
        <p><strong>Master of Computer Applications(MCA)</strong> graduate from the <a href='https://www.cuhimachal.ac.in/' target='cuhp'> <strong>Central University of Himachal Pradesh </strong> </a> with a keen interest in frontend development. Experienced in building responsive and interactive web interfaces. Always motivated to learn, improve, and work on impactful real-world projects.</p>
        </div>
        </div>
        <Education/>
        <Skills/>
        <Project/>
        <Contact/>
      
    </div>
  )
}

export default  About;
