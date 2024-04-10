import React from 'react';
import PostBox from './PostBox';
import { Post } from '../../service/posts'

interface PostsProps {
    posts: Post[];
}

const Posts = ({ posts } : PostsProps) => {
    return (
        <ul className='flex flex-wrap'>
            {posts.map((item, index) => {
                return <li className='w-1/3 pr-4 pb-4' key={index}>
                    <PostBox postData={item}/>
                </li>
            })}
        </ul>
    );
};

export default Posts;