import Container from '../app/components/blog/container'
import MoreStories from '../app/components/blog/more-stories'
import HeroPost from '../app/components/blog/hero-post'
import Intro from '../app/components/blog/intro'
import Layout from '../app/components/blog/layout'
import { getAllPosts } from '../app/lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../app/lib/constants'

export default function Index({ allPosts }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>{SITE_NAME} - Cryptocurrency Blog | Noticias | Análisis</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
