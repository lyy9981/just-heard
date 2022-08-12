import React from 'react'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import { withApollo } from '../../../lib/apollo'
import App from '../../../components/App'
import TOPIC from '../../../queries/topic'
import NewsCardSkeleton from '../../../components/skeleton/NewsCardSkeleton'
import NewsCard from '../../../components/NewsCard'
import TrendingList from '../../../components/containers/TrendingListContainer'
import { capitalizeFirstLetter } from '../../../utils/text'
import { useLocale } from '../../../contexts/localeProvider'
import { useMobile } from '../../../hooks/mediaQueries'
import withLocale from '../../../components/hoc/withLocale'

const useStyles = makeStyles((theme) => ({
  gridItemHeader: {
    margin: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      margin: 0,
    },
  },
}))

const TopicPage = () => {
  const classes = useStyles()
  const { cityBrand } = useLocale()
  const isMobile = useMobile()
  const router = useRouter()
  const { id } = router.query

  const { data, loading } = useQuery(TOPIC, {
    skip: !id,

    variables: {
      id,
    },
  })

  const topicName = capitalizeFirstLetter(data?.topic?.phrase?.name)

  return (
    <App>
      <Head>
        <title>{topicName} - Topic - {cityBrand}</title>
      </Head>
      <Grid container spacing={isMobile ? 0 : 4}>
        <Hidden mdDown>
          <Grid item xs={12} md={12} lg={1} xl={2}></Grid>
        </Hidden>
        <Grid item xs={12} lg={10} xl={8} classes={{
          item: classes.gridItemHeader,
        }}>
          <Typography variant="overline" component="div">Topic</Typography>
          <Typography variant="h6" component="h3">{topicName}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={isMobile ? 0 : 4}>
        <Hidden mdDown>
          <Grid item xs={12} md={12} lg={1} xl={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={8} lg={7} xl={6}>
          {loading && !data && <NewsCardSkeleton></NewsCardSkeleton>}
          {data?.topic?.news_items && (
            <div>
              {data.topic.news_items.map((item) => <NewsCard key={item.id} item={item} />)}
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

export default withApollo({ ssr: true })(withLocale(TopicPage))