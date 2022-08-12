import React from 'react'
import { useRouter } from 'next/router'
import { withApollo } from '../../../lib/apollo'
import App from '../../../components/App'
import News from '../../../components/News'
import withLocale from '../../../components/hoc/withLocale'

const NewsPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <App>
      <News id={id} />
    </App>
  )
}

export default withApollo({ ssr: true })(withLocale(NewsPage))