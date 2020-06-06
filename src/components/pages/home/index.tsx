import React from 'react'
import { Button } from 'src/components/ui/button'

export const Home = () => {
  const [admin, setAdmin] = React.useState(false)

  React.useEffect(() => {
    // if (data.request.user != null && data.request.user.getAuthLevel().is(AuthLevel.ADMIN))
    setAdmin(false)
  })

  return (
    <>
      <h1>Website is currently being rewritten, so it may not work properly!</h1>
      <hr />
      <Button to='/global-stats'>Global Stats</Button>
      <Button to='/projects'>Projects</Button>
      {/* <Button to='/settings'>Settings</Button> */}
      <Button to='/about'>About</Button>
      {admin && <Button to='/admin'>Admin Panel</Button>}
      <br />
      <p>Note: This website is WIP! I'm extremely bad at web design. Don't judge me.</p>
      <Button to='/discord'>Join the Discord server!</Button>
    </>
  )
}
