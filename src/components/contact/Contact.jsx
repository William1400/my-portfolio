import React, { useContext, useRef, useState } from 'react';
import "../contact/Contact.scss";
import emailjs from 'emailjs-com';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { ThemeContext } from '../../context';

const Contact = () => {

    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_YOUR_USER_ID; 

    const handleSubmit = (e) => {

        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, USER_ID)
            .then((result) => {

                console.log(result.text);
                setDone(true);
            }, (error) => {

                console.log(error.text);
            });
    }

    return (

        <div className="contact">
            <div className="contact-background"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Contact me
                    </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <PhoneIcon fontSize="large" />0470/506238
                        </div>
                        <div className="contact-info-item">
                            <HomeIcon fontSize="large" />1400 Nivelles
                        </div>
                        <div className="contact-info-item">
                            <AlternateEmailIcon fontSize="large" />william.bady.1400@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <a href="https://github.com/William1400">
                                <GitHubIcon fontSize="large" />
                            </a>
                        </div>
                        <div className="contact-info-item">
                            <a href="https://www.linkedin.com/in/william-bady/">
                                <LinkedInIcon fontSize="large" />
                            </a>
                        </div>
                    </div>  
                </div>
                <div className="contact-right">
                    <p className="contact-description">
                        <b>Can y help you?</b> If you want to contact me you cant send me a message.
                        I will answer you as soon as possible.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name" required />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject" required />
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email" required />
                        <textarea style={{ backgroundColor: darkMode && "#333" }} row="5" placeholder="Message" name="message" required />
                        <button className="button">Submit</button>
                        {done && "Thank you ..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
