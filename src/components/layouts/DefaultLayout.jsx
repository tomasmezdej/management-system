
import {Outlet} from "react-router-dom";
import { Box, Flex, Button, Icon } from '@chakra-ui/react'
import NavBar from "../navbar/NavBar";
import "../../assets/styles/layouts/defaultLayout.scss"
import GlobalCard from "../cards/GlobalCard";

import { BsCreditCard2BackFill } from "react-icons/bs"

import { useSelector, useDispatch } from "react-redux"
import { changeCardMode } from "../../redux/actions/cardModeActions"

const DefaultLayout = () => {

  const dispatch = useDispatch()

  const cardMode = useSelector(state => state.cardMode)

  const handelClick = () => {
    dispatch(changeCardMode(cardMode))
  }


  // STYLING
  // xs sm md lg
  const flex = {
    flexDirection: ['column','row','row','row'],
    flexHeight: cardMode.payload ? ['100vh', '90vh', '90vh', '90vh'] : ['100vh', '100vh', '100vh', '100vh'],
  }
  const nav = {
    navWidth: ["100%", "100%", "25%", "15%"],
    navHeight: ['10%', '10%', '100%','100%']
  }
  const outlet = {
    outletWidth: ["100%", "100%", "75%", "85%"],
    outletHeight: ['100vh', '100vh', '100vh','100vh']
  }
  const cardModePadding = {
    padding: cardMode.payload ? "4vh 6vw" : "0px"
  }
  const cardModeBorderRadius = {
    borderRadius: cardMode.payload ? "25px" : "0px",
    backgroundColor: "#E1ECEB"
  }
  const cardModeNavBorderRadius = {
    borderRadius: "0px",
  }
  const cardModeTitleClass = cardMode.payload ? "nav-bar__cardMode" : ""


  return (
    <div className="default-layout__wrap">
      <Button
        variant="text"
        className="global-card__floating_button"
        onClick={handelClick}
      >
        <Icon
          as={BsCreditCard2BackFill}
          boxSize={8}
          color="#BA9537"
          size="50px"
        />
      </Button>
      <GlobalCard
        style={cardModePadding}
      >
        <Flex
          h={flex.flexHeight}
          direction={flex.flexDirection}
          className="default-layout"
          style={cardModeBorderRadius}
        >
            <Box
              w={nav.navWidth}
              h={nav.navHeight}
              className="navbar__wrap"
            >
              <NavBar
                style={cardModeNavBorderRadius}
                navbarTitleClassName={cardModeTitleClass}
              />
            </Box>
            <Box
              w={outlet.outletWidth}
              h={outlet.outletHeight}
              className="outlet__wrap"
            >
              <Outlet />
            </Box>
        </Flex>
      </GlobalCard>
    </div>
  )
}

export default DefaultLayout