import { Flex } from "@chakra-ui/react"
import "../../assets/styles/global/navBar.scss"
import NavBarElement from "./NavBarElement"
import NavBarTitle from "./NavBarTitle"

import ReactDom from "react-dom"

import {
  GiFamilyHouse,
  GiCommercialAirplane,
  GiWallet,
} from "react-icons/gi"
import {
  ImNewspaper
} from "react-icons/im"
import {
  FaChartPie
} from "react-icons/fa"
import {
  IoMdSettings
} from "react-icons/io"
import { useState } from "react"
import NavBarOverlay from "./NavBarOverlay"

const NavBar = (props) => {

  const [activeElement, setActiveElement] = useState(0)
  const [navBarState, setNavBarState] = useState(false)

  const handleChange = (identifier) => {
    setActiveElement(identifier)
    setTimeout(() => {
      setNavBarState(false)
    }, 200);
  }

  const handleHamburgerClick = () => {
    setNavBarState((prevState) => {
      return !prevState
    })
  }

  const navbarStyle = {
    ...props.style,
    // height: navBarState ? "auto" : ""
  }

  const navbarClass = `nav-bar ${navBarState ? "nav-bar__open" : "nav-bar__close"}`

  return (
    <div className={navbarClass} style={navbarStyle}>
      {
        navBarState && <NavBarOverlay />
      }
      <Flex
        direction="column"
        h="100%"
      >
        <NavBarTitle
          style={props.style.title}
          onHandleHamburgerClick={handleHamburgerClick}
        />
        <NavBarElement
          identifier={0}
          selectedIdentifier={activeElement}
          icon={GiFamilyHouse}
          title="DASHBOARD"
          onClick={handleChange}
        />
        <NavBarElement
          identifier={1}
          selectedIdentifier={activeElement}
          icon={GiCommercialAirplane}
          title="FLIGHTS"
          onClick={handleChange}
        />
        <NavBarElement
          identifier={2}
          selectedIdentifier={activeElement}
          icon={GiWallet}
          title="WALLET"
          onClick={handleChange}
        />
        <NavBarElement
          identifier={3}
          selectedIdentifier={activeElement}
          icon={ImNewspaper}
          title="REPORTS"
          onClick={handleChange}
        />
        <NavBarElement
          identifier={4}
          selectedIdentifier={activeElement}
          icon={FaChartPie}
          title="STATISTICS"
          onClick={handleChange}
        />
        <NavBarElement
          identifier={5}
          selectedIdentifier={activeElement}
          icon={IoMdSettings}
          title="SETTINGS"
          onClick={handleChange}
        />
        <div className="navbar__spacer">.</div>
      </Flex>
    </div>
  )
}

export default NavBar
