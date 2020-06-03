import React from 'react'
import { Button } from 'src/components/ui/button'

export const AboutStats = () => {
  return (
    <>
      <h1>What data gets collected by the MCMC Mod?</h1>
      <h3>On client side:</h3>
      <ul>
        <li>Duration of each session</li>
        <li>Country (Estimated by <a href='https://support.cloudflare.com/hc/en-us/articles/200168236-Configuring-Cloudflare-IP-Geolocation'>CloudFlare</a>)</li>
        <li>Operating system type</li>
        <li>Java vendor</li>
        <li>Java version</li>
        <li>Time it took Minecraft to load</li>
        <li>Total RAM</li>
        <li>Max RAM</li>
        <li>CPU cores</li>
        <li>CPU architecture</li>
        <li>If Minecraft account is legacy</li>
        <li>Display refresh rate</li>
        <li>If vsync is enabled</li>
        <li>If fullscreen is enabled</li>
        <li>Minecraft language</li>
        <li>How many resource packs are active</li>
        <li>GUI scale</li>
        <li>GPU ARB capabilities</li>
        <li>GPU EXT capabilities</li>
        <li>GPU vendor</li>
        <li>GPU version</li>
        <li>Max texture size</li>
        <li>If you play on singleplayer or multiplayer</li>
        <li>If the server is LAN or not</li>
        <li>Total amount of client ticks</li>
        <li>Total amount of client frames</li>
        <li>How much time you spent in creative mode</li>
        <li>If the world is in hardcore mode</li>
        <li>GUI scale</li>
      </ul>
      {/*
      <h3>By server stats: (Not finished yet)</h3>
      <ul>
        <li>Duration of each session</li>
        <li>Operating system type</li>
        <li>Java version</li>
        <li>Total amount of server ticks</lisure>
        <li>If the world is in hardcore mode</li>
      </ul>
      */}
      <br />
      <Button to='/about'>Back</Button>
    </>
  )
}
