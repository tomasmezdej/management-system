import { Flex, WrapItem, Avatar } from "@chakra-ui/react"
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
      justifyContent="center"
    >
      <WrapItem className="navbar__title_avatar_mobile" w="100%" alignItems="center" gap={2}>
        <Avatar size='sm' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
        <h1 className="">
          Alex Johnson
        </h1>
      </WrapItem>
      <Flex
        className="navbar__title_avatar_mobile_hidden"
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <WrapItem className="navbar__title_avatar">
          <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
        </WrapItem>
        <h1 className="navbar__title_name">
          Alex Johnson
        </h1>
        <h2 className="navbar__title_email">
          alex.johnson@gmail.com
        </h2>
      </Flex>
      <WrapItem w="100%" justifyContent="flex-end" className="navbar__hamburger_wrap">
        <GiHamburgerMenu
          className="navbar__hamburger"
          size={30}
          onClick={handleHamburgerClick}
        />
      </WrapItem>
    </Flex>
  )
}

export default NavBarTitle