import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import email_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ffed5cb1-b71f-4a4e-a7c2-ab6d25cd50a6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };
  return (
    <div className='contact' id='contact'>
        <div className='contact_title'>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="theme pattern" />
        </div>
        <div className="contact_section">
            <div className="contact_left">
                <h1>Let's talk</h1>
                <p>I am currently avaliable to take on new project,so feel free to send me a message about anything that you want me to work on.you can contact any time</p>
                <div className='contact_details'>
                    <div className='contact_detail'>
                       <img src={email_icon} alt="" /><p>abdiialemu2@gmail.com</p>
                    </div>
                    <div className='contact_detail'>
                       <img src={location_icon} alt="" /><p>Adddis Ababa, Ethiopia</p>
                    </div>
                    <div className='contact_detail'>
                       <img src={call_icon} alt="" /><p>+251901756305</p>
                    </div>

                </div>
            </div>
            <form onSubmit={onSubmit} className='contact_rigth'> 
                <label htmlFor=""> Your name</label>
                <input type="text" placeholder='enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="email" placeholder='enter your email' name='email' />
                <label htmlFor="">write your message here</label>
                <textarea name="message" rows="8" placeholder='enter your message'></textarea>
                <button className='contact_button' type='submit'>Submit now</button>

            </form>
        </div>

    </div>
  )
}
export default Contact
