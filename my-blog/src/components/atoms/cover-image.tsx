import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  slug?: string
}

const CoverImage = ({ title, slug }: Props) => {
  const image = (
    <img
      alt={`Cover Image for ${title}`}
      className={cn('shadow-sm', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
