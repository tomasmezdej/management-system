import { Flex, Icon } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

const NavBarElement = (props) => {
  const {
    identifier,
    selectedIdentifier,
    icon,
    title,
  } = props

  const [className, setClassName] = useState(identifier === selectedIdentifier ? "active" : "")

  useEffect(() => {
   setClassName(identifier === selectedIdentifier ? "active" : "")
  },[identifier ,selectedIdentifier])

  const handleMouseOver = () => {
    if (identifier !== selectedIdentifier) {
      setClassName('active')
    }
  }
  const handleMouseOut = () => {
    if (identifier !== selectedIdentifier) {
      setClassName('')
    }
  }
  const handleClick = () => {
    props.onClick(identifier)
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
          as={icon}
          boxSize={6}
          color="#BA9537"
        />
        { title }
      </Flex>
    </Flex>
  )
}

export default NavBarElement