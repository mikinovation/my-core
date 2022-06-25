import Container from '../components/atoms/container'
import MoreStories from '../components/organisms/more-stories'
import Intro from '../components/organisms/intro'
import Layout from '../components/atoms/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import Post from '../types/post'
import BlogArticleCard from "../components/organisms/blog-article-card";

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          <hr className="my-6"/>
          <section>
            <h2 className="text-3xl font-bold tracking-tighter leading-tight md:pr-8">
              ブログ
            </h2>
            {heroPost &&
                <BlogArticleCard
                    title={heroPost.title}
                    tags={heroPost.tags}
                    date={heroPost.date}
                    content={heroPost.content}
                    slug={heroPost.slug}
                />}
          </section>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'tags'
  ])

  return {
    props: { allPosts },
  }
}
