import React, { useContext } from 'react'
import PlayersContext from './contexts/players.context'
import ExtensionContext from './contexts/extension.context'
import { BASE_FACTIONS, ALL_FACTIONS } from './constants/factions'
import { BASE_BOARDS, ALL_BOARDS } from './constants/boards'
import { div } from 'prelude-ls'

const Results = () => {
  const { players } = useContext(PlayersContext)
  const { extension } = useContext(ExtensionContext)

  const computeResults = () => {
    const factions = extension ?  ALL_FACTIONS : BASE_FACTIONS
    const boards = extension ? ALL_BOARDS : BASE_BOARDS
    let player = 1
    let results = []

    do {
      results.push([
        factions[Math.floor(Math.random() * factions.length)],
        boards[Math.floor(Math.random() * boards.length)],
      ]);

      player+=1
    } while(player <= players)

    return results.map((combo, index) => { return (
      <div>
        <h4>Player {index + 1}</h4>
        <p>
          <img src={`images/${combo[0].image}`} style={{width: '100px'}} />
          { combo[0].name } - { combo[1] }
        </p>
      </div>
    )})
  }

  return (
    <div>
      <h1>Results</h1>
      <p>{players} - {extension ? 'yes' : 'no' }</p>
      <div>
        { computeResults() }
      </div>
    </div>
  )
}

Results.displayName = 'Results'

export default Results