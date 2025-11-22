import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <div className="footer_top_left">
                <img src={footer_logo} alt="footer logo" />
                <p>I am full stack Developer with more than 2 years of experience</p>
            </div>
            <div className="footer_top_rigth">
                <div className="footer_email_input">
                    <img src={user_icon} alt=" user icon" />
                    <input type="email" placeholder='enter your email' />
                </div>
              <div className='footer_subscribe'>  
                     Subscribe 
              </div>
            </div>  
        </div>
        <hr />
          <div className="footer_bottom">
            <p className='footer_bottom_left'>Copy rigth 2025 Abdi Alemu. All rigths reserved</p>
            <div className="footer_bottom_rigth">
                <p>Terms of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
          </div>
    </div>
  )
}
export default Footer