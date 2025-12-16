import React from 'react'
import "./Header.css";
import { FaHome, FaLinkedin, FaGithub} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {useNavigate} from "react-router-dom";


function Header() {
    const {darkMode, toggleTheme}= useTheme();
    const navigate = useNavigate();
  return (
    <div className='app'>
        <FaHome className='icon home'
        onClick={()=>{navigate("/about");
        window.scrollTo({top: 0, behavior: "smooth"});
        }
        }
        />
        <a
        href='https://www.linkedin.com/in/mukeshpathania/'>
        <FaLinkedin className='icon linkedin'/></a>
        <a
        href='https://github.com/mukeshpathania'>
        <FaGithub className='icon github'/></a>
        <a href='https://x.com/Mukesh190398'>
      <FaXTwitter className='icon twitter'/></a>
      <a
      href='mailto:pathaniamukesh005@gmail.com'>
      <CiMail className='icon mail'/></a>
      <div className="theme-icon" onClick={toggleTheme}>
        {darkMode ? <FaMoon/> : <FaSun/>}
      </div>
    </div>
  )
}

export default Header
