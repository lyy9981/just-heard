import React from 'react'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { withApollo } from '../../../lib/apollo'
import App from '../../../components/App'
import NewsCard from '../../../components/NewsCard'
import NewsCardSkeleton from '../../../components/skeleton/NewsCardSkeleton'
import TrendingList from '../../../components/containers/TrendingListContainer'
import { useLocale } from '../../../contexts/localeProvider'
import { useMobile } from '../../../hooks/mediaQueries'
import withLocale from '../../../components/hoc/withLocale'
import NEW_NEWS_ITEMS from '../../../queries/newNewsItems'

const SlugPage = () => {
  const { citySlug, cityBrand } = useLocale()
  const isMobile = useMobile()

  const { data, loading } = useQuery(NEW_NEWS_ITEMS, {
    skip: !citySlug,

    variables: {
      slug: citySlug,
      page: 0,
    },
  })

  const newNewsItems = data?.new_news_items

  return (
    <App>
      <Head>
        <title>Latest - { cityBrand }</title>
      </Head>
      <Grid container spacing={isMobile ? 0 : 4}>
        <Hidden mdDown>
          <Grid item xs={12} md={12} lg={1} xl={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={8} lg={7} xl={6}>
          {loading && !newNewsItems && <NewsCardSkeleton></NewsCardSkeleton>}
          {newNewsItems && (
            <div>
              {newNewsItems.map((item) => <NewsCard key={item.id} item={item} />)}
            </div>
          )}
        </Grid>
        <Grid item xs={12} md={4} lg={3} xl={2}>
          <TrendingList />
        </Grid>
      </Grid>
    </App>
  )
}

export default withApollo({ ssr: true })(withLocale(SlugPage))