// Write your code here
import {EachItem, Button} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onGetDirection, isActive} = props
  const {directionId, value, displayText} = directionDetails

  const activeClassName = isActive ? '#ededed' : '#ffffff79'
  const opacityValue = isActive ? 1 : 0.5

  const onClickDirection = () => {
    onGetDirection(value, directionId)
  }

  return (
    <EachItem backgroundColor={activeClassName} onClick={onClickDirection}>
      <Button opacity={opacityValue}>{displayText}</Button>
    </EachItem>
  )
}

export default GradientDirectionItem
