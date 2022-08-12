import React from 'react'
import Head from 'next/head'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Card from '@material-ui/core/Card'
import Link from '@material-ui/core/Link'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import LinkIcon from '@material-ui/icons/Link'
import GradeIcon from '@material-ui/icons/Grade'
import ScheduleIcon from '@material-ui/icons/Schedule'
import NEWS from '../queries/news'
import SecondaryItemList from './SecondaryItemList'
import TopicsList from './TopicsList'
import NewsReplies from './NewsReplies';
import { useLocale } from '../contexts/localeProvider'
import { useMobile } from '../hooks/mediaQueries'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  externalLinkButton: {
    textTransform: 'inherit',
  },
  metaButton: {
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(1),
    textTransform: 'inherit',
    cursor: 'default',
  },
  sideSpace: {
    height: '32px',
  },
  gridItemHeader: {
    paddingBottom: 0,
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(2),
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
  contentCard: {
    marginBottom: theme.spacing(4),
    padding: theme.spacing(2),
    backgroundColor: 'white',
    borderTop: `1px solid ${theme.palette.border.light}`,
    borderBottom: `1px solid ${theme.palette.border.light}`,
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(1),
      padding: 0,
      backgroundColor: 'inherit',
      borderTop: 'none',
      borderBottom: 'none',
    },
  },
  thumbnail: {
    float: 'right',
    width: 75,
    height: 75,
    marginTop: '5px',
    marginLeft: theme.spacing(2),
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  thumbnailImg: {
    width: 100,
  },
}))

const News = ({ id }) => {
  const { citySlug, cityBrand } = useLocale()
  const isMobile = useMobile()
  const classes = useStyles()
  const { data } = useQuery(NEWS, {
    skip: !id || !citySlug,

    variables: {
      slug: citySlug,
      id,
    },
  })

  if (!data?.news) {
    return null
  }

  const { title, publisher, publish_time, summary, canonical_link, merit_score, topics, replies, related, image } = data.news
  const ago = publish_time ? moment.unix(publish_time).fromNow() : null

  return (
    <div className={classes.root}>
      <Head>
        <title>{ title } - { cityBrand }</title>
      </Head>
      <Grid container className={classes.contentCard} spacing={isMobile ? 0 : 4}>
        <Hidden mdDown>
          <Grid item xs={12} md={12} lg={1} xl={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={8} lg={7} xl={6}>
          <Box>
            {topics.length > 0 && (
              <TopicsList topics={topics} />
            )}
          </Box>
          <Box mb={2}>
            <Typography variant="h4" component="h1">
              { title }
            </Typography>
          </Box>
          <Box mb={1}>
            {image?.name && (
              <span className={classes.thumbnail}>
                <img className={classes.thumbnailImg} src={`https://example.amazonaws.com/${image.name}`} />
              </span>
            )}
            <Typography variant="body1">
              { summary }
            </Typography>
          </Box>
          <Box mb={1}>
            <Tooltip title={`Read full article on ${publisher?.name}`}>
              <Button
                size="small"
                color="primary"
                startIcon={<LinkIcon />}
                classes={{
                  root: classes.externalLinkButton,
                }}
              >
                <Link href={canonical_link} target={publisher?.name}>{publisher?.name}</Link>
              </Button>
            </Tooltip>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3} xl={2}>
          <Grid container justify="flex-end">
            <div className={classes.meta}>
              <Tooltip title="Publish date">
                <Button
                  size="small"
                  startIcon={<ScheduleIcon />}
                  classes={{
                    root: classes.metaButton,
                  }}
                  disableRipple
                >{ago}</Button>
              </Tooltip>
              <Tooltip title="Popularity score">
                <Button
                  size="small"
                  startIcon={<GradeIcon />}
                  classes={{
                    root: classes.metaButton,
                  }}
                  disableRipple
                >{ merit_score?.toLocaleString() }</Button>
              </Tooltip>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={isMobile ? 0 : 4}>
        <Hidden xsDown>
          <Grid item xs={12} md={12} lg={1} xl={2}></Grid>
        </Hidden>
        <Grid item xs={12} md={8} lg={7} xl={6}>
          {replies?.length > 0 && <NewsReplies replies={replies} />}
        </Grid>
        <Grid item xs={12} md={4} lg={3} xl={2}>
          {related?.length > 0 && (
            <Grid container spacing={isMobile ? 0 : 2}>
              <Hidden smDown>
                <Grid item xs={12}>
                  <div className={classes.sideSpace} />
                </Grid>
              </Hidden>
              <Grid item xs={12}>
                <Card variant="outlined" className={classes.card}>
                  <Box ml={2} mt={2}>
                    <Typography variant="h6" component="h3">Related news</Typography>
                  </Box>
                  <SecondaryItemList items={related} isExpanded={true} />
                </Card>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  )
}

export default News
