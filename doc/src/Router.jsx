import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import PageA from './PageA'
import PageB from './PageB'

const Router = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={PageA} />
          <Route exact path="/pageb" component={PageB} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default Router