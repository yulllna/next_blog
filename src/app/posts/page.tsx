import React from 'react';
import { getPosts } from '@/service/posts';
import Posts from '@/components/Posts';
import FilterablePosts from '@/components/FilterablePosts';

const PostsPage = async () => {
    const allPosts = await getPosts();
    const categories = [...new Set(allPosts.map(post => post.category))]

    return (
        <div className='p-4 pt-8'>
            <FilterablePosts posts={allPosts} categories={categories} />
        </div>
    );
};

export default PostsPage;