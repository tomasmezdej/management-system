import { Flex } from "@chakra-ui/react"
import "../../assets/styles/global/navBar.scss"
import NavBarElement from "./NavBarElement"
import NavBarTitle from "./NavBarTitle"

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

const NavBar = (props) => {

  const [activeElement, setActiveElement] = useState(0)

  const handleChange = (identifier) => {
    setActiveElement(identifier)
  }

  return (
    <div className="nav-bar" style={props.style}>
      <Flex
        direction="column"
        h="100%"
      >
        <NavBarTitle
          style={props.style.title}
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
