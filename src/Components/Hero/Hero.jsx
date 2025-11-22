import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img  from '../../assets/profile_img.svg.jpg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="profile image" />
        <h1> <span>I'm Abdi Alemu, </span> full stack developer based in Ethiopia</h1>
        <p>I am full stack developer in Addis Ababa, Ethiopia with 2 years of experience</p>
        <div className="hero_action" >
            <div className="hero_connect"> <AnchorLink className="anchor_link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
            <div className='hero_resume'>My Resume</div>
        </div>
    </div>
  )
}
export default Hero






