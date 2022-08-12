import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Link from 'next/link'
import moment from 'moment'
import { deepOrange, deepPurple } from '@material-ui/core/colors'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import SecondaryItemList from './SecondaryItemList'
import { useLocale } from '../contexts/localeProvider'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
		justifyContent: 'center',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
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
}))

const CollectionCard = ({ items }) => {
  const classes = useStyles()
  const { citySlug } = useLocale()
  const [isExpanded, setIsExpanded] = React.useState(false)

  if (!items || items.length === 0) {
    return null
  }

  const mainItem = items?.[0]
  const secondaryItems = items?.length > 1 ? items?.slice(1) : null
  const { id, title, has_replies, canonical_link, publisher, publish_time, top_reply } = mainItem
  const ago = publish_time ? moment.unix(publish_time).fromNow() : null
  const meta = `${publisher?.name} · ${ago}`
  const hasExpandIcon = secondaryItems && secondaryItems.length > 1
  const topReply = top_reply?.twitter_status || top_reply?.reddit_comment || null
  const internalLink = `/${citySlug}/news/${id}`
  const SharedCardHeader = () => {
    return (
      <CardHeader
        title={title}
        subheader={meta}
      />
    )
  }

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  }

  return (
    <Box m={2}>
      <Card>
        <CardContent>
          { has_replies ?
            <Link href="/[slug]/news/[id]" as={internalLink} passHref>
              <CardActionArea component="a">
                <SharedCardHeader />
              </CardActionArea>
            </Link> :
            <CardActionArea component="a" href={canonical_link} target='_blank'>
              <SharedCardHeader />
            </CardActionArea>
          }
          {topReply && (
            <List>
              <Link href="/[slug]/news/[id]" as={internalLink} passHref>
                <ListItem button component="a">
                  <ListItemAvatar>
                    <Avatar alt={topReply.user?.name || topReply.author?.name} src={topReply.user?.profile_image_url || topReply.author?.profile_image_url} className={classes.orange} />
                  </ListItemAvatar>
                  <ListItemText primary={topReply.text} />
                </ListItem>
              </Link>
            </List>
          )}
          {secondaryItems && (
            <SecondaryItemList slug={citySlug} items={secondaryItems} isExpanded={isExpanded} />
          )}
        </CardContent>
        <CardActions disableSpacing>
          {hasExpandIcon && (
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: isExpanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={isExpanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          )}
        </CardActions>
      </Card>
    </Box>
  )
}

export default CollectionCard
