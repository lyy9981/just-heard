import gql from 'graphql-tag'

const COUNTRY_CITIES = gql`
  query getCountryCities {
    country_cities
    	@rest(
    		type: "Country",
    		path: "country-cities"
    	) {
    	  id
    	  name
				cities @type(name: "City") {
					id
					name
					slug
				}
    }
  }
`
export default COUNTRY_CITIES
