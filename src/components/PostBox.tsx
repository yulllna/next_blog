import React from 'react';
import Image from 'next/image';
// const imageUrl = '/images/posts/best-react-practices.png'
import { Post } from '../service/posts'
import Link from 'next/link';

interface PostProps {
    postData: Post;
}

const PostBox = ({ postData } : PostProps) => {
// console.log('aaa')
// console.log(postData)
    return (
        <article className='shadow-lg overflow-hidden rounded-md cursor-pointer hover:scale-105'>
            <Link  
            href={{
                pathname: `/posts/${postData.path}`,
                query: { postData: JSON.stringify(postData) }
            }}
            as={`/posts/${postData.path}`}>
                <Image src={`/images/posts/${postData.path}.png`} alt={postData.title} width={300} height={300} className='w-full'></Image>
                    <div className='p-2'>
                        <p className='text-right text-gray-400 text-xs'>{postData.date}</p>
                        <div className='text-center text-gray-700'>
                            <p className='font-bold w-full truncate '>{postData.title}</p>
                            <p className='w-full truncate'>{postData.description}</p>
                            <div className='text-xs bg-lime-200 rounded inline-block px-1'>
                                <span>{postData.category}</span>
                            </div>
                        </div>
                    </div>
            </Link>
        </article>
    );
};

export default PostBox;