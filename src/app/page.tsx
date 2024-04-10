// import Image from "next/image";
import Introduce from './components/Introduce';
import Posts from './components/Posts';
import PostsSlide from './components/PostsSlide';
import { getFeaturedPosts } from '@/service/posts';

export default async function Home() {
  const sectionTitle = 'font-bold text-xl text-gray-700 mb-2'
  const featuredPosts = await getFeaturedPosts(true)
  const youMayListPosts = await getFeaturedPosts(false)

  return (
  <>
    <Introduce/>
    <section className='px-12 pb-10'>
      <p className={sectionTitle}>Featured Posts</p>
      <Posts posts={featuredPosts} />
    </section>
    <section  className='px-12'>
      <p className={sectionTitle}>You may like</p>
      <PostsSlide posts={youMayListPosts} />
    </section>
  </>
  );
}
