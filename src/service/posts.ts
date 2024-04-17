import path from 'path';
// import { promises as fs } from 'fs';
import { readFile } from 'fs/promises';

export type Post = {
    title: string,
    description: string,
    date: string,
    category: string,
    path: string,
    featured: boolean
}

export type PostData = Post & { content: string }

export function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'public/data', 'posts.json');
    return readFile(filePath, 'utf-8')
    .then<Post[]>(JSON.parse)
    .then((posts) => posts.sort((a, b) => (a.date > b.date ? -1 : 1)));
}

export async function getFeaturedPosts(featured: boolean):Promise<Post[]> {
    const posts = await getPosts();
    return posts.filter((post) => post.featured === featured)
}

export async function getTargetPost(targetPath: string):Promise<Post> {
    const posts = await getPosts();
    return posts.filter((post) => post.path === targetPath)[0]
}

export async function getPostData(fileName: string): Promise<PostData> {
    const filePath = path.join(process.cwd(), 'public/data', 'posts', `${fileName}.md`);
    const metadata = await getPosts() //
      .then((posts) => posts.find((post) => post.path === fileName));
    if (!metadata)
      throw new Error(`${fileName}에 해당하는 포스트를 찾을 수 없음`);
  
    const content = await readFile(filePath, 'utf-8');
    return { ...metadata, content };
  }