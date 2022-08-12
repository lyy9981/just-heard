import { ApolloClient, InMemoryCache } from '@apollo/client'
import { RestLink } from 'apollo-link-rest'

export default function createApolloClient(initialState, ctx) {
  const restLink = new RestLink({ uri: process.env.NEXT_PUBLIC_API })

  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: restLink,
    cache: new InMemoryCache().restore(initialState),
  })
}
