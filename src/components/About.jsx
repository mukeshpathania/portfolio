import React from 'react';
import "./About.css";
import Image from "../image/avatar.png";
import Education from './Education';
import Project from "./project";
import Skills from './Skills';
import Framework from './Framework';
import Contact from "./Contact";



function About(){
  return (
    <div className='file'>
    <div className='about'>
        <div className='head'>
            <div className='name'>
        <h1 className='h1'>Hi, I'm Mukesh Pathania 👋</h1>
        <p>Enthusiastic <strong>Python AI/ML Developer</strong> skilled in building intelligent applications using Machine Learning, Deep Learning, and Data Analysis techniques. Passionate about developing data-driven solutions, optimizing model performance, and exploring modern AI technologies. Seeking an opportunity to apply my skills, solve real-world problems, and grow in a professional AI-focused environment.</p></div>
            <img src={Image} alt='avatar' className='avatar'/>
        </div>
        <div className='college'>
        <h2>About</h2>
        <p><strong>Master of Computer Applications(MCA)</strong> graduate from the <a href='https://www.cuhimachal.ac.in/' target='cuhp'> <strong>Central University of Himachal Pradesh </strong> </a> with a keen interest in frontend development. Experienced in building responsive and interactive web interfaces. Always motivated to learn, improve, and work on impactful real-world projects.</p>
        </div>
        </div>
        <Education/>
        <Skills/>
        <Framework/>
        <Project/>
        <Contact/>
      
    </div>
  )
}

export default  About;
