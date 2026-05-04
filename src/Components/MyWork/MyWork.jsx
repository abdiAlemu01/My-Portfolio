import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import myWork from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'
const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className='mywork_title'>
        <h1>My work latest</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className='mywork_container'>
        {
          myWork.map((work, index) => {
            if (work.link) {
              return (
                <a key={index} href={work.link} target="_blank" rel="noopener noreferrer">
                  <img src={work.w_img} alt="project" />
                </a>
              )
            }
            return <img key={index} src={work.w_img} alt="project" />
          })
        }
      </div>
      <div className='mywork_showmore'>
        <p>Show more</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}
export default MyWork
