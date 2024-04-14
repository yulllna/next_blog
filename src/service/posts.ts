import path from 'path';
import { promises as fs } from 'fs';

export type Post = {
    title: string,
    description: string,
    date: string,
    category: string,
    path: string,
    featured: boolean
}
export async function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'public/data', 'posts.json');
    const data = await fs.readFile(filePath, 'utf-8')
    return JSON.parse(data);
}

export async function getFeaturedPosts(featured: boolean):Promise<Post[]> {
    const posts = await getPosts();
    return posts.filter((post) => post.featured === featured)
}

export async function getTargetPost(targetPath: string):Promise<Post> {
    const posts = await getPosts();
    return posts.filter((post) => post.path === targetPath)[0]
}