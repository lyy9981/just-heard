import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ReplyCard from './ReplyCard'
import SORTING_MODES from '../enums/sortingModes'
import FILTERING_MODES from '../enums/filteringModes'
import orderBy from 'lodash/orderBy'
import filter from 'lodash/filter'
import { useMobile } from '../hooks/mediaQueries'

const useStyles = makeStyles((theme) => ({
  root: {

  },
  gridContainerControl: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 0,
    },
  },
  title: {
    marginBottom: 0,
  },
}))

const MAX_NETWORKS_SIZE = 2
const { MOST_LIKED, MOST_RECENT, } = SORTING_MODES
const { ALL_NETWORKS, REDDIT, TWITTER, } = FILTERING_MODES

function getNetworks(replies) {
  const networks = new Set()

  for (let i = 0; i < replies.length; i++) {
    if (replies[i]?.reddit_comment) {
      networks.add(REDDIT)
    } else {
      networks.add(TWITTER)
    }

    if (networks.size == MAX_NETWORKS_SIZE) {
      return networks
    }
  }

  return networks
}

function sortReplies(replies, modeKey) {
  let newReplies = []

  switch (modeKey) {
    case MOST_RECENT.key:
      newReplies = orderBy(replies, ['create_time'], ['desc'])
      break;
    default:
      newReplies = orderBy(replies, ['merit_score'], ['desc'])
  }

  return newReplies
}

function filterReplies(replies, modeKey) {
  let newReplies = []

  switch (modeKey) {
    case REDDIT.key:
      newReplies = filter(replies, o => o.reddit_comment)
      break
    case TWITTER.key:
      newReplies = filter(replies, o => o.twitter_status)
      break;
    default:
      newReplies = replies
  }

  return newReplies
}

const NewsReplies = ({ replies }) => {
  const classes = useStyles()
  const isMobile = useMobile()
  const [sortingMode, setSortingMode] = useState(MOST_LIKED)
  const [filteringMode, setFilteringMode] = useState(ALL_NETWORKS)
  const [anchorEl, setAnchorEl] = useState(null)
  const [anchorElFilter, setAnchorElFilter] = useState(null)
  const filteredReplies = filterReplies(replies, filteringMode.key)
  const sortedReplies = sortReplies(filteredReplies, sortingMode.key)
  const networks = getNetworks(replies)

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (thisSortingMode) => {
    setAnchorEl(null)

    if (thisSortingMode) {
      setSortingMode(thisSortingMode)
    }
  }

  const handleFilterOpen = (event) => {
    setAnchorElFilter(event.currentTarget)
  }

  const handleFilterClose = (thisFilteringMode) => {
    setAnchorElFilter(null)

    if (thisFilteringMode) {
      setFilteringMode(thisFilteringMode)
    }
  }

  return (
    <Grid container spacing={isMobile ? 0 : 2}>
      <Grid item xs={12}>
        {replies?.length > 0 && (
          <Grid container justify="space-between" classes={{
            root: classes.gridContainerControl,
          }}>
            <Grid item>
              <Typography variant="h6" component="h3" classes={{
                h6: classes.title,
              }}>
                { sortedReplies?.length } comment{ sortedReplies?.length === 1 ? '' : 's' }
              </Typography>
            </Grid>
            <Grid item>
              <Grid container>
                <Box mr={1}>
                  <Chip
                    label={sortingMode.name}
                    deleteIcon={<ArrowDropDownIcon />}
                    onClick={handleOpen}
                    onDelete={handleOpen}
                  />
                  <Menu
                    id="sort-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => { handleClose() }}
                  >
                    <MenuItem onClick={() => { handleClose(MOST_LIKED) }} selected={sortingMode.key === MOST_LIKED.key}>{MOST_LIKED.name}</MenuItem>
                    <MenuItem onClick={() => { handleClose(MOST_RECENT) }} selected={sortingMode.key === MOST_RECENT.key}>{MOST_RECENT.name}</MenuItem>
                  </Menu>
                </Box>
                {networks.size > 1 && (
                  <Box>
                    <Chip
                      label={filteringMode.name}
                      deleteIcon={<ArrowDropDownIcon />}
                      onClick={handleFilterOpen}
                      onDelete={handleFilterOpen}
                      disabled={networks.size == MAX_NETWORKS_SIZE ? false : true}
                    />
                    <Menu
                      id="network-filter-menu"
                      anchorEl={anchorElFilter}
                      keepMounted
                      open={Boolean(anchorElFilter)}
                      onClose={() => { handleFilterClose() }}
                    >
                      <MenuItem onClick={() => { handleFilterClose(ALL_NETWORKS) }} selected={filteringMode.key === ALL_NETWORKS.key}>{ALL_NETWORKS.name}</MenuItem>
                      <MenuItem onClick={() => { handleFilterClose(REDDIT) }} selected={filteringMode.key === REDDIT.key}>{REDDIT.name}</MenuItem>
                      <MenuItem onClick={() => { handleFilterClose(TWITTER) }} selected={filteringMode.key === TWITTER.key}>{TWITTER.name}</MenuItem>
                    </Menu>
                  </Box>
                )}
              </Grid>
            </Grid>
          </Grid>
        )}
      </Grid>
      <Grid item xs={12}>
        {replies?.length > 0 && (
          <div>
            {sortedReplies?.map(reply => {
              const { id } = reply

              return (
                <Box mb={2} key={id}>
                  <ReplyCard reply={reply} />
                </Box>
              )
            })}
          </div>
        )}
      </Grid>
    </Grid>
  )
}

export default NewsReplies
