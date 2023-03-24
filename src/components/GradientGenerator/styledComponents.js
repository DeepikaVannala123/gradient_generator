// Style your elements here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  display: flex;
  padding: 30px;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const ColorGenerateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center
  width: 100%;
  background-image: linear-gradient(
    to ${props => props.value},
    ${props => props.backgroundColor1},
    ${props => props.backgroundColor2}
  );
  max-width: 550px;
  padding-top: 32px;
  padding-right: 24px;
  padding-bottom: 32px;
  padding-left: 24px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1140px;
    background-image: linear-gradient(
      to ${props => props.value},
      ${props => props.color1},
      ${props => props.color2}
    );
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: #fff;
  @media screen and (min-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`
export const Text = styled.p`
  margin: 15px;
  font-size: 20px;
  color: #fff;
`
export const ColorTextContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
`
export const ChangeText = styled.p`
  font-size: 20px;
  font-weight: 800;
  color: #fff;
  margin-top: 30px;
  margin-left: 100px;
`

export const InputColorContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
`
export const InputBox = styled.input`
  border-width: 0px;
  height: 8vh;
  width: 10vw;
  opacity: 0.5;
  margin: 30px;
`
export const ListDirectionContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const GenerateButton = styled.button`
  border-width: 0px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 100px;
  color: #1e293b;
  font-weight: 900;
  margin: 20px;
  background-color: #00c9b7;
  height: 5vh;
  width: 8vw;
  text-align: center;
`
