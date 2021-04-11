// Templates
import HomePage from '../app/components/templates/homepage'

// Lib
import { getAllPosts } from '../app/lib/api'

// Models
import { Post } from "../app/models/post"

// Redux
import { Provider } from 'react-redux'
import store from './../app/context/store'

export default function Index({ allPosts }: { allPosts: Post[] }) {
  return (
    <Provider store={store}>
      <HomePage />
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
