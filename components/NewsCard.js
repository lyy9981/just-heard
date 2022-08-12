import React from 'react'
import he from 'he'
import TextTruncate from 'react-text-truncate'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import moment from 'moment'
import { deepOrange } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import { useLocale } from '../contexts/localeProvider'
import { getTruncatedText, removeMarkdownAndUrl } from '../utils/text'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
		justifyContent: 'center',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
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
  cardHeader: {
    overflow: 'hidden',
  },
  thumbnail: {
    float: 'right',
    width: 75,
    height: 75,
    marginLeft: theme.spacing(2),
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  thumbnailImg: {
    width: 100,
  },
  box: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2),
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
  topReply: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}))

const NewsCard = ({ item }) => {
  const { citySlug } = useLocale()
  const classes = useStyles()

  if (!item || !citySlug) {
    return null
  }

  const { id, title, has_replies, canonical_link, publisher, publish_time, top_reply, heat_score, image } = item
  const ago = publish_time ? moment.unix(publish_time).fromNow() : null
  const meta = (
    <Typography variant="body2" component="div" gutterBottom className={classes.metaText}>
      {heat_score > 0 && (
        <>
          <WhatshotIcon className={classes.metaIcon} />
          <span> </span>
          <span>{heat_score?.toLocaleString()}</span>
          <span> · </span>
        </>
      )}
      {`${publisher?.name} · ${ago}`}
    </Typography>
  )
  const topReply = top_reply?.twitter_status || top_reply?.reddit_comment || null
  const wordsLimit = 30
  const displayText = getTruncatedText(he.decode(removeMarkdownAndUrl(topReply?.text)), wordsLimit)
  const internalLink = `/${citySlug}/news/${id}`

  const SharedCardHeader = () => {
    return (
      <Box p={2} className={classes.cardHeader}>
        {topReply && image?.name && (
          <span className={classes.thumbnail}>
            <img className={classes.thumbnailImg} src={`https://example.amazonaws.com/${image.name}`} />
          </span>
        )}
        <Typography variant="h6" component="h3">{title}</Typography>
        { meta }
        {topReply && (
          <div className={classes.topReply}>
            <Avatar alt={topReply.user?.name || topReply.author?.name} src={topReply.user?.profile_image_url || topReply.author?.profile_image_url} className={classes.avatar} />
            <Typography variant="body1" component="span">
              <TextTruncate
                line={1}
                element="span"
                truncateText="…"
                text={ displayText }
              />
            </Typography>
          </div>
        )}
      </Box>
    )
  }

  return (
    <Box mb={2} classes={{
      root: classes.box
    }}>
      <Card variant="outlined" classes={{
        root: classes.card
      }}>
          {has_replies ?
            <Link href="/[slug]/news/[id]" as={internalLink} passHref>
              <CardActionArea component="a">
                <SharedCardHeader />
              </CardActionArea>
            </Link> :
            <CardActionArea component="a" href={canonical_link} target='_blank'>
              <SharedCardHeader />
            </CardActionArea>
          }
      </Card>
    </Box>
  )
}

export default NewsCard
