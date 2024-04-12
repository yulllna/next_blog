import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const ContactPage = () => {
    return (
        <div>
            <div>
                <p>Contact me</p>
                <p>email@naver.com</p>
                <FaGithub />
                <FaLinkedin />
                <SiVelog />
                <p>Or Send me ad email</p>
            </div>
            <form id="mailForm">
                <label htmlFor="email">Your Email</label>
                <input type="email" id='email' />
                <label htmlFor="subject">Subject</label>
                <input type="text" id='subject' />
                <label htmlFor="message">Your Email</label>
                <textarea name="message" id="message"></textarea>
                <button type="submit" form="mailForm">submit</button>
            </form>
        </div>
    );
};

export default ContactPage;