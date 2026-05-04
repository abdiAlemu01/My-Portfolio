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
                       <img src={call_icon} alt="" /><p>+251901756305</p>
                    </div>
                    <div className='contact_detail'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5">
                         <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                       </svg>
                       <a href="https://www.linkedin.com/in/abdi-alemu-82063a33b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className='contact_detail'>
                       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0088cc">
                         <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                       </svg>
                       <a href="https://t.me/abdi0175" target="_blank" rel="noopener noreferrer">Telegram</a>
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
