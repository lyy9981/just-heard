import React from 'react'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import MainNav from './MainNav'
import Footer from './Footer'

const useStyles = makeStyles((theme) => ({
  '@global': {
    'a': {
      color: theme.palette.primary.main,
      textDecoration: 'inherit',
    },
    'blockquote': {
      borderLeft: '4px solid #f2f4f5',
      color: theme.palette.text.secondary,
      margin: '0 0 0 5px',
      padding: '0 10px',
    },
    'blockquote:last-of-type': {
      marginBottom: theme.spacing(2),
    },
    'blockquote p': {
      marginTop: 0,
      marginBottom: 0,
      paddingBottom: theme.spacing(2),
    },
    'blockquote:last-of-type p:last-of-type': {
      paddingBottom: 0,
    },
    '.MuiCard-root .MuiTypography-root > p': {
      marginTop: 0,
      marginBottom: 0,
      paddingBottom: theme.spacing(2),
    },
    '.MuiCard-root .MuiTypography-root > p:last-child': {
      paddingBottom: 0,
    },
  },
  root: {
    display: 'flex',
    minHeight: `92vh`,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: 0,
    paddingBottom: theme.spacing(4),
    backgroundColor: theme.palette.background.light,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(4),
      backgroundColor: 'inherit',
    },
  },
}))

export default function App({ children }) {
  const classes = useStyles()
  const router = useRouter()
  const { slug } = router.query

  return slug ? (
    <>
      <div className={classes.root}>
        <MainNav />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
      <Footer />
    </>
  ) : (
    <>
      {children}
    </>
  )
}
