import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import { createUseStyles, ThemeProvider, useTheme } from 'react-jss'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { AboutStats } from './pages/AboutStats'
import { AboutAPI } from './pages/AboutAPI'
import { ButtonGame } from './pages/ButtonGame'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'
import { Settings } from './pages/Settings'
import { ClientCrash } from './pages/ClientCrash'

export const App = () => {
  return (
    <BrowserRouter>
      <nav className='navbar'>
        <Link to='/'>Home</Link>
        <a> | </a>
        <Link to='/about'>About</Link>
        <a> | </a>
        <Link to='/settings'>Settings</Link>
        <a> | </a>
        <Link to='/about/api'>API</Link>
      </nav>
      <div className='box content'>
        <Switch>
          <Route path='/about/stats'><AboutStats /></Route>
          <Route path='/about/api'><AboutAPI /></Route>
          <Route path='/about'><About /></Route>
          <Route path='/terms'><Terms /></Route>
          <Route path='/privacy'><Privacy /></Route>
          <Route path='/settings'><Settings /></Route>
          <Route path='/button-game'><ButtonGame /></Route>
          <Route path='/crashes/client/:crash'><ClientCrash /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
