import React from 'react';
import Image from 'next/image';

// import profileImage from '/images/profile.jpeg';

const Introduce = () => {
    return (
        <div className='flex justify-center flex-col items-center pb-8'>
            <div className='w-[150px] h-[150px] mb-2'>
                <Image src='/images/profile.jpeg' alt="프로필 이미지" width='150' height='150' className='rounded-full w-full h-full object-cover'></Image>
            </div>
            <p className='font-bold text-xl'>Hi, I'm Yuri</p>
            <p className='text-center text-sm'>Web front-end engineer<br/>지식을 모아가는 주니어</p>
            <button className='bg-orange-400 rounded-2xl px-2 py-1 text-sm mt-2'>Contact Me</button>
        </div>
    );
};

export default Introduce;