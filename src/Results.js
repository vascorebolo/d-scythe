import React, { useContext } from 'react'
import PlayersContext from './contexts/players.context'
import ExtensionContext from './contexts/extension.context'
import { BASE_FACTIONS, NEW_FACTIONS, ALL_FACTIONS } from './constants/factions'

const Results = () => {
  const { players } = useContext(PlayersContext)
  const { extension } = useContext(ExtensionContext)

  return (
    <div>
      <h1>Results</h1>
      <p>{players} - {extension ? 'yes' : 'no' }</p>
    </div>
  )
}

Results.displayName = 'Results'

export default Results