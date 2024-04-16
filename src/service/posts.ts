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
export function getPosts(): Promise<Post[]> {
    const filePath = path.join(process.cwd(), 'public/data', 'posts.json');
    return fs.readFile(filePath, 'utf-8')
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