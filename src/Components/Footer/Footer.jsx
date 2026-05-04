import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            
        </div>
        <hr />
          <div className="footer_bottom">
            <p className='footer_bottom_left'>Copy rigth 2026 Abdi Alemu. All rigths reserved</p>
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