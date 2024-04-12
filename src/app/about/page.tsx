import React from 'react';
import Introduce from '../components/Introduce';

function AboutPage() {
    return (
        <div>
            <Introduce />
            <div>
                <section>
                    <p>Who am I?</p>
                    <p>개발을 사랑하는 프론트엔드 개발자 <br />유저에게 친화적이고 재미있는 웹에 관심이 많아요</p>
                </section>
                <section>
                    <p>Career</p>
                    <p>런바디(2022.06~)</p>
                    <p>수성 엔지니어링</p>
                </section>
                <section>
                    <p>Skills</p>
                    <p>Vue, JavaScript, Git, React, Next</p>
                </section>
            </div>
        </div>
    );
}

export default AboutPage;