import gql from 'graphql-tag'
import FRAGMENT_REPLY from './reply'

const FRAGMENT_NEWS = gql`
    fragment NewsParts on News {
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
				heat_score
				merit_score
				top_reply @type(name: "Reply") {
					...ReplyParts
				}
    }
    ${FRAGMENT_REPLY}
`
export default FRAGMENT_NEWS
