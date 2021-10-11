import React from "react"
import { Typography, Link, Container } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    contents: {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(3)
      }
    },
    images: {
      height: '30px',
      width: 'auto'
    }
  }
  ))

const Footer = () => {
  const classes = useStyles()
  return (
    <>
      <Container className={classes.container} maxWidth="md">
        <Grid container  alignItems="center" justifyContent="center" >
          <Grid item xs={12} sm={9} className={classes.contents}>
            <Typography variant="caption" color="textSecondary">
              Copyright © 2021 @takusan64
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} className={classes.contents}>
            <Typography>
              <Link href="https://github.com/takusan64/world-dictionary-backend" target="_blank" rel="noopener">
                <img
                  src={`${process.env.PUBLIC_URL}/github-icon.png`}
                  alt="GitHub Repository"
                  className={classes.images}
                />
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  )
};

export default Footer