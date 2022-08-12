import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Skeleton from '@material-ui/lab/Skeleton'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  box: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(2),
    },
  },
  card: {
    borderColor: theme.palette.border.light,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderRadius: 0,
    [theme.breakpoints.up('sm')]: {
      borderColor: theme.palette.divider,
      borderLeftWidth: '1px',
      borderRightWidth: '1px',
      borderRadius: '4px',
    },
  },
}))

const NewsCardSkeletonItem = () => {
    const classes = useStyles()

    return (
      <Box mb={2} classes={{
        root: classes.box
      }}>
        <Card variant="outlined" classes={{
          root: classes.card
        }}>
            <Box p={2}>
                <Typography variant="h6" component="h3"><Skeleton animation="wave" /></Typography>
                <Typography variant="h6" component="h3"><Skeleton animation="wave" width="80%" /></Typography>
                <Typography variant="body2" component="div" gutterBottom><Skeleton animation="wave" width="30%" /></Typography>
            </Box>
          <CardHeader
            avatar={<Skeleton animation="wave" variant="circle" width={40} height={40} />}
            title={<Skeleton animation="wave" height={10} width="100%" style={{ marginBottom: 6 }} />}
            subheader={<Skeleton animation="wave" height={10} width="70%" />}
          />
        </Card>
      </Box>
    )
}

const NewsCardSkeleton = () => {
    return (
        <>
            <NewsCardSkeletonItem />
            <NewsCardSkeletonItem />
            <NewsCardSkeletonItem />
            <NewsCardSkeletonItem />
            <NewsCardSkeletonItem />
        </>
    )
}

export default NewsCardSkeleton