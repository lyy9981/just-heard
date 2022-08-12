import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useCountryCities } from '../hooks/queries'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
}))

const CountryCities = () => {
  const classes = useStyles()
  const { data } = useCountryCities()

  return (
    <List className={classes.root} subheader={<li />}>
      {data?.country_cities?.map(country => {
        const { id, name, cities } = country

        return (
          <li key={`section-${id}`} className={classes.listSection}>
            <ul className={classes.ul}>
              <ListSubheader>{ name }</ListSubheader>
              {cities.map(city => {
                const { name, slug } = city

                return (
                  <Link href="/[slug]" as={`/${slug}`} passHref key={`item-${slug}`}>
                    <ListItem button component="a">
                      <ListItemText primary={name} />
                    </ListItem>
                  </Link>
                )
              })}
            </ul>
          </li>
        )
      })}
    </List>
  )
}

export default CountryCities
