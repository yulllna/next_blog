import React from 'react';
import PostBox from './PostBox';
import { Post } from '../../service/posts'

interface PostsProps {
    posts: Post[] | Post;
}

const PostsSlide = ({ posts }: PostsProps) => {
    // 배열이 아닌 경우, 단일 객체를 포함한 배열로 변환
    const postArray = Array.isArray(posts) ? posts : [posts];
    

    return (
        <div className='overflow-scroll'>
            <ul className='flex flex-nowrap gap-x-4 w-full'>
            {postArray.map((item, index) => (
                    <li className='w-1/2' key={index}>
                        <PostBox postData={item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsSlide;