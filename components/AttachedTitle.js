import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ForumIcon from '@material-ui/icons/Forum'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  title: {
    marginRight: theme.spacing(1),
  },
  icon: {
    paddingTop: '0.2em'
  }
}))

const AttachedTitle = ({ hasReplies, title }) => {
  const classes = useStyles()

  if (!hasReplies) {
    return title
  }

  return (
    <div className={classes.root}>
      <span className={classes.title}>{title}</span>
      <ForumIcon className={classes.icon} />
    </div>
  )
}

export default AttachedTitle
