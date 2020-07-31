import React, { useContext } from 'react'
import ExtensionContext from '../contexts/extension.context'
import styled from 'styled-components'

const ExtensionSelect = () => {
  const { extension, setExtension } = useContext(ExtensionContext)

  const handleChange = (e) => {
    setExtension(!extension)
  }

  return (
    <ExtensionSelectWrapper>
      <p>Invaders from afar</p>
      <input
        id="extension"
        type="checkbox"
        name="extension"
        onClick={handleChange}
        defaultChecked={extension}
      />
      <label htmlFor="extension"><span></span></label>
    </ExtensionSelectWrapper>
  )
}

const ExtensionSelectWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  input {
    display: none;
  }

  p {
    font-size: 25px;
  }

  label {
    border-radius: 25px;
    border: 1px solid #bb3e1a;
    display: inline-block;
    height: 50px;
    margin-left: 10px;
    position: relative;
    width: 100px;

    span {
      background: #bb3e1a;
      border-radius: 50%;
      color: white;
      content: '';
      display: block;
      height: 50px;
      left: 0;
      opacity: 0.5;
      position: absolute;
      transition: all 0.2s ease-in-out;
      width: 50px;
    }
  }

  input[type=checkbox]:checked + label span {
    left: 50%;
    opacity: 1;
  }
`

ExtensionSelect.displayName = 'ExtensionSelect'

export default ExtensionSelect