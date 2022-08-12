import React from 'react'
import removeMarkdown from 'remove-markdown'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import Link from 'next/link'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import HotIcon from '@material-ui/icons/Whatshot'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ReplyIcon from '@material-ui/icons/Reply'
import { useLocale } from '../contexts/localeProvider'
import { getTruncatedText } from '../utils/text'
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  avatar: {
    width: '16px',
    height: '16px',
    color: theme.palette.getContrastText(theme.palette.color.richBlack),
    backgroundColor: theme.palette.color.richBlack,
  },
  metaText: {
    display: 'flex',
    whiteSpace: 'pre-wrap',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  metaIcon: {
    fontSize: '100%',
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

const HotReplyCard = ({ item }) => {
  const { citySlug } = useLocale()
  const classes = useStyles()

  if (!item) {
    return null
  }

  const { reddit_comment, twitter_status, create_time, heat_score, merit_score, news } = item
  const ago = create_time ? moment.unix(create_time).fromNow() : null

  const author_name = reddit_comment?.author?.name || twitter_status?.user?.name
  const profile_image_url = reddit_comment?.author?.profile_image_url || twitter_status?.user?.profile_image_url
  const text = reddit_comment?.text || twitter_status?.text
  const internalLink = `/${citySlug}/news/${news?.[0]?.id}`
  const wordsLimit = 30
  const displayText = getTruncatedText(removeMarkdown(text), wordsLimit)
  const displayNewsTitle = getTruncatedText(news?.[0]?.title, 20)

  return (
    <Box mb={2}>
      <Card variant="outlined" className={classes.card}>
        <Link href="/[slug]/news/[id]" as={internalLink} passHref>
          <CardActionArea component="a">
            <CardContent>
              <Typography variant="body2" component="div" gutterBottom className={classes.metaText}>
                <Avatar alt={author_name} src={profile_image_url} className={classes.avatar} />
                <span> </span>
                <span>{ author_name }</span>
                <span> · </span>
                {heat_score > 0 && (
                  <>
                    <HotIcon className={classes.metaIcon} />
                    <span> </span>
                    <span>{ heat_score?.toLocaleString() }</span>
                    <span> · </span>
                  </>
                )}
                <AccessTimeIcon className={classes.metaIcon} />
                <span> </span>
                <span>{ ago }</span>
              </Typography>
              <Typography variant="h6" component="div" className={classes.title}>
                { displayText }
              </Typography>
              <Typography variant="body2" component="div" className={classes.metaText}>
                <ReplyIcon className={classes.subheaderIcon} className={classes.metaIcon} />
                <span> </span>
                <span>{ displayNewsTitle }</span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </Box>
  )
}

export default HotReplyCard

