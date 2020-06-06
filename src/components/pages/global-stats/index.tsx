import React from 'react'
import { apiGlobalStats } from 'src/utils'
import { APIGlobalStats, APIStatCapability } from 'src/types'

export const GlobalStats = () => {
  const [error, setError] = React.useState<any>(null)
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false)
  const [globalStats, setSlobalStats] = React.useState<null | APIGlobalStats>(null)

  React.useEffect(() => {
    apiGlobalStats()
      .then(
        result => {
          setSlobalStats(result)
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
        <h1>Global Stats</h1>
        <p>Error loading API: {error.message}</p>
      </>
    )
  } else if (!isLoaded || !globalStats) {
    return (
      <>
        <h1>Global Stats</h1>
        <p>Loading...</p>
      </>
    )
  }

  return (
    <>
      <h1>Global Stats</h1>
      <p>Participants: {globalStats.database.users}</p>
      <p>Modpacks: {globalStats.database.modpacks}</p>
      <p>Modpack Versions: {globalStats.database.modpack_versions}</p>
      <p>Mods: {globalStats.database.mods}</p>
      <p>Mod Versions: {globalStats.database.mod_versions}</p>
      <p>Launches: {globalStats.launches}</p>
      <p>Total Playtime: {Math.floor(globalStats.total_time / 3600)} h</p>
      <p>World Joins: {globalStats.world_joins}</p>
      <p>Average FPS: {(globalStats.frames / globalStats.total_time).toFixed(2)}</p>
      <p>Average TPS: {(globalStats.ticks / globalStats.total_time).toFixed(2)}</p>
      <p>Multiplayer: {(globalStats.multiplayer / globalStats.total_time * 100).toFixed(2)}%</p>
      <p>LAN: {(globalStats.lan / globalStats.total_time * 100).toFixed(2)}%</p>
      <p>Hardcore Mode: {(globalStats.hardcore / globalStats.total_time * 100).toFixed(2)}%</p>
      <p>Creative Mode: {(globalStats.creative_ticks / globalStats.ticks * 100).toFixed(2)}%</p>
      <p>Client Crashes Reported: {globalStats.client_crashes}</p>
      <p>Server Crashes Reported: {globalStats.server_crashes}</p>
      <h3>EXT GL Capabilities</h3>
      {globalStats.ext_caps.map((item: APIStatCapability) => (
          <p key={item.id}>{item.id}: {(item.time / globalStats.total_time * 100).toFixed(2)}%</p>
      ))}
      <h3>ARB GL Capabilities</h3>
      {globalStats.arb_caps.map((item: APIStatCapability) => (
          <p key={item.id}>{item.id}: {(item.time / globalStats.total_time * 100).toFixed(2)}%</p>
      ))}
    </>
  )
}
