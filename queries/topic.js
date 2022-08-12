import gql from 'graphql-tag'
import FRAGMENT_NEWS from './fragments/news'

const TOPIC = gql`
  query getTopic($id: ID!) {
    topic(id: $id)
    	@rest(
    		type: "Topic",
    		path: "topic/{args.id}/"
    	) {
    	id
      news_items @type(name: "News") {
				...NewsParts
    	}
    	phrase @type(name: "Phrase") {
				id
				name	
    	}
    }
  }
  ${FRAGMENT_NEWS}
`
export default TOPIC
