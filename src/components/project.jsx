import React from 'react'
import "./Project.css";
import Image from "../image/scm.jpg";
import Yt from "../image/yt.webp";

function project() {
  return (
    <div>
    <div className='project'>
      <h2 className='heading'>My Projects</h2></div>
      <div className='para'>
      <p>A selection of frontend projects demonstrating my skills in building responsive and interactive web applications using modern technologies</p>
    </div>
    <div className='fsc'>
      <div className="food">
  <img src={Image} alt="logo" />

  <div className="content">
    <h4>Supply Chain Management System</h4>

    <p className="date">Sep 2024 – Mar 2025</p>

    <p className="desc">
      Developed a Supply Chain Management system to streamline inventory, order
      processing, and logistics operations efficiently. The system provides
      real-time tracking and management of goods from suppliers to customers.
    </p>
    <div className="tags">
      <span>React</span>
        <span>Solidity</span>
        <span>TailwindCSS</span>
        <span>Hardhat</span>
        <span>Ethers.js</span>
        <span>Next.js</span>
        <span>Web3Modal</span>
        <span>Ethereum Blockchain</span>
        
      </div>
      <div className="actions">
        <a href="https://github.com/mukeshpathania/Supply-Chain-Management-system" className="btn outline">Source</a>
      </div>
  </div>
</div>

        <div className='youtube'>
          <img src={Yt} alt='youtube' />
          <h4>Youtube Clone</h4>
            <p>Apr 2025 - May 2025</p>
            <p>Developed a YouTube clone web application that allows users to browse, search, and watch videos with a modern, responsive interface. Implemented dynamic video rendering and interactive UI features for a seamless user experience</p>
            <div className="tags">
        <span>React.js</span>
        <span>JavaScript</span>
        <span>Css</span>
        <span>Material UI</span>
        <span>Firebase</span>
      </div>
      <div className="actions">
        <a href="https://github.com/mukeshpathania/youtube-clone" className="btn outline">Source</a>
      </div>
          
        </div>
    </div>
    </div>
  )
}
/* <div className="projects">


  <div className="project-card">
    <img src={Image} alt="Share Next App" />

    <div className="project-content">
      <h3>Supply Chain </h3>
      <p className="date">Sep 2024 – Nov 2024</p>

      <p className="desc">
        Developed a Supply Chain Management system to streamline inventory, order
      processing, and logistics operations efficiently. The system provides
      real-time tracking and management of goods from suppliers to customers.
      </p>

      <div className="tags">
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>TailwindCSS</span>
        <span>Firebase</span>
        <span>Razorpay</span>
      </div>

      <div className="actions">
        <a href="#" className="btn">Website</a>
        <a href="https://github.com/your-repo" className="btn outline">Source</a>
      </div>
    </div>
  </div>


  <div className="project-card">
    <img src={Yt} alt="CUHP App" />

    <div className="project-content">
      <h3>CUHP APP</h3>
      <p className="date">Feb 2024 – June 2024</p>

      <p className="desc">
        CUHP APP is an Android application developed using Java, Android Studio,
        and Firebase. It features authentication and real-time data sharing in a
        secure, user-friendly interface.
      </p>

      <div className="tags">
        <span>Java</span>
        <span>Android Studio</span>
        <span>Firebase</span>
      </div>

      <div className="actions">
        <a href="#" className="btn">App</a>
        <a href="https://github.com/your-repo" className="btn outline">Source</a>
      </div>
    </div>
  </div>
</div>
</div> */



export default project
