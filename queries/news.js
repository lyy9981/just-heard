import gql from 'graphql-tag'
import FRAGMENT_REPLY from './fragments/reply'

const NEWS = gql`
  query getNews($slug: String!, $id: ID!) {
    news(slug: $slug, id: $id)
    	@rest(
    		type: "News",
    		path: "news/{args.slug}/{args.id}/"
    	) {
    	id
      title
      publish_time
      canonical_link
      summary,
      merit_score,
      publisher @type(name: "Publisher") {
        id
        name
      }
      image @type(name: "Image") {
        id
        name
      }
      topics @type(name: "[Topic]") {
				id
				phrase @type(name: "Phrase") {
					id
					name	
				}
      }
      replies @type(name: "Reply") {
      	...ReplyParts
      	create_time
      }
      related @type(name: "[News]") {
				id
				title
				canonical_link
				has_replies
				publisher @type(name: "Publisher") {
					id
					name
				}
				image @type(name: "Image") {
          id
          name
        }
				publish_time
				top_reply @type(name: "Reply") {
					...ReplyParts
				}
    	}
    }
  }
  ${FRAGMENT_REPLY}
`
export default NEWS
