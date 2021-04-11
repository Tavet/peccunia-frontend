// Elements
import Container from '../../modules/blog/container'
import MoreStories from '../../modules/blog/more-stories'
import HeroPost from '../../modules/blog/hero-post'
import Intro from '../../modules/blog/intro'
import Layout from '../../modules/blog/layout'

// Lib
import { SITE_NAME } from '../../../lib/constants'

// Models
import { Post } from "../../../models/post"

// Next
import Head from 'next/head'

// SCSS
import "./Blog.module.scss";


const Blog = ({ allPosts }: { allPosts: Post[] }) => {
    const heroPost: Post = allPosts[0]
    const morePosts = allPosts.slice(1)
    return (
        <Layout preview={false}>
            <Head>
                <title>{SITE_NAME} - Cryptocurrency Blog | Análisis</title>
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
    );
}

export default Blog;
