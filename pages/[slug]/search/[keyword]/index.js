import React from 'react'
import Head from 'next/head'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { withApollo } from '../../../../lib/apollo'
import App from '../../../../components/App'
import NewsCard from '../../../../components/NewsCard'
import { useLocale } from '../../../../contexts/localeProvider'
import { useMobile } from '../../../../hooks/mediaQueries'
import SEARCH_NEWS_ITEMS from '../../../../queries/searchNewsItems'
import TrendingList from '../../../../components/containers/TrendingListContainer'
import NewsCardSkeleton from '../../../../components/skeleton/NewsCardSkeleton'
import withLocale from '../../../../components/hoc/withLocale'
import { capitalizeFirstLetter } from '../../../../utils/text'
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  gridItemHeader: {
    margin: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      margin: 0,
    },
  },
  card: {
    borderColor: theme.palette.border.light,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      borderColor: theme.palette.divider,
      borderLeftWidth: '1px',
      borderRightWidth: '1px',
      borderRadius: '4px',
    },
  },
}))

const SearchPage = () => {
  const isMobile = useMobile()
  const classes = useStyles()
  const { citySlug, cityBrand } = useLocale()
  const router = useRouter()
  const { keyword } = router.query

  const { data, loading } = useQuery(SEARCH_NEWS_ITEMS, {
    skip: !citySlug || !keyword,

    variables: {
      slug: citySlug,
      keyword: keyword,
      page: 0,
    },
  })

  const newsItems = data?.search_news_items
  const keywordName = capitalizeFirstLetter(keyword)

  return (
    <App>
      <Head>
        <title>{ `${keywordName} - Search - ${cityBrand}` }</title>
      </Head>
      <Grid container spacing={isMobile ? 0 : 4}>
        <Hidden mdDown>
          <Grid item xs={12} md={12} lg={1} xl={2}></Grid>
        </Hidden>
        <Grid item xs={12} lg={10} xl={8} classes={{
          item: classes.gridItemHeader,
        }}>
          <Typography variant="overline" component="div">Search</Typography>
          <Typography variant="h6" component="h3">{keywordName}</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={isMobile ? 0 : 4}>
        <Hidden mdDown>
          <Grid item xs={12} md={12} lg={1} xl={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={8} lg={7} xl={6}>
          {loading && <NewsCardSkeleton></NewsCardSkeleton>}
          {!loading && newsItems?.length > 0 && (
            <div>
              {newsItems.map((item) => <NewsCard key={item.id} item={item} />)}
            </div>
          )}
          {!loading && newsItems?.length === 0 && (
            <Box mb={2}>
              <Card variant="outlined" classes={{
                root: classes.card
              }}>
                <Box p={2}>
                  <p>Your search - <b>{keywordName}</b> - did not match any articles.</p>
                  <p>Suggestions:</p>
                  <ul>
                    <li>Make sure that all words are spelled correctly.</li>
                    <li>Try different keywords.</li>
                    <li>Try more general keywords.</li>
                  </ul>
                </Box>
              </Card>
            </Box>
          )}
        </Grid>
        <Grid item xs={12} md={4} lg={3} xl={2}>
          <TrendingList />
        </Grid>
      </Grid>
    </App>
  )
}

export default withApollo({ ssr: false })(withLocale(SearchPage))