import React from 'react'
import { useParams } from 'react-router'
import { api } from '../../../../utils/Utils'

export const ClientCrash = () => {
  const { crash } = useParams()
  const [error, setError] = React.useState(null)
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [crashInfo, setCrashInfo] = React.useState({})
  const [stack, setStack] = React.useState([])

  React.useEffect(() => {
    api(`/stats/client/crashes/${crash}`)
      .then(
        result => {
          setIsLoaded(true)
          setCrashInfo(result)
          setStack(result.stack)
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
        <h1>Client Crash</h1>
        <p>Error loading API: {error.message}</p>
      </>
    )
  }
  else if (!isLoaded) {
    return (
      <>
        <h1>Client Crash</h1>
        <p>Loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Client Crash</h1>
      <p>Reported on: <time dateTime={crashInfo.created}>{new Date(crashInfo.created).toLocaleString()}</time></p>
      <p>Similar reports to this: {crashInfo.similar}</p>
      <h2>{crashInfo.modpack_name + ' ' + crashInfo.version_name}</h2>
      <div className='crash'>
        <p><span className='crashtype'>{crashInfo.type + ': '}</span><span className='crasherror'>{crashInfo.error}</span></p>
        <br />
        {
          stack.map(item => {
            const i = item.indexOf('(')
            const p = item.substring(0, i)
            const f = item.substring(i + 1)
            const s = p.split('.')
            const m = s.pop()
            const c = s.pop()
            let e

            if (f.indexOf(':') !== -1) {
              e = ':' + f.substring(f.indexOf(':') + 1, f.length - 1)
            } else if (f === 'Native Method)') {
              e = ':native'
            } else {
              e = ':?'
            }

            return (<p key={item}>at <span className='crashpackage'>{s.join('.')}</span>.<span className='crashclass'>{c}</span>.<span className='crashmethod'>{m}</span><span className='crashline'>{e}</span></p>)
          })
        }
      </div>
    </>
  )
}
