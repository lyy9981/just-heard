import gql from 'graphql-tag'

const SEARCH_TOPICS = gql`
  query searchTopics($slug: String!) {
    search_topics(slug: $slug, keyword: $keyword)
    	@rest(
    		type: "Topic",
    		path: "topics/search/{args.slug}/{args.keyword}"
    	) {
    	id
      phrase @type(name: "Phrase") {
				id
				name	
    	}
    }
  }
`
export default SEARCH_TOPICS
