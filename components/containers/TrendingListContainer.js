import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useQuery } from '@apollo/react-hooks'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { useLocale } from '../../contexts/localeProvider'
import TOPICS_TRENDING from '../../queries/topicsTrending'
import TopicsList from '../TopicsList'

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.border.light}`,
    borderBottom: `1px solid ${theme.palette.border.light}`,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    backgroundColor: 'white',
    [theme.breakpoints.up('sm')]: {
      borderTop: 'none',
      borderBottom: 'none',
      backgroundColor: theme.palette.background.light,
      borderRadius: theme.spacing(1),
    },
  },
}))

const TrendingList = () => {
  const classes = useStyles()
  const { citySlug } = useLocale()
  const { data } = useQuery(TOPICS_TRENDING, {
    skip: !citySlug,

    variables: {
      slug: citySlug,
    },
  })

  const topics = data?.topics

  return topics?.length > 0 && (
    <div className={classes.root}>
      <Box mb={2}>
        <Typography variant="h6" component="h3">Trending</Typography>
      </Box>
      <TopicsList topics={topics} hasDarkBg={true} variant="outlined"/>
    </div>
  )
}

export default TrendingList
