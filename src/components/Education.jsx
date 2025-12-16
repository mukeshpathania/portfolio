import React from 'react';
import "./Education.css";
import Image from "../image/cuhp.png";
import logo from "../image/hpu.png"


function Education() {
  return (
    <div className="education">
      <h2 className="education-title">Education</h2>

      {/* Item 1 */}
      <div className="education-item">
        <div className="education-left">
          <img
            src={Image}
            alt="CUHP"
            className="education-logo"
          />
          <div>
            <a href='https://www.cuhimachal.ac.in/' target='cuhp' rel="noreferrer" className='cuhp'>
            <h4>Central University of Himachal Pradesh</h4></a>
            <p><b>Master of Computer Applications</b></p>
          </div>
        </div>

        <div className="education-right">2023 - 2025</div>
      </div>

      {/* Item 2 */}
      <div className="education-item">
        <div className="education-left">
          <img
            src={logo}
            alt="HPU"
            className="education-logo"
          />
          <div>
            <a href='https://www.hpuniv.ac.in/' target='cuhp' rel='noreferrer' className='hpu'>
            <h4>Himachal Pradesh University</h4></a>
            <p><b>Bachelor's of Science (BSc)</b></p>
          </div>
        </div>

        <div className="education-right">2015 - 2019</div>
      </div>
    </div>
  )
}

export default Education
