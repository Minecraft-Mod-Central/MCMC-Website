import React from 'react'
import { Button } from 'src/components/ui/button'

export const About = () => {
  return (
    <>
      <h1>About MCMC</h1>
      <p>This website was made by <a href='https://latvian.dev/'>LatvianModder</a> and it's aimed at people who create content for modded Minecraft. It collects analytics data, lets you build and publish mods and has tools for generating data like Forge update json files (well, ok, those last two are WIP).</p>
      <br />
      <Button to='/about/stats'>What data gets collected?</Button>
      <Button to='/privacy'>Privacy Policy</Button>
      <Button to='/terms'>Terms of Service</Button>
      <Button to='/about/api'>API</Button>
      <Button to='/contact'>Contact Us</Button>
    </>
  )
}
