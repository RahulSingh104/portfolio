import React,{ useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_t9lclvm', 'template_x8bgerb', form.current, {
            publicKey: 'q7m4Dt5hO4HSQA-vfSUAs',
          })
          .then((result)=>{
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
          },(error)=>{
              console.log(error.text);  
          });
      };
  return (
    <section id="contactPage">
        <div id="experience">
            <h1 className="contactPageTitle">
                My Experience
            </h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="Client" className="clientImg" />
                <img src={Adobe} alt="Client" className="clientImg" />
                <img src={Microsoft} alt="Client" className="clientImg" />
                <img src={Facebook} alt="Client" className="clientImg" />
            </div>
        </div>
        <div id="contact">
         <h1 className="contactPageTitle">Contact Page </h1>
         <span className="contactDesc">
            Please Fill out the form below to discuss any work opportunities.
         </span>
         <form className="contactForm" ref={form}
         onSubmit={sendEmail}>
                <input type="text" placeholder="Your Name" className="name" name="your_name"/>
                <input type="email" placeholder="Your Email" className="email" name ="your_email"/>
                <textarea placeholder="Your Message" className="msg" name='message'></textarea>
                <button  type="submit" 
                 value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
         </form>
        </div>
    </section>
  )
}

export default Contact
