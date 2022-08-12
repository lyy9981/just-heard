import gql from 'graphql-tag'
import FRAGMENT_NEWS from './fragments/news'

const SEARCH_NEWS_ITEMS = gql`
  query searchNewsItems($slug: String!, $keyword: String!, $page: Int!) {
    search_news_items(slug: $slug, keyword: $keyword, page: $page)
    	@rest(
    		type: "News",
    		path: "news/search/{args.slug}/{args.keyword}/{args.page}/"
    	) {
				...NewsParts
    }
  }
  ${FRAGMENT_NEWS}
`
export default SEARCH_NEWS_ITEMS
