
import {Outlet} from "react-router-dom";
import { Box, Flex, Button } from '@chakra-ui/react'
import NavBar from "../components/global/NavBar";
import "../assets/styles/layouts/defaultLayout.scss"
import GlobalCard from "../components/global/GlobalCard";
import { useState } from "react"

const Default = () => {
  const [cardMode, setCardMode] = useState(true)

  const handelClick = () => {
    setCardMode((prevState) => {
      return !prevState
    })
  }


  // STYLING
  // xs sm md lg
  const flex = {
    flexDirection: ['column','row','row','row'],
    flexHeight: cardMode ? ['90vh', '90vh', '90vh', '90vh'] : ['100vh', '100vh', '100vh', '100vh'],
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
    padding: cardMode ? "4vh 6vw" : "0px"
  }
  const cardModeBorderRadius = {
    borderRadius: cardMode ? "25px" : "0px",
    backgroundColor: cardMode && "#E1ECEB"
  }
  const cardModeNavBorderRadius = {
    borderRadius: cardMode ? "25px" : "0px 25px 25px 0px",
  }

  return (
    <>
      <Button
        variant="text"
        className="global-card__floating_button"
        onClick={handelClick}
      >
        Toggle { cardMode ? "off" : "on" } Card mode
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
            >
              <NavBar
                style={cardModeNavBorderRadius}
              />
            </Box>
            <Box
              w={outlet.outletWidth}
              h={outlet.outletHeight}
            >
                <Outlet />
            </Box>
        </Flex>
      </GlobalCard>
    </>
  );
};

export default Default;

