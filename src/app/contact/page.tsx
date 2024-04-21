'use client'
import ContactForm from '@/components/ContactForm';
import React, {useState} from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

// import { SendMailParam, mailSender } from '../../config/nodemailer'

const ContactPage: React.FC = () => {
    // const inputStyle = 'px-1 mb-4 text-gray-800'

    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      };
    
      const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubject(event.target.value);
      };
    
      const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(event.target.value);
      };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // 이제 email, subject, message 상태에 접근하여 폼 데이터를 처리할 수 있습니다.
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // const params: SendMailParam = {
        //     toEmail: email,
        //     subject: subject,
        //     text: message
        // }
        // mailSender.sendGmail(params)
      };

      const handleClickLink = (type: string) => {
        if (type === 'GIT') {
            window.location.href = 'https://github.com/yulllna';
        } else if (type === 'LINKEDIN') {
            window.location.href = 'https://www.linkedin.com/in/%EC%9C%A0%EB%A6%AC-%EB%82%98-3867021a1/';
        } else {
            window.location.href = 'https://velog.io/@soceu/posts';
        }
    };
    return (
        <div>
            <div className='text-center'>
                <p className='font-bold text-xl pb-2'>Contact me</p>
                <p>email@naver.com</p>
                <div className='flex justify-center items-center gap-2 pt-2'>
                    <FaGithub className='w-8 h-8 cursor-pointer' onClick={() => handleClickLink('GIT')} />
                    <FaLinkedin className='w-8 h-8 cursor-pointer' onClick={() => handleClickLink('LINKEDIN')} />
                    <SiVelog className='w-7 h-7 cursor-pointer' onClick={() => handleClickLink('VELOG')} />
                </div>
                <p className='font-bold text-xl py-8'>Or Send me an email</p>
            </div>
            {/* <form id="mailForm" className='bg-blue-950 w-9/12 rounded-md text-white flex flex-col p-3 mx-auto' onSubmit={handleSubmit}>
                <label htmlFor="email" className='pb-2'>Your Email</label>
                <input type="email" id='email' className={inputStyle} value={email} onChange={handleEmailChange} />
                <label htmlFor="subject" className='pb-2'>Subject</label>
                <input type="text" id='subject' className={inputStyle} value={subject} onChange={handleSubjectChange} />
                <label htmlFor="message" className='pb-2'>Message</label>
                <textarea name="message" id="message" className={`${inputStyle} resize-none h-[200px]`} value={message} onChange={handleMessageChange}></textarea>
                <button type="submit" form="mailForm" className='bg-orange-400 text-gray-800 rounded-sm'>submit</button>
            </form> */}
            <ContactForm />
        </div>
    );
};

export default ContactPage;