import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
const About = () => {
  return (
    <div className='about' id = 'about'>
        <div className='about_title'>
            <h1>About me</h1>
            <img src={theme_pattern} alt="theme pattern image"/>
        </div>
        <div className='about_sections'>
            <div className="about_rigth">
                <div className="about_para">
                    <p>I’m a Software Engineer specializing in Full-Stack AI Engineering, AI Automation, 
                        and Mobile Application Development, with a strong foundation in both front-end
                         and back-end systems. I build dynamic, responsive web applications using technologies 
                         like HTML, Tailwind CSS, TypeScript, React.js,Next.js and Node.js, and I also develop 
                         cross-platform mobile apps with Flutter.
       My expertise extends to modern AI systems, including Retrieval-Augmented Generation (RAG), LangChain, and 
       workflow automation with n8n, allowing me to design intelligent, scalable solutions and automate complex
        processes. I also design and integrate REST APIs to ensure seamless communication between client and server.

                    </p>
                    
                </div>
                <div className="about_skills">
                    <div className="skills_row">
                        <div className="skills_category">
                            <h3>Frontend</h3>
                            <div className="about_skill"><p>ReactJS</p><hr style={{width:"90%"}}/></div>
                            <div className="about_skill"><p>NextJS</p><hr style={{width:"80%"}}/></div>
                            <div className="about_skill"><p>Flutter</p><hr style={{width:"85%"}}/></div>
                        </div>
                        
                        <div className="skills_category">
                            <h3>Backend</h3>
                            <div className="about_skill"><p>NodeJS</p><hr style={{width:"85%"}}/></div>
                            <div className="about_skill"><p>RAG</p><hr style={{width:"75%"}}/></div>
                            <div className="about_skill"><p>Langchain</p><hr style={{width:"80%"}}/></div>
                        </div>
                    </div>
                    
                    <div className="skills_row">
                        <div className="skills_category">
                            <h3>Database</h3>
                            <div className="about_skill"><p>PostgreSQL</p><hr style={{width:"85%"}}/></div>
                            <div className="about_skill"><p>MongoDB</p><hr style={{width:"80%"}}/></div>
                            <div className="about_skill"><p>Firebase</p><hr style={{width:"75%"}}/></div>
                        </div>
                        
                        <div className="skills_category">
                            <h3>AI Workflow Automation</h3>
                            <div className="about_skill"><p>n8n</p><hr style={{width:"85%"}}/></div>
                            <div className="about_skill"><p>APIs</p><hr style={{width:"90%"}}/></div>
                            <div className="about_skill"><p>Webhooks</p><hr style={{width:"80%"}}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="about_achievements">
            <div className="about_achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about_achievement">
                <h1>33+</h1>
                <p>PROJECTS COMPELETED</p>
            </div>
            <hr/>
            <div className="about_achievement">
                <h1>6+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>

    </div>
  )
}
export default About