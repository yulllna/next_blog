import React from 'react';
import { getPosts } from '@/service/posts';
import Posts from '@/components/Posts';
import FilterablePosts from '@/components/FilterablePosts';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'All Posts',
    description: '포스트 관련 글'
  }

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