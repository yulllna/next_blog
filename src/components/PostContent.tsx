import React from 'react';
import { MdOutlineDateRange } from "react-icons/md";
import PostMarkdownArea from './PostMarkdownArea';
import { PostData } from '../service/posts'

type Props = {
    post: PostData
}
const PostContent = ({ post }: Props) => {
    return (
        <div className="p-4 bg-gray-100 rounded-b-lg">
            <p className="text-right text-sm pt-4 flex justify-end items-center text-gray-500">
              <MdOutlineDateRange className="text-gray-500" />
              <span>{post.date}</span>
            </p>
            <p className="font-bold text-4xl pb-2">{post.title}</p>
            <p className="text-gray-800">{post.description}</p>
            <hr className="w-1/4 h-1 my-6 bg-blue-800" />
            <PostMarkdownArea content={post.content} />
          </div>
    );
};

export default PostContent;