import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from '@material-ui/core'
import { makeStyles , createStyles} from '@material-ui/styles'
import ERD from './pages/ERD'
import ApiDoc from './pages/ApiDoc'
import Error from './pages/Error'
import TopBar from './components/TopBar'

const useStyles = makeStyles((theme)  =>
  createStyles({
    container: {
      marginTop: theme.spacing(1)
    }
  })
)

const ROUTER_BASENAME =
  process.env.NODE_ENV === 'development' ? '/' : '/world-dictionary-backend';

const Router = () => {
  const classes = useStyles()

  return (
    <>
      <BrowserRouter basename={ROUTER_BASENAME}>
        <TopBar />
        <Container className={classes.container} maxWidth="xl">
          <Switch>
            <Route exact path="/" component={ApiDoc} />
            <Route path="/erd" component={ERD} />
            <Route component={Error} />
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default Router