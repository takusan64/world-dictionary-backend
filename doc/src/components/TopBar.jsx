import React from 'react'
import {
  AppBar,
  Toolbar,
  Button,
  Slide,
  useMediaQuery,
  useScrollTrigger
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Link } from "react-router-dom"

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      border: 0,
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(6)
    },
    button: {
      '& > *': {
        padding: theme.spacing(1),
      }
    }
  })
)

const TopBar = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const trigger = useScrollTrigger({threshold:1})
  const classes = useStyles()
  const contents = [
    {
      name: "ApiDoc",
      path: "/"
    },
    {
      name: "ERD",
      path: "/erd"
    }
  ]

  return (
    <>
      <Slide direction="down" in={!trigger}>
        <AppBar position="sticky">
          <Toolbar>
            <img
              src={matches?`${process.env.PUBLIC_URL}/title.png`:`${process.env.PUBLIC_URL}/title_icon.png`}
              height={40}
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