import React, { useContext } from 'react'
import ExtensionContext from '../contexts/extension.context'

const ExtensionSelect = () => {
  const { extension, setExtension } = useContext(ExtensionContext)

  const handleChange = (e) => {
    setExtension(!extension)
  }

  return (
    <div>
        <label htmlFor="extension">Extension</label>
        <input
          id="extension"
          type="checkbox"
          name="extension"
          onClick={handleChange}
          defaultChecked={extension}
        />
      </div>
  )
}

ExtensionSelect.displayName = 'ExtensionSelect'

export default ExtensionSelect