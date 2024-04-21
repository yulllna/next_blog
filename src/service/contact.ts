import { EmailData } from './email'

export async function sendContactEmail(email: EmailData) {
    // api라우트에 이메일 전송을 위한 요청을 보냄
    const response =  await fetch('./api/contact', {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();
    if(!response.ok) {
        throw new Error(data.message || '서버 요청에 실패함 😔')
    }
    return data;
};
