import { Flex, Icon } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const NavBarElement = (props) => {

  const [className, setClassName] = useState(props.identifier === props.selectedIdentifier ? "active" : "")

  useEffect(() => {
   setClassName(props.identifier === props.selectedIdentifier ? "active" : "")
  },[props.selectedIdentifier])

  const handleMouseOver = () => {
    if (props.identifier !== props.selectedIdentifier) {
      setClassName('active')
    }
  }
  const handleMouseOut = () => {
    if (props.identifier !== props.selectedIdentifier) {
      setClassName('')
    }
  }
  const handleClick = () => {
    props.onClick(props.identifier)
  }
  return (
    <Flex
      className={`navbar__element ${className}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <Flex px={2} gap={3} className={className}>
        <Icon
          as={props.icon}
          boxSize={6}
          color="#BA9537"
        />
        { props.title }
      </Flex>
    </Flex>
  )
}

export default NavBarElement