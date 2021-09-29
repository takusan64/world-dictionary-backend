import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import PageA from './PageA'
import PageB from './PageB'
import Error from './Error'

const Router = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={PageA} />
          <Route path="/pageb" component={PageB} />
          <Route component={Error} />
        </Switch>
      </HashRouter>
    </>
  )
}

export default Router