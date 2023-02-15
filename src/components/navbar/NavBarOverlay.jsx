import ReactDom from "react-dom"


const Overlay = () => {
  return (<div className="nav-bar__overlay"></div>)
}

const NavBarOverlay = () => {
  return (
    ReactDom.createPortal(<Overlay/>, document.getElementById('navbar-overlay-id'))
  ) //
}

export default NavBarOverlay