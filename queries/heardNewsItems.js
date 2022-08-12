import gql from 'graphql-tag'
import FRAGMENT_NEWS from './fragments/news'

const HEARD_NEWS_ITEMS = gql`
  query getHeardNewsItems($slug: String!, $page: Int!) {
    heard_news_items(slug: $slug, page: $page)
    	@rest(
    		type: "News",
    		path: "news/heard/{args.slug}/{args.page}/"
    	) {
				...NewsParts
    }
  }
  ${FRAGMENT_NEWS}
`
export default HEARD_NEWS_ITEMS
