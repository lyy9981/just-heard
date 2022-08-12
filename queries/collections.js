import gql from 'graphql-tag'
import FRAGMENT_NEWS from './fragments/news';

const COLLECTIONS = gql`
  query getCollections($slug: String!) {
    collections(slug: $slug)
    	@rest(
    		type: "[Collection]",
    		path: "collections/{args.slug}/"
    	) {
      news_items @type(name: "[News]") {
				...NewsParts
    	}
      phrases
    }
  }
  ${FRAGMENT_NEWS}
`
export default COLLECTIONS
