import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import { createUseStyles, ThemeProvider, useTheme } from 'react-jss'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { ButtonGame } from './pages/ButtonGame'
import { Terms } from './pages/Terms'
import { Privacy } from './pages/Privacy'
import { Settings } from './pages/Settings'

import { Button } from '../ui/Button'

export const App = () => {
  return (
    <BrowserRouter>
      <div className='box content'>
        <nav>
          <Button to='/' title='Home' />
          <Button to='/about' title='About' />
          <Button to='/terms' title='Terms of Service' />
          <Button to='/privacy' title='Privacy Policy' />
          <Button to='/settings' title='Settings' />
        </nav>
        <Switch>
          <Route path='/about'><About /></Route>
          <Route path='/terms'><Terms /></Route>
          <Route path='/privacy'><Privacy /></Route>
          <Route path='/settings'><Settings /></Route>
          <Route path='/button-game'><ButtonGame /></Route>
          <Route path='/'><Home /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}
