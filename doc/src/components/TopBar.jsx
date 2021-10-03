import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Slide,
  useScrollTrigger
} from '@material-ui/core'
import PublicIcon from '@material-ui/icons/Public'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      border: 0,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(4)
    },
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
        <AppBar position="sticky">
          <Toolbar>
            <PublicIcon />
            <img
              src={`${process.env.PUBLIC_URL}/title.png`}
              height={30}
              className={classes.title}
              alt="title"
            />
            {contents.map((content, i) =>
              <Button
                key={i}
                color="inherit"
                className={classes.button}
                component={Link}
                to={content.path}
              >
                {content.name}
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Slide>
    </>
  )
}
export default TopBar