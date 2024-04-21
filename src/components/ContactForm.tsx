'use client'
import { sendContactEmail } from '@/service/contact';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import Banner, {BannerData} from './Banner'

type Form = {
    from: string;
    subject: string;
    message: string;
};

const DEFAULT_DATA = {
    from: '',
    subject: '',
    message: ''
}

const ContactForm = () => {
    const [form, setForm] = useState<Form>(DEFAULT_DATA);

    const [banner, setBanner] = useState<BannerData | null>(null);

    const INPUT_STYLE = 'px-1 mb-4 text-gray-800'

    //HTML Input Element에서 발생하는 change 이벤트
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({...prev, [name]: value}))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        // 페이지가 다시 로딩되지 않도록 방지
        e.preventDefault();
        
        sendContactEmail(form)
        .then(() => {
            setBanner({message: '메일을 성공적으로 발송했습니다.', state: 'success'});
            setForm(DEFAULT_DATA);
        })
        .catch(() => {
            setBanner({message: '메일 전송을 실패했습니다.', state: 'error'});
        })
        .finally(() => {
            setTimeout(() => {
                setBanner(null)
            }, 2000);
        })
        
    }

    return (
        <section className='w-full max-w-md mx-auto'>
            { banner && <Banner banner={banner}  /> }
            <form onSubmit={onSubmit} className='bg-blue-950 w-full  rounded-md text-white flex flex-col p-3 my-4'>
                <label htmlFor='from'>Your Email</label>
                <input type="email" id='from' className={INPUT_STYLE} name='from' required autoFocus value={form.from} onChange={onChange} />

                <label htmlFor='subject'>Subject</label>
                <input type="text" id='subject' className={INPUT_STYLE} name='subject' required value={form.subject} onChange={onChange} />

                <label htmlFor='message'>Message</label>
                <textarea rows={10} id='message' className={`${INPUT_STYLE} resize-none h-[200px]`} name='message' required value={form.message} onChange={onChange} />

                <button className='bg-orange-400 text-gray-800 rounded-sm  hover:bg-orange-500'>Submit</button>
            </form>
        </section>
    );
};

export default ContactForm;