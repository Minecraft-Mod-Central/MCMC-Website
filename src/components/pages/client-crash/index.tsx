import React from 'react'
import { useParams } from 'react-router'
import { apiClientCrash } from 'src/utils'
import { APIClientCrash } from 'src/types'

export const ClientCrash = () => {
  const { crash } = useParams()
  const [error, setError] = React.useState<any>(null)
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false)
  const [crashInfo, setCrashInfo] = React.useState<null | APIClientCrash>(null)

  React.useEffect(() => {
    apiClientCrash(crash)
      .then(
        result => {
          setCrashInfo(result)

          result.mods.sort((a, b) => {
            const idA = a.id.toLowerCase()
            const idB = b.id.toLowerCase()

            if (idA > idB) {
              return 1
            } else if (idA < idB) {
              return -1
            }
            return 0
          })

          result.coremods.sort((a, b) => {
            const idA = a.name.toLowerCase()
            const idB = b.name.toLowerCase()

            if (idA > idB) {
              return 1
            } else if (idA < idB) {
              return -1
            }
            return 0
          })

          setIsLoaded(true)
        },
        error => {
          setError(error)
          setIsLoaded(true)
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
  } else if (!isLoaded || !crashInfo) {
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
      {crashInfo.original_error !== '' && <p>Original report: <a href={'https://mcmc.dev/crashes/client/' + crashInfo.original_error}>{crashInfo.original_error}</a></p>}

      <h2>{crashInfo.modpack_name + ' ' + crashInfo.version_name}</h2>
      <div className='crash'>
        <p><span className='crashtype'>{crashInfo.type + ': '}</span><span className='crasherror'>{crashInfo.error}</span></p>
        <br />
        {
          crashInfo.stack.map(item => {
            return (<p key={item.package + item.class + item.method + item.line}><span className='crashpackage'>{item.package}</span>.<span className='crashclass'>{item.class}</span>.<span className='crashmethod'>{item.method}</span><span className='crashline'>:{item.line === 0 ? '?' : item.line === -1 ? 'native' : item.line}</span></p>)
          })
        }
      </div>
      <h3>Mod list</h3>
      <table className='crash'>
        <thead>
          <tr>
            <th>Mod</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {
            crashInfo.mods.map(mod => {
              return (<tr key={mod.id}><td><span className='crashpackage'>{mod.id}</span></td><td><span className='crashclass'>{mod.version}</span></td></tr>)
            })
          }
        </tbody>
      </table>
      <h3>Coremod list</h3>
      <table className='crash'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>File</th>
          </tr>
        </thead>
        <tbody>
          {
            crashInfo.coremods.map(coremod => {
              return (<tr key={coremod.name + coremod.type + coremod.file}><td><span className='crashpackage'>{coremod.name}</span></td><td><span className='crashclass'>{coremod.type}</span></td><td><span className='crashmethod'>{coremod.file.substring(1)}</span></td></tr>)
            })
          }
        </tbody>
      </table>
      <br />
      <p>Mod checksum: <code>{crashInfo.mods_checksum}</code></p>
      <p>Error checksum: <code>{crashInfo.error_checksum}</code></p>
      <p>View as <a href={`/api/stats/client/crashes/${crash}`}>json</a></p>
    </>
  )
}
