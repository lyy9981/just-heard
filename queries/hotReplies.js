import gql from 'graphql-tag'
import FRAGMENT_REPLY from './fragments/reply'

const HOT_REPLIES = gql`
  query getHotReplies($slug: String!, $page: Int!) {
    hot_replies(slug: $slug, page: $page)
    	@rest(
    		type: "Reply",
    		path: "replies/hot/{args.slug}/{args.page}/"
    	) {
				...ReplyParts
				heat_score
				news @type(name: "News") {
					id
					title
				}
    }
  }
  ${FRAGMENT_REPLY}
`
export default HOT_REPLIES
