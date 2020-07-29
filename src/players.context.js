import { createContext } from 'react'

export const PlayersContext = createContext({
  value: 2,
  changePlayers: () => {},
})

export default PlayersContext