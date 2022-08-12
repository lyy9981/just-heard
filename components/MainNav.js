import React, { useState } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HotIcon from '@material-ui/icons/Whatshot'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ForumIcon from '@material-ui/icons/Forum'
import Logo from './Logo'
import SearchBar from './SearchBar'
import { useLocale } from '../contexts/localeProvider'

const drawerWidth = 240;
const miniDrawerWidth = 96;

const useStyles = makeStyles((theme) => ({
  appBar: {
    background : theme.palette.background.default,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  menuButton: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(1),
  },
  iconButton: {
    color: theme.palette.text.secondary,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerListItem: {
    '&.selected': {
      color: theme.palette.primary.main,
      backgroundColor: 'transparent',
    },
    '&.selected:hover': {
      backgroundColor: theme.palette.background.primary,
    }
  },
  drawerListItemTextPrimary: {
    fontSize: '0.8rem',
  },
  drawerListItemIconSelected: {
    color: theme.palette.primary.main,
  },
  miniDrawer: {
    zIndex: theme.zIndex.appBar - 1,
    width: miniDrawerWidth,
  },
  miniDrawerPaper: {
    width: miniDrawerWidth,
    borderRightColor: 'transparent',
  },
  miniDrawerListItem: {
    flexDirection: 'column',
  },
  miniDrawerListItemIcon: {
    justifyContent: 'center',
  },
  miniDrawerListItemText: {
    justifyContent: 'center',
  },
  logo: {
    flexGrow: 1,
  },
}))

const getNavItems = citySlug => {
  if (!citySlug) {
    return null
  }

  return [
    {
      title: 'Heard',
      icon: <ForumIcon />,
      href: '/[slug]',
      as: `/${citySlug}`,
    },
    {
      title: 'Hot',
      icon: <HotIcon />,
      href: '/[slug]/hot',
      as: `/${citySlug}/hot`,
    },
    {
      title: 'New',
      icon: <AccessTimeIcon />,
      href: '/[slug]/new',
      as: `/${citySlug}/new`,
    },
  ]
}

function Menu({ isMini = false }) {
  const classes = useStyles()
  const router = useRouter()
  const { citySlug } = useLocale()
  const { pathname } = router
  const navItems = getNavItems(citySlug)

  return navItems && (
    <List>
      {navItems.map(({title, icon, href, as}) => (
        <Link href={href} as={as} passHref key={title}>
          <ListItem
            button
            selected={pathname === href}
            key={title}
            classes={{
              root: classes.drawerListItem,
              selected: 'selected',
            }}
            className={
              clsx({
                [classes.miniDrawerListItem]: isMini,
              }
            )}
          >
            <ListItemIcon
              className={clsx({
                [classes.drawerListItemIconSelected]: pathname === href,
                [classes.miniDrawerListItemIcon]: isMini,
              })}
            >
              {icon}
            </ListItemIcon>
            <ListItemText
              primary={title}
              classes={{
                primary: classes.drawerListItemTextPrimary,
              }}
              className={clsx({
                [classes.miniDrawerListItemText]: isMini,
              })}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  )
}

export default function MainNav() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [mobileSearch, setMobileSearch] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen(open)
  }

  const toggleMobileSearch = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setMobileSearch(open)
  }

  return (
    <>
      <AppBar
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <Hidden xsDown implementation='css'>
              <Logo />
            </Hidden>
            <Hidden smUp>
              <Logo variant={mobileSearch ? 'notext' : 'shorttext'} />
            </Hidden>
          </div>
          <Hidden xsDown>
            <SearchBar />
          </Hidden>
          <Hidden smUp>
            {mobileSearch ? (
              <>
                <SearchBar />
                <IconButton
                  color="inherit"
                  aria-label="close"
                  onClick={toggleMobileSearch(false)}
                  edge="end"
                  className={classes.iconButton}
                >
                  <CloseIcon />
                </IconButton>
              </>
            ) : (
              <IconButton
                color="inherit"
                aria-label="search"
                onClick={toggleMobileSearch(true)}
                edge="end"
                className={classes.iconButton}
              >
                <SearchIcon />
              </IconButton>
            )}
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar}>
          <Box ml={1}>
            <Hidden xsDown>
              <Logo />
            </Hidden>
            <Hidden smUp>
              <Logo variant='shorttext' />
            </Hidden>
          </Box>
        </div>
        <Divider />
        <Menu />
      </Drawer>
      <Hidden xsDown>
        <Drawer
          classes={{
            paper: classes.miniDrawerPaper,
          }}
          className={classes.miniDrawer}
          variant="permanent"
          open
        >
          <div className={classes.toolbar} />
          <Menu isMini={true} />
        </Drawer>
      </Hidden>
    </>
  )
}
