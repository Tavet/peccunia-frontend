import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import { connect } from 'react-redux';
import { CryptoAction, DispatchType as CryptoDispatchType } from '../../context/models/crypto'
import { cryptosFetchData } from '../../context/creators/crypto.creators'
import { useEffect } from 'react';

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  fetchData
}) => {

  useEffect(() => {
    fetchData()
  })

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={620}
          width={1240}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
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
