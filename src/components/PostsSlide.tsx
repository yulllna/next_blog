import React from 'react';
import PostBox from './PostBox';
import { Post } from '../service/posts'
import MultiCarousel from './MultiCarousel';

interface PostsProps {
    posts: Post[] | Post;
}

const PostsSlide = ({ posts }: PostsProps) => {
    // 배열이 아닌 경우, 단일 객체를 포함한 배열로 변환
    const postArray = Array.isArray(posts) ? posts : [posts];
    

    return (
        // <div className='overflow-scroll'>
        //     <ul className='flex flex-nowrap gap-x-4 w-full'>
                <MultiCarousel>
                    {postArray.map((item, index) => (
                        <div className='w-full' key={index}>
                            <PostBox postData={item} />
                        </div>
                    ))}
                </MultiCarousel>
        //     </ul>
        // </div>
    );
};

export default PostsSlide;