// import { notFound, redirect } from 'next/navigation';
import AdjacentPostCard from "@/components/AdjacentPostCard";
import PostContent from "@/components/PostContent";
import { getPostData } from "@/service/posts";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `포스트 제목: ${params.slug}`,
  }
}

export default async function postsPage({ params: {slug} }: Props) {
  const post = await getPostData(slug);
  const { title, path, next, prev } = post;
  
  return (
    <>
        <div className="p-6 rounded-md overflow-hidden">
          <Image src={`/images/posts/${path}.png`} alt={title} width={300} height={300} className='w-full h-[300px] object-cover rounded-t-lg' />
          <PostContent post={post} />
          <section className="flex shadow-md">
            {prev && <AdjacentPostCard post={prev} type='prev' />}
            {next && <AdjacentPostCard post={next} type='next' />}
          </section>
        </div>
    </>
  );
} 

// 미리 특정 경로의 정적 페이지를 만들고 싶다면
// export async function generateStaticParams() {
//   // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임(SSG)
//   const products = await getProducts();
//   return products.map(product => ({
//     slug: product.id,
//   }))
// }