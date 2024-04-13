import React from 'react';
import { getPosts } from '@/service/posts';
import Posts from '@/components/Posts';

const PostsPage = async () => {
    const allPosts = await getPosts()

    return (
        <div className='p-4 pt-8'>
            <Posts posts={allPosts} />
        </div>
    );
};

export default PostsPage;