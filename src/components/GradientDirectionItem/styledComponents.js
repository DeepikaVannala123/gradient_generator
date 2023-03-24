// Style your elements here
import styled from 'styled-components/macro'

export const EachItem = styled.li`
  list-style-type: none;
  margin: 15px;
  text-align: center;
  padding: 20px;
  background-color: ${props => props.backgroundColor};
  color: #000;
  border-radius: 3px;
`

export const Button = styled.button`
  margin: 15px;
  font-size: 20px;
  border-width: 0px;
  border-radius: 3px;
  opacity: ${props => props.opacity};
`
