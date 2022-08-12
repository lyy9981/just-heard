import React from 'react'
import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { useLocale } from '../contexts/localeProvider'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  thumbnail: {
    float: 'right',
    width: 75,
    height: 75,
    marginLeft: theme.spacing(2),
    marginTop: '5px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  thumbnailImg: {
    width: 100,
  },
  metaText: {
    display: 'flex',
    whiteSpace: 'pre-wrap',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
}))

const ListItemContent = ({ data }) => {
  const classes = useStyles()
  const { title, publisher, publish_time, image } = data
  const ago = publish_time ? moment.unix(publish_time).fromNow() : null
  const meta = `${publisher?.name} · ${ago}`

  return (
    <Box pt={1} pb={1}>
      {image?.name && (
        <span className={classes.thumbnail}>
          <img className={classes.thumbnailImg} src={`https://example.amazonaws.com/${image.name}`} />
        </span>
      )}
      <Typography variant="body1" component="p">{title}</Typography>
      <Typography variant="body2" component="div" gutterBottom className={classes.metaText}>
        { meta }
      </Typography>
    </Box>
  )
}

const SecondaryItemList = ({ items, isExpanded }) => {
  const { citySlug } = useLocale()

  if (!items) {
    return null
  }

  const truncatedItems = isExpanded ? items : [items[0]]

  return (
    <List>
      {truncatedItems?.map((item) => {
        const { id, canonical_link, has_replies } = item
        const internalLink = `/${citySlug}/news/${id}`

        if (has_replies) {
          return (
            <Link href="/[slug]/news/[id]" as={internalLink} passHref key={ id }>
              <ListItem button component="a">
                <ListItemContent data={item} internalLink={internalLink} />
              </ListItem>
            </Link>
          )
        }

        return (
          <ListItem button component="a" href={canonical_link} target="_blank" key={ id }>
            <ListItemContent data={item} />
          </ListItem>
        )
      })}
    </List>
  )
}

export default SecondaryItemList
