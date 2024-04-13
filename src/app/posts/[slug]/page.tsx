// import { notFound, redirect } from 'next/navigation';
import PostMarkdownArea from "@/components/PostMarkdownArea";
import { getTargetPost } from "@/service/posts";
import Image from "next/image";
import { MdOutlineDateRange } from "react-icons/md";

type Props = {
  params: {
    slug: String;
  }
}

export function generateMetadata({ params }: Props) {
  return {
    title: `포스트 제목: ${params.slug}`,
  }
}

export default async function postsPage({ params: {slug} }: Props) {
  const post = await getTargetPost(slug);
  
  return (
    <>
        <div className="p-6 rounded-md overflow-hidden">
          <Image src={`/images/posts/${post.path}.png`} alt={post.title} width={300} height={300} className='w-full h-[300px] object-cover rounded-t-lg' />
          <div className="p-4 bg-gray-100 rounded-b-lg">
            <p className="text-right text-sm pt-4 flex justify-end items-center text-gray-500">
              <MdOutlineDateRange className="text-gray-500" />
              <span>{post.date}</span>
            </p>
            <p className="font-bold text-4xl pb-2">{post.title}</p>
            <p className="text-gray-800">{post.description}</p>
            <hr className="w-1/4 h-1 my-6 bg-blue-800" />
            <PostMarkdownArea path={post.path} />
          </div>
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