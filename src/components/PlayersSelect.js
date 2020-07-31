import React, { useContext } from 'react'
import PlayersContext from '../contexts/players.context'
import styled from 'styled-components'

const PlayersSelect = () => {
  const { players, changePlayers } = useContext(PlayersContext)
  const options = [2, 3, 4, 5]

  const handleChange = (e) => {
    changePlayers(e.target.value)
  }

  const renderOptions = () => {
    return options.map(option =>
      <RadioStyled key={option}>
        <input
          id={option}
          type="radio"
          name="players"
          value={option}
          onClick={handleChange}
          defaultChecked={players === option}
        />
        <label htmlFor={option}>{ option }</label>
      </RadioStyled>
    )
  }

  return (
    <RadiosWrapper>
      { renderOptions() }
    </RadiosWrapper>
  )
}

const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const RadioStyled = styled.div`
  input {
    display: none;
  }

  input[type=radio]:checked + label {
    background: #cf4e28;
    color: #fff;
  }

  label {
    cursor: pointer;
    width: 15vw;
    height: 15vw;
    border-radius: 50%;
    border: 1px solid #cf4e28;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #cf4e28;
    font-size: calc(15px + 7vw);
    transition: all 0.5s ease-in-out;

    &:not(first-child) {
      margin-left: 15px;
    }
  }
`

PlayersSelect.displayName = 'PlayersSelect'

export default PlayersSelect