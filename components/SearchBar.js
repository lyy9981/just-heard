import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { useRouter } from 'next/router'
import parse from 'autosuggest-highlight/parse'
import match from 'autosuggest-highlight/match'
import { fade, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SearchIcon from '@material-ui/icons/Search'
import SEARCH_TOPICS from '../queries/searchTopics'
import { useLocale } from "../contexts/localeProvider"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '300px',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.light,
    '&:hover': {
      backgroundColor: fade(theme.palette.background.light, 0.75),
    },
    marginLeft: theme.spacing(2),
    width: `100% - ${theme.spacing(2)}px`,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    color: theme.palette.text.secondary,
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

function SearchBar() {
  const { citySlug } = useLocale()
  const { push } = useRouter()
  const [suggestion, setSuggestion] = useState('')
  const isSkip = !suggestion || suggestion.length < 2 || !citySlug

  const classes = useStyles()
  const { data, loading } = useQuery(SEARCH_TOPICS, {
    skip: isSkip,

    variables: {
      slug: citySlug,
      keyword: suggestion,
    },

    // fix apollo 'skip' bug. 'cache-first' is default fetchPolicy
    fetchPolicy: isSkip ? 'cache-only' : 'cache-first'
  })
  const options = data?.search_topics?.map(item => item?.phrase?.name) || []

  return (
    <div className={classes.root}>
      <Autocomplete
        freeSolo
        size="small"
        options={options}
        loading={loading}
        renderInput={(params) => (
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              ref={params.InputProps.ref}
              inputProps={params.inputProps}
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        )}
        renderOption={(option, { inputValue }) => {
          const matches = match(option, inputValue);
          const parts = parse(option, matches);

          return (
            <div>
              {parts.map((part, index) => (
                <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
                {part.text}
              </span>
              ))}
            </div>
          );
        }}
        onChange={(event, newValue) => {
          if (newValue) {
            push('/[slug]/search/[keyword]', `/${citySlug}/search/${newValue?.toLowerCase()}`)
          }
        }}
        onInputChange={(event, newInputValue) => {
          setSuggestion(newInputValue)
        }}
      />
    </div>
  );
}

export default SearchBar
