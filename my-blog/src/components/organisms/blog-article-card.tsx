import Link from 'next/link'
import Image from 'next/image'
import Me from '../../../public/assets/blog/my-icon.jpeg'

export interface Props {
    date: string
    tags: string[]
    title: string
    content: string
    slug: string
}

const BlogArticleCard = ({title, date, slug, tags}: Props) => {
    return (
        <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800" style={{cursor: 'auto'}}>
            <div className="flex items-center justify-between">
                <span className="text-sm font-light text-gray-600 dark:text-gray-400">{date}</span>
                {tags.map((tag) => <a key={tag} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">{tag}</a>)}
            </div>
            <div className="mt-2">
                <Link href={`posts/${slug}`}>
                <a className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{title}</a>
                </Link>
                </div>
            <div className="flex items-center justify-between mt-4">
                <div className="flex items-center relative">
                    <Image src={Me} alt="Author Photo" width={30} height={30} className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" />
                    <span className="font-bold text-gray-700 dark:text-gray-200 ml-2">Mikihiro Saito</span>
                </div>
            </div>
        </div>
    )
}

export default BlogArticleCard