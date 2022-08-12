import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import LaunchIcon from '@material-ui/icons/Launch'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import { getTruncatedText, addZeroSpaceWidth } from '../utils/text'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
		justifyContent: 'center',
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.color.richBlack),
    backgroundColor: theme.palette.color.richBlack,
  },
  metaText: {
    display: 'flex',
    whiteSpace: 'pre-wrap',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  metaLink: {
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  metaIcon: {
    fontSize: '100%',
  },
  cardActions: {
    justifyContent: 'center',
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

const ReplyCard = ({ reply }) => {
  const classes = useStyles()
  const [willShowMore, setWillShowMore] = useState(false)
  const [truncatedText, setTruncatedText] = useState('')

  if (!reply) {
    return null
  }

  const { reddit_comment, twitter_status, create_time } = reply
  const ago = create_time ? moment.unix(create_time).fromNow() : null
  const authorName = reddit_comment ? reddit_comment?.author?.name : twitter_status?.user?.name
  const authorProfileImageUrl = reddit_comment ? reddit_comment?.author?.profile_image_url : twitter_status?.user?.profile_image_url
  const permalink = reddit_comment ? `https://www.reddit.com/${reddit_comment?.permalink}` : `https://twitter.com/${twitter_status?.permalink}`
  const permalinkTarget = reddit_comment ? `Reddit comment by ${authorName}` : 'Tweet by ${authorName}'
  const permalinkLabel = reddit_comment ? 'Reddit' : 'Twitter'
  const meta = (
    <Typography variant="body2" component="div" gutterBottom className={classes.metaText}>
      {reddit_comment && (
        <>
          <ArrowUpwardIcon className={classes.metaIcon} />
          <span> </span>
          <span>{reddit_comment?.upvote_count}</span>
          <span> · </span>
        </>
      )}
      {twitter_status && (
        <>
          <FavoriteIcon className={classes.metaIcon} />
          <span> </span>
          <span>{twitter_status?.favorite_count}</span>
          <span> · </span>
        </>
      )}
      <span>{ago}</span>
      <span> · </span>
      <Link href={permalink} target={permalinkTarget} className={classes.metaLink}>
        <span>{permalinkLabel }</span>
        <span> </span>
        <LaunchIcon className={classes.metaIcon} />
      </Link>
    </Typography>
  )
  const wordsLimit = 100
  const text = reddit_comment ? reddit_comment?.text : twitter_status?.text
  const displayText = willShowMore && truncatedText ? truncatedText : text

  const handleToggle = () => {
    setWillShowMore(!willShowMore)
  }

  useEffect(() => {
    const words = text.split(' ')

    if (words.length > wordsLimit) {
      setTruncatedText(getTruncatedText(text, wordsLimit))
      setWillShowMore(true)
    }
  }, [text])

  return (
    <Box>
      <Card variant="outlined" className={classes.card}>
        <CardHeader
          avatar={<Avatar alt={authorName} src={authorProfileImageUrl} className={classes.avatar} />}
          title={authorName}
          subheader={meta}
        />
        <CardContent>
          <Typography variant="body1" component="div">
            <ReactMarkdown>{ addZeroSpaceWidth(displayText) }</ReactMarkdown>
          </Typography>
        </CardContent>
        {truncatedText && (
          <>
            <Divider />
            <CardActions className={classes.cardActions}>
              <Button
                size="small"
                color="primary"
                onClick={() => { handleToggle() }}
                startIcon={willShowMore ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
              >
                {willShowMore ? 'Read More' : 'Read Less'}
              </Button>
            </CardActions>
          </>
        )}
      </Card>
    </Box>
  )
}

export default ReplyCard
