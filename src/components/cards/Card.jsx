import "../../assets/styles/cards/card.scss"
const Card = (props) => {

  const className = `card ${props.className}`
  const style = {
    backgroundColor: props.backgroundColor || "#425C5A",
    color: "white",
  }

  return (
    <div className={className} style={style}>
      <img src={props.img} alt="" srcset="" />
      <div>
        { props.children }
      </div>
    </div>
  )
}

export default Card