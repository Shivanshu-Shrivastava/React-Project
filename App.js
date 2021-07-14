import React from 'react'
import Home from './component/Home'
import Contact from './component/Contact'
import Post from './component/Post'
import './static/App.css'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export default function App() {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/post'>
            <Post />
          </Route>
        </Switch>
      </Router>

    </div>
  )
}
