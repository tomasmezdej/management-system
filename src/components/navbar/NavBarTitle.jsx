import { Flex } from "@chakra-ui/react"
import { GiHamburgerMenu } from "react-icons/gi"

/* import { modeCard } from "../../store/actions/modeCard";
import { modeFullscreen } from "../../store/actions/modeFullscreen"; */

const NavBarTitle = (props) => {/*

  const mapStateToProps = state => ({
    ...state
  });

  const mapDispatchToProps = dispatch => ({
    startAction: () => dispatch(modeCard),
    stopAction: () => dispatch(modeFullscreen)
  }); */

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