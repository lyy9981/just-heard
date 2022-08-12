import gql from 'graphql-tag'

const TOPICS_TRENDING = gql`
  query getTopicsTrending($slug: String!) {
    topics(slug: $slug)
    	@rest(
    		type: "[Topic]",
    		path: "topics/trending/{args.slug}/"
    	) {
    	id
      phrase @type(name: "Phrase") {
				id
				name	
    	}
    }
  }
`
export default TOPICS_TRENDING
