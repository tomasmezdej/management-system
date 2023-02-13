import "../../assets/styles/global/card.scss"
const Card = (props) => {

  const className = `card ${props.className}`
  const style = {
    backgroundColor: props.backgroundColor || "#425C5A",
    color: "white"
  }

  return (
    <div className={className} style={style}>
      <div>
        { props.children }
      </div>
    </div>
  )
}

export default Card