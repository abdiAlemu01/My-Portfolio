import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <div className="hero_content">
            <div className="hero_text">
                <h1> <span>I'm Abdi Alemu, </span> full stack AI Engineer , AI Automation ,
                 Mobile application Developer 
                based in Ethiopia</h1>

                <div className="hero_action" >
                    <div className="hero_connect"> <AnchorLink className="anchor_link" offset={50} 
                    href="#contact">Connect With Me</AnchorLink></div>
                    <div className='hero_resume'>My Resume</div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Hero






