'use client'
import ContactForm from '@/components/ContactForm';
// import { Metadata } from 'next';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

// export const metadata: Metadata = {
//     title: 'Contact Me',
//     description: 'Yuri에게 메일 보내기'
// }

const ContactPage: React.FC = () => {
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
            <ContactForm />
        </div>
    );
};

export default ContactPage;