import React from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import Button from '@material-ui/core/Button'
import { useLocale } from '../contexts/localeProvider'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  button: {
    textTransform: 'none',
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  buttonOnDarkBg: {
    backgroundColor: 'rgba(238, 238, 238, 0.5)',
    borderWidth: 0,
    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.background.default,
      borderWidth: '1px',
    },
  },
}))

const TopicsList = ({ topics, variant = 'contained', hasDarkBg = false }) => {
  const classes = useStyles()
  const { citySlug } = useLocale()

  if (!citySlug || !topics) {
    return null
  }

  return (
    <div className={classes.root}>
      {topics?.map((topic) => {
        if (!topic?.phrase) {
          return
        }

        const id = topic.id
        const { name } = topic.phrase
        const internalLink = `/${citySlug}/topic/${id}`

        return (
          <Link href="/[slug]/topic/[id]" as={internalLink} passHref key={ id }>
            <Button
              variant={variant}
              size="small"
              className={clsx(classes.button, {
                [classes.buttonOnDarkBg]: hasDarkBg,
              })}
              disableElevation
            >
              {name}
            </Button>
          </Link>
        )
      })}
    </div>
  )
}

export default TopicsList
