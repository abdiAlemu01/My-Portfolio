import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg.jpg'
const About = () => {
  return (
    <div className='about' id = 'about'>
        <div className='about_title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme pattern image"/>
        </div>
        <div className='about_sections'>
            <div className='about_left'>
                <img src={profile_img} alt="profile image" />
            </div>
            <div className="about_rigth">
                <div className="about_para">
                    <p>I am a  Software Engineer and Full Stack Developer with a strong foundation in both front-end and back-end development. Skilled in creating dynamic and responsive web applications, I am proficient in technologies such as HTML, Tailwindcss, JavaScript, React, and Node.js. My expertise also includes designing and consuming REST APIs, enabling seamless communication between client and server. 
                    </p>
                    <p> My passion for full stack development is not only reflected in my extensive experience but also in the enthusiasm and dedication to each project</p>
                </div>
                <div className="about_skills">
                    <div className="about_skill"><p>HTML $ Tailwind CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about_skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className="about_skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about_skill"><p>Node Js</p><hr style={{width:"50%"}}/></div>  
                </div>
            </div>
        </div>
        <div className="about_achievements">
            <div className="about_achievement">
                <h1>2+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about_achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPELETED</p>
            </div>
            <hr/>
            <div className="about_achievement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}
export default About