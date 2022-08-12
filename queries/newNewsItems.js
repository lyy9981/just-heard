import gql from 'graphql-tag'
import FRAGMENT_NEWS from './fragments/news'

const NEW_NEWS_ITEMS = gql`
  query getNewNewsItems($slug: String!, $page: Int!) {
    new_news_items(slug: $slug, page: $page)
    	@rest(
    		type: "News",
    		path: "news/new/{args.slug}/{args.page}/"
    	) {
				...NewsParts
    }
  }
  ${FRAGMENT_NEWS}
`
export default NEW_NEWS_ITEMS
