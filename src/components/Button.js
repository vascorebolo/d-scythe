import styled from 'styled-components'

const Button = styled.button `
  appearance: none;
  background: #bb3e1a;
  border-radius: calc(25px + 2.25vw);
  border: 0;
  color: #fff;
  cursor: pointer;
  font-family: 'Teko', sans-serif;
  font-size: calc(15px + 1.5vw);
  height: 4.5vw;
  margin-top: 40px;
  min-height: 50px;
  min-width: 30vw;
  letter-spacing: .8px;
  padding: 0 2.5vw;
  text-transform: uppercase;

  &:active,
  &:focus {
    outline: 0;
  }
`

export default Button