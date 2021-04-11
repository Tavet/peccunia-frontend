import Container from '../app/components/blog/container'
import MoreStories from '../app/components/blog/more-stories'
import HeroPost from '../app/components/blog/hero-post'
import Intro from '../app/components/blog/intro'
import Layout from '../app/components/blog/layout'
import { getAllPosts } from '../app/lib/api'
import Head from 'next/head'
import { SITE_NAME } from '../app/lib/constants'
import { Provider } from 'react-redux'
import store from './../app/context/store'
import { Post } from "../app/models/Post"

export default function Index({ allPosts }: { allPosts: Post[] }) {
  const heroPost: Post = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Provider store={store}>
      <Layout preview={false}>
        <Head>
          <title>{SITE_NAME} - Cryptocurrency Blog | Noticias | Análisis</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              post={heroPost}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </Provider>
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
