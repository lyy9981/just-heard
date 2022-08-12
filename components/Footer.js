import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Link from 'next/link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import EditLocationIcon from '@material-ui/icons/EditLocation'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: '2000',
    backgroundColor: '#f2f2f2',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  link: {
    width: 'auto',
    color: theme.palette.text.secondary,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  buttonLabel: {
    color: theme.palette.text.secondary,
  }
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Box p={2}>
        <Link href="/select-city" as={`/select-city`} passHref>
          <Button
            component="a"
            size="small"
            variant="outlined"
            startIcon={<EditLocationIcon />}
            classes={{
              label: classes.buttonLabel,
            }}
          >
            Change city
          </Button>
        </Link>
      </Box>
      <Divider light />
      <List className={classes.list}>
        <Link href="/about" as={`/about`} passHref>
          <ListItem component="a" className={classes.link}>
            <ListItemText primary="About" />
          </ListItem>
        </Link>
        <Link href="/contact" as={`/contact`} passHref>
          <ListItem component="a" className={classes.link}>
            <ListItemText primary="Contact" />
          </ListItem>
        </Link>
      </List>
    </div>
  )
}

export default Footer
