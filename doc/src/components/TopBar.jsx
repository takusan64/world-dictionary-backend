import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Slide,
  useScrollTrigger
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      '& > *': {
        padding: theme.spacing(1),
      }
    }
  }
  ))

const TopBar = () => {
  const trigger = useScrollTrigger()
  const classes = useStyles()
  const contents = [
    {
      name: "ApiDoc",
      path: "/"
    },
    {
      name: "ERM",
      path: "/erd"
    }
  ]

  return (
    <>
      <Slide direction="down" in={!trigger}>
        <AppBar position="sticky" className={classes.appbar}>
          <Toolbar>
            {contents.map((content, i) =>
              <Button
                key={i}
                color="inherit"
                className={classes.button}
              >
                <Link to={content.path}>
                  {content.name}
                </Link>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  )
}
export default TopBar