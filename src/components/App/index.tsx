import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import { createUseStyles, ThemeProvider, useTheme } from 'react-jss'

import { Home } from 'src/components/pages/home'
import { About } from 'src/components/pages/about'
import { AboutStats } from 'src/components/pages/about-stats'
import { AboutAPI } from 'src/components/pages/about-api'
import { ButtonGame } from 'src/components/pages/button-game'
import { Terms } from 'src/components/pages/terms'
import { Privacy } from 'src/components/pages/privacy'
import { Settings } from 'src/components/pages/settings'
import { ClientCrash } from 'src/components/pages/client-crash'

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
