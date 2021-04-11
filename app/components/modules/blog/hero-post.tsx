import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { connect } from 'react-redux';
import { CryptoAction, DispatchType as CryptoDispatchType } from '../../../context/models/crypto'
import { cryptosFetchData } from '../../../context/creators/crypto.creators'
import { useEffect } from 'react';
import { Post } from '../../../models/post';

const HeroPost = ({ post, fetchData }: { post: Post, fetchData: () => void }) => {

  useEffect(() => {
    fetchData()
  })

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={post.title}
          src={post.coverImage}
          slug={post.slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <a className="hover:underline">{post.title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={post.date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{post.excerpt}</p>
          <Avatar name={post.author.name} picture={post.author.picture} />
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = (state: CryptoAction) => {
  return {
    cryptos: state.cryptos,
    hasErrored: state.hasErrored,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch: CryptoDispatchType) => {
  return {
    fetchData: () => dispatch(cryptosFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroPost);
