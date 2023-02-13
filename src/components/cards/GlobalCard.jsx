import "../../assets/styles/cards/globalCard.scss"

const GlobalCard = (props) => {
  const className = `global-card ${props.className}`

  return (
    <div className={className} style={props.style}>
      { props.children }
    </div>
  )
}

export default GlobalCard