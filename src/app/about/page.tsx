import React from 'react';
import Introduce from '../../components/Introduce';

function AboutPage() {
    const sectionTitle = 'font-bold text-xl p-2'

    return (
        <div>
            <Introduce />
            <div className='bg-gray-100 mx-10 text-center p-8'>
                <section>
                    <p className={sectionTitle}>Who am I?</p>
                    <p>개발을 사랑하는 프론트엔드 개발자 <br />유저에게 친화적이고 재미있는 웹에 관심이 많아요</p>
                </section>
                <section>
                    <p className={sectionTitle}>Career</p>
                    <p>런바디(2022.06~)</p>
                    <p>수성 엔지니어링</p>
                </section>
                <section>
                    <p className={sectionTitle}>Skills</p>
                    <p>Vue, JavaScript, Git, React, Next</p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;