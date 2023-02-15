import { Flex } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"

const NavBarTitle = (props) => {

  const handleHamburgerClick = () => {
    props.onHandleHamburgerClick()
  }

  return (
    <Flex
      className="navbar__title"
      style={props.style}
      justify="space-between"
    >
      <div>
        im title
      </div>
      <GiHamburgerMenu
        className="navbar__hamburger"
        size={30}
        onClick={handleHamburgerClick}
      />
    </Flex>
  )
}

export default NavBarTitle