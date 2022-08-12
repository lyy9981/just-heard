import gql from 'graphql-tag'

const FRAGMENT_REPLY = gql`
    fragment ReplyParts on Reply {
					id
					create_time
					merit_score
					twitter_status @type(name: "TwitterStatus") {
						id
						text
						permalink
						favorite_count
						user @type(name: "TwitterUser") {
							name
							profile_image_url
      			}
					}
					reddit_comment @type(name: "RedditComment") {
						id
						text
						permalink
						upvote_count
						author @type(name: "Redditor") {
							name
							profile_image_url
						}
					}
    }
`
export default FRAGMENT_REPLY
