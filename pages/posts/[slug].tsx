// Next.js
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

// Modules
import Container from '../../app/components/modules/blog/container'
import PostBody from '../../app/components/modules/blog/post-body'
import Header from '../../app/components/modules/blog/header'
import PostHeader from '../../app/components/modules/blog/post-header'
import Layout from '../../app/components/modules/blog/layout'
import PostTitle from '../../app/components/modules/blog/post-title'

// Lib
import { getPostBySlug, getAllPosts } from '../../app/lib/api'
import markdownToHtml from '../../app/lib/markdownToHtml'
import { CMS_NAME } from '../../app/lib/constants'

export default function Post({ post, preview }: { post: any, preview: boolean }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }: { params: any }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
