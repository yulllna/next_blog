import React from 'react';
import PostBox from './PostBox';
import { Post } from '../service/posts'

interface PostsProps {
    posts: Post[];
}

const Posts = ({ posts } : PostsProps) => {
    return (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {posts.map((item) => {
                return <li className='w-full pb-4' key={item.path}>
                    <PostBox postData={item} key={item.path}/>
                </li>
            })}
        </ul>
    );
};

export default Posts;