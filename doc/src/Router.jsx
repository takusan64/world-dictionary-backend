import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import PageA from './PageA'
import PageB from './PageB'

const Router = () => {
  return (
    <>
      <HashRouter basename="/">
        <Switch>
          <Route exact path="/" component={PageA} />
          <Route path="/pageb" component={PageB} />
        </Switch>
      </HashRouter>
    </>
  )
}

export default Router