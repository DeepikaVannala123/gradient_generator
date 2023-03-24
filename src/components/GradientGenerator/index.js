import {Component} from 'react'
import {
  AppContainer,
  ColorGenerateContainer,
  Heading,
  Text,
  ColorTextContainer,
  ChangeText,
  InputColorContainer,
  InputBox,
  ListDirectionContainer,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    colorText1: '#8ae323',
    colorText2: '#014f7b',
    backgroundColor1: '#8ae323',
    backgroundColor2: '#014f7b',
    value: 'top',
    activeOptionId: gradientDirectionsList[0].directionId,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value, colorText1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value, colorText2: event.target.value})
  }

  onClickGenerateColor = () => {
    const {color1, color2} = this.state
    this.setState({
      backgroundColor1: color1,
      backgroundColor2: color2,
    })
  }

  onGetDirection = (value, directionId) => {
    this.setState({value, activeOptionId: directionId})
  }

  renderColorGenerateContainer = () => {
    const {
      backgroundColor1,
      backgroundColor2,
      color1,
      color2,
      colorText1,
      colorText2,
      value,
      activeOptionId,
    } = this.state
    return (
      //
      <ColorGenerateContainer
        data-testid="gradientGenerator"
        value={value}
        backgroundColor1={backgroundColor1}
        backgroundColor2={backgroundColor2}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Text>Choose Direction</Text>
        <ListDirectionContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              key={each.directionId}
              directionDetails={each}
              onGetDirection={this.onGetDirection}
              isActive={activeOptionId === each.directionId}
            />
          ))}
        </ListDirectionContainer>
        <Text>Pick the Colors</Text>
        <ColorTextContainer>
          <ChangeText>{colorText1}</ChangeText>
          <ChangeText>{colorText2}</ChangeText>
        </ColorTextContainer>
        <InputColorContainer>
          <InputBox
            type="color"
            onChange={this.onChangeColor1}
            value={color1}
          />
          <InputBox
            type="color"
            onChange={this.onChangeColor2}
            value={color2}
          />
        </InputColorContainer>
        <GenerateButton onClick={this.onClickGenerateColor}>
          Generate
        </GenerateButton>
      </ColorGenerateContainer>
    )
  }

  render() {
    return <AppContainer>{this.renderColorGenerateContainer()}</AppContainer>
  }
}

export default GradientGenerator
