import React, { useContext } from 'react'
import PlayersContext from './contexts/players.context'
import ExtensionContext from './contexts/extension.context'
import { BASE_FACTIONS, ALL_FACTIONS } from './constants/factions'
import { BASE_BOARDS, ALL_BOARDS } from './constants/boards'

const Results = ({
    isActive
  }) => {
  const { players } = useContext(PlayersContext)
  const { extension } = useContext(ExtensionContext)

  const computeResults = () => {
    const factions = extension ?  ALL_FACTIONS : BASE_FACTIONS
    const boards = extension ? ALL_BOARDS : BASE_BOARDS
    let player = 1
    let results = []
    let factionsIndex
    let boardsIndex

    do {
      factionsIndex = Math.floor(Math.random() * factions.length)
      boardsIndex = Math.floor(Math.random() * boards.length)

      results.push([
        Object.assign({}, factions[factionsIndex]),
        boards[boardsIndex],
      ]);

      console.log(factions.length, boards.length)
      console.log('index: ', factionsIndex, boardsIndex)
      factions.splice(factionsIndex, 1)
      boards.splice(boardsIndex, 1)
      console.log(factions.length, boards.length)
      console.log('=========================')

      player+=1
    } while(player <= players)

    return results.map((combo, index) => { return (
      <div key={combo[0].name}>
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
        { isActive && computeResults() }
      </div>
    </div>
  )
}

Results.displayName = 'Results'

export default Results