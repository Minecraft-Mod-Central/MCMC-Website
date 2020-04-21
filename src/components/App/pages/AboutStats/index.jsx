import React from 'react'
import { Button } from '../../../ui/Button'

export const AboutStats = () => {
  return (
    <>
      <h1>What data gets collected?</h1>
      <h3>By client stats:</h3>
      <ul>
        <li>Duration of each session</li>
        <li>Operating system type</li>
        <li>Java version</li>
        <li>If you play on singleplayer or multiplayer</li>
        <li>If the server is LAN or not</li>
        <li>Total amount of client ticks</li>
        <li>Total amount of client frames</li>
        <li>How much time you spent in creative mode</li>
        <li>If the world is in hardcore mode</li>
        <li>GUI scale</li>
      </ul>
      <h3>By server stats: (Not finished yet)</h3>
      <ul>
        <li>Duration of each session</li>
        <li>Operating system type</li>
        <li>Java version</li>
        <li>Total amount of server ticks</li>
        <li>If the world is in hardcore mode</li>
      </ul>
      <br />
      <Button to='/about'>About</Button>
      <Button to='/privacy'>Privacy Policy</Button>
      <Button to='/terms'>Terms of Service</Button>
      <Button to='/contact'>Contact Us</Button>
    </>
  )
}
