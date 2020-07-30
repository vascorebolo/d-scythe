import React, { useContext } from 'react'
import PlayersContext from './contexts/players.context'
import ExtensionContext from './contexts/extension.context'
import { BASE_FACTIONS, ALL_FACTIONS } from './constants/factions'
import { BASE_BOARDS, ALL_BOARDS } from './constants/boards'
import bannedCombinations from './constants/banned'

const Results = ({
    isActive
  }) => {
  const { players } = useContext(PlayersContext)
  const { extension } = useContext(ExtensionContext)

  const isBannedCombo = (faction, board) => {
    const factions = extension ? ALL_FACTIONS : BASE_FACTIONS
    const boards = extension ? ALL_BOARDS : BASE_BOARDS

    return (
      factions[bannedCombinations[0][0]].name === faction
      && boards[bannedCombinations[0][1]] === board
      ) || (
        factions[bannedCombinations[1][0]].name === faction &&
        boards[bannedCombinations[1][1]] === board
      )
  }

  const computeResults = () => {
    const factions = extension ?  [...ALL_FACTIONS] : [...BASE_FACTIONS]
    const boards = extension ? [...ALL_BOARDS] : [...BASE_BOARDS]

    let player = 1
    let results = []
    let factionsIndex
    let boardsIndex

    do {
      do {
        factionsIndex = Math.floor(Math.random() * factions.length)
        boardsIndex = Math.floor(Math.random() * boards.length)
      } while (isBannedCombo(factions[factionsIndex].name, boards[boardsIndex]))


      results.push([
        Object.assign({}, factions[factionsIndex]),
        boards[boardsIndex],
      ]);

      factions.splice(factionsIndex, 1)
      boards.splice(boardsIndex, 1)

      player+=1
    } while(player <= players)

    return results.map((combo, index) => { return (
      <div key={combo[0].name}>
        <h4>Player {index + 1}</h4>
        <p>
          <img alt={combo[0].name} src={`images/${combo[0].image}`} style={{width: '100px'}} />
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