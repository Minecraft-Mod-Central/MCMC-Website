import React from 'react'
import { Button } from '../../../ui/Button'
import { api } from '../../../../utils/Utils'

const authNames = {
  'none': 'None',
  'mod': 'Mod',
  'logged_in': 'Logged In',
  'verified': 'Verified',
  'approved': 'Approved',
  'admin': 'Admin',
  'superadmin': 'Superadmin'
}

export const AboutAPI = () => {
  const [error, setError] = React.useState(null)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [endpoints, setEndpoints] = React.useState([])

  React.useEffect(() => {
    api('')
      .then(
        result => {
          setIsLoaded(true)
          setEndpoints(result)
        },
        error => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return (
      <>
        <h1>API</h1>
        <h3>All API endpoints:</h3>
        <p>Error loading API: {error.message}</p>
        <br />
        <Button to='/about'>About</Button>
      </>
    )
  }
  else if (!isLoaded) {
    return (
      <>
        <h1>API</h1>
        <h3>All API endpoints:</h3>
        <p>Loading...</p>
        <br />
        <Button to='/about'>About</Button>
      </>
    )
  }

  return (
    <>
      <h1>API</h1>
      <h3>All API endpoints:</h3>
      <div>
        {endpoints.map(item => (
          <div className='api' key={item.method + ':' + item.path}>
            <p><code><span className={'method_' + item.method}>{item.method.toUpperCase()}</span> <span className='path'>{'/' + item.path}</span></code></p>
            <p>Auth: <span className={'auth_' + item.auth_level}>{authNames[item.auth_level]}</span></p>
            <p>Cache: <span className='cache'>{item.cache === 0 ? 'None' : item.cache > 0 ? ('public ' + item.cache + 's') : ('private ' + (-item.cache) + 's')}</span></p>
            <br />
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <Button to='/about'>About</Button>
    </>
  )
}
