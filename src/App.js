import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import MyScript from './components/MyScript'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/myscript'>
          <MyScript />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function Home() {
  return (
    <div>
      <h2> Resuable components for React Native Integration </h2>
      <nav>
        <ul>
          <li>
            <Link to='/myscript'>My Script Editor</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
