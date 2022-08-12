import gql from 'graphql-tag'
import FRAGMENT_NEWS from './fragments/news'

const HOT_NEWS_ITEMS = gql`
  query getHotNewsItems($slug: String!, $page: Int!) {
    hot_news_items(slug: $slug, page: $page)
    	@rest(
    		type: "News",
    		path: "news/hot/{args.slug}/{args.page}/"
    	) {
				...NewsParts
    }
  }
  ${FRAGMENT_NEWS}
`
export default HOT_NEWS_ITEMS
