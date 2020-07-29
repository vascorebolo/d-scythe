import { createContext } from 'react'

export const ExtensionContext = createContext({
  value: false,
  changeExtension: () => {},
})

export default ExtensionContext