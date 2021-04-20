// Templates
import HomePage from '../app/components/templates/homepage'

// Lib
import { getAllPosts } from '../app/lib/api'

// Models
//import { Post } from "../app/models/post"


export default function Index() {
  return (
      <HomePage />
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
