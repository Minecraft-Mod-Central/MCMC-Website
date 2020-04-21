import React from 'react'
import { Button } from '../../../ui/Button'
import { fetchAPI } from '../../../../utils/Utils'

export const AboutAPI = () => {
  const [error, setError] = React.useState(null)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [endpoints, setEndpoints] = React.useState([])

  React.useEffect(() => {
    fetchAPI('', 'get')
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
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Path</th>
            <th>Auth Level</th>
            <th>CORS</th>
            <th>Cache</th>
          </tr>
        </thead>
        <tbody>
          {endpoints.map(item => (
            <tr key={item.method + ':' + item.path}>
              <td>{item.method.toUpperCase()}</td>
              <td>{item.path} <code title={item.description}>🛈</code></td>
              <td>{item.auth_level}</td>
              <td>{item.cors ? 'Yes' : 'No'}</td>
              <td>{item.cache === 0 ? 'no-cache' : item.cache > 0 ? ('public ' + item.cache + 's') : ('private ' + (-item.cache) + 's')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <Button to='/about'>About</Button>
    </>
  )
}
