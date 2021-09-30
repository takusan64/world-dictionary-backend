import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import { Container } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import ERM from './pages/ERM'
import ApiDoc from './pages/ApiDoc'
import Error from './pages/Error'
import TopBar from './components/TopBar'

const useStyles = makeStyles((theme)  =>
  createStyles({
    container: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  }
))

const Router = () => {
  const classes = useStyles()

  return (
    <>
      <HashRouter>
        <TopBar />
        <Container className={classes.container} maxWidth="lg">
          <Switch>
            <Route exact path="/" component={ApiDoc} />
            <Route path="/erm" component={ERM} />
            <Route component={Error} />
          </Switch>
        </Container>
      </HashRouter>
    </>
  )
}

export default Router