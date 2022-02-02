import React, { Component } from 'react'
import Dashboard from './pages/Dashboard'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Switch>
          <Route path="/">
<Dashboard/>
          </Route>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
