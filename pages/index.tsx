// Templates
//import HomePage from '../app/components/templates/homepage'
import Maintenance from '../app/components/templates/maintenance'

// Lib
import { getAllPosts } from '../app/lib/api'



export default function Index() {
  return (
      <Maintenance />
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
